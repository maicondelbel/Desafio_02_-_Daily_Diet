import styled from 'styled-components/native'

export const Container = styled.TextInput`
  padding: 14px;
  border: 1px solid ${(props) => props.theme.COLORS.GRAY_500};
  margin-top: 4px;
  border-radius: 6px;
  width: 100%;
  color: ${(props) => props.theme.COLORS.GRAY_200};
  font-size: ${(props) => props.theme.FONT_SIZE.BODY_M};
`
