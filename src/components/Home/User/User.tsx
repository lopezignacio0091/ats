import React from "react";
import { Background, ContainerInfo, Content, Header, Text } from "./styles";
import Info from "../components/Info/Info";
import Menu from "../components/Menu/Menu";
import Trips from "../components/Trips/Trips";
import EmptyState from "../../commons/EmptyState/EmptyState";
import useReserveById from "../../../hooks/query/useReserveById";

const User = () => {
  const { data } = useReserveById();

  return (
    <>
      <Header>
        <Background />
        <ContainerInfo>
          <Info />
        </ContainerInfo>
        <Menu />
      </Header>
      {data && data?.length > 0 ? (
        <Content>
          <Text>Mis viajes:</Text>
          <Trips />
        </Content>
      ) : (
        <EmptyState />
      )}
    </>
  );
};

export default User;
