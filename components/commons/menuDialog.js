import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const styles = {
  appBar: {
    position: 'relative',
    backgroundColor: 'white'
  },
  flex: {
    flex: 1,
  },
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class MenuDialog extends React.Component {
  render() {
    const { classes, state, handleClose, children } = this.props;
    return (
      <Dialog
        fullScreen
        open={state}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <Container>
          {children}
        </Container>
      </Dialog>
    );
  }
}

export default withStyles(styles)(MenuDialog);
