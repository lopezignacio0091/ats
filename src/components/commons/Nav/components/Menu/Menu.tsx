import { MenuProps } from "./types";
import { MenuItemStyled, MenuStyled } from "./styles";
import useStore from "../../../../Login/store/useStore";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useHistory } from "react-router";

const BasicMenu = ({ open, onClose  , anchorEl}: MenuProps) => {
  const { user , logout} = useStore((state) => state);
  const history = useHistory();
  const handleLogout = () => {
    logout();
    history.push("/login");
  }

  const capitalizate = () => {
    return (user?.name || '').charAt(0).toUpperCase() + (user?.name || '') .slice(1);
  };
  
  return (
    <MenuStyled
      id="basic-menu"
      open={open}
      onClose={onClose}
      anchorEl={anchorEl}
    >
      <MenuItemStyled><AccountCircleIcon/>{capitalizate()}</MenuItemStyled>
      <MenuItemStyled onClick={handleLogout}>Logout</MenuItemStyled>
    </MenuStyled>
  );
};
export default BasicMenu;
