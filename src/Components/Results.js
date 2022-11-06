import React from "react";
import Rule1 from "./Rule1";
import Rule2 from "./Rule2";
import Rule3 from "./Rule3";
import Rule4 from "./Rule4";
import Rule5 from "./Rule5";
import Rule6 from "./Rule6";
import Rule7 from "./Rule7";
import Rule10 from "./Regula10";


import {BrowserRouter as Router, Link} from "react-router-dom";


class Results extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            rule: 0
        }

        this.back = () => {
            this.setState({ rule: 0 }, () => {
                // console.log(this.state.rule, ' <- clicked on back');
            });
        }

        this.changeRule = (evt) => {
            this.setState({ rule: evt.target.value }, () => {
                // console.log(this.state.rule, ' <- clicked on rule');
            }); 
        }

        this.changeColor=(n)=>{
            //(this).css('background', 'red');
            let k = document.getElementById(n);
            console.log("functie" + k);
            // //  k.style.backgroundColor = "red"
        }
    }

    componentDidMount() {
        var company = this.props.props;
        console.log("Date companie analizate ")
        console.log(company)
      }
    
    render(){
        var company = this.props.props;
        var myColor="transparent";

        if (this.state.rule === 0)
        return (
            <div className="menu">
                <button className="button2" value='1'  onClick={this.changeRule}> Rule 1 </button>
                <button className="button2" value='2'  onClick={this.changeRule}> Rule 2 </button>
                <button className="button2" value='3'  onClick={this.changeRule}> Rule 3 </button>
                <button className="button2" value='4'  onClick={this.changeRule}> Rule 4 </button>
                <button className="button2" value='5'  onClick={this.changeRule}> Rule 5 </button>
                <button className="button2" value='6'  onClick={this.changeRule}> Rule 6 </button>
                <button className="button2" value='7'  onClick={this.changeRule}> Rule 7 </button>
                <button style={{marginTop:"20px"}} onClick={this.props.onChange}>Back</button>
            </div>
        )
        else if(this.state.rule == 1)return(
            <div>
                <Rule1 props={company} onChange={this.back}></Rule1>
            </div>
        )
        else if(this.state.rule == 2)return(
            <div>
                <Rule2 props={company} onChange={this.back}></Rule2>
            </div>
        )
        else if(this.state.rule == 3)return(
            <div>
                <Rule3 props={company} onChange={this.back}></Rule3>
            </div>
        )
        else if(this.state.rule == 4)return(
            <div>
                <Rule4 props={company} onChange={this.back}></Rule4>
            </div>
        )
        else if(this.state.rule == 5)return(
            <div>
                <Rule5 props={company} onChange={this.back}></Rule5>
            </div>
        )
        else if(this.state.rule == 6)return(
            <div>
                <Rule6 props={company} onChange={this.back}></Rule6>
            </div>
        )
        else if(this.state.rule == 7)return(
            <div>
                <Rule7 props={company} onChange={this.back}></Rule7>
            </div>
        )
        else return(
            <div>
                <Rule10 props={company} onChange={this.back}></Rule10>
            </div>
        )
        
        // if(this.state.rule === 1){
        //     {console.log(this.state.rule, ' <- clicked on something')}
        //     return <Rule onChange={this.back}></Rule>;
        // }
    }
}

export default Results;