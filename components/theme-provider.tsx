"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { RecoilRoot } from "recoil";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <RecoilRoot>
      <NextThemesProvider {...props}>{children}</NextThemesProvider>
    </RecoilRoot>
  );
}
