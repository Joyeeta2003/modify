import FormGroup from "../components/FormGroup"
import "../style/register.scss"
import {Link} from 'react-router'

const Register = () => {
  return (
        <main className="register-page">
        <div className="form-container">
            <h1>Register</h1>
            <form>
                <FormGroup label="Name" placeholder="Enter your name"></FormGroup>
                <FormGroup label="Email" placeholder="Enter your email"></FormGroup>
                <FormGroup label="Password" placeholder="Enter your password"></FormGroup>
                <button type="submit" className="button">Register</button>
            </form>
            <p>Already have an account? <Link to="/login">Login Here</Link></p>
        </div>
    </main>
  )
}

export default Register