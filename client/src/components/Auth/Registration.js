import React, { useState, useEffect } from 'react'
import { Grid, TextField, Typography, Button } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";


function Registration() {

    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [name, setName] = useState('');
    const history = useHistory();
    // to check single user and no repeat
    const [unique, setUnique] = useState(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        let user = { email, pwd, name };
        const res = await axios.post("http://localhost:4000/api/Registration/add", user)
        console.log(res);

    }


    return (
        <div>
            <Grid container spacing={3}>

                <Grid item xs={1} md={2} lg={3}>
                </Grid>

                <Grid item xs={10} md={8} lg={6} className='form-container' >
                    <Typography variant='h4' className='title' >Register here </Typography>
                    <form className='signup-form' onSubmit={handleSubmit}>

                        <Grid className='signup-inputs' container spacing={1} alignItems="flex-end">
                            <Grid item sm={1} md={1}>
                                <EmailIcon className='icon' />
                            </Grid>
                            <Grid item item sm={10} md={6}>
                                <TextField className='input-textfield' label="Name"
                                    onChange={(e) => setName(e.target.value)} />
                            </Grid>
                        </Grid>
                        <Grid className='signup-inputs' container spacing={1} alignItems="flex-end">
                            <Grid item sm={1} md={1}>
                                <EmailIcon className='icon' />
                            </Grid>
                            <Grid item item sm={10} md={6}>
                                <TextField className='input-textfield' label="Email"
                                    onChange={(e) => setEmail(e.target.value)} />
                            </Grid>
                        </Grid>


                        <Grid className='signup-inputs' container spacing={1} alignItems="flex-end">
                            <Grid item sm={1} md={1}>
                                <LockIcon className='icon' />
                            </Grid>
                            <Grid item item sm={10} md={6}>
                                <TextField className='input-textfield' label="Password" type='password'
                                    onChange={(e) => setPwd(e.target.value)} />
                            </Grid>
                        </Grid>

                        <Grid className='signup-inputs' container spacing={1} alignItems="flex-end">
                            <Grid item item sm={10} md={6}>
                                <Button type='submit' variant='contained' className='submit'>Register</Button>
                            </Grid>
                        </Grid>
                        <Router>
                            <Grid className='signup-inputs' container spacing={1} alignItems="flex-end">
                                <Grid item item sm={10} md={6}>
                                    Don't have an account?  <a href=''>
                                        <Link to="/">Register</Link>
                                    </a>
                                </Grid>

                            </Grid>
                            <Switch>
                                <Route path="/">

                                </Route>
                            </Switch>
                        </Router>
                    </form>
                </Grid>

                <Grid item xs={1} md={2} lg={3}>
                </Grid>

            </Grid>

        </div>
    )
}

export default Registration