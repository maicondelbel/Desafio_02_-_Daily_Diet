import { Button } from '@components/Button'
import { Card } from '@components/Card'
import { Header } from '@components/Header'
import { ListItem } from '@components/ListItem'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { ScrollView, SectionList, Text } from 'react-native'
import { Container, Content, ListTitle } from './styles'

import { EmptyList } from '@components/EmptyList'
import { Loading } from '@components/Loading'
import { getAllMeals } from '@storage/meals/getAllMeals'
import { getStatistics } from '@storage/meals/getStatistics'
import { MealList, Statistics } from '@storage/meals/mealsDTO'
import { useCallback, useState } from 'react'

export function HomeScreen() {
  const [isLoading, setIsLoading] = useState(true)

  const { navigate } = useNavigation()
  const [meals, setMeals] = useState<MealList[]>([])
  const [statistics, setStatistics] = useState<Statistics>()

  function goToStatisticsScreen() {
    navigate('statistics')
  }

  function goToAddMealScreen() {
    navigate('meal', { action: 'add', title: undefined, id: undefined })
  }

  function goToViewMealScreen(id: string, title: string) {
    navigate('viewMeal', { title, id })
  }

  async function fecthMeals() {
    try {
      setIsLoading(true)
      const mealsData = await getAllMeals()
      const statisticsData = await getStatistics()
      setMeals(mealsData)
      setStatistics(statisticsData)
    } catch (error) {
      console.log('Erro buscando refeições', error)
    } finally {
      setIsLoading(false)
    }
  }

  useFocusEffect(
    useCallback(() => {
      fecthMeals()
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
        <Header />
        <Card
          variant={statistics?.isOnTheDiet ? 'green' : 'red'}
          size="large"
          title={`${statistics?.mealsOnTheDietInPorcent!}%`}
          subtitle="das refeições dentro da dieta"
          style={{ marginTop: 32 }}
          onPress={goToStatisticsScreen}
        />
        <Text style={{ marginTop: 28, marginBottom: 8 }}>Refeições</Text>
        <Button
          variant="default"
          action="add"
          label="Nova refeição"
          onPress={goToAddMealScreen}
        />
        <Content>
          {isLoading ? (
            <Loading />
          ) : (
            <SectionList
              scrollEnabled={false}
              sections={meals}
              keyExtractor={(item, index) => item.id!.toString()}
              renderItem={({ item }) => (
                <ListItem
                  hour={item.hour}
                  name={item.name}
                  onTheDiet={item.onTheDiet!}
                  onPress={() =>
                    goToViewMealScreen(
                      item.id!.toString(),
                      item.date.toString(),
                    )
                  }
                />
              )}
              renderSectionHeader={({ section: { title } }) => (
                <ListTitle>{title.replaceAll('/', '.')}</ListTitle>
              )}
              ListEmptyComponent={<EmptyList />}
              contentContainerStyle={meals.length === 0 && { flex: 1 }}
            />
          )}
        </Content>
      </ScrollView>
    </Container>
  )
}
