<?php

function assets() {
	wp_enqueue_style( 'stylesheet', get_template_directory_uri() . '/build/css/style.css', array(), '1.0.0', 'all' );

	wp_enqueue_script( 'scripts', get_template_directory_uri() . '/build/js/bundle.js', array('jquery'), '1.0.0', true);
}

add_action('wp_enqueue_scripts','assets');


?>