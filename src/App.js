import React, { Component } from 'react';
import Header from './components/Header.js';
import Filter from './components/Filter.js';
import Listings from './components/Listings.js';
import listingData from './components/data/listingData.js';
 
import './scss/App.scss';

class App extends Component {
  constructor(){
    super()
    this.state = {
      listingData,
      city: 'All',
      houseType:'All',
      rooms:0,
      min_price: 50000,
      max_price: 500000,
      min_space: 50,
      max_space: 3000,
      elevator: false,
      swimming_pool: false,
      fireplace: false,
      gym: false,
      filterData: listingData,
      populateFormsData: '',
      sort_by: 'dsc',
      view: 'box',
      search: ''
 
    }
    this.change = this.change.bind(this);
    this.filterData = this.filterData.bind(this);
    this.populateForm = this.populateForm.bind(this)
    this.changeView = this.changeView.bind(this)
  }

  componentWillMount(){
     var listingData = this.state.listingData.sort((a, b) => {
       return a.price - b.price
     })
    this.setState({
      listingData
    })
  }
  change(event){
    const name = event.target.name;
    const value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value

    this.setState({
      [name]: value
    }, () => {
      console.log(this.state)
      this.filterData()
    })
  }

  changeView(view){
     //check the view of the layout
  }
    
  filterData(){
      let newData = this.state.listingData.filter((item) => {
        return item.price >= this.state.min_price && item.price <= this.state.max_price && item.floorSpace >= this.state.min_space && item.floorSpace <= this.state.max_space && item.rooms >= this.state.rooms
      }) 

      if(this.state.city !==  'All'){
        newData = newData.filter((item) =>{
          return item.city == this.state.city
        })
      }
      if(this.state.houseType !==  'All'){
        newData = newData.filter((item) =>{
          return item.houseType == this.state.houseType
        })
      }

      if(this.state.sort_by == 'dsc'){
        newData = newData.sort((a,b) => {
          return a.price -b.price
        })
      }
      if(this.state.sort_by == 'asc'){
        newData = newData.sort((a,b) => {
          return b.price - a.price
        })
      }

      if(this.state.search != ''){
        newData = newData.filter((item) =>{
          var city = item.city.toLowerCase()
          var searchText = this.state.search.toLowerCase()
          var n = city.match(searchText)

          if(n != null){
            return true
          }
        })
      }

       

      this.setState({
        filterData: newData 
      })
  }

  populateForm(){
    //city
    var cities = this.state.listingData.map((item) => {
      return item.city
    })
    cities = new Set(cities)
    cities = [...cities]
    cities = cities.sort();
    

    //homeType
    var homeTypes = this.state.listingData.map((item) => {
      return item.houseType
    })
    homeTypes = new Set(homeTypes)
    homeTypes = [...homeTypes]
    homeTypes = homeTypes.sort();

    
    //bedrooms
    var bedrooms = this.state.listingData.map((item) => {
      return item.rooms
    })
    bedrooms = new Set(bedrooms)
    bedrooms = [...bedrooms]
    bedrooms = bedrooms.sort()

    this.setState({
      populateFormsData: {
        homeTypes,
        bedrooms,
        cities
      }
    }, () => {
      // console.log(this.state)
    })
  }

  render() {
     
    return (
       <div>
        <Header />
        <section id='content-area'>
          <Filter change={this.change} globalState={this.state} populateAction={this.populateForm}/>
          <Listings listingData = {this.state.filterData} change={this.change} globalState={this.state} changeView={this.changeView}/>
        </section>
      

      </div>
       
    );
  }
}

export default App;
