import { FC } from "react"
import { Wrapper } from "../../components"
import { SignUp as SignUpForm} from "../../components/forms/SignUp"
import "./styles.scss"

const SignUp: FC = () => {
    return (
        <Wrapper>
            <SignUpForm />
        </Wrapper>
    )
}

export { SignUp };