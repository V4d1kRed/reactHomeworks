import React, {Fragment, useState} from "react";
import './styles/App.css';
import Title from "./components/Title";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import Result from "./components/Result";
import {Box, Button} from "@mui/material";
import stylesDarkTheme from "./scripts/darkTheme";

const style = document.createElement('style');
document.head.append(style);

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [step, setStep] = useState(1);

  const showStep = (step) => {
    switch (step) {
      case 1:
        return <Step1 setStep={setStep}/>;
      case 2:
        return <Step2 setStep={setStep}/>;
      case 3:
        return <Step3 setStep={setStep}/>;
      case 4:
        return <Step4 setStep={setStep}/>;
      case 5:
        return <Result/>;
      default:
        return <Step1 setStep={setStep}/>;
    }
  };

  const switchDarkTheme = () => {
    setDarkTheme(true);
    style.textContent = stylesDarkTheme;
  };

  const switchLightTheme = () => {
    setDarkTheme(false);
    style.textContent = '';
  };

  return (
    <Fragment>
      {
        darkTheme
          ? <Button style={{
            position: 'absolute',
            top: 10,
            right: 10
          }} variant="contained" onClick={switchLightTheme}>Light theme</Button>
          : <Button style={{
            position: 'absolute',
            top: 10,
            right: 10
          }} variant="contained" onClick={switchDarkTheme}>Dark theme</Button>
      }
      <Title/>
      <Box>
        {showStep(step)}
      </Box>
    </Fragment>
  );
}

export default App;
