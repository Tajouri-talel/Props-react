import './App.css';
import Profile from './component/Profile/Profile';
import TheMe from './TheMe.jpg';


const App = () => {
  const hundleName =(x)=> {
    alert(`profile for:${x}`)
  }
  return (
          <div style={{textAlign: "center", backgroundColor: "pink", position:"relative", display:"block", border: "2px solid black", borderRadius: "20px"}}>
     <Profile  bio="Now, I am studying Full Stack Developpement" profession="Futur developer" hundleName={hundleName}  >
       <img src={TheMe} alt='my photo' />
      </Profile>
 </div>
  )
}

export default App
