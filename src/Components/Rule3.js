import React from "react";

class Rule3 extends React.Component{
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
        company.earnings.forEach(e => { 
            e <= 0 ? passed = 0 : passed = passed
        })
        this.changeColor(passed);
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
                ? "Compania are profituri in fiecare dintre cei 10 ani." 
                : "Compania nu are profituri in fiecare dintre cei 10 ani."}</strong>
                
                {passed == 1
                    ? <div>
                        <br /><br /><br />
                        <strong style={{color: "Lightgreen"}}>Regula 3 este respectata.</strong><br />
                        <span style={{fontStyle: 'italic'}}>Regula 3 se refera la profitabilitatea companiei.</span><br/><br/>
                        <span style={{fontStyle: 'italic'}}>Descriere: Compania trebuie sa aiba profituri in fiecare dintre cei 10 ani.</span><br/>
                        <img style={{height: "255px", width: "425px"}}
                        src="https://nowfly.co.uk/wp-content/uploads/2019/09/website-profit.jpg" alt="new" />
                        <p style={{textAlign: 'left'}}>&nbsp;&nbsp;&nbsp;&nbsp;Aceasta regula asigura eliminarea companiilor neperformante, neprofitabile sau a companiilor insuficient dezvoltate care nu confera stabilitate pe perioada de timp medii.
                        <br/>&nbsp;&nbsp;&nbsp;&nbsp;Conditia este suficient de restrictiva incat portofoliul tau sa nu includa companii cu un grad ridicat de risc, dar suficient de usor de respectat incat sa nu iti limiteze prea mult posibilitatile de investitie.
                        </p>
                    </div>
                    : <div>
                        <br /><br /><br />
                        <strong style={{color: "red"}}>Regula 3 nu este respectata.</strong><br />
                        <strong style={{color: "red"}}>
                            {nr == 1 
                                ? "Compania nu a avut profituri intr-un an." 
                                : `Compania nu a avut profituri in ${nr} ani`}</strong><br />
                        <span style={{fontStyle: 'italic'}}>Regula 3 se refera la profitabilitatea companiei.</span><br/><br/>
                        <span style={{fontStyle: 'italic'}}>Descriere: Compania trebuie sa aiba profituri in fiecare dintre cei 10 ani.</span><br/>
                        <img style={{height: "255px", width: "425px"}}
                        src="https://nowfly.co.uk/wp-content/uploads/2019/09/website-profit.jpg" alt="new" />
                        <p style={{textAlign: 'left'}}>&nbsp;&nbsp;&nbsp;&nbsp;Aceasta regula asigura eliminarea companiilor neperformante, neprofitabile sau a companiilor insuficient dezvoltate care nu confera stabilitate pe perioada de timp medii.
                        <br/>&nbsp;&nbsp;&nbsp;&nbsp;Conditia este suficient de restrictiva incat portofoliul tau sa nu includa companii cu un grad ridicat de risc, dar suficient de usor de respectat incat sa nu iti limiteze prea mult posibilitatile de investitie.
                        </p>
                    </div>}

                <button onClick={this.props.onChange}>Back</button>
            </div>
        );
    }
}

export default Rule3;