import { Radio } from "antd";
import { Controller, useFormContext } from "react-hook-form";

type TInputProps = {
  name: string;
  label?: string;
  textColor: string;
  options: Array<string>;
  isRequired: boolean | string;
};

const BMSRadio = ({
  name,
  label,
  isRequired,
  textColor,
  options,
}: TInputProps) => {
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
            <div>
              {/* <Input {...field} type={type} name={name} id={name} /> */}
              <Radio.Group {...field} name={name} id={name}>
                {options.map((item) => {
                  return (
                    <Radio key={item} style={{ color: textColor }} value={item}>
                      {item}
                    </Radio>
                  );
                })}
              </Radio.Group>
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

export default BMSRadio;
