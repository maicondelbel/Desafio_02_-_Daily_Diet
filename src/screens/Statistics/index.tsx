/* eslint-disable react-hooks/exhaustive-deps */
import { Card } from '@components/Card'
import { GoBackButton } from '@components/GoBackButton'
import { Heading } from '@components/Heading'
import {
  Column,
  Container,
  Content,
  Header,
  RowWithColumns,
  Subtitle,
} from './styles'

import { useCallback, useState } from 'react'

import { useFocusEffect } from '@react-navigation/native'
import { getStatistics } from '@storage/meals/getStatistics'
import { Statistics } from '@storage/meals/mealsDTO'
import { ScrollView, View } from 'react-native'

export function StatisticsScreen() {
  const [statistics, setStatistics] = useState<Statistics>()

  async function fecthStatistics() {
    try {
      const data = await getStatistics()
      setStatistics(data)
    } catch (error) {
      console.log('Erro buscando pelas estatisticas', error)
    }
  }

  useFocusEffect(
    useCallback(() => {
      fecthStatistics()
    }, []),
  )

  return (
    <Container isOnTheDiet={statistics?.isOnTheDiet!}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <Header>
          <GoBackButton variant={statistics?.isOnTheDiet ? 'green' : 'red'} />
          <Heading
            content={`${statistics?.mealsOnTheDietInPorcent!}%`}
            variant="g"
            style={{ marginTop: -20 }}
          />
          <Subtitle>das refeições dentro da dieta</Subtitle>
        </Header>
        <Content>
          <Heading
            variant="xs"
            content="Estatísticas gerais"
            style={{ marginBottom: 23 }}
          />
          <View style={{ marginBottom: 12 }}>
            <Card
              size="medium"
              variant="gray"
              title={statistics?.bestSequence!}
              subtitle="melhor sequência de pratos dentro da dieta"
              disabled
            />
          </View>
          <View style={{ marginBottom: 12 }}>
            <Card
              size="medium"
              variant="gray"
              title={statistics?.totalOfMeals!}
              subtitle="refeições registradas"
              disabled
            />
          </View>
          <RowWithColumns>
            <Column>
              <Card
                size="medium"
                variant="green"
                title={statistics?.mealsOnTheDiet!}
                subtitle="refeições dentro da dieta"
                disabled
              />
            </Column>
            <Column>
              <Card
                size="medium"
                variant="red"
                title={statistics?.mealsOutOfDiet!}
                subtitle="refeições fora da dieta"
                disabled
              />
            </Column>
          </RowWithColumns>
        </Content>
      </ScrollView>
    </Container>
  )
}
