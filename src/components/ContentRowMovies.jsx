import SmallCard from "./SmallCard"
import React from 'react'

// const data = [
//     {
//         title: 'Movies in Data Base',
//         quantity: 21,
//         color: 'primary',
//         icon: 'fa-film'
//     },
//     {
//         title: 'Total awards',
//         quantity: 79,
//         color: 'success',
//         icon: 'fa-award'
//     },
//     {
//         title: 'Actors quantity',
//         quantity: 49,
//         color: 'warning',
//         icon: 'fa-user'
//     }
// ]

function ContentRowMovies() {

    const [product, setProduct] = React.useState([]);
    const [user, setUser] = React.useState([]);
    const [categorie, setCategorie] = React.useState([]);

    React.useEffect(() => {
        try {
            fetch('http://localhost:3035/api/product/')
                .then(product => product.json())
                .then(data => {
                    setProduct(data.count)
                })
        } catch (error) {
            console.log(error)
        }
    }, [])

    React.useEffect(() => {
        try {
            fetch('http://localhost:3035/api/user/')
                .then(product => product.json())
                .then(data => {
                    setUser(data.count)
                })
        } catch (error) {
            console.log(error)
        }
    }, [])

    React.useEffect(() => {
        try {
            fetch('http://localhost:3035/api/product/')
                .then(product => product.json())
                .then(data => {
                    let countCategories = data.countByCategory.map((elem) => {
                        return elem.count
                    })
                    let TotalCategories = countCategories.reduce((acum, elem) => acum + elem, 0);
                    //console.log(TotalCategories)
                    setCategorie(TotalCategories)
                })
        } catch (error) {
            console.log(error)
        }
    }, [])

    return (
        <div className="row">
            {/* <!-- Movies in Data Base --> */}
            {/* <!-- Total awards --> */}
            {/* <!-- Actors quantity --> */}
                <SmallCard
                    name= 'Productos Totales'
                    count={product} 
                />
                <SmallCard
                    name= 'Usuarios Totales'
                    count={user} 
                />
                <SmallCard
                    name= 'Categorias Totales'
                    count={categorie} 
                />
        </div>
    )
}

export default ContentRowMovies