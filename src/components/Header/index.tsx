import { Image } from 'react-native'
import { AvatarContainer, AvatarImg, Container } from './styles'

import AvatarImage from '@assets/avatar.png'
import LogoImage from '@assets/logo.png'

export function Header() {
  return (
    <Container>
      <Image source={LogoImage} alt="Logo Daily Diet" />
      <AvatarContainer>
        <AvatarImg source={AvatarImage} alt="Avatar Image" />
      </AvatarContainer>
    </Container>
  )
}
