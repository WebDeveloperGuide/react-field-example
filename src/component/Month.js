import React, { useState } from 'react';

const Month = (props) => {
	
	let month = props.monthdata;
	const [btnstatus,setBtnstatus] = useState('disabled');
	const [monthData,setMonthData] = useState([]);
	const [value,setValue] = useState('');

	const changeTextVal = (e) =>{
		let myVal = e.target.value;
		setValue(myVal)
		if(myVal!=''){
			setBtnstatus('')
		}
	}	
  
    return ( 
        	<>
        		<tr>
    				<td>{month}</td>
    				<td><input type='text' value={value} onChange={changeTextVal}/></td>
    				<td><button disabled={btnstatus}>Copy</button></td>
    			</tr>	
        	</>
        );

}

export default Month;