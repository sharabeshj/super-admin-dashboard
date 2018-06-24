import React from 'react'
import PropTypes from 'prop-types';
import { withStyles, Typography } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

const drawerWidth = 240;

const styles = theme => ({
    root : {
        flexGrow : 1,
    },
    appFrame : {
        height : '100%',
        zIndex : 1,
        overflow : 'hidden',
        position : 'relative',
        display : 'flex',
        width : '100%',
    },
    appbar : {
        width : `calc(100% - $(drawerWidth)px)`,
        marginLeft : drawerWidth,
    },
    drawerPaper : {
        position : 'relative',
        width : drawerWidth,
    },
    toolbar :theme.mixins.toolbar,
    content : {
        flexGrow : 1,
        backgroundColor : theme.palette.background.default,
        padding : theme.spacing.unit * 3,
    },
});

class Layout extends React.Component{
    state = {
        anchor : 'left',
    };
    render() {
        const { classes } = this.props;
        const { anchor } = this.state;
        const drawer = (
            <Drawer
                variant = "permanent"
                classes = {{
                    paper : classes.drawerPaper,
                }}
                anchor = { anchor }
            >
                <div className = { classes.toolbar } />
                <Divider />
                <List> DASHBOARD </List>
            </Drawer>
        );
        return (
            <div className = { classes.root }>
                <div className = { classes.appFrame }>
                    <AppBar
                        position = "absolute"
                        className = { classes.appbar }
                    >
                        <Toolbar>
                            <Typography
                                variant = "title" 
                                color = "iniherit"
                                noWrap
                            >
                                Dashboard
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    { drawer }
                    <main className = { classes.content }>
                        { this.props.children }
                    </main>
                </div>
            </div>
        );
    }
}

Layout.propTypes = {
    classes : PropTypes.object.isRequired,
}

export default withStyles(styles)(Layout);