"use client";

import { createTheme } from "@mui/material";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"] });
const theme = createTheme({
  typography: {
    fontFamily: outfit.style.fontFamily,
  },
});

export default theme;
