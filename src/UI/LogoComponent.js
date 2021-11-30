import { ThemeProvider } from "@emotion/react";
import { Grid, Typography, createTheme } from "@mui/material";

import logo from "../images/logo.svg";
import "./LogoComponent.css";

const theme = createTheme({
    spacing: 8,
});

theme.typography.body1 = {
    fontStyle: "normal",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    color: "#fff",
};

function LogoComponent() {
    return (
        <ThemeProvider theme={theme}>
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
            >
                <Grid item>
                    <img src={logo} alt="logo" />
                </Grid>
                <Grid item my={"auto"}>
                    <Typography className={"logo-text"}>Oasis</Typography>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}

export default LogoComponent;
