import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  padding: 0.8rem;
  border-radius: 0.6rem;
  font-weight: bold;
  font-size: inherit;
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 0.6rem;
  text-decoration: none;
  font-weight: bold;
  background: black;
  border: 2px solid black;
  box-shadow: 4px 4px grey;
  border-radius: 5px;

  ${({ variant }) =>
    variant === "delete" &&
    css`
      background-color: firebrick;
      color: white;
    `}
`;
