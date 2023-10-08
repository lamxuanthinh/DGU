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
        .min(6, "Length from 6-100 characters !")
        .max(100, "Length from 6-100 characters !"),
    confirm_password: yup
        .string()
        .required("Re-entering password is required")
        .min(6, "Length from 6-100 characters")
        .max(100, "Length from 6-100 characters")
        .oneOf([yup.ref("password")], "Password does not match"),
    birthday: yup.string().required("Birthday is required"),
    gender: yup.number().required("Gender is required"),
    fullName: yup
        .string()
        .required("FullName is required")
        .min(4, "Length from 4-50 characters")
        .max(50, "Length from 4-50 characters"),
});

export const schemaCourse = yup.object({
    author: yup.string().required("Author is required !"),
    title: yup
        .string()
        .required("Title is required !")
        .min(5, "Length from 5-160 characters !")
        .max(200, "Length from 5-160 characters !"),
    description: yup
        .string()
        .required("Description is required !")
        .min(5, "Length from 5-160 characters !")
        .max(1000, "Length from 5-160 characters !"),
    price: yup.number().required("price is required !").max(200),
    classify: yup.string().required("classify is required !").max(200),
    image_blob: yup.string().required("Image is required !"),
    image: yup
        .mixed()
        .required("Image is required!")
        .test("fileType", "Invalid file type", function (value) {
            if (value) {
                return value instanceof File;
            }
            return false;
        }),
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
    image: yup
        .mixed()
        .required("Image is required!")
        .test("fileType", "Invalid file type", function (value) {
            if (value) {
                return value instanceof File;
            }
            return false;
        }),
    image_blob: yup.string().required("Image is required !"),

    author: yup.string().required("Author is required !"),
});

export type Schema = yup.InferType<typeof schema>;
export type SchemaCourse = yup.InferType<typeof schemaCourse>;
export type SchemaLesson = yup.InferType<typeof schemaLesson>;
