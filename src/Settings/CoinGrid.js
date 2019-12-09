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

function getLowerSectionCoins(filteredCoins, coinList) {
    return (filteredCoins && Object.keys(filteredCoins)) ||
        Object.keys(coinList).slice(0, 100);
}

function getCoinsToDisplay(coinList, topSection, favorites, filteredCoins) {
    return topSection ? favorites : getLowerSectionCoins(filteredCoins, coinList);
}

export default function ({topSection}) {
    return (
        <AppContext.Consumer>
            {({coinList, favorites, filteredCoins}) => <CoinGridStyled>
                {getCoinsToDisplay(coinList, topSection, favorites, filteredCoins)
                    .map(coinKey => <CoinTile
                            coinKey={coinKey}
                            key={uuidv4()}
                            topSection={topSection}
                        />
                    )
                }
            </CoinGridStyled>}
        </AppContext.Consumer>)
}
