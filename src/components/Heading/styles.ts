import styled from 'styled-components/native'

export type HeadingVariants = 'xs' | 's' | 'm' | 'g'

type ContainerProps = {
  variant: HeadingVariants
}

export const Container = styled.Text<ContainerProps>`
  font-size: ${(props) =>
    (props.variant === 'xs' && props.theme.FONT_SIZE.TITLE_XS) ||
    (props.variant === 's' && props.theme.FONT_SIZE.TITLE_S) ||
    (props.variant === 'm' && props.theme.FONT_SIZE.TITLE_M) ||
    (props.variant === 'g' && props.theme.FONT_SIZE.TITLE_G)};
  font-family: ${(props) => props.theme.FONT_FAMILY.BOLD};
  color: ${(props) => props.theme.COLORS.GRAY_100};
  width: 100%;
  text-align: center;
`
