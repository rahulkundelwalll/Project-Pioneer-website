import { Box, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import './dept.css'


import heroImg from "../media/h.png";
import CustomButton from "../components/CustomButton";

const Hero = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: "#000336",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));

  return (
    <Box sx={{ backgroundColor: "white", minHeight: "80vh"  }}>
      <Container>
        
        <CustomBox>
          <Box sx={{ flex: "1" }}>
            <Typography
              variant="body2"
              sx={{
                fontSize: "18px",
                color: "#687690",
                fontWeight: "500",
                mt: 20,
                mb: 4,
              }}
            >
              Welcome to IIT Jammu
            </Typography>
            <Title variant="h1">
            Search for the perfect project is a journey of innovation
            </Title>
            <Typography
              variant="body2"
              sx={{ fontSize: "18px", color: "#5A6473", my: 4 }}
            >
              where curiosity is your compass, and every challenge is a hidden treasure waiting to be discovered.
            </Typography>
            <Link to="/" style={{ textDecoration: "none" }}>
            <CustomButton
              backgroundColor="#0F1B4C"
              color="#fff"
              buttonText="Home"
              heroBtn={true}
            />
            </Link>
          </Box>

          <Box className='boxx' sx={{ flex: "1.25", mt: 20}}>
          <label id="lab">Department</label>
            <ul className="list">
                <li>Computer Science</li>
                <li>Electical Engineering</li>
                <li>Chemical Engineering</li>
                <li>Civil Engineering</li>
                <li>Mechanical Engineering</li>
                <li>Material Engineering</li>
            </ul>
          </Box>
        </CustomBox>
      </Container>
    </Box>
  );
};

export default Hero;
