import React, { useState } from 'react';
import styled from 'styled-components';
import {Input} from './Input';

const PasswordInputStyled = styled(Input)`
  border-top-right-radius: o;
  border-bottom-right-radius: o;
`

const PasswordInput = (props) => {
  const [showPassword, setShowPassword] = useState(false)

  return(
    <PasswordInputStyled {...props}/>
  )
}

export {PasswordInput};