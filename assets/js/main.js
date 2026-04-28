jQuery(document).ready(function ($) {

  "use strict";

  ///////////////////////////////
  // GLOBAL VARIABLES
  // var location = window.history.location || window.location;

  ///////////////////////////////
  // ScrollTo

  var scrollToTarget = function( $scrollTarget, scrollDuration ) {
    if ( typeof $scrollTarget !== 'undefined' ) {
      if ( typeof $.fn.velocity !== 'undefined' ) {
        $scrollTarget
          .velocity( 'finish' )
          .velocity( 'scroll', {
            duration: scrollDuration,
          });
      } else if ( typeof $.fn.scrollTo !== 'undefined' ) {
        $body.scrollTo( $scrollTarget, scrollDuration );
      } else {
        $scrollTarget.stop().scroll();
      }
    }
  };

  $( '.scrollto' ).on( 'click', function(e) {
    e.preventDefault();

    var $this            = $(this);
    var scrollTargetHref = $this.attr( 'href' )
    var scrollTarget     = $( scrollTargetHref );
    var scrollDuration   = '800';

    scrollToTarget( scrollTarget, scrollDuration );

    NAV_DRAWER.close();

    if ( $this.attr('id') == 'button_begin' ) {
      var $intro = $( '#introduction' );
      if ( $intro.length && ( typeof CHAPTERS !== 'undefined' ) ) {
        CHAPTERS.openChapter( $intro );
      }
    }

    if ( typeof ga !== 'undefined' ) {
      ga('send', 'event', 'LinkWithin', scrollTargetHref, scrollTargetHref);
    }

  });

  ///////////////////////////////
  // PNG Fallbacks

  function svgasimg() {
    return document.implementation.hasFeature(
    "http://www.w3.org/TR/SVG11/feature#Image", "1.1");
  }

  if (!svgasimg()){
    var e = document.getElementsByTagName("img");
    if (!e.length){
      e = document.getElementsByTagName("IMG");
    }
    for (var i=0, n=e.length; i<n; i++){
      var img = e[i],
          src = img.getAttribute("src");
      if (src.match(/svgz?$/)) {
        /* URL ends in svg or svgz */
        img.setAttribute("src",
          img.getAttribute("data-fallback"));
      }
    }
  }

  ///////////////////////////////
  // FitVids

  // if ( typeof $.fn.fitVids !== 'undefined' ) {
   // $(".main").fitVids();
   // console.log( 'fitVids should be happening now.');
  // }

  ///////////////////////////////
  // Outlinks

  $('.colophon a').attr('target','_blank');

  ///////////////////////////////

});
