import { Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import JoinBtnComponent from "../../UI/JoinComponent/index";

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
        height: "100%",
        margin: "auto",
    },
};

function FormComponent() {
    const userSubTitle = "Individual";
    const userParagraph = "Personal account to manage all you activities.";
    const businessSubTitle = "Business";
    const businessParagraph = "Own or belong to a company, this is for you.";

    return (
        <Box
            sx={{
                position: "absolute",
                left: "46rem",
                top: 0,
                bottom: 0,
                right: 0,
                marginRight: "1rem",
            }}
        >
            <Box style={styles.boxContainer}>
                <Stack spacing={3}>
                    <div>
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
                        <Typography
                            sx={{
                                lineHeight: "20px",
                                fontSize: "18px",
                                color: "#8692A6",
                                margin: 0,
                                padding: 0,
                            }}
                        >
                            To begin this journey, tell us what type of account
                            you’d be opening.
                        </Typography>
                    </div>
                    <JoinBtnComponent
                        type={"indiidual"}
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
                </Stack>
            </Box>
        </Box>
    );
}

export default FormComponent;
