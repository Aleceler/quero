import React from 'react';
import styled from 'styled-components';

import InfoIcon from '@material-ui/icons/Info';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

import LogoQuero from '../../assets/images/quero.svg';


const Container = styled.header`
    display: grid;
    height: 60px;
    @media (max-width: 1024px) {
        grid-template-areas: "help logo logo logo logo account";
        .large{
            display: none;
        }
    }

    @media (min-width: 1024px) {
        grid-template-columns: 3fr 2fr 3fr;
        grid-template-areas: "help logo account";
        .small{
            display: none;
        }
    }
`;

const Item = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme.colors.primary};
`;

const Help = styled(Item)`
    grid-area: help;
    @media (max-width: 1024px) {
        flex-direction: column;
    }
    @media (min-width: 1024px) {
        div{
            display: flex;
            align-items: center;
            padding-right: 10px;
            div{
                display: flex;
                align-items: flex-start;
                flex-direction: column; 
                padding-left: 10px;
            }
        }
        .phone{
            border-left: solid 3px #EEEFEF;
        }
    }
`;

const Logo = styled(Item)`
    grid-area: logo;
    margin: 10px 0;
    @media (max-width: 1024px) {
        border-left: solid 3px #EEEFEF;
        border-right: solid 3px #EEEFEF;
    }
    @media (min-width: 1024px) {
        display: flex;
        justify-content: center;
    }
`;

const Account = styled(Item)`
    grid-area: account;
    @media (max-width: 1024px) {
        flex-direction: column;
        span{
            margin-right: 10px;
        }
    }
    @media (min-width: 1024px) {
        span{
            margin-right: 10px;
        }
    }
`;


const Header = () => (
    <Container>
        <Help>
            <div>
                <InfoIcon style={{ width: '35px', height: '35px' }} />
                <span className="small"><p><b>Ajuda</b></p></span>
                <span className="large"><b>Como Funciona</b></span>
            </div>
            <div className="large phone" style={{ paddingLeft: '10px' }}>
                    <WhatsAppIcon className="large" style={{ width: '35px', height: '35px' }} />
                    <div>
                        <span className="large"><b>0800 123 2222</b></span>
                        <span className="large"><p><b>Envie mensagem ou ligue</b></p></span>
                    </div>
            </div>
        </Help>
        <Logo>
            <img style={{ width: '110px' }} src={LogoQuero} alt="Logo da empresa quero amarelo e azul"/>
        </Logo>
        <Account>
            <span className="large" ><b>Bruce Willis</b></span>
            <AccountCircleIcon style={{ width: '35px', height: '35px' }} />
            <span className="small"><b>Conta</b></span>
        </Account>
    </Container>
);

export default Header;
