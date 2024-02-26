import { Container, Logo, Profile, Form } from './styles'
import { InputLarger } from '../InputLarger'

export function Header() {
  return (
    <Container>
      <Logo>
        <h1>RocketMovies</h1>
      </Logo>

      <Form>
        <InputLarger placeholder='Pesquisar pelo título' type='text' />
      </Form>

      <Profile>
        <div>
          <strong>Viviane Martini</strong>
          <span>sair</span>
        </div>

        <img src='https://github.com/vivianemartini.png' alt='Foto de perfil' />
      </Profile>
    </Container>
  )
}
