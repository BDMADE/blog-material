
(function($) {
    "use strict";
    /*==============================
        Is mobile
    ==============================*/
    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    }
    var windowWidth = window.innerWidth,
        windowHeight = $(window).height();



    /*==============================
        Image cover
    ==============================*/
    function imgCover() {
        $('.image-cover, .blog-grid .post-media .image-wrap, .blog-grid-2 .post-media .image-wrap, .blog-list .post-media').each(function() {
            var $this = $(this),
                image = $this.find('img'),
                heightWrap = $this.outerHeight(),
                widthImage = image.outerWidth(),
                heightImage = image.outerHeight();
                if (heightImage < heightWrap) {
                  image.css({
                    'height': '100%',
                    'width': 'auto'
                  });
                }
        });
    }

    function place() {
        var $ph = $('input[type="search"], input[type="text"], input[type="email"], textarea');
        $ph.each(function() {
            var value = $(this).val();
            $(this).focus(function() {
                if ($(this).val() === value) {
                    $(this).val('');
                }
            });
            $(this).blur(function() {
                if ($(this).val() === '') {
                    $(this).val(value);
                }
            });
        });
    }


    // READY FUNCTION
    $(document).ready(function() {

        if (isMobile.any()) {
            $('html').addClass('ismobile');
        }

        $('.post-share').each(function() {
            $(this).find('.share-toggle').click(function() {
                $(this).toggleClass('toggle-active');
                $(this).siblings('.share').toggleClass('share-active');
            });
        });

        $('.widget_latest_post .content-text').each(function() {
            var numLine = 2,
                fontSize = 14,
                lineHeight = 1.7,
                height = fontSize * lineHeight * numLine;
            $(this).find('a').css({
                'font-size': fontSize + 'px',
                'line-height': lineHeight + 'em',
                'max-height': height,
                'overflow': 'hidden'
            });
        });

        if ($('.sidebar-page').children('.widget-wrapper').length === 0) {
            $('.sidebar-page')
                .children('#page-header')
                .css('margin-bottom', 200);
        }

        $('.ismobile').find('.blog-grid-2').on('click', '.post', function() {
            $('.ismobile').find('.blog-grid-2 .post').removeClass('post-active');
            $(this).addClass('post-active');
        });
    });

    $(window).load(function() {
        $('.preloader').fadeOut(1000);
        imgCover();
        place();

        if ($('.grid-wrapper').length > 0) {
            setTimeout(function() {
                $('.grid-wrapper').masonry({
                    columnWidth: '.grid-item.col-md-3',
                    itemSelector: '.grid-item'
                });
            },1);
            $('.grid-wrapper .grid-item:nth-of-type(1), .grid-wrapper .grid-item:nth-of-type(10n + 1)')
                .removeClass('col-md-3')
                .addClass('col-md-6');

            $('.grid-wrapper .grid-item:nth-of-type(8), .grid-wrapper .grid-item:nth-of-type(10n + 8)')
                .removeClass('col-md-3')
                .addClass('col-md-6');
        }
    });
    $(window).on('load resize', function() {
        var containerpageWidth = $('.page-container').width(),
            sidebarWidth = $('.sidebar-page').outerWidth(),
            contentWidth = containerpageWidth - sidebarWidth - 15;
        $('.blog-content').width(contentWidth);


        var dataHeader = $('#page-header').data('header');
        if (window.innerWidth <= 991) {
            var headerHeight = $('#page-header .logo').height() + 60;
            $('.blog-content').css('padding-top', headerHeight);
            $('[data-header="header-top"]').removeClass(dataHeader);
            $('#page-header').prependTo('#page-wrap');
        } else {
            $('.blog-content').css('padding-top', '0');
            $('[data-header="header-top"]').addClass(dataHeader);
            $('#page-header').prependTo('.sidebar-page');
        }
        var headerTop = $('#page-header.header-top'),
            headerHeight = headerTop.find('.logo').height() + 60;
        headerTop
            .closest('#page-wrap')
            .find('.page-container')
                .css({
                    'margin-top': headerHeight + 52,
                });
        if ($('#page-wrap').children('#page-header').length === 0) {
            $('#page-header.header-top').prependTo('#page-wrap');
        }
        if (window.innerWidth <= 991 || $('#page-header').hasClass(dataHeader) == true) {
            $('.navlist').height($(window).height());
        }
    });
    $(window).load(function() {
        if ($('.pi-navigation').length > 0) {
            var nav = $('.pi-navigation');
            $('.menu-item-has-children').each(function() {
                var itemhaschilren = $(this).children('a');
                itemhaschilren.on('click', function(evt) {
                    evt.preventDefault();
                    $(this)
                        .next('.sub-menu')
                            .stop()
                            .slideToggle(300);
                });
            });
        }
        var containerOffset = $('.page-container').offset().left;
        if (containerOffset < 210) {
            var translate = 210 - containerOffset + 10;
        }
        $('.open-menu').on('click', function() {
            $(this)
                .toggleClass('toggle-active')
                .css({
                    '-webkit-transform': 'translateX(0px)',
                });
            $(document).find('.open-menu.toggle-active').css({
                '-webkit-transform': 'translateX(' + translate + 'px)',
            });
            $('.navlist').toggleClass('navlist-active');
        });
        $('html').click(function() {
            $('.open-menu')
                .removeClass('toggle-active')
                .css({
                    '-webkit-transform': 'translateX(0px)',
                });
            $('.navlist').removeClass('navlist-active');
        });
        $('.open-menu, .navlist').click(function(evt) {
            evt.stopPropagation();
        });
    });

    $(window).load(function() {
        var paginationSlider = ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>'];
        if ($(".twitter-slider").length > 0) {
            $(".twitter-slider").owlCarousel({
                autoPlay: false,
                slideSpeed: 300,
                navigation: true,
                pagination: false,
                singleItem: true,
                autoHeight: true,
                transitionStyle: 'fade',
                navigationText: paginationSlider
            });
        }
        
        if ($(".post-slider").length > 0) {
            $(".post-slider").owlCarousel({
                autoPlay: false,
                slideSpeed: 300,
                navigation: true,
                pagination: false,
                singleItem: true,
                autoHeight: true,
                navigationText: paginationSlider
            });
        }
        
        if ($(".related-slider").length > 0) {
            $(".related-slider").owlCarousel({
                autoPlay: false,
                slideSpeed: 300,
                items: 3,
                itemsCustom: [[0, 1], [600, 2], [870, 3]],
                navigation: true,
                pagination: false,
                autoHeight: true,
                itemsScaleUp: true,
                navigationText: paginationSlider
            });
        }
        setTimeout(function() {
            $('.sidebar-page').theiaStickySidebar({
                updateSidebarHeight: true
            });
        },1000);
    });
})(jQuery);