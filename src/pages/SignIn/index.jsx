import { Fragment } from 'react'
import { Container, Form, Background } from './styles'

import { FiMail, FiLock } from 'react-icons/fi'
import { Input } from '../../components/Input'

import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'

export function SignIn() {
  return (
    <Fragment>
      <Container>
        <Form>
          <h1>RocketMovies</h1>
          <p>Seu diário de cinema</p>

          <h2>Faça seu login</h2>

          <Input placeholder='E-mail' type='text' icon={FiMail} />

          <Input placeholder='Senha' type='password' icon={FiLock} />

          <Button title='Entrar' />

          <Link to='/register'>Criar conta</Link>
        </Form>

        <Background />
      </Container>
    </Fragment>
  )
}
