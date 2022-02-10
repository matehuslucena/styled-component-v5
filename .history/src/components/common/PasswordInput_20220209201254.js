import React, { useState } from 'react';
import styled from 'styled-components';
import {Input} from './Input';

const PasswordInputStyled = styled(Input).attrs(() => {
  type: 'password',
  placeholder: "Password"
})`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`

const PasswordInput = (props) => {
  const [showPassword, setShowPassword] = useState(false)

  return(
    <PasswordInputStyled {...props}/>
  )
}

export {PasswordInput};