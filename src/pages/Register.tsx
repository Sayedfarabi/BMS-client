/* eslint-disable @typescript-eslint/no-explicit-any */
import { Col, Row } from "antd";
import BMSForm from "../components/form/BMSForm";
import BMSInput from "../components/form/BMSInput";
import BMSRadio from "../components/form/BMSRadio";
import { NavLink, useNavigate } from "react-router-dom";
import { useCreateSellerMutation } from "../redux/features/register/registerApi";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const Register = () => {
  const [createSeller] = useCreateSellerMutation();
  const navigate = useNavigate();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Creating user...");
    try {
      const userData = {
        name: {
          firstName: data.firstName,
          lastName: data.lastName,
        },
        email: data.email,
        password: data.password,
        gender: data.gender,
        profileImage: data.profileImage,
      };
      const res = await createSeller(userData).unwrap();
      toast.success(res.message, { id: toastId, duration: 2000 });

      navigate("/login");
    } catch (error: any) {
      toast.error(error.message, { id: toastId, duration: 2000 });
      console.log(error);
    }
  };

  return (
    <section
      style={{ background: "#001529", color: "white", padding: "0px 20px" }}
    >
      <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
        <div
          style={{
            padding: "20px",
            border: "2px solid white",
            borderRadius: "12px",
          }}
        >
          <div style={{ margin: "28px 0px" }}>
            <h1
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "1.5rem",
              }}
            >
              Registration Now
            </h1>
          </div>

          <BMSForm onSubmit={onSubmit} btn={"Register"} isGhost>
            <Row gutter={24}>
              <Col span={12}>
                <BMSInput
                  name={"firstName"}
                  type={"text"}
                  label={"First Name"}
                  isRequired="required"
                />
              </Col>

              <Col span={12}>
                <BMSInput
                  name={"lastName"}
                  type={"text"}
                  label={"Last Name"}
                  isRequired="required"
                />
              </Col>
            </Row>

            <Row gutter={24}>
              <Col span={12}>
                <BMSInput
                  name={"email"}
                  type={"text"}
                  label={"Email"}
                  isRequired="required"
                />
              </Col>

              <Col span={12}>
                <BMSInput
                  name={"password"}
                  type={"password"}
                  label={"Password"}
                  isRequired="required"
                />
              </Col>
            </Row>

            <Row gutter={24}>
              <Col span={12} style={{ color: "white" }}>
                <BMSInput
                  name={"profileImage"}
                  type={"text"}
                  label={"profile Image"}
                  isRequired
                />
              </Col>

              <Col span={12} style={{ color: "white" }}>
                <BMSRadio
                  name={"gender"}
                  // type={"text"}
                  label={"Gender"}
                  textColor="white"
                  options={["Male", "Female"]}
                  isRequired="required"
                />
              </Col>
            </Row>
          </BMSForm>

          <div style={{ margin: "12px 0px" }}>
            <p>
              If you have an account, Please
              <span
                style={{
                  textDecoration: "underline",
                  cursor: "pointer",
                  margin: "0px 6px",
                }}
              >
                <NavLink to={"/login"}>Login now</NavLink>
              </span>
            </p>
          </div>
        </div>
      </Row>
    </section>
  );
};

export default Register;
