import { css } from 'styled-components'
import styled from 'styled-components/native'
import { CardSizes, CardVariants } from '.'

import { ArrowUpRight } from 'phosphor-react-native'

type ContainerProps = {
  variants: CardVariants
  size: CardSizes
}

const VARIANTS = {
  green: css`
    background-color: ${(props) => props.theme.COLORS.GREEN_LIGHT};
  `,
  red: css`
    background-color: ${(props) => props.theme.COLORS.RED_LIGHT};
  `,
  gray: css`
    background-color: ${(props) => props.theme.COLORS.GRAY_600};
  `,
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  padding: ${(props) =>
    (props.size === 'large' && '20px 16px') ||
    (props.size === 'medium' && '16px')};
  ${(props) => VARIANTS[props.variants]}
  align-items: center;
  position: relative;
  border-radius: 8px;
  /* flex: 1; */
`

type TitleProps = {
  size: CardSizes
}

export const Title = styled.Text<TitleProps>`
  font-size: ${(props) =>
    (props.size === 'large' && props.theme.FONT_SIZE.TITLE_G) ||
    (props.size === 'medium' && props.theme.FONT_SIZE.TITLE_M)};
  color: ${(props) => props.theme.COLORS.GRAY_100};
  font-family: ${(props) => props.theme.FONT_FAMILY.BOLD};
  margin-bottom: ${(props) =>
    (props.size === 'large' && '2px') || (props.size === 'medium' && '8px')};
`

export const Subtitle = styled.Text`
  font-size: ${(props) => props.theme.FONT_SIZE.BODY_S};
  color: ${(props) => props.theme.COLORS.GRAY_200};
  font-family: ${(props) => props.theme.FONT_FAMILY.REGULAR};
  text-align: center;
`

export const OpenIcon = styled(ArrowUpRight).attrs((props) => ({
  size: 24,
  color:
    (props.color === 'green' && props.theme.COLORS.GREEN_DARK) ||
    (props.color === 'red' && props.theme.COLORS.RED_DARK) ||
    (props.color === 'gray' && props.theme.COLORS.GRAY_700),
}))`
  position: absolute;
  top: 8px;
  right: 8px;
`
