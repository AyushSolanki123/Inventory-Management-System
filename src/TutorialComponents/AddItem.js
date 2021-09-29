import PropTypes from 'prop-types';

function AddItem(props) {
  return (
    <form>
      <label for="text-form">Type Something: </label>
      <input type="text" id="text-form" value={props.text} placeholder="Enter Item Name" />
      <p>Value is: {props.number}</p>
    </form>    
  )
}

AddItem.defaultProps = { 
  number: 1,
  text: "Default"
}

AddItem.propTypes = {
  number: PropTypes.number,
  text: PropTypes.string
}

export default AddItem;