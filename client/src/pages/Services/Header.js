import { Divider } from "@material-ui/core";
import React from "react";
import SectionHeader from "src/components/SectionHeader";

const Header = () => {
  return (
    <>
      <SectionHeader
        title="Services"
        align="left"
        titleVariant="h4"
        disableGutter
      />
      <Divider style={{ width: "100%", marginBottom: 40 }} />
    </>
  );
};

export default Header;
