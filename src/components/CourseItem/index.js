const CourseItem = props => {
  const {courseDetails} = props
  const {name, logoUrl} = courseDetails
  return (
    <div className="bg-con1">
      <img src={logoUrl} alt={name} />
      <h1>{name}</h1>
    </div>
  )
}
export default CourseItem
