import React from "react";
import { Menu } from "semantic-ui-react";

export function MenuItem(props) {
  return (
    <Menu.Item
      name={props.name}
      active={props.active}
      onClick={props.onClick}
      as={props.as}
    />
  );
}
