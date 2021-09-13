import React from 'react';

class DigitalClicker extends React.Component {
    
    state = {
        timesClicked: 0
    }

    incrementTime =() =>{
        this.setState((prevState) => {
           return {
               timesClicked: prevState.timesClicked + 1
            }
        })
    }

    render(){
        return(
            <div>
                <button onClick={this.incrementTime}>{this.state.timesClicked}</button>
            </div>
        )
    }
}

export default DigitalClicker;