import React from "react";
import pic2 from './pic2.png'
import pic21 from './pic2.1.png'
import pic22 from './pic2.2.png'
import pic23 from './pic2.3.png'
import passedPic from './passed.png'
import failedPic from './failed.png'

import { toast, Toaster } from 'react-hot-toast';


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

    printToaster = (i) => {
        i == 1 ?
            toast.success('Regula 2 este respectata.',
                {
                    icon: <img style={{ height: "40px", width: "40px" }} src={passedPic}></img>,
                    id: 'succces',
                    style: {
                        borderRadius: '25px',
                        background: '#BBFFB2',
                    },
                }
            )
            :
            toast.error('Regula 2 nu este respectata',
                {
                    icon: <img style={{ height: "30px", width: "30px" }}src={failedPic}></img>,
                    id: 'fail',
                    style: {
                        borderRadius: '25px',
                        background: '#FFB2B2',
                    },
                    duration: 2000,
                }
            );
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
                <Toaster/>

                {ratio >= 2
                    ? <div>
                        {this.printToaster(1)}
                        <br /><br /><br />
                        <strong style={{color: "Lightgreen"}}>Regula 2 este respectata.</strong><br />
                        <span style={{fontStyle: 'italic'}}>Regula 2 se refera la situatia financiara a companiei.</span><br/><br/>
                        <span style={{fontStyle: 'italic'}}>Descriere: Compania trebuie sa aiba o situatie financiara suficient de puternica.</span>
                        <h2>Active Curente / Datorii curente &gt; 2</h2>
                        <h2>{ratio.toFixed(2)} &gt; 2</h2>
                        <p>&emsp;Acest raport este cunoscut drept <span>,,Current Ratio’’</span> si reprezinta un raport de lichiditate.
                        </p>
                        <img style={{height: "255px", width: "425px"}} src={pic2} alt="new" />
                        <p>
                        &emsp;Aceasta conditie indica atat capacitatea companiei de a-si plati datoriile pe termen scurt folosind active curente, cat si eficienta managementului in utilizarea acestor active curente.
                        </p>
                        <img style={{height: "250px", width: "250px"}} src={pic22} alt="new" />
                        <p>
                        &emsp;Un raport <u>prea mic</u> (&lt;1) indica expunerea companiei la riscul de a nu fi capabila sa-si plateasca datoriile pe termen scurt. Situatii economice speciale, crize sau anomalii in sectorul in care compania activeaza pot aduce compania in situatia de insolventa, in ciuda faptului ca aceasta este foarte profitabila.
                        <br/>&emsp;Un raport <u>prea mare</u> (&gt;4) poate indica o utilizare ineficienta a activelor curente, adica managementul poate rata oportunitati de investitii.
                        </p>
                        <img style={{height: "197px", width: "361px"}} src={pic23} alt="new" />
                        <p>
                        &emsp;Un management <i>eficient</i> plaseaza compania intre cele doua situatii: pastreaza suficient capital pentru a plati datoriile pe termen scurt si pentru a executa operatiunile normale, iar surplusul 
                        fie il investeste, fie il ofera actionarilor sub forma de dividende.
                        <br/>&emsp;Astfel, compania se afla intr-o situatie financiara sigura, iar oportunitatile de investitii nu sunt irosite.
                        </p>
                    </div>
                    : <div>
                        {this.printToaster(0)}
                        <br/><br/><br/>
                        <strong style={{color: "red"}}>Regula 2 nu este respectata.</strong><br/>
                        <span style={{fontStyle: 'italic'}}>Regula 2 se refera la situatia financiara a companiei.</span><br/><br/>
                        <span style={{fontStyle: 'italic'}}>Descriere: Compania trebuie sa aiba o situatie financiara suficient de puternica.</span>
                        <h2>Active Curente / Datorii curente &lt; 2</h2>
                        <h2>{ratio.toFixed(2)} &lt; 2</h2>
                        <p>&emsp;Acest raport este cunoscut drept <span>,,Current Ratio’’</span> si reprezinta un raport de lichiditate.
                        </p>
                        <img style={{height: "337px", width: "506px"}} src={pic21} alt="new" />
                        <p>
                        &emsp;Aceasta conditie indica atat capacitatea companiei de a-si plati datoriile pe termen scurt folosind active curente, cat si eficienta managementului in utilizarea acestor active curente.
                        </p>
                        <img style={{height: "250px", width: "250px"}} src={pic22} alt="new" />
                        <p>
                        &emsp;Un raport <u>prea mic</u> (&lt;1) indica expunerea companiei la riscul de a nu fi capabila sa-si plateasca datoriile pe termen scurt. Situatii economice speciale, crize sau anomalii in sectorul in care compania activeaza pot aduce compania in situatia de insolventa, in ciuda faptului ca aceasta este foarte profitabila.
                        <br/>&emsp;Un raport <u>prea mare</u> (&gt;4) poate indica o utilizare ineficienta a activelor curente, adica managementul poate rata oportunitati de investitii.
                        </p>
                        <img style={{height: "197px", width: "361px"}} src={pic23} alt="new" />
                        <p>
                        &emsp;Un management <i>eficient</i> plaseaza compania intre cele doua situatii: pastreaza suficient capital pentru a plati datoriile pe termen scurt si pentru a executa operatiunile normale, iar surplusul 
                        fie il investeste, fie il ofera actionarilor sub forma de dividende.
                        <br/>&emsp;Astfel, compania se afla intr-o situatie financiara sigura, iar oportunitatile de investitii nu sunt irosite.
                        </p>
                    </div>}

                <button onClick={this.props.onChange}>Back</button>
            </div>
        );
    }
}

export default Rule2;