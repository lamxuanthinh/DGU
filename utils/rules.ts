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
    fullName: yup.string().required("FullName is required"),
});

export const schemaCourse = yup.object({
    author: yup.string().required("Author is required !"),
    title: yup
        .string()
        .required("Title is required !")
        .min(5, "Length from 5-160 characters !")
        .max(160, "Length from 5-160 characters !"),
    description: yup
        .string()
        .required("Description is required !")
        .min(5, "Length from 5-160 characters !")
        .max(160, "Length from 5-160 characters !"),
    price: yup.string().required("price is required !"),
    classify: yup.string().required("classify is required !"),
    image: yup.string().required("Image is required !"),
});

export const schemaLesson = yup.object({
    title: yup
        .string()
        .required("Title is required !")
        .min(5, "Length from 5-50 characters !")
        .max(160, "Length from 5-50 characters !"),
    description: yup
        .string()
        .required("Description is required !")
        .min(5, "Length from 5-160 characters !")
        .max(160, "Length from 5-160 characters !"),
    image: yup.string().required("Image is required !"),
    author: yup.string().required("Author is required !"),
});

export type Schema = yup.InferType<typeof schema>;
export type SchemaCourse = yup.InferType<typeof schemaCourse>;
export type SchemaLesson = yup.InferType<typeof schemaLesson>;
