import { Col, Input, Row } from "antd";

const ProductFilter = () => {
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
              <Input placeholder="Product name" />
            </Col>
            <Col
              className="gutter-row"
              xs={{ span: 12 }}
              sm={{ span: 8 }}
              md={{ span: 3 }}
              lg={{ span: 3 }}
            >
              <Input placeholder="Release date" />
            </Col>
            <Col
              className="gutter-row"
              xs={{ span: 12 }}
              sm={{ span: 8 }}
              md={{ span: 3 }}
              lg={{ span: 3 }}
            >
              <Input placeholder="Brand" />
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
              <Input placeholder="Type" />
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
              <Input placeholder="Frame Material" />
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default ProductFilter;
