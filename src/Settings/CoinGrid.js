import React from "react";
import styled from 'styled-components';
import {AppContext} from "../App/AppProvider";
import { SelectableTile } from "../Shared/Tile";
import CoinTile from '../Settings/CoinTile';

const uuidv4 = require('uuid/v4');

export const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin: 40px;
  grid-gap: 15px;
`;

function getCoinsToDisplay(coinList){
    return Object.keys(coinList).slice(0,100);
}

export default function (){
    return <AppContext.Consumer>
        {({coinList}) => <CoinGridStyled>
            {getCoinsToDisplay(coinList)
                .map(coinKey => <CoinTile coinKey={coinKey} key={uuidv4()}/>)
            }
        </CoinGridStyled>}
    </AppContext.Consumer>
}
