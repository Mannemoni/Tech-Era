import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import CourseItem from '../CourseItem'

import './index.css'

class CourseDetails extends Component {
  state = {isLoading: true, courseData: []}

  componentDidMount() {
    this.getCourseData()
  }

  getCourseData = async () => {
    const response = await fetch('https://apis.ccbp.in/te/courses')
    const courses1 = await response.json()
    const {courses} = courses1

    const formattedData = courses.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      logoUrl: eachItem.logo_url,
    }))

    this.setState({courseData: formattedData, isLoading: false})
  }

  render() {
    const {courseData, isLoading} = this.state

    return (
      <div className="blogs-list-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <Link to="/course/item">
            <ul className="blogs-list">
              {courseData.map(eachBlogItem => (
                <CourseItem
                  key={eachBlogItem.id}
                  courseDetails={eachBlogItem}
                />
              ))}
            </ul>
          </Link>
        )}
      </div>
    )
  }
}

export default CourseDetails
