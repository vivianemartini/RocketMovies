import { Fragment } from 'react';
import {Container, Form, Background } from "./styles";

import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Input } from '../../components/Input';

import { Button } from '../../components/Button';

export function SignUp(){
    return(
       <Fragment>
            <Container>
                <Form>
                    <h1>RocketMovies</h1>
                    <p>Aplicação para acompanhar tudo que assistir.</p>
      

                <h2>Crie sua conta</h2>

                <Input 
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                />

                <Input 
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                />

                <Input 
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                />

                <Button title='Entrar' />

                <a href="#">Criar conta</a>
                </Form>

                <Background />
            </Container>
       </Fragment>
    )
}