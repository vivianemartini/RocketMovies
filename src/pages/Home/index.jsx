import { Fragment } from 'react'
import { Container } from './styles'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { FiPlus } from 'react-icons/fi'

import { Link } from 'react-router-dom'
import { Preview } from '../../components/Preview'

export function Home() {
  return (
    <Fragment>
      <Header />
      <Container>
        <main>
          <div className='heading'>
            <h1>Meus filmes</h1>
            <Link className='link-btn'>
              <Button icon={<FiPlus />} title='Adicionar filme' />
            </Link>
          </div>

          <Preview />
        </main>
      </Container>
    </Fragment>
  )
}
