import React, { useState } from 'react';
import Month from './Month';

let months = ["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sept","Oct","Nov","Dec"];

const Home = () => {
	const [month,setMonth] = useState('');
	const [monthData,setMonthData] = useState([]);

	const changeMonthData = (e) =>{
		let number = e.target.value;
		if(number > 12){
			alert("Number should be between 1-12");
		}else{
			setMonth(number)	
		}
		
	}

	const setMonthTable = () => {
		setMonthData(months.slice(0, month));
	}
  
    return ( 
        	<div>
        		<h2 className="text-center">React Test</h2>
        		<div className="">
				  <div className="container">
				      <div className="form-group row">
					    <label htmlFor="month_number" className="col-sm-3">Enter number between 1-12</label>
					    <div className="col-sm-4">
					      <input type="number" min="1" max="12" className="form-control" id="month_number" value={month} onChange={changeMonthData}/>					      
					    </div>
					    <div className="col-sm-2">
					    	<button onClick={setMonthTable}>Submit</button>
					    </div>
					  </div>
					  <div className="form-group row">
					  		<table className="table">
							  <thead>
							    <tr>
							      <th scope="col">Month</th>
							      <th scope="col">Value</th>
							      <th scope="col">Copy</th>							      
							    </tr>
							  </thead>
							  <tbody>
							    {
							    	monthData && monthData.map((month) => {
							    		return (
							    			<Month key={month} monthdata={month}/>
							    		)
							    	})
							    }
							    
							  </tbody>
							</table>
					  </div>
				  </div>
				</div>
        	</div>
        );

}

export default Home;