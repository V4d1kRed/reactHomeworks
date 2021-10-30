import React from 'react';
import * as yup from "yup";
import {Box, Button, TextField} from "@mui/material";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addCompetitionAction} from "../../store/actions/competitionsActions";

const schema = yup.object({
  name: yup
    .string()
    .required('Competition name is required field')
    .matches(/^\S+[A-z](?: \S+)*$/, 'Competition name should be correct format'),
}).required();

const AddForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {register, handleSubmit, reset, formState: {errors}} = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    const competition = {
      ...data,
      id: Math.floor(100000 + Math.random() * 900000),
      status: false
    }
    dispatch(addCompetitionAction(competition));
    history.push('/');
    reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="form__title">Create competition</h1>
      <TextField
        fullWidth
        type="text"
        size="small"
        label="Enter competition name..."
        {...register("name")}
        error={!!errors.name}
        helperText={errors?.name?.message}
      />
      <Box sx={{display: 'flex', columnGap: '15px'}}>
        <Button fullWidth variant="contained" color="error" onClick={() => history.push('/')}>
          Cancel
        </Button>
        <Button fullWidth variant="contained" color="success" type="submit">
          Create
        </Button>
      </Box>
    </form>
  );
};

export default AddForm;
