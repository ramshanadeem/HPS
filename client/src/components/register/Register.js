import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import { Form, Field } from 'react-final-form';
import { Checkbox, Radio, Select } from 'final-form-material-ui';
import FormHelperText from '@material-ui/core/FormHelperText';
import clsx from 'clsx';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Popup from '../Popup';
import axios from 'axios';
import {
  Typography,
  Paper,
  Link,
  Grid,
  Button,
  CssBaseline,
  RadioGroup,
  FormLabel,
  MenuItem,
  FormGroup,
  FormControl,
  FormControlLabel,
} from '@material-ui/core';
// Picker
import DateFnsUtils from '@date-io/date-fns';

import {
  MuiPickersUtilsProvider,
  TimePicker,
  DatePicker,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import GlobalHeader from '../GlobalHeader';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
const defaultProps = {
  bgcolor: 'background.paper',
  m: 1,
  style: { width: '5rem', height: '5rem' },
  borderColor: 'text.primary',
};
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));




export default function Register({ next, back }) {
  const classes = useStyles();
  const [value, setValue] = React.useState('Controlled');
  const [err, setErr] = useState('')
  const [posts, setposts] = useState([]);
  const [options, setOptions] = useState(false)
  const [disableHelpType, setdisableHelpType] = React.useState('block')
  const [open, setOpen] = useState(false)
  /*   const handlereligion = (val) => {
      if (val != "Islam") {
        setdisableHelpType(true)
  
  
      }
      else {
        setdisableHelpType(false)
      }
    } */
  const handleOption = (val) => {
    if (val !== 'islam') {
      setdisableHelpType('none')
    }
  }

  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
  const [Header, setHeader] = useState({
    MRNo: "",
    TokenNo: "",
    RegistrationDate: new Date(),
    Name: "",
    FatherOrHusband: "",
    DOB: new Date(),
    Age: "",
    Gender: "",
    Religion: "",
    District: "",
    City: "",
    Area: "",
    HousNo: "",
    Address: "",
    CNIC: "",
    Phone: "",
    OffPhone: "",
    Mobile: "",
    RefBy: "",
    Remarks: "",
    IsRejected: false,
    IsZakat: false,
    IsPAFEmp: false,
    MonthlyConsLimit: 0,
    ThumbImage: "",
    NOY: "",
    EmpID: "",
    IsStaff: false,
    CreateUser: "",
    ModifyUser: "",
    CreateDate: "",
    ModifyDate: ""
  });
  const validate = () => {
    if (Header.TokenNo === '' || Header.TokenNo === undefined || Header.TokenNo === null) {
      setErr('Token is missing')
      setOpen(true)
      return false;
    }
    else if (Header.RegistrationDate === '' || Header.RegistrationDate === undefined || Header.RegistrationDate === null) {
      setErr('RegistrationDate is missing')
      return false;
    }
    else if (Header.Name === '' || Header.Name === undefined || Header.Name === null) {
      setErr('Name is missing')
      return false;
    }
    else if (Header.FatherOrHusband === '' || Header.FatherOrHusband === undefined || Header.FatherOrHusband === null) {
      setErr('FatherOrHusband is missing')
      return false;
    }
    else if (Header.DOB === '' || Header.DOB === undefined || Header.DOB === null) {
      setErr('Date of Birth is missing')
      return false;
    }
    else if (Header.Age === '' || Header.Age === undefined || Header.Age === null) {
      setErr('Age is missing')
      return false;
    }
    else if (Header.Gender === '' || Header.Gender === undefined || Header.Gender === null) {
      setErr('Gender is missing')
      return false;
    }
    else if (Header.Religion === '' || Header.Religion === undefined || Header.Religion === null) {
      setErr('Religion is missing')
      return false;
    }
    else if (Header.IsZakat === '' || Header.IsZakat === undefined || Header.IsZakat === null) {
      setErr('Zakaat is missing')
      return false;
    }
    else if (Header.CNIC === '' || Header.CNIC === undefined || Header.CNIC === null) {
      setErr('CNIC is missing')
      return false;
    }

    else if (Header.HousNo === '' || Header.HousNo === undefined || Header.HousNo === null) {
      setErr('House No is missing')
      return false;
    }
    else if (Header.Address === '' || Header.Address === undefined || Header.Address === null) {
      setErr('Address is missing')
      return false;
    }
    else if (Header.Area === '' || Header.Area === undefined || Header.Area === null) {
      setErr('Area is missing')
      return false;
    }
    else if (Header.City === '' || Header.City === undefined || Header.City === null) {
      setErr('Ciy is missing')
      return false;
    }

    else if (Header.Mobile === '' || Header.Mobile === undefined || Header.Mobile === null) {
      setErr('Mobile is missing')
      return false;
    }
    else if (Header.EmpID === '' || Header.EmpID === undefined || Header.EmpID === null) {
      setErr('Employee ID is missing')
      return false;
    }
    else if (Header.NOY === '' || Header.Name === undefined || Header.Name === null) {
      setErr('NOY is missing')
      return false;
    }
    else if (Header.IsPAFEmp === '' || Header.IsPAFEmp === undefined || Header.IsPAFEmp === null) {
      setErr('PAF Employee is missing')
      return false;
    }

    else if (Header.IsRejected === '' || Header.IsRejected === undefined || Header.IsRejected === null) {
      setErr('Rejection is missing')
      return false;
    }

    else {
      return true;
    }
  }
  /*   const [valid, setvalid] = useState()
    const validateI = (valid) => {
      if (valid != TokenNo) {
        setvalid(console.log("er"))
      }
      else {
        setvalid("true")
      }
    } */


  const handleSubmit = async (e) => {
    // validate();
    e.preventDefault();
    setHeader(e.target.value);
    //  validateI();
    //console.log("not" + err)
    console.log(Header);
    next();
    const res = await axios.post("http://localhost:4000/api/Regusers/add", Header)
    console.log(res);

  }

  useEffect(() => {

    axios.get(`http://localhost:4000/api/register/`)
      .then(res => {
        console.log(res)
        // setHeader()
      })
  }, [])



  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  /* const handleOption = (val) => {
    if (val != 'islam') {
      setOptions(true)
    }
    else {
      setOptions(false)
    }
  } */



  /*   const handleChange = (event) => {
      setValue(event.target.value);
    }; */

  /*  useEffect(() => {
     axios.post("http://localhost:4000/api/Regusers", Header)
       .then((res) => {
         console.log(res.data);
         setHeader(res.data.Header)
       })
       .catch((e) => console.log(e));
   }, []); */
  return (
    <>
      <Popup msg={err} open={open} handleClose={() => setOpen(false)} />
      <GlobalHeader forward={handleSubmit} back={back} title="Registeration" />
      <div style={{ padding: 16, margin: 'auto' }}>

        <CssBaseline />
        <Typography variant="h4" align="center" component="h1" gutterBottom>
          🏁 Registeration
      </Typography>

        <Form
          action="http://localhost:4000/api/Regusers/add"
          onSubmit={handleSubmit}
          initialValues={{ employed: true, stooge: 'larry' }}
          validate={validate}
          render={({ handleSubmit, reset, submitting, pristine, values }) => (
            <form className={classes.root} noValidate autoComplete="off" noValidate>
              <Paper style={{ padding: 16 }}>
                <Grid container alignItems="flex-start" spacing={2}>
                  <Grid item xs={3}>
                    <Field
                      fullWidth
                      disabled
                      id="filled-disabled"
                      required
                      name="MR NO"
                      component={TextField}
                      type="text"
                      label="MR NO"
                      variant="outlined"

                    />
                  </Grid>



                  <Grid item xs={3}>
                    <Field
                      fullWidth
                      required
                      name="Token No"
                      component={TextField}
                      type="text"
                      label="Token No"
                      variant="outlined"
                      value={Header.TokenNo}
                      //onClick={(e) => valid({ TokenNo: e.target.value })}
                      onChange={(e) => setHeader({ ...Header, TokenNo: e.target.value })}

                      label="TokenNo"
                    />
                  </Grid>

                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justify="space-around" item xs={3}>

                      <KeyboardDatePicker
                        disableToolbar
                        variant="outlined"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        value={Header.RegistrationDate}
                        label="Registration Date"
                        //value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                          'aria-label': 'change date',
                        }}
                      />
                    </Grid>
                  </MuiPickersUtilsProvider>

                  <Grid item xs={3}>
                    <Field
                      name="name"
                      value={Header.Name}
                      fullWidth
                      required
                      component={TextField}
                      type="name"
                      onChange={(e) => setHeader({ ...Header, Name: e.target.value })}
                      label="name"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <Field
                      name="FNAME"
                      value={Header.FatherOrHusband}
                      onChange={(e) => setHeader({ ...Header, FatherOrHusband: e.target.value })}
                      fullWidth
                      required
                      component={TextField}
                      type="FNAME"
                      label="FNAME"
                      variant="outlined"
                    />
                  </Grid>

                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justify="space-around" item xs={3}>

                      <KeyboardDatePicker
                        disableToolbar
                        variant="outlined"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"

                        label="Date of Birth"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                          'aria-label': 'change date',
                        }}
                      />
                    </Grid>
                  </MuiPickersUtilsProvider>
                  <Grid>

                  </Grid>
                  <Grid item xs={3}>
                    <Field
                      name="Age"
                      fullWidth
                      required
                      component={TextField}
                      type="number"
                      label="Age"
                      variant="outlined"
                      value={Header.Age}
                      onChange={(e) => setHeader({ ...Header, Age: e.target.value })}
                    />
                  </Grid>

                  <Grid item xs={3}>
                    <Field
                      fullWidth
                      name="Gender"
                      component={Select}
                      label="Gender"
                      variant="outlined"
                      formControlProps={{ fullWidth: true }}
                      value={Header.Gender}
                      onChange={(e) => setHeader({ ...Header, Gender: e.target.value })}
                    >
                      <MenuItem value="male">male</MenuItem>
                      <MenuItem value="female">Female</MenuItem>
                      <MenuItem value="Budapest">
                        other
                    </MenuItem>
                    </Field>
                  </Grid>

                  <Grid item xs={3}>
                    <Field
                      fullWidth
                      name="Religion"
                      component={Select}
                      label="Religion"
                      variant="outlined"
                      value={Header.Religion}
                      formControlProps={{ fullWidth: true }}

                      value={Header.Religion}
                      onChange={(e) => {
                        handleOption(e.target.value)
                        setHeader({ ...Header, Religion: e.target.value })
                      }

                      }
                      disabled={options}
                    >
                      <MenuItem value="islam">Islam</MenuItem>
                      <MenuItem value="christian">Christian</MenuItem>
                      <MenuItem value="other">Other</MenuItem>

                    </Field>
                  </Grid>

                  <Grid item xs={3}>
                    <FormControl component="fieldset">
                      <FormLabel component="legend">Help Type</FormLabel>
                      <RadioGroup row>
                        <FormControlLabel
                          label="Zakat"
                          control={
                            <Field
                              name="help"
                              component={Radio}
                              type="radio"
                              value="help1"
                              // value={Header.IsZakat}
                              display={disableHelpType}
                              onChange={(e) => console.log(e.target.value)}
                            />

                          }

                        />
                        <FormControlLabel
                          label="Welfare"
                          control={
                            <Field
                              name="help"
                              component={Radio}
                              type="radio"

                              value="help"
                              //  value={Header.IsRejected}
                              onChange={(e) => console.log(e.target.value)}
                            />
                          }
                        />

                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  <Grid item xs={4}>
                    <Field
                      fullWidth
                      required
                      name="Token No"
                      component={TextField}
                      type="text"
                      label="CNIC"
                      variant="outlined"
                      value={Header.CNIC}
                      onChange={(e) => setHeader({ ...Header, CNIC: e.target.value })}
                    />
                  </Grid>


                  <Grid item xs={12}>

                    <Typography>
                      <h4 style={{ display: 'flex', justifyContent: 'center' }}>CONATCT</h4>
                    </Typography>
                  </Grid>
                  <Grid item xs={3} > <Field

                    required
                    name="House No"
                    component={TextField}
                    type="text"
                    label="House No"
                    variant="outlined"
                    value={Header.HousNo}
                    onChange={(e) => setHeader({ ...Header, HousNo: e.target.value })}
                  /></Grid>
                  <Grid item xs={3} > <Field


                    name="address"
                    component={TextField}
                    type="text"
                    label="Address"
                    variant="outlined"
                    value={Header.Address}
                    onChange={(e) => setHeader({ ...Header, Address: e.target.value })}
                  /></Grid>
                  <Grid item xs={3} > <Field


                    name="Area"
                    component={TextField}
                    type="text"
                    label="Area"
                    variant="outlined"
                    value={Header.Area}
                    onChange={(e) => setHeader({ ...Header, Area: e.target.value })}
                  /></Grid>
                  <Grid item xs={3} > <Field


                    name="District"
                    component={TextField}
                    type="text"
                    label="District"
                    variant="outlined"
                    value={Header.District}
                    onChange={(e) => setHeader({ ...Header, District: e.target.value })}
                  /></Grid>


                  <Grid item xs={3} > <Field


                    name="City"
                    component={TextField}
                    type="text"
                    label="City"
                    variant="outlined"
                    value={Header.City}
                    onChange={(e) => setHeader({ ...Header, City: e.target.value })}
                  /></Grid>
                  <Grid item xs={3} > <Field


                    name="Phone(res)"
                    component={TextField}
                    type="text"
                    label="Phone(res)"
                    variant="outlined"
                    value={Header.Phone}
                    onChange={(e) => setHeader({ ...Header, Phone: e.target.value })}
                  /></Grid>
                  <Grid item xs={3} > <Field


                    name="Phone(Off)"
                    component={TextField}
                    type="text"
                    label="Phone(Off)"
                    variant="outlined"
                    value={Header.OffPhone}
                    onChange={(e) => setHeader({ ...Header, OffPhone: e.target.value })}
                  /></Grid>
                  <Grid item xs={3} > <Field


                    name="Mobile"
                    component={TextField}
                    type="text"
                    label="Mobile"
                    variant="outlined"
                    value={Header.Mobile}
                    onChange={(e) => setHeader({ ...Header, Mobile: e.target.value })}
                  /></Grid>
                  <TextField
                    id="outlined-uncontrolled"
                    label="Monthly Consumtion Unit"
                    defaultValue="0"
                    variant="outlined"
                    value={Header.MonthlyConsLimit}
                    onChange={(e) => setHeader({ ...Header, MonthlyConsLimit: e.target.value })}
                  />


                  <Grid item xs={12}>

                    <Typography>
                      <h4 style={{ display: 'flex', justifyContent: 'center' }}>Reffer Info</h4>
                    </Typography>
                  </Grid>
                  <Grid item xs={3} > <Field

                    required
                    name="Refer By"
                    component={TextField}
                    type="text"
                    label="Refer By"
                    variant="outlined"
                    value={Header.RefBy}
                    onChange={(e) => setHeader({ ...Header, RefBy: e.target.value })}
                  /></Grid>
                  <Grid item xs={3} > <Field


                    name="Employee Id"
                    component={TextField}
                    type="text"
                    label="Employee Id"
                    variant="outlined"
                    value={Header.IsPAFEmp}
                    onChange={(e) => setHeader({ ...Header, EmpID: e.target.value })}
                  /></Grid>
                  <Grid item xs={3} > <Field


                    name="NDY"
                    component={TextField}
                    type="text"
                    label="NDY"
                    variant="outlined"
                    value={Header.NOY}
                    onChange={(e) => setHeader({ ...Header, NOY: e.target.value })}
                  /></Grid>
                  <Grid item xs={5} > <Field


                    name="Remark"
                    component={TextField}
                    type="text"
                    label="Remark"
                    variant="outlined"
                    onChange={(e) => setHeader({ ...Header, Remarks: e.target.value })}
                    value={Header.Remark}
                  /></Grid>
                  <Grid item xs={12}>

                    <Typography>
                      <h4 style={{ display: 'flex', justifyContent: 'center' }}>Staff</h4>
                    </Typography>
                  </Grid>
                  <Grid item>
                    <FormControl component="fieldset">
                      <FormLabel component="legend"></FormLabel>
                      <FormGroup row>
                        <Grid >
                          <FormControlLabel
                            label="IS PAF EMPLOYEE"
                            control={
                              <Field
                                name="IS PAF EMPLOYEE"
                                component={Checkbox}
                                type="checkbox"
                                value={Header.IsPAFEmp}
                                onChange={(e) => setHeader({ ...Header, IsPAFEmp: !Header.IsPAFEmp })}

                              />

                            }
                          />
                        </Grid>
                        <Grid >
                          <FormControlLabel
                            label="IS STAFF"
                            control={
                              <Field
                                name="IS STAFF"
                                component={Checkbox}
                                type="checkbox"
                                value={Header.IsStaff}
                                onChange={(e) => setHeader({ ...Header, IsStaff: !Header.IsStaff })}
                                //onChange={e => setHeader({ ...Header, IsStaff: !Header.IsStaff })}
                                label="Is Staff"
                              />
                            }
                          />
                        </Grid>
                        <Grid>
                          <FormControlLabel
                            label="Is Rejected"
                            control={
                              <Field
                                name="IsRejected"
                                component={Checkbox}
                                type="checkbox"
                                value="IsRejected"
                                checked={Header.IsRejected} name="Is Rejected" fullWidth

                                onChange={e => setHeader({ ...Header, IsRejected: !Header.IsRejected })}


                              />
                            }
                          />
                        </Grid>



                      </FormGroup>
                    </FormControl>
                  </Grid>


                  <Grid item style={{ marginTop: '16%' }}>
                    <Button
                      onClick={handleSubmit}
                      type="button"
                      variant="contained"
                      // onClick={reset}
                      disabled={submitting || pristine}
                    >
                      Reset
                  </Button>
                  </Grid>
                  {/* <Grid item style={{ marginTop: '16%' }}>

                    <Button variant="contained"
                      color="primary"
                      type="submit"
                      disabled={submitting} >submit</Button>

                  </Grid> */}
                </Grid>
              </Paper>
              <pre>{JSON.stringify(values, 0, 2)}</pre>
            </form>

          )}
        />
      </div>
    </>
  );
}


