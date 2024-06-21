import {
  Box,
  Button,
  Chip,
  Divider,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography
} from "@mui/material";

import CustomContainer from "../../components/CustomContainer";
import { images } from "../../utils/image";

import {
  Person,
  Email,
  VpnKey,
  Visibility,
  VisibilityOff,
  Google,
  LinkedIn,
  GitHub
} from '@mui/icons-material';


import { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from 'formik';
import { RegisterValidationSchema } from "../../validation/Auth/RegisterValidationSchema";
import { register } from "../../api/auth";

interface registerValue {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Register = () => {
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });


  const { handleBlur, handleChange, handleSubmit, touched, errors } = useFormik<registerValue>({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: RegisterValidationSchema,
    onSubmit: (values) => {
      console.log("submit", values);
      register(values).then((response) => {
        console.log(response);
        // if(response.data.code){

        // }
      })
    }
  })

  return (
    <>
      <CustomContainer>
        <Paper
          component="div"
          elevation={20}
          sx={{
            width: {
              xs: '100%',
              sm: '580px',
              md: '750px',
              lg: '900px',
            },

            borderRadius: "10px",

            overflow: "hidden",
            display: "block",

            transition: "all 300ms linear"
          }}
        >
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            columns={12}
            sx={{
              backgroundColor: "primary.main",

              flexDirection: {
                sm: "row",
                xs: "column"
              },

            }}
          >
            <Grid item xl={6} md={5} xs={4} sx={{
              padding: {
                xs: "0px",
                sm: "30px",
              },
            }}>
              <Box
                component="img"
                src={images.login}
                alt="This is images"
                sx={{
                  width: "100%",
                  height: "100%",

                  display: "block",
                  objectFit: "contain",
                }}
              />
            </Grid>

            <Grid item xl={6} md={7} xs={8} maxWidth={"100%"}
              sx={{
                width: "100%",
                height: "100%",

                padding: "30px",

                background: "#fff",

                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}>
              <Box>
                <Typography
                  component="h1"
                  variant="h4"
                  paddingX={2}
                  marginBottom={2}
                  sx={{
                    fontWeight: "600",
                    fontFamily: "Roboto Slab Variable"
                  }}
                >
                  Register
                </Typography>
                <form className="mb-5" onSubmit={handleSubmit}>
                  <FormControl fullWidth sx={{ m: "8px 0px" }} >
                    <TextField
                      label="User Name *"
                      name="userName"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Person />
                          </InputAdornment>
                        ),
                      }}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.userName && Boolean(errors.userName)}
                      helperText={touched.userName && errors.userName}
                    />
                  </FormControl>

                  <FormControl fullWidth sx={{ m: "8px 0px" }} >
                    <TextField
                      label="Email *"
                      name="email"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Email />
                          </InputAdornment>
                        ),
                      }}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.email && Boolean(errors.email)}
                      helperText={touched.email && errors.email}
                    />
                  </FormControl>

                  <FormControl sx={{ m: "8px 0px 25px 0" }} fullWidth >
                    <TextField
                      id="password"
                      name="password"
                      label="Password *"
                      type={showPassword.password ? 'text' : 'password'}

                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.password && Boolean(errors.password)}
                      helperText={touched.password && errors.password}

                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <VpnKey />
                          </InputAdornment>
                        ),
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={() => setShowPassword({
                                ...showPassword,
                                password: !showPassword.password,
                              })}
                            >
                              {showPassword.password ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        )
                      }}
                    />
                  </FormControl>

                  <FormControl sx={{ m: "8px 0px 25px 0" }} fullWidth >
                    <TextField
                      id="confirm-password"
                      name="confirmPassword"
                      label="Confirm Password *"
                      type={showPassword.confirmPassword ? 'text' : 'password'}

                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.confirmPassword && Boolean(errors.confirmPassword)}
                      helperText={touched.confirmPassword && errors.confirmPassword}

                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <VpnKey />
                          </InputAdornment>
                        ),
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={() => setShowPassword({
                                ...showPassword,
                                confirmPassword: !showPassword.confirmPassword,
                              })}
                            >
                              {showPassword.confirmPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        )
                      }}
                    />
                  </FormControl>

                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      width: "100%",
                      letterSpacing: "1px",
                      textTransform: "capitalize",
                    }}
                  >Submit</Button>
                </form>

                <Divider sx={{
                  marginBottom: "10px",

                  "&.MuiDivider-root::before": {
                    borderTop: "1.5px solid #000",
                  },
                  "&.MuiDivider-root::after": {
                    borderTop: "1.5px solid #000",
                  }
                }}>
                  <Chip label="OR" size="medium" />
                </Divider>

                <Box display="flex" justifyContent="center" alignItems="center" className="space-x-4 mb-4">
                  <IconButton aria-label="social-linkedin">
                    <Google
                      sx={{
                        fontSize: "40px"
                      }}
                    />
                  </IconButton>
                  <IconButton aria-label="social-github">
                    <GitHub
                      sx={{
                        fontSize: "40px"
                      }}
                    />
                  </IconButton>
                  <IconButton aria-label="social-google">
                    <LinkedIn
                      sx={{
                        fontSize: "40px"
                      }}
                    />
                  </IconButton>
                </Box>

                <Typography
                  component="p"
                  variant="body1"
                  align="center"
                >
                  <Link to="/login">
                    Already Have Account?
                  </Link>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </CustomContainer>
    </>
  )
}

export default Register
