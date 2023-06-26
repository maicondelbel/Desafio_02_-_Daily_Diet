import { TouchableOpacityProps } from 'react-native'
import { Container, OpenIcon, Subtitle, Title } from './styles'

export type CardSizes = 'large' | 'medium'
export type CardVariants = 'green' | 'red' | 'gray'

type CardProps = TouchableOpacityProps & {
  size: CardSizes
  variant: CardVariants
  title: string
  subtitle: string
}

export function Card({ size, subtitle, title, variant, ...props }: CardProps) {
  return (
    <Container variants={variant} size={size} {...props}>
      {!props.disabled && <OpenIcon color={variant} />}
      <Title size={size}>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  )
}
