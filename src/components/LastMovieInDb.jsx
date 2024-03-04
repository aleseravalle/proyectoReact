import React from 'react'

function LastMovieInDb() {

    const [product, setProduct] = React.useState({})
    React.useEffect(() => {
        try {
            fetch('http://localhost:3035/api/product/')
                .then(res => res.json())
                .then(response => {
                    let lastProduct = response.products[response.products.length - 1];
                    lastProduct = lastProduct.detail
                    //console.log(lastProduct)
                    
                    fetch(lastProduct)
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            setProduct(data)
                        })
                })


        } catch (error) { res.send(error) }
    }, [])

    return (

        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Ultimo Producto</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        {product.name}
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ "width": "40rem" }} src= {product.image} alt={product.name} />
                    </div>
                    <p>{product.description}</p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Ver detalle</a>
                </div>
            </div>
        </div>
    )
}

export default LastMovieInDb