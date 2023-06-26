/* eslint-disable no-useless-catch */
import AsyncStorage from '@react-native-async-storage/async-storage'
import { MEALS_COLECTION } from '@storage/storage.config'
import { getAllMeals } from './getAllMeals'
import { Meal } from './mealsDTO'

export async function createMeal(newMeal: Meal) {
  try {
    const storedMeals = await getAllMeals()

    const hasMealsInSameDate = storedMeals.find(
      (meal) => meal.title === newMeal.date,
    )

    if (hasMealsInSameDate) {
      hasMealsInSameDate.data = [...hasMealsInSameDate.data, newMeal]

      const restOfMeals = storedMeals.filter(
        (meal) => meal.title !== newMeal.date,
      )

      const storage = JSON.stringify([...restOfMeals, hasMealsInSameDate])

      await AsyncStorage.setItem(MEALS_COLECTION, storage)
    } else {
      const newMealToStore = { title: newMeal.date, data: [newMeal] }

      const storage = JSON.stringify([newMealToStore, ...storedMeals])

      await AsyncStorage.setItem(MEALS_COLECTION, storage)
    }
  } catch (error) {
    throw error
  }
}
