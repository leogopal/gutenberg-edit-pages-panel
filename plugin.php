<?php

/**
 * Plugin Name:       Gutenberg Edit Pages Panel
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            leogopal
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       lg-gutenberg-edit-pages-panel
 *
 * @package           gutenberg-edit-pages-panel
 */

add_action(
	'enqueue_block_editor_assets',
	function () {
		$gutenberg_edit_pages = plugin_dir_path(__FILE__) . 'build/gutenberg_edit_pages.asset.php';

		if (file_exists($gutenberg_edit_pages)) {
			$assets = include $gutenberg_edit_pages;
			wp_enqueue_script(
				'gutenberg_edit_pages',
				plugin_dir_url(__FILE__) . 'build/gutenberg_edit_pages.js',
				$assets['dependencies'],
				$assets['version'],
				true
			);
		}
	}
);
