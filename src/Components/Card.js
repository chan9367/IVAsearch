import React, { Component } from "react";
import SearchField from "./SearchField";
import axios from "axios";



class Card extends Component {
    constructor(props){
      super(props);
        this.state={
          Data: [],
          searchInput: "",
        };
      }
  
  
  handleInput = (event) => {
    this.setState({searchInput: event.target.value});
  }
  handleSearch = () =>{
    const searchInput = this.state.searchInput;
    const API_KEY = "b1abf4e69d4a43f0b628f27ed2edb507"; 
    const url = "https://ee.iva-api.com/api/Entertainment/Search/?Title=" + searchInput + "&Take=42&subscription-Key=" + API_KEY;
    axios
      .get(url, { params: {key: API_KEY}})
      .then((response) =>{
       this.setState({Data: response.data.Hits});
       this.setState({showRandom : false});
       console.log(response.data.Hits);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render(){
     return(
       <div>
         <SearchField
           value = {this.state.searchInput}
           onChange = {this.handleInput}
           onSearch = {this.handleSearch}
         />
        <div className="row row-cols-1 row-cols-md-3 mt-5">
          {this.state.Data.map(data => {
            return (
              <div  className ="col mb-4">
               <div class="card border-danger cardSize" >
               <div class="card-body text-danger">
                <h6 class="card-text ">{data.Source.Title}</h6>
                <h6 class="card-text ">{data.Source.Year}</h6>
                <h6 class="card-text ">{data.Source.ProgramType}</h6>
               </div>
               </div>
             </div>
            )
          })}
             <div><img src={this.state.randomData}/></div>
        </div>
       </div>
     );
    }
  }
  
  export default Card;