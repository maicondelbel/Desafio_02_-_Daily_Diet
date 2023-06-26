import { Meal } from '@storage/meals/mealsDTO'

export function getBestSequence(array: Meal[]) {
  let sequence = 0
  let bestSequence = 0

  array.forEach((item) => {
    if (item.onTheDiet) {
      sequence++
    } else {
      sequence = 0
    }
    if (sequence > bestSequence) {
      bestSequence = sequence
    }
  })
  return bestSequence
}
