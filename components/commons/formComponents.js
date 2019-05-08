import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,

    [theme.breakpoints.down('sm')]: {
      margin: `${theme.spacing.unit}px 0`
    },
  },
});

const renderTextField = ({
  label,
  input,
  meta: { touched, error },
  classes,
  multi,
  ...custom,
}) => {
  return (
    <FormControl className={classes.margin} fullWidth error={touched && !!error}>
      <InputLabel>{label}</InputLabel>
      <Input
        {...input}
        {...custom}
        fullWidth
        error={touched && !!error}
      />
      {/* {touched && !!error && <FormHelperText>{error}</FormHelperText>} */}
    </FormControl>
  );
};

export const renderTextFieldComponent = withStyles(styles)(renderTextField);