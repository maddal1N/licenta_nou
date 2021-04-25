import React from "react";
import pic1 from './pic1.png'

class Rule1 extends React.Component{
    constructor(props){
        super(props);
    }

    // changeColor = (n) => {
    //     let k = document.getElementById("h");
    //     if(n >= 500){
    //         k.style.backgroundColor = "green"
    //     }
    //     else{
    //         k.style.backgroundColor = "red"
    //     }
    // }

    changeColor = (n) => {
        let k = document.getElementById("h");
        if(n >= 500){
            k.style.color = "Lightgreen"
        }
        else{
            k.style.color = "red"
        }
    }

    componentDidMount(){
        var company = this.props.props;
        this.changeColor(company.sales);
    }

    render(){
        let passed = false;
        var company = this.props.props;
        console.log("Date companie rule 1 ")
        console.log(company)

        var rev = 500;

        return(
            <div className="menu">
                <h1 id="h">Regula 1</h1>

                <span>
                    {/* {company.sales >= 100 ? passed = true : passed = false} */}
                    <strong>{company.sales >= rev 
                    ? `Veniturile totale sunt mai mari de $${rev} mil.` 
                    : `Veniturile totale sunt mai mici de $${rev} mil.` 
                    }</strong>
                </span>

                {company.sales >= rev
                    ? <div>
                        <br /><br /><br />
                        <strong style={{color: "Lightgreen"}}>Regula 1 este respectata.</strong><br />
                        <span className="goldText" style={{fontStyle: 'italic'}}>Regula 1 se refera la dimensiunea adecvată a companiei.</span><br/><br/>
                        <span style={{fontStyle: 'italic'}}>Descriere: Veniturile anuale ale companiei trebuie sa fie mai mari de ${rev} mil.</span>
                        <h2>Venit anual &gt; {rev}</h2>
                        <img style={{height: "255px", width: "425px"}}
                        src={pic1} alt="new" />
                        <p style={{textAlign: 'left'}}>&nbsp;&nbsp;&nbsp;&nbsp;Ideea principala este de a elimina companiile mici, care in general au o expunere mai mare catre risc. Acest lucru poate fi datorat mai multor factori, precum: compania este noua pe piata, performanta sa este mai sensibila la contextul economic general sau nu detine o cota de piata suficient de mare incat sa poata considera ca detine un avantaj competitional la nivelul sectorului in care activeaza.
                        <br/>&nbsp;&nbsp;&nbsp;&nbsp;Selectand companii suficient de mari, asiguri portfoliului tau stabilitate si predictibilitate.</p>
                    </div>
                    : <div>
                        <br/><br/><br/>
                        <strong style={{color: "red"}}>Regula 1 nu este respectata.</strong><br/>
                        <span style={{fontStyle: 'italic'}}>Regula 1 se refera la dimensiunea adecvată a companiei.</span><br/><br/>
                        <span style={{fontStyle: 'italic'}}>Descriere: Veniturile anuale ale companiei trebuie sa fie mai mari de ${rev} mil.</span>
                        <h2>Venit anual &lt; {rev}</h2>
                        <img style={{height: "255px", width: "425px"}}
                        src={pic1} />
                        <p style={{textAlign: 'left'}}>&nbsp;&nbsp;&nbsp;&nbsp;Ideea principala este de a elimina companiile mici, care in general au o expunere mai mare catre risc. Acest lucru poate fi datorat mai multor factori, precum: compania este noua pe piata, performanta sa este mai sensibila la contextul economic general sau nu detine o cota de piata suficient de mare incat sa poata considera ca detine un avantaj competitional la nivelul sectorului in care activeaza.
                        <br/>&nbsp;&nbsp;&nbsp;&nbsp;Selectand companii suficient de mari, asiguri portfoliului tau stabilitate si predictibilitate.</p>
                    </div>}

                <button onClick={this.props.onChange}>Back</button>
            </div>
        );
    }
}

export default Rule1;