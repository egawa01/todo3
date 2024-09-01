import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <div className={styles.root}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className={styles.app_bar}>
          <Toolbar className={styles.tool_bar}>
            <MenuIcon />
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              className={styles.title}
            >
              Todo
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Header;
