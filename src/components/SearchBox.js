import React from 'react'; 

const SearchBox = ({searchChange}) =>{
	return (
		<div className='pa2 tc'>
		<input className = 'pa2 tc b--green bg-lightest-blue' 
		type ='search'
		onChange= {searchChange} 
		placeholder="Search Robot"
		/>
		</div> 
		); 
}

export default SearchBox; 