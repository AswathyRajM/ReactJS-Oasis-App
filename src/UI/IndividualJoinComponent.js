import { useState } from "react";
import { createTheme, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ThemeProvider } from "@emotion/react";
import { useNavigate } from "react-router-dom";

import rightArrowIcon from "../images/right-arrow.svg";

const theme = createTheme({
    typography: {
        display: "block",
        textAlign: "left",
    },
});

function JoinContainer(props) {
    const [hover, setHover] = useState(false);
    const navigate = useNavigate();

    const { iconImg, iconImgOnHover, subTitle, paragraph } = props;

    const userUrl = hover ? iconImgOnHover : iconImg;
    return (
        <div onClick={() => navigate("/personal-info")}>
            <Box
                sx={{
                    backgroundColor: "#F5F9FF",
                    width: "26.625rem",
                    height: "fit-content",
                    boxShadow: "0px 4px 14px 1px rgba(0, 0, 0, 0.04)",
                    borderRadius: "6px",
                    border: "1px solid #F5F9FF",
                    "&:hover": {
                        border: "1px solid #1565D8",
                    },
                    cursor: "pointer",
                }}
            >
                <div
                    onMouseOver={() => setHover(true)}
                    onMouseOut={() => setHover(false)}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-evenly",
                            paddingY: "1.75rem",
                        }}
                    >
                        <img
                            src={userUrl}
                            style={{
                                width: "3.25rem",
                                maxWidth: "52px",
                            }}
                        />
                        <ThemeProvider theme={theme}>
                            <Stack spacing={0.3}>
                                <Typography
                                    sx={{
                                        fontSize: "16px",
                                        fontWeight: "500",
                                        lineHeight: "19px",
                                    }}
                                >
                                    {subTitle}
                                </Typography>
                                <div style={{ width: "14.5rem" }}>
                                    <Typography
                                        sx={{
                                            lineHeight: "17px",
                                            fontSize: "14px",
                                            color: "#8692A6",
                                        }}
                                    >
                                        {paragraph}
                                    </Typography>
                                </div>
                            </Stack>
                        </ThemeProvider>
                        <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            sx={{ minWidth: "14px" }}
                        >
                            {hover ? (
                                <img
                                    style={{
                                        width: "1rem",
                                        maxWidth: "14px",
                                    }}
                                    src={rightArrowIcon}
                                />
                            ) : (
                                ""
                            )}
                        </Box>
                    </Box>
                </div>
            </Box>
        </div>
    );
}

export default JoinContainer;
