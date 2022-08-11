import * as Yup from "yup";

export const sign_in_schema = Yup.object({
  login: Yup.string("Must be string")
    .matches(/^\w{4,16}$/, "Invalid login")
    .required("Must be required"),
  password: Yup.string()
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,32}$/,
      "Invalid password"
    )
    .required(),
});