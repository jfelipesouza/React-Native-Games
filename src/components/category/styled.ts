import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient';

export const CategoryContainer = styled(RectButton)`
`;


export const CategoryBackground = styled(LinearGradient)`
  width: 104px;
  height: 120px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-right: 8px;
`;



export const CategoryContent = styled.View`
  width: 100px;
  height: 116px;
  justify-content: space-between;
  padding: 7px 0;
  align-items: center;
  border-radius: 8px;
  background-color: ${({theme})=>theme.colors.secondary40};

`;

interface CategoryCardProps{
  checked:Boolean;
}
export const CategoryCard = styled.View<CategoryCardProps>`
  width:${({checked})=>!checked?'13px':'10px'};
  height: ${({checked})=>!checked?'13px':'10px'};
  background-color: ${({theme,checked})=>!checked?theme.colors.secondary100:theme.colors.primary};
  align-self: flex-end;
  margin-right: 7px;
  border-color:${({theme,checked})=>!checked?theme.colors.secondary50:'transparent'};
  border-width:${({checked})=>!checked?'1px':0};
  border-radius: ${({checked})=>!checked?'3px':'8px'};
`;

export const CategoryTitle = styled.Text`
  font-family: ${({theme})=>theme.font.title500};
  color:${({theme})=>theme.colors.heading};
  font-size: 15px;

`;