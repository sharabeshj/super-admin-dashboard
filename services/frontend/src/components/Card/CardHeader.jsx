import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

import cardHeaderStyle from '../../Assets/jss/components/cardHeaderStyle';

function CardHeader({ ...props }){
    const { classes,className, children, color, plainCard, ...rest } = props;
    const cardHeaderClasses = classNames({
        [classes.cardHeader] : true,
        [classes[color + "CardHeader"]] : color,
        [classes.cardHeaderPlain] : plainCard,
        [className] : className !== undefined
    });

    return (
        <div className = { cardHeaderClasses } {...rest}>
            {children}
        </div>
    );
}

CardHeader.propTypes = {
    classses : PropTypes.object.isRequired,
    className : PropTypes.string,
    color : PropTypes.oneOf(["warning","success","danger","info","primary"]),
    plainCard : PropTypes.bool
};

export default withStyles(cardHeaderStyle)(CardHeader);