import React from "react";

class Rule2 extends React.Component{
    constructor(props){
        super(props);
    }

    changeColor = (n) => {
        let k = document.getElementById("h");
        if(n >= 2){
            k.style.color = "Lightgreen"
        }
        else{
            k.style.color = "red"
        }
    }

    componentDidMount(){
        var company = this.props.props;
        var ratio = company.assets / company.liab;
        this.changeColor(ratio);
    }

    render(){
        var company = this.props.props;
        console.log("Date companie rule 2 ")
        console.log(company)
        var ratio = company.assets / company.liab;
        Number.isNaN(ratio) ? ratio = 0 : ratio = ratio
        console.log("Ratio rule 2: " + ratio)

        return(
            <div className="menu">
                <h1 id="h">Regula 2</h1>

                <span>
                    <strong>{ratio >= 2 
                    ? `Compania are un raport de lichiditate suficient de bun.` 
                    : `Compania are un raport de lichiditate prea mic.` 
                    }</strong>
                </span>

                {ratio >= 2
                    ? <div>
                        <br /><br /><br />
                        <strong style={{color: "Lightgreen"}}>Regula 2 este respectata.</strong><br />
                        <span style={{fontStyle: 'italic'}}>Regula 2 se refera la situatia financiara a companiei.</span><br/><br/>
                        <span style={{fontStyle: 'italic'}}>Descriere: Compania trebuie sa aiba o situatie financiara suficient de puternica.</span>
                        <h2>Active Curente / Datorii curente &gt; 2</h2>
                        <h2>{ratio.toFixed(2)} &gt; 2</h2>
                        <img style={{height: "255px", width: "425px"}}
                        src="https://fitsmallbusiness.com/wp-content/uploads/2019/12/FeatureImage_current_ratio.jpg" alt="new" />
                        <p style={{textAlign: 'left'}}>&nbsp;&nbsp;&nbsp;&nbsp;Raportul de mai sus este cunoscut drept ,,Current Ratio’’ si reprezinta un raport de lichiditate.
                        <br/>&nbsp;&nbsp;&nbsp;&nbsp;Aceasta conditie indica atat capacitatea companiei de a-si plati datoriile pe termen scurt folosind active curente, cat si eficienta managementului in utilizarea acestor active curente.
                        <br/>&nbsp;&nbsp;&nbsp;&nbsp;Un raport prea mic (&lt;1) indica expunerea companiei la riscul de a nu fi capabila sa-si plateasca datoriile pe termen scurt. Situatii economice speciale, crize sau anomalii in sectorul in care compania activeaza pot aduce compania in situatia de insolventa, in ciuda faptului ca aceasta este foarte profitabila.
                        <br/>&nbsp;&nbsp;&nbsp;&nbsp;Un raport prea mare(&gt;4) poate indica o utilizare ineficienta a activelor curente, adica managementul poate rata oportunitati de investitii.
                        </p>
                    </div>
                    : <div>
                        <br/><br/><br/>
                        <strong style={{color: "red"}}>Regula 2 nu este respectata.</strong><br/>
                        <span style={{fontStyle: 'italic'}}>Regula 2 se refera la situatia financiara a companiei.</span><br/><br/>
                        <span style={{fontStyle: 'italic'}}>Descriere: Compania trebuie sa aiba o situatie financiara suficient de puternica.</span>
                        <h2>Active Curente / Datorii curente &lt; 2</h2>
                        <h2>{ratio.toFixed(2)} &lt; 2</h2>
                        <img style={{height: "255px", width: "425px"}}
                        src="https://fitsmallbusiness.com/wp-content/uploads/2019/12/FeatureImage_current_ratio.jpg" alt="new" />
                        <p style={{textAlign: 'left'}}>&nbsp;&nbsp;&nbsp;&nbsp;Raportul de mai sus este cunoscut drept ,,Current Ratio’’ si reprezinta un raport de lichiditate.
                        <br/>&nbsp;&nbsp;&nbsp;&nbsp;Aceasta conditie indica atat capacitatea companiei de a-si plati datoriile pe termen scurt folosind active curente, cat si eficienta managementului in utilizarea acestor active curente.
                        <br/>&nbsp;&nbsp;&nbsp;&nbsp;Un raport prea mic (&lt;1) indica expunerea companiei la riscul de a nu fi capabila sa-si plateasca datoriile pe termen scurt. Situatii economice speciale, crize sau anomalii in sectorul in care compania activeaza pot aduce compania in situatia de insolventa, in ciuda faptului ca aceasta este foarte profitabila.
                        <br/>&nbsp;&nbsp;&nbsp;&nbsp;Un raport prea mare(&gt;4) poate indica o utilizare ineficienta a activelor curente, adica managementul poate rata oportunitati de investitii.
                        </p>
                    </div>}

                <button onClick={this.props.onChange}>Back</button>
            </div>
        );
    }
}

export default Rule2;