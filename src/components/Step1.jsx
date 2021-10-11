import React from 'react';
import Form from "./Form";
import Input from "./UI/input/Input";
import NextButton from "./UI/button/NextButton";
import MainContainer from "./MainContainer";
import {useForm} from "react-hook-form";
import {Box, Typography} from "@mui/material";
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from "yup";
import {useData} from "./DataContext";

const schema = yup.object({
  name: yup
    .string()
    .required('Name is required field')
    .matches(/^([^0-9]*)$/, 'Name should not contain numbers'),
  surname: yup
    .string()
    .required('Surname is required field')
    .matches(/^([^0-9]*)$/, 'Surname should not contain numbers'),
  email: yup
    .string()
    .required('Email is required field')
    .email('Email should correct format')
}).required();

const Step1 = ({setStep}) => {
  const {data, setValues} = useData();
  const {register, handleSubmit, formState: {errors}} = useForm({
    defaultValues: {name: data.name, surname: data.surname, email: data.email},
    mode: "onBlur",
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    setValues(data);
    setStep(2);
  };

  return (
    <MainContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Typography sx={{marginBottom: '10px'}} component="h2" variant="h5">Step: 1</Typography>
        <Input
          {...register('name')}
          label="Name"
          type="text"
          required
          error={!!errors.name}
          helperText={errors?.name?.message}
        />
        <Input
          {...register('surname')}
          label="Surname"
          required
          type="text"
          error={!!errors.surname}
          helperText={errors?.surname?.message}
        />
        <Input
          {...register('email')}
          label="Email"
          required
          type="email"
          error={!!errors.email}
          helperText={errors?.email?.message}
        />
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
          <NextButton>Next</NextButton>
        </Box>
      </Form>
    </MainContainer>
  );
};

export default Step1;
