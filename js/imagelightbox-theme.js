var imagelightbox = { options: {
	onStart:    function() { imglb_overlayOn(); imglb_closeButtonOn( imglb_instance ); },
	onEnd:      function() { imglb_captionOff(); imglb_overlayOff(); imglb_closeButtonOff(); imglb_activityIndicatorOff(); },
	onLoadStart:  function() { imglb_captionOff(); imglb_activityIndicatorOn(); },
	onLoadEnd:    function() { imglb_captionOn(); imglb_activityIndicatorOff(); }
} };

var imglb_activityIndicatorOn = function(){
	jQuery( '<div id="imagelightbox-loading"><div></div></div>' ).appendTo( 'body' );
},
imglb_activityIndicatorOff = function(){
	jQuery( '#imagelightbox-loading' ).remove();
},
imglb_overlayOn = function(){ 
	jQuery( '<div id="imagelightbox-overlay"></div>' ).appendTo( 'body' );
},
imglb_overlayOff = function(){
	jQuery( '#imagelightbox-overlay' ).remove();
},
imglb_closeButtonOn = function( instance ){
	jQuery( '<a href="#" id="imagelightbox-close">Close</a>' ).appendTo( 'body' ).on( 'click touchend', function(){ jQuery( this ).remove(); instance.quitImageLightbox(); return false; });
},
imglb_closeButtonOff = function() {
	jQuery( '#imagelightbox-close' ).remove();
},
imglb_captionOn = function() {
	var description = jQuery( 'a[href="' + jQuery( '#imagelightbox' ).attr( 'src' ) + '"] img' ).attr( 'data-desc' ) || jQuery( 'a[href="' + jQuery( '#imagelightbox' ).attr( 'src' ) + '"] img' ).attr( 'alt' );
	if( description.length > 0 )
		jQuery( '<div id="imagelightbox-caption">' + description + '</div>' ).appendTo( 'body' );
},
imglb_captionOff = function() {
	jQuery( '#imagelightbox-caption' ).remove();
},
imglb_navigationOn = function( instance, selector ) {
	var images = jQuery( selector );
	if( images.length )
	{
		var nav = jQuery( '<div id="imagelightbox-nav"></div>' );
		for( var i = 0; i < images.length; i++ )
			nav.append( '<a href="#"></a>' );

		nav.appendTo( 'body' );
		nav.on( 'click touchend', function(){ return false; });

		var navItems = nav.find( 'a' );
		navItems.on( 'click touchend', function()
		{
			var jQuerythis = jQuery( this );
			if( images.eq( jQuerythis.index() ).attr( 'href' ) != jQuery( '#imagelightbox' ).attr( 'src' ) )
				instance.switchImageLightbox( jQuerythis.index() );

			navItems.removeClass( 'active' );
			navItems.eq( jQuerythis.index() ).addClass( 'active' );

			return false;
		})
		.on( 'touchend', function(){ return false; });
	}
},
imglb_navigationUpdate = function( selector ){
	var items = jQuery( '#imagelightbox-nav a' );
	items.removeClass( 'active' );
	items.eq( jQuery( selector ).filter( '[href="' + jQuery( '#imagelightbox' ).attr( 'src' ) + '"]' ).index( selector ) ).addClass( 'active' );
},
imglb_navigationOff = function() {
	jQuery( '#imagelightbox-nav' ).remove();
};