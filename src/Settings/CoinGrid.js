import React from "react";
import styled from 'styled-components';
import {AppContext} from "../App/AppProvider";
import CoinTile from '../Settings/CoinTile';

const uuidv4 = require('uuid/v4');

export const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  margin-top: 40px;
  grid-gap: 15px;
`;

function getCoinsToDisplay(coinList, topSection, favorites){
    return topSection ? favorites : Object.keys(coinList).slice(0, topSection ? 10 : 100);
}

export default function ({topSection}){
    return <AppContext.Consumer>
        {({coinList, favorites}) => <CoinGridStyled>
            {getCoinsToDisplay(coinList, topSection, favorites)
                .map(coinKey => <CoinTile
                                    coinKey={coinKey}
                                    key={uuidv4()}
                                    topSection={topSection}
                                />
                    )
            }
        </CoinGridStyled>}
    </AppContext.Consumer>
}
