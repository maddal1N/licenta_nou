import React from "react";
import pic4 from './pic4.png'
import pic41 from './pic4.1.png'
import passedPic from './passed.png'
import failedPic from './failed.png'

import {Bar, Line} from "react-chartjs-2";
import { toast, Toaster } from 'react-hot-toast';


class Rule4 extends React.Component{
    constructor(props){
        super(props);
    }

    changeColor = (n) => {
        let k = document.getElementById("h");
        if(n == 1){
            k.style.color = "Lightgreen"
        }
        else{
            k.style.color = "red"
        }
    }

    componentDidMount(){
        var company = this.props.props;
        var passed = 1;
        company.dividends.forEach(e => { 
            e <= 0 ? passed = 0 : passed = passed
        })
        this.changeColor(passed);
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

        var reversedDividends = this.reverseArr(company.dividends);

        return (
            <div>
                <Bar
                    data={{
                        labels: ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'],
                        datasets: [
                            {
                                label: 'Dividende platite',
                                data: reversedDividends,
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

    afisareGraficDublu() {
        var company = this.props.props;

        var reversedDividends = this.reverseArr(company.dividends);
        var reversedEPS = this.reverseArr(company.eps);

        return (
            <div>
                <Bar
                    data={{
                        labels: ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'],
                        datasets: [
                            {
                                label: 'Dividende platite',
                                data: reversedDividends,
                                backgroundColor: [
                                    '#2196F3',
                                ],
                                borderWidth: 0.8,
                            },
                            {
                                label: 'Profituri anuale (EPS)',
                                data: reversedEPS,
                                backgroundColor: [
                                    '#f58024',
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

    afisareGraficLine() {
        var company = this.props.props;

        var colorPassed = '#FFA500';

        var reversedDividends = this.reverseArr(company.dividends);
        var reversedEPS = this.reverseArr(company.eps);
        var raport = reversedDividends.map(function(n, i) { return n / reversedEPS[i] * 100; });
        console.log(raport);

        return (
            <div>
                <Line
                    data={{
                        labels: ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'],
                        datasets: [
                            {
                                label: 'Dividende platite (% din EPS)',
                                data: raport,
                                backgroundColor: [
                                    colorPassed,
                                ],
                                borderWidth: 6,
                                borderColor: colorPassed,
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
            toast.success('Regula 4 este respectata.',
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
            toast.error('Regula 4 nu este respectata',
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
        console.log("Date companie rule 4 ")
        console.log(company)

        var nr = 0
        company.dividends.forEach(e => { 
            e <= 0 ? nr = nr + 1 : nr = nr
        })

        return(
            <div className="menu">
                <h1 id="h">Regula 4</h1>
                <strong>{nr == 0
                ? "Compania a platit dividende in toti cei 10 ani." 
                : "Compania nu a platit dividende in toti cei 10 ani."}</strong>
                <Toaster/>

                {nr == 0
                    ? <div>
                        {this.printToaster(1)}
                        <br /><br /><br />
                        <strong style={{color: "Lightgreen"}}>Regula 4 este respectata.</strong><br />
                        <span style={{fontStyle: 'italic'}}>Regula 4 se refera la plata constanta a dividendelor.</span><br/><br/>
                        <span style={{fontStyle: 'italic'}}>Descriere: Compania a platit dividende in fiecare an timp de cel putin 10 ani consecutiv.</span><br/>
                        
                        <br/><br/>
                        {this.afisareGrafic(1)}
                        <br/><br/>  
                        <p>&emsp;Este recomandat sa investesti in companii care platesc dividende. 
                        <strong> Dividendele</strong> reprezinta o forma de cash flow pe care il primesti si pe care il poti reinvesti.
                        <br/>&emsp;Acest aspect poate fi foarte important mai ales in perioadele in care actiunile companiei sunt subestimate, iar dividendele pot reprezenta un venit pasiv in timp ce astepti ca pretul actiunilor sa atinga nivelul asteptat, investitia bazata pe valoare fiind un proces de durata.
                        </p>
                        <img style={{height: "265px", width: "314px"}} src={pic4} alt="new" />
                        <p>
                        <br/>&emsp;Plata consecventă a dividendelor indică, de asemenea, calitatea companiei și a câștigurilor pe care le generează. Aceasta capacitate de a plati constant dividende trimite un mesaj puternic actionarilor in legatura cu situatia stabila si sustenabilitatea companiei.
                        </p>   
                        {this.afisareGraficDublu()}
                        <br/><br/>
                        <p>
                        &emsp; <strong>Randamentul dividendelor (<i>dividend yield</i>)</strong> este exprimat in procente si 
                        reprezinta un raport financiar care arata partea platita de companie sub forma de dividende raportat la pretul actiunilor companiei.
                        </p>
                        <img style={{height: "225px", width: "465px"}}
                        src="https://asset5.scripbox.com/wp-content/uploads/2021/04/monthly-dividend-mutual-funds-vector.png.webp" alt="new" />
                        <p>
                        &emsp;Acest raport poate fi folosit de catre investitori pentru a compara mai multe companii, fiecare avand un randament al dividendelor diferit.
                        &emsp;<br/>&emsp;Un randament mare poate indica faptul ca rezultatele companiei sunt bune si in acelasi timp sustenabile, iar compania este profitabile.
                        Dar poate indica, de asemenea, si ca managementul nu are proiecte, oportunitati de investitie sau intrebuintari mai bune pentru acei bani, astfel ii ofera direct actionarilor.
                        </p>
                        {this.afisareGraficLine()}

                    </div>
                    : <div>
                        {this.printToaster(0)}
                        <br /><br /><br />
                        <strong style={{color: "red"}}>Regula 4 nu este respectata.</strong><br />
                        <strong style={{color: "red"}}>
                            {nr == 1 
                                ? "Compania nu a platit dividende intr-un an." 
                                : `Compania nu a platit dividende in ${nr} ani`}</strong><br />
                        <span style={{fontStyle: 'italic'}}>Regula 4 se refera la plata constanta a dividendelor.</span><br/><br/>
                        <span style={{fontStyle: 'italic'}}>Descriere: Compania a platit dividende in fiecare an timp de cel putin 10 ani consecutiv.</span><br/>
                        
                        {this.afisareGrafic(0)}
                        

                        <p>&emsp;Este recomandat sa investesti in companii care platesc dividende. 
                        <strong> Dividendele</strong> reprezinta o forma de cash flow pe care il primesti si pe care il poti reinvesti.
                        <br/>&emsp;Acest aspect poate fi foarte important mai ales in perioadele in care actiunile companiei sunt subestimate, iar dividendele pot reprezenta un venit pasiv in timp ce astepti ca pretul actiunilor sa atinga nivelul asteptat, investitia bazata pe valoare fiind un proces de durata.
                        </p>
                        <img style={{height: "356px", width: "462px"}} src={pic41} alt="new" />
                        <p>&emsp;Plata consecventă a dividendelor indică, de asemenea, calitatea companiei și a câștigurilor pe care le generează. Aceasta capacitate de a plati constant dividende trimite un mesaj puternic actionarilor in legatura cu situatia stabila si sustenabilitatea companiei.
                        </p>
                        <img style={{height: "225px", width: "465px"}}
                        src="https://asset5.scripbox.com/wp-content/uploads/2021/04/monthly-dividend-mutual-funds-vector.png.webp" alt="new" />
                        <p>
                        &emsp; <strong>Randamentul dividendelor (<i>dividend yield</i>)</strong> este exprimat in procente si 
                        reprezinta un raport financiar care arata partea platita de companie sub forma de dividende raportat la pretul actiunilor companiei.
                        </p>
                        <img style={{height: "265px", width: "314px"}} src={pic4} alt="new" />
                        <p>
                        &emsp;Acest raport poate fi folosit de catre investitori pentru a compara mai multe companii, fiecare avand un randament al dividendelor diferit.
                        &emsp;<br/>&emsp;Un randament mare poate indica faptul ca rezultatele companiei sunt bune si in acelasi timp sustenabile, iar compania este profitabile.
                        Dar poate indica, de asemenea, si ca managementul nu are proiecte, oportunitati de investitie sau intrebuintari mai bune pentru acei bani, astfel ii ofera direct actionarilor.
                        </p>
                    </div>}

                <button onClick={this.props.onChange}>Back</button>
            </div>
        );
    }
}

export default Rule4;