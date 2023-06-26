import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const Loader = styled.ActivityIndicator.attrs((props) => ({
  color: props.theme.COLORS.GRAY_200,
  size: 32,
}))``
