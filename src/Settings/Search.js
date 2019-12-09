import React from "react";
import styled from "styled-components";
import {backgroundColor2, fontSize2} from "../Shared/Styles";

const SearchGrid = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;  
`;

const SearchInput = styled.input`
  ${backgroundColor2}
  color: #2e74e6;
  ${fontSize2}
  border: 1px solid;
  height: 25px;
  font-family: 'Puritan', sans-serif;
  letter-spacing: 3px;
  font-weight: bold;
  place-self: center left;
`;

export default function () {
    return (
        <SearchGrid>
            <h2>Search All Coins</h2>
            <SearchInput/>
        </SearchGrid>
    )
}
