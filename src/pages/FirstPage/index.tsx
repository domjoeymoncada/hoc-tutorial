import { Row, Col, Button, Typography } from "antd";
import withModal from "../../components/withModal";
import { Link } from "react-router-dom";

const { Title } = Typography;

const FirstPage = (props) => {
  const { handleSetModalOpen } = props;
  return (
    <Row align="middle" justify="space-between">
      <Col span={16}>
        <Row>
          <Link to="/second">Go to second page</Link>
        </Row>
        <Row>
          <Title level={3}>Higher Order Component Demonstration App</Title>
        </Row>
        <Row>
          <Title level={5}>First Page</Title>
        </Row>
        <Row style={{ marginTop: 24 }}>
          <Button onClick={() => handleSetModalOpen(true)}>
            Click me to open the sample modal
          </Button>
        </Row>
      </Col>
    </Row>
  );
};

export default withModal(FirstPage);
