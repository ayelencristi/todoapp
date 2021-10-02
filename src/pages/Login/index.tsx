import './styles.scss'

const Login = () => {
    return (
        <div className="login">
            <div className="login-form">
                <h1>TodoApp</h1>
                <h2>Acceder a tu cuenta</h2>
                <form action="">
                    <div>
                        <label htmlFor="email">Email</label> <br />
                        <input id="email" type="text" name="email" />
                    </div>
                    <div>
                        <label htmlFor="password">Contraseña</label> <br />
                        <input id="password" type="text" name="password" />
                    </div>
                    <button type="submit">Iniciar sesión</button>
                </form>
            </div>
        </div>
    )
}

export { Login }