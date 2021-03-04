import React, { useState } from 'react';
/* import ReactDOM from 'react-dom'; */
import { Form, Field } from 'react-final-form';
import { Checkbox, Radio, Select } from 'final-form-material-ui';
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

function DatePickerWrapper(props) {
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

function TimePickerWrapper(props) {
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

/* const onSubmit = async values => {
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
}; */


const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  }
  if (!values.lastName) {
    errors.lastName = 'Required';
  }
  if (!values.email) {
    errors.email = 'Required';
  }
  return errors;
};

export default function Services({ next, back }) {
  const classes = useStyles();
  const [value, setValue] = React.useState('Controlled');
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const [Header, setHeader] = useState({
    MRNo: 'recID',
    TokenNo: "",
    ISPAF: "",
    ISSTAFF: "",
    WelfareDate: new Date(),
    Profession: "",
    Fiqa: "",
    Education: '',
    Cast: "",
    MonthlyIncome: 0,
    Guardian: "",
    OtherInfo: "",
    MaleKids: "",
    FemaleKids: "",
    OtherKids: "",
    Brothers: "",
    Sisters: "",
    NoOFFamilyMembers: "",
    IsMarried: false,
    IsAbleToPay: false,
    IsEarning: false,
    HaveGold: false,
    ReqName: '',
    ReqPhone: "",
    ReqRelationWithPatient: '',
    CreateUser: "Admin",
    ModifyUser: "Admin",
  })

  const handleSubmit = (e) => {
    //validate();
    e.preventDefault();
    setHeader(e.target.value);
    console.log(err)
    console.log(Header);
    next();
  }
  const [err, setErr] = useState('')


  /* const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  }; */

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };


  return (
    <div style={{ padding: 16, margin: 'auto' }}>
      <GlobalHeader forward={handleSubmit} back={back} title="Welfare" />

      <CssBaseline />
      <Typography variant="h4" align="center" component="h1" gutterBottom>
        🏁 Welfare
      </Typography>
      <Form
        onSubmit={handleSubmit}
        initialValues={{ employed: true, stooge: 'larry' }}
        validate={validate}
        render={({ handleSubmit, reset, submitting, pristine, values }) => (
          <form noValidate>
            <Paper style={{ padding: 16 }}>
              <Grid container alignItems="flex-start" spacing={2}>
                <Grid item xs={2}>
                  <TextField
                    id="outlined-uncontrolled"
                    label="MR#"
                    defaultValue="0"
                    variant="outlined"
                    value={Header.MRNo}
                    onChange={(e) => setHeader({ ...Header, MRNo: e.target.value })} />
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
                    onChange={(e) => setHeader({ ...Header, TokenNo: e.target.value })}
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

                      label="WelfareDate"
                      value={selectedDate}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        'aria-label': 'change date',
                      }}
                    />
                  </Grid>
                </MuiPickersUtilsProvider>



                <Grid item xs={4}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend"></FormLabel>
                    <FormGroup row>

                      <FormControlLabel
                        label="IS PAF EMPLOYEE"
                        control={
                          <Field
                            name="IS PAF EMPLOYEE"
                            component={Checkbox}
                            type="checkbox"

                            value={Header.ISPAF}
                            onChange={(e) => setHeader({ ...Header, ISPAF: e.target.value })}
                          />

                        }
                      />


                      <FormControlLabel
                        label="IS STAFF"
                        control={
                          <Field
                            name="IS STAFF"
                            component={Checkbox}
                            type="checkbox"
                            value={Header.ISSTAFF}
                            onChange={(e) => setHeader({ ...Header, ISSTAFF: e.target.value })}
                          />
                        }
                      />





                    </FormGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <h4>Contact</h4>
                </Grid>
                <Grid item xs={3}>
                  <Field
                    fullWidth
                    required
                    name="Profession"
                    component={TextField}
                    type="text"
                    label="Profession"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={3}>
                  <Field
                    fullWidth
                    name="Education"
                    component={Select}
                    label="Education"
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
                    name="Fiqa"
                    component={Select}
                    label="Fiqa"
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

                    name="Cast"
                    component={TextField}
                    type="text"
                    label="Cast"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <h4>Requester Info</h4>
                </Grid>
                <Grid item xs={3}>
                  <Field
                    fullWidth

                    name="Requestor Name"
                    component={TextField}
                    type="text"
                    label="Requestor Name"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={3} style={{ paddingRight: '7%' }}>
                  <Field
                    fullWidth
                    name="Relationship With patients"
                    component={Select}
                    label=" Relationship With patients"
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

                    name="KidsMale"
                    component={TextField}
                    type="text"
                    label="No of a Kid(Male)"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={3}>
                  <Field
                    fullWidth

                    name="Kidsfemale"
                    component={TextField}
                    type="text"
                    label="No of a Kid(Female)"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={3}>
                  <Field
                    fullWidth

                    name="Requestor phone number"
                    component={TextField}
                    type="text"
                    label="Requestor phone number"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={3} style={{ paddingRight: '7%' }}>
                  <Field
                    fullWidth

                    name="Gardian"
                    component={TextField}
                    type="text"
                    label="Gardian"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={3}>
                  <Field
                    fullWidth

                    name="other Kids"
                    component={TextField}
                    type="text"
                    label="other Kids"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={3}>
                  <Field
                    fullWidth

                    name="No of brothers"
                    component={TextField}
                    type="text"
                    label="No of brothers"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    id="outlined-uncontrolled"
                    label="Monthly Income"
                    defaultValue="0"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={3} style={{ paddingRight: '7%' }}>
                  <Field
                    fullWidth

                    name="other Info"
                    component={TextField}
                    type="text"
                    label="other Info"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={3}>
                  <Field
                    fullWidth

                    name="No of sisters"
                    component={TextField}
                    type="text"
                    label="No of sisters"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={3}>
                  <Field
                    fullWidth

                    name="Family Member"
                    component={TextField}
                    type="text"
                    label="Family Member"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>



                  <FormControl component="fieldset" >
                    <FormLabel component="legend"></FormLabel>
                    <FormGroup row>
                      <Grid item >
                        <FormControlLabel
                          label="IS PAF EMPLOYEE"
                          control={
                            <Field
                              name="IS PAF EMPLOYEE"
                              component={Checkbox}
                              type="checkbox"
                              value="IS PAF EMPLOYEE"
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
                              value="IS STAFF"
                            />
                          }
                        />
                      </Grid>
                      <Grid item >
                        <FormControlLabel
                          label="IS STAFF"
                          control={
                            <Field
                              name="IS STAFF"
                              component={Checkbox}
                              type="checkbox"
                              value="IS STAFF"
                            />
                          }
                        />
                      </Grid>
                      <Grid item >
                        <FormControlLabel
                          label="IS STAFF"
                          control={
                            <Field
                              name="IS STAFF"
                              component={Checkbox}
                              type="checkbox"
                              value="IS STAFF"
                            />
                          }
                        />

                      </Grid>



                    </FormGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <h4>Details</h4>
                </Grid>
                <Grid item xs={12}>
                  <div style={{ display: "inline" }}><h4>TABLE BANYGA AB</h4></div>
                </Grid>


                <Grid item style={{ marginTop: 16 }}>
                  <Button
                    type="button"
                    variant="contained"
                    onClick={reset}
                    disabled={submitting || pristine}
                  >
                    Reset
                  </Button>
                </Grid>
                <Grid item style={{ marginTop: 16 }}>
                  {/*   <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={submitting}
                  >
                    Submit
                  </Button> */}
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

