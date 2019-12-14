import styled from 'styled-components';
import {Text, View} from 'react-native';

export const Container = styled(View)`
  background-color: black;
  height: 100%;
  flex-direction: row;
`;

export const MainText = styled(Text)`
  align-self: center;
  margin: 0 auto;
  color: white;
`;
