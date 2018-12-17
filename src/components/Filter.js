import React, { Component } from 'react'

class Filter extends Component {
    constructor(){
        super()
        this.state = {

        }
        this.cities = this.cities.bind(this)
        this.homeTypes = this.homeTypes.bind(this)
        this.bedrooms = this.bedrooms.bind(this)
    }

    componentWillMount(){
        this.props.populateAction();
    }

    cities(){
        if(this.props.globalState.populateFormsData.cities != undefined){
        var {cities} = this.props.globalState.populateFormsData
       
         return cities.map((item) =>{
                return <option key={item} value={item}>{item}</option>
            })
        }
    }

     homeTypes(){
        if(this.props.globalState.populateFormsData.homeTypes != undefined){
        var {homeTypes} = this.props.globalState.populateFormsData
       
         return homeTypes.map((item) =>{
                return <option key={item} value={item}>{item}</option>
            })
        }
    }

     bedrooms(){
        if(this.props.globalState.populateFormsData.bedrooms != undefined){
        var {bedrooms} = this.props.globalState.populateFormsData
            
         return bedrooms.map((item) =>{
                     
                return <option key={item} value={item}>{item} +BR</option>
            })
        }
    }

  render() {
    return (
        <section  className='filter'>
        <div className="inside">
        <h3 className='filter-title'>filter</h3>
        <label htmlFor="city">City</label>
        <select name="city" id="" className='filter-option' onChange={this.props.change}>
            <option value="all">All</option>
            {this.cities()}
            
        </select>
        <label htmlFor="houseType">Home Type</label>
        <select name="houseType" id="" className='filter-option' onChange={this.props.change}>
            <option value="All">All</option>
            {this.homeTypes()}
            
        </select>
        <label htmlFor="rooms">Bedrooms</label>
        <select name="rooms" id="" className='filter-option' onChange={this.props.change}>
         <option value="All">All</option>
            {this.bedrooms()}
        </select>
        <div className='filter-range price'>
            <div className="filter-range_title">Price</div>
            <input type="text" name='min_price' className='min-price' onChange={this.props.change} value={this.props.globalState.min_price}/>
            <input type="text" name='max_price' className='min-price' onChange={this.props.change} value={this.props.globalState.max_price}/>

        </div>
        <div className='filter-range space'>
            <div className="filter-range_title">Floor Space</div>
            <input type="text" name='min_space' className='min_space' onChange={this.props.change} value={this.props.globalState.min_space}/>
            <input type="text" name='max_space' className='min_space' onChange={this.props.change} value={this.props.globalState.max_space}/>

        </div>
        <div className="filter-checkboxes">
        <div className="filter-range_title">Extras</div>
        
        <label htmlFor="elevator"><span>Elevator</span> 
        <input type="checkbox" name='elevator' value='elevator' onChange={this.props.change}/>
        </label>
       
        <label htmlFor="swimming-pool"><span>Swimming Pool</span> 
        <input type="checkbox" name='swimming_pool' value='swimming_pool' onChange={this.props.change}/>
        </label>
        <label htmlFor="fireplace"><span>Fireplace</span> 
        <input type="checkbox" name='fireplace' value='fireplace' onChange={this.props.change}/>
        </label>
        <label htmlFor="gym"><span>Gym</span> 
        <input type="checkbox" name='gym' value='gym' onChange={this.props.change}/>
        </label>    
       
            

        </div>

        
         </div>
        </section>
    )
  }
}

export default Filter;
