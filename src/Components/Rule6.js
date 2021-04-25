import React from "react";
import pic6 from './pic6.png'


class Rule6 extends React.Component{
    constructor(props){
        super(props);
    }

    changeColor = (n) => {
        let k = document.getElementById("h");
        if(n <= 15){
            k.style.color = "Lightgreen"
        }
        else{
            k.style.color = "red"
        }
    }

    componentDidMount(){
        var company = this.props.props;
        var medie = (parseInt(company.eps[0]) + parseInt(company.eps[1]) + parseInt(company.eps[2]))/3;
        var PE = company.price / medie;
        this.changeColor(PE);
    }

    render(){
        var company = this.props.props;
        console.log("Date companie rule 6 ")
        console.log(company)

        var medie = (parseFloat(company.eps[0]) + parseFloat(company.eps[1]) + parseFloat(company.eps[2]))/3;
        var PE = company.price / medie;
        console.log(medie)
        console.log(PE)

        Number.isNaN(medie) ? medie = 0 : medie = medie
        return(
            <div className="menu">
                <h1 id="h">Regula 6</h1>
                
                <span>
                    <strong>{PE > 15 
                    ? `Pretul actiunilor este prea mare.` 
                    : `Pretul actiunilor nu este prea mare.` 
                    }</strong>
                </span>

                {PE <= 15
                    ? <div>
                        <br /><br /><br />
                        <strong style={{color: "Lightgreen"}}>Regula 6 este respectata.</strong><br />
                        <span style={{fontStyle: 'italic'}}>Regula 6 se refera la pretul la care achizitionam actiunile (raportat la profituri).</span><br/><br/>
                        <span style={{fontStyle: 'italic'}}>Descriere: Pretul actiunilor nu trebuie sa fie mai mare de 15 ori fata de media profiturilor ultimilor 3 ani.</span>
                        <h2>Pret &lt; 15 * Profit Mediu in ultimii 3 ani</h2>
                        <h2>${company.price} &lt; ${15 * medie}</h2>
                        <h3>P/E &lt; 15</h3>
                        <h2>{PE.toFixed(2)} &lt; 15</h2>
                        <img style={{height: "255px", width: "425px"}}
                        src={pic6} alt="new" />
                        <p style={{textAlign: 'left'}}>&nbsp;&nbsp;&nbsp;&nbsp;Raportul preț-profituri (Price/Earnings ratio) este folosit pentru evaluarea unei companii si măsoară prețul actual al acțiunii în raport cu câștigurile pe acțiune (EPS).
                        <br/>&nbsp;&nbsp;&nbsp;&nbsp;Astfel, putem realiza o comparatie corespunzatoare intre pret si profit, adica intre pret si valoarea primita in schimb. Poate fi, de asemenea, utilizat pentru a compara o companie cu propria sa performanța istorică sau pentru a compara piețele agregate între ele sau în timp.
                        <br/>&nbsp;&nbsp;&nbsp;&nbsp;Media profiturilor din ultimii 3 ani asigura o uniformizare a valorilor, evitand performante rare prea slabe sau nerealist de favorabile.
                        <br/>&nbsp;&nbsp;&nbsp;&nbsp;Un raport preț-profit scăzut nu este un motiv suficient pentru a cumpăra o acțiune, dar este o bună condiție prealabilă de care să ții cont. Media istorică pentru S&amp;P 500 este în jur de 15 și acest lucru a fost adevărat pentru o perioadă surprinzătoare de timp (informatiile datează de la sfârșitul secolului al XIX-lea). Acest raport diferă în funcție de industrie, deci trebuie să vă asigurați că nu cumpărați un stoc care este supraevaluat în raport cu piata in care activeaza, chiar dacă este ieftin în raport cu indicele P/E general.
                        <br/>&nbsp;&nbsp;&nbsp;&nbsp;Pentru o imagine de ansamblu asupra valorilor istorice ale acestui raport poti accesa acest <a href="https://www.multpl.com/s-p-500-pe-ratio" target="_blank">LINK</a> , iar pentru valorile actuale agregate ale fiecarui sector, poti accesa acest <a href="https://finviz.com/groups.ashx?g=sector&v=120&o=pe" target="_blank">LINK</a>
                        </p>
                    </div>
                    : <div>
                        <br/><br/><br/>
                        <strong style={{color: "red"}}>Regula 6 nu este respectata.</strong><br/>
                        <span style={{fontStyle: 'italic'}}>Regula 6 se refera la pretul la care achizitionam actiunile (raportat la profituri).</span><br/><br/>
                        <span style={{fontStyle: 'italic'}}>Descriere: Pretul actiunilor nu trebuie sa fie mai mare de 15 ori fata de media profiturilor ultimilor 3 ani.</span>
                        <h2>Pret &gt; 15 * Profit Mediu in ultimii 3 ani</h2>
                        <h2>${company.price} &gt; ${15 * medie}</h2>
                        <h3>P/E &gt; 15</h3>
                        <h2>{PE.toFixed(2)} &gt; 15</h2>
                        <img style={{height: "255px", width: "425px"}}
                        src={pic6} alt="new" />
                        <p style={{textAlign: 'left'}}>&nbsp;&nbsp;&nbsp;&nbsp;Raportul preț-profituri (Price/Earnings ratio) este folosit pentru evaluarea unei companii si măsoară prețul actual al acțiunii în raport cu câștigurile pe acțiune (EPS).
                        <br/>&nbsp;&nbsp;&nbsp;&nbsp;Astfel, putem realiza o comparatie corespunzatoare intre pret si profit, adica intre pret si valoarea primita in schimb. Poate fi, de asemenea, utilizat pentru a compara o companie cu propria sa performanța istorică sau pentru a compara piețele agregate între ele sau în timp.
                        <br/>&nbsp;&nbsp;&nbsp;&nbsp;Media profiturilor din ultimii 3 ani asigura o uniformizare a valorilor, evitand performante rare prea slabe sau nerealist de favorabile.
                        <br/>&nbsp;&nbsp;&nbsp;&nbsp;Un raport preț-profit scăzut nu este un motiv suficient pentru a cumpăra o acțiune, dar este o bună condiție prealabilă de care să ții cont. Media istorică pentru S&amp;P 500 este în jur de 15 și acest lucru a fost adevărat pentru o perioadă surprinzătoare de timp (informatiile datează de la sfârșitul secolului al XIX-lea). Acest raport diferă în funcție de industrie, deci trebuie să vă asigurați că nu cumpărați un stoc care este supraevaluat în raport cu piata in care activeaza, chiar dacă este ieftin în raport cu indicele P/E general.
                        <br/>&nbsp;&nbsp;&nbsp;&nbsp;Pentru o imagine de ansamblu asupra valorilor istorice ale acestui raport poti accesa acest <a href="https://www.multpl.com/s-p-500-pe-ratio" target="_blank">LINK</a> , iar pentru valorile actuale agregate ale fiecarui sector, poti accesa acest <a href="https://finviz.com/groups.ashx?g=sector&v=120&o=pe" target="_blank">LINK</a>
                        </p>
                     </div>}

                <button onClick={this.props.onChange}>Back</button>
            </div>
        );
    }
}

export default Rule6;