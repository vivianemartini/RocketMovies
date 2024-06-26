/* eslint-disable react/prop-types */
import { Container } from './Styles'

export function Button({ icon, title, ...rest }) {
  return (
    <Container type='button' {...rest}>
      {icon && <div>{icon}</div>}
      {title}
    </Container>
  )
}
