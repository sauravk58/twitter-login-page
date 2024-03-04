
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="logo-box">
      <img src="./twitter-logo.png" alt="logo" className="logo" />
      <h2>Sign In to Twitter</h2>
      <button>
        <img src="google.jpg" alt="logo"></img>
        Sign in with Google

      </button>
      <button>
        <img src="apple-logo.png" alt="logo"></img>
        Sign in with Apple
      </button>
      <hr></hr>
      <span>OR</span>
      <form>
        <input type="text" placeholder="Please enter the email or username"></input>
        <button >Next</button>
      </form>
      <button className="Fp">Forget Password</button>
      <p>Don't Have an account? <a href="#">Sign Up</a></p>
      </div>
    </div>
  );
}

export default App;
