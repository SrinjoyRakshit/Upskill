import React from 'react'

function Certificate() {
  return (
    // left
    <div className='certificate'>
      <h1>Unlock <span>6 Certificates</span> & <span>Internship Opportunities</span>!</h1>
      <div className="certificate-container">
        <div className="cer-one">
            <h2>Get 6 Industry Recognized Certificates!</h2>
            <img src="src/assets/certificate-one.png" alt="" />
            <div className="cer-btn">
            <button>
            <i class="fa-solid fa-bahai"></i>
            Official and Verified
            </button>
            <button>
            <i class="fa-solid fa-bahai"></i>
            Enhances Credibility
            </button> 
            </div>
        </div>

      {/* right */}
      <div className="cer-two">
            <h2>Bag Internship Opportunities!</h2>
            <p>With every course, we make you not only industry-ready but also help you crack your first internship.</p>
         <img src="src/assets/certificate-two.png" alt="" />
      </div>
    </div>
      </div>
      
  )
}

export default Certificate
