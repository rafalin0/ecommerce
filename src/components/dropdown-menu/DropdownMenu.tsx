import React from "react";
import { Dropdown, DropdownItem } from "./DropdownMenuStyled.tsx";

import { catalogItems } from "../../constants/constants.ts";

type DropdownMenuProps = {
  toggle: (show: boolean) => void;
};

const DropdownMenu: React.FC<DropdownMenuProps> = ({ toggle }) => {

  return (
    <Dropdown onMouseOver={() => toggle(true)} onMouseOut={() => toggle(false)}>
      {catalogItems.map((item, index) => (
        <DropdownItem key={index} to={item.path}>
          {item.label}
        </DropdownItem>
      ))}
    </Dropdown>
  );
};

export default DropdownMenu;
