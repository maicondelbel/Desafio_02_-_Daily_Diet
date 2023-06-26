import { Circle } from 'phosphor-react-native'
import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  padding: 14px 16px 14px 12px;
  border: 1px solid ${(props) => props.theme.COLORS.GRAY_500};
  border-radius: 6px;
  margin-bottom: 8px;
  align-items: center;
`

export const Time = styled.Text`
  font-family: ${(props) => props.theme.FONT_FAMILY.BOLD};
  font-size: ${(props) => props.theme.FONT_SIZE.BODY_XS};
  color: ${(props) => props.theme.COLORS.GRAY_100};
`

export const Separator = styled.View`
  margin: 0 12px;
  width: 2px;
  height: 14px;
  background-color: ${(props) => props.theme.COLORS.GRAY_500};
`

export const Content = styled.Text`
  flex: 1;
  font-family: ${(props) => props.theme.FONT_FAMILY.REGULAR};
  font-size: ${(props) => props.theme.FONT_SIZE.BODY_M};
  padding-right: 12px;
`

type StatusIconProps = {
  status: boolean
}

export const StatusIcon = styled(Circle).attrs<StatusIconProps>((props) => ({
  color: props.status
    ? props.theme.COLORS.GREEN_LIGHT
    : props.theme.COLORS.RED_LIGHT,
}))``
