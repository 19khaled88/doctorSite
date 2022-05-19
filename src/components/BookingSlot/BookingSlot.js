
import React from 'react';

const BookingSlot = () => {
 
    const onsubmitTimeHandler=(e)=>{
        e.preventDefault()
        
        console.log(e)
    }
  return (
      <div>
      <form onSubmit={onsubmitTimeHandler}>
       
        <button className="btn btn-wide" value="submit" type="submit">Submit</button>
        </form>
       
      </div>
   
  );
}

export default BookingSlot;
