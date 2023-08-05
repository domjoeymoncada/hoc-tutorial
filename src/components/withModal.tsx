import { Button, Modal, Typography } from "antd";
import { useState } from "react";

const withModal = (Component) => {
  function WithModal(props) {
    const [isHOCModalOpen, setIsHOCModalOpen] = useState(false);
    const [counter, setCounter] = useState(0);
    return (
      <div>
        <Component handleSetModalOpen={setIsHOCModalOpen} />
        <Modal open={isHOCModalOpen} onCancel={() => setIsHOCModalOpen(false)}>
          <Typography.Title level={3}>
            You have successfully opened modal!
          </Typography.Title>
          <Button onClick={() => setCounter(counter + 1)}>
            Button counter: {counter}
          </Button>
        </Modal>
      </div>
    );
  }

  return WithModal;
};

export default withModal;
