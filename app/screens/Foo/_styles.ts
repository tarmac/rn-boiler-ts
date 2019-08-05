import styled from 'styled-components/native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export const StyledScrollView = styled.ScrollView`
  background-color: ${Colors.lighter};
`;

export const StyledViewBody = styled.View`
  color: ${Colors.white};
`;

export const StyledViewContainer = styled.View`
  margin-top: 32px;
  padding: 0px 24px;
`;

export const StyledTextTitle = styled.Text`
  font-size: 24px;
  font-weight: 600;
  color: ${Colors.black};
`;

export const StyledTextDescription = styled.Text`
  margin-top: 8px;
  font-size: 18px;
  font-weight: 400;
  color: ${Colors.dark};
`;

export const StyledTextHighlight = styled.Text`
  font-weight: 700;
`;
