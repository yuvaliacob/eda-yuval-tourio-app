import styled, { css } from "styled-components";

export const StyledLink = styled.a`
  color: black;
  padding: 0.8rem 1.5rem;
  border-radius: 0.6rem;
  text-decoration: none;
  font-weight: bold;
  background: white;
  border: 2px solid black;
  box-shadow: 4px 4px grey;
  border-radius: 5px;

  ${({ justifySelf }) =>
    justifySelf &&
    css`
      justify-self: ${justifySelf};
    `}

  ${({ variant }) =>
    variant === "outlined" &&
    css`
      text-align: center;
      background-color: white;
      border: 3px solid;
    `}
`;
