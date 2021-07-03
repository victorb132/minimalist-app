import React, { useState } from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { InputForm } from '../../components/Forms/InputForm';
import { Button } from '../../components/Forms/Button';

import avatar from '../../../assets/avatar.png';

import {
  Container,
  Header,
  ProfileAvatar,
  AvatarImage,
  Form,
  TitlePage,
} from './styles';

const schema = Yup.object().shape({
  title: Yup
    .string()
    .required('Tarefa é obrigatório'),
})

export function MiniTask() {

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

      <TitlePage>Cadastrar nova tarefa</TitlePage>

      <Form>
        <InputForm
          name="task"
          control={control}
          placeholder="Tarefa"
          autoCapitalize="sentences"
          autoCorrect={false}
          error={errors.name && errors.name.message}
        />

        <Button title="Salvar" onPress={() => { }} />
      </Form>

    </Container>
  );
}