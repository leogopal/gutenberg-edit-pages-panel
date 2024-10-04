import { Icon } from '@wordpress/components';

/**
 * editPagesIcon component renders an SVG icon for editing pages.
 *
 * @component
 * @example
 * return (
 *   <editPagesIcon />
 * )
 */
export default function editPagesIcon() {
	return (
		<Icon
			icon={
				<svg
					width="16"
					height="16"
					viewBox="0 0 16 16"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						d="M6.9 14.2c0-.4.2-.8.6-.8h6.1c.4 0 .7.4.7.8s-.3.7-.7.7H7.5c-.4 0-.6-.3-.6-.7z"
					/>
					<path
						fillRule="evenodd"
						d="M4.3 12.7L13.1 3.8c0 0 0 0 0-.1s0 0 0-.1L12.2 2.8c0 0 0 0-.1 0s0 0-.1 0L6.7 8.3 3.3 11.7c0 0 0 0 0 0s0 0 0 0l-.4 1.4 1.3-.4c0 0 0 0 0 0s0 0 0 0zM5.6 7.2L2.2 10.6c-.1.1-.1.2-.2.3s-.1.1-.1.2-.1.1-.1.2l-.6 2c-.1.7-.2 1-.2 1.2.1.2.3.4.5.4.2.1.5 0 1.1-.2l2.1-.6c.1 0 .2 0 .3-.1s.1 0 .1-.1c.1 0 .2-.1.3-.2l8.7-8.8c.4-.4.6-.6.7-.9.1-.2.1-.4 0-.6-.1-.2-.3-.4-.7-.8L13.3 1.8c-.4-.4-.6-.6-.9-.7-.2-.1-.4-.1-.6 0-.2.1-.4.3-.8.7L5.6 7.2z"
					/>
				</svg>
			}
			className="icon-edit-page"
		/>
	);
}
