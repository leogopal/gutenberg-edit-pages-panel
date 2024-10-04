import { useState } from '@wordpress/element';
import { Button, Modal } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import CreatePageForm from './CreatePageForm';

/**
 * CreatePageButton component renders a button that opens a modal
 * to create a new page when clicked.
 *
 * @component
 * @example
 * return (
 *   <CreatePageButton />
 * )
 */
export default function CreatePageButton() {
	// State to manage the visibility of the modal
	const [ isOpen, setOpen ] = useState( false );

	// Function to open the modal
	const openModal = () => setOpen( true );

	// Function to close the modal
	const closeModal = () => setOpen( false );

	return (
		<>
			{ /* Button to trigger the modal */ }
			<Button onClick={ openModal } variant="primary">
				{ __( 'Create a new Page', 'hostinger-easy-onboarding' ) }
			</Button>
			{ /* Modal that contains the CreatePageForm component */ }
			{ isOpen && (
				<Modal
					onRequestClose={ closeModal }
					title={ __(
						'Create a new page',
						'hostinger-easy-onboarding'
					) }
				>
					<CreatePageForm
						onCancel={ closeModal }
						onSaveFinished={ closeModal }
					/>
				</Modal>
			) }
		</>
	);
}
