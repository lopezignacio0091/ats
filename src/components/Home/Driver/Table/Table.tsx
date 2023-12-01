import metadata from "./metadata";
import useReservesByDriver from "../../../../hooks/query/useReservesByDriver";
import { CustomTable } from "./styles";
import useStore from "../../../Login/store/useStore";
const Table = () => {
  const { data: reserves } = useReservesByDriver();
  const { name } = useStore((state)=>state.user);

  const options: any = {
    selectableRows: false,
    rowHover: true,
    filter: false,
    print: true,
    download: true,
    responsive: "scroll",
    fixedHeader: true,
  };

  return (
    <CustomTable
      title={`Bienvenido ${name}`}
      data={reserves || []}
      columns={metadata}
      options={options}
    />
  );
};

export default Table;
