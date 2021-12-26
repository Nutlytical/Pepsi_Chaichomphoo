import React from "react";

import Navbar from "./NavbarComponent";
import Footer from "./FooterComponent";

import Container from "@mui/material/Container";

export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <Container sx={{ mt: 4, mb: 4 }}>{children}</Container>
      <hr />
      <Footer />
    </>
  );
}
