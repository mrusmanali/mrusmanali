import { Container } from "@mui/material";
import React from "react";

function Wrapper({children}) {
  return <Container sx={{height: 'inherit'}}>{children}</Container>;
}

export default Wrapper;
