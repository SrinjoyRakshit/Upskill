import React from 'react'

function Herosection() {
  return (
    <div className='hero-section'>
      <div className="hero-iit">
        <i class="ri-graduation-cap-fill"></i>
        <h3>An <span>IIT Delhi</span> Alumni Initiative</h3>
      </div>
      <div className="hero-desc">
        <h1><span>Become an Expert in the <br /> field of</span> Data Science <br /> with 6 courses</h1>
        <p>A specially crafted Tech Kickstarter, with 5+ extensive online courses.</p>
      </div>
      <div className="hero-point">
        <button>
            <i class="fa-solid fa-bahai"></i>
            <h4>Personal Mentorship</h4>
        </button>
        <button>
            <i class="fa-solid fa-bahai"></i>
            <h4>Internship Assistance</h4>
        </button>
        <button>
            <i class="fa-solid fa-bahai"></i>
            <h4>Industry Certified Courses</h4>
        </button>
      </div>
      <div className="hero-btn">
        <button className='enroll'>
            <h4>Enroll Now</h4>
            <i class="fa-regular fa-paper-plane"></i>
        </button>
        <button className='know'>
          <h3>Know More</h3>
          <i class="fa-regular fa-circle-question"></i>
        </button>
      </div>
    </div>
  )
}

export default Herosection
