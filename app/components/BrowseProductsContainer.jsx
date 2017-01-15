import {connect} from 'react-redux';
import {loadProducts} from 'APP/app/reducers/products';
import BrowseProducts from 'APP/app/components/BrowseProducts';

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoadProducts: function () {
      const thunk = loadProducts();
      dispatch(thunk);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BrowseProducts);
