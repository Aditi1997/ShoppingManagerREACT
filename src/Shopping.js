import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Shopping extends Component{

  static PropTypes = {
    list: PropTypes.object.required,
    onAddItem : PropTypes.func.required,
    onDeleteItem : PropTypes.func.required
  }

  state = {
    values: {
      "name": "",
      "qty": 0,
      "unitPrice": 0
    }
  }

  updateValues = (value,type) => {
    if(type === 'name' || type ==='qty' || type==='unitPrice'){
      this.setState({
        values: {
          ...this.state.values,
          [type]:value
        }
      })
    }
  }

  render(){

    return (
      <div className='form-data'>
        <br/> Name  <input className='Name' type='text'
             placeholder='Enter name of item' value= {this.state.values.name}
             onChange={ (event) => this.updateValues(event.target.value,'name')}/>
        <br/><br/> Qty  <input className='Qty' placeholder='Enter Qty'
             type='number' value= {this.state.values.qty}
             onChange={ (event) => this.updateValues(event.target.value,'qty')}/>
        <br/><br/> unitPrice <input className='unitPrice'
            placeholder='Enter per unit price' type='number' value= {this.state.values.unitPrice}
            onChange={ (event) => this.updateValues(event.target.value,'unitPrice')}/>

            <div className='add-button'>
              <button onClick={() => this.props.onAddItem(this.state.values)} className='add-item'>Add</button>
            </div>

            <div className='shopping-cart'>
            <ol className='cart-items'>
              <p>Your cart has:</p>
              {this.props.list.map((item) => (
              <li key={item.Name}>
              <p>Name of item: {item.name} Total price: {item.unitPrice * item.qty}<button onClick={() => this.props.onDeleteItem(item)}>Delete</button></p>
              </li>
            ))}
            </ol>
            </div>

      </div>
    )
  }
}

export default Shopping
