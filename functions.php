<?php

function _themename_assets() {
	wp_enqueue_style( '_themename-stylesheet', get_template_directory_uri() . '/build/css/style.css', array(), '1.0.0', 'all' );

	wp_enqueue_script( '_themename-scripts', get_template_directory_uri() . '/build/js/bundle.js', array('jquery'), '1.0.0', true);
}

add_action('wp_enqueue_scripts','_themename_assets');


?>