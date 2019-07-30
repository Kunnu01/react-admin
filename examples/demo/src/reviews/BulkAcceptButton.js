import React from 'react';
import PropTypes from 'prop-types';
import ThumbUp from '@material-ui/icons/ThumbUp';
import { Button, useUpdateMany } from 'react-admin';

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

const BulkAcceptButton = ({ selectedIds }) => {
    const [approve, { loading }] = useUpdateMany(
        'reviews',
        selectedIds,
        { status: 'accepted' },
        options
    );

    return (
        <Button
            label="resources.reviews.action.accept"
            onClick={approve}
            disabled={loading}
        >
            <ThumbUp />
        </Button>
    );
};

BulkAcceptButton.propTypes = {
    selectedIds: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default BulkAcceptButton;
