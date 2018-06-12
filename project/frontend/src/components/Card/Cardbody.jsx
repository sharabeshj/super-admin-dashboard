import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import cardBodyStyle from '../../Assets/jss/components/cardBodystyle';

function CardBody({ ...props }){
    const { classes,className,children,...rest } = props;
    const cardBodyclasses = classNames({
        [classes.CardBody] : true,
        [className] : className !== undefined
    });
    return (
        <div className = { cardBodyclasses } {...rest} >
            { children }
        </div>
    );
}

CardBody.propTypes = {
    classes : PropTypes.object.isRequired,
    className : PropTypes.string
};

export default withStyles(cardBodyStyle)(CardBody);