import React from "react";
import styled, {css} from "styled-components";
import {AppContext} from './AppProvider';

const Logo = styled.div`
    font-size: 1.5em;
`;
const Bar = styled.div`
    display: grid;
    margin-bottom: 40px;
    grid-template-columns: 180px auto 100px 120px;
    column-gap: 20px;
`;

const ControlButtonElem = styled.div`
   cursor: pointer;
   //font-family: 'Puritan', sans-serif;
   font-size: 1.2em;
   ${props => props.active && css`
    text-shadow: 0px 0px 20px rgba(26,237,51,1);;
   `}
   ${props => props.hidden && css`
      display: none;
  `}
`;

function toProperCase(lower) {
    return lower.charAt(0).toUpperCase() + lower.substr(1);
}

function ControlButton({name}) {
    return (
        <AppContext.Consumer>
            {({page, setPage, firstVisit}) => (
                <ControlButtonElem
                    onClick={() => setPage(name)}
                    active={page === name}
                    hidden={firstVisit && name === 'dashboard'}>
                    {toProperCase(name)}
                </ControlButtonElem>
            )}
        </AppContext.Consumer>
    )
}

export default function () {
    return <Bar>
        <Logo>CryptoDash</Logo>
        <div/>
        <ControlButton active name={"dashboard"}/>
        <ControlButton name={"settings"}/>
    </Bar>
}
