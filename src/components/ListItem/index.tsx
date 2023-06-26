import { Circle } from 'phosphor-react-native'
import { TouchableOpacityProps } from 'react-native'
import { useTheme } from 'styled-components/native'
import { Container, Content, Separator, Time } from './styles'

type ListItemProps = TouchableOpacityProps & {
  hour: string
  name: string
  onTheDiet: boolean
  onPress: (id: string, title: string) => void
}

export function ListItem({ hour, name, onTheDiet, onPress }: ListItemProps) {
  const theme = useTheme()

  return (
    <Container onPress={onPress}>
      <Time>{hour}</Time>
      <Separator />
      <Content numberOfLines={1}>{name}</Content>
      <Circle
        size={14}
        color={onTheDiet ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID}
        weight="fill"
      />
    </Container>
  )
}
