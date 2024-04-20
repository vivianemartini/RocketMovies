import { Fragment } from 'react'
import { Container } from './styles'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { FiArrowLeft } from 'react-icons/fi'
import { Textarea } from '../../components/Textarea'
import { Section } from '../../components/Section'
import { NewNote } from '../../components/NewNote'
import { Link } from 'react-router-dom'

export function CreateMovie() {
  return (
    <Fragment>
      <Header />
      <Container>
        <div className='comeback'>
          <Link to='/'>
            <FiArrowLeft />
            <span> Voltar</span>
          </Link>
        </div>

        <div className='movie-info'>
          <h1>Novo Filme</h1>
        </div>

        <div className='grade'>
          <Input placeholder='Título' type='text' />
          <Input placeholder='Sua nota (de 0 a 5)' type='text' />
        </div>

        <Textarea />

        <Section title='Marcadores'>
          <div className='tag-component'>
            <NewNote value='Drama' />
            <NewNote isNew value='Novo marcador' />
          </div>
        </Section>

        <div className='button-area'>
          <ButtonText title='Excluir Filme' />
          <Button title='Salvar alterações' />
        </div>
      </Container>
    </Fragment>
  )
}
