import styled from '@emotion/styled';

export const List = styled.ul``;

export const Item = styled.li`
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0px;
  }
`;

export const Data = styled.span`
  margin-right: 10px;
`;

export const DeleteButton = styled.button`
  font-size: 14px;
  padding: 5px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  border-radius: 10px;
  background-color: #f5f4f2;
  &:hover,
  &:focus {
    background-color: #e0e0de;
  }
`;
