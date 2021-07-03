import React, { useState } from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { InputForm } from '../../components/Forms/InputForm';
import { Button } from '../../components/Forms/Button';
import { CategorySelectButton } from '../../components/Forms/CategorySelectButton';

import avatar from '../../../assets/avatar.png';

import {
  Container,
  Header,
  ProfileAvatar,
  AvatarImage,
  Form,
  TitlePage,
  ModalCategory,
  ContainerCategory,
  TransactionsTypes
} from './styles';
import { TransactionTypeButton } from '../../components/Forms/TransactionTypeButton';

const schema = Yup.object().shape({
  name: Yup
    .string()
    .required('Nome é obrigatório'),

  amount: Yup
    .number()
    .typeError('Informe um valor numérico')
    .positive('O valor não pode ser negativo')
    .required('O valor é obrigatório'),
})

export function Habits() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [transactionType, setTransactionType] = useState('run');

  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria'
  });

  function handleTransactionsTypeSelect(type: 'run' | 'book') {
    setTransactionType(type)
  }

  function toggleModal() {
    setModalVisible(!isModalVisible);
    setCategory({
      key: transactionType,
      name: transactionType === 'run' ? 'Exercício' : 'Leitura'
    })
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(schema)
  })

  return (
    <Container>
      <Header>
        <ProfileAvatar>
          <AvatarImage source={avatar} />
        </ProfileAvatar>
      </Header>

      <TitlePage>Cadastrar novo hábito</TitlePage>

      <Form>
        <InputForm
          name="title"
          control={control}
          placeholder="Título"
          autoCapitalize="sentences"
          autoCorrect={false}
          error={errors.name && errors.name.message}
        />
        <InputForm
          name="times"
          control={control}
          placeholder="Quantas vezes ao dia?"
          keyboardType="number-pad"
          error={errors.name && errors.name.message}
        />
        <InputForm
          name="timer"
          control={control}
          placeholder="Quanto tempo cada vez?"
          keyboardType="number-pad"
          error={errors.name && errors.name.message}
        />
        <CategorySelectButton
          title={category.name}
          onPress={toggleModal}
        />

        <Button title="Salvar" onPress={() => { }} />
      </Form>

      <ModalCategory isVisible={isModalVisible}>
        <ContainerCategory>
          <TransactionsTypes>
            <TransactionTypeButton
              type="run"
              title="Exercício"
              onPress={() => handleTransactionsTypeSelect('run')}
              isActive={transactionType === 'run'}
            />
            <TransactionTypeButton
              type="book"
              title="Leitura"
              onPress={() => handleTransactionsTypeSelect('book')}
              isActive={transactionType === 'book'}
            />
          </TransactionsTypes>
          <Button
            title="Selecionar"
            onPress={toggleModal}
          />
        </ContainerCategory>
      </ModalCategory>

    </Container>
  );
}