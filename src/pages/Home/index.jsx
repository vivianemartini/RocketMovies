import { Fragment } from 'react';
import {Container} from "./styles";

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';

/* import { FiPlus } from 'react-icons/ri' */

export function Home(){
    return(
       <Fragment>
            <Container>
                <Button title='Adicionar filme'>
                 
                </Button>
                <Header/>
            </Container>
       </Fragment>
    )
}