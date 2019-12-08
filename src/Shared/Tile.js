import styled from 'styled-components';
import { subtleBoxShadow, lightBlueBackground, greenBoxShadow, redBoxShadow } from "./Styles";

export const Tile = styled.div`
  ${subtleBoxShadow}
  ${lightBlueBackground}
  padding: 10px;
  align-content: center;
  border-radius: 4px;
`;

export const SelectableTile = styled(Tile)`
  &:hover {
    cursor: pointer;
    ${greenBoxShadow}
  }
`;

export const DeletableTile = styled(Tile)`
  &:hover {
    cursor: pointer;
    ${redBoxShadow}
  }
`;

export const DisabledTile = styled(Tile)`
  pointer-events: none;
  opacity: 0.4;
`;
