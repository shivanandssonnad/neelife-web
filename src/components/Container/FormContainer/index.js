import classNames from 'classnames';
import React from 'react';
import styles from './styles.module.scss';
import {
  FormControlLabel,
  Checkbox as MuiCheckbox,
  TextField as MuiTextField,
  InputAdornment,
} from '@mui/material';
import CHCTypography from '@components/Typography';
import CHCButton from '../../Button';

function Title(props) {
  return (
    <CHCTypography
      data-testid={props['data-testid']}
      className={classNames(props.className, styles.title)}>
      {props.children}
    </CHCTypography>
  );
}

function SubTitle(props) {
  return (
    <CHCTypography
      data-testid={props['data-testid']}
      className={classNames(props.className, styles.sub_label)}>
      {props.children}
    </CHCTypography>
  );
}

function Form(props) {
  return (
    <form
      noValidate
      data-testid={props['data-testid']}
      onSubmit={props.onSubmit}
      className={classNames(props.className)}>
      {props.children}
    </form>
  );
}

const TextField = React.forwardRef((props, ref) => {
  return (
    <MuiTextField
      ref={ref}
      fullWidth
      {...props}
      inputProps={{ ...props.inputProps, required: false }}
      className={classNames(props.className, styles.text_field)}
    />
  );
});

const PasswordField = React.forwardRef((props, ref) => {
  const [passwordInputType, setPasswordInputType] = React.useState('password');
  function handleTogglePasswordInputType() {
    setPasswordInputType(
      passwordInputType === 'password' ? 'text' : 'password',
    );
  }
  return (
    <MuiTextField
      ref={ref}
      fullWidth
      {...props}
      className={classNames(props.className, styles.text_field)}
      type={passwordInputType}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <CHCButton
              color="secondary"
              onClick={handleTogglePasswordInputType}>
              <Choose>
                <When condition={passwordInputType === 'text'}>Hide</When>
                <Otherwise>Show</Otherwise>
              </Choose>
            </CHCButton>
          </InputAdornment>
        ),
      }}
    />
  );
});

const Checkbox = React.forwardRef((props, ref) => {
  return (
    <FormControlLabel
      data-testid={props['data-testid']}
      control={
        <MuiCheckbox
          color={props.color}
          checked={props.checked}
          onChange={props.onChange}
          name={props.name}
          disabled={props.disabled}
          ref={ref}
        />
      }
      label={props.children}
    />
  );
});

function Button(props) {
  return (
    <CHCButton
      {...props}
      className={classNames(styles.form_button, props.className, {
        [styles.full_width]: props.fullWidth,
      })}>
      {props.children}
    </CHCButton>
  );
}

function Section(props) {
  return (
    <div
      {...props}
      className={classNames(props.className, styles.shipment_view_section)}>
      {props.children}
    </div>
  );
}

function CHCFormContainer(props) {
  return (
    <div
      data-testid={props['data-testid']}
      className={classNames(props.className, styles.container)}>
      {props.children}
    </div>
  );
}

CHCFormContainer.Form = Form;
CHCFormContainer.Title = Title;
CHCFormContainer.SubTitle = SubTitle;
CHCFormContainer.TextField = TextField;
CHCFormContainer.PasswordField = PasswordField;
CHCFormContainer.Checkbox = Checkbox;
CHCFormContainer.Button = Button;
CHCFormContainer.Section = Section;

export default CHCFormContainer;
