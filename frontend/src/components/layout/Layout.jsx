import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const Layout = ({ children, className }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`w-full h-auto flex flex-col lg:px-32 md:px-16 sm:px-8 px-4 ${className}`}
        >
            {children}
        </motion.div>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

Layout.defaultProps = {
    className: '',
};

export default Layout