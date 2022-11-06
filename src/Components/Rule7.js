import React from "react";
import pic7 from './pic7.png'
import pic71 from './pic71.png'
import pic72 from './pic72.png'
import passedPic from './passed.png'
import failedPic from './failed.png'

import {Bar, Pie} from "react-chartjs-2";
import { toast, Toaster } from 'react-hot-toast';

import { ToastContainer, toast as toastify } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

    afisareGraficDublu() {
        var company = this.props.props;

        var capitalization = company.price * company.shares;
        var marketValueAdded = capitalization - company.bookValue;

        return (
            <div>
                <Bar
                    data={{
                        labels: ['Capitalizare totala'],
                        datasets: [
                            {
                                label: 'Valoarea contabila',
                                data: [company.bookValue],
                                backgroundColor: [
                                    '#2196F3',
                                ],
                                borderWidth: 0.8,
                            },
                            {
                                label: 'Valoarea adaugata de piata',
                                data: [marketValueAdded],
                                backgroundColor: [
                                    // '#2196F3',
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
                        barThickness: 150,
                        plugins: {
                            legend: {
                                labels: {
                                    font: {
                                        size: 24,
                                    }
                                }
                            }
                        },
                        scales: {
                            x: {
                                stacked: true,
                                ticks: {
                                    font: {
                                        size: 24,
                                    }
                                }
                            },
                        }
                    }}
                />
            </div>
        )
    }

    afisareGraficPie() {
        var company = this.props.props;

        var capitalization = company.price * company.shares;
        var marketValueAdded = capitalization - company.bookValue;

        return (
            <div>
                <Pie
                    data={{
                        labels: ['Valoarea contabila','Valoarea adaugata de piata'],
                        datasets: [
                            {
                                data: [company.bookValue, marketValueAdded],
                                backgroundColor: [
                                    '#2196F3',
                                    '#f58024'
                                ],
                                borderWidth: 0.8,
                            }
                        ]
                    }}
                    height={400}
                    width={600}
                    options={{
                        maintainAspectRatio: false,
                        barThickness: 150,
                        plugins: {
                            legend: {
                                labels: {
                                    color: 'grey',
                                    font: {
                                        size: 24,
                                    }
                                }
                            },
                            title: {
                                display: true,
                                text: 'Capitalizarea totala',
                                color: 'grey',
                                font: {
                                    size: 24,
                                },
                                position: 'bottom',
                            }
                        }
                    }}
                />
            </div>
        )
    }

    printToaster = (i) => {
        i == 1 ?
            toast.success('Regula 7 este respectata.',
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
            toast.error('Regula 7 nu este respectata',
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

    printExplicatie = () =>{
        // toastify.info('Capitalizarea bursieră reprezintă valoarea de piață a tuturor acțiunilor unei companii. Capitalizarea = Pret actiune * Numar actiuni', {
        toastify.info(
            <div style={{ fontSize: '20px'}}>
                <img style={{ height: "50px", width: "50px" }}
                    src='https://image.flaticon.com/icons/png/512/189/189665.png'>
                </img><br/>
                Capitalizarea bursieră reprezintă valoarea de piață a tuturor acțiunilor unei companii.<br/>
                {/* <p style={{ color: 'black', fontWeight: 'bold'}}>Capitalizarea = Pret actiune * Numar actiuni</p> */}
                <span>Capitalizarea = Pret actiune * Numar actiuni</span>
            </div>, {
            toastId: 'info',
            position: "bottom-left",
            autoClose: 7000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            style: {
                borderRadius: '10px',
            },
        });
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
                <Toaster />
                <ToastContainer
                    bodyClassName="toastBody"
                    style={{ width: "350px" }}
                />

                {passed == 1
                    ? <div>
                        {this.printToaster(1)}
                        <br /><br /><br />
                        <strong style={{color: "Lightgreen"}}>Regula 7 este respectata.</strong><br />
                        <span style={{fontStyle: 'italic'}}>Regula 7 se refera la pretul la care achizitionam actiunile (raportat la active).</span><br/><br/>
                        <span style={{fontStyle: 'italic'}}>Descriere: Pretul total al actiunilor (capitalizarea) nu trebuie sa fie mai mare de 1,5 ori fata valoarea contabila a companiei.</span>
                        
                        <br/><br/>
                        {this.afisareGraficPie()}
                        
                        <h2>Capitalizarea / Valoarea contabila &lt; 1,5</h2>
                        <h2>{ratio.toFixed(2)} &lt; 1,5</h2>

                        <h2 onClick={() => this.printExplicatie()} style={{cursor: 'pointer', color: '#72d4d4'}}>Ce este Capitalizarea?</h2>
                        <p>&emsp;Aceasta statistica indica valoarea tangibila, contabila primita in schimbul pretului platit si arata dacă valoarea actiunilor este supraevaluata sau subevaluata prin compararea prețului de piață actual al companiei cu valoarea sa contabilă. Benjamin Graham recomandă un raport de cel mult 1,5.
                        </p>

                        <img style={{height: "324px", width: "486px"}} src={pic72} alt="new" />
                        {this.afisareGraficDublu()}
                    </div>
                    : <div>
                        {this.printToaster(0)}
                        <br/><br/><br/>
                        <strong style={{color: "red"}}>Regula 7 nu este respectata.</strong><br />
                        <span style={{fontStyle: 'italic'}}>Regula 7 se refera la pretul la care achizitionam actiunile (raportat la active).</span><br/><br/>
                        <span style={{fontStyle: 'italic'}}>Descriere: Pretul total al actiunilor (capitalizarea) nu trebuie sa fie mai mare de 1,5 ori fata valoarea contabila a companiei.</span>
                        
                        <br/><br/>
                        {this.afisareGraficPie()}
                        
                        <h2>Capitalizarea / Valoarea contabila &gt; 1,5</h2>
                        <h2>{ratio.toFixed(2)} &gt; 1,5</h2>

                        <h2 onClick={() => this.printExplicatie()} style={{cursor: 'pointer', color: '#72d4d4'}}>Ce este Capitalizarea?</h2>
                        <p>&emsp;Aceasta statistica indica valoarea tangibila, contabila primita in schimbul pretului platit si arata dacă valoarea actiunilor este supraevaluata sau subevaluata prin compararea prețului de piață actual al companiei cu valoarea sa contabilă. Benjamin Graham recomandă un raport de cel mult <strong>1,5</strong>.
                        <br/>&emsp;Investitorul trebuie sa studieze si sa inteleaga modul in care evolueaza diferitele sectoare ale economiei.
                        Astfel, multe dintre companiile tech se tranzactioneaza la valori mult peste valoarea contabila, ceea ce nu inseamna neaparat o supraapreciere a valorii acestora.
                        </p>

                        <img style={{height: "324px", width: "486px"}} src={pic72} alt="new" />
                        <p>
                        &emsp;De asemenea, companiile detin din ce in ce mai multe active precum francize, branduri, brevete sau marci comerciale, elemente ce contribuie in mare masura la bilantul contabil.
                        <br/>&emsp;In functie de domeniul in care activeaza compania sau de riscul pe care esti dispus sa ti-l asumi, poti considera o limita superioara a raportului de <strong>2</strong> sau <strong>2,5</strong>.
                        </p>
                        {this.afisareGraficDublu()}
                    </div>}

                <button onClick={this.props.onChange}>Back</button>
            </div>
        );
    }
}

export default Rule7;