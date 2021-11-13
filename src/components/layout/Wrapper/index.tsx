import { FC } from "react"
import { Footer, Header, Main } from ".."

type Props = {
    id?: string,
    hideHeader?: boolean,
    hideFooter?: boolean
};

const Wrapper: FC<Props> = ({children, hideHeader, hideFooter}) => {
    return (
        <>
            { !hideHeader && <Header /> }

            <Main>
                { children }
            </Main>

            { !hideFooter && <Footer /> }
        </>
    )
}

export { Wrapper }