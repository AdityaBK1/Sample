import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "20px",
    marginTop: "20px",
    alignItems: "center",
    paddingBottom: "25px",
    textAlign: "center",
  },
  submitButton: {
    width: "95px",
    height: "59px",
    background: "linear-gradient(135deg, #FFD700, #FF6347)",
    color: "white",
    marginTop: "20px",
    borderRadius: "10px",
  },
  bookingText: {
    fontSize: "24px",
    fontWeight: "bold",
    textAlign: "center",
    padding: "30px",
  },
  frame: {
    background: "linear-gradient(135deg, #e46bee, #61ff6b)",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
    padding: "20px",
  },
}));

export default function BasicDateRangePicker() {
  const classes = useStyles();

  const handleSubmit = () => {
    // Add your submit logic here
    console.log("Form submitted!");
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="false" sx={{ marginY: "2" }}>
        <div className={classes.frame} style={{ padding: "0 20px" }}>
          <div className={classes.container}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              className={classes.submitButton}
            >
              <b>ADMIN PANEL</b>
            </Button>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
}
