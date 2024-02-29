import React from 'react'

import Genre from './Genre'

class GenresInDb extends React.Component {
    state = {
        genresList: [],
        isSecondaryBg: false
    }

    componentDidMount() {
        fetch('http://localhost:3035/api/product')
            .then(res => res.json())
            .then(response => {
                this.setState({ genresList: response.countByCategory })
            })
            .catch(err => console.log(err))
    }

    onMouseOverTitle = () => {
        this.setState({ isSecondaryBg: !this.state.isSecondaryBg })
    }

    render() {
        return (
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 onMouseOver={this.onMouseOverTitle} className="m-0 font-weight-bold text-gray-800">Categorias</h5>
                    </div>
                    <div className={`card-body ${this.state.isSecondaryBg && 'bg-secondary'}`}>
                        <div className="row">
                            {this.state.genresList.map((genre, index) =>
                                <Genre key={index} name={genre.name} count={genre.count} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GenresInDb