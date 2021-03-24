import logo from './logo.svg';
import './App.css';
import List from './components/list/List.js'
import Signin from "./components/Auth/SignIn";
import Logout from "./components/Auth/Logout";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { useHistory } from 'react-router-dom';
// import Users from "./components/Users/Users";
// import Header from "./components/Header";
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Registration from './components/Auth/Registration';
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

function App() {
  const classes = useStyles();
  return (
    /*  <div className="App">
       <List />
     </div> */
    <Router>

      <div className="App">

        {/* <Header /> */}

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <div className={classes.root} className="navbar">
          <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <img style={{ height: '40px' }} src='https://img.favpng.com/17/7/9/logo-management-system-health-administration-hospital-png-favpng-808Qk95s5mTAdbTW9hAhjaaj6.jpg'></img>
              </IconButton>
              {/*  <Typography variant="h6" className={classes.title}>
                <img style={{ height: '40px' }} src='https://img.favpng.com/17/7/9/logo-management-system-health-administration-hospital-png-favpng-808Qk95s5mTAdbTW9hAhjaaj6.jpg'></img>
              </Typography> */}
              <Button color="inherit"><Link to="/" className="link">HPS</Link></Button>
              <Button color="inherit"><Link to="/Registration" className="link">Register here</Link></Button>

              <Button color="inherit"> <Link to="/login" className="link">Login</Link></Button>
              <Button color="inherit"> <Link to="/logout" className="link">Logout</Link></Button>
            </Toolbar>
          </AppBar>
        </div>

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
      </div>
    </Router>
  );
}

export default App;
