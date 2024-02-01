import { Col, Row } from "antd";
import BMSForm from "../components/form/BMSForm";
import BMSInput from "../components/form/BMSInput";
import { NavLink, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { TUser, setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { toast } from "sonner";
import { FieldValues } from "react-hook-form";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [login, { error }] = useLoginMutation();

  if (error) {
    console.log({ error });
  }

  const defaultValue = {};

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Logging in...");
    try {
      const { email, password } = data;
      const userInfo = {
        email: email,
        password: password,
      };
      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data?.accessToken) as TUser;
      dispatch(setUser({ user: user, token: res.data?.accessToken }));
      navigate(`/${user.role}/dashboard`);
      toast.success("Login successfully", { id: toastId, duration: 2000 });
    } catch (error) {
      toast.error("Somethig went wrong!", { id: toastId, duration: 2000 });
      console.log(error);
    }
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
          <BMSForm
            onSubmit={onSubmit}
            btn={"Login"}
            defaultValues={defaultValue}
            isGhost
          >
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
