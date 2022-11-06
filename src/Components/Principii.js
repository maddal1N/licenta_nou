import React from "react";

class Principii extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className="menu">
                <h1 style={{color: "white"}}>Principii fundamentale</h1>
                <ul style={{fontSize: 22, textAlign: "left"}}>
                    <li>Actiunile detinute nu sunt doar niste litere si cifre pe un ecran, ci reprezinta dovada de proprietate a unei parti dintr-o companie, avand o valoare intrinseca care nu depinde de cotatia bursiera</li>
                    <br></br>
                    <li>Piata este un pendul care oscileaza permanent intre optimism nesustenabil (care creaza preturi prea mari) si pesimism nejustificat (care creaza preturi prea mici)
                        <br></br>
                        <span>Investitorul inteligent este un realist care vinde optimistilor si cumpara de la pesimisti</span>
                    </li>
                    
                    <br></br>
                    <li>Valoarea viitoarea oricarei investitii este o functie a pretului din prezent. Cu cat pretul platit in prezent este mai mare, cu atat randamentul investitiei va fi mai mic</li>
                    <br></br>
                    <li>Indiferent de cat de precaut este, niciun investitor nu poate elimina riscul de a gresi. Cea mai buna metoda de a minimiza sansele de a gresi este sa insiste asupra ideii lui Graham de ,,marja de siguranta”, adica niciodata sa nu plateasca prea mult pentru o investitie, indiferent de cat de atragatoare poate parea</li>
                </ul>
                <button style={{marginTop:"20px"}} onClick={this.props.onChange}>Back</button>
            </div>
        )
    }
}

export default Principii;