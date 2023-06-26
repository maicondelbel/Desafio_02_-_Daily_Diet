/* eslint-disable camelcase */
import { Loading } from '@components/Loading'
import {
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from '@expo-google-fonts/nunito-sans'
import { Routes } from '@routes/index'
import theme from '@theme/index'
import { useFonts } from 'expo-font'
import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components'

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  })
  return (
    <>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />
        {fontsLoaded ? <Routes /> : <Loading />}
      </ThemeProvider>
    </>
  )
}
