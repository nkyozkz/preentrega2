import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { consultarProductos } from '../../utils/traerProductos';
const Categoria = () => {

    const [products, setProducts] = useState([]);
    const { id } = useParams()
    useEffect(() => {
        consultarProductos('../json/productos.json').then(productos => {
            const categoryProducts = productos.filter(productoCategorias => productoCategorias.idCategoria == id)
            const cardProductos = categoryProducts.map(producto =>
                <div className="card text-center styleCard cardProducto" key={producto.id}>
                    <div className='overflow'>
                        <img src={"../img/" + producto.img} className="card-img-top" alt={producto.nombre} />
                    </div>
                    <div className="card-body text-dark">
                        <h4 className="card-title">{producto.nombre}</h4>
                        <p className="card-text text-secondary"> <span>Modelo:</span> {producto.marca} </p>
                        <p className="card-text text-secondary"><span>Precio:</span> ${producto.precio} </p>
                        <p className="card-text text-secondary"><span>Disponibles:</span> {producto.stock} </p>
                        <button className='btnProducto'><Link className='nav-link' to={"/producto/" + producto.id}> Ver {producto.nombre} </Link></button>
                    </div>
                </div>)
            setProducts(cardProductos)
        })
    }, [id]);

    return (
        <div className='row'>
            {products}
        </div>
    );
}

export default Categoria;
