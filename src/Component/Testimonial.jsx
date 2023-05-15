import React, { useState } from 'react'
import './Testimonial.css'

const Testimonial = () => {
    
    const [testimonials, setTestimonials] = useState([
        {
            image : "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
          name: "John Doe",
          jobTitle: "Software Engineer",
          company: "Acme Inc.",
          testimonialText: "Lorem ipsctus libero id turpis pellentesque aliquet. Sed aliquet fermentum mauris, eget congue nunc laoreet sed."
        },
        {
            image : "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",

          name:"David Kim",
          jobTitle: "Marketing Manager",
          company: "XYZ Corp.",
          testimonialText: "Sed ornare felis mauris, ut pellentesque ipsum tempor vitae. tae ultrices sapien consequat sit amet."
        },
        // Add more users here...
        {
            image : "https://www.careeraddict.com/uploads/article/59099/illustration-man-suit.jpg",

          name: "Bob Johnson",
          jobTitle: "Product Manager",
          company: "ABC Inc.",
          testimonialText: "Pellentesque habitant morbi tristique .dio auctor ultrices. Aliquam vel risus eget ex hendrerit eleifend."
        },
        {
            image : "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG9tbWV8ZW58MHx8MHx8&w=1000&q=80",

          name: "Maria Garcia",
          jobTitle: "Marketing Manager",
          company: "XYZ Corp.",
          testimonialText: "Sed ornare felis mauris, ut pellentesque ipsum tempor vitae. tae ultrices sapien consequat sit amet."
        },
        {
            image : "https://media.istockphoto.com/id/820577506/photo/smiling-man-over-urban-background.jpg?s=612x612&w=0&k=20&c=v202WM4KqTruTK3nQftWbONeASHTIRyxxDyfvcEHV4c=",

          name: "Michael Nguyen",
          jobTitle: "Marketing Manager",
          company: "XYZ Corp.",
          testimonialText: "Sed ornare felis mauris, ut pellentesque ipsum tempor vitae. tae ultrices sapien consequat sit amet."
        },
        {
            image : "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",

          name: "Samantha Lee",
          jobTitle: "Marketing Manager",
          company: "XYZ Corp.",
          testimonialText: "Sed ornare felis mauris, ut pellentesque ipsum tempor vitae. tae ultrices sapien consequat sit amet."
        },

        {
            image : "https://wpdaddy.com/wp-content/uploads/2020/11/thispersondoesnotexist.jpg",

          name: "Robert Davis",
          jobTitle: "Marketing Manager",
          company: "XYZ Corp.",
          testimonialText: "Sed ornare felis mauris, ut pellentesque ipsum tempor vitae. tae ultrices sapien consequat sit amet."
        },
        {
            image : "https://cdn.youpic.com/huge/1416143_3ogqbsrvmm1khn4ehg9m5ucmtm_103510.jpg",

          name:  "Emily Green",
          jobTitle: "Marketing Manager",
          company: "XYZ Corp.",
          testimonialText: "Sed ornare felis mauris, ut pellentesque ipsum tempor vitae. tae ultrices sapien consequat sit amet."
        },
        {
            image : "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHw%3D&w=1000&q=80",

          name:  "David Lee",
          jobTitle: "Marketing Manager",
          company: "XYZ Corp.",
          testimonialText: "Sed ornare felis mauris, ut pellentesque ipsum tempor vitae. tae ultrices sapien consequat sit amet."
        },
        {
            image : "https://images.unsplash.com/photo-1626470449066-96e0ba12ccf0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHw%3D&w=1000&q=80",

          name: "Avery Young",
          jobTitle: "Marketing Manager",
          company: "XYZ Corp.",
          testimonialText: "Sed ornare felis mauris, ut pellentesque ipsum tempor vitae. tae ultrices sapien consequat sit amet."
        },
        {
            image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScqGopT21-Se8CfyzkF6uHhV77biVNXiGVsA&usqp=CAU",

          name: "Anthony Davis",
          jobTitle: "Marketing Manager",
          company: "XYZ Corp.",
          testimonialText: "Sed ornare felis mauris, ut pellentesque ipsum tempor vitae. tae ultrices sapien consequat sit amet."
        },
        {
            image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDz_5YHVSNS7J_eJ7Hr_kxqEzjE6Xlzdr--A&usqp=CAU ",

          name: "Olivia Patel",
          jobTitle: "Marketing Manager",
          company: "XYZ Corp.",
          testimonialText: "Sed ornare felis mauris, ut pellentesque ipsum tempor vitae. tae ultrices sapien consequat sit amet."
        }
        
      ]);
      const [currentTestimonial, setCurrentTestimonial] = useState(0);

      function handlePrev() {
        setCurrentTestimonial(currentTestimonial => {
          const newIndex = currentTestimonial - 1;
          return newIndex < 0 ? testimonials.length - 1 : newIndex;
        });
      }
    
      function handleNext() {
        setCurrentTestimonial(currentTestimonial => {
          const newIndex = currentTestimonial + 1;
          return newIndex >= testimonials.length ? 0 : newIndex;
        });
      }
      
      return (
        <div className="testimonial-page">
          <div className="nav"></div>
          <button onClick={handlePrev}> <i class="fa-regular fa-angle-right"></i> prev </button>
          <TestimonialCard testimonial={testimonials[currentTestimonial]} />
          <button onClick={handleNext}>next</button>
        </div>
      );
    }
    
    function TestimonialCard(props) {
        const {image, name, jobTitle, company, testimonialText} = props.testimonial;
    
      return (
        <div className="testimonial-card">
           <div className='left-div'>
            <div className='image'>
              <img src={image} alt={name} />
            </div>
            <div className='name'> <h4>{name}</h4></div>
           </div>

           <div className='right-div'>
             <p className="testimonial-text">{testimonialText}</p>
             <p className="job-title"> <b>{jobTitle} </b> at <b>{company}</b></p>
           </div>
        </div>
      );
}

export default Testimonial
