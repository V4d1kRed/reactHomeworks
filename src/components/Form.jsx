import React from 'react';

const Form = ({children, ...props}) => {
  const styles = {
    border: '2px black solid',
    borderRadius: '10px',
    padding: '20px 40px',
    width: '100%'
  };

  return (
    <form style={styles} noValidate {...props}>
      {children}
    </form>
  );
};

export default Form;
