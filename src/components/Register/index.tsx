import { useEffect, useState } from 'react';
import {
  Box,
  Unstable_Grid2 as Grid,
  Typography,
  TextField,
  ButtonGroup,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useAppDispatch, useAppSelector } from '@plugins/store';
import { userSelectors, userWorkflows } from '@plugins/store';

const initialFormState = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export function Register() {
  const [formFields, setFormFields] = useState(initialFormState);
  const { name, email, password, confirmPassword } = formFields;

  const userLoginType = useAppSelector(userSelectors.userLoginType);
  const loaderState = useAppSelector(userSelectors.loadingStates);
  const errorStates = useAppSelector(userSelectors.errorStates);
  const isAuthenticated = useAppSelector(userSelectors.isAuthenticated);
  const isVerified = useAppSelector(userSelectors.isVerified);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFields = () => {
    setFormFields(initialFormState);
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password === confirmPassword) {
      userWorkflows.register(dispatch, {
        name,
        email,
        password,
      });
    } else {
      toast('Password & Confirm Password Not Matching');
    }
  };

  useEffect(() => {
    if (!loaderState.register && !loaderState.verify) {
      if (isAuthenticated && isVerified && userLoginType === 'register') {
        toast('Successfully Logged in !');
        navigate('/');
      }
    }
  }, [
    userLoginType,
    loaderState.register,
    loaderState.verify,
    isAuthenticated,
    isVerified,
    navigate,
  ]);

  useEffect(() => {
    if (errorStates.register) {
      toast(
        `${errorStates.register.errorname}:${errorStates.register.message}`,
      );
    }
  }, [errorStates.register]);

  useEffect(() => {
    if (errorStates.verify) {
      toast(`${errorStates.verify.errorname}:${errorStates.verify.message}`);
    }
  }, [errorStates.verify]);

  return (
    <Grid xs={12} container>
      <Grid
        xs={12}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          my: 2,
        }}
      >
        <Typography sx={{ fontWeight: 'bold' }} variant="h5">
          Register
        </Typography>
      </Grid>
      <Grid
        xs={12}
        container
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{ width: { sx: '95%', md: '70%' } }}
          component="form"
          onSubmit={handleLogin}
        >
          <Grid xs={12}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              variant="outlined"
              required={true}
              type="name"
              value={name}
              onChange={handleChange}
            />
          </Grid>
          <Grid xs={12}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              variant="outlined"
              required={true}
              type="email"
              value={email}
              onChange={handleChange}
            />
          </Grid>
          <Grid xs={12}>
            <TextField
              fullWidth
              label="Password"
              name="password"
              variant="outlined"
              required={true}
              type="password"
              value={password}
              onChange={handleChange}
            />
          </Grid>
          <Grid xs={12}>
            <TextField
              fullWidth
              label="Confirm Password"
              name="confirmPassword"
              variant="outlined"
              required={true}
              type="password"
              value={confirmPassword}
              onChange={handleChange}
            />
          </Grid>
          <Grid xs={12} sx={{ textAlign: 'center' }}>
            <ButtonGroup size="large">
              <LoadingButton
                loading={loaderState.register || loaderState.verify}
                variant="contained"
                type="submit"
              >
                Register
              </LoadingButton>
              <LoadingButton
                loading={loaderState.register || loaderState.verify}
                variant="outlined"
                onClick={resetFields}
                type="reset"
              >
                Reset
              </LoadingButton>
            </ButtonGroup>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}
