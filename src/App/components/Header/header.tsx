import React from 'react';

// MUI
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import { ListItem, ListItemText } from "@material-ui/core";

interface HeaderProps {
    classes: any
}

const Header = ({ classes }: HeaderProps) => {
    const menu = ["Home", "About Us", "Services", "Solutions", "Info", "Careers", "Blog"];

    return (
        <AppBar position="static" color="inherit">
            <Toolbar>
                <Grid container spacing={0} alignItems="center" justify="center">
                    <Grid item xs={12} sm={3}>
                        <div className={classes.gridContent}>
                            <span className={classes.label}>LOGO</span>
                        </div>
                    </Grid>
                    {
                        menu.map(item => (
                            <Grid item>
                                <ListItem button>
                                    <ListItemText primary={item} />
                                </ListItem>
                            </Grid>
                        ))
                    }
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Header;

