import { Typography } from "@mui/material";
import { Box } from "@mui/system";

function TextAboutPage(props) {
    return (
        <Box
            sx={{
                marginTop: { lg: "3rem", xs: "2.5rem" },
                textAlign: "center",
                display: "flex",
                justifyContent: "flex-end",
                marginRight: { lg: "4rem", xs: "2.5rem" },
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
    );
}

export default TextAboutPage;
