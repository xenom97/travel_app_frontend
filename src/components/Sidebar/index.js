import React from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Padding from "../Padding";
import Text from "../Text";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  return (
    <Container>
      {props.items.map((item, index) => (
        <List {...item} key={index} />
      ))}
    </Container>
  );
};

const List = (props) => (
  <Link to={props.path} style={{ textDecoration: "none" }}>
    <ListContainer>
      <Padding>
        <FontAwesomeIcon icon={props.icon} size="lg" color="#fff" />
      </Padding>
      <Padding>
        <Text color="#FFF">{props.label}</Text>
      </Padding>
    </ListContainer>
  </Link>
);

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: ${(props) => props.theme.primary};
  margin: 0.25em 0;
  cursor: pointer;
  padding: 0 0.25em;

  &:hover {
    background: ${(props) => props.theme.hoverPrimary};
  }
`;

const Container = styled.aside`
  padding: 1em 0;
  background: #1e1e2c;
  width: 200px;
  height: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  box-shadow: 4px 0 8px 0 rgba(0, 0, 0, 0.2);
`;

export default Sidebar;
