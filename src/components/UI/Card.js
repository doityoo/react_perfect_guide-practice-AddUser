import React from 'react';
import styled from 'styled-components'

const CardFormat = styled.div`
  /* padding: 1rem 0; */
  padding-top: ${props => props.padding || 0};
  padding-bottom: ${props => props.padding || 0};
  margin: 30px auto;
  width: 70%;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;

  & form {
      margin: 0 auto;
      width: 90%;
    }

  & input {
    margin: 0.5rem 0;
    width: 90%;
    padding: 1rem;
  }
  
  & label {
    margin: 0.5rem 0;
    text-align: left;
    display: block;
    font-size: 1.3rem;
    font-weight: bold;
  }

  & input {
    font: inherit;
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    padding: 0.15rem;
    margin-bottom: 0.5rem;
  }

  & input:focus {
    outline: none;
    border-color: black;
  }

  & ul {
    list-style: none;
    padding: 1rem;
  }

  & li {
    border: 1px solid #ccc;
    margin: 0.5rem 0;
    padding: 0.5rem;
  }
`

const Card = (props) => {
  return (
    // props 넘겨주는 이름 잘 확인해 볼것!
    <CardFormat padding={props.padding}>{props.children}</CardFormat>
  )
}

export default Card;