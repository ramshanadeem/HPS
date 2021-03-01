import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Field } from 'react-final-form';
import { TextField, Checkbox, Radio, Select } from 'final-form-material-ui';
import FormHelperText from '@material-ui/core/FormHelperText';
import clsx from 'clsx';
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
} from '@material-ui/pickers';

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },

    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
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

const onSubmit = async values => {
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};
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
  return (
    <div style={{ padding: 16, margin: 'auto' }}>
      <CssBaseline />
      <Typography variant="h4" align="center" component="h1" gutterBottom>
        🏁 Registeration
      </Typography>
      <Form
        onSubmit={onSubmit}
        initialValues={{ employed: true, stooge: 'larry' }}
        validate={validate}
        render={({ handleSubmit, reset, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit} noValidate>
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
                  />
                </Grid>

                <Grid item xs={3}>
                  <Field
                    fullWidth
                    required
                    name="Date"
                    component={TextField}
                    type="date"

                    label="Registration Date"
                    id="outlined-size-normal"
                    defaultValue="Normal"
                    variant="outlined"
                  />
                </Grid>

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
                <Grid item xs={3}>
                  <Field
                    fullWidth
                    required
                    name="Date"
                    component={TextField}
                    type="date"

                    label="Date of Birth"
                    id="outlined-size-normal"
                    defaultValue="Normal"
                    variant="outlined"
                  />
                </Grid>
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
                    formControlProps={{ fullWidth: true }}
                  >
                    <MenuItem value="male">Islam</MenuItem>
                    <MenuItem value="female">Other</MenuItem>
                    <MenuItem value="Budapest">
                      other
                    </MenuItem>
                  </Field>
                </Grid>
                <Grid item xs={6}>
                  <Field
                    fullWidth
                    name="Help Type"
                    component={Select}
                    label="Help Type"
                    variant="outlined"
                    formControlProps={{ fullWidth: true }}
                    id="outlined-size-normal"
                    defaultValue="Normal"
                    variant="outlined"
                  >
                    <MenuItem value="London">London</MenuItem>
                    <MenuItem value="Paris">Paris</MenuItem>
                    <MenuItem value="Budapest">
                      A city with a very long Name
                    </MenuItem>
                  </Field>
                  {/* <FormHelperText id="outlined-weight-helper-text">Weight</FormHelperText> */}
                </Grid>
                <Grid item>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Sauces</FormLabel>
                    <FormGroup row>
                      <FormControlLabel
                        label="Ketchup"
                        control={
                          <Field
                            name="sauces"
                            component={Checkbox}
                            type="checkbox"
                            value="ketchup"
                            variant="outlined"
                          />
                        }
                      />
                      <FormControlLabel
                        label="Mustard"
                        control={
                          <Field
                            name="sauces"
                            component={Checkbox}
                            type="checkbox"
                            value="mustard"
                          />
                        }
                      />
                      <FormControlLabel
                        label="Salsa"
                        control={
                          <Field
                            name="sauces"
                            component={Checkbox}
                            type="checkbox"
                            value="salsa"
                          />
                        }
                      />
                      <FormControlLabel
                        label="Guacamole 🥑"
                        control={
                          <Field
                            name="sauces"
                            component={Checkbox}
                            type="checkbox"
                            value="guacamole"
                          />
                        }
                      />
                    </FormGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <Field
                    fullWidth
                    name="notes"
                    component={TextField}
                    multiline
                    label="Notes"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    fullWidth
                    name="city"
                    component={Select}
                    label="Select a City"
                    formControlProps={{ fullWidth: true }}
                  >
                    <MenuItem value="London">London</MenuItem>
                    <MenuItem value="Paris">Paris</MenuItem>
                    <MenuItem value="Budapest">
                      A city with a very long Name
                    </MenuItem>
                  </Field>
                </Grid>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Grid item xs={6}>
                    <Field
                      name="rendez-vous"
                      component={DatePickerWrapper}
                      fullWidth
                      margin="normal"
                      label="Rendez-vous"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Field
                      name="alarm"
                      component={TimePickerWrapper}
                      fullWidth
                      margin="normal"
                      label="Alarm"
                    />
                  </Grid>
                </MuiPickersUtilsProvider>
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
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={submitting}
                  >
                    Submit
                  </Button>
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

