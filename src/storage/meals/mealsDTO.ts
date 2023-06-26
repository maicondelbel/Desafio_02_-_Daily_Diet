export type Meal = {
  id: string | number[] | undefined
  name: string
  description: string
  date: string
  hour: string
  onTheDiet: boolean | undefined
}

export type MealList = {
  title: string
  data: Meal[]
}

export type Statistics = {
  isOnTheDiet: boolean
  totalOfMeals: string
  mealsOnTheDiet: string
  mealsOutOfDiet: string
  bestSequence: string
  mealsOnTheDietInPorcent: string
}
