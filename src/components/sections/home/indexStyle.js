import styled from 'styled-components/native';
import {APP_WHITE, APP_PURPLE} from '../../../constants/colorPalette';





export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top:40;
  padding-bottom:30;
  margin-bottom:10;
  background-color: ${APP_PURPLE};
`;
export const Form = styled.View`
  align-items: center;
`;  
export const BoxLabel = styled.View`
  flex-Direction: row;
  justify-content: flex-start;
`;
export const BoxButtonIco = styled.View`
  flex-Direction: row;
  align-items: center;
  justify-content: flex-start;
  background-color: #fff;
`; 
export const Title = styled.Text`
  font-size:22;
  color: ${APP_WHITE};
  padding-left: 30; 
`;
export const Label = styled.Text`
  width: 100%;
  font-size:22;
  color: ${APP_PURPLE};
  padding-left: 30; 
`;

const TextSpinner = styled.Text`
  flex-Direction: row;
  width: 100%;
  text-align: center;
  font-size: 14;
  color: ${APP_PURPLE};
  align-items: center;
`;
