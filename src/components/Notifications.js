import { useDispatch, useSelect } from '@wordpress/data';
import { store as noticesStore } from '@wordpress/notices';
import { SnackbarList } from '@wordpress/components';

/**
 * Notifications component renders a list of snackbar notifications.
 *
 * @component
 * @example
 * return (
 *   <Notifications />
 * )
 */
export default function Notifications() {
	// Select all notices from the notices store
	const notices = useSelect(
		( select ) => select( noticesStore ).getNotices(),
		[]
	);

	// Destructure the removeNotice function from the notices store
	const { removeNotice } = useDispatch( noticesStore );

	// Filter notices to only include those of type 'snackbar'
	const snackbarNotices = notices.filter(
		( { type } ) => type === 'snackbar'
	);

	return (
		<SnackbarList
			notices={ snackbarNotices }
			className="components-editor-notices__snackbar"
			onRemove={ removeNotice }
		/>
	);
}
