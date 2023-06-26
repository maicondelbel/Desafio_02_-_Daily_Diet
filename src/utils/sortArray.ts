import { MealList } from '@storage/meals/mealsDTO'

export function orderByDesc(meals: MealList[]) {
  return meals.sort((a, b) => {
    return a.title > b.title ? -1 : a.title > b.title ? 1 : 0
  })
}
