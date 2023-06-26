/* eslint-disable no-useless-catch */
import AsyncStorage from '@react-native-async-storage/async-storage'
import { MEALS_COLECTION } from '@storage/storage.config'
import { MealList } from './mealsDTO'

export async function getMealById(id: string) {
  try {
    const storage = await AsyncStorage.getItem(MEALS_COLECTION)

    const previewsMeals: MealList[] = storage ? JSON.parse(storage) : []

    const mealsFlat = previewsMeals.map((meal) => meal.data).flat()

    const result = mealsFlat.filter((meal) => meal.id === id)

    return result[0]
  } catch (error) {
    throw error
  }
}
