import React, {Component} from 'react'

import 'modules/materialize-css/dist/css/materialize.min.css'
import 'modules/font-awesome/css/font-awesome.css'
import 'modules/jquery/dist/jquery'

import Header from '../templates/header'
import Routes from '../main/routes'

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
                <Routes/>
        )
    }
}