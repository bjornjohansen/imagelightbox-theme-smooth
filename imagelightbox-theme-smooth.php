<?php
/*
Plugin Name: imageLightbox Smooth theme
Plugin URI: https://github.com/bjornjohansen/imagelightbox-theme-smooth
Description: Smooth theme for the imageLightbox plugin
Version: 0.1
Author: Bjørn Johansen
Author URI: https://bjornjohansen.no
Text Domain: imagelightbox-theme-smooth
License: GPL2

	Copyright 2014 Bjørn Johansen  (email : post@bjornjohansen.no)

	This program is free software; you can redistribute it and/or modify
	it under the terms of the GNU General Public License, version 2, as 
	published by the Free Software Foundation.

	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU General Public License for more details.

	You should have received a copy of the GNU General Public License
	along with this program; if not, write to the Free Software
	Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA

*/

new ImageLightboxThemeSmooth;

class ImageLightboxThemeSmooth {

	const version = '0.1';

	function __construct() {
		add_filter( 'imageLightbox_include_css', '__return_false' );
		add_filter( 'imageLightbox_options', array( $this, 'return_imagelightbox_options' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_scripts_and_styles' ) );
	}

	function return_imagelightbox_options( $options ) {
		$options = array();
		return $options;
	}

	function enqueue_scripts_and_styles() {
		if ( defined( 'SCRIPT_DEBUG') && SCRIPT_DEBUG ) {
			wp_enqueue_script( 'imageLightbox-theme', plugins_url( '/js/imagelightbox-theme.js', __FILE__ ), array( 'imageLightbox' ), self::version, true );
			wp_enqueue_style( 'imagelightbox-theme-styles', plugins_url( '/css/styles.css', __FILE__ ), null, self::version );
		} else {
			wp_enqueue_script( 'imageLightbox', plugins_url( '/js/imagelightbox-theme.min.js', __FILE__ ), array( 'imageLightbox' ), self::version, true );
			wp_enqueue_style( 'imagelightbox-theme-styles', plugins_url( '/css/styles.min.css', __FILE__ ), null, self::version );
		}

	}

}