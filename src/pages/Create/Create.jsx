import { KeyboardArrowRight } from "@mui/icons-material";
import { Button, Container, Typography } from "@mui/material";

const Create = () => {
    const handaleSubmit = () => {
        console.log("yes Click me")
    }
    return (
        <Container>
            <Typography
                variant="h6"
                color="textDisabled"
                component="h2"
                gutterBottom
            >
                Create A New Note
            </Typography>

            <Button
                onClick={() => handaleSubmit()}
                type="submit"
                variant="contained"
                color="secondary"
                endIcon={<KeyboardArrowRight />}
            >Create</Button>
        </Container>
    );
};

export default Create;