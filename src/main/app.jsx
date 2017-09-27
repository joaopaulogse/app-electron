import React, {Component} from 'react'
export default class App extends Component{
    
    constructor(props){
        super(props)
        this.janela = this.janela.bind(this)
    }
    
    janela(){
        console.log("clicked")
    }
    
    render(){
        return (
            <div>
                <button onClick={()=>this.janela()}>Botao</button>
            </div>
        )
    }
}