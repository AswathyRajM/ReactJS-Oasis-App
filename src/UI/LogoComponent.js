import { ThemeProvider } from "@emotion/react";
import { Grid, Typography, createTheme } from "@mui/material";
import { Box } from "@mui/system";

import logo from "../images/logo.svg";

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
                    <Typography>Oasis</Typography>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}

export default LogoComponent;
