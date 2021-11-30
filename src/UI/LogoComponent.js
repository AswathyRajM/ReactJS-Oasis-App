import { ThemeProvider } from "@emotion/react";
import { Grid, Typography, createTheme } from "@mui/material";

const theme = createTheme({
    spacing: 8,
});

theme.typography.body1 = {
    fontStyle: "normal",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
};

function LogoComponent(props) {
    return (
        <ThemeProvider theme={theme}>
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
            >
                <Grid item>
                    <img src={props.logo} alt="logo" />
                </Grid>
                {props.theme ? (
                    <Grid item my={"auto"}>
                        <Typography color="#1565D8" className={"logo-text"}>
                            Oasis
                        </Typography>
                    </Grid>
                ) : (
                    <Grid item my={"auto"}>
                        <Typography color="#fff" className={"logo-text"}>
                            Oasis
                        </Typography>
                    </Grid>
                )}
            </Grid>
        </ThemeProvider>
    );
}

export default LogoComponent;
