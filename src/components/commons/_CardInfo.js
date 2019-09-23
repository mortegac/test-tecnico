import React from 'react';
// import {Text} from 'react-native';
import styled from 'styled-components/native';
// import moment from 'moment';

import {APP_BUTTON, APP_GRAY_TEXT, APP_TEAL_BLUE, APP_BLACK} from '../../constants/colorPalette.js';

// const timeFormat='h:mm:ss a';
// const dateFormat='DD MMM, YYYY';
const _CardInfo= (props)=> {
    return(

            <Container>
                <Body>
                    <Title>{props.title}</Title>
                    <Message textColor={ APP_GRAY_TEXT }>{props.message}</Message>
                </Body>

                <Footer>
                    {/* <Message textColor={ APP_TEAL_BLUE }>{props.datemoment(props.date).format(dateFormat).toString()} {moment(props.date).format(timeFormat).toString()}</Message> */}
                    <Message textColor={ APP_BLACK }>{props.id}</Message>
                </Footer>

            </Container>
    )

}
export { _CardInfo };


const Container = styled.View`
	flex: 1;
    background-color: ${APP_BUTTON};
    flex-direction: column;
    justify-content: space-between;
    
    border-color: gray;
    border-width: 1px;
    margin-left:10px;
    margin-right:10px;
    margin-bottom:10px;
    padding-left:10px;
    padding-right:10px;
`;


const Body = styled.View`
    flex: 3;
    flex-direction: column;
    margin-bottom:10px;
`;
const Footer = styled.View`
    flex: 1;
    flex-direction: row;
	justify-content: space-between;
    align-content: flex-end;
   
    border-top-color: ${APP_TEAL_BLUE};
    border-top-width: 1px;
    margin-bottom:10px;
`;

const Title = styled.Text`
	font-size: 18px;
	font-weight: 500;
    color: ${APP_TEAL_BLUE};
    margin-bottom:10px;
    text-transform: uppercase;
`;
const Message = styled.Text`
	font-size: 12px;
	font-weight: 500;
    color: ${props => props.textColor}; 
    text-align: justify;
`;