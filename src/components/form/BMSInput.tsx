import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

type TInputProps = {
  name: string;
  label?: string;
  type: string;
  isRequired: boolean | string;
};

const BMSInput = ({ name, label, type, isRequired }: TInputProps) => {
  const {
    formState: { errors },
  } = useFormContext();
  return (
    <div style={{ marginBottom: "20px" }}>
      {label ? (
        <label
          style={{ marginBottom: "4px", display: "block", fontWeight: "bold" }}
        >
          {label} :
        </label>
      ) : null}
      <Controller
        name={name}
        rules={{ required: isRequired }}
        render={({ field }) => {
          return (
            <>
              <Input {...field} type={type} name={name} id={name} />
              {errors[name] && (
                <p style={{ color: "red", fontSize: "12px" }}>{isRequired}</p>
              )}
            </>
          );
        }}
      />
    </div>
  );
};

export default BMSInput;
