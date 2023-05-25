import styled from 'styled-components';

const Button = styled.button`
  background-color: ${props => props.bgcolor ? (props.$outlined || props.$link ? 'white' : props.bgcolor) : 'gray'};
  color: ${props => props.color ? props.color : props.bgcolor};
  font-size: 16px;
  padding: 4px 20px;
  border: 1px solid ;
  margin: 2px;
  border-color: ${props => props.$link ? 'transparent' : (props.$borderColor ? props.$borderColor : props.bgcolor)};
  cursor: ${props => props.$disabled ? 'auto' : 'pointer'} + ' !important';
  border-radius: 20px;
  opacity : ${props => props.$disabled == true ? '.3' : '1'};
  text-decoration: ${props => props.$link ? (props.$textdecorationnone ? 'none' : 'underline') : 'none'};
 

  
  &:hover{
       border-color : ${props => (props.$disabled ? 'inherit': (props.$outlined ? 'white' : (props.$link ? 'transparent' : props.bgcolor)))};
       background-color : ${props => (!props.$disabled && !props.$link && props.$outlined) ? props.bgcolor : ''};
       color : ${props => (!props.$disabled && !props.$link && props.$outlined) ? 'white' : ''};
       opacity : ${props => (!props.$disabled && !props.$link) ? '.8' : ''};
    }

  `;

export default Button;