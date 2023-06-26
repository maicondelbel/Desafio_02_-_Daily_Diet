import { useNavigation } from '@react-navigation/native'
import { TouchableOpacityProps } from 'react-native'
import { ArrowLeftIcon, Container } from './styles'

type GoBackButtonProps = TouchableOpacityProps & {
  variant: 'red' | 'green' | 'gray'
}

export function GoBackButton({ variant, ...props }: GoBackButtonProps) {
  const { navigate } = useNavigation()

  function handleGoToHomeScreen() {
    navigate('home')
  }

  return (
    <Container {...props} onPress={handleGoToHomeScreen}>
      <ArrowLeftIcon color={variant} />
    </Container>
  )
}
