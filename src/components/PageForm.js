import {Button, Spinner, TextControl} from '@wordpress/components';

/**
 * PageForm component renders a form for creating or editing a page.
 *
 * @component
 * @param {Object} props - Component properties.
 * @param {string} props.title - The title of the page.
 * @param {Function} props.onChangeTitle - Function to call when the title changes.
 * @param {boolean} props.hasEdits - Indicates if there are unsaved edits.
 * @param {Object} props.lastError - The last error encountered during save.
 * @param {boolean} props.isSaving - Indicates if the page is currently being saved.
 * @param {Function} props.onCancel - Function to call when the cancel button is clicked.
 * @param {Function} props.onSave - Function to call when the save button is clicked.
 * @example
 * return (
 *   <PageForm
 *     title={pageTitle}
 *     onChangeTitle={handleTitleChange}
 *     hasEdits={hasUnsavedEdits}
 *     lastError={saveError}
 *     isSaving={isPageSaving}
 *     onCancel={handleCancel}
 *     onSave={handleSave}
 *   />
 * )
 */
export default function PageForm(
	{
		title,
		onChangeTitle,
		hasEdits,
		lastError,
		isSaving,
		onCancel,
		onSave,
	}) {
	return (
		<div className="my-gutenberg-form">
			<TextControl
				label="Page title:"
				value={title}
				onChange={onChangeTitle}
			/>
			{lastError ? (
				<div className="form-error">Error: {lastError.message}</div>
			) : false}
			<div className="form-buttons">
				<Button
					onClick={onSave}
					variant="primary"
					disabled={!hasEdits || isSaving}
				>
					{isSaving ? (
						<>
							<Spinner/>
							Saving
						</>
					) : (
						'Save'
					)}
				</Button>
				<Button
					onClick={onCancel}
					variant="tertiary"
					disabled={isSaving}
				>
					Cancel
				</Button>
			</div>
		</div>
	);
}
