import React from "react";
import Form from "./Form";
import Principii from "./Principii";

class FirstPage extends React.Component{
    constructor(){
        super();
        this.state = {
            x : 0
        }

        this.goToPrincipii = () => {
            this.setState({ x: 2 });
        }

        this.goToForm = () => {
            this.setState({ x: 1 });
        }

        this.back = () => {
            this.setState({ x: 0 });
        }
    }

    render(){
        if (this.state.x === 0) {
        return(
            <div className="menu">
                <h1 style={{color: "white", fontSize:"55px"}}>INVESTITORUL INTELIGENT</h1>

                <p style={{fontSize:"20px"}}>
                    FUNDAMENTELE INVESTITIEI BAZATE PE VALOARE
                </p>

                <span style={{fontSize:"17px", marginTop:"35px", marginBottom:"45px"}}><i>“You don't need to be a rocket scientist. 
                    Investing is not a game where the guy with the 160 IQ beats the guy with 130 IQ.”</i> -Warren Buffet
                </span>
                
                <button style={{marginTop:"40px"}} onClick={this.goToPrincipii}>Principii fundamentale</button>
                <button style={{marginTop:"40px"}} onClick={this.goToForm}>Analizeaza compania</button>

                <p className="zeroMargin" style={{textAlign:"left", fontSize:"15px", color: "black"}}><i>Madalin Sirbu<br/>licenta v3.0</i></p>
                <span style={{fontSize:"15px", marginTop:"35px"}}>
                    Analizeaza companiile folosind
                    criteriile formulate de Benjamin Graham si fii un investitor inteligent!
                </span>
            </div>
        );
        }
        else if (this.state.x === 1){
            return(
                (<Form onChange={this.back}/>)
            )
        }
        else {
            return(
                (<Principii onChange={this.back}/>)
            )
        }
    }
}

export default FirstPage;