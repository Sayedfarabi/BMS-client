import { Col, Row } from "antd";
import BMSForm from "../../components/form/BMSForm";
import BMSInput from "../../components/form/BMSInput";
import { FieldValues } from "react-hook-form";
import BMSSelect, { TSelectOption } from "../../components/form/BMSSelect";

const CreateProduct = () => {
  const typeOptions: TSelectOption[] = [
    { value: "Road", label: "Road" },
    { value: "Mountain", label: "Mountain" },
    { value: "Hybrid", label: "Hybrid" },
    { value: "Other", label: "Other", disabled: false },
  ];

  const onSubmit = (data: FieldValues) => {
    console.log(data);
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
              <Row gutter={24}>
                <Col span={24}>
                  <BMSSelect
                    name="type"
                    label="Select type"
                    options={typeOptions}
                    isRequired
                  />
                </Col>
              </Row>

              <Row gutter={24}>
                <Col span={8}>
                  <BMSInput
                    name={"name"}
                    type={"text"}
                    label={"Product Name"}
                    isRequired="required"
                  />
                </Col>

                <Col span={8}>
                  <BMSInput
                    name={"brand"}
                    type={"text"}
                    label={"Band Name"}
                    isRequired
                  />
                </Col>

                <Col span={8}>
                  <BMSInput
                    name={"model"}
                    type={"text"}
                    label={"Model Name"}
                    isRequired
                  />
                </Col>
              </Row>

              <Row gutter={24}>
                <Col span={8}>
                  <BMSInput
                    name={"size"}
                    type={"text"}
                    label={"Product Size"}
                    isRequired
                  />
                </Col>

                <Col span={8}>
                  <BMSInput
                    name={"price"}
                    type={"number"}
                    label={"Product Price"}
                    isRequired="required"
                  />
                </Col>

                <Col span={8}>
                  <BMSInput
                    name={"quantity"}
                    type={"number"}
                    label={"Product Quantity"}
                    isRequired="required"
                  />
                </Col>
              </Row>

              <Row gutter={24}>
                <Col span={8}>
                  <BMSInput
                    name={"color"}
                    type={"text"}
                    label={"Color"}
                    isRequired
                  />
                </Col>

                <Col span={8}>
                  <BMSInput
                    name={"frameMaterial"}
                    type={"text"}
                    label={"Frame Material"}
                    isRequired
                  />
                </Col>

                <Col span={8}>
                  <BMSInput
                    name={"suspensionType"}
                    type={"text"}
                    label={"Suspension Type"}
                    isRequired
                  />
                </Col>
              </Row>

              <Row gutter={24}>
                <Col span={8}>
                  <BMSInput
                    name={"releaseDate"}
                    type={"date"}
                    label={"Release Date"}
                    isRequired="required"
                  />
                </Col>

                <Col span={16}>
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
