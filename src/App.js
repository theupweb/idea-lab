import './App.css';
import Nav from './Components/Home/Nav';

/*
 * Comment below import if you just want to contribute on frontend, and you don't want to create account on supabase.io
*/
import * as auth from './supabase/auth';

function App() {

  /*
   * Comment below 3 functions if you just want to contribute on frontend, and you don't want to create account on supabase.io
  */
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
        {
          /*
           * Comment below 3 buttons if you just want to contribute on frontend, and you don't want to create account on supabase.io
          */
        }
        <button onClick={handleSignInWithGitHub}>SignIn with GitHub</button><br/>
        <button onClick={handleSignInWithGoogle}>SignIn with Google</button><br/>
        <button onClick={handleSignOut}>SignOut</button>
      </div>
    </div>
  );
}

export default App;
