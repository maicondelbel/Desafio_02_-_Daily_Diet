import { PencilSimpleLine, Plus, Trash } from 'phosphor-react-native'
import { TouchableOpacityProps } from 'react-native'
import { useTheme } from 'styled-components/native'
import { Container, Label } from './styles'

type ButtonProps = TouchableOpacityProps & {
  action: 'default' | 'add' | 'edit' | 'remove'
  label: string
  variant?: 'outline' | 'default'
}

export function Button({
  action,
  label,
  variant = 'default',
  ...props
}: ButtonProps) {
  const theme = useTheme()

  const VARIANTS_COLOR = {
    default: theme.COLORS.WHITE,
    outline: theme.COLORS.GRAY_100,
  }

  const ACTION_TYPES = {
    add: <Plus size={18} color={VARIANTS_COLOR[variant] || undefined} />,
    edit: (
      <PencilSimpleLine
        size={18}
        color={VARIANTS_COLOR[variant] || undefined}
      />
    ),
    remove: <Trash size={18} color={VARIANTS_COLOR[variant] || undefined} />,
    default: '',
  }

  return (
    <Container variant={variant} {...props}>
      {ACTION_TYPES[action]}
      <Label variant={variant}>{label}</Label>
    </Container>
  )
}
