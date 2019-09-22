import React from 'react';
import styled from 'styled-components/native';

import {APP_APP} from '../../constants/colorPalette.js';



const Containner = styled.View`
  flex: 1;
  flex-Direction: column;
  background-color: ${APP_APP};
`;

const _Containner= (props)=> {
    return(
      <Containner { ...props } />
    )

}
export { _Containner };