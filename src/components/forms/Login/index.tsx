import { FC, FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom'
import { login } from './api';


const defaultValues = {
    email: "",
    password: ""
};

const Login: FC = () => {

    const [inputs, setInputs] = useState(defaultValues);

    const { push } = useHistory();


    const handleSubmit = async (e: FormEvent<HTMLElement>) => {
        e.preventDefault();

        try {
            const response = await login(inputs);
            localStorage.setItem("user", JSON.stringify(response));
            push("/");
        } catch (e) {
            console.log("error");
        }
    };

    return (
            <div className="login">
                <div className="login-form">
                    <h1>TodoApp</h1>
                    <h2>Acceder a tu cuenta</h2>
                    <form action="" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email">Email</label> <br />
                            <input 
                            id="email" 
                            type="email" 
                            name="email"
                            value={inputs.email} 
                            onChange={(e) => setInputs({...inputs, email: e.target.value}) }
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Contraseña</label> <br />
                            <input 
                            id="password" 
                            type="password" 
                            name="password" 
                            value={inputs.password}
                            onChange={(e) => setInputs({...inputs, password: e.target.value}) }
                            />
                        </div>
                        <button type="submit">Iniciar sesión</button>
                    </form>
                </div>
            </div>
    )
}

export { Login }