import { connect } from 'react-redux';
import { ProductDetail } from './ProductDetail';

const mapStateToProps = state => {
  return {
    selectedProduct: state.selectedProduct
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail);
