import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props) => props.theme.COLORS.WHITE};
  padding: 24px;
`

type FeedbackTitleProps = {
  variants: 'onTheDiet' | 'outOfDiet'
}

export const FeedbackTitle = styled.Text<FeedbackTitleProps>`
  margin-bottom: 8px;
  font-size: ${(props) => props.theme.FONT_SIZE.TITLE_M};
  font-family: ${(props) => props.theme.FONT_FAMILY.BOLD};
  color: ${(props) =>
    props.variants === 'onTheDiet'
      ? props.theme.COLORS.GREEN_DARK
      : props.theme.COLORS.RED_DARK};
`

export const FeedbackMessage = styled.Text`
  color: ${(props) => props.theme.COLORS.GRAY_200};
  font-size: ${(props) => props.theme.FONT_SIZE.BODY_M};
  text-align: center;
  margin-bottom: 40px;
`

export const Strong = styled.Text`
  font-family: ${(props) => props.theme.FONT_FAMILY.BOLD};
`
