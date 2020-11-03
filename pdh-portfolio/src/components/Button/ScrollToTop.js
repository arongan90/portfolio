import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { BsShiftFill } from 'react-icons/bs';

const IconButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #353b4e;
  position: fixed;
  bottom: 5vh;
  right: 3%;
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

function ScrollToTop({ showBelow }) {
  const [show, setShow] = useState(showBelow ? false : true);

  const handleScroll = useCallback(() => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  }, [show, showBelow]);

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` });
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll);
      return () => window.removeEventListener(`scroll`, handleScroll);
    }
  }, [showBelow, handleScroll]);

  return (
    <>
      {show && (
        <IconButton onClick={handleClick}>
          <BsShiftFill />
        </IconButton>
      )}
    </>
  );
}

export default ScrollToTop;
