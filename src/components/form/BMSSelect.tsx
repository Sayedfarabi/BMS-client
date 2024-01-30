import { Select } from "antd";
import { Controller, useFormContext } from "react-hook-form";

export type TSelectOption = {
  value: string;
  label: string;
  disabled?: boolean;
};

type TInputProps = {
  name: string;
  label?: string;
  options: Array<TSelectOption>;
  isRequired: boolean | string;
};

const BMSSelect = ({ name, label, options, isRequired }: TInputProps) => {
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <div style={{ marginBottom: "20px" }}>
      {label ? (
        <label
          style={{
            marginBottom: "4px",
            display: "block",
            fontWeight: "bold",
          }}
        >
          {label} :
        </label>
      ) : null}
      <Controller
        name={name}
        rules={{ required: isRequired }}
        render={({ field }) => {
          return (
            <div>
              {/* <Input {...field} type={type} name={name} id={name} /> */}
              <Select
                placeholder="Select a person"
                style={{ width: "100%" }}
                {...field}
                options={options}
              />
              {errors[name] && (
                <p style={{ color: "red", fontSize: "12px" }}>{isRequired}</p>
              )}
            </div>
          );
        }}
      />
    </div>
  );
};

export default BMSSelect;
