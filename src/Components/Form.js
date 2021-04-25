import React from "react";
import Results from "./Results";
import update from 'react-addons-update';

import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // sales: 0,
      // shares: 0,
      // price: 0,
      // assets: 0,
      // liab: 0,
      // bookValue: 0,
      // earnings: [0,0,0,0,0,0,0,0,0,0],
      // dividends: [0,0,0,0,0,0,0,0,0,0],
      // eps: [0,0,0,0,0,0,0,0,0,0],
      // x: 0
      sales: null,
      shares: null,
      price: null,
      assets: null,
      liab: null,
      bookValue:null,
      earnings: [null,null,null,null,null,null,null,null,null,null],
      dividends: [null,null,null,null,null,null,null,null,null,null],
      eps:[null,null,null,null,null,null,null,null,null,null],
      x: 0
    };

    this.handleChange = (evt) => {
      this.setState({
        [evt.target.name]: evt.target.value
      })
    }

    this.handleChangeArray = (evt) => {
      this.setState(update(this.state, {
        [evt.target.name]: {
          [evt.target.id]: {
            $set: evt.target.value
          }
        }
      }));
   }

    this.goToResult = () => {
      this.setState({ x: 1 });
    }

    this.back = () => {
      this.setState({ x: 0 });
    }

  }

  render() {
    if (this.state.x === 0) {
      return (
        <div className="menuRight">
          <div>
            <label htmlFor='sales'>Sales</label>
            <input type='number' className="formInputStyle" name='sales' id='sales' onChange={this.handleChange} value={this.state.sales}/>
          </div>

          <div>
            <label htmlFor='shares'>Number of outstanding shares</label>
            <input type='number' className="formInputStyle" name='shares' id='shares' onChange={this.handleChange} value={this.state.shares}/>
          </div>

          <div>
            <label htmlFor='price'>Stock Price</label>
            <input type='text' className="formInputStyle" name='price' id='price' onChange={this.handleChange} value={this.state.price}/>
          </div>

          <div>
            <label htmlFor='assets'>Current Assets</label>
            <input type='text' className="formInputStyle" name='assets' id='assets' onChange={this.handleChange} value={this.state.assets}/>
          </div>

          <div>
            <label htmlFor='liab'>Current Liabilities</label>
            <input type='text' className="formInputStyle" name='liab' id='liab' onChange={this.handleChange} value={this.state.liab}/>
          </div>

          <div>
            <label htmlFor='bookvalue'>Book Value</label>
            <input type='text' className="formInputStyle" name='bookValue' id='bookvalue' onChange={this.handleChange} value={this.state.bookValue}/>
          </div>

          <div style={{ textAlign: 'left' }}>Earnings</div>
          <div>
            <label htmlFor='e1'>2021</label>
            <input type='number' className="formInputStyle" id='0' name='earnings' onChange={this.handleChangeArray} value={this.state.earnings[0]}/>
            <br />
            <label htmlFor='e2'>2020</label>
            <input type='number' className="formInputStyle" id='1' name='earnings' onChange={this.handleChangeArray} value={this.state.earnings[1]}/>
            <br />
            <label htmlFor='e3'>2019</label>
            <input type='number' className="formInputStyle" id='2' name='earnings' onChange={this.handleChangeArray} value={this.state.earnings[2]}/>
            <br />
            <label htmlFor='e4'>2018</label>
            <input type='number' className="formInputStyle" id='3' name='earnings' onChange={this.handleChangeArray} value={this.state.earnings[3]}/>
            <br />
            <label htmlFor='e5'>2017</label>
            <input type='number' className="formInputStyle" id='4' name='earnings' onChange={this.handleChangeArray} value={this.state.earnings[4]}/>
            <br />
            <label htmlFor='e6'>2016</label>
            <input type='number' className="formInputStyle" id='5' name='earnings' onChange={this.handleChangeArray} value={this.state.earnings[5]}/>
            <br />
            <label htmlFor='e7'>2015</label>
            <input type='number' className="formInputStyle" id='6' name='earnings' onChange={this.handleChangeArray} value={this.state.earnings[6]}/>
            <br />
            <label htmlFor='e8'>2014</label>
            <input type='number' className="formInputStyle" id='7' name='earnings' onChange={this.handleChangeArray} value={this.state.earnings[7]}/>
            <br />
            <label htmlFor='e9'>2013</label>
            <input type='number' className="formInputStyle" id='8' name='earnings' onChange={this.handleChangeArray} value={this.state.earnings[8]}/>
            <br />
            <label htmlFor='e10'>2012</label>
            <input type='number' className="formInputStyle" id='9' name='earnings' onChange={this.handleChangeArray} value={this.state.earnings[9]}/>
          </div>

          <div style={{ textAlign: 'left' }}>Dividends</div>
          <div>
            <label htmlFor='d1'>2021</label>
            <input type='number' className="formInputStyle" id='0' name='dividends' onChange={this.handleChangeArray} value={this.state.dividends[0]}/>
            <br />
            <label htmlFor='d2'>2020</label>
            <input type='text' className="formInputStyle" id='1' name='dividends' onChange={this.handleChangeArray} value={this.state.dividends[1]}/>
            <br />
            <label htmlFor='d3'>2019</label>
            <input type='text' className="formInputStyle" id='2' name='dividends' onChange={this.handleChangeArray} value={this.state.dividends[2]}/>
            <br />
            <label htmlFor='d4'>2018</label>
            <input type='text' className="formInputStyle" id='3' name='dividends' onChange={this.handleChangeArray} value={this.state.dividends[3]}/>
            <br />
            <label htmlFor='d5'>2017</label>
            <input type='text' className="formInputStyle" id='4' name='dividends' onChange={this.handleChangeArray} value={this.state.dividends[4]}/>
            <br />
            <label htmlFor='d6'>2016</label>
            <input type='text' className="formInputStyle" id='5' name='dividends' onChange={this.handleChangeArray} value={this.state.dividends[5]}/>
            <br />
            <label htmlFor='d7'>2015</label>
            <input type='text' className="formInputStyle" id='6' name='dividends' onChange={this.handleChangeArray} value={this.state.dividends[6]}/>
            <br />
            <label htmlFor='d8'>2014</label>
            <input type='text' className="formInputStyle" id='7' name='dividends' onChange={this.handleChangeArray} value={this.state.dividends[7]}/>
            <br />
            <label htmlFor='d9'>2013</label>
            <input type='text' className="formInputStyle" id='8' name='dividends' onChange={this.handleChangeArray} value={this.state.dividends[8]}/>
            <br />
            <label htmlFor='d10'>2012</label>
            <input type='text' className="formInputStyle" id='9' name='dividends' onChange={this.handleChangeArray} value={this.state.dividends[9]}/>
          </div>

          <div style={{ textAlign: 'left' }}>Earnings per Share (EPS)</div>
          <div>
            <label htmlFor='eps1'>2021</label>
            <input type='number' className="formInputStyle" id='0' name='eps' onChange={this.handleChangeArray} value={this.state.eps[0]}/>
            <br />
            <label htmlFor='eps2'>2020</label>
            <input type='text' className="formInputStyle" id='1' name='eps' onChange={this.handleChangeArray} value={this.state.eps[1]}/>
            <br />
            <label htmlFor='eps3'>2019</label>
            <input type='text' className="formInputStyle" id='2' name='eps' onChange={this.handleChangeArray} value={this.state.eps[2]}/>
            <br />
            <label htmlFor='eps4'>2018</label>
            <input type='text' className="formInputStyle" id='3' name='eps' onChange={this.handleChangeArray} value={this.state.eps[3]}/>
            <br />
            <label htmlFor='eps5'>2017</label>
            <input type='text' className="formInputStyle" id='4' name='eps' onChange={this.handleChangeArray} value={this.state.eps[4]}/>
            <br />
            <label htmlFor='eps6'>2016</label>
            <input type='text' className="formInputStyle" id='5' name='eps' onChange={this.handleChangeArray} value={this.state.eps[5]}/>
            <br />
            <label htmlFor='eps7'>2015</label>
            <input type='text' className="formInputStyle" id='6' name='eps' onChange={this.handleChangeArray} value={this.state.eps[6]}/>
            <br />
            <label htmlFor='eps8'>2014</label>
            <input type='text' className="formInputStyle" id='7' name='eps' onChange={this.handleChangeArray} value={this.state.eps[7]}/>
            <br />
            <label htmlFor='eps9'>2013</label>
            <input type='text' className="formInputStyle" id='8' name='eps' onChange={this.handleChangeArray} value={this.state.eps[8]}/>
            <br />
            <label htmlFor='eps10'>2012</label>
            <input type='text' className="formInputStyle" id='9' name='eps' onChange={this.handleChangeArray} value={this.state.eps[9]}/>
          </div>
          <button style={{marginTop:"40px"}} value='Analyse' onClick={this.goToResult}> Analyse </button>
          <button style={{marginTop:"20px"}} onClick={this.props.onChange}>Back</button>

          {console.log(this.state)}
        </div>);
    }
    {
      return (<Results props={this.state} onChange={this.back}/>)
    }
  }
}

export default Form;