import * as yup from "yup";

export const schema = yup.object({
  email: yup
    .string()
    .required("Email is required !")
    .email("Email invalidate !")
    .min(5, "Length from 5-160 characters !")
    .max(160, "Length from 5-160 characters !"),
  password: yup
    .string()
    .required("Password is required !")
    .min(6, "Length from 6-160 characters !")
    .max(160, "Length from 6-160 characters !"),
  confirm_password: yup
    .string()
    .required("Re-entering password is required")
    .min(6, "Length from 6-160 characters")
    .max(160, "Length from 6-160 characters")
    .oneOf([yup.ref("password")], "Password does not match"),
  birthday: yup.string(),
  gender: yup.string(),
  fullName: yup.string().required('FullName is required'),
});

export type Schema = yup.InferType<typeof schema>;
