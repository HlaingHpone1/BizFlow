import * as Yup from "yup";

export const RegisterValidationSchema = Yup.object().shape({
  userName: Yup.string().required("User Name Required"),
  mail: Yup.string().required("Email Required"),
  password: Yup.string().required("Password Required"),
  confirmPassword: Yup.string().oneOf([Yup.ref("password")], "Password must be match").required("Confirm Password Required"),
})