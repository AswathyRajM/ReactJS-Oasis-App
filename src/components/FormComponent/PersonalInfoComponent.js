import React from "react";
import { Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";

import TextAboutPage from "../../UI/TextAboutPage";
import JoinBtnComponent from "../../UI/JoinComponent/IndividualJoinComponent";

import userIcon from "../../images/Polygon-user.svg";
import userIconHover from "../../images/Polygon-user-hover.svg";
import businessIcon from "../../images/Polygon-briefcase.svg";
import businessIconOnHover from "../../images/Polygon-briefcase-hover.svg";

const styles = {
    boxContainer: {
        width: "26.625rem",
        height: "fit-content",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        margin: "auto",
    },
};

function PersonalInfoForm() {
    const title = "Personal Info";
    const subText = "STEP 01/03";
    return (
        <Box
            sx={{
                position: "absolute",
                left: "44vw",
                top: 0,
                bottom: 0,
                right: 0,
                margin: 0,
                marginRight: "1rem",
                padding: 0,
                height: "fit-content",
            }}
        >
            <TextAboutPage title={title} subText={subText} />
            <Box
                sx={{
                    maxWidth: "45vw",
                    width: "100%",
                    height: {
                        lg: "calc(100vh - 5rem)",
                        xs: "calc(100vh - 3rem)",
                    },
                    margin: 0,
                    padding: 0,
                }}
            >
                <Box style={styles.boxConatiner}>
                    <Stack
                        sx={{
                            width: "100%",
                            maxWidth: "29.5rem",
                            marginLeft: { lg: "4rem", xs: "2.5rem" },
                            padding: { lg: "6rem", xs: "2.5rem" },
                        }}
                    >
                        <Grid item>
                            <Typography
                                variant="h2"
                                sx={{
                                    lineHeight: "36.31px",
                                    fontWeight: 700,
                                    fontSize: "30px",
                                    margin: 0,
                                    padding: 0,
                                    paddingBottom: "10px",
                                }}
                            >
                                Join Us!
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography
                                sx={{
                                    lineHeight: "20px",
                                    fontSize: "18px",
                                    color: "#8692A6",
                                    marginBottom: "10px",
                                    padding: 0,
                                }}
                            >
                                To begin this journey, tell us what type of
                                account you’d be opening.
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
                            <Grid item></Grid>
                        </Grid>
                    </Stack>
                </Box>
            </Box>
        </Box>
    );
}

export default PersonalInfoForm;
