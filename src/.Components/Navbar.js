import React from 'react';

class Navbar extends React.Component {
    state = {  } 
    render() { 
        return ( <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <h1 className="header">Tailor shop Order management</h1>
        </div>
      </nav>
    );
    }
}
 
export default Navbar;