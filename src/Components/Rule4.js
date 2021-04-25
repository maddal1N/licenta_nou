import React from "react";

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

    render(){
        var company = this.props.props;
        console.log("Date companie rule 4 ")
        console.log(company)

        // var passed = 1;

        var nr = 0
        company.dividends.forEach(e => { 
            // e <= 0 ? passed = 0 : passed = passed
            e <= 0 ? nr = nr + 1 : nr = nr
        })
        // console.log("Rule 4 passed:" + passed);

        return(
            <div className="menu">
                <h1 id="h">Regula 3</h1>
                <strong>{nr == 0
                ? "Compania are profituri in fiecare dintre cei 10 ani." 
                : "Compania nu are profituri in fiecare dintre cei 10 ani."}</strong>
                
                {nr == 0
                    ? <div>
                        <br /><br /><br />
                        <strong style={{color: "Lightgreen"}}>Regula 4 este respectata.</strong><br />
                        <span style={{fontStyle: 'italic'}}>Regula 4 se refera la plata constanta a dividendelor.</span><br/><br/>
                        <span style={{fontStyle: 'italic'}}>Descriere: Compania a platit dividende in fiecare an timp de cel putin 10 ani consecutiv.</span><br/>
                        <img style={{height: "255px", width: "425px"}}
                        src="https://cdn.romania-insider.com/cdn/ff/mkt7wsO9hDoN7rxivdGYq-yvFC5vkcIdVJy4lVe3kKI/1613375522/public/styles/article_large_image/public/2020-05/dividends_id_166719944_c_adrian825_dreamstime.com_.jpg" alt="new" />
                        <p style={{textAlign: 'left'}}>&nbsp;&nbsp;&nbsp;&nbsp;Este recomandat sa investesti in companii care platesc dividende. Dividendele reprezinta o forma de cash flow pe care il primesti si pe care il poti reinvesti. Acest aspect poate fi foarte important mai ales in perioadele in care actiunile companiei sunt subestimate.
                        <br/>&nbsp;&nbsp;&nbsp;&nbsp;Plata consecventă a dividendelor indică, de asemenea, calitatea companiei și a câștigurilor pe care le generează. Aceasta capacitate de a plati constant dividende trimite un mesaj puternic actionarilor in legatura cu situatia stabila si sustenabilitatea companiei.
                        </p>
                    </div>
                    : <div>
                        <br /><br /><br />
                        <strong style={{color: "red"}}>Regula 4 nu este respectata.</strong><br />
                        <strong style={{color: "red"}}>
                            {nr == 1 
                                ? "Compania nu a platit dividende intr-un an." 
                                : `Compania nu a platit dividende in ${nr} ani`}</strong><br />
                        <span style={{fontStyle: 'italic'}}>Regula 4 se refera la plata constanta a dividendelor.</span><br/><br/>
                        <span style={{fontStyle: 'italic'}}>Descriere: Compania a platit dividende in fiecare an timp de cel putin 10 ani consecutiv.</span><br/>
                        <img style={{height: "255px", width: "425px"}}
                        src="https://cdn.romania-insider.com/cdn/ff/mkt7wsO9hDoN7rxivdGYq-yvFC5vkcIdVJy4lVe3kKI/1613375522/public/styles/article_large_image/public/2020-05/dividends_id_166719944_c_adrian825_dreamstime.com_.jpg" alt="new" />
                        <p style={{textAlign: 'left'}}>&nbsp;&nbsp;&nbsp;&nbsp;Este recomandat sa investesti in companii care platesc dividende. Dividendele reprezinta o forma de cash flow pe care il primesti si pe care il poti reinvesti. Acest aspect poate fi foarte important mai ales in perioadele in care actiunile companiei sunt subestimate.
                        <br/>&nbsp;&nbsp;&nbsp;&nbsp;Plata consecventă a dividendelor indică, de asemenea, calitatea companiei și a câștigurilor pe care le generează. Aceasta capacitate de a plati constant dividende trimite un mesaj puternic actionarilor in legatura cu situatia stabila si sustenabilitatea companiei.
                        </p>
                    </div>}

                <button onClick={this.props.onChange}>Back</button>
            </div>
        );
    }
}

export default Rule4;