import React, { useState } from 'react';
import styled from 'styled-components';
import {Input} from './Input';

const PasswordInputStyled = styled(Input).attrs(() => ({
  type: 'password',
  placeholder: "Password"
}))`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

const PasswordInputWrapper = styled.div`
  display: flex;
  //get the next sibling
  ~div:{
    margin-bottom: 8px;
  }
`;

const ToggleButton = styled.div`
  height: 40px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  font-size: 0.9em;
  display: flex;
  padding: 8px;
  border-left: 0;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background: white;
  font-weight: bold;
  cursor: pointer;
  user-select: none;
  color: black;
`;

const PasswordInput = (props) => {
  const [showPassword, setShowPassword] = useState(false)

  return(
    <>
      <PasswordInputWrapper>
        <PasswordInputStyled {...props}/>
        <ToggleButton onClick={() => setShowPassword(s => !s)}>
          {showPassword ? 'Hide' : 'Show'}
        </ToggleButton>
        </PasswordInputWrapper>
        <div>
          {showPassword ? props.value : ''}
        </div>
    </>
  )
}

export {PasswordInput};