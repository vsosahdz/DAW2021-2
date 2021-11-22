import React, {useState} from 'react';

function FormularioCarta(props){
    //Inicialización (constructor)
    const [state,setState] = useState({
        mazo:"Corazones",
        descripcion:'',
        valor:''
    })

    //render
    console.log(state)
    return(
        <div className="card">
                <form className="card-body" onSubmit={(e)=>e.preventDefault()}>
                    <select onChange={(e)=>setState({...state,mazo:e.target.value})} name="mazo" className="form-control">
                        <option>Corazones</option>
                        <option>Diamantes</option>
                        <option>Tréboles</option>
                        <option>Espadas</option>
                    </select>
                    <input type="text" onChange={(e)=>setState({...state,descripcion:e.target.value})} name="descripcion" className="form-control"/>
                    <input type="text" onChange={(e)=>setState({...state,valor:e.target.value})} name="valor" className="form-control"/>
                    <button type="submit" className="btn btn-primary">Pedir carta</button>
                </form> 
            </div>
    )

}   

export default FormularioCarta