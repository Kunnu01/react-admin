import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ThumbUp from '@material-ui/icons/ThumbUp';
import { useTranslate, useUpdate } from 'react-admin';

const options = {
    undoable: true,
    onSuccess: {
        notification: {
            body: 'resources.reviews.notification.approved_success',
            level: 'info',
        },
        redirectTo: '/reviews',
    },
    onFailure: {
        notification: {
            body: 'resources.reviews.notification.approved_error',
            level: 'warning',
        },
    },
};

/**
 * This custom button demonstrate using useUpdate to update data
 */
const AcceptButton = ({ record }) => {
    const translate = useTranslate();
    const [approve, { loading }] = useUpdate(
        'reviews',
        record.id,
        { status: 'accepted' },
        record,
        options
    );
    return record && record.status === 'pending' ? (
        <Button
            variant="outlined"
            color="primary"
            size="small"
            onClick={approve}
            disabled={loading}
        >
            <ThumbUp
                color="primary"
                style={{ paddingRight: '0.5em', color: 'green' }}
            />
            {translate('resources.reviews.action.accept')}
        </Button>
    ) : (
        <span />
    );
};

AcceptButton.propTypes = {
    record: PropTypes.object,
};

export default AcceptButton;
