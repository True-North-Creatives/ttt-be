import React, { useState, useRef } from 'react';
import clsx from 'clsx';
import {
    makeStyles,
    useTheme,
    Theme,
    createStyles,
} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import useOnClickOutSide from '../hooks/useOnClickOutSide';
import Logo from '../Logo';
import { NavLink } from 'react-router-dom';

import Classes from './header.module.css';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        appBar: {
            background: 'transparent',
            left: '0px',
            top: '0px',
            width: '15%',
            boxShadow: 'none',
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        hide: {
            display: 'none',
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
            background: '#525252',
        },
        drawerHeader: {
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(0, 1),
            ...theme.mixins.toolbar,
            justifyContent: 'flex-end',
            background: '#525252',
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            marginLeft: -drawerWidth,
        },
        contentShift: {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        },
        list_item: {
            fontSize: '20px',
            paddingTop: '8px',
            paddingBottom: '8px',
            paddingLeft: '2.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column',
            lineHeight: '200%',
        },
        item_list: {
            color: 'white',
            textDecoration: 'none !important',
            listStyle: 'none !important',
            marginBottom: '5%',
        },
        icon_header: {
            color: 'white',
        },
    })
);

export default function Header() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const headerData = [
        {
            title: 'Home',
            link: '/',
        },
        {
            title: 'Services',
            link: '/services',
        },
        {
            title: 'Our Experts',
            link: '/our-experts',
        },
        {
            title: 'FAQs',
            link: '/faq',
        },
        // {
        //   title: "Login/Register",
        //   link: "/",
        // },
    ];

    const ref = useRef(null);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    useOnClickOutSide(ref, () => {
        setOpen(false);
    });

    return (
        <div className={Classes.container}>
            <div className={Classes.show}>
                <AppBar
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(
                                classes.menuButton,
                                open && classes.hide
                            )}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    ref={ref}
                    anchor="left"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? (
                                <ChevronLeftIcon
                                    className={classes.icon_header}
                                />
                            ) : (
                                // <MenuIcon className={classes.icon_header} />
                                <ChevronRightIcon />
                            )}
                        </IconButton>
                    </div>
                    <Divider />
                    <List className={classes.list_item}>
                        {headerData.map((item) => (
                            <NavLink
                                className={classes.item_list}
                                activeClassName={Classes.linkActive}
                                to={item.link}
                                exact
                            >
                                {item.title}
                            </NavLink>
                        ))}
                        <a
                            className={classes.item_list}
                            href={`${process.env.REACT_APP_AUTH_URL}/`}
                        >
                            Login
                        </a>
                    </List>
                    <div className={Classes.icons}>
                        <img
                            onClick={() =>
                                window.open(
                                    'https://www.instagram.com/timetotrain.fit/'
                                )
                            }
                            className={Classes.icons_images}
                            src={'insta.svg'}
                            alt="Insta Icon"
                        />
                        <img
                            onClick={() =>
                                window.open(
                                    'https://www.facebook.com/timetotrain.fit'
                                )
                            }
                            className={Classes.icons_images}
                            src={'fb.png'}
                            alt="FaceBook Icon"
                        />
                        <img
                            onClick={() =>
                                window.open(
                                    'https://twitter.com/timetotrain_fit'
                                )
                            }
                            className={Classes.icons_images}
                            src={'twitter png.png'}
                            alt="FaceBook Icon"
                        />
                    </div>
                    <p className={Classes.copyright}>
                        <div style={{ fontSize: 10, padding: 6 }}>
                            <a
                                style={{ color: '#00aeef' }}
                                href="/Privacy_Policy"
                            >
                                Privacy Policy
                            </a>{' '}
                            |{' '}
                            <a
                                style={{ color: '#00aeef' }}
                                href="/terms_and_conditions"
                            >
                                Terms & Conditions
                            </a>
                        </div>
                        Copyright @ 2020 TimeToTrain.Fit. All rights reserved.
                    </p>
                </Drawer>
            </div>
            <Logo />
            <NavLink
                activeClassName={Classes.linkActive}
                className={Classes.link}
                to="/"
                exact
            >
                Home
            </NavLink>
            <NavLink
                activeClassName={Classes.linkActive}
                className={Classes.link}
                to="/services"
                exact
            >
                Services
            </NavLink>
            <NavLink
                activeClassName={Classes.linkActive}
                className={Classes.link}
                to="/our-experts"
                exact
            >
                Our Experts
            </NavLink>
            <NavLink
                activeClassName={Classes.linkActive}
                className={Classes.link}
                to="/faq"
                exact
            >
                FAQs
            </NavLink>
            <a
                className={Classes.link}
                href={`${process.env.REACT_APP_AUTH_URL}/`}
            >
                Login / Register
            </a>
        </div>
    );
}
