import classNames from 'classnames';
import { Button } from '@mui/material';

function LoginForm({ onSubmit, className }) {
  const handleSubmitForm = (evt) => {
    evt.preventDefault();
    if (typeof onSubmit === 'function') {
      onSubmit();
    }
  };
  return (
    <form className={classNames(className)} onSubmit={handleSubmitForm}>
      <Button variant="contained" type="submit">
        Login with google
      </Button>
    </form>
  );
}

export default LoginForm;
