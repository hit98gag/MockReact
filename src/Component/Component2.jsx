import React from 'react'
import './comp.css'
import Testimonial from './Testimonial'
const Component2 = () => {
  return (
    <>
     <div className='upperDiv'>
      <h2>Thousands of Lives changed </h2> <br/>
      <p> Hear from once who have been on this journey already </p>
    </div>

    <div className="container">
   
      <div className="left">

      <div className="left1">
      <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" />
        <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" />
      </div>

      <div className="left2">
      <img src="https://preview.redd.it/cpslext1vx971.png?auto=webp&s=a67d767ddec283c3490613cdb0b40c180a33daf6" alt="" />
        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG9tbWV8ZW58MHx8MHx8&w=1000&q=80" alt="" />
      </div>

      <div className="left3">
      <img src="https://media.istockphoto.com/id/820577506/photo/smiling-man-over-urban-background.jpg?s=612x612&w=0&k=20&c=v202WM4KqTruTK3nQftWbONeASHTIRyxxDyfvcEHV4c=" alt="" />
        <img src="https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" />
      </div>
        
      </div>
      <div className="center"><Testimonial/></div>
      <div className="right">
      

      <div className="right1">
      <img src="https://wpdaddy.com/wp-content/uploads/2020/11/thispersondoesnotexist.jpg" alt="" />
        <img src="https://cdn.youpic.com/huge/1416143_3ogqbsrvmm1khn4ehg9m5ucmtm_103510.jpg" alt="" />
      </div>

      <div className="right2">
      <img src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScqGopT21-Se8CfyzkF6uHhV77biVNXiGVsA&usqp=CAU" alt="" />
      </div>

      <div className="right3">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDz_5YHVSNS7J_eJ7Hr_kxqEzjE6Xlzdr--A&usqp=CAU" alt="" />
        <img src="https://pbs.twimg.com/media/D8dDZukXUAAXLdY.jpg" alt="" />
      </div>
        
      </div>
      </div>
    </>
  
  )
}

export default Component2;
