import { FC } from "react";
import { Wrapper } from "../../components";
import { Login as LoginForm } from "../../components/forms/Login";
import "./styles.scss"

const Login: FC = () => {
    return (
        <Wrapper hideHeader hideFooter>
            <LoginForm />;
        </Wrapper>
    )
};

export { Login };