import { render } from "@testing-library/react";
import { theme } from "../style/theme";
import { ThemeProvider } from "styled-components";


export const renderWithTheme = (children: React.ReactNode) => {
    return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
}
