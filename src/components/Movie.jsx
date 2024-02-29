import MovieList from './MovieList';
import React from 'react';

// const movies = [
//     {
//         id: 1,
//         title: 'Titulo pelicula',
//         rating: 2,
//         awards: 3,
//         length: 4,
//     },
//     {
//         id: 2,
//         title: 'Titulo pelicula2',
//         rating: 4,
//         awards: 5,
//         length: 6,
//     }
// ];

class Movie extends React.Component {
    state = {
        movieList: [],
    }

    componentDidMount() {
        fetch('http://localhost:3035/api/product')
            .then(res => res.json())
            .then(response => {
                this.setState({ movieList: response.products })
            })
            .catch(err => console.log(err))
    }
    render() {
        return (
            <>
                {/*<!-- MOVIES LIST -->*/}
                <h1 className="h3 mb-2 text-gray-800 ">Listado de Productos</h1>

                {/*<!-- DataTales Example -->*/}
                <div className="card shadow mb-4">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Nombre</th>
                                        <th>Descripcion</th>
                                        <th>Detalle</th>
                                        <th>Categoria</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.movieList.map((movie, index) =>
                                        <MovieList  {...movie} key={index} />
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Movie;