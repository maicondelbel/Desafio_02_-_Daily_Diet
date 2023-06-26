import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props) => props.theme.COLORS.WHITE};
  padding: 24px;
`

export const ListTitle = styled.Text`
  font-size: ${(props) => props.theme.FONT_SIZE.TITLE_M};
  font-family: ${(props) => props.theme.FONT_FAMILY.BOLD};
  margin-bottom: 8px;
  margin-top: 32px;
`

export const Content = styled.View`
  flex-grow: 1;
  /* align-items: center; */
  /* justify-content: center; */
`
