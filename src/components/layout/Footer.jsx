import { Layout, Row, Col } from "antd";

function Footer() {
  const { Footer: AntFooter } = Layout;

  return (
    <AntFooter style={{ display: "flex", justifyContent: "center", background: "#fff", border: '1px solid #ccc', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', }}>
      <Row>
        <Col xs={24} md={24} lg={24}>
          <h4 style={{ color: "#535353" }}> &copy;All copyrights reserved to TA Telecom - SMS Gateway</h4>
        </Col>
      </Row>
    </AntFooter>
  );
}

export default Footer;
