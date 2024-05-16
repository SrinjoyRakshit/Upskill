import React from 'react'

function Course() {
  return (
    <div className='course'>
        <div className="course-details">
            <button>DATASCIENCE COURSE LEARNING PATH</button>
            <h2><span>Data Science</span> Course Curriculum</h2>
        </div>
        <div className="course-container">
        <div className="course-box">
            <div className="course-cards">
                <div className="left">
                    <h2>C++</h2>
                    <p>Learn C++ for strong programming fundamentals.</p>
                </div>
                <div className="right">
                    <button>
                        <i class="fa-regular fa-eye"></i>
                        View Curriculum
                    </button>
                </div>
            </div>

            <div className="course-cards">
                <div className="left">
                    <h2>MERN Stack</h2>
                    <p>Master the MERN Stack for high-demand projects</p>
                </div>
                <div className="right">
                    <button>
                        <i class="fa-regular fa-eye"></i>
                        View Curriculum
                    </button>
                </div>
            </div>

            <div className="course-cards">
                <div className="left">
                    <h2>Data Structures and Algorithm</h2>
                    <p>Excel in Data Structures and Algorithm for interview success</p>
                </div>
                <div className="right">
                    <button>
                        <i class="fa-regular fa-eye"></i>
                        View Curriculum
                    </button>
                </div>
            </div>

            <div className="course-cards">
                <div className="left">
                    <h2>Competitive Programming</h2>
                    <p>Excel in Data Structures and Algorithm for interview success</p>
                </div>
                <div className="right">
                    <button>
                        <i class="fa-regular fa-eye"></i>
                        View Curriculum
                    </button>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Course
