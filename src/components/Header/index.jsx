import { Container, Logo, Profile } from './styles'

export function Header() {
    return (
        <Container>
            <Logo>
                <h1>RocketMovies</h1>
            </Logo>
            <Profile>
            <div>
                    <strong>Viviane Martini</strong>
                    <span>sair</span>
                </div>

                <img src="https://github.com/vivianemartini.png" alt="Foto de perfil" />
            </Profile>
        </Container>
    )
}
