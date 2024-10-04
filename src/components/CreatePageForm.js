import { useState } from '@wordpress/element';
import { useDispatch, useSelect } from '@wordpress/data';
import { store as coreDataStore } from '@wordpress/core-data';
import PageForm from './PageForm';
import { store as noticesStore } from '@wordpress/notices';
import { __, sprintf } from '@wordpress/i18n';

/**
 * CreatePageForm component renders a form to create a new page.
 *
 * @component
 * @param {Object} props - Component properties.
 * @param {Function} props.onCancel - Function to call when the cancel button is clicked.
 * @param {Function} props.onSaveFinished - Function to call when the save operation is finished.
 * @example
 * return (
 *   <CreatePageForm onCancel={handleCancel} onSaveFinished={handleSaveFinished} />
 * )
 */
export default function CreatePageForm( { onCancel, onSaveFinished } ) {
	// State to manage the title of the new page
	const [ title, setTitle ] = useState();

	// Destructure functions from the notices store
	const { createSuccessNotice, createErrorNotice } =
		useDispatch( noticesStore );

	// Destructure saveEntityRecord function from the core data store
	const { saveEntityRecord } = useDispatch( coreDataStore );

	/**
	 * Function to handle the save operation.
	 * It saves the new page and shows a success or error notice.
	 */
	const handleSave = async () => {
		try {
			const savedRecord = await saveEntityRecord( 'postType', 'page', {
				title,
				status: 'publish',
			} );
			if ( savedRecord ) {
				onSaveFinished();
				// Tell the user the operation succeeded:
				await createSuccessNotice(
					sprintf(
						/* translators: %s: page title */
						__(
							'The page %s was created!',
							'hostinger-easy-onboarding'
						),
						savedRecord.title.rendered
					),
					{
						type: 'snackbar',
						actions: [
							{
								url: savedRecord.link,
								label: __(
									'View post',
									'hostinger-easy-onboarding'
								),
							},
						],
						politeness: 'assertive',
						explicitDismiss: true,
					}
				);
			} else {
				// Tell the user the operation failed:
				await createErrorNotice(
					__(
						'Failed to create the page',
						'hostinger-easy-onboarding'
					),
					{
						type: 'snackbar',
					}
				);
			}
		} catch ( error ) {
			// Handle unexpected errors
			await createErrorNotice(
				__(
					'An unexpected error occurred. Please try again.',
					'hostinger-easy-onboarding'
				),
				{
					type: 'snackbar',
				}
			);
		}
	};

	// Select the last error and saving state from the core data store
	const { lastError, isSaving } = useSelect(
		( select ) => ( {
			lastError: select( coreDataStore ).getLastEntitySaveError(
				'postType',
				'page'
			),
			isSaving: select( coreDataStore ).isSavingEntityRecord(
				'postType',
				'page'
			),
		} ),
		[]
	);

	return (
		<PageForm
			title={ title }
			onChangeTitle={ setTitle }
			hasEdits={ !! title }
			lastError={ lastError }
			isSaving={ isSaving }
			onSave={ handleSave }
			onCancel={ onCancel }
		/>
	);
}
