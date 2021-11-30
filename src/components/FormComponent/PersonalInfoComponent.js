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
    OutlinedInput,
    InputAdornment,
    Stack,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import TextAboutPage from "../../UI/TextAboutPage";
import "./index.css";

function PersonalInfoForm() {
    const navigate = useNavigate();

    const [values, setValues] = React.useState({
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
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
    }));

    const NoBorderButton = styled(Button)(({ theme }) => ({
        borderColor: "#fff",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.08)",
        "&:hover": {
            borderColor: "#1565D8",
        },
    }));

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
                                Register Individual Account!
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
                                Your fullname*
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
                        <FormControl variant="outlined" sx={{ my: 1 }}>
                            <label className={"form-label"} htmlFor="email">
                                Email address*
                            </label>
                            <OutlinedInput
                                id="email"
                                aria-describedby="outlined-weight-helper-text"
                                fullWidth
                                placeholder="Enter email address"
                                required
                                sx={styles.inputBoxShadow}
                            />
                        </FormControl>
                        <FormControl variant="outlined" sx={{ my: 1 }}>
                            <label className={"form-label"} htmlFor="password">
                                Create password*
                            </label>
                            {/* <OutlinedInput
                                id="password"
                                aria-describedby="outlined-weight-helper-text"
                                fullWidth
                                placeholder="Enter new password"
                                required
                                sx={styles.inputBoxShadow}
                            /> */}

                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={values.showPassword ? "text" : "password"}
                                value={values.password}
                                onChange={handleChange("password")}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={
                                                handleMouseDownPassword
                                            }
                                            edge="end"
                                        >
                                            {values.showPassword ? (
                                                <Typography>Hide</Typography>
                                            ) : (
                                                <Typography>Show</Typography>
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox defaultChecked />}
                                label="I agree to terms & conditions"
                            />
                        </FormGroup>
                        <ColorButton
                            onClick={() => navigate("/residency-info")}
                            sx={{
                                marginTop: "20px",
                                paddingY: "1rem",
                            }}
                            variant="contained"
                            size="large"
                        >
                            Register Account
                        </ColorButton>
                        <NoBorderButton
                            variant="outlined"
                            sx={{
                                marginTop: "40px",
                                paddingY: ".5rem",
                                paddingRight: "6rem",
                            }}
                            startIcon={
                                <Avatar
                                    sx={{ paddingRight: "3rem" }}
                                    src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
                                />
                            }
                        >
                            Register with Google
                        </NoBorderButton>
                    </Stack>
                </Box>
            </Box>
        </Box>
    );
}

export default PersonalInfoForm;
