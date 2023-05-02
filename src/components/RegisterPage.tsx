import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import Select from "react-select";
import { CheckBox } from "@mui/icons-material";

const theme = createTheme();

export default function SignUp() {
  const [checked, setChecked] = useState(false);

  const handleCheckBoxChange = () => {
    setChecked(!checked);
  };

  const options = [
    { value: "node", label: "Node js" },
    { value: "react", label: "React js" },
    { value: "angular", label: "Angular js" },
  ];

  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  fullWidth
                  id="userName"
                  label="User Name"
                  name="userName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} sm={8}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  fullWidth
                  id="contactNumber"
                  label="Contact Number"
                  name="contactNumber"
                  autoComplete="contact-number"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  autoComplete="confirm-password"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  fullWidth
                  name="dateOfBirth"
                  type="date"
                  id="dateOfBirth"
                  autoComplete="date-of-birth"
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <FormLabel>Gender</FormLabel>
                <RadioGroup
                  aria-label="gender"
                  name="gender"
                  style={{ display: "flex", flexDirection: "row" }}
                >
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                </RadioGroup>
              </Grid>
              <Grid item xs={12} sm={5}>
                <FormLabel>Qualification: </FormLabel>
                <FormControlLabel
                  value="bca"
                  control={
                    <CheckBox
                      //   checked={checked}
                      color="primary"
                      onChange={handleCheckBoxChange}
                    />
                  }
                  label="BCA"
                />
                <FormControlLabel
                  value="mca"
                  control={
                    <CheckBox
                      //   checked={checked}
                      color="primary"
                      onChange={handleCheckBoxChange}
                    />
                  }
                  label="MCA"
                />
                <FormControlLabel
                  value="b.tech."
                  control={
                    <CheckBox
                      //   checked={checked}
                      color="primary"
                      onChange={handleCheckBoxChange}
                    />
                  }
                  label="B.Tech."
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormLabel>Country:</FormLabel>
                <select
                  value={value1}
                  onChange={(event) => {
                    setValue1(event.target.value);
                  }}
                >
                  <option value="none">Select country</option>
                  <option value="option1">India</option>
                  <option value="option2">USA</option>
                </select>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormLabel>State:</FormLabel>
                <select
                  value={value2}
                  onChange={(event) => {
                    setValue2(event.target.value);
                  }}
                >
                  <option value="">Select State</option>
                  {value1 === "option1" && (
                    <>
                      <option value="option1-1">Gujarat</option>
                      <option value="option1-2">Maharastra</option>
                    </>
                  )}
                  {value1 === "option2" && (
                    <>
                      <option value="option2-1">California</option>
                      <option value="option2-2">Georgia</option>
                    </>
                  )}
                </select>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormLabel>City:</FormLabel>
                <select
                  value={value3}
                  onChange={(event) => {
                    setValue3(event.target.value);
                  }}
                >
                  <option value="">Select City</option>
                  {value1 === "option1" && value2 === "option1-1" && (
                    <>
                      <option value="option1-1">Rajkot</option>
                      <option value="option1-2">Ahmedabad</option>
                    </>
                  )}
                  {value1 === "option1" && value2 === "option1-2" && (
                    <>
                      <option value="option2-1">Mumbai</option>
                      <option value="option2-2">Pune</option>
                    </>
                  )}
                  {value1 === "option2" && value2 === "option2-1" && (
                    <>
                      <option value="option2-1">Los Angeles</option>
                      <option value="option2-2">San Francisco</option>
                    </>
                  )}
                  {value1 === "option2" && value2 === "option2-2" && (
                    <>
                      <option value="option2-1">Atlanta</option>
                      <option value="option2-2">Columbus</option>
                    </>
                  )}
                </select>
              </Grid>

              <Grid item xs={12} sm={8}>
                <TextField
                  required
                  fullWidth
                  id="address"
                  label="Address"
                  name="address"
                  autoComplete="address"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  fullWidth
                  id="programmingSkills"
                  label="Programming Skills"
                  name="programmingSkills"
                  autoComplete="address"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Select
                  isMulti
                  options={options}
                  className="select"
                  //   onChange={handleSkillSelection}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                Already have an account?
                <Link href="/LoginForm" variant="body2">
                  Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
