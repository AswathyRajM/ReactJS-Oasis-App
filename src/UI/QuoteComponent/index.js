import { createTheme, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { Box } from "@mui/system";
import "./index.css";

import quotesImg from "../../images/quotes-img.png";
import circleCheck from "../../images/circle-check-full.png";
import vectorLImg from "../../images/Vector-L.png";
import circlesImg from "../../images/Vector-circles.png";
import { ThemeProvider } from "@emotion/react";

import Logo from "../../UI/LogoComponent";

import buildingImage from "../../images/buildings.jpg";

const theme = createTheme();

theme.typography.body1 = {
    fontStyle: "normal",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    color: "#fff",
};

const styles = {
    boxConatiner: {
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "",
        background: `linear-gradient(0deg, rgba(21, 101, 216, 0.9), rgba(21, 101, 216, 0.9)),url(${buildingImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-epeat",
        backgroundSize: "cover",
        margin: 0,
        padding: 0,
    },
};

function QuoteComponent() {
    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    maxWidth: "45vw",
                    width: "100%",
                    height: "100vh",
                    margin: 0,
                    padding: 0,
                }}
            >
                <Box style={styles.boxConatiner}>
                    <Stack
                        sx={{
                            width: "100%",
                            maxWidth: "29.5rem",
                            marginRight: { lg: "4rem", xs: "2.5rem" },
                            padding: { lg: "4rem", xs: "2.5rem" },
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                position: "absolute",
                                top: { lg: "3rem", xs: "2.5rem" },
                            }}
                        >
                            <Logo />
                        </Box>
                        <Grid item>
                            <img src={quotesImg} alt="img" />
                        </Grid>
                        <Grid item py={3}>
                            <Typography
                                sx={{
                                    fontSize: "20px",
                                    lineHeight: "190%",
                                    fontWeight: 400,
                                }}
                            >
                                The passage experienced a surge in popularity
                                during the 1960s when Letraset used it on their
                                dry-transfer sheets, and again during the 90s as
                                desktop publishers bundled the text with their
                                software.
                            </Typography>
                        </Grid>
                        <Grid
                            container
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                            sx={{
                                fontSize: "1.1250rem",
                                lineHeight: "118.75%",
                                fontWeight: 500,
                            }}
                        >
                            <Grid item pr={2}>
                                <Typography>Vincent Obi</Typography>
                            </Grid>

                            <Grid item my={"auto"}>
                                <img src={circleCheck} alt="green check" />
                            </Grid>
                            <Grid
                                container
                                justifyContent="flex-end"
                                alignItems="flex-end"
                                sx={{
                                    marginTop: "2.1875rem",
                                    marginRight: "1rem",
                                }}
                            >
                                <img src={vectorLImg} alt="vector" />
                            </Grid>
                        </Grid>
                    </Stack>
                </Box>
                <Box
                    sx={{
                        position: "absolute",
                        bottom: 0,
                        left: "-10px",
                    }}
                >
                    <img
                        className="circles-img"
                        src={circlesImg}
                        alt="circles"
                    />
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default QuoteComponent;
