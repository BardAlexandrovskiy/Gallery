import styled from 'styled-components/native';

export const TouchableContainer = styled.TouchableOpacity`
  border-bottom-color: black;
  border-bottom-width: 1;
  min-height: 200;
  align-items: center;
  padding: 10px;
`;

export const Img = styled.Image`
  width: 50%;
  min-height: 200;
  resize-mode: contain;
`;

export const TextContainer = styled.View`
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const Name = styled.Text`
  font-size: 20;
`;

export const Description = styled(Name)`
  font-size: 16;
  text-align: center;
`;
