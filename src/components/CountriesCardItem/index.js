import './index.css'

const CountriesCardItem = props => {
  const {eachc, onClickRemoveBtnReq} = props
  const {imageUrl, name, id} = eachc

  const onClickRemoveBtn = () => {
    onClickRemoveBtnReq(id)
  }

  return (
    <li className="ccli">
      <img className="ccimg" src={imageUrl} alt="thumbnail" />
      <div className="ccc">
        <p className="ccname">{name}</p>
        <button onClick={onClickRemoveBtn} className="ccbtn" type="button">
          Remove
        </button>
      </div>
    </li>
  )
}
export default CountriesCardItem
