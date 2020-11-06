import React from 'react';
import styled from 'styled-components';

const ContactBlock = styled.div`
  width: 100%;
  height: 750px;
  background: linear-gradient(to bottom, #5a5f70, 30%, #2d3038);
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
  background: linear-gradient(to top, #3c4152, #292d3b);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
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
  a {
    color: white;
    text-decoration: none;
    outline: none;
    &:hover {
      color: #61d25b;
    }
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
          <span className="text">
            <a href="mailto:arongan90@gmail.com">arongan90@gmail.com</a>
          </span>
        </div>
        <div>
          <b>HOME PAGE</b>
          <span className="text">
            <a
              href="https://arongan90.github.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              arongan90.github.io
            </a>
          </span>
        </div>
        <div>
          <b>GITHUB</b>
          <span className="text">
            <a
              href="https://github.com/arongan90"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/arongan90
            </a>
          </span>
        </div>
      </ContactContent>
    </ContactBlock>
  );
}

export default Contact;
