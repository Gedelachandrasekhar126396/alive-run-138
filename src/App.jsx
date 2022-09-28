import NavBar from './components/NavBar';
import './App.css';
import Footer from './components/Footer';
import SignUpPage from './Pages/SignUp';
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap" rel="stylesheet"></link>

function App() {
  return (
    <div className='app' >
<NavBar/>
<SignUpPage/>
<Footer/>
      
    </div>
  );
}

export default App;
