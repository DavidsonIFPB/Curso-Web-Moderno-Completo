import React, { Component} from "react"

import './Calculator.css'
import Button from '../components/Button'
import Display from "../components/Display"

export default class Calculator extends Component {

    constructor(props){
        super(props)
        
        this.clearMemory = this.clearMemory.bind(this)
        this.addDigital = this.addDigital.bind(this)
        this.setOperation = this.setOperation.bind(this)

    }

    clearMemory(){
        console.log('limpar')
    }

    setOperation(operation){
        console.log(operation)
    }
    
    addDigital(n){
        console.log(n)
    }
    render(){
        return (
            <div className="Calculator">
                <Display value="0"/>
                <Button label="AC" click ={this.clearMemory} triple/>
                <Button label="/" click={this.setOperation} operation/>
                <Button label="7" click={this.addDigital}/>
                <Button label="8" click={this.addDigital}/>
                <Button label="9" click={this.addDigital}/>
                <Button label="*" click={this.setOperation} operation/>
                <Button label="4" click={this.addDigital}/>
                <Button label="5" click={this.addDigital}/>
                <Button label="6" click={this.addDigital}/>
                <Button label="-" click={this.setOperation} operation/>
                <Button label="1" click={this.addDigital}/>
                <Button label="2" click={this.addDigital}/>
                <Button label="3" click={this.addDigital}/>
                <Button label="+" click={this.setOperation} operation/>
                <Button label="0" click={this.addDigital} double/>
                <Button label="." click={this.addDigital}/>
                <Button label="=" click={this.setOperation} operation/>
            </div>
        )
    }
}