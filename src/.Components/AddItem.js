import React from 'react';

class AddItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            productName:"",
            productPrice:""
        };
    }
    render() { 
              return (
                <div className='formontainer'>
                <form id="formC" className='row_mb-5' onSubmit={(e) => {
                    e.preventDefault();
                    this.props.addItem(this.state.productName,this.state.typeoforder, Number(this.state.productPrice));
                }}>
            <div className='rows'>                    
                  <div className="mb-3_col-4">
                      <label htmlFor="inputName" className="form-label">Name of the customer</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="inputName" 
                    aria-describedby="name" 
                    name = "productName"
                    onChange={(e) => {
                        this.setState({productName: e.currentTarget.value});
                    }}
                    value={this.state.productName}
                    />
                  </div>
                  <div className="mb-3_col-4">
                    <label htmlFor="typeoforder" className="form-label">Type of the order</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="typeoforder" 
                    aria-describedby="name" 
                    name = "typeoforder"
                    onChange={(e) => {
                        this.setState({typeoforder: e.currentTarget.value});
                    }}
                    value={this.state.typeoforder}
                    />
                  </div>
                  <div className="mb-3_col-4">
                    <label htmlFor="inputPrice" className="form-label">Order Price</label>
                    <input 
                    type="number" 
                    className="form-control" 
                    id="price" 
                    name = "productPrice"
                    onChange={(e) => {
                        this.setState({productPrice: Number(e.currentTarget.value)});
                    }}
                    value={this.state.productPrice}
                    />
                  </div> 
                  </div>
                  <button type="submit" className="btn_btn-primary_col-4">Add</button>
                </form>
                </div> 
              );
            }
}
 
export default AddItem;