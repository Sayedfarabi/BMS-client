import { Col, Input, Row, Select } from "antd";
// import { useState } from "react";
// import { useSearchParams } from "react-router-dom";

const ProductFilter = () => {
  // let queryParam = "";

  // const [searchParam, setSearchParam] = useSearchParams();
  // const [name, setName]=useState(null)
  // const [price, setPrice]=useState(null)
  // const [brand, setBrand]=useState(null)
  // const [model, setModel]=useState(null)
  // const [type, setType]=useState(null)
  // const [size, setSize]=useState(null)
  // const [color, setColor]=useState(null)
  // const [frameMaterial, setFrameMaterial]=useState(null)

  // const brandParam = selectedBrand.join("&brand=");
  // queryParam += `${queryParam ? "&" : ""}brand=${brandParam}`;

  return (
    <section
      style={{
        background: "#9895a3",
        border: "1px solid #9895a3",
        borderRadius: "12px",
      }}
    >
      <div style={{ padding: "12px 12px" }}>
        <div
          style={{ padding: "12px 0px", fontWeight: "bold", fontSize: "16px" }}
        >
          <p>Filter:</p>
        </div>
        <div>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 28 }}>
            <Col
              className="gutter-row"
              xs={{ span: 12 }}
              sm={{ span: 8 }}
              md={{ span: 3 }}
              lg={{ span: 3 }}
            >
              <Input placeholder="Name" />
            </Col>
            <Col
              className="gutter-row"
              xs={{ span: 12 }}
              sm={{ span: 8 }}
              md={{ span: 3 }}
              lg={{ span: 3 }}
            >
              <Input placeholder="Date" />
            </Col>
            <Col
              className="gutter-row"
              xs={{ span: 12 }}
              sm={{ span: 8 }}
              md={{ span: 3 }}
              lg={{ span: 3 }}
            >
              <Input type="text" placeholder="Brand" />
            </Col>

            <Col
              className="gutter-row"
              xs={{ span: 12 }}
              sm={{ span: 8 }}
              md={{ span: 3 }}
              lg={{ span: 3 }}
            >
              <Input placeholder="Model" />
            </Col>

            <Col
              className="gutter-row"
              xs={{ span: 12 }}
              sm={{ span: 8 }}
              md={{ span: 3 }}
              lg={{ span: 3 }}
            >
              <Select
                defaultValue="Select"
                style={{ width: 120 }}
                // onChange={handleChange}
                options={[
                  { value: "Road", label: "Road" },
                  { value: "Mountain", label: "Mountain" },
                  { value: "Hybrid", label: "Hybrid" },
                  { value: "Other", label: "Other" },
                ]}
              />
            </Col>

            <Col
              className="gutter-row"
              xs={{ span: 12 }}
              sm={{ span: 8 }}
              md={{ span: 3 }}
              lg={{ span: 3 }}
            >
              <Input placeholder="Size" />
            </Col>

            <Col
              className="gutter-row"
              xs={{ span: 12 }}
              sm={{ span: 8 }}
              md={{ span: 3 }}
              lg={{ span: 3 }}
            >
              <Input placeholder="Color" />
            </Col>

            <Col
              className="gutter-row"
              xs={{ span: 12 }}
              sm={{ span: 8 }}
              md={{ span: 3 }}
              lg={{ span: 3 }}
            >
              <Input placeholder="Frame" />
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default ProductFilter;
