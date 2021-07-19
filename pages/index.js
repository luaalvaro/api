import { useContext } from "react"
import { AuthContext } from "../providers/Auth"

export default function Home() {

    const { user, setUser } = useContext(AuthContext)

    console.log(user)

    return (
        <>
            <p>Seu nome é: {user.name}</p>
            <p>
                <input placeholder="digite seu nome" onChange={(event) => { setUser({ name: event.target.value }) }} />
            </p>
        </>
    )
}