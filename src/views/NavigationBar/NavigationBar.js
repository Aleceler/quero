import React from 'react';
import styled from 'styled-components';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { NavLink } from 'react-router-dom';

const Container = styled.nav`
    height: 35px;
    background: ${(props) => props.theme.colors.primary};
    display: flex;
    align-items: center;

    @media (max-width: 1024px) {
    justify-content: space-between;
        padding: 0 10px;
        .large{
            display: none;
        }
    }

    @media (min-width: 1024px) {
    padding: 0 7%;
        .small{
            display: none;
        }
    }
`;

const NavItem = styled(NavLink)`
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
    height: 100%;

    @media (min-width: 1024px) {
        min-width: 120px;
        display: flex;
        justify-content: center;
    }
    @media (max-width: 1024px) {
        font-weight: bold;
    }

    a .active{
        background: red;
    }
`;

const Navigation = () => (
        <Container>
           <NavItem className="small" to="/Home/MinhaConta">Minha Conta</NavItem>
           <NavItem className="small" to="/Home/MinhaConta/BolsasFavoritas">Menu <ExpandMoreIcon /></NavItem>

           <NavItem exact className="large" activeStyle={{ background: '#007A8D' }} to="/Home/MinhaConta"><b>Minha Conta</b></NavItem>
           <NavItem className="large" activeStyle={{ background: '#007A8D' }} to="/Home/PreMatricula">Pré-matrículas</NavItem>
           <NavItem className="large" activeStyle={{ background: '#007A8D' }} to="/Home/MinhaConta/BolsasFavoritas">Bolsas favoritas</NavItem>

        </Container>
);

export default Navigation;
