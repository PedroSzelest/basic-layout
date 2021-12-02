import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

import "./Contact.css";

const Contact = () => {
  return (
    <Box component="section" className="contact_container">
      <Box component="div" className="contact_image_container">
        <Typography component="h3" className="contact_image_text">
          Contact
        </Typography>
      </Box>
      <Box component="article" className="contact_contact">
        <Typography component="h3">Phone Numbers</Typography>
        <Typography component="p">
          <span>First</span> 0000-0000
        </Typography>
        <Typography component="p">
          <span>Second</span> 0000-0000
        </Typography>
        <Typography component="p">
          <span>Third</span> 0000-0000
        </Typography>
        <Typography component="p">
          <span>Fourth</span> 0000-0000
        </Typography>
        <Typography component="p">
          <span>Fifth</span> 0000-0000
        </Typography>
      </Box>
      <Box component="article" className="contact_contact">
        <Typography component="h3">E-mail</Typography>
        <Link href="#" color="primary">email@domain.com</Link>
      </Box>
    </Box>
  );
};

export default Contact;
