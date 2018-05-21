import React from 'react';

class Fizzbuzz extends React.Component {
 
 constructor(props){
  super(props);
  this.state = {
   data : this.fizzBuzz(props.nilai)
  } 
 }

 handleChange(e){
  let nilai = e.target.value;
  let hasil = this.fizzBuzz(nilai);
  this.setState({
    data : hasil
  });
 }

 fizzBuzz(nilai){
  if(nilai % 3 == 0 && nilai % 5 == 0){
   return 'Derry Berni';
  }else if(nilai % 3 == 0){
   return 'Derry';
  }else if(nilai % 5 == 0){
   return 'Berni';
  }else{
   return nilai;
  }
 }

 render (){
  return(
   <div className='content'>
    <input type='text' onChange={(e)=>{this.handleChange(e)}}/>
    <div className='nilai_disini'>{this.state.data}</div>
   </div>
  );
 }
}

export default Fizzbuzz;
