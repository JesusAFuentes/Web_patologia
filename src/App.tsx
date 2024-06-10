import './App.css'
import microscopio from './images/microscopio.png'
function Login() {

  return (
    <>
      <div className="container">
        <div className="logo">
          <img src={microscopio} alt="Microscopio" className="microscopio" />
          <label className="patologia">Patologia Guillermo Patiño</label>
        </div>
        <div className="div-login">
          <div className="input-group">
            <label htmlFor="email">Username</label>
            <input id="email" placeholder="Username" required type="email" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="********" name="password" id="password" />
          </div>
          <div className="inicio">
            <button>Iniciar Sesion</button>
            <a href="#">Forgot password?</a>

          </div>
        </div>
      </div>
    </>
  )
}

export default Login
