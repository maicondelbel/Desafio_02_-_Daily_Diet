import { css } from 'styled-components'
import styled from 'styled-components/native'

type ContainerProps = {
  variant: 'outline' | 'default'
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  flex-direction: row;
  justify-content: center;
  gap: 12px;
  padding: 16px 24px;
  justify-items: center;
  align-items: center;
  border-radius: 6px;
  background-color: ${(props) =>
    (props.variant === 'default' && props.theme.COLORS.GRAY_200) ||
    (props.variant === 'outline' && 'transparent')};
  ${(props) =>
    props.variant === 'outline' &&
    css`
      border: 1px solid ${props.theme.COLORS.GRAY_100};
    `}
`

export const Label = styled.Text<ContainerProps>`
  ${(props) => css`
    font-family: ${props.theme.FONT_FAMILY.BOLD};
    font-size: ${props.theme.FONT_SIZE.BODY_S};
    color: ${props.variant === 'default'
      ? props.theme.COLORS.WHITE
      : props.theme.COLORS.GRAY_100};
  `}
`
