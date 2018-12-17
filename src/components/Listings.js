import React, { Component } from 'react'

class Listings extends Component {
  constructor(){
    super()
    this.state = {
      
    }
    this.loopListings = this.loopListings.bind(this)
  }

  listingView(){

  }
  loopListings(){
     const {listingData} = this.props

     if(listingData == undefined || listingData.length == 0){
       return "Sorry your filter did not match any listings"
     }

     return listingData.map((listing, index) => {
       return(<div className="listing-results_box" key={index}>
      <div className="listing-results_img" style={{
         backgroundImage:`linear-gradient( to right,rgba(0, 0, 0, 0.1),rgba(0, 0, 0, 0.1)), url(${listing.image})`
      }}>
        <div className="address">{listing.address}</div>
        {/* one the hover state */}
        <div className="user-details">
          <div className="user-details_info">
            <div className="user-img"></div>
            <div>
              <span className='user-details_name'>Nina Smith</span> <br />
              <span className='user-details_date'>Posted on: 5/09/17</span>
            </div>
          </div>

          <div className="user-details_specs">
            <div>
              <span>
                <i className="fas fa-home"></i> {listing.floorSpace}

              </span>

              <span>
                <i className="fas fa-couch"></i> unfurnished
              </span>

            </div>


            <div>
              <span>
                <i className="fas fa-bed"></i> {listing.rooms} bedrooms
              </span>
              <a href="!#">view more</a>

            </div>

          </div>
        </div>

        {/* end the hover state */}
      </div>
      <div className="listing-results_box-bottom">
        <span className='bottom-price'>${listing.price}</span>
        <span className='bottom-location'>
          <i className="fas fa-map-marker-alt"></i> {listing.city}, {listing.state}
        </span>

      </div>


    </div>)

     });
    
  }
  render() {
    return (
<section className='listing'>
  <section className='listing-search'>

    <input type="text" name='search' placeholder='Short stay' onChange={this.props.change}/>
  </section>

  <section className='listing-details'>
    <p>{this.props.globalState.filterData.length} results founded</p>
    <div className="listing-details_options">
      <select name="sort_by" id="" className='sort-by' onChange={this.props.change}>
        <option value="dsc">Lowest Price</option>
        <option value="asc">Highest Price</option>
      </select>
      <div className="listing-details_format">
        <i className="fas fa-th" onClick={this.props.changeView.bind(null,'box')}></i>
        <i className="fas fa-list" onClick={this.props.changeView.bind(null,'long')}></i>
      </div>
    </div>
  </section>



  <section className='listing-results'>
      
    {/* box */}
    {this.loopListings()}
    
    {/* End of box */}


  </section>
 

  <section>
    <ul className="listing-pagination">
      <li className='special'>Prev</li>
      <li className='active'>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li className='special'>Last</li>

    </ul>
  </section>

   </section>


)
}
}

export default Listings
