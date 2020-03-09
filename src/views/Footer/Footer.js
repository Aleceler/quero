import React from 'react';
import styled from 'styled-components';

import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import InfoIcon from '@material-ui/icons/Info';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const Container = styled.footer`
    display: grid;
    background: ${(props) => props.theme.colors.primary};
    margin-top: 20px;
    height: 200px;

    @media (max-width: 1024px) {
    grid-template-areas: "phone phone phone"
                        "chat email help"
                        "madeby madeby madeby";
    
        .large{
            display: none;
        }
    }

    @media (min-width: 1024px) {
    
    grid-template-areas: "phone chat email help"
                        "madeby madeby madeby madeby";
    
        .small{
            display: none;
        }    
    }
`;

const Item = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
`;

const Phone = styled(Item)`
    grid-area: phone;
    padding: 15px 40px;
    background: ${(props) => props.theme.colors.secondary};
    @media (max-width: 1024px) {
        justify-content: center;
        margin-bottom: 3px;
    }

`;

const Chat = styled(Item)`
    background: ${(props) => props.theme.colors.secondary};
    padding: 10px;
    grid-area: chat;
    @media (max-width: 1024px) {
        flex-direction: column;
        justify-content: space-around;
        margin-right: 3px;
    }
`;

const Email = styled(Item)`
    background: ${(props) => props.theme.colors.secondary};
    grid-area: email;
    padding: 10px;
     @media (max-width: 1024px) {
        flex-direction: column;
        justify-content: space-around;
    }
`;

const Help = styled(Item)`
    background: ${(props) => props.theme.colors.secondary};
    padding: 10px;
    grid-area: help;
    @media (max-width: 1024px) {
        flex-direction: column;
        justify-content: space-around;
        margin-left: 3px;
    }
`;

const MadeBy = styled(Item)`
    grid-area: madeby;
    font-weight: bold;
    height: 50px;
    @media (min-width: 1024px) {
        padding-top: 30px;
    }
`;

const Footer = () => (
    <Container>
        <Phone>
            <WhatsAppIcon style={{ width: '35px', height: '35px' }} />
            <div style={{ paddingLeft: '10px' }}>
                <p><b>0800 123 2222</b></p>
                <span className="small">Segunda a sexta de 8h às 22h</span>
                <span className="large">Seg-Sex 8h-22h</span>
            </div>
        </Phone>
        <Chat>
            <ChatBubbleOutlineIcon style={{ width: '35px', height: '35px' }} />
            <span className="small">Chat</span>
            <div style={{ paddingLeft: '10px' }}>
                <p className="large">Chat ao vivo</p>
                <span className="large" >Seg-Sex 8h-22h</span>
            </div>
        </Chat>
        <Email>
            <MailOutlineIcon style={{ width: '35px', height: '35px' }} />
            <span className="small">Email</span>
            <div style={{ paddingLeft: '10px' }}>
                <p className="large">Mande um e-mail</p>
                <span className="large" >Responderemos rapidinho</span>
            </div>
        </Email>
        <Help>
            <InfoIcon style={{ width: '35px', height: '35px' }} />
            <span className="small">Ajuda</span>
            <div style={{ paddingLeft: '10px' }}>
                <p className="large">Central de ajuda</p>
                <span className="large">Encontre todas as respostas</span>
            </div>
        </Help>
        <MadeBy>
            <span>Feito com <FavoriteBorderIcon style={{
              width: '16px', height: '14px', margin: '0 3px',
            }} />pela Quero Educação</span>
        </MadeBy>
    </Container>
);

export default Footer;
