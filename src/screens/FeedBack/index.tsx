import { useNavigation, useRoute } from '@react-navigation/native'
import { Image, ScrollView } from 'react-native'
import { Container, FeedbackMessage, FeedbackTitle, Strong } from './styles'

import onTheDietIllustration from '@assets/kepp-it-up.png'
import outOfDietIllustration from '@assets/what-a-shame.png'
import { Button } from '@components/Button'

type RouteParams = {
  type: 'onTheDiet' | 'outOfDiet'
}

export function FeedbackScreen() {
  const routes = useRoute()
  const { navigate } = useNavigation()

  const { type: feedbackType } = routes.params as RouteParams

  function goToHomeScreen() {
    navigate('home')
  }

  return (
    <Container>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {feedbackType === 'onTheDiet' ? (
          <>
            <FeedbackTitle variants={feedbackType}>
              Continue assim!
            </FeedbackTitle>
            <FeedbackMessage>
              Você continua <Strong>dentro da dieta</Strong>. Muito bem!
            </FeedbackMessage>
            <Image
              source={onTheDietIllustration}
              alt="Keep it up!"
              style={{ marginBottom: 32 }}
            />
            <Button
              label="Ir para a página inicial"
              action="default"
              onPress={goToHomeScreen}
            />
          </>
        ) : (
          <>
            <FeedbackTitle variants={feedbackType}>Que pena!</FeedbackTitle>
            <FeedbackMessage>
              Você <Strong>saiu da dieta</Strong> dessa vez, mas continue se
              esforçando e não desista!
            </FeedbackMessage>
            <Image
              source={outOfDietIllustration}
              alt="What a shame!"
              style={{ marginBottom: 32 }}
            />
            <Button
              label="Ir para a página inicial"
              action="default"
              onPress={goToHomeScreen}
            />
          </>
        )}
      </ScrollView>
    </Container>
  )
}
