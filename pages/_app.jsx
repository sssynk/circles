import "@mantine/core/styles.css";

import { AppProps } from "next/app";
import { createTheme, MantineProvider } from "@mantine/core";

export default function App({ Component, pageProps }) {
  return (
    <MantineProvider defaultColorScheme="dark">
      <Component {...pageProps} />
    </MantineProvider>
  );
}
