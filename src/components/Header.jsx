import React from 'react';
import CustomInput from "./UI/input/CustomInput";
import CustomSelect from "./UI/select/CustomSelect";
import CustomButton from "./UI/button/CustomButton";

const Header = ({filter, setFilter}) => {
  const resetFilter = () => {
    setFilter({
      name: '',
      age: ''
    });
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__body">
          <CustomInput
            onChange={event => setFilter({...filter, name: event.target.value})}
            value={filter.name}
            type="search"
            placeholder="Search by name"
          />
          <CustomSelect
            onChange={value => setFilter({...filter, age: value})}
            value={filter.age}
            defaultValue="Sort by age"
            options={['Descending', 'Ascending']}
          />
          <CustomButton onClick={resetFilter} style={{backgroundColor: 'tomato'}}>Reset</CustomButton>
        </div>
      </div>
    </header>
  );
};

export default Header;
