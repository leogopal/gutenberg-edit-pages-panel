<?php

/**
 * Plugin Name:       Gutenberg Edit Pages Panel
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            leogopal
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       hostinger-easy-onboarding
 *
 * @package           gutenberg-edit-pages-panel
 */

defined('ABSPATH') || exit;

// Add a custom block category
add_action(
	'enqueue_block_editor_assets',
	function () {

		// Automatically load imported dependencies and assets version.
		$asset_file = include plugin_dir_path(__FILE__) . 'build/index.asset.php';

		// Enqueue CSS dependencies.
		foreach ($asset_file['dependencies'] as $style) {
			wp_enqueue_style($style);
		}

		wp_enqueue_script(
			'gutenberg_edit_pages_panel',
			plugin_dir_url(__FILE__) . 'build/index.js',
			$asset_file['dependencies'],
			filemtime(plugin_dir_path(__FILE__) . 'build/index.js'),
			false
		);

		wp_enqueue_style(
			'gutenberg_edit_pages_panel',
			plugin_dir_url(__FILE__) . 'build/style-index.css',
			array(),
			filemtime(plugin_dir_path(__FILE__) . 'build/style-index.css')
		);

		// load_plugin_textdomain('hostinger-easy-onboarding', false, dirname(plugin_basename(__FILE__)) . '/languages');
		// wp_set_script_translations('gutenberg_edit_pages_panel-script', 'hostinger-easy-onboarding', plugin_dir_path(__FILE__) . '/languages');
	}

);
