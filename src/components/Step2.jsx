import React from 'react';
import MainContainer from "./MainContainer";
import Form from "./Form";
import {Box, Typography} from "@mui/material";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import NextButton from "./UI/button/NextButton";
import PreviousButton from "./UI/button/PreviousButton";
import Input from "./UI/input/Input";
import {useData} from "./DataContext";

const schema = yup.object({
  city: yup
    .string()
    .required('Сity is required field')
    .matches(/^([^0-9]*)$/, 'Сity name should not contain numbers'),
  street: yup
    .string()
    .required('Street is required field')
    .matches(/^([^0-9]*)$/, 'Street name should not contain numbers'),
  houseNumber: yup
    .string()
    .required('House number is required field')
    .matches(/^[1-9]\d*$/, 'House number must be a positive integer')
}).required();

const Step2 = ({setStep}) => {
  const {data, setValues} = useData();
  const {register, handleSubmit, formState: {errors}} = useForm({
    defaultValues: {city: data.city, street: data.street, houseNumber: data.houseNumber},
    mode: "onBlur",
    resolver: yupResolver(schema)
  });

  const onClick = () => {
    setStep(1);
  };

  const onSubmit = (data) => {
    setValues(data);
    setStep(3);
  };

  return (
    <MainContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Typography sx={{marginBottom: '10px'}} component="h2" variant="h5">Step: 2</Typography>
        <Input
          {...register('city')}
          label="Сity"
          type="text"
          required
          error={!!errors.city}
          helperText={errors?.city?.message}
        />
        <Input
          {...register('street')}
          label="Street"
          type="text"
          required
          error={!!errors.street}
          helperText={errors?.street?.message}
        />
        <Input
          {...register('houseNumber')}
          label="House number"
          type="number"
          required
          error={!!errors.houseNumber}
          helperText={errors?.houseNumber?.message}
        />
        <Box sx={{display: 'flex', justifyContent: 'center', columnGap: '10px'}}>
          <PreviousButton onClick={onClick}>Previous</PreviousButton>
          <NextButton>Next</NextButton>
        </Box>
      </Form>
    </MainContainer>
  );
};

export default Step2;
