import { TextProps } from 'react-native'
import { Container, HeadingVariants } from './styles'

type HeadingProps = TextProps & {
  variant: HeadingVariants
  content: string
}

export function Heading({ content, variant, ...props }: HeadingProps) {
  return (
    <Container variant={variant} {...props}>
      {content}
    </Container>
  )
}
