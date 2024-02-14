import styled from "styled-components";
import Card from "../components/Card.js";
import useSWR from "swr";
import Link from "next/link.js";
import { StyledLink } from "../components/StyledLink.js";

const List = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  background-color: none;
  color: black;
  outline: none;
`;

const ListItem = styled.li`
  --font-color: #323232;
  --font-color-sub: #666;
  --bg-color: #fff;
  --main-color: #323232;
  --main-focus: #2d8cf0;
  width: 250px;
  height: 300px;
  background: var(--bg-color);
  border: 2px solid var(--main-color);
  box-shadow: 4px 4px var(--main-color);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px;
  margin: 20px;
  gap: 10px;
  font-family: monospace;
  font-size: 1rem;
`;
const FixedLink = styled(StyledLink)`
  position: fixed;
  bottom: 50px;
  right: 50px;
`;
export default function Home() {
  const { data } = useSWR("/api/places", { fallbackData: [] });

  return (
    <>
      <List role="list">
        {data.map((place) => {
          return (
            <ListItem key={place.id}>
              <Card
                name={place.name}
                image={place.image}
                location={place.location}
                id={`${place._id.$oid ?? place._id}`}
              />
            </ListItem>
          );
        })}
      </List>
      <Link href="/create" passHref legacyBehavior>
        <FixedLink>+ place</FixedLink>
      </Link>
    </>
  );
}
