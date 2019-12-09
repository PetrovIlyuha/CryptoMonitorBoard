import React from "react";
import styled, { css } from 'styled-components';

const CoinImage = styled.img`
  height: 60px;
  ${props => props.spotlight && css`
    height: 200px;
    margin: auto;
    display: block;
  `};
`;
export default function ({coin, spotlight}){
    return (
        <CoinImage
            spotlight={spotlight}
            src={`http://cryptocompare.com/${coin.ImageUrl}`}
            alt={coin.Symbol}
        />
    )
}
