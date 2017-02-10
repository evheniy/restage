import React from 'react';

const title = props => <h1>{props.title}</h1>;

title.propTypes = {
    title: React.PropTypes.string.isRequired,
};

export default title;