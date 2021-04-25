import React from "react";
import pic5 from './pic5.png'

class Rule5 extends React.Component{
    constructor(props){
        super(props);
    }

    changeColor = (n) => {
        let k = document.getElementById("h");
        if(n >= 1.33){
            k.style.color = "Lightgreen"
        }
        else{
            k.style.color = "red"
        }
    }

    componentDidMount(){
        var company = this.props.props;
        var medie1 = (parseInt(company.eps[0]) + parseInt(company.eps[1]) + parseInt(company.eps[2]))/3;
        var medie2 = (parseFloat(company.eps[7]) + parseFloat(company.eps[8]) + parseFloat(company.eps[9]))/3;
        var growth = medie1 / medie2;
        this.changeColor(growth);
    }

    render(){
        var company = this.props.props;
        console.log("Date companie rule 5 ");
        console.log(company);

        var passed = 1;
        var medie1 = (parseFloat(company.eps[0]) + parseFloat(company.eps[1]) + parseFloat(company.eps[2]))/3;
        var medie2 = (parseFloat(company.eps[7]) + parseFloat(company.eps[8]) + parseFloat(company.eps[9]))/3;
        var growth = medie1 / medie2;
        growth > 1.33 ? passed = 1 : passed = 0;
        Number.isNaN(growth) ? growth = 0 : growth = growth
        console.log("Rule 5 passed:" + passed + "growth is = " + growth);
        
        console.log(medie1);
        console.log(medie2);
        console.log(growth);

        return(
            <div className="menu">
                <h1 id="h">Regula 5</h1>
                
                <span>
                    <strong>{growth >= 1.33
                    ? `Profiturile au crescut suficient` 
                    : `Profiturile nu au crescut suficient.` 
                    }</strong>
                </span>

                {growth >= 1.33
                    ? <div>
                        <br /><br /><br />
                        <strong style={{color: "Lightgreen"}}>Regula 5 este respectata.</strong><br />
                        <span style={{fontStyle: 'italic'}}>Regula 5 se refera la cresterea profiturilor in ultimii 10 ani.</span><br/><br/>
                        <span style={{fontStyle: 'italic'}}>Descriere: Profiturile companiei trebuie sa fi crescut cu cel putin o treime de la inceputul perioadei analizate.</span>
                        <h2>Cresterea profiturilor &gt; 1.33</h2>
                        <h2>{growth.toFixed(2)} &gt; 1.33</h2>
                        <img style={{height: "255px", width: "425px"}}
                        src={pic5} alt="new" />
                        <p style={{textAlign: 'left'}}>&nbsp;&nbsp;&nbsp;&nbsp;Câștigurile pe acțiune (EPS – Earnings per Share) indică profitabilitatea companiei. Creșterea câștigurilor pe acțiune indică rata la care compania și-a crescut profitabilitatea.
                        <br/>&nbsp;&nbsp;&nbsp;&nbsp;In investitiile bazate pe valoare, este foarte important sa luam in calcul cresterea profiturilor de-a lungul timpului. Este recomandat ca media profiturilor din ultimii 3 ani sa fi crescut cu cel putin o treime fata de media profiturilor din primii 3 ani ai perioadei analizate.
                        <br/>&nbsp;&nbsp;&nbsp;&nbsp;Ne intereseaza sa investim in companii care devin din ce in ce mai profitabile. Fara sa incercam sa prezicem viitorul, folosind aceasta regula, ne putem asigura ca cel putin, compania se afla pe drumul cel bun in directia cresterii profitabilitatii.
                        </p>
                    </div>
                    : <div>
                        <br/><br/><br/>
                        <strong style={{color: "red"}}>Regula 5 nu este respectata.</strong><br/>
                        <span style={{fontStyle: 'italic'}}>Regula 5 se refera la cresterea profiturilor in ultimii 10 ani.</span><br/><br/>
                        <span style={{fontStyle: 'italic'}}>Descriere: Profiturile companiei trebuie sa fi crescut cu cel putin o treime de la inceputul perioadei analizate.</span>
                        <h2>Cresterea profiturilor &lt; 1.33</h2>
                        <h2>{growth.toFixed(2)} &lt; 1.33</h2>
                        <img style={{height: "270px", width: "426px"}}
                        src={pic5} alt="new" />
                        <p style={{textAlign: 'left'}}>&nbsp;&nbsp;&nbsp;&nbsp;Câștigurile pe acțiune (EPS – Earnings per Share) indică profitabilitatea companiei. Creșterea câștigurilor pe acțiune indică rata la care compania și-a crescut profitabilitatea.
                        <br/>&nbsp;&nbsp;&nbsp;&nbsp;In investitiile bazate pe valoare, este foarte important sa luam in calcul cresterea profiturilor de-a lungul timpului. Este recomandat ca media profiturilor din ultimii 3 ani sa fi crescut cu cel putin o treime fata de media profiturilor din primii 3 ani ai perioadei analizate.
                        <br/>&nbsp;&nbsp;&nbsp;&nbsp;Ne intereseaza sa investim in companii care devin din ce in ce mai profitabile. Fara sa incercam sa prezicem viitorul, folosind aceasta regula, ne putem asigura ca cel putin, compania se afla pe drumul cel bun in directia cresterii profitabilitatii.
                        </p>
                    </div>}

                <button onClick={this.props.onChange}>Back</button>
            </div>
        );
    }
}

export default Rule5;