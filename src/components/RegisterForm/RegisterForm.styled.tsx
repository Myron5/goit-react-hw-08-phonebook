import { other } from '../../constants';
import styled from 'styled-components';

export const RegisterFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  width: 300px;
  margin: 150px auto 0;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  box-shadow: ${other.boxShadow};
  border: ${other.border};
`;

export const Button = styled.button`
  padding: 10px 20px;
  margin-top: 30px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;
