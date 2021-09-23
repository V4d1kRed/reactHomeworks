import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import CustomInput from "./UI/input/CustomInput";
import CustomButton from "./UI/buttom/CustomButton";
import CustomSelect from "./UI/select/CustomSelect";

const AddNewUser = ({create}) => {
  const [user, setUser] = useState({
    name: '',
    age: '',
    gender: '',
    balance: ''
  });


  const addNewUser = (event) => {
    event.preventDefault();
    const newUser = {
      ...user, _id: uuidv4(), picture: 'http://placehold.it/32x32'
    };
    create(newUser);
    setUser({
      name: '',
      age: '',
      gender: '',
      balance: ''
    });
  };

  return (
    <form className="form">
      <div className="container">
        <div className="form__body">
          <h1 className="form__title">Add new user 🐒</h1>
          <CustomInput
            onChange={event => setUser({...user, name: event.target.value})}
            type="text"
            value={user.name}
            placeholder="Enter full name"/>
          <CustomInput
            onChange={event => setUser({...user, age: event.target.value})}
            type="number"
            value={user.age}
            placeholder="Enter age"/>
          <CustomSelect
            onChange={value => setUser({...user, gender: value})}
            value={user.gender}
            options={['male', 'female']}
            defaultValue="Select a gender"
          />
          <CustomInput
            onChange={event => setUser({...user, balance: event.target.value})}
            type="number"
            value={user.balance}
            placeholder="Enter balance"/>
          <CustomButton onClick={addNewUser}>Add</CustomButton>
        </div>
      </div>
    </form>
  );
};

export default AddNewUser;
