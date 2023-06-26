import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props) => props.theme.COLORS.GRAY_500};
  padding-top: 8px;
`

export const Content = styled.View`
  padding: 40px 24px;
  background-color: ${(props) => props.theme.COLORS.WHITE};
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  flex: 1;
  justify-content: space-between;
`

export const Header = styled.View`
  /* background-color: ${(props) => props.theme.COLORS.GRAY_500}; */
  padding: 0 64px 12px 8px;
  width: 100%;
  flex-direction: row;
  align-items: center;
`

export const Form = styled.View`
  margin-bottom: 24px;
  flex: 1;
`

export const RowWithColumns = styled.View`
  flex-direction: row;
  gap: 18px;
`

export const Column = styled.View`
  flex: 1;
`
