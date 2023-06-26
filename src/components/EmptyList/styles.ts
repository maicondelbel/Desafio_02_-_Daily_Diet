import styled from 'styled-components/native'

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`

export const EmptyText = styled.Text`
  font-size: ${(props) => props.theme.FONT_SIZE.BODY_XS};
  color: ${(props) => props.theme.COLORS.GRAY_300};
`
