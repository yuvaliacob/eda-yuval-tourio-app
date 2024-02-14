import styled from "styled-components";

const Headline = styled.h1`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
  margin: 0;
  padding: 20px;
  text-align: center;
  z-index: 1;
  background-color: black;
  color: white;
  font-family: monospace;
  font-size: 2rem;
`;

export default function TitleBar() {
  return <Headline>Tourio</Headline>;
}
