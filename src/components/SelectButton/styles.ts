import styled, { css } from 'styled-components/native'

type ContainerProps = {
  isSelected: boolean | undefined
  variant: 'yes' | 'no'
}

const GREEN_ACTIVE = css`
  background-color: ${(props) => props.theme.COLORS.GREEN_LIGHT};
  border: 1px solid ${(props) => props.theme.COLORS.GREEN_DARK};
`

const GRAY_ACTIVE = css`
  background-color: ${(props) => props.theme.COLORS.GRAY_600};
  border: 1px solid ${(props) => props.theme.COLORS.GRAY_600};
`

const RED_ACTIVE = css`
  background-color: ${(props) => props.theme.COLORS.RED_LIGHT};
  border: 1px solid ${(props) => props.theme.COLORS.RED_DARK};
`

export const Container = styled.TouchableOpacity<ContainerProps>`
  ${(props) =>
    props.variant === 'yes' && props.isSelected
      ? GREEN_ACTIVE
      : GRAY_ACTIVE && props.variant === 'no' && props.isSelected
      ? RED_ACTIVE
      : GRAY_ACTIVE};
  flex-direction: row;
  gap: 8px;
  padding: 16px;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  margin-top: 8px;
`

export const Label = styled.Text``
