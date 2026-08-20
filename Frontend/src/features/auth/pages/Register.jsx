import FormGroup from "../components/FormGroup"
import "../style/register.scss"
import { Link } from 'react-router'
import  {useAuth} from "../hooks/useAuth"
import { useState } from "react"
import { useNavigate } from "react-router"

const Register = () => {
    const {loading, handleRegister} = useAuth()
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault();
        await handleRegister({ username, email, password })
        navigate("/")
    }

    return (
        <main className="register-page">
            <div className="form-container">
                <h1>Register</h1>
                <form onSubmit={handleSubmit}>
                    <FormGroup
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        label="Name"
                        placeholder="Enter your name"
                    >
                    </FormGroup>

                    <FormGroup
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        label="Email"
                        placeholder="Enter your email"
                    >
                    </FormGroup>

                    <FormGroup
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        label="Password"
                        placeholder="Enter your password"
                    >
                    </FormGroup>
                    
                    <button type="submit" className="button">Register</button>
                </form>
                <p>Already have an account? <Link to="/login">Login Here</Link></p>
            </div>
        </main>
    )
}

export default Register