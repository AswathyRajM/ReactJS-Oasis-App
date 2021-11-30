import React from "react";
import { styled } from "@mui/material/styles";
import {
    Avatar,
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    Grid,
    MenuItem,
    OutlinedInput,
    Select,
    Stack,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

import TextAboutPage from "../../UI/TextAboutPage";
import "./index.css";

function BankVerification() {
    const navigate = useNavigate();
    const [country, setcountry] = React.useState(0);
    const handleChange = (event) => {
        setcountry(event.target.value);
    };
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
        inputBoxShadow: {
            borderRadius: "6px",
            marginBottom: "5px",
            "&:focus": {
                boxShadow: "0px 4px 10px 3px rgba(0, 0, 0, 0.11)",
            },
            "&:hover": {
                boxShadow: "0px 4px 10px 3px rgba(0, 0, 0, 0.11)",
            },
        },
    };

    const ColorButton = styled(Button)(({ theme }) => ({
        backgroundColor: "#1565D8",
        textTransform: "capitalize",
    }));

    const title = "Residency Info";
    const subText = "STEP 03/03";

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
                            maxWidth: "27.5rem",
                            marginLeft: { lg: "4rem", xs: "2.5rem" },
                            paddingX: { lg: "6rem", xs: "2.5rem" },
                            paddingY: { lg: "1rem", xs: ".5rem" },
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
                                Complete Your Profile!
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography
                                sx={{
                                    lineHeight: "20px",
                                    fontSize: "18px",
                                    color: "#8692A6",
                                    marginBottom: "1.5rem",
                                    paddingRight: "80px",
                                }}
                            >
                                For the purpose of industry regulation, your
                                details are required.
                            </Typography>
                        </Grid>
                        <FormControl variant="outlined" sx={{ my: 1 }}>
                            <label className={"form-label"} htmlFor="name">
                                Bank verification number (BVN)
                            </label>
                            <OutlinedInput
                                id="name"
                                aria-describedby="outlined-weight-helper-text"
                                fullWidth
                                autoFocus
                                placeholder="Enter your name"
                                required
                                sx={styles.inputBoxShadow}
                            />
                        </FormControl>

                        <ColorButton
                            onClick={() => navigate("/bankverification-info")}
                            sx={{
                                marginTop: "20px",
                                paddingY: "1rem",
                            }}
                            variant="contained"
                            size="large"
                        >
                            Save & Continue
                        </ColorButton>
                        <Typography
                            sx={{
                                color: "#8692A6",
                                py: 2,
                                marginX: "auto",
                            }}
                        >
                            L Your info is safely secured
                        </Typography>
                    </Stack>
                </Box>
            </Box>
        </Box>
    );
}

export default BankVerification;


// <Avatar
// sx={{ paddingRight: "3rem" }}
// src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
// />