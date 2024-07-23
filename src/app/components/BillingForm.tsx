"use client";

import { Formik, Form, Field, FieldAttributes, FieldProps } from "formik";
import * as Yup from "yup";
import Button from "../components/Button";
import TextField from "../components/TextField";

const requiredMessage = "This field is required";

export interface BillingFormValues {
  cardNumber: string;
  expires: string;
  cvv: string;
  name: string;
  zip: string;
}

const validationSchema = Yup.object({
  cardNumber: Yup.string().required(requiredMessage),
  expires: Yup.string().required(requiredMessage),
  cvv: Yup.string().required(requiredMessage),
  name: Yup.string().required(requiredMessage),
  zip: Yup.string().required(requiredMessage),
});

interface Props {
  initialValues: BillingFormValues;
  onSubmit: (values: BillingFormValues) => void;
}

export default function BillingForm({ initialValues, onSubmit }: Props) {
  const handleSubmit = (values: BillingFormValues) => {
    onSubmit(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, touched, errors }) => (
        <Form>
          <div>
            <Field name="cardNumber">
              {({ field }: FieldProps) => (
                <TextField
                  label="Card number"
                  testId="input-cardnumber"
                  error={touched.cardNumber && errors.cardNumber}
                  touched={touched.cardNumber}
                  {...field}
                />
              )}
            </Field>
            <div className="flex gap-4">
              <div className="flex-1">
                <Field name="expires">
                  {({ field }: FieldAttributes<any>) => (
                    <TextField
                      label="Expires (MM/YY)"
                      testId="input-expires"
                      error={touched.expires && errors.expires}
                      touched={touched.expires}
                      {...field}
                    />
                  )}
                </Field>
              </div>
              <div className="flex-1">
                <Field name="cvv">
                  {({ field }: FieldAttributes<any>) => (
                    <TextField
                      label="Security code (CVV)"
                      testId="input-cvv"
                      error={touched.cvv && errors.cvv}
                      touched={touched.cvv}
                      {...field}
                    />
                  )}
                </Field>
              </div>
            </div>
            <Field name="name">
              {({ field }: FieldAttributes<any>) => (
                <TextField
                  label="Name on card"
                  testId="input-name"
                  error={touched.name && errors.name}
                  touched={touched.name}
                  {...field}
                />
              )}
            </Field>
            <Field name="zip">
              {({ field }: FieldAttributes<any>) => (
                <TextField
                  label="Zip code"
                  testId="input-zip"
                  error={touched.zip && errors.zip}
                  touched={touched.zip}
                  {...field}
                />
              )}
            </Field>
          </div>
          <div className="mt-6">
            <Button type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
