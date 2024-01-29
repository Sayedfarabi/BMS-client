/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

type TBMSProps = {
  onSubmit: any;
  btn: string;
  children: React.ReactNode;
  defaultValues?: Record<string, any>;
};

const BMSForm = ({ onSubmit, btn, children, defaultValues }: TBMSProps) => {
  const methods = useForm({ defaultValues });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
        <div style={{ textAlign: "right" }}>
          <button
            style={{
              padding: "6px 20px",
              cursor: "pointer",
              backgroundImage: "linear-gradient(to right, #482c7a, #836cad)",
              borderRadius: "4px",
              color: "wheat",
            }}
            type="submit"
          >
            {btn}
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default BMSForm;
