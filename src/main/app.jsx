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
        let data = {
            nome:'Janeiro/17',
            month:1,
            year:2017,
            credts:[
                {nome:'salario empresa', value:6700},
                {nome:'salario professor', value:2700},
            ],
            debts:[
                {nome:'conta de agua', value:80, status:'PAGO'},
                {nome:'conta de luz', value:70, status:'AGENDADO'},
            ]
        }
        db.find({nome:'Janeiro/17'}, (err, docs)=>{
            console.log(docs)
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