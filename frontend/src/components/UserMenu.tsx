import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useLogout } from "../hooks/useLogout";
import { useNavigate } from "react-router-dom";

const UserMenu = () => {
  const { logout } = useLogout();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
  };

  const handleProfile = () => {
    navigate("/profile");
  };

  const handleSettings = () => {
    navigate("/settings");
  };

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        My Account
      </MenuButton>
      <MenuList>
        <MenuItem onClick={handleProfile}>Profile</MenuItem>
        <MenuItem onClick={handleSettings}>Settings</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default UserMenu;