// Libs
import React from 'react';
import styled from 'styled-components';

const InputForm = styled.input`
	margin: ${props => (props.margin)};
  width: ${props => (props.login ? '100%' : '95%')};
	width: ${props => (props.modalOrg && '80%')};
  height: 3.5rem;
  border: 1px solid;
  border-color: ${props => (props.isError ? 'tomato' : '#ffcfcd')};
  border-radius: 3px;
  background: #fafafa;
  padding: 0.7rem 0.5rem 0.5rem 0.8rem;
  font-size: 0.9rem;
  font-family: Overpass, Light;
  position: relative;

  @media (max-width: 648px) {
    width: 100%;
    height: 3.5rem;
  }
`;

const Input = props => (
	<InputForm
		margin={props.margin}
		modalOrg={props.modalOrg}
		login={props.login}
		type={props.type}
		onChange={props.onChange}
		value={props.value}
		placeholder={props.placeholder}
		name={props.name}
		isError={props.isError}
		required={props.required}
	/>
);

export default Input;
