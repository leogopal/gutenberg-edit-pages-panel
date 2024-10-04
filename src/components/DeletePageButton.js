import { store as noticesStore } from '@wordpress/notices';
import { store as coreDataStore } from '@wordpress/core-data';
import { useSelect, useDispatch } from '@wordpress/data';
import { useEffect } from '@wordpress/element';
import { Button, Spinner } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * DeletePageButton component renders a button to delete a page.
 *
 * @component
 * @param {Object} props - Component properties.
 * @param {number} props.pageId - The ID of the page to delete.
 * @example
 * return (
 *   <DeletePageButton pageId={1} />
 * )
 */
const DeletePageButton = ({ pageId }) => {
    const { createSuccessNotice, createErrorNotice } = useDispatch(noticesStore);
    const { getLastEntityDeleteError } = useSelect(coreDataStore);
    const { deleteEntityRecord } = useDispatch(coreDataStore);

    /**
     * Handles the delete operation for the page.
     * It confirms the action, deletes the page, and shows success or error notices.
     */
    const handleDelete = async () => {
        const isConfirmed = window.confirm(__('Are you sure you want to delete this page?', 'hostinger-easy-onboarding'));

        if (!isConfirmed) {
            return;
        }

        try {
            const success = await deleteEntityRecord('postType', 'page', pageId);
            if (success) {
                createSuccessNotice(__('The page was deleted!', 'hostinger-easy-onboarding'), {
                    type: 'snackbar',
                });
            } else {
                const lastError = getLastEntityDeleteError('postType', 'page', pageId);
                const message = (lastError?.message || __('There was an error.', 'hostinger-easy-onboarding')) +
                    __(' Please refresh the page and try again.', 'hostinger-easy-onboarding');
                createErrorNotice(message, {
                    type: 'snackbar',
                });
            }
        } catch (error) {
            createErrorNotice(__('An unexpected error occurred. Please try again.', 'hostinger-easy-onboarding'), {
                type: 'snackbar',
            });
        }
    };

    const { isDeleting, error } = useSelect(
        (select) => ({
            isDeleting: select(coreDataStore).isDeletingEntityRecord('postType', 'page', pageId),
            error: select(coreDataStore).getLastEntityDeleteError('postType', 'page', pageId),
        }),
        [pageId]
    );

    useEffect(() => {
        if (error) {
            createErrorNotice(__('An error occurred while deleting the page.', 'hostinger-easy-onboarding'), {
                type: 'snackbar',
            });
        }
    }, [error]);

    return (
        <Button
            variant="secondary"
            onClick={handleDelete}
            disabled={isDeleting}
            size="small"
            tooltip={__('Delete page', 'hostinger-easy-onboarding')}
            showTooltip={true}
            label={__('Delete page', 'hostinger-easy-onboarding')}
            icon="trash"
            iconSize={12}
            className="delete-page-button"
        >
            {isDeleting ? <Spinner /> : ' '}
        </Button>
    );
};

export default DeletePageButton;
