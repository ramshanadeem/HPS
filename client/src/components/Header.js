import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import {
    BrowserRouter as Router,
    Switch,
    Route,

} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '../components/list/List.js'
import Signin from "../components/Auth/SignIn";
import Logout from "../components/Auth/Logout";

import Registration from '../components/Auth/Registration';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Header = () => {
    const classes = useStyles();

    return (
        /* <Navbar bg="success" variant="dark" className="">
             <Navbar.Brand as={Link} to="/">
                 HPS
         </Navbar.Brand>
             <Nav className="mr-auto">
 
                 <Nav.Link as={Link} to="/Registration">
                     Registration
             </Nav.Link>
                 <Nav.Link as={Link} to="/login">
                     Login
             </Nav.Link>
                 <Nav.Link as={Link} to="/logout">
                     Logout
               </Nav.Link>
 
 
 
             </Nav>
         </Navbar>*/
        <Router>
            <div className={classes.root} className="navbar">
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            <img style={{ height: '60px' }} src=''></img>
                        </Typography>
                        <Button color="inherit"><Link to="/" className="link">HPS</Link></Button>
                        <Button color="inherit"><Link to="/Registration" className="link">Register here</Link></Button>

                        <Button color="inherit"> <Link to="/login" className="link">Login</Link></Button>
                        <Button color="inherit"> <Link to="/logout" className="link">Logout</Link></Button>
                    </Toolbar>
                </AppBar>
            </div>

            {/*  <div>

                <Header />

                <Switch>
                    <Route path="/Registration">
                        <Registration />
                    </Route>
                    <Route path="/login">
                        <Signin />
                    </Route>
                    <Route path="/logout">
                        <Logout />
                    </Route>
                    <Route path="/">
                        <List />
                    </Route>
                </Switch>
            </div> */}
        </Router>

    );
};

export default Header;