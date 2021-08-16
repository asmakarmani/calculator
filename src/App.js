import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      currentNumber: "0",
      operatorFlag:false,
      decimalFlag:false
    }
  }
  
  handleClick = (buttonName) => {
    let currentNumber = this.state.currentNumber
    let operatorFlag = this.state.operatorFlag
    switch(true){
        case buttonName === "0" ||
             buttonName === "1" ||
             buttonName === "2" ||
             buttonName === "3" ||
             buttonName === "4" ||
             buttonName === "5" ||
             buttonName === "6" ||
             buttonName === "7" ||
             buttonName === "8" ||
             buttonName === "9" :
        if(this.state.currentNumber!=="0"){
        currentNumber += buttonName
        operatorFlag = false
        }else{
        currentNumber = buttonName
        }
        break
        case buttonName === "+" ||
             buttonName === "-" ||
             buttonName === "*" ||
             buttonName === "/" :
        if(!this.state.operatorFlag){
          currentNumber += buttonName
          operatorFlag = true
          this.setState({decimalFlag:false})
        }else{
          const newNumber = currentNumber.slice(0,currentNumber.length-1)
          currentNumber = newNumber
          currentNumber += buttonName
        }
        break
        case buttonName === "C":
          currentNumber = "0"
          operatorFlag = false
          this.setState({decimalFlag:false})
        break
        case buttonName === "=":
          currentNumber = eval(currentNumber)
          operatorFlag = false
          this.setState({decimalFlag:true})
        break
        case buttonName === ".":
          if(!this.state.decimalFlag){
            currentNumber += "."
            this.setState({decimalFlag:true})
          }
    }
    this.setState({operatorFlag})
    this.setState({currentNumber})
  } 
  
  render(){
    return(
     <div>
        <div className="App">
        <Screen id="display" currentNumber={this.state.currentNumber} />
        <div className="btn-calculator">
        <Button id="zero" className="calc-btn" name="0" handleClick={this.handleClick} />
        <Button id="one" className="calc-btn" name="1" handleClick={this.handleClick} />
        <Button id="two" className="calc-btn" name="2" handleClick={this.handleClick} />
        <Button id="three" className="calc-btn" name="3" handleClick={this.handleClick} />
        <Button id="four" className="calc-btn" name="4" handleClick={this.handleClick} />
        <Button id="five" className="calc-btn" name="5" handleClick={this.handleClick} />
        <Button id="six" className="calc-btn" name="6" handleClick={this.handleClick} />
        <Button id="seven" className="calc-btn" name="7" handleClick={this.handleClick} />
        <Button id="eight" className="calc-btn" name="8" handleClick={this.handleClick} />
        <Button id="nine" className="calc-btn" name="9" handleClick={this.handleClick} />
        <Button id="clear" className="calc-btn" name="C" handleClick={this.handleClick} />
        <Button id="equals" className="calc-btn" name="=" handleClick={this.handleClick} />
        <Button id="decimal" className="calc-btn" name="." handleClick={this.handleClick} />
        <Button id="add" className="calc-btn" name="+" handleClick={this.handleClick} />
        <Button id="subtract"className="calc-btn"  name="-" handleClick={this.handleClick} />
        <Button id="multiply" className="calc-btn" name="*" handleClick={this.handleClick} />
        <Button id="divide" className="calc-btn" name="/" handleClick={this.handleClick} />
        </div>
        </div>
     </div>
    );
  }
}

class Screen extends React.Component{
  render(){
    return(
    <div id={this.props.id}>
        {this.props.currentNumber}
    </div>
    )
  }
}

class Button extends React.Component{
  runParentHandleClick = () => {
    this.props.handleClick(this.props.name)
  }
  render(){
    return(
    <button id={this.props.id} onClick={this.runParentHandleClick} className="button">{this.props.name}</button>
    )
  }
}


export default App;
