import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { FeedbackScreen } from '@screens/FeedBack'
import { HomeScreen } from '@screens/Home'
import { MealScreen } from '@screens/Meal'
import { StatisticsScreen } from '@screens/Statistics'
import { ViewMealScreen } from '@screens/ViewMeal'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false, animation: 'fade' }}>
      <Screen name="home" component={HomeScreen} />
      <Screen name="statistics" component={StatisticsScreen} />
      <Screen name="meal" component={MealScreen} />
      <Screen name="viewMeal" component={ViewMealScreen} />
      <Screen name="feedback" component={FeedbackScreen} />
    </Navigator>
  )
}
