import CourseDetails from '../CourseDetails'
import './index.css'

const Home = () => (
  <div className="bg-container">
    <div className="inner-con">
      <img
        src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
        alt="website logo"
      />
      <CourseDetails />
    </div>
  </div>
)

export default Home
