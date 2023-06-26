/* eslint-disable react-hooks/exhaustive-deps */
import { Badge } from '@components/Badge'
import { Button } from '@components/Button'
import { GoBackButton } from '@components/GoBackButton'
import { Heading } from '@components/Heading'
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native'
import Modal from 'react-native-modal'

import { deleteMealById } from '@storage/meals/deleteMealById'
import { getMealById } from '@storage/meals/getMealById'
import { Meal } from '@storage/meals/mealsDTO'
import { useCallback, useState } from 'react'
import { ScrollView } from 'react-native'
import {
  ButtonsWrapper,
  Container,
  Content,
  Description,
  Form,
  Header,
  ModalButtonsWrapper,
  ModalMessage,
  ModalWrapper,
} from './styles'

type RouteProps = {
  title: string
  id: string
}

export function ViewMealScreen() {
  const route = useRoute()
  const [meal, setMeal] = useState<Meal>()
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)

  const { navigate } = useNavigation()

  const { id, title } = route.params as RouteProps

  async function fecthMeals() {
    try {
      const mealData = await getMealById(id)
      setMeal(mealData)
    } catch (error) {
      console.log('Erro buscando pelas refeições', error)
    }
  }

  function handleGoToEditMealScreen() {
    navigate('meal', { action: 'edit', id, title })
  }

  function handleOpenModal() {
    setIsOpenModal(!isOpenModal)
  }

  async function handleDeleteMealById() {
    try {
      await deleteMealById(id, title)
      handleOpenModal()
      navigate('home')
    } catch (error) {
      console.log('Erro ao deletar uma refeição', error)
    }
  }

  useFocusEffect(
    useCallback(() => {
      fecthMeals()
    }, []),
  )

  return (
    <Container isOnTheDiet={meal?.onTheDiet!}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <Header>
          <GoBackButton variant="gray" />
          <Heading content="Refeição" variant="s" style={{ flex: 1 }} />
        </Header>
        <Content>
          <Form>
            <Heading
              variant="s"
              content={meal?.name!}
              style={{ textAlign: 'left', marginBottom: 8 }}
            />
            <Description style={{ marginBottom: 24 }}>
              {meal?.description!}
            </Description>
            <Heading
              variant="xs"
              content={'Data e hora'}
              style={{ textAlign: 'left', marginBottom: 8 }}
            />
            <Description style={{ marginBottom: 24 }}>
              {`${meal?.date} às ${meal?.hour}`}
            </Description>
            <Badge status={meal?.onTheDiet!} />
          </Form>
          <ButtonsWrapper>
            <Button
              action="edit"
              label="Editar refeição"
              onPress={handleGoToEditMealScreen}
            />
            <Button
              action="remove"
              label="Excluir refeição"
              variant="outline"
              onPress={handleOpenModal}
            />
          </ButtonsWrapper>
        </Content>
      </ScrollView>
      <Modal isVisible={isOpenModal}>
        <ModalWrapper>
          <ModalMessage>
            Deseja realmente excluir o registro da refeição?
          </ModalMessage>
          <ModalButtonsWrapper>
            <Button
              action="default"
              variant="outline"
              label="Cancelar"
              onPress={handleOpenModal}
            />
            <Button
              action="default"
              label="Sim, excluir"
              onPress={handleDeleteMealById}
            />
          </ModalButtonsWrapper>
        </ModalWrapper>
      </Modal>
    </Container>
  )
}
