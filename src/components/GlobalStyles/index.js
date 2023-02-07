import './GlobalStyles.scss';
import PropTypes from 'prop-types'

function GlobalStyles({ children }) {
    return children;
}
GlobalSyles.propTypes = {
    children: PropTypes.node.isRequired,
}

export default GlobalStyles;
