import React, { useState } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import uuid from 'react-native-uuid';

import { InputForm } from '../../components/Forms/InputForm';
import { Button } from '../../components/Forms/Button';
import { CategorySelectButton } from '../../components/Forms/CategorySelectButton';
import { TransactionTypeButton } from '../../components/Forms/TransactionTypeButton';

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

const schema = Yup.object().shape({
  title: Yup
    .string()
    .required('Título é obrigatório'),

  times: Yup
    .number()
    .typeError('Informe um valor numérico')
    .positive('O valor não pode ser negativo')
    .required('O valor é obrigatório'),
})

interface FormData {
  title: string;
  times: string;
  timer: string;
}

export function Habits() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [transactionType, setTransactionType] = useState('run');
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria'
  });

  const navigation = useNavigation();

  function handleTransactionsTypeSelect(type: 'run' | 'book' | 'other') {
    console.log('AQUI type', type)
    setTransactionType(type)
  }

  function toggleModal() {
    setModalVisible(!isModalVisible);
    if(transactionType === 'run') {
      setCategory({
        key: transactionType,
        name: 'Exercício'
      })
    } else if(transactionType === 'book') {
      setCategory({
        key: transactionType,
        name: 'Leitura'
      })
    } else {
      setCategory({
        key: transactionType,
        name: 'Outro'
      })
    }
  };

  const storageKey = '@minimalistapp:habits_user'

  async function handleRegister(form: FormData) {

    if(category.key === 'category') {
      return Alert.alert('Selecione a categoria');
    }

    const newHabit = {
      id: String(uuid.v4()),
      title: form.title,
      times: form.times,
      timesDone: 0,
      timer: form.timer,
      type: transactionType,
      category: category.key,
      date: new Date()
    }

    try {

      const dataKey = `${storageKey}:userId`;

      const data = await AsyncStorage.getItem(dataKey);
      const currentData = data ? JSON.parse(data) : [];

      const dataFormatted = [
        ...currentData,
        newHabit
      ];

      await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormatted))

      reset();
      setTransactionType('run');
      setCategory({
        key: 'category',
        name: 'Categoria',
      });

      navigation.navigate('Home')

    } catch (error) {
      console.log(error);
      Alert.alert('Não foi possível salvar');
    }

  }

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

        <Button title="Salvar" onPress={handleSubmit(handleRegister)} />
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
            <TransactionTypeButton
              type="other"
              title="Outro"
              onPress={() => handleTransactionsTypeSelect('other')}
              isActive={transactionType === 'other'}
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