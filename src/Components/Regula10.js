import React from "react";

class Rule10 extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        console.log(this.props.props)
        return(
            <div className="menu">
                <h1>Regula 10</h1>
                <button onClick={this.props.onChange}>Back</button>
            </div>
        );
    }
}

export default Rule10;