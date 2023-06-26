/* eslint-disable no-useless-catch */
import AsyncStorage from '@react-native-async-storage/async-storage'
import { MEALS_COLECTION } from '@storage/storage.config'
import { getBestSequence } from '@utils/getBestSequence'
import { MealList, Statistics } from './mealsDTO'

export async function getStatistics() {
  try {
    const storage = await AsyncStorage.getItem(MEALS_COLECTION)

    const previewsMeals: MealList[] = storage ? JSON.parse(storage) : []

    const totalOfMealsFlat = previewsMeals.map((meal) => meal.data).flat()

    const totalOfMeals = previewsMeals.map((meal) => meal.data).flat().length

    const mealsOnTheDiet = previewsMeals
      .map((meal) => meal.data)
      .flat()
      .reduce((acc, valor, índice, array) => {
        if (valor.onTheDiet === true) {
          acc += 1
        }
        return acc
      }, 0)

    const mealsOnTheDietInPorcent = (mealsOnTheDiet * 100) / totalOfMeals || 0

    const bestSequence = getBestSequence(totalOfMealsFlat)

    const statistics: Statistics = {
      isOnTheDiet: mealsOnTheDietInPorcent >= 50,
      totalOfMeals: totalOfMeals.toString() || '0',
      mealsOnTheDiet: mealsOnTheDiet.toString() || '0',
      mealsOutOfDiet: (totalOfMeals - mealsOnTheDiet).toString() || '0',
      bestSequence: bestSequence.toString() || '0',
      mealsOnTheDietInPorcent: mealsOnTheDietInPorcent.toLocaleString('pt-BR', {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
      }),
    }

    return statistics
  } catch (error) {
    throw error
  }
}
