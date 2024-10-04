import { __ } from '@wordpress/i18n';
import { registerPlugin } from '@wordpress/plugins';
import { Panel, PanelBody, SearchControl } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { store as coreDataStore } from '@wordpress/core-data';
import editPagesIcon from './components/editPagesIcon';
import { CreatePageButton, Notifications, PagesList } from './components';
import './styles.scss';

const PluginSidebar = wp.editor.PluginSidebar;

/**
 * PagesSearchControl component renders the sidebar for searching and managing pages.
 *
 * @component
 * @example
 * return (
 *   <PagesSearchControl />
 * )
 */
const PagesSearchControl = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const { pages, hasResolved, currentPage } = useSelect(
        (select) => {
            const query = searchTerm ? { search: searchTerm } : {};
            return {
                pages: select(coreDataStore).getEntityRecords('postType', 'page', query),
                currentPage: wp.data.select('core/editor').getCurrentPostId(),
                hasResolved: select(coreDataStore).hasFinishedResolution('getEntityRecords', ['postType', 'page', query]),
            };
        },
        [searchTerm]
    );

    return (
        <PluginSidebar
            name="gutenberg_edit_pages"
            icon={editPagesIcon}
            title={__('Edit Pages', 'hostinger-easy-onboarding')}
            className="gutenberg-edit-pages"
			isPinnable={true}
			isPinned={true}

        >
            <Panel className="gutenberg-edit-pages-panel" initialOpen>
                <PanelBody title={__('Search Pages', 'hostinger-easy-onboarding')} initialOpen>
                    <SearchControl
                        __nextHasNoMarginBottom
                        label={__('Search pages', 'hostinger-easy-onboarding')}
                        placeholder={__('Search pages', 'hostinger-easy-onboarding')}
                        onChange={setSearchTerm}
                        value={searchTerm}
                        className="gutenberg-edit-pages-search"
                        help={__('Search for pages by title', 'hostinger-easy-onboarding')}
                    />
                    <hr />
                    <PagesList hasResolved={hasResolved} pages={pages} currentPage={currentPage} />
                    <hr />
                    <CreatePageButton />
                    <Notifications />
                </PanelBody>
            </Panel>
        </PluginSidebar>
    );
};

/**
 * Registers the Gutenberg edit pages plugin.
 */
registerPlugin('gutenberg-edit-pages', { render: PagesSearchControl });

/**
 * Adds an icon and modifies the appearance of the edit pages button.
 * This function is called after a delay and on specific events.
 */
const addPagesBtn = () => {
    try {
        const editPagesbutton = document.querySelector('button[aria-controls="gutenberg-edit-pages:gutenberg_edit_pages"]');
        const icon = `
            <svg width="12" height="12" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M6.9 14.2c0-.4.2-.8.6-.8h6.1c.4 0 .7.4.7.8s-.3.7-.7.7H7.5c-.4 0-.6-.3-.6-.7z"/>
                <path fill-rule="evenodd" d="M4.3 12.7L13.1 3.8c0 0 0 0 0-.1s0 0 0-.1L12.2 2.8c0 0 0 0-.1 0s0 0-.1 0L6.7 8.3 3.3 11.7c0 0 0 0 0 0s0 0 0 0l-.4 1.4 1.3-.4c0 0 0 0 0 0s0 0 0 0zM5.6 7.2L2.2 10.6c-.1.1-.1.2-.2.3s-.1.1-.1.2-.1.1-.1.2l-.6 2c-.1.7-.2 1-.2 1.2.1.2.3.4.5.4.2.1.5 0 1.1-.2l2.1-.6c.1 0 .2 0 .3-.1s.1 0 .1-.1c.1 0 .2-.1.3-.2l8.7-8.8c.4-.4.6-.6.7-.9.1-.2.1-.4 0-.6-.1-.2-.3-.4-.7-.8L13.3 1.8c-.4-.4-.6-.6-.9-.7-.2-.1-.4-.1-.6 0-.2.1-.4.3-.8.7L5.6 7.2z"/>
            </svg>
        `;

        if (editPagesbutton) {
            editPagesbutton.innerHTML = icon + ' ' + __('Edit Pages', 'hostinger-easy-onboarding');
            editPagesbutton.classList.replace('is-compact', 'is-default');
            editPagesbutton.classList.add('is-secondary');
        }
    } catch (error) {
        console.error(__('An error occurred while modifying the button:', 'hostinger-easy-onboarding'), error);
    }
};

// Call addPagesBtn after a delay and on specific events
setTimeout(addPagesBtn, 500);
window.addEventListener('DOMContentLoaded', addPagesBtn);
window.addEventListener('click', addPagesBtn);
