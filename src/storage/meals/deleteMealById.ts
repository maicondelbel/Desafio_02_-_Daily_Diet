/* eslint-disable no-useless-catch */
import AsyncStorage from '@react-native-async-storage/async-storage'

import { MEALS_COLECTION } from '@storage/storage.config'
import { getAllMeals } from './getAllMeals'

export async function deleteMealById(id: string, title: string) {
  try {
    const storedMeals = await getAllMeals()

    const mealsInSameDate = storedMeals.find((meal) => meal.title === title)

    if (mealsInSameDate) {
      const restOfMealsInSameDate = mealsInSameDate.data.filter(
        (item) => item.id !== id,
      )

      const restOfMeals = storedMeals.filter((meal) => meal.title !== title)

      if (restOfMealsInSameDate.length !== 0) {
        mealsInSameDate.data = [...restOfMealsInSameDate]
        const storage = JSON.stringify([...restOfMeals, mealsInSameDate])
        await AsyncStorage.setItem(MEALS_COLECTION, storage)
      } else {
        const storage = JSON.stringify([...restOfMeals])
        await AsyncStorage.setItem(MEALS_COLECTION, storage)
      }
    }
  } catch (error) {
    throw error
  }
}
