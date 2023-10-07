import logo from '../assets/logo.png';

export const Header = () => {


    return (
        <header>
            
            <div className="logo">
            
            <img src={logo} alt="Logo" />
            </div>
            
                <button>Random chant</button>
                <input type="text" placeholder="Search for team or chant" />
                <button>Battle</button>


            <div className="logout"><button>Log in</button></div>
            
        </header>
    );

}

/*import { AppBar, Toolbar, IconButton, Button, TextField, Box, Drawer, List, ListItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import logo from '../assets/logo.png';

export const Header = () => {
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Box display="flex" alignItems="center">
                    <img src={logo} alt="Logo" height="50" style={{ marginRight: '20px' }} />
                    <Box flexGrow={1} display="flex" alignItems="center">
                        <Box display={{ xs: 'none', md: 'flex' }} alignItems="center" flexGrow={1}>
                            <Button variant="contained" color="primary" style={{ marginRight: '10px' }}>Random chant</Button>
                            <TextField variant="outlined" placeholder="Search for team or chant" size="small" />
                            <Button variant="contained" color="secondary" style={{ marginLeft: '10px' }}>Battle</Button>
                            <Button color="inherit">Log in</Button>
                        </Box>
                        <Box display={{ xs: 'flex', md: 'none' }}>
                            <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
                                <MenuIcon />
                            </IconButton>
                        </Box>
                    </Box>
                </Box>
            </Toolbar>
            <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
                <List>
                    <ListItem button>
                        <Button variant="contained" color="primary">Random chant</Button>
                    </ListItem>
                    <ListItem button>
                        <TextField variant="outlined" placeholder="Search for team or chant" fullWidth size="small" />
                    </ListItem>
                    <ListItem button>
                        <Button variant="contained" color="secondary">Battle</Button>
                    </ListItem>
                </List>
            </Drawer>
        </AppBar>
    );
}
*/