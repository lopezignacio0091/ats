import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Detail from "./Cell/Detail";

const metadata = [
  {
    label: "Fecha",
    name: "created_at",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    label: "Nombre",
    name: "name",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    label: "",
    name: " ",
    options: {
      sort: false,
      empty: false,
      viewColumns: false,
      customBodyRender: (value: any, tableMeta: any, updateValu: any) => "",
    },
  },
  {
    label: "Detail",
    name: "id",
    options: {
      filter: false,
      sort: false,
      empty: false,
      viewColumns: false,
      customBodyRender: (value: any, tableMeta: any, updateValu: any) => {
        console.log(value);
        return <Detail id={value} />;
      },
    },
  },
];

export default metadata;
