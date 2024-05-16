import React from 'react'

function Work() {
  return (
    <div className='work-section'>
      <h1>How does it work?</h1>
      <div className="line">
        <hr />
        <div className="bar"></div>
      </div>
      <div className="steps">
        <div className='one'>Step 1</div>
        <div className='one'>Step 2</div>
        <div className='one'>Step 3</div>
      </div>
      <div className="cards-container">
        <div className="work-card">
            <h2 id='step'>Step 1: Enroll your favorite course for only ₹1,499</h2>
            <img src="/enroll.jpg" alt="" />
            <h2>Start learning with Lifetime Course Access.</h2>
        </div>
        <div className="work-card">
            <h2 id='step'>Step 2: Complete Course & Assignments within 2 Years!</h2>
            <div className='number'>
                <h1>2</h1>
                <h3>years time from the date of enrollment</h3>
            </div>
            <h2>Finish the course within <strong>2 Years</strong> to Qualify for Refund.</h2>
        </div>
        <div className="work-card">
            <h2 id='step'>Step 3: Recieve 100% Refund upon completion</h2>
            <div className='number'>
                <h1>100%</h1>
                <h3>Enrollment Fee is refunded</h3>
            </div>
            <h2>Upon Course Completion within <strong>2 Years,</strong> Get your <strong>₹1,499 back</strong></h2>
        </div>
      </div>
    </div>
  )
}

export default Work
