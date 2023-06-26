import styled from 'styled-components/native'

export const Container = styled.View`
  background-color: ${(props) => props.theme.COLORS.GRAY_600};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
  min-height: 34px;
  border-radius: 9999px;
`

export const Label = styled.Text`
  font-size: ${(props) => props.theme.FONT_SIZE.BODY_S};
  color: ${(props) => props.theme.COLORS.GRAY_100};
`
