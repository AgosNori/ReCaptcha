import './App.css'
import ReCAPTCHA from "react-google-recaptcha";
function App() {
  function onChange(value) {
    console.log("Verificado");
  }
  return (
    <>
      <form className="form">
        <p className="heading">LOGIN</p>
        <input placeholder="Username" className="input" type="text" />
        <input placeholder="Password" className="input" type="password" />
        <div className="captcha">
          <ReCAPTCHA
            sitekey="6Lf6SAQqAAAAAB5dkDdWhBLY7TZiCCl_h1m6MjgF"
            onChange={onChange}
          />
        </div>
        <button className="btn">Submit</button>
      </form>

    </>
  )
}

export default App
