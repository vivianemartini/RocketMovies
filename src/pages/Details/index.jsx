import { Fragment } from 'react';
import {Container} from "./styles";

import { Button } from '../../components/Button';

export function Details(){
    return(
       <Fragment>
            <Container>
                <Button title='Entrar' />
            </Container>
       </Fragment>
    )
}