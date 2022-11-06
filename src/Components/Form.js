import React, { Component } from "react";
import Results from "./Results";
import update from 'react-addons-update';
import toast, { Toaster } from 'react-hot-toast';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom";
import { duration } from "@material-ui/core";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      sales: '',
      shares: '',
      price: '',
      assets: '',
      liab: '',
      bookValue: '',
      earnings: ['', '', '', '', '', '', '', '', '', ''],
      dividends: ['', '', '', '', '', '', '', '', '', ''],
      eps: ['', '', '', '', '', '', '', '', '', ''],
      x: 0,
      z: 1,
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

    this.saveCompany = () =>{
      if(this.state.name == null || this.state.name === ''){
        console.log('Completeaza campul Name pentru salvarea companiei!');
        this.savedFailed();
      }
      else{
        var companie = this.state;
        localStorage.setItem(companie.name, JSON.stringify(companie));
        this.savedSuccess(companie.name);
      }
      this.setState({ z: -this.state.z });
      console.log(this.state.z);

      this.resetSelect();
    }

    this.deleteCompany = () =>{
      var companie = this.state;
      var gasita = localStorage.getItem(companie.name)
      if(gasita == null){
        this.deleteFailed(companie.name);
      }
      else{
        localStorage.removeItem(companie.name);
        this.deleteSuccess(companie.name);
      }

      this.resetSelect();
    }

    this.resetSelect=()=>{
      var selectList = document.getElementById("mySelect");
      while (selectList.firstChild) {
        selectList.firstChild.remove()
      }

      this.initSelect2();
      // this.setState({
      //   name: '',
      //   sales: '',
      //   shares: '',
      //   price: '',
      //   assets: '',
      //   liab: '',
      //   earnings: [null, null, null, null, null, null, null, null, null, null],
      //   dividends: [null, null, null, null, null, null, null, null, null, null],
      //   eps: [null, null, null, null, null, null, null, null, null, null]
      // })
    }

    this.clearList = () =>{
      localStorage.clear();
      this.clearListSuccess();
      this.resetSelect();
    }
    
    this.loadCompany = (evt) =>{
      console.log(evt.target.value);
      var companie = JSON.parse( localStorage.getItem(evt.target.value) );
      console.log(companie);

      this.loadedSuccess(companie.name);

      this.setState({
      name: companie.name,
      sales: companie.sales,
      shares: companie.shares,
      price: companie.price,
      assets: companie.assets,
      liab: companie.liab,
      bookValue:companie.bookValue,
      earnings: companie.earnings,
      dividends: companie.dividends,
      eps:companie.eps,
      })
    }

    this.getAllStorage2 = () => {
      var archive = [],
        keys = Object.keys(localStorage),
        i = 0, key;

      for (; key = keys[i]; i++) {
        archive.push( key + '=' + localStorage.getItem(key));
      }

      console.log(Object.keys(localStorage))
      console.log(archive);
    }
  }

  componentDidMount(){
    this.initSelect2();
  }

  initSelect2 = () => {
    // ADDED to try to fix the BUG on select
    const emptyCompany = {
      name: '',
      sales: '',
      shares: '',
      price: '',
      assets: '',
      liab: '',
      bookValue: '',
      earnings: ['', '', '', '', '', '', '', '', '', ''],
      dividends: ['', '', '', '', '', '', '', '', '', ''],
      eps: ['', '', '', '', '', '', '', '', '', ''],
    }

    localStorage.setItem(emptyCompany.name, JSON.stringify(emptyCompany));

    var listKeys = Object.keys(localStorage);
    var selectList = document.getElementById("mySelect");

    for (var i = 0; i < listKeys.length; i++) {
      var option = document.createElement("option");
      option.value = listKeys[i];
      option.text = listKeys[i];
      selectList.appendChild(option);
      this.sortSelect(selectList);
    }
  }

  componentDidUpdate(){
    var testt = document.getElementById("mySelect");
    if(this.state.x === 0 && testt.options.length == 0){
      this.initSelect2();
    }
  }

  sortSelect = (selElem) => {
    var tmpAry = new Array();
    for (var i=0;i<selElem.options.length;i++) {
        tmpAry[i] = new Array();
        tmpAry[i][0] = selElem.options[i].text;
        tmpAry[i][1] = selElem.options[i].value;
    }
    tmpAry.sort();
    while (selElem.options.length > 0) {
        selElem.options[0] = null;
    }
    for (var i=0;i<tmpAry.length;i++) {
        var op = new Option(tmpAry[i][0], tmpAry[i][1]);
        selElem.options[i] = op;
    }
    return;
  }

  loadedSuccess = (name) => {
    toast.success(`${name} incarcata cu succes`,
    {
      style: {
        borderRadius: '25px',
        background: '#BBFFB2'
      },
    }
    );
  }

  savedSuccess = (name) => {
    toast.success(`${name} salvata cu succes`,
    {
      style: {
        borderRadius: '25px',
        background: '#BBFFB2',
      },
    }
    );
  }

  savedFailed = () => {
    toast.error(`Adauga un nume!`,
    {
      style: {
        borderRadius: '25px',
        background: '#FFB2B2',
      },
    }
    );
  }

  deleteSuccess = (name) => {
    toast.success(`${name} a fost stearsa cu succes`,
    {
      style: {
        borderRadius: '25px',
        background: '#BBFFB2',
      },
    }
    );
  }

  deleteFailed = (name) => {
    if (name == null || name == '') {
      toast.error(`Compania nu a fost gasita`,
        {
          style: {
            borderRadius: '25px',
            background: '#FFB2B2',
          },
        }
      );
    }
    else {
      toast.error(`${name} nu a fost gasita`,
        {
          style: {
            borderRadius: '25px',
            background: '#FFB2B2',
          },
        }
      );
    }
  }

  clearListSuccess = () => {
    toast.success(`Lista curata cu succes`,
      {
        icon: <img style={{ height: "25px", width: "25px" }}
          src='https://image.flaticon.com/icons/png/512/1214/1214926.png'>
        </img>,
        style: {
          borderRadius: '25px',
          background: '#BBFFB2',
        },
      }
    );
  }

  render() {

    var listKeys = Object.keys(localStorage);

    // const companieCitita = localStorage.getItem('a');

    if (this.state.x === 0) {
      return (
        <div className="menuRight">
          <Toaster />

          <div>
            <label htmlFor='name'>Company Name</label>
            <input type='text' className="formInputStyle" name='name' id='name' onChange={this.handleChange} value={this.state.name}/>
          </div>
          
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
            <br /><br />
            <label htmlFor='mySelect'>Companie de incarcat:</label>
            <select id="mySelect" className="formInputStyle" onChange={this.loadCompany}>
            </select>
          </div>
          <button style={{marginTop:"40px"}} value='Analyse' onClick={this.goToResult}> Analyse </button>
          <button style={{marginTop:"20px"}} onClick={this.saveCompany}>Save Company</button>
          <button style={{marginTop:"20px"}} onClick={this.deleteCompany}>Delete Company</button>

          <button style={{marginTop:"20px"}} onClick={this.clearList}>Clear list</button>
          <button style={{marginTop:"20px"}} onClick={this.props.onChange}>Back</button>

        </div>);
    }
    {
      return (<Results props={this.state} onChange={this.back}/>)
    }
  }
}

export default Form;