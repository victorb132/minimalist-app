import React from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { InputForm } from '../../components/Forms/InputForm';

import {
  Container,
  Header,
  ProfileAvatar,
  AvatarImage,
  Form
} from './styles';

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
          <AvatarImage source={{ uri: 'https://avatars.githubusercontent.com/u/32309553?v=4' }} />
        </ProfileAvatar>
      </Header>

      <Form>
        <InputForm 
          name="name"
          control={control}
          placeholder="Nome"
          autoCapitalize="sentences"
          autoCorrect={false}
          error={errors.name && errors.name.message}
        />
        <InputForm 
          name="name"
          control={control}
          placeholder="Nome"
          autoCapitalize="sentences"
          autoCorrect={false}
          error={errors.name && errors.name.message}
        />
      </Form>
    </Container>
  );
}