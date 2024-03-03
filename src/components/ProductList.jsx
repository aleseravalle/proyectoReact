import PropTypes from 'prop-types';

function ProductList(props) {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.description}</td>
      <td>{props.detail}</td>
      <td>{props.categorie.name}</td>
    </tr>
  );
}

ProductList.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  detail: PropTypes.string,
  categorie: PropTypes.string
};

export default ProductList;