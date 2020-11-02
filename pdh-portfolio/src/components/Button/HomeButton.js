import React from 'react';
import styled from 'styled-components';
import { BsFillHouseDoorFill } from 'react-icons/bs';

const IconButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #353b4e;
  position: fixed;
  bottom: 5vh;
  right: 9%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  border: none;
  outline: 0;
  z-index: 1;
  box-shadow: 5px 5px 20px 0 rgba(0, 0, 0, 0.5);
  &:hover {
    background: lightgray;
    color: #353b4e;
    cursor: pointer;
    box-shadow: 5px 5px 20px 0 rgba(0, 0, 0, 0.5);
  }
`;

function HomeButton() {
  return (
    <>
      <IconButton>
        <BsFillHouseDoorFill />
      </IconButton>
    </>
  );
}

export default HomeButton;
