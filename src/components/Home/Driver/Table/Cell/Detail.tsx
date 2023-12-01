import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import useStore from "../../store/useStore";

const Detail = ({ id }: { id: string }) => {
  const { setReserveId } = useStore((state) => state);
  const handleView = () => {
    setReserveId(id);
  };
  
  return <RemoveRedEyeIcon onClick={handleView} />;
};

export default Detail;
