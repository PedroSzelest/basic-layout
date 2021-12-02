import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";

//Icons
import BackupTableIcon from "@material-ui/icons/Backup";
import PublicIcon from "@material-ui/icons/Public";
import SecurityIcon from "@material-ui/icons/Security";
import ShareIcon from "@material-ui/icons/Share";
import SearchIcon from "@material-ui/icons/Search";

import "./Work.css";

const Work = () => {
  return (
    <Box component="section" className="work_container">
      <Box component="div" className="work_image_container">
        <Typography component="h2">How we work</Typography>
      </Box>
      <Box className="work_list_container">
        <List className="work_list">
          <ListItem key="first" disableGutters className="work_list_item">
            <ListItemIcon>
              <BackupTableIcon sx={{ fontSize: "3rem" }} />
            </ListItemIcon>
            <Typography component="h3">Customised Approach</Typography>
            <ListItemText
              primary={
                "We do not rely on existing networks, we specialise in identifying top candidates in our clients’ direct competitors or target firms and persuading them to consider the opportunity with the client that we are representing."
              }
              className="work_list_text"
            />
          </ListItem>
          <ListItem key="second" disableGutters className="work_list_item">
            <ListItemIcon>
              <PublicIcon sx={{ fontSize: "3rem" }} />
            </ListItemIcon>
            <Typography component="h3">Customised Approach</Typography>
            <ListItemText
              primary={
                "We do not rely on existing networks, we specialise in identifying top candidates in our clients’ direct competitors or target firms and persuading them to consider the opportunity with the client that we are representing."
              }
              className="work_list_text"
            />
          </ListItem>
          <ListItem key="third" disableGutters className="work_list_item">
            <ListItemIcon>
              <SecurityIcon sx={{ fontSize: "3rem" }} />
            </ListItemIcon>
            <Typography component="h3">Customised Approach</Typography>
            <ListItemText
              primary={
                "We do not rely on existing networks, we specialise in identifying top candidates in our clients’ direct competitors or target firms and persuading them to consider the opportunity with the client that we are representing."
              }
              className="work_list_text"
            />
          </ListItem>
          <ListItem key="first" disableGutters className="work_list_item">
            <ListItemIcon>
              <ShareIcon sx={{ fontSize: "3rem" }} />
            </ListItemIcon>
            <Typography component="h3">Customised Approach</Typography>
            <ListItemText
              primary={
                "We do not rely on existing networks, we specialise in identifying top candidates in our clients’ direct competitors or target firms and persuading them to consider the opportunity with the client that we are representing."
              }
              className="work_list_text"
            />
          </ListItem>
          <ListItem key="fourth" disableGutters className="work_list_item">
            <ListItemIcon>
              <SearchIcon sx={{ fontSize: "3rem" }} />
            </ListItemIcon>
            <Typography component="h3">Customised Approach</Typography>
            <ListItemText
              primary={
                "We do not rely on existing networks, we specialise in identifying top candidates in our clients’ direct competitors or target firms and persuading them to consider the opportunity with the client that we are representing."
              }
              className="work_list_text"
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Work;
