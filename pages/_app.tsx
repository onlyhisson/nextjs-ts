import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import wrapper from "../app/store";
import { useAppSelector } from "hooks";
import GlobalStyled from "styles/global-styled";
import { lightTheme, darkTheme } from "./../styles/themes";
import "../styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  const themeType: any = useAppSelector((state) => state.theme);

  return (
    <>
      <GlobalStyled />
      <ThemeProvider theme={themeType === "light" ? lightTheme : darkTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default wrapper.withRedux(App);
