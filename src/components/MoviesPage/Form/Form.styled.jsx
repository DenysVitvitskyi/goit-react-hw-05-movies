import styled from '@emotion/styled';

const FormStyled = styled.form`
  margin-bottom: 15px;
  max-width: 400px;
  display: flex;
  gap: 2px;
`;

const Input = styled.input`
  flex-grow: 1;
  padding: 3px 10px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  transition: border-color 200ms linear, box-shadow 200ms linear;
  &:focus {
    outline: none;
    border: 1px solid aqua;
    box-shadow: 0 0 0 1px aqua;
  }
`;

const Button = styled.button`
  padding: 3px 10px;
  background-color: whitesmoke;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  cursor: pointer;
  transition: box-shadow 100ms linear;
  &:hover,
  &:focus {
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1) inset;
  }
`;

export { FormStyled, Input, Button };