import React, {Component} from 'react'
import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.css'
import Header from '../templates/header'
import {db} from '../../database'
export default class App extends Component{
    
    constructor(props){
        super(props)
        this.janela = this.janela.bind(this)
    }
    
    janela(){
        db.find({}, (err, docs)=>{
            docs.map(v=>{
                console.log(v.credito)
            })
        })
    }
    
    render(){
        return (
            <div>
                <Header />
                <button className='btn btn-primary' onClick={()=>this.janela()}>
                    <i className='fa fa-google'></i>
                </button>
            </div>
        )
    }
}