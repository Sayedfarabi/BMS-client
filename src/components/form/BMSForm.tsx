/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "antd";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

type TBMSProps = {
  onSubmit: any;
  btn: string;
  children: React.ReactNode;
  defaultValues?: Record<string, any>;
  isGhost?: boolean;
};

const BMSForm = ({
  onSubmit,
  btn,
  children,
  defaultValues,
  isGhost,
}: TBMSProps) => {
  const methods = useForm({ defaultValues });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
        <div style={{ textAlign: "right" }}>
          {isGhost ? (
            <Button htmlType="submit" type="primary" ghost>
              {btn}
            </Button>
          ) : (
            <Button htmlType="submit" type="primary">
              {btn}
            </Button>
          )}
        </div>
      </form>
    </FormProvider>
  );
};

export default BMSForm;
