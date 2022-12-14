import React from "react";
import MultiSelectComponent from "./MultiSelectComponent";
import "antd/dist/antd.min.css";
import "./MovieHeader.css";
import PaginationComponent from "./PaginationComponent";

function MoviesHeader() {
	return (
		<header className= "root" data-testid="header">
			<div className="wrapper">
          <h5>Particeep</h5> 
    
      </div>
		<div className="header d-flex flex-column align-items-center p-1 ">

      
			<MultiSelectComponent />
			<PaginationComponent />
		</div>
		</header>

	);
}

export default MoviesHeader;
