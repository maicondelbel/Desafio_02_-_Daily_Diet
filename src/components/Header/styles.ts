import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const AvatarContainer = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 9999px;
  overflow: hidden;
  border: 2px solid ${(props) => props.theme.COLORS.GRAY_200};
`
export const AvatarImg = styled.Image`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
