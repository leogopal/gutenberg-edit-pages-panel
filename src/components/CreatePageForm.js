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
export default function CreatePageForm({ onCancel, onSaveFinished }) {
	const [title, setTitle] = useState();
	const { saveEntityRecord } = useDispatch(coreDataStore);
	const handleSave = async () => {
		const savedRecord = await saveEntityRecord('postType', 'page', {
			title,
			status: 'publish',
		});
		if (savedRecord) {
			onSaveFinished();
		}
	};
	const { lastError, isSaving } = useSelect(
		(select) => ({
			// Notice the missing pageId argument:
			lastError: select(coreDataStore).getLastEntitySaveError(
				'postType',
				'page'
			),
			// Notice the missing pageId argument
			isSaving: select(coreDataStore).isSavingEntityRecord(
				'postType',
				'page'
			),
		}),
		[]
	);
	return (
		<PageForm
			title={title}
			onChangeTitle={setTitle}
			hasEdits={!!title}
			lastError={lastError}
			isSaving={isSaving}
			onSave={handleSave}
			onCancel={onCancel}
		/>
	);
}
