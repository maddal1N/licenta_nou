import React from "react";
import pic1 from './pic1.png'
import pic11 from './pic1.1.png'
import pic12 from './pic1.2.2.png'
import pic13 from './pic1.3.png'
import passedPic from './passed.png'
import failedPic from './failed.png'

import { toast, Toaster } from 'react-hot-toast';

import { ToastContainer, toast as toastify } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Rule1 extends React.Component{
    constructor(props){
        super(props);
    }

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

    printToaster = (i) => {
        i == 1 ?
            toast.success('Regula 1 este respectata.',
                {
                    icon: <img style={{ height: "40px", width: "40px" }}
                        src={passedPic}>
                        {/* src='https://image.flaticon.com/icons/png/512/1067/1067447.png'> */}
                        {/* src='https://image.flaticon.com/icons/png/512/2954/2954893.png'> */}
                    </img>,
                    id: 'succces',
                    style: {
                        borderRadius: '25px',
                        background: '#BBFFB2',
                    },
                }
            )
            :
            toast.error('Regula 1 nu este respectata',
                {
                    icon: <img style={{ height: "30px", width: "30px" }}
                        // src='https://image.flaticon.com/icons/png/512/564/564619.png'>
                        src={failedPic}>
                    </img>,
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
                Termenul de fond tranzacționat la bursă <span>(ETF - Exchange Traded Fund)</span> se referă la un instrument financiar care este compus dintr-un un anumit set de acțiuni. 
                Aceste ETF-uri se tranzacționează la bursă la fel ca acțiunile normale și urmăresc acest set de acțiuni la fel ca un indice.<br/>
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
        let passed = false;
        var company = this.props.props;
        console.log("Date companie rule 1 ")
        console.log(company)

        var rev = 500;

        return(
            <div className="menu">
                <h1 id="h">Regula 1</h1>

                <span>
                    <strong>{company.sales >= rev 
                    ? `Veniturile totale sunt mai mari de $${rev} mil.` 
                    : `Veniturile totale sunt mai mici de $${rev} mil.` 
                    }</strong>
                </span>
                <Toaster/>
                <ToastContainer
                    bodyClassName="toastBody"
                    style={{ width: "450px" }}
                />

                {company.sales >= rev
                    ? <div>
                        {this.printToaster(1)}
                        <br /><br /><br />
                        <strong style={{color: "Lightgreen"}}>Regula 1 este respectata.</strong><br />
                        <span className="goldText" style={{fontStyle: 'italic'}}>Regula 1 se refera la dimensiunea adecvată a companiei.</span><br/><br/>
                        <span style={{fontStyle: 'italic'}}>Descriere: Veniturile anuale ale companiei trebuie sa fie mai mari de ${rev} mil.</span>
                        <h2>Venit anual &gt; {rev}</h2>
                        <img style={{height: "255px", width: "425px"}} src={pic1} alt="new" />
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;Ideea principala este de a elimina companiile mici, care in general au o expunere mai mare catre risc. Acest lucru poate fi datorat mai multor factori, precum: compania este noua pe piata, performanta sa este mai sensibila la contextul economic general sau nu detine o cota de piata suficient de mare incat sa poata considera ca detine un avantaj competititiv la nivelul sectorului in care activeaza.
                        </p>
                        <p>
                        &emsp;In general, companiile mari au rezultate constante. Vanzarile si profiturile nu variaza foarte mult, analistii putand astfel sa realizeze predictii suficient de apropiate de realitate, ceea ce determina o volatilitate scazuta a actiunilor.
                        </p>
                        <img style={{height: "376px", width: "341px"}} src={pic12} alt="new" />
                        <br/><p>&emsp;Selectand companii suficient de mari, asiguri portfoliului tau stabilitate si predictibilitate.
                        </p>
                        <p>
                        &emsp;Rezultatele companiilor mici pot fluctua de la trimestru la trimestru. Pretul actiunilor este volatil si imprevizibil. De asemenea, companiile mici implica riscuri mai mari, la fel ca si oportunitati mai mari de crestere. 
                        <br/>&emsp;Cheia este sa alegi companii cu rezultate precedente solide ce pot fi mentinute, cu situatii financiare bune si posibilitati de crestere. 
                        <br/>&emsp;Riscurile nu trebuie evitate complet, ci gestionate inteligent.
                        </p>
                        <img style={{height: "283px", width: "322px"}} src={pic13} alt="new" />
                        <i><br/>
                        &emsp;<span>TIP:</span> Pentru ca riscul asociat investitiei in companii mici poate fi prea mare, acesta poate fi micsorat investind in ETF-uri precum Vanguard Small Cap Value ETF (VBR) sau iShares Russell 2000 ETF.
                        </i><br/>
                        <h2 onClick={() => this.printExplicatie()} style={{cursor: 'pointer', color: '#72d4d4'}}>Ce este un ETF?</h2>
                        <br/>
                    </div>
                    : <div>
                        {this.printToaster(0)}
                        <img style={{height: "138px", width: "200px"}} src={pic11} alt="new" />
                        <br/><br/><br/>
                        <strong style={{color: "red"}}>Regula 1 nu este respectata.</strong><br/>
                        <span style={{fontStyle: 'italic'}}>Regula 1 se refera la dimensiunea adecvată a companiei.</span><br/><br/>
                        <span style={{fontStyle: 'italic'}}>Descriere: Veniturile anuale ale companiei trebuie sa fie mai mari de ${rev} mil.</span>
                        <h2>Venit anual &lt; {rev}</h2>
                        <img style={{height: "255px", width: "425px"}} src={pic1} alt="new" />
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;Ideea principala este de a elimina companiile mici, care in general au o expunere mai mare catre risc. Acest lucru poate fi datorat mai multor factori, precum: compania este noua pe piata, performanta sa este mai sensibila la contextul economic general sau nu detine o cota de piata suficient de mare incat sa poata considera ca detine un avantaj competititiv la nivelul sectorului in care activeaza.
                        </p>
                        <p>
                        &emsp;In general, companiile mari au rezultate constante. Vanzarile si profiturile nu variaza foarte mult, analistii putand astfel sa realizeze predictii suficient de apropiate de realitate, ceea ce determina o volatilitate scazuta a actiunilor.
                        </p>
                        <img style={{height: "376px", width: "341px"}} src={pic12} alt="new" />
                        <br/><p>&emsp;Selectand companii suficient de mari, asiguri portfoliului tau stabilitate si predictibilitate.
                        </p>
                        <p>
                        &emsp;Rezultatele companiilor mici pot fluctua de la trimestru la trimestru. Pretul actiunilor este volatil si imprevizibil. De asemenea, companiile mici implica riscuri mai mari, la fel ca si oportunitati mai mari de crestere. 
                        <br/>&emsp;Cheia este sa alegi companii cu rezultate precedente solide ce pot fi mentinute, cu situatii financiare bune si posibilitati de crestere. 
                        <br/>&emsp;Riscurile nu trebuie evitate complet, ci gestionate inteligent.
                        </p>
                        <img style={{height: "283px", width: "322px"}} src={pic13} alt="new" />
                        <i><br/>
                        &emsp;<span>TIP:</span> Pentru ca riscul asociat investitiei in companii mici poate fi prea mare, acesta poate fi micsorat investind in ETF-uri precum Vanguard Small Cap Value ETF (VBR) sau iShares Russell 2000 ETF.
                        </i>
                        <br/>
                        <h2 onClick={() => this.printExplicatie()} style={{cursor: 'pointer', color: '#72d4d4'}}>Ce este un ETF?</h2>
                        <br/>
                    </div>}

                <button onClick={this.props.onChange}>Back</button>
            </div>
        );
    }
}

export default Rule1;