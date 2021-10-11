import React from 'react';
import MainContainer from "./MainContainer";
import Form from "./Form";
import {Box, Typography} from "@mui/material";
import PreviousButton from "./UI/button/PreviousButton";
import NextButton from "./UI/button/NextButton";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import Input from "./UI/input/Input";
import {useData} from "./DataContext";

const schema = yup.object({
  password: yup
    .string()
    .required('Password is required field')
    .min(8, 'Password must be at least 8 characters'),
  repeatPassword: yup
    .string()
    .required('Repeat password is required field')
    .oneOf([yup.ref('password')], 'Passwords must match')
}).required();

const Step4 = ({setStep}) => {
  const {setValues} = useData();
  const {register, handleSubmit, formState: {errors}} = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema)
  });

  const onClick = () => {
    setStep(3);
  };

  const onSubmit = (data) => {
    setValues(data);
    setStep(5);
  };

  return (
    <MainContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Typography sx={{marginBottom: '10px'}} component="h2" variant="h5">Step: 4</Typography>
        <Input
          {...register('password')}
          label="Password"
          type="password"
          required
          error={!!errors.password}
          helperText={errors?.password?.message}
        />
        <Input
          {...register('repeatPassword')}
          label="Repeat password"
          type="password"
          required
          error={!!errors.repeatPassword}
          helperText={errors?.repeatPassword?.message}
        />
        <Box sx={{display: 'flex', justifyContent: 'center', columnGap: '10px'}}>
          <PreviousButton onClick={onClick}>Previous</PreviousButton>
          <NextButton>Next</NextButton>
        </Box>
      </Form>
    </MainContainer>
  );
};

export default Step4;
