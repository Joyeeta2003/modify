import "../style/login.scss"
import FormGroup from "../components/FormGroup"

const Login = () => {
  return (
    <main className="login-page">
        <div className="form-container">
            <h1>Login</h1>
            <form>
                <FormGroup label="Email" placeholder="Enter your email"></FormGroup>
                <FormGroup label="Password" placeholder="Enter your password"></FormGroup>
                <button type="submit" className="button">Login</button>
            </form>
        </div>
    </main>
  )
}

export default Login