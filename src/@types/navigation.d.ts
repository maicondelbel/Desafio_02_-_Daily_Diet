/* eslint-disable no-unused-vars */
export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined
      statistics: undefined
      meal: {
        action: 'edit' | 'add'
        title: string | undefined
        id: string | undefined
      }
      viewMeal: {
        title: string | undefined
        id: string
      }
      feedback: {
        type: 'onTheDiet' | 'outOfDiet'
      }
    }
  }
}
