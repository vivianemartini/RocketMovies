import { Fragment } from 'react'
import { Container, Form, Background } from './styles'

import { FiMail, FiLock, FiUser } from 'react-icons/fi'
import { FaArrowLeft } from 'react-icons/fa6'
import { Input } from '../../components/Input'
import { LuPopcorn } from 'react-icons/lu'

import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'

export function SignUp() {
  return (
    <Fragment>
      <Container>
        <Form>
          <h1>RocketMovies</h1>
          <div className='sub-title'>
            <p>Seu diário de cinema</p>
            <LuPopcorn />
          </div>

          <h2>Crie sua conta</h2>

          <Input placeholder='Nome' type='text' icon={FiUser} />

          <Input placeholder='E-mail' type='text' icon={FiMail} />

          <Input placeholder='Senha' type='password' icon={FiLock} />

          <Button title='Entrar' />

          <Link to='/'>
            <FaArrowLeft />
            Voltar para o login
          </Link>
        </Form>

        <Background />
      </Container>
    </Fragment>
  )
}
