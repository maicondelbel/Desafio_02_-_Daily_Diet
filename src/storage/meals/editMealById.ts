/* eslint-disable no-useless-catch */
import AsyncStorage from '@react-native-async-storage/async-storage'
import { MEALS_COLECTION } from '@storage/storage.config'

import { createMeal } from './createMeal'
import { deleteMealById } from './deleteMealById'
import { getAllMeals } from './getAllMeals'
import { Meal } from './mealsDTO'

export async function editMealById(id: string, newMeal: Meal, title: string) {
  try {
    const storedMeals = await getAllMeals()

    const mealsInSameDate = storedMeals.find(
      (meal) => meal.title === newMeal.date,
    )

    if (mealsInSameDate) {
      const restOfMealsInSameDate = mealsInSameDate.data.filter(
        (item) => item.id !== id,
      )

      mealsInSameDate.data = [...restOfMealsInSameDate, newMeal]

      const restOfMeals = storedMeals.filter(
        (meal) => meal.title !== newMeal.date,
      )

      const storage = JSON.stringify([...restOfMeals, mealsInSameDate])

      await AsyncStorage.setItem(MEALS_COLECTION, storage)
    } else {
      await deleteMealById(id, title)
      await createMeal(newMeal)
    }
  } catch (error) {
    throw error
  }
}
