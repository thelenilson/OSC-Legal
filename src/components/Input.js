// Libs
import React from 'react';
import styled from 'styled-components';


export const InputForm = styled.input`
  width: ${props => (props.login ? '100%' : '95%')};
  height: 45px;
  border: 1px solid #ffcfcd;
  border-radius: 3px;
  background: #fafafa;
  padding: 0.5rem;
  font-size: 0.9rem;
  font-family: Overpass, Light;
  position: relative;

  @media (max-width: 425px) {
    width: 100%;
  }
`;

export default function Input(props) {

  return (
    <InputForm
      login={props.login}
      type={props.type}
      onChange={props.onChange}
      value={props.value}
      placeholder={props.placeholder}
      name={props.name}
    />
  );
}
