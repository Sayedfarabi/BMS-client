import { Row } from "antd";
import BMSForm from "../components/form/BMSForm";
import BMSInput from "../components/form/BMSInput";

const Login = () => {
  const onSubmit = (data: FormData) => {
    console.log(data);
  };
  return (
    <section style={{ background: "#001529", color: "white" }}>
      <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
        <BMSForm onSubmit={onSubmit} btn={"Login"}>
          <BMSInput
            name={"email"}
            type={"text"}
            label={"Email"}
            isRequired="required"
          />

          <BMSInput
            name={"password"}
            type={"password"}
            label={"Password"}
            isRequired
          />
        </BMSForm>
      </Row>
    </section>
  );
};

export default Login;
