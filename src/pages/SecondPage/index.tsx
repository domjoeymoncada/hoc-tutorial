import { Row, Col, Button } from "antd";
import { Link } from "react-router-dom";
import withModal from "../../components/withModal";

const SecondPage = (props) => {
  const { handleSetModalOpen } = props;
  return (
    <Row align="middle" justify="space-between">
      <Col span={16}>
        <Row>
          <Link to="/">Back to first page...</Link>
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

export default withModal(SecondPage);
