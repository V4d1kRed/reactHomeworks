import React, {useState} from 'react';
import MainContainer from "./MainContainer";
import Form from "./Form";
import {Box, TextField, Typography} from "@mui/material";
import PreviousButton from "./UI/button/PreviousButton";
import NextButton from "./UI/button/NextButton";
import {useForm} from "react-hook-form";
import avatar from '../images/default-avatar.png';
import {useData} from "./DataContext";

const Step3 = ({setStep}) => {
  const {setValues} = useData();
  const [urlImage, setUrlImage] = useState(avatar);
  const {handleSubmit} = useForm();

  const onClick = () => {
    setStep(2);
  };

  const onSubmit = (data) => {
    setValues({...data, urlImage: urlImage})
    setStep(4);
  };

  const readFile = (e) => {
    let file = e.target.files[0];
    let reader = new FileReader();

    reader.onload = (e) => {
      setUrlImage(e.target.result);
    };

    reader.readAsDataURL(file);
  };

  return (
    <MainContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Typography sx={{marginBottom: '10px'}} component="h2" variant="h5">Step: 3</Typography>
        <TextField
          onChange={e => readFile(e)}
          name="upload-photo"
          type="file"
        />
        <img
          src={urlImage}
          alt="Avatar"
          style={{
            margin: '20px auto',
            width: '50%',
            borderRadius: '50%'}}
        />
        <Box sx={{display: 'flex', justifyContent: 'center', columnGap: '10px'}}>
          <PreviousButton onClick={onClick}>Previous</PreviousButton>
          <NextButton>Next</NextButton>
        </Box>
      </Form>
    </MainContainer>
  );
};

export default Step3;
