import React from 'react';
import styled from 'styled-components';

const ContactBlock = styled.div`
  width: 100%;
  height: 750px;
  background: #2d3038;
  p {
    font-size: 3rem;
    color: white;
    text-align: center;
    margin-bottom: 60px;
  }
  .number {
    color: #959daa;
    margin-right: 15px;
  }
`;

const ContactContent = styled.div`
  width: 860px;
  height: 500px;
  background: #292d3b;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    font-size: 1.5rem;
    color: white;
    margin: 0;
    margin-bottom: 30px;
  }
  b {
    display: inline-block;
    width: 200px;
  }
  .text {
    display: inline-block;
    width: 200px;
  }
`;

function Contact() {
  return (
    <ContactBlock id="contact">
      <ContactContent>
        <p>
          <span className="number">05</span>CONTACT
        </p>
        <div>
          <b>PHONE</b>
          <span className="text">010-9811-0022</span>
        </div>
        <div>
          <b>E-MAIL</b>
          <span className="text">arongan90@gmail.com</span>
        </div>
        <div>
          <b>HOME PAGE</b>
          <span className="text">www.github.io/arongan90</span>
        </div>
        <div>
          <b>GITHUB</b>
          <span className="text">www.github.io/arongan90</span>
        </div>
      </ContactContent>
    </ContactBlock>
  );
}

export default Contact;
