import React from "react";
import pic3 from './pic3.png'
import pic31 from './pic3.1.png'
import pic32 from './pic3.2.png'
import pic33 from './pic3.3.png'
import pic34 from './pic3.4.png'
import grafic from './win_loss.png'
import passedPic from './passed.png'
import failedPic from './failed.png'

import {Bar} from "react-chartjs-2";
import { toast, Toaster } from 'react-hot-toast';

import { ToastContainer, toast as toastify } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Rule3 extends React.Component{
    constructor(props){
        super(props);
    };

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
        company.earnings.forEach(e => { 
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

        var reversedEarnings = this.reverseArr(company.earnings);

        return (
            <div>
                <Bar
                    data={{
                        labels: ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'],
                        datasets: [
                            {
                                label: 'Profituri anuale',
                                data: reversedEarnings,
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
            toast.success('Regula 3 este respectata.',
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
            toast.error('Regula 3 nu este respectata',
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
        toastify.info(
            <div style={{ fontSize: '20px'}}>
                <img style={{ height: "50px", width: "50px" }}
                    src='https://image.flaticon.com/icons/png/512/189/189665.png'>
                </img><br/>
                Aici poti vedea care e randamentul necesar <span>(Required gain)</span> compensarii unei pierderi <span>(Loss)</span>.
                <img style={{ height: "396px", width: "349px" }}
                    src={grafic}>
                </img>
            </div>, {
            toastId: 'info',
            position: "bottom-left",
            autoClose: 10000,
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
        console.log("Date companie rule 3 ")
        console.log(company)
        var nr = 0

        var passed = 1;
        company.earnings.forEach(e => { 
            e <= 0 ? passed = 0 : passed = passed
            e <= 0 ? nr = nr + 1 : nr = nr
        })
        
        console.log("Rule 3 passed:" + passed);

        return(
            <div className="menu">
                
                <h1 id="h">Regula 3</h1>
                <strong>{passed == 1 
                ? "Compania are profituri in toti cei 10 ani." 
                : "Compania nu are profituri in toti cei 10 ani."}</strong>
                <Toaster/>
                <ToastContainer
                    bodyClassName="toastBody"
                    style={{ width: "450px" }}
                />

                {passed == 1
                    ? <div>
                        {this.printToaster(1)}
                        <img style={{height: "150px", width: "150px"}}
                            src="https://images-na.ssl-images-amazon.com/images/I/410LDTR85dL.png" alt="new" />

                        <br />
                        <strong style={{color: "Lightgreen"}}>Regula 3 este respectata.</strong><br />
                        <span style={{fontStyle: 'italic'}}>Regula 3 se refera la profitabilitatea companiei.</span><br/><br/>
                        <span style={{fontStyle: 'italic'}}>Descriere: Compania trebuie sa aiba profituri in fiecare dintre cei 10 ani.</span><br/>
                        
                        <br/>
                        {this.afisareGrafic(1)}
                        
                        <p>&emsp;Aceasta regula asigura eliminarea companiilor <u>neperformante</u>, <u>neprofitabile</u> sau a companiilor <u>insuficient dezvoltate</u> care nu confera stabilitate pe perioada de timp medii.
                        </p>
                        <img style={{height: "315px", width: "450px"}} src={pic34} alt="new" />
                        <p>
                        &emsp;Conditia este suficient de restrictiva incat portofoliul tau sa nu includa companii cu un grad ridicat de risc, dar suficient de usor de respectat incat sa nu iti limiteze prea mult posibilitatile de investitie.
                        </p>
                        <img style={{height: "247px", width: "280px"}} src={pic31} alt="new" />
                        <p>
                        &emsp;Pentru a minimiza pe termen lung riscurile unor pierderi majore, un investitor inteligent evita sa investeasca in companii care nu
                        demonstreaza ca au capacitatea de a produce profit si de a fi sustenabile.
                        <i><br/>&emsp;Pentru a compensa o investitie esuata in totalitate, intr-o companie care se dovedeste a fi neperformanta, sunt necesare rezultate foarte greu de obtinut de catre un investitor.
                        </i>
                        </p>
                        <h2 onClick={() => this.printExplicatie()} style={{cursor: 'pointer', color: '#72d4d4'}}>Vezi aici explicatia grafica</h2>
                        <i>Orice pierdere necesita un castig mult mai mare si mai greu de obtinut pentru a reveni la suma initiala.</i>
                        <br/><br/>
                    </div>
                    : <div>
                        {this.printToaster(0)}
                        <br/><img style={{height: "120px", width: "150px"}}src={pic33} alt="new" />
                        <br/>
                        <strong style={{color: "red"}}>Regula 3 nu este respectata.</strong><br />
                        <strong style={{color: "red"}}>
                            {nr == 1 
                                ? "Compania nu a avut profituri intr-un an." 
                                : `Compania nu a avut profituri in ${nr} ani`}</strong><br /><br /><br />
                        <span style={{fontStyle: 'italic'}}>Regula 3 se refera la profitabilitatea companiei.</span><br/><br/>
                        <span style={{fontStyle: 'italic'}}>Descriere: Compania trebuie sa aiba profituri in fiecare dintre cei 10 ani.</span><br/>
                        
                        <br />
                        {this.afisareGrafic(0)}

                        <p>&emsp;Aceasta regula asigura eliminarea companiilor <u>neperformante</u>, <u>neprofitabile</u> sau a companiilor <u>insuficient dezvoltate</u> care nu confera stabilitate pe perioada de timp medii.
                        </p>
                        <img style={{height: "247px", width: "280px"}} src={pic31} alt="new" />
                        <p>
                        &emsp;Conditia este suficient de restrictiva incat portofoliul tau sa nu includa companii cu un grad ridicat de risc, dar suficient de usor de respectat incat sa nu iti limiteze prea mult posibilitatile de investitie.
                        </p>
                        <img style={{height: "250px", width: "316px"}} src={pic32} alt="new" />
                        <p>
                        &emsp;Pentru a minimiza pe termen lung riscurile unor pierderi majore, un investitor inteligent evita sa investeasca in companii care nu
                        demonstreaza ca au capacitatea de a produce profit si de a fi sustenabile.
                        <i><br/>&emsp;Pentru a compensa o investitie esuata in totalitate, intr-o companie care se dovedeste a fi neperformanta, sunt necesare rezultate foarte greu de obtinut de catre un investitor.
                        </i>
                        </p>
                        <h2 onClick={() => this.printExplicatie()} style={{cursor: 'pointer', color: '#72d4d4'}}>Vezi aici explicatia grafica</h2>
                        <i>Orice pierdere necesita un castig mult mai mare si mai greu de obtinut pentru a reveni la suma initiala.</i>
                        <br/><br/>
                    </div>}

                <button onClick={this.props.onChange}>Back</button>
            </div>
        );
    }
}

export default Rule3;