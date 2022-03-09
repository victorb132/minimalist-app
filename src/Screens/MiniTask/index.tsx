import React, { useState } from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import uuid from 'react-native-uuid';

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

interface FormData {
  title: string;
}

const schema = Yup.object().shape({
  title: Yup
    .string()
    .required('Tarefa é obrigatório'),
})

export function MiniTask() {
  const navigation = useNavigation();

  const storageKey = '@minimalistapp:task_user'

  async function handleRegister(form: FormData) {

    if(form.title === '') {
      return Alert.alert('Digite um tarefa');
    }

    const newTask = {
      id: String(uuid.v4()),
      checked: false,
      title: form.title,
      date: new Date()
    }

    try {

      const dataKey = `${storageKey}:userId`;

      const data = await AsyncStorage.getItem(dataKey);
      const currentData = data ? JSON.parse(data) : [];

      const dataFormatted = [
        ...currentData,
        newTask
      ];

      await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormatted))

      reset();

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

      <TitlePage>Cadastrar nova tarefa</TitlePage>

      <Form>
        <InputForm
          name="title"
          control={control}
          placeholder="Tarefa"
          autoCapitalize="sentences"
          autoCorrect={false}
          error={errors.name && errors.name.message}
        />

        <Button title="Salvar" onPress={handleSubmit(handleRegister)} />
      </Form>

    </Container>
  );
}