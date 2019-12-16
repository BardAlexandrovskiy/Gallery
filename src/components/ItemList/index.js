import React from 'react';
import {
  TouchableContainer,
  Img,
  TextContainer,
  Name,
  Description,
} from './styles';

const ItemList = ({
  description,
  altDescription,
  name,
  fullImg,
  iconImg,
  navigate,
}) => {
  return (
    <TouchableContainer onPress={() => navigate('ViewPhotoScreen', {fullImg})}>
      <>
        <Img source={{uri: iconImg}} />
        <TextContainer>
          <Name>{name}</Name>
          <Description>{description || altDescription}</Description>
        </TextContainer>
      </>
    </TouchableContainer>
  );
};

export default ItemList;
