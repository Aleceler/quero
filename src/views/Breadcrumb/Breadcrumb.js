import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavItem = styled(NavLink)`
  display: flex;
  text-decoration: none;
  color: ${(props) => props.theme.colors.secondary};
  font-weight: bold;
`;

const Separator = styled.span`
  color: ${(props) => props.theme.colors.texts};
  padding: 0 5px;
`;

const Container = styled.div`
  display: flex;

  @media (max-width: 1024px) {
    padding: 10px 10px;
    }

    @media (min-width: 1024px) {
      padding: 10px 8%;
    }
 
`;

const Breadcumb = ({ props }) => {
  const links = props.location.pathname.split('/');
  const linkLen = links.length;

  const filtredLinks = links.map((item, index) => item !== ''
  && <>
  <NavItem
    style={linkLen === index + 1 ? { color: 'grey' } : {}}
    to={(props.location.pathname.split(item)[0]) + item}
    key={index}>{item.replace(/([a-z])([A-Z])/g, '$1 $2')}
  </NavItem>
  {linkLen !== index + 1
  && <Separator>
    /
  </Separator>}
  </>);

  return <Container>{filtredLinks}</Container>;
};


export default Breadcumb;
