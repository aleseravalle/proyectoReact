import PropTypes from 'prop-types'

function Genre(props) {
    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow">
                <div className="card-body">
                    {props.name}
                    <br />
                    {props.count}
                </div>
            </div>
        </div>
    )
}

Genre.propTypes = {
    name: PropTypes.string.isRequired
}

export default Genre