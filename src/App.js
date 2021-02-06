import './App.css';
import Nav from './Components/Home/Nav';
import * as auth from './supabase/auth';

function App() {

  function handleSignInWithGitHub() {
    auth.signInWithGithub();
  }

  function handleSignInWithGoogle() {
    auth.signInWithGoogle();
  }

  function handleSignOut() {
    auth.signOut();
  }

  return (
    <div className="App">
      <Nav/>
      <div>
        <button onClick={handleSignInWithGitHub}>SignIn with GitHub</button><br/>
        <button onClick={handleSignInWithGoogle}>SignIn with Google</button><br/>
        <button onClick={handleSignOut}>SignOut</button>
      </div>
    </div>
  );
}

export default App;
