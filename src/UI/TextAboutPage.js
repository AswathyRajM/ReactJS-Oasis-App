import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

import backArrow from "../images/arrow_back_ios_24px.svg";

function TextAboutPage(props) {
    const navigate = useNavigate();
    return (
        <Box sx={{ marginTop: { lg: "3rem", xs: "2.5rem" } }}>
            {props.subText ? (
                <div>
                    <Box
                        sx={{
                            textAlign: "center",
                            display: "flex",
                            justifyContent: "flex-end",
                            marginRight: { lg: "4rem", xs: "2.5rem" },
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                fontSize: "14px",
                                marginRight: "auto",
                                marginLeft: {
                                    lg: "4rem",
                                    xs: "2.5rem",
                                },
                                marginY: "auto",
                                cursor: "pointer",
                            }}
                            color="#8692A6"
                            onClick={() => navigate(-1)}
                        >
                            <div style={{ width: "20px", height: "20px" }}>
                                <img
                                    src={backArrow}
                                    style={{
                                        marginY: "auto",
                                        width: "20px",
                                        height: "20px",
                                    }}
                                    alt="img0"
                                />
                            </div>

                            <Typography
                                sx={{
                                    marginLeft: "16px",
                                }}
                            >
                                Back
                            </Typography>
                        </Box>

                        <Typography
                            sx={{
                                fontSize: "14px",
                            }}
                            color="#BDBDBD"
                        >
                            {props.subText}
                        </Typography>
                    </Box>
                </div>
            ) : (
                ""
            )}
            <Box
                sx={{
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "flex-end",
                    marginRight: { lg: "4rem", xs: "0rem" },
                    fontSize: "16px",
                }}
            >
                <Typography
                    sx={{
                        display: { xs: "none", sm: "block" },
                    }}
                    color="#8692A6"
                >
                    {props.title}
                </Typography>

                <Typography color="blue">
                    {props.signin ? "Sign In" : ""}
                </Typography>
            </Box>
        </Box>
    );
}

export default TextAboutPage;
