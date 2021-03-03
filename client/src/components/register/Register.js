import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { Form, Field } from 'react-final-form';
import { Checkbox, Radio, Select } from 'final-form-material-ui';
import FormHelperText from '@material-ui/core/FormHelperText';
import clsx from 'clsx';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
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

/* function DatePickerWrapper(props) {
  const {
    input: { name, onChange, value, ...restInput },
    meta,
    ...rest
  } = props;
  const showError =
    ((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error) &&
    meta.touched;

  return (
    <DatePicker
      {...rest}
      name={name}
      helperText={showError ? meta.error || meta.submitError : undefined}
      error={showError}
      inputProps={restInput}
      onChange={onChange}
      value={value === '' ? null : value}
    />
  );
}
 */
/* function TimePickerWrapper(props) {
  const {
    input: { name, onChange, value, ...restInput },
    meta,
    ...rest
  } = props;
  const showError =
    ((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error) &&
    meta.touched;

  return (
    <TimePicker
      {...rest}
      name={name}
      helperText={showError ? meta.error || meta.submitError : undefined}
      error={showError}
      inputProps={restInput}
      onChange={onChange}
      value={value === '' ? null : value}
    />
  );
}
 */
/* const onSubmit = async values => {
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
}; */
const validate = values => {
  const errors = {};
  if (!values.mrno) {
    errors.mrno = 'Required';
  }
  if (!values.lastName) {
    errors.lastName = 'Required';
  }
  if (!values.email) {
    errors.email = 'Required';
  }
  return errors;
};

export default function Register() {
  const classes = useStyles();
  const [value, setValue] = React.useState('Controlled');
  const [options,setOptions] = useState([{val: false, opt: 'Welfare'}])
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
const [err, setErr] = useState('')
const handleSubmit = (e) => {
  validate();
   e.preventDefault();
 setHeader(e.target.value);
   console.log(err)
  console.log(Header);
 
}


  /*   const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
    };
   */
 

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleOption = (val) => {
    if (val == 'islam') {
      setOptions([...options, 'zakaat', {val: true, opt: 'Zakaat'}])
    }
  }
  /*   const handleChange = (event) => {
      setValue(event.target.value);
    }; */
  return (
    
    <div style={{ padding: 16, margin: 'auto' }}>

      <CssBaseline />
      <Typography variant="h4" align="center" component="h1" gutterBottom>
        🏁 Registeration
      </Typography>

      <Form
        onSubmit={handleSubmit}
        initialValues={{ employed: true, stooge: 'larry' }}
        validate={validate}
        render={({ handleSubmit, reset, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off" noValidate>
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
                    label= "Token No"
                    variant="outlined"
                    value={Header.TokenNo}
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

                      label="Registration Date"
                      value={selectedDate}
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
                    fullWidth
                    required
                    component={TextField}
                    type="name"
                    label="name"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={3}>
                  <Field
                    name="FNAME"
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
                    onChange={ (e) => {
                      handleOption(e.target.value)
                      setHeader({ ...Header, Religion: e.target.value })
                    }
                  }      
                  >
                    <MenuItem value="male">Islam</MenuItem>
                    <MenuItem value="female">Other</MenuItem>

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
                            value={Header.IsZakat}
                            onChange={(e) => setHeader({ ...Header, IsZakat: e.target.value })}
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
                /></Grid>
                <Grid item xs={3} > <Field


                  name="address"
                  component={TextField}
                  type="text"
                  label="Address"
                  variant="outlined"
                /></Grid>
                <Grid item xs={3} > <Field


                  name="Area"
                  component={TextField}
                  type="text"
                  label="Area"
                  variant="outlined"
                /></Grid>
                <Grid item xs={3} > <Field


                  name="District"
                  component={TextField}
                  type="text"
                  label="District"
                  variant="outlined"
                /></Grid>


                <Grid item xs={3} > <Field


                  name="City"
                  component={TextField}
                  type="text"
                  label="City"
                  variant="outlined"
                /></Grid>
                <Grid item xs={3} > <Field


                  name="Phone(res)"
                  component={TextField}
                  type="text"
                  label="Phone(res)"
                  variant="outlined"
                /></Grid>
                <Grid item xs={3} > <Field


                  name="Phone(Off)"
                  component={TextField}
                  type="text"
                  label="Phone(Off)"
                  variant="outlined"
                /></Grid>
                <Grid item xs={3} > <Field


                  name="Mobile"
                  component={TextField}
                  type="text"
                  label="Mobile"
                  variant="outlined"
                /></Grid>
                <TextField
                  id="outlined-uncontrolled"
                  label="Minimal Consumtion Unit"
                  defaultValue="0"
                  variant="outlined"
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
                /></Grid>
                <Grid item xs={3} > <Field


                  name="Employee Id"
                  component={TextField}
                  type="text"
                  label="Employee Id"
                  variant="outlined"
                /></Grid>
                <Grid item xs={3} > <Field


                  name="NDY"
                  component={TextField}
                  type="text"
                  label="NDY"
                  variant="outlined"
                /></Grid>
                <Grid item xs={5} > <Field


                  name="Remark"
                  component={TextField}
                  type="text"
                  label="Remark"
                  variant="outlined"
                  onChange={(e) => setHeader({ ...Header, Remarks: e.target.value })}
                  value =  {Header.Remark} 
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
                              value =  {Header.IsPAFEmp} 
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
                              
                              onChange={e => setHeader({ ...Header, IsStaff: !Header.IsStaff })} 
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
                    type="button"
                    variant="contained"
                    onClick={reset}
                    disabled={submitting || pristine}
                  >
                    Reset
                  </Button>
                </Grid>
                <Grid item style={{ marginTop: '16%' }}>
                 
                  <Button  variant="contained"
                    color="primary"
                    type="submit"
                    disabled={submitting} >submit</Button>
                   
                </Grid>
              </Grid>
            </Paper>
            <pre>{JSON.stringify(values, 0, 2)}</pre>
          </form>
          
        )}
      />
    </div>
    
  );
}

