/* eslint-disable react-hooks/exhaustive-deps */
import { Heading } from '@components/Heading'
import {
  Alert,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import uuid from 'react-native-uuid'

import { Button } from '@components/Button'
import { GoBackButton } from '@components/GoBackButton'
import { Input } from '@components/Input'
import { InputMask } from '@components/InputMask'
import { SelectButton } from '@components/SelectButton'
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native'
import { createMeal } from '@storage/meals/createMeal'
import { editMealById } from '@storage/meals/editMealById'
import { getMealById } from '@storage/meals/getMealById'
import { useCallback, useRef, useState } from 'react'
import {
  Column,
  Container,
  Content,
  Form,
  Header,
  RowWithColumns,
} from './styles'

type RouteParams = {
  action: 'edit' | 'add'
  title: string | undefined
  id: string | undefined
}

export function MealScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [mealOnTheDiet, setMealOnTheDiet] = useState<string | null>(null)
  const [meal, setMeal] = useState({
    name: '',
    description: '',
    date: '',
    hour: '',
  })

  const { navigate } = useNavigation()
  const routes = useRoute()

  const { action, id, title } = routes.params as RouteParams

  const descriptionInputRef = useRef<TextInput>(null)
  const dateInputRef = useRef<TextInput>(null)
  const hourInputRef = useRef<TextInput>(null)
  const selectButtonRef = useRef<TouchableOpacity>(null)

  const PAGE_TITLE = {
    edit: 'Editar refeição',
    add: 'Nova refeição',
  }

  const BUTTON_TITLE = {
    edit: 'Salvar alterações',
    add: 'Cadastrar refeição',
  }

  const DATE_REGEX = /(^0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(\d{2}$)/
  const HOUR_REGEX = /^(2[0-3]|[01]?[0-9]):([0-5]?[0-9])$/

  const feedbackType = mealOnTheDiet === 'yes' ? 'onTheDiet' : 'outOfDiet'

  function handleForm(key: string, value: string) {
    setMeal((prevState) => ({ ...prevState, [key]: value }))
  }

  async function handleCreateNewMeal() {
    try {
      if (meal.name.trim().length === 0) {
        return Alert.alert('Nova Refeição', 'Preencha o nome da refeição')
      }
      if (meal.description.trim().length === 0) {
        return Alert.alert('Nova Refeição', 'Preencha a descrição da refeição')
      }
      if (meal.date.trim().length === 0) {
        return Alert.alert('Nova Refeição', 'Preencha a data da refeição')
      }
      if (!(DATE_REGEX.test(meal.date) && meal.date.trim().length === 8)) {
        return Alert.alert('Nova Refeição', 'Data da refeição incorreta')
      }
      if (meal.hour.trim().length === 0) {
        return Alert.alert('Nova Refeição', 'Preencha a hora da refeição')
      }
      if (!(HOUR_REGEX.test(meal.hour) && meal.hour.trim().length === 5)) {
        return Alert.alert('Nova Refeição', 'Hora da refeição incorreta')
      }
      if (mealOnTheDiet === null) {
        return Alert.alert(
          'Nova Refeição',
          'Informe se está ou não dentro da dieta',
        )
      }
      const newMeal = {
        id: action === 'add' ? uuid.v4() : id,
        name: meal.name,
        description: meal.description,
        date: meal.date,
        hour: meal.hour,
        onTheDiet: mealOnTheDiet === 'yes',
      }

      if (action === 'edit') {
        await editMealById(id!, newMeal, title!)
        navigate('viewMeal', { id: id!, title })
      } else {
        await createMeal(newMeal)
        navigate('feedback', {
          type: feedbackType,
        })
      }
    } catch (error) {
      console.log('Erro criando uma refeição', error)
    }
  }

  async function fetchMealById() {
    try {
      const result = await getMealById(id!)
      setMeal({ ...result })
      setMealOnTheDiet(result.onTheDiet ? 'yes' : 'no')
    } catch (error) {
      console.log('Erro buscando uma refeição pelo Id', error)
    } finally {
      setIsLoading(false)
    }
  }

  useFocusEffect(
    useCallback(() => {
      descriptionInputRef.current?.focus()
      if (id) {
        fetchMealById()
      } else {
        setIsLoading(false)
      }
    }, []),
  )

  if (isLoading) {
    return null
  }

  return (
    <Container>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <Header>
          <GoBackButton variant="gray" />
          <Heading
            content={PAGE_TITLE[action]}
            variant="s"
            style={{ flex: 1 }}
          />
        </Header>
        <Content>
          <Form>
            <View style={{ marginBottom: 24 }}>
              <Heading
                variant="xs"
                content="Nome"
                style={{ textAlign: 'left' }}
              />
              <Input
                value={meal.name}
                defaultValue={meal.name}
                onChangeText={(value) => handleForm('name', value)}
                onSubmitEditing={() => descriptionInputRef.current?.focus()}
                returnKeyType="next"
              />
            </View>
            <View style={{ marginBottom: 24 }}>
              <Heading
                variant="xs"
                content="Descrição"
                style={{ textAlign: 'left' }}
              />
              <Input
                multiline
                numberOfLines={4}
                textAlignVertical="top"
                value={meal.description}
                defaultValue={meal.description}
                onChangeText={(value) => handleForm('description', value)}
                ref={descriptionInputRef}
                onSubmitEditing={() => dateInputRef.current?.focus()}
                blurOnSubmit={true}
                returnKeyType="next"
              />
            </View>
            <RowWithColumns style={{ marginBottom: 24 }}>
              <Column>
                <Heading
                  variant="xs"
                  content="Data"
                  style={{ textAlign: 'left' }}
                />
                <InputMask
                  keyboardType="numeric"
                  mask="99/99/99"
                  value={meal.date}
                  defaultValue={meal.date}
                  onChangeText={(value) => handleForm('date', value)}
                  ref={dateInputRef}
                  onSubmitEditing={() => hourInputRef.current?.focus()}
                  returnKeyType="next"
                />
              </Column>
              <Column>
                <Heading
                  variant="xs"
                  content="Hora"
                  style={{ textAlign: 'left' }}
                />
                <InputMask
                  keyboardType="numeric"
                  mask="99:99"
                  value={meal.hour}
                  defaultValue={meal.hour}
                  onChangeText={(value) => handleForm('hour', value)}
                  ref={hourInputRef}
                  onSubmitEditing={() => selectButtonRef.current?.focus()}
                  returnKeyType="next"
                />
              </Column>
            </RowWithColumns>
            <Heading
              variant="xs"
              content="Está dentro da dieta?"
              style={{ textAlign: 'left' }}
            />
            <RowWithColumns>
              <Column>
                <SelectButton
                  variant="yes"
                  isSelected={mealOnTheDiet === 'yes'}
                  onPress={() => setMealOnTheDiet('yes')}
                  ref={selectButtonRef}
                />
              </Column>
              <Column>
                <SelectButton
                  variant="no"
                  isSelected={mealOnTheDiet === 'no'}
                  onPress={() => setMealOnTheDiet('no')}
                />
              </Column>
            </RowWithColumns>
          </Form>
          <Button
            action="default"
            label={BUTTON_TITLE[action]}
            onPress={handleCreateNewMeal}
          />
        </Content>
      </ScrollView>
    </Container>
  )
}
