import { Button, Drawer, Icon } from 'rsuite';
import { useModalState } from '../../misc/customhooks';
import Dashboard from '.';

const DadhboardToggle = () => {
  const { isOpen, open, close } = useModalState();
  return (
    <>
      <Button block color="blue" onClick={open}>
        <Icon icon="dashboard" /> Dashboard
      </Button>
      <Drawer show={isOpen} onHide={close} placement="left">
        <Dashboard />
      </Drawer>
    </>
  );
};

export default DadhboardToggle;
