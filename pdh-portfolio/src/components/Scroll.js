import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { AiOutlineUp } from 'react-icons/ai';

const IconButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #353b4e;
  position: fixed;
  bottom: 100px;
  right: 5%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  border: none;
  outline: 0;
  font-weight: bold;
  z-index: 1;
  &:hover {
    background: lightgray;
  }
`;

function Scroll({ showBelow }) {
  const [show, setShow] = useState(showBelow ? false : true);

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll);
      return () => window.removeEventListener(`scroll`, handleScroll);
    }
  }, []);

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` });
  };
  return (
    <>
      {show && (
        <IconButton onClick={handleClick}>
          <AiOutlineUp />
        </IconButton>
      )}
    </>
  );
}

export default Scroll;
