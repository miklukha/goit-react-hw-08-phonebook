import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  width: 400px;
  padding: 10px;
  margin-bottom: 20px;

  border: 1px solid #3d3d3d;
  border-radius: 5px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  font-size: 20px;
`;

export const Input = styled.input`
  font-size: 14px;

  width: 200px;
  height: 30px;

  padding-left: 10px;
  margin-bottom: 20px;

  border: 1px solid #cccccc;
  border-radius: 10px;

  &:hover,
  &:focus {
    outline: none;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }
`;

export const Button = styled.button`
  font-size: 14px;
  width: 100px;
  height: 30px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  border-radius: 10px;
  background-color: #f5f4f2;

  &:hover,
  &:focus {
    background-color: #e0e0de;
  }
`;

export const Error = styled.p`
  font-size: 12px;
  color: #bf1650;
  margin-bottom: 10px;

  &::before {
    display: inline;
    content: '⚠ ';
  }
`;
