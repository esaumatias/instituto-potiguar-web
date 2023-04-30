import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

import Logo from "../../Assets/Logo.png";

import "./MainTopBar.css";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  // Override media queries injected by theme.mixins.toolbar
  "@media all": {
    width: "80vw",
  },
}));

const drawerWidth = "80vw";
const navItems = ["Início", "Sobre", "Notícias", "Contato"];

export function MainTopbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = useState("Início");

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <img
          src={Logo}
          alt="logo instituto potiguar"
          style={{ width: "120px" }}
        />
      </Typography>
      <Divider />
      <List>
        <div className="containerNavHeaderMobile">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleItemClick(item)}
              className={
                selectedItem === item
                  ? "selectedMenu buttonNavHeader"
                  : "buttonNavHeader"
              }
            >
              {item}
            </button>
          ))}
        </div>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ }}>
      <CssBaseline />
      <StyledToolbar>
        <AppBar
          component="nav"
          position="static"
          style={{
            backgroundColor: "#fff",
            paddingTop: "10px",
            boxShadow: "none",
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { md: "none" }, backgroundColor: "#114D24" }}
            >
              <MenuIcon />
            </IconButton>

            <Typography
              sx={{ display: { xs: "block", md: "none" } }}
            >
              <img
                src={Logo}
                alt="logo instituto potiguar"
                style={{ width: "120px" }}
              />
            </Typography>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "block" },
              }}
            >
              <img src={Logo} alt="logo instituto potiguar" />
            </Typography>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <div className="containerNavHeader">
                {navItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => handleItemClick(item)}
                    className={
                      selectedItem === item
                        ? "selectedMenu buttonNavHeader"
                        : "buttonNavHeader"
                    }
                  >
                    {item}
                  </button>
                ))}
              </div>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", md: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </StyledToolbar>
    </Box>
  );
}
