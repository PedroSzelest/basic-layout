import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";

//Icons
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import "./Footer.css";

const Footer = () => {
  return (
    <Grid container className="main_footer_container">
      <Grid item className="footer_logo_container">
        <Link to="/">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 5 }}
          >
            Logo
          </IconButton>
        </Link>
      </Grid>
      <Grid item className="footer_numbers_container">
        <Typography component="overline">NUMBER1 0000-0000</Typography>
        <Typography component="overline">NUMBER2 0000-0000</Typography>
        <Typography component="overline">NUMBER3 0000-0000</Typography>
        <Typography component="overline">NUMBER4 0000-0000</Typography>
      </Grid>
      <Grid item className="footer_social-media_container">
        <Typography component="h6">Connect with Us</Typography>
        <Box component="div">
          <IconButton className="footer_icon">
            <FacebookIcon />
          </IconButton>
          <IconButton className="footer_icon">
            <InstagramIcon />
          </IconButton>
          <IconButton className="footer_icon">
            <LinkedInIcon />
          </IconButton>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Footer;
