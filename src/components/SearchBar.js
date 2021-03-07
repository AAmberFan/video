import React from 'react';

class SearchBar extends React.Component {
     state = { value: '' };
     submitHandler = (ev) =>{
          ev.preventDefault();
          this.props.onSubmit(this.state.value);
     }
     render() {
          return (
               <div className="ui segment">
                    <form className="ui form" onSubmit={this.submitHandler}>
                         <div className="field">
                              <label>Video search:</label>
                              <input
                                   type="text"
                                   value={this.state.value}
                                   onChange={(event) => this.setState({value:event.target.value})} />
                         </div>
                    </form>

               </div>
          )
     }
}
export default SearchBar;
