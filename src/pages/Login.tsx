import { Col, Row } from "antd";
import BMSForm from "../components/form/BMSForm";
import BMSInput from "../components/form/BMSInput";
import { NavLink } from "react-router-dom";

const Login = () => {
  const onSubmit = (data: FormData) => {
    console.log(data);
  };
  return (
    <section style={{ background: "#001529", color: "white" }}>
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
              Login Now
            </h1>
          </div>
          <BMSForm onSubmit={onSubmit} btn={"Login"}>
            <Row gutter={24}>
              <Col span={24}>
                <BMSInput
                  name={"email"}
                  type={"text"}
                  label={"Email"}
                  isRequired="required"
                />
              </Col>
            </Row>

            <Row gutter={24}>
              <Col span={24}>
                <BMSInput
                  name={"password"}
                  type={"password"}
                  label={"Password"}
                  isRequired="required"
                />
              </Col>
            </Row>
          </BMSForm>
          <div style={{ margin: "12px 0px" }}>
            <p>
              Haven't your account? Please
              <span
                style={{
                  textDecoration: "underline",
                  cursor: "pointer",
                  margin: "0px 6px",
                }}
              >
                <NavLink to={"/register"}>Register now</NavLink>
              </span>
            </p>
          </div>
        </div>
      </Row>
    </section>
  );
};

export default Login;
