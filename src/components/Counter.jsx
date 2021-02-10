import React, { Component } from 'react'
import './Style.css'
 class Counter extends Component {
  constructor(props){
   super(props)
   this.state = {
    count: 0,
    bgColor:""
   }
  }
  incrementCount = ()=>{
    this.setState({
     count:this.state.count +1
    })
    if(count>=1){
     bgColor="green"
    }
  }

  decrementCount = ()=>{
   this.setState({
    count:this.state.count -1
   })
   if(count<=-1){
    bgColor="red"
   }
  }

  resetCount = ()=>{
   this.setState({
    count:0
   })
  }
  
  
  render() {
  
    return (
      <div>
   <main>
          <div class="container">
           <h3 class="counter">
            react counter application
           </h3>
           <span id="value">{this.state.count}</span>
           <div class="button-container">
           
            <button onClick ={this.decrementCount} class="btn decrease">decrease</button>
            <button onClick ={this.resetCount} class="btn reset">reset</button>
            <button onClick ={this.incrementCount} class="btn increase">increase</button>
           </div>
          </div>
 </main>
 <footer>
  <p>
   &copy;2021 Samwel Mchomvu From NOTTECH Lab
  </p>
 </footer>
      </div>
    )
  }
}

export default Counter
