import styled from 'styled-components/native';
import {APP_LIGHT_GRAY, APP_PURPLE, APP_WHITE } from '../../../constants/colorPalette';


export const Header = styled.View`
  align-items: center;
  justify-content: center;
  height: 220;
  background-color: ${APP_PURPLE};
  color: ${APP_WHITE};
  `;
export const Form = styled.View`
  align-items: center;
  padding-top: 40;
  background-color: ${APP_LIGHT_GRAY};
  height: 100%;
  `;
export const BoxButtonIco = styled.View`
  flex-Direction: row;
  align-items: center;
  justify-content: flex-start;
  background-color: #fff;
  padding-left: 10;
  `;
export const TextSubTitle = styled.Text`
  color: ${APP_WHITE};
  font-size:24;
  margin-top:5;
 `;