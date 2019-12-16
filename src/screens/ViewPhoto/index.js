import React from 'react';
import {Container, Img} from './styles';

class ViewPhotoScreen extends React.Component {
  static navigationOptions = {
    title: 'Photo',
  };
  render() {
    const {navigation} = this.props;
    return (
      <Container>
        <Img
          source={{
            uri: navigation.getParam('fullImg'),
          }}
        />
      </Container>
    );
  }
}

export default ViewPhotoScreen;
