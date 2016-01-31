/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () {

    var ntLatest = $('#nt-latest').newsTicker({
        row_height: 80,
        max_rows: 5,
        duration: 2000,
        prevButton: $('.nt-prev'),
        nextButton: $('.nt-next')
    });

    var ntPopular = $('#nt-popular').newsTicker({
        row_height: 80,
        max_rows: 5,
        duration: 10000,
        prevButton: $('.nt-prev'),
        nextButton: $('.nt-next')
    });

    var ntNews = $('#nt-news').newsTicker({
        row_height: 80,
        max_rows: 5,
        duration: 10000,
        prevButton: $('.nt-prev'),
        nextButton: $('.nt-next')
    });


    var words1 = [{text: "Lorem", weight: 13},{text: "Ipsum", weight: 10},{text: "Dolor", weight: 9},{text: "Sit", weight: 8},{text: "Amet", weight: 6},{text: "Adipiscing", weight: 5}];
    var words2 = [{text: "Lorem", weight: 10},{text: "Ipsum", weight: 1},{text: "Dolor", weight: 9},{text: "Sit", weight: 8},{text: "Amet", weight: 3},{text: "Adipiscing", weight: 8}];
    var words3 = [{text: "Lorem", weight: 3},{text: "Ipsum", weight: 2},{text: "Dolor", weight: 6},{text: "Sit", weight: 8},{text: "Amet", weight: 6},{text: "Adipiscing", weight: 12}];

    $('#word-cloud-1').jQCloud(words1,{
      classPattern: null,
      height: 100,
      colors: ["#33CCCC","#009999","#99FFFF","#66CCCC","#339999","#006666"],
      fontSize: {
        from: 0.1,
        to: 0.02
      }
    });

    $('#word-cloud-2').jQCloud(words2,{
      classPattern: null,
      height: 100,
      colors: ["#FF9900","#FF9933","#CC6600","#FF9966","#CC6633","#993300"],
      fontSize: {
        from: 0.1,
        to: 0.02
    }
    });

    $('#word-cloud-3').jQCloud(words3,{
      classPattern: null,
      height: 100,
      colors: ["#CC00FF","#CC33FF","#9900CC","#CC66FF","#9933CC","#660099"],
      fontSize: {
        from: 0.1,
        to: 0.02
      }
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

    $(".repick-btn").show();
    if($(".repick-btn").is(":visible") == true){
       $(".menu-btn").hide();
    }
    $(".repick-btn").on("click",function(){
        console.log("asdads");
        $(".menu-btn").click();
    });

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
