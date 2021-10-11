import React from 'react';
import MainContainer from "./MainContainer";
import {Box, Typography} from "@mui/material";
import {useData} from "./DataContext";
import DataList from "./DataList";

const Result = () => {
  const {data} = useData();

  return (
    <MainContainer>
      <Box sx={{
        border: '2px black solid',
        borderRadius: '10px',
        padding: '20px 40px',
        width: '100%'
      }}>
        <Typography sx={{marginBottom: '10px'}} component="h2" variant="h5">Thank you for registering</Typography>
         <img src={data.urlImage} alt="Avatar" style={{margin: '20px auto', width: '50%', borderRadius: '50%'}}/>
        <Typography component="p" variant="h6">Contact Information</Typography>
        <DataList data={data}/>
      </Box>
    </MainContainer>
  );
};

export default Result;
