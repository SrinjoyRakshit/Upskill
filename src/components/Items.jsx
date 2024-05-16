import React from 'react'
function Items() {
  return (
    <div className='itemcards'>
      <div className="card">
        <img src="src/assets/computer.png" alt="computer" />
        <div className="card-desc">
            <h2>24</h2>
            <h3>Courses</h3>
        </div>
      </div>

      <div className="card">
        <img src="src/assets/human.png" alt="computer" />
        <div className="card-desc">
            <h2>30k+</h2>
            <h3>Learners</h3>
        </div>
      </div>

      <div className="card">
        <img src="src/assets/cloud.png" alt="computer" />
        <div className="card-desc">
            <h2>100k+</h2>
            <h3>Doubts Solved</h3>
        </div>
      </div>

      <div className="card">
        <img src="src/assets/right.png" alt="computer" />
        <div className="card-desc">
            <h2>10k+</h2>
            <h3>Student Projects</h3>
        </div>
      </div>
    </div>
  )
}

export default Items
