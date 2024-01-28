/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

type TBMSProps = {
  onSubmit: any;
  btn: string;
  children: React.ReactNode;
};

const BMSForm = ({ onSubmit, btn, children }: TBMSProps) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
        <button
          style={{
            padding: "6px 12px",
            cursor: "pointer",
            background: "#8959f0",
            borderRadius: "4px",
            color: "wheat",
          }}
          type="submit"
        >
          {btn}
        </button>
      </form>
    </FormProvider>
  );
};

export default BMSForm;
