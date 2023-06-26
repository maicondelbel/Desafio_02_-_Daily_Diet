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

export const Content = styled.View`
  padding: 40px 24px;
  background-color: ${(props) => props.theme.COLORS.WHITE};
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  flex: 1;
  justify-content: space-between;
`

export const Header = styled.View`
  padding: 0 64px 12px 8px;
  width: 100%;
  flex-direction: row;
  align-items: center;
`

export const Form = styled.View`
  margin-bottom: 24px;
  align-items: flex-start;
`

export const Description = styled.Text`
  font-size: ${(props) => props.theme.FONT_SIZE.BODY_M};
  color: ${(props) => props.theme.COLORS.GRAY_200};
`

export const ButtonsWrapper = styled.View`
  gap: 8px;
`

export const ModalWrapper = styled.View`
  /* flex: 1; */
  align-items: center;
  padding: 24px;
  background-color: ${(props) => props.theme.COLORS.WHITE};
  border-radius: 8px;
`

export const ModalMessage = styled.Text`
  font-family: ${(props) => props.theme.FONT_FAMILY.BOLD};
  font-size: ${(props) => props.theme.FONT_SIZE.TITLE_S};
  color: ${(props) => props.theme.COLORS.GRAY_200};
  margin-bottom: 32px;
  margin-top: 16px;
  text-align: center;
  max-width: 279px;
`
export const ModalButtonsWrapper = styled.View`
  gap: 12px;
  flex-direction: row;
`
