import React from "react";
import { Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";

import TextAboutPage from "../../UI/TextAboutPage";
import JoinBtnComponent from "../../UI/IndividualJoinComponent";

import userIcon from "../../images/Polygon-user.svg";
import userIconHover from "../../images/Polygon-user-hover.svg";
import businessIcon from "../../images/Polygon-briefcase.svg";
import businessIconOnHover from "../../images/Polygon-briefcase-hover.svg";

const styles = {
    boxContainer: {
        width: "26.625rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
};

function JoinUsForm() {
    const userSubTitle = "Individual";
    const userParagraph = "Personal account to manage all you activities.";
    const businessSubTitle = "Business";
    const businessParagraph = "Own or belong to a company, this is for you.";
    const title = "Already have an account?";
    const signin = true;

    return (
        <Box
            sx={{
                position: "absolute",
                left: "45vw",
                top: 0,
                bottom: 0,
                right: 0,
                margin: 0,
                marginRight: "1rem",
                padding: 0,
            }}
        >
            <TextAboutPage title={title} signin={signin} />
            <Box
                sx={{
                    maxWidth: "20vw",
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
                            maxWidth: "25.5rem",
                            paddingX: {
                                lg: "10rem",
                                md: "6rem",
                                sm: "4rem",
                                xs: "2rem",
                            },
                            paddingLeft: "12rem",
                            paddingTop: "10rem",
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
                                    marginBottom: "1.5rem",
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
                            <Grid item>
                                <Typography>
                                    <JoinBtnComponent
                                        iconImg={userIcon}
                                        iconImgOnHover={userIconHover}
                                        subTitle={userSubTitle}
                                        paragraph={userParagraph}
                                    />
                                    <JoinBtnComponent
                                        iconImg={businessIcon}
                                        iconImgOnHover={businessIconOnHover}
                                        subTitle={businessSubTitle}
                                        paragraph={businessParagraph}
                                    />
                                </Typography>
                            </Grid>
                        </Grid>
                    </Stack>
                </Box>
            </Box>
        </Box>
    );
}

export default JoinUsForm;
