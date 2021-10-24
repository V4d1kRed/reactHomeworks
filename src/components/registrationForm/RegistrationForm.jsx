import React from 'react';
import {Button, TextField} from "@mui/material";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useDispatch} from "react-redux";
import {addCurrentParticipantAction} from "../../actions/participantsActions";
import {openModalAction} from "../../actions/modalActions";

const schema = yup.object({
  firstName: yup
    .string()
    .required('First name is required field')
    .matches(/^[a-zA-Z.\-_$@*!]{1,15}$/, 'First name should correct format'),
  secondName: yup
    .string()
    .required('Second name is required field')
    .matches(/^[a-zA-Z.\-_$@*!]{1,15}$/, 'Second name should correct format'),
}).required();

const RegistrationForm = () => {
  const {register, handleSubmit, reset, formState: {errors}} = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const currentParticipant = {
      ...data,
      id: Math.floor(100000 + Math.random() * 900000),
    };
    dispatch(addCurrentParticipantAction(currentParticipant));
    dispatch(openModalAction());
    reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="form__title">
        Registration form
      </h1>
      <TextField
        fullWidth
        type="text"
        size="small"
        label="Enter first name..."
        {...register("firstName")}
        error={!!errors.firstName}
        helperText={errors?.firstName?.message}
      />
      <TextField
        fullWidth
        type="text"
        size="small"
        label="Enter second name..."
        {...register("secondName")}
        error={!!errors.secondName}
        helperText={errors?.secondName?.message}
      />
      <Button fullWidth variant="contained" color="success" type="submit">
        Register participant
      </Button>
    </form>
  );
};

export default RegistrationForm;
