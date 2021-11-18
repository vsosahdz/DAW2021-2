import React from 'react';
import {Routes,Route,Link,Outlet} from 'react-router-dom';

function Encabezado(){
  return(
    <header>
      <nav className="nav">
        <span className="nav-link"><Link to="/">Home</Link></span>
        <span className="nav-link"><Link to="/puntajes">Puntajes</Link></span>        
      </nav>      
    </header>
  )
}

function Menu(){
  return(
    <div>
      <nav className="nav">
        <span className="nav-link"><Link to="/">Home</Link></span>
        <span className="nav-link"><Link to="/juego">Juego</Link></span>        
        <span className="nav-link"><Link to="/about">About</Link></span>        
      </nav>
      <Outlet/>       
    </div>
  )
}

function Puntajes(){
  return(
    <div>
      Puntajes del juego
    </div>
  )
}

function Error404(){
  return(
    <div>
      <h1>404 (Not found)</h1>
      <Link to="/">Ir al Home</Link>
    </div>
  )
}

function Home(){
  return(
    <div>
      <h1>Home</h1>
    </div>
  )
}

function About(){
  return(
    <div>
      <h1>About</h1>
    </div>
  )
}



class Juego extends React.Component{
  constructor(){
    super()
    this.state={
      info:null
    }
  }

  componentDidMount(){
    fetch('http://localhost:8080/cartas')
      .then(res=>res.json())
        .then(datos=>{
          //console.log(datos)
          this.setState({
            info:datos
          })
        })
        .catch(err=>{
          console.log("Servidor desconectado")
          console.log(err)
        })
  }

  async comunica(info){
    //Consumiendo el servicio POST  
    const respuesta = await fetch('http://localhost:8080/carta',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          mensaje:"Enviando JSON"
        })
      })
    
      //Imprimir lo que responde el servidor
      const data = await respuesta.json()
      console.log(data)
  }

  render(){
    console.log(this.state)
    return(
      <div>
        <h1>Juego</h1>
       <button type="button" onClick={this.comunica.bind(this,"hola")} className="btn btn-primary">Consume POST</button>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
        <h1>Ejemplo usando react-router-dom</h1>
        <Encabezado/>
        <Routes>
            <Route path="/" element={<Menu/>}>
              <Route index element={<Home/>}/>
              <Route path="juego" element={<Juego/>}/>
              <Route path="about" element={<About/>}/>
            </Route>
            <Route path="/puntajes" element={<Puntajes/>}/>
            <Route path="*" element={<Error404/>}/>
        </Routes>
    </div>
  );
}


export default App;
