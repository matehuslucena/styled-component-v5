import React from "react";
import styled from "styled-components";
import { Link as ReactRouterDomLink, useLocation} from "react-router-dom";

const HeaderWrapper = styled.header`
  height: 60px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 0 16px;
  position: fixed;
  top: 0;
  background: #eeee;
`;

const Menu = styled.nav`
  display: block;
  font-family: "Open Sans";
  position: absolute;
  width: 100%;
  top: 60px;
  left: 0px;
  padding: 8px;
  box-sizing: border-box;
  
  @media(min-width:768px){
    display: flex;
    background: none;
    left: initial;
    top: initial;
    position: relative;
    width: initial;
    border-bottom: none;
    margin: auto 0 auto auto;
  }
`;

const Link = ({isActive, children, ...props}) => {
  return(
    <ReactRouterDomLink {...props}>
      {children}
    </ReactRouterDomLink>
  )
};

const StyledLink = styled(Link)`
  padding: 4px 8px;
  display: block;
  text-align: center;
  box-sizing: border-box;
  margin: auto 0;
  font-weight: ${p => p.isActive? 'bold' : 'normal'};
`

const Header = () => {
  const {pathname} = useLocation();

  return (
    <HeaderWrapper>
      <Menu>
        <StyledLink to="/" isActive={pathname === '/'}>Home</StyledLink>
        <StyledLink to="/login" isActive={pathname === '/login'}>Login</StyledLink>
      </Menu>
    </HeaderWrapper>
  );
};

export default Header;