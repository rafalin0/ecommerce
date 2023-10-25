import { Dropdown, DropdownItem } from "./DropdownMenuStyled";

const DropdownMenu = ({ toggle, active }) => {
  const catalogItems = [
    { label: "jewelry sets", path: "/catalogue/jewelry sets" },
    { label: "necklaces", path: "/catalogue/necklaces" },
    { label: "earrings", path: "/catalogue/earrings" },
    { label: "rings", path: "/catalogue/rings" },
    { label: "bracelets", path: "/catalogue/bracelets" },
  ];

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
