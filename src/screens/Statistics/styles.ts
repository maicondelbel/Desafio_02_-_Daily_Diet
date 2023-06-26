import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

type ContainerProps = {
  isOnTheDiet: boolean
}

export const Container = styled(SafeAreaView)<ContainerProps>`
  flex: 1;
  background-color: ${(props) =>
    props.isOnTheDiet
      ? props.theme.COLORS.GREEN_LIGHT
      : props.theme.COLORS.RED_LIGHT};
  padding-top: 8px;
`

export const Header = styled.View`
  padding: 0 8px 34px 8px;
`

export const Subtitle = styled.Text`
  font-size: ${(props) => props.theme.FONT_SIZE.BODY_S};
  margin-top: 2px;
  width: 100%;
  text-align: center;
`
export const Content = styled.View`
  flex: 1;
  padding: 33px 24px;
  background-color: ${(props) => props.theme.COLORS.WHITE};
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`

export const RowWithColumns = styled.View`
  flex-direction: row;
  gap: 12px;
`

export const Column = styled.View`
  flex: 1;
`
