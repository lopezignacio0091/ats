import { Alert } from "@mui/material";
import React from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import EmailIcon from "@mui/icons-material/Email";
import { AlertComponent, Label, Row, Section, Subtitle } from "./styles";
import { InfoDriverProps } from "./types";

const InfoDriver = ({ name, email }: InfoDriverProps) => {
  return (
    <AlertComponent severity="warning">
      <Section>
        <Label>Info chofer</Label>
        <Row gap={2}>
          <PersonOutlineIcon />
          <Subtitle>{name}</Subtitle>
        </Row>
        <Row gap={2}>
          <EmailIcon />
          <Subtitle>{email}</Subtitle>
        </Row>
      </Section>
    </AlertComponent>
  );
};

export default InfoDriver;
