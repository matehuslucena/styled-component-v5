import PageLayout from "components/common/PageLayout";
import Input from "components/common/Input";
import React from "react";
import styled from 'styled-components';

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background: white;
  border: 1px solid #eee;
  padding: 16px;
  box-sizing: border-box;
  color: black;
  border-radius: 4px;
`;


const Login = () => {
  return (
    <PageLayout>
      <h1>Login</h1>
      <Form>
        <Input name='username' placeholder='Username' />
      </Form>
    </PageLayout>
  );
};

export default Login;