/* eslint-disable no-useless-catch */
import AsyncStorage from '@react-native-async-storage/async-storage'
import { MEALS_COLECTION } from '@storage/storage.config'
import { orderByDesc } from '@utils/sortArray'
import { MealList } from './mealsDTO'

export async function getAllMeals() {
  try {
    const storage = await AsyncStorage.getItem(MEALS_COLECTION)

    const previewsMeals: MealList[] = storage ? JSON.parse(storage) : []

    previewsMeals.map((item) => {
      item.data.sort((a, b) => {
        return a.hour < b.hour ? -1 : a.hour < b.hour ? 1 : 0
      })

      return [item.data]
    })

    const orderedMeals = orderByDesc(previewsMeals)

    return orderedMeals
  } catch (error) {
    throw error
  }
}
