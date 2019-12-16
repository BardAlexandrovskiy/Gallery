import React from 'react';
import {Container, List, Alert} from './styles';
import ItemList from '../../components/ItemList';
import {ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {getItems} from '../../actions/itemsList';

class MainScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  componentDidMount() {
    const {getItemsAction} = this.props;
    getItemsAction();
  }

  render() {
    const {navigate} = this.props.navigation;
    const {isError, isLoading, itemsList} = this.props;
    if (isError) {
      return (
        <Container>
          <Alert>Ошибка</Alert>
        </Container>
      );
    }

    if (isLoading) {
      return (
        <Container>
          <Alert>Загрузка...</Alert>
        </Container>
      );
    }

    return (
      <Container>
        <List>
          <ScrollView>
            {itemsList.map(item => {
              const {description, alt_description, user, urls, id} = item;
              const {name} = user;
              const {regular, thumb} = urls;
              return (
                <ItemList
                  description={description}
                  altDescription={alt_description}
                  name={name}
                  fullImg={regular}
                  iconImg={thumb}
                  key={id}
                  navigate={navigate}
                />
              );
            })}
          </ScrollView>
        </List>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  const {isError, isLoading, itemsList} = state.itemsList;
  return {isError, isLoading, itemsList};
};

const mapDispatchToProps = {
  getItemsAction: getItems,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainScreen);
