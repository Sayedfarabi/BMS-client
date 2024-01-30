/* eslint-disable @typescript-eslint/no-explicit-any */
import { Col, Row } from "antd";
import BMSForm from "../../components/form/BMSForm";
import BMSInput from "../../components/form/BMSInput";
import { FieldValues } from "react-hook-form";
import BMSSelect, { TSelectOption } from "../../components/form/BMSSelect";
import { useCreateProductMutation } from "../../redux/features/product/productApi";
import Loading from "../Loading";
import { toast } from "sonner";

const CreateProduct = () => {
  const [createProduct, { isLoading }] = useCreateProductMutation();

  if (isLoading) {
    <Loading color="white" />;
  }

  const typeOptions: TSelectOption[] = [
    { value: "Road", label: "Road" },
    { value: "Mountain", label: "Mountain" },
    { value: "Hybrid", label: "Hybrid" },
    { value: "Other", label: "Other", disabled: false },
  ];

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Creating product...");
    try {
      data.price = parseFloat(data.price);
      data.quantity = parseFloat(data.quantity);

      const res = await createProduct(data).unwrap();
      toast.success(res.message, { id: toastId, duration: 2000 });
    } catch (error: any) {
      toast.error(
        error.data?.message ? error.data?.message : "Something went wrong!",
        {
          id: toastId,
          duration: 2000,
        }
      );
      console.log(error);
    }
  };

  return (
    <section style={{ minHeight: "100vh", padding: "0px 20px" }}>
      <Row
        justify="center"
        align="middle"
        style={{ minHeight: "100%", width: "100%" }}
      >
        <div
          style={{
            padding: "20px",
            border: "2px solid white",
            borderRadius: "12px",
            background: "#eae9f0",
          }}
        >
          <div style={{ padding: "28px 28px", backgroundColor: "#9895a3" }}>
            <h1
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "1.5rem",
                background:
                  "linear-gradient(to right, #1f0f42, #8959f0, #19034a)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              ADD PRODUCT INTO INVENTORY
            </h1>
          </div>

          <div style={{ margin: "24px 0px" }}>
            <BMSForm onSubmit={onSubmit} btn={"Create Product"}>
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 28 }}>
                <Col className="gutter-row" span={24}>
                  <BMSSelect
                    name="type"
                    label="Select type"
                    options={typeOptions}
                    isRequired
                  />
                </Col>
                <Col
                  className="gutter-row"
                  xs={{ span: 24 }}
                  sm={{ span: 16 }}
                  md={{ span: 12 }}
                  lg={{ span: 8 }}
                >
                  <BMSInput
                    name={"name"}
                    type={"text"}
                    label={"Product Name"}
                    isRequired="required"
                  />
                </Col>

                <Col
                  className="gutter-row"
                  xs={{ span: 24 }}
                  sm={{ span: 16 }}
                  md={{ span: 12 }}
                  lg={{ span: 8 }}
                  // span={8}
                >
                  <BMSInput
                    name={"brand"}
                    type={"text"}
                    label={"Band Name"}
                    isRequired
                  />
                </Col>

                <Col
                  className="gutter-row"
                  xs={{ span: 24 }}
                  sm={{ span: 16 }}
                  md={{ span: 12 }}
                  lg={{ span: 8 }}
                  // span={8}
                >
                  <BMSInput
                    name={"model"}
                    type={"text"}
                    label={"Model Name"}
                    isRequired
                  />
                </Col>
                <Col
                  className="gutter-row"
                  xs={{ span: 24 }}
                  sm={{ span: 16 }}
                  md={{ span: 12 }}
                  lg={{ span: 8 }}
                  // span={8}
                >
                  <BMSInput
                    name={"size"}
                    type={"text"}
                    label={"Product Size"}
                    isRequired
                  />
                </Col>

                <Col
                  className="gutter-row"
                  xs={{ span: 24 }}
                  sm={{ span: 16 }}
                  md={{ span: 12 }}
                  lg={{ span: 8 }}
                  // span={8}
                >
                  <BMSInput
                    name={"price"}
                    type={"number"}
                    label={"Product Price"}
                    isRequired="required"
                  />
                </Col>

                <Col
                  className="gutter-row"
                  xs={{ span: 24 }}
                  sm={{ span: 16 }}
                  md={{ span: 12 }}
                  lg={{ span: 8 }}
                  // span={8}
                >
                  <BMSInput
                    name={"quantity"}
                    type={"number"}
                    label={"Product Quantity"}
                    isRequired="required"
                  />
                </Col>
                <Col
                  className="gutter-row"
                  xs={{ span: 24 }}
                  sm={{ span: 16 }}
                  md={{ span: 12 }}
                  lg={{ span: 8 }}
                  // span={8}
                >
                  <BMSInput
                    name={"color"}
                    type={"text"}
                    label={"Color"}
                    isRequired
                  />
                </Col>

                <Col
                  className="gutter-row"
                  xs={{ span: 24 }}
                  sm={{ span: 16 }}
                  md={{ span: 12 }}
                  lg={{ span: 8 }}
                  // span={8}
                >
                  <BMSInput
                    name={"frameMaterial"}
                    type={"text"}
                    label={"Frame Material"}
                    isRequired
                  />
                </Col>

                <Col
                  className="gutter-row"
                  xs={{ span: 24 }}
                  sm={{ span: 16 }}
                  md={{ span: 12 }}
                  lg={{ span: 8 }}
                  // span={8}
                >
                  <BMSInput
                    name={"suspensionType"}
                    type={"text"}
                    label={"Suspension Type"}
                    isRequired
                  />
                </Col>
                <Col
                  className="gutter-row"
                  xs={{ span: 24 }}
                  sm={{ span: 24 }}
                  md={{ span: 12 }}
                  lg={{ span: 8 }}
                  // span={8}
                >
                  <BMSInput
                    name={"releaseDate"}
                    type={"date"}
                    label={"Release Date"}
                    isRequired="required"
                  />
                </Col>

                <Col
                  className="gutter-row"
                  xs={{ span: 24 }}
                  sm={{ span: 24 }}
                  md={{ span: 24 }}
                  lg={{ span: 16 }}
                  // span={16}
                >
                  <BMSInput
                    name={"image"}
                    type={"text"}
                    label={"Product Image (URL)"}
                    isRequired
                  />
                </Col>
              </Row>
            </BMSForm>
          </div>
        </div>
      </Row>
    </section>
  );
};

export default CreateProduct;
