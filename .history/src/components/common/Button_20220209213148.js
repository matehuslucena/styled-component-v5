import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

const LargeStyles = ({large}) => {
  if(large) {
    return css`
  padding: 10px;
  border-radius: 5px;
  font-size: 1.5em;
  `;
  } else {
    return css`
    padding: 8px;
    border-radius: 4px;
    font-size: 1em;
    `
  }
}

const Button = styled.button`
  color: white;
  background: ${p => p.secondary ? p.theme.secondaryColor: p.theme.primaryColor};
  font-weight: bold;
  ${LargeStyles}
  box-shadow: none;
  border: none;
  width: 100%;
  display: block;
  white-space: none;

  &:disabled{
    background: #eee;
    color: #666;
  }
`;

export {Button};