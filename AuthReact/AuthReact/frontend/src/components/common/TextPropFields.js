import PropTypes from "prop-types";
import classnames from "classnames";

const TextPropFields = ({
    field,
    value,
    label,
    type,
    onChangeHandler
}) => {
    return (
        <div className="col-md-12" >
            <label htmlFor={field} className="form-label">{label}</label>
            <input type={type}
                className="form-control"
                id={field}
                name={field}
                value={value}
                onChange={onChangeHandler} 
                              
            />
        </div>
    );

}

TextPropFields.propTypes = {
    field: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onChangeHandler: PropTypes.func.isRequired
  };


  TextPropFields.defaultProps ={
    type: "text"
}

export default TextPropFields;