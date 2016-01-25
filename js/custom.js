/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () {

/*
    var avatar = $(".avatar");
    avatar.each(function (i, e) {
        var profilePic = $(e).children("img").prop("src");
        $(e).prev().css("background", "url(" + profilePic + ")");
    });

    $(avatar).prev().foggy({
        blurRadius: 8, // In pixels.
        opacity: 1, // Falls back to a filter for IE.
        cssFilterSupport: true  // Use "-webkit-filter" where available.
    });
*/

    var ntLatest = $('#nt-latest').newsTicker({
        row_height: 60,
        max_rows: 5,
        duration: 2000,
        prevButton: $('.nt-prev'),
        nextButton: $('.nt-next')
    });

    var ntPopular = $('#nt-popular').newsTicker({
        row_height: 60,
        max_rows: 5,
        duration: 10000,
        prevButton: $('.nt-prev'),
        nextButton: $('.nt-next')
    });

    var ntNews = $('#nt-news').newsTicker({
        row_height: 60,
        max_rows: 5,
        duration: 10000,
        prevButton: $('.nt-prev'),
        nextButton: $('.nt-next')
    });

    $("#candidate-selection-menu li").on("click", function () {
        var selectedCandidate = $(this).prop("id");

        $.ajax({
            url: "some/url/i/fancy",
            context: document.body,
            beforeSend: function () {
                $(".candidate-container").loading({
                    action: "show",
                    element: ".candidate-container",
                    loadingText: "Fetching Data..."
                });
            }
        }).done(function (data) {
            $(".candidate-container").loading({
                action: "hide"
            });
            $(".site-overlay").click();
            //console.log(data);
        }).fail(function () {

        });
    });


    $.ajax({
        url: "some/url/i/fancy",
        context: document.body,
        beforeSend: function () {
            $(".trend-graph").loading({
                action: "show",
                element: ".trend-graph",
                loadingText: "Fetching Analytics Data...",
                loadIcon: "fw-fan",
                loadAnimation: "fw-spin",
            });
        },
        error:function (xhr, ajaxOptions, thrownError){
            if(xhr.status==404) {
                console.log(thrownError);
            }
        }
    }).done(function (data) {
        $(".trend-graph").loading({
            action: "hide"
        });
    }).fail(function () {

    });
    
    $.ajax({
        url: "some/url/i/fancy",
        context: document.body,
        beforeSend: function () {
            $(".sentiment-graph").loading({
                action: "show",
                element: ".sentiment-graph",
                loadingText: "Fetching Analytics Data...",
                loadIcon: "fw-fan",
                loadAnimation: "fw-spin",
            });
        },
        error:function (xhr, ajaxOptions, thrownError){
            if(xhr.status==404) {
                console.log(thrownError);
            }
        }
    }).done(function (data) {
        $(".sentiment-graph").loading({
            action: "hide"
        });
    }).fail(function () {

    });


    var cardHeight = $(".card").outerHeight(true);
    $(".menu-btn").outerHeight(cardHeight);
    $(".menu-btn").css("padding-top", cardHeight / 2 - 50);

});




(function ($) {
    /* ========================================================================
     * pre-loader function
     * ======================================================================== */
    $.fn.loading = function (options) {
        var settings = $.extend({
            // defaults.
            action: "show",
            element: "",
            loadIcon: "fw-wso2-logo",
            loadAnimation: "fw-pulse",
            loadingText: "Fetching Data..."
        }, options);
        var loaderString = '<div class="loader-wrapper text-center"><i class="icon fw '+settings.loadIcon +' '+settings.loadAnimation+'"></i><br/><span>'+settings.loadingText+'</span><div>';
        var loaderHeight = $(this).height();

        return $(this).each(function () {
            if (settings.action === 'show') {
                $(this).children().hide();
                $(this).prepend(loaderString).addClass('loading');
                $(".loader-wrapper").height(loaderHeight);
                $(".loader-wrapper").css("padding-top", loaderHeight / 2 - 50);
            }
            if (settings.action === 'hide') {
                $(this).children().show();
                $(".loader-wrapper").remove();
            }
        });

    };
}(jQuery));
