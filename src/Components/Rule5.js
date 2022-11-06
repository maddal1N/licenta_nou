import React from "react";
import pic5 from './pic5.png';
import pic51 from './pic5.1.jpg';
import pic52 from './pic5.2.png';
import passedPic from './passed.png'
import failedPic from './failed.png'

import { toast, Toaster } from 'react-hot-toast';

import {Bar} from "react-chartjs-2";

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

    reverseArr(input) {
        var ret = new Array;
        for(var i = input.length-1; i >= 0; i--) {
            ret.push(input[i]);
        }
        return ret;
    }

    afisareGrafic(n) {
        var company = this.props.props;

        var colorPassed = 'red';
        n == 0 ? colorPassed = 'red' : colorPassed = 'green'

        var reversedEPS = this.reverseArr(company.eps);

        return (
            <div>
                <Bar
                    data={{
                        labels: ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'],
                        datasets: [
                            {
                                label: 'Profituri anuale',
                                data: reversedEPS,
                                backgroundColor: [
                                    colorPassed,
                                ],
                                borderWidth: 0.8,
                            }
                        ]
                    }}
                    height={400}
                    width={600}
                    options={{
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                labels: {
                                    font: {
                                        size: 24,
                                    }
                                }
                            }
                        }
                    }}
                />
            </div>
        )
    }

    printToaster = (i) => {
        i == 1 ?
            toast.success('Regula 5 este respectata.',
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
            toast.error('Regula 5 nu este respectata',
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
                <Toaster/>

                {growth >= 1.33
                    ? <div>
                        {this.printToaster(1)}
                        <br /><br /><br />
                        <strong style={{color: "Lightgreen"}}>Regula 5 este respectata.</strong><br />
                        <span style={{fontStyle: 'italic'}}>Regula 5 se refera la cresterea profiturilor in ultimii 10 ani.</span><br/><br/>
                        <span style={{fontStyle: 'italic'}}>Descriere: Profiturile companiei trebuie sa fi crescut cu cel putin o treime de la inceputul perioadei analizate.</span>
                        
                        {this.afisareGrafic(1)}
                        
                        <h2>Cresterea profiturilor &gt; 1.33</h2>
                        <h2>{growth.toFixed(2)} &gt; 1.33</h2>
                        <img style={{height: "316px", width: "563px"}} src={pic51} alt="new" />

                        <p>&emsp;<strong>Câștigurile pe acțiune <i>(EPS – Earnings per Share)</i></strong> indică profitabilitatea companiei. Creșterea câștigurilor pe acțiune indică rata la care compania și-a crescut profitabilitatea.
                        <br/>&emsp;In investitiile bazate pe valoare, este foarte important sa luam in calcul cresterea profiturilor de-a lungul timpului. Este recomandat ca media profiturilor din ultimii 3 ani sa fi crescut cu cel putin o treime fata de media profiturilor din primii 3 ani ai perioadei analizate.
                        </p>
                        <img style={{height: "255px", width: "425px"}} src={pic52} alt="new" />
                        <p>
                        &emsp;O crestere de o treime dupa o perioada de 10 ani inseamna o crestere anuala de <strong>3%</strong>, o valoare nu foarte impresionanta, insa care indica o imbunatatire a activitatii companiei.
                        <br/>&emsp;Pentru o abordare mai putin conservativa, investitorul poate ridica cresterea minima la un nivel de <strong>4%</strong> anual sau <strong>50%</strong> raportat la intreaga perioada de 10 ani.
                        </p>
                        <img style={{height: "210px", width: "349px"}} src={pic5} alt="new" />
                        <p>
                        &emsp;Ne intereseaza sa investim in companii care devin din ce in ce mai profitabile. Fara sa incercam sa prezicem viitorul, folosind aceasta regula, ne putem asigura ca cel putin, compania se afla pe drumul cel bun in directia cresterii profitabilitatii.
                        </p>
                    </div>
                    : <div>
                        {this.printToaster(0)}
                        <br/><br/><br/>
                        <strong style={{color: "red"}}>Regula 5 nu este respectata.</strong><br/>
                        <span style={{fontStyle: 'italic'}}>Regula 5 se refera la cresterea profiturilor in ultimii 10 ani.</span><br/><br/>
                        <span style={{fontStyle: 'italic'}}>Descriere: Profiturile companiei trebuie sa fi crescut cu cel putin o treime de la inceputul perioadei analizate.</span>
                       
                        {this.afisareGrafic(0)}
                       
                        <h2>Cresterea profiturilor &lt; 1.33</h2>
                        <h2>{growth.toFixed(2)} &lt; 1.33</h2>
                        <img style={{height: "316px", width: "563px"}} src={pic51} alt="new" />

                        <p>&emsp;<strong>Câștigurile pe acțiune <i>(EPS – Earnings per Share)</i></strong> indică profitabilitatea companiei. Creșterea câștigurilor pe acțiune indică rata la care compania și-a crescut profitabilitatea.
                        <br/>&emsp;In investitiile bazate pe valoare, este foarte important sa luam in calcul cresterea profiturilor de-a lungul timpului. Este recomandat ca media profiturilor din ultimii 3 ani sa fi crescut cu cel putin o treime fata de media profiturilor din primii 3 ani ai perioadei analizate.
                        </p>
                        <img style={{height: "255px", width: "425px"}} src={pic52} alt="new" />
                        <p>
                        &emsp;O crestere de o treime dupa o perioada de 10 ani inseamna o crestere anuala de <strong>3%</strong>, o valoare nu foarte impresionanta, insa care indica o imbunatatire a activitatii companiei.
                        <br/>&emsp;Pentru o abordare mai putin conservativa, investitorul poate ridica cresterea minima la un nivel de <strong>4%</strong> anual sau <strong>50%</strong> raportat la intreaga perioada de 10 ani.
                        </p>
                        <img style={{height: "210px", width: "349px"}} src={pic5} alt="new" />
                        <p>
                        &emsp;Ne intereseaza sa investim in companii care devin din ce in ce mai profitabile. Fara sa incercam sa prezicem viitorul, folosind aceasta regula, ne putem asigura ca cel putin, compania se afla pe drumul cel bun in directia cresterii profitabilitatii.
                        </p>
                    </div>}
                <button onClick={this.props.onChange}>Back</button>
            </div>
        );
    }
}

export default Rule5;