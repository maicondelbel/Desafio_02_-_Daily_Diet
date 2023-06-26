import { ArrowLeft } from 'phosphor-react-native'
import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  z-index: 10;
`

export const ArrowLeftIcon = styled(ArrowLeft).attrs((props) => ({
  size: 24,
  color:
    (props.color === 'green' && props.theme.COLORS.GREEN_DARK) ||
    (props.color === 'red' && props.theme.COLORS.RED_DARK) ||
    (props.color === 'gray' && props.theme.COLORS.GRAY_200),
}))``
