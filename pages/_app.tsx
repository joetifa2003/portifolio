import {
    ColorModeProvider,
    createGlobalStyle,
    defaultTheme,
    Preflight,
    ThemeProvider,
} from "@xstyled/emotion";
import "styles/animations.scss";
import "styles/fonts.scss";

const theme = {
    ...defaultTheme,
    useColorSchemeMediaQuery: true,
    colors: {
        ...defaultTheme.colors,
        text: "#000",
        primary: "#eee",
        "primary-overlay": "#eeeeeeca",
        nav: "#1c1f1e",
        secondary: "#b3a577",
        "secondary-accent": "rgba(179, 165, 119, 0.5)",
        modes: {
            dark: {
                text: "#fff",
                primary: "#090d0c",
                "primary-overlay": "rgba(9, 13, 12, 0.75)",
                nav: "#1c1f1e",
                secondary: "#b3a577",
                "secondary-accent": "rgba(179, 165, 119, 0.5)",
            },
        },
    },
    fonts: {
        mono: `"SF Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
    },
    lineHeights: {
        ...defaultTheme.lineHeights,
        xs: "1rem",
        sm: "1rem",
        base: "1rem",
        lg: "1.5rem",
        xl: "1.5rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        "4xl": "2.5rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "7xl": "4.5rem",
        "8xl": "6rem",
        "9xl": "8rem",
    },
};

const GlobalStyle = createGlobalStyle`
    :root {
        --nav-height: 5rem;
    }

    html,
    body,
    #__next {
        font-family: Calibri,Candara,Segoe,Segoe UI,Optima,Arial,sans-serif; 
        min-height: 100%;
        max-height: max-content;
        color: text;
        background-color: primary;
        transition: background 0.2s;
    }

    ::selection {
        color: text;
        background-color: secondary;
    }

    .link-active {
        color: secondary;
        font-weight: bolder;
    }
`;

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <ColorModeProvider>
                <Preflight />
                <GlobalStyle />
                <Component {...pageProps} />
            </ColorModeProvider>
        </ThemeProvider>
    );
}

export default MyApp;
