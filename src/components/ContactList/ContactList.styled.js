import styled from '@emotion/styled';

export const List = styled.ul`
  list-style: circle;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  column-gap: 10px;

  width: 400px;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0px;
  }
`;

export const Name = styled.span`
  flex-basis: calc(100% / 3);
  font-weight: 500;
`;

export const Phone = styled.span`
  flex-basis: calc(100% / 3);
  margin-right: 10px;
`;

export const DeleteButton = styled.button`
  flex-basis: 100px;
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
