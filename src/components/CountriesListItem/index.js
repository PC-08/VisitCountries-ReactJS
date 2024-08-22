import './index.css'

const CountriesListItem = props => {
  const {eachc, onClickVisitbtn} = props

  const onClickVisitBtn = () => {
    onClickVisitbtn(eachc.id)
  }

  return (
    <li className="cl-li">
      <p className="cname">{eachc.name}</p>
      {eachc.isVisited ? (
        <p className="vcom">Visited</p>
      ) : (
        <button onClick={onClickVisitBtn} className="visitButton" type="button">
          Visit
        </button>
      )}
    </li>
  )
}
export default CountriesListItem
