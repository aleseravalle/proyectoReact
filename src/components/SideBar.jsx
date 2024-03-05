import { Link } from 'react-router-dom'

function SideBar() {
    return (
        <ul className="navbar-nav" id="accordionSidebar">

			{/* <!-- Sidebar - Brand --> */}
			<a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
				<div className="sidebar-brand-icon">
					<img className="w-100" src="/images/logo 2.png" alt="JACA-TECH" width='50px' height='50px'/>
				</div>
			</a>

			{/* <!-- Divider --> */}
			<hr className="sidebar-divider my-0" />

			{/* <!-- Nav Item - Dashboard --> */}
			<li className="nav-item active">
				<Link className="nav-link" href="/">
					<i className="fas fa-fw fa-tachometer-alt"></i>
					<span>JACA-TECH</span>
				</Link>
			</li>

			{/* <!-- Divider --> */}
			<hr className="sidebar-divider" />

			{/* <!-- Heading --> */}
			<div className="sidebar-heading">Actions</div>

			{/* <!-- Nav Item - Pages --> */}
			<li className="nav-item">
				<Link className="nav-link collapsed" to="/last-product">
					<i className="fas fa-fw fa-folder"></i>
					<span>Ultimo Producto</span>
				</Link>
			</li>

			{/* <!-- Nav Item - Charts --> */}
			<li className="nav-item">
				<Link className="nav-link" to="/categorie">
					<i className="fas fa-fw fa-chart-area"></i>
					<span>Categorias</span>
				</Link>
			</li>

			{/* <!-- Nav Item - Tables --> */}
			<li className="nav-item">
				<Link className="nav-link" to="/product">
					<i className="fas fa-fw fa-table"></i>
					<span>Productos</span>
				</Link>
			</li>
			<li className="nav-item">
                <Link className="nav-link collapsed" to="/search">
                    <i className="fas fa-search"></i>
                    <span>Buscar</span>
                </Link>
            </li>

			{/* <!-- Divider --> */}
			<hr className="sidebar-divider d-none d-md-block" />
		</ul>
    )
}

export default SideBar