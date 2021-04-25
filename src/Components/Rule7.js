import React from "react";
import pic7 from './pic7.png'
import pic71 from './pic71.png'

class Rule7 extends React.Component{
    constructor(props){
        super(props);
    }

    changeColor = (n) => {
        let k = document.getElementById("h");
        if(n <= 1.5){
            k.style.color = "Lightgreen"
        }
        else{
            k.style.color = "red"
        }
    }

    componentDidMount(){
        var company = this.props.props;
        var capitalization = company.price * company.shares;
        var ratio = capitalization / company.bookValue;
        this.changeColor(ratio);
    }

    render(){
        var company = this.props.props;
        console.log("Date companie rule 7 ")
        console.log(company)

        var passed;
        var capitalization = company.price * company.shares;
        var ratio = capitalization / company.bookValue;
        console.log("Capitalizare totala = " + capitalization);

        Number.isNaN(ratio) ? ratio = Infinity : ratio = ratio
        ratio > 1.5 ? passed = 0 : passed = 1;

        return(
            <div className="menu">
                <h1 id="h">Regula 7</h1>
                <span>
                    <strong>{passed == 1 
                    ? `Pretul actiunilor nu este prea mare. Compania nu pare sa fie supraevaluata.` 
                    : `Pretul actiunilor este foarte mare. Compania este supraevaluata.` 
                    }</strong>
                </span>

                {passed == 1
                    ? <div>
                        <br /><br /><br />
                        <strong style={{color: "Lightgreen"}}>Regula 7 este respectata.</strong><br />
                        <span style={{fontStyle: 'italic'}}>Regula 7 se refera la pretul la care achizitionam actiunile (raportat la active).</span><br/><br/>
                        <span style={{fontStyle: 'italic'}}>Descriere: Pretul total al actiunilor (capitalizarea) nu trebuie sa fie mai mare de 1,5 ori fata valoarea contabila a companiei.</span>
                        <h2>Capitalizarea / Valoarea contabila &lt; 1,5</h2>
                        <h2>{ratio.toFixed(2)} &lt; 1,5</h2>
                        <img style={{height: "250px", width: "250px"}}
                        src={pic71} alt="new" />
                        <p style={{textAlign: 'left'}}>&nbsp;&nbsp;&nbsp;&nbsp;Aceasta statistica indica valoarea tangibila, contabila primita in schimbul pretului platit si arata dacă valoarea actiunilor este supraevaluata sau subevaluata prin compararea prețului de piață actual al companiei cu valoarea sa contabilă. Benjamin Graham recomandă un raport de cel mult 1,5.
                        <br/>&nbsp;&nbsp;&nbsp;&nbsp;Selectand companii suficient de mari, asiguri portfoliului tau stabilitate si predictibilitate.</p>
                    </div>
                    : <div>
                        <br/><br/><br/>
                        <strong style={{color: "red"}}>Regula 7 nu este respectata.</strong><br />
                        <span style={{fontStyle: 'italic'}}>Regula 7 se refera la pretul la care achizitionam actiunile (raportat la active).</span><br/><br/>
                        <span style={{fontStyle: 'italic'}}>Descriere: Pretul total al actiunilor (capitalizarea) nu trebuie sa fie mai mare de 1,5 ori fata valoarea contabila a companiei.</span>
                        <h2>Capitalizarea / Valoarea contabila &gt; 1,5</h2>
                        <h2>{ratio.toFixed(2)} &gt; 1,5</h2>
                        <img style={{height: "255px", width: "425px"}}
                        src={pic7} alt="new" />
                        <p style={{textAlign: 'left'}}>&nbsp;&nbsp;&nbsp;&nbsp;Aceasta statistica indica valoarea tangibila, contabila primita in schimbul pretului platit si arata dacă valoarea actiunilor este supraevaluata sau subevaluata prin compararea prețului de piață actual al companiei cu valoarea sa contabilă. Benjamin Graham recomandă un raport de cel mult 1,5.
                        <br/>&nbsp;&nbsp;&nbsp;&nbsp;Selectand companii suficient de mari, asiguri portfoliului tau stabilitate si predictibilitate.</p>
                    </div>}

                <button onClick={this.props.onChange}>Back</button>
            </div>
        );
    }
}

export default Rule7;