import PropTypes from 'prop-types'

function Categorie(props) {
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

Categorie.propTypes = {
    name: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired
}

export default Categorie