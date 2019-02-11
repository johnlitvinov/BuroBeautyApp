 
function t121_setHeight(recid){
    var div=$("#youtubeiframe"+recid);
    var height=div.width() * 0.5625;
    div.height(height);
    div.parent().height(height);         
} 
function t071_unifyHeights(recid) {
    $('#rec'+recid+' .t071 .t-container').each(function() {
        var highestBox = 0;
        $('.t071__wrapper', this).each(function(){
            if($(this).height() > highestBox)highestBox = $(this).height(); 
        });  
        if($(window).width()>=960){
        	$('.t071__wrapper',this).css('height', highestBox); 
        }else{
	        $('.t071__wrapper',this).css('height', "auto");    
        }
    });
} 
function t113_highlight(recid){
  var url=window.location.href;
  var pathname=window.location.pathname;
  if(url.substr(url.length - 1) == "/"){ url = url.slice(0,-1); }
  if(pathname.substr(pathname.length - 1) == "/"){ pathname = pathname.slice(0,-1); }
  if(pathname.charAt(0) == "/"){ pathname = pathname.slice(1); }
  if(pathname == ""){ pathname = "/"; }
  $(".t113__list_item a[href='"+url+"']").addClass("t-active");
  $(".t113__list_item a[href='"+url+"/']").addClass("t-active");
  $(".t113__list_item a[href='"+pathname+"']").addClass("t-active");
  $(".t113__list_item a[href='/"+pathname+"']").addClass("t-active");
  $(".t113__list_item a[href='"+pathname+"/']").addClass("t-active");
  $(".t113__list_item a[href='/"+pathname+"/']").addClass("t-active");
}

function t113_showMenu(recid,pageid){
  var $flagmenudo = "2ok";
  $(window).bind('scroll', function() {
    if ($(window).scrollTop() > 200) {
      if($flagmenudo != "1ok"){$flagmenudo="1";}
    }
    else {
      if($flagmenudo!="2ok"){$flagmenudo="2";}
    }

    if ($flagmenudo=="1") {
      $('.t113').addClass('t113__fixed');
      $('.t113').css('display','none');
      $('.t113').fadeIn( "slow" );

	  $('#rec'+recid).find('.t113__space').hide();
      $flagmenudo="1ok";
    }
    if ($flagmenudo=="2") {
      $('.t113').removeClass('t113__fixed');
	  $('#rec'+recid).find('.t113__space').show();
      $flagmenudo="2ok";
    }
  });

  var current_path = window.location.pathname.split('/').pop();
  if(current_path=="page"+pageid+".html"){
    $("#t113linktopage"+pageid).css("opacity",".7");
  }
}

function t113_setWidth(recid){
  var t113timer;
  var el=$('#rec'+recid);
  $(window).resize(function() {
    if(t113timer) {
        window.clearTimeout(t113timer);
    }
    t113timer = window.setTimeout(function() {
        if($(window).width()>640){
          var w1= el.find("div[data-hook-left]").width()+20+50;
          el.find(".t113__list").css("padding-right",w1+"px");
        }else{
          el.find(".t113__list").css("padding-right",10+"px");  
        }
    }, 100);
  });
  $(window).resize();
} 
function t126_unifyHeights() {
    $('.t126 .t-container').each(function() {
        var highestBox = 0;
        $('.t126__title', this).each(function(){
        	$(this).css("height","auto");
            if($(this).height() > highestBox)highestBox = $(this).height(); 
        });  
        if($(window).width()>=960){
        	$('.t126__title',this).css('height', highestBox);   
        }else{
	        $('.t126__title',this).css('height', "auto");    
        }
        
        var highestBox = 0;
        $('.t126__descr', this).each(function(){
            if($(this).height() > highestBox)highestBox = $(this).height(); 
        });  
        if($(window).width()>=960){
        	$('.t126__descr',this).css('height', highestBox);   
        }else{
	        $('.t126__descr',this).css('height', "auto");    
        }
                
    });
}

 
function t131_unifyHeights() {
    $('.t131 .t-container').each(function() {
        var highestBox = 0;
        $('.t131__title', this).each(function(){
            if($(this).height() > highestBox)highestBox = $(this).height(); 
        });  
        if($(window).width()>=960){
        	$('.t131__title',this).css('height', highestBox);   
        }else{
	        $('.t131__title',this).css('height', "auto");    
        }
        
        var highestBox = 0;
        $('.t131__descr', this).each(function(){
            if($(this).height() > highestBox)highestBox = $(this).height(); 
        });  
        if($(window).width()>=960){
        	$('.t131__descr',this).css('height', highestBox);   
        }else{
	        $('.t131__descr',this).css('height', "auto");    
        }
    });
} 
function t132_unifyHeights() {
    $('.t132__box').children('.t132__wrappper').each(function() {
        $(this).children('a').children('div').css('width', $(this).outerWidth()-1);
        $(this).children('a').children('div').css('height', $(this).outerHeight()-40);	        
    });
} 
if (! window.yashare2scriptLoaded){
    var scriptService = document.createElement('script');
    scriptService .src = "https://yastatic.net/share2/share.js";
    scriptService .type = "text/javascript";
    scriptService .charset = "UTF-8";
    document.documentElement.appendChild(scriptService);

    window.yashare2scriptLoaded = true;
}
 
function t142_checkSize(recid){
  var el=$("#rec"+recid).find(".t142__submit");
  if(el.length){
    var btnheight = el.height() + 5;
    var textheight = el[0].scrollHeight;
    if (btnheight < textheight) {
      var btntext = el.text();
      el.addClass("t142__submit-overflowed");
      el.html("<span class=\"t142__text\">" + btntext + "</span>");
    }
  }
} 
function t179_showvideo(recid){
  $("#rec"+recid+" .t179__playbutton").css("display","none");
  $("#rec"+recid+" .t179__videocontainer").css("display","block");
  var height=$("#rec"+recid+" .t179__videocontainer").attr("data-height");
  var youtubeid=$("#rec"+recid+" .t179__videocontainer").attr("data-youtube-id");
  if(height=="")height="540";

  $("#youtubeiframe_carier"+recid).html("<iframe id=\"youtubeiframe{$a.id}\" width=\"100%\" height=\""+height+"\" src=\"//www.youtube.com/embed/"+youtubeid+"?autoplay=1&rel=0&fmt=18\" frameborder=\"0\" allowfullscreen></iframe>");

  if(height==""){
    var div=$("#youtubeiframe"+recid);
    var height=div.width() * 0.5625;
    div.css("height",height);
  }
}
 
function t190_scrollToTop(){
    $('html, body').animate({scrollTop: 0}, 700);								
}	  
 
function t199_showMenu(recid){
  var el=$("#rec"+recid);
  el.find('.t199__js__menu').each(function() {
    var $toggler = el.find('.t199__js__menu-toggler'),
    $menu = $(this),
    $body = $('body'),
    CLASS_MENU = 't199__is__menu';
      
  $menu.find('.t199__menu-item').each(function() {
    var curUrl = $(this).attr('href');
    if (typeof curUrl != 'undefined' && curUrl.indexOf('#') > -1 && curUrl.substring(0, 9) != '#submenu:') {
      $(this).on('click', function(e) {
        $body.removeClass(CLASS_MENU);
        });
    }
  });      

    $toggler.on('click', function(e) {
      e.stopPropagation();
      e.preventDefault();
      $body.toggleClass(CLASS_MENU);
    });

    $(document).on('click', function() {
      $body.removeClass(CLASS_MENU);
    });

    $menu.on('click', function(e) {
      e.stopPropagation();
    });
  })
  $('.t199__mmenu').bind('clickedAnchorInTooltipMenu',function(){
    $('body').removeClass('t199__is__menu');
  });
}

function t199_positionHeader(recid){
  var el=$("#rec"+recid);
  var $header = el.find('.t199__js__header'),

    isScrolling = false,

    CLASS_ACTIVE = 't199__is__active';

  function updateHeader() {
    isScrolling = true;

    if ($(window).scrollTop() > 0) $header.addClass(CLASS_ACTIVE);
    else $header.removeClass(CLASS_ACTIVE);
  }

  setInterval(function() {
    if(isScrolling) {
      isScrolling = false;
    }
  }, 100);

  $(window).on('scroll', updateHeader)
  updateHeader();
}

function t199_setPath(pageid){
}

function t199_highlight(recid){
  var url=window.location.href;
  var pathname=window.location.pathname;
  if(url.substr(url.length - 1) == "/"){ url = url.slice(0,-1); }
  if(pathname.substr(pathname.length - 1) == "/"){ pathname = pathname.slice(0,-1); }
  if(pathname.charAt(0) == "/"){ pathname = pathname.slice(1); }
  if(pathname == ""){ pathname = "/"; }
  $(".t199__menu a[href='"+url+"']").addClass("t-active");
  $(".t199__menu a[href='"+url+"/']").addClass("t-active");
  $(".t199__menu a[href='"+pathname+"']").addClass("t-active");
  $(".t199__menu a[href='/"+pathname+"']").addClass("t-active");
  $(".t199__menu a[href='"+pathname+"/']").addClass("t-active");
  $(".t199__menu a[href='/"+pathname+"/']").addClass("t-active");
}

function t199_checkAnchorLinks(recid) {
    if ($(window).width() >= 960) {
        var t199_navLinks = $("#rec"+recid+" .t-menu__link-item:not(.tooltipstered)[href*='#']");
        if (t199_navLinks.length > 0) {
            t199_catchScroll(t199_navLinks);
        }
    }
}

function t199_catchScroll(t199_navLinks) {
    var t199_clickedSectionId = null,
        t199_sections = new Array(),
        t199_sectionIdTonavigationLink = [],
        t199_interval = 100,
        t199_lastCall, t199_timeoutId;
    t199_navLinks = $(t199_navLinks.get().reverse());
    t199_navLinks.each(function() {
        var t199_cursection = t199_getSectionByHref($(this));
        if (typeof t199_cursection.attr("id") != "undefined") {
            t199_sections.push(t199_cursection);
        }
        t199_sectionIdTonavigationLink[t199_cursection.attr("id")] = $(this);
    });
		t199_updateSectionsOffsets(t199_sections);
		$(window).bind('resize', t_throttle(function(){t199_updateSectionsOffsets(t199_sections);}, 200));
		$('.t199').bind('displayChanged',function(){t199_updateSectionsOffsets(t199_sections);});
		setInterval(function(){t199_updateSectionsOffsets(t199_sections);},5000);
    t199_highlightNavLinks(t199_navLinks, t199_sections, t199_sectionIdTonavigationLink, t199_clickedSectionId);

    t199_navLinks.click(function() {
        if (!$(this).hasClass("tooltipstered")) {
            t199_navLinks.removeClass('t-active');
            t199_sectionIdTonavigationLink[t199_getSectionByHref($(this)).attr("id")].addClass('t-active');
            t199_clickedSectionId = t199_getSectionByHref($(this)).attr("id");
        }
    });
    $(window).scroll(function() {
        var t199_now = new Date().getTime();
        if (t199_lastCall && t199_now < (t199_lastCall + t199_interval)) {
            clearTimeout(t199_timeoutId);
            t199_timeoutId = setTimeout(function() {
                t199_lastCall = t199_now;
                t199_clickedSectionId = t199_highlightNavLinks(t199_navLinks, t199_sections, t199_sectionIdTonavigationLink, t199_clickedSectionId);
            }, t199_interval - (t199_now - t199_lastCall));
        } else {
            t199_lastCall = t199_now;
            t199_clickedSectionId = t199_highlightNavLinks(t199_navLinks, t199_sections, t199_sectionIdTonavigationLink, t199_clickedSectionId);
        }
    });
}


function t199_updateSectionsOffsets(sections){
	$(sections).each(function(){
		var t199_curSection = $(this);
		t199_curSection.attr("data-offset-top",t199_curSection.offset().top);
	});
}


function t199_getSectionByHref(curlink) {
    var t199_curLinkValue = curlink.attr("href").replace(/\s+/g, '');
    if (curlink.is('[href*="#rec"]')) {
        return $(".r[id='" + t199_curLinkValue.substring(1) + "']");
    } else {
        return $(".r[data-record-type='215']").has("a[name='" + t199_curLinkValue.substring(1) + "']");
    }
}

function t199_highlightNavLinks(t199_navLinks, t199_sections, t199_sectionIdTonavigationLink, t199_clickedSectionId) {
    var t199_scrollPosition = $(window).scrollTop(),
        t199_valueToReturn = t199_clickedSectionId;
    /*if first section is not at the page top (under first blocks)*/
    if (t199_sections.length != 0 && t199_clickedSectionId == null && t199_sections[t199_sections.length-1].attr("data-offset-top") > (t199_scrollPosition + 300)){
      t199_navLinks.removeClass('t-active');
      return null;
    }

    $(t199_sections).each(function(e) {
        var t199_curSection = $(this),
            t199_sectionTop = t199_curSection.attr("data-offset-top"),
            t199_id = t199_curSection.attr('id'),
            t199_navLink = t199_sectionIdTonavigationLink[t199_id];
        if (((t199_scrollPosition + 300) >= t199_sectionTop) || (t199_sections[0].attr("id") == t199_id && t199_scrollPosition >= $(document).height() - $(window).height())) {
            if (t199_clickedSectionId == null && !t199_navLink.hasClass('t-active')) {
                t199_navLinks.removeClass('t-active');
                t199_navLink.addClass('t-active');
                t199_valueToReturn = null;
            } else {
                if (t199_clickedSectionId != null && t199_id == t199_clickedSectionId) {
                    t199_valueToReturn = null;
                }
            }
            return false;
        }
    });
    return t199_valueToReturn;
}
 
function t204_clickBurger(recid){
  var el=$("#rec"+recid);

  el.find('#t204__burger').click(function(e){
      t204_showMenu(recid);
      if(window.lazy=='y'){t_lazyload_update();}
  }); 

  el.find('#t204__closelayer').click(function(e){
      t204_hideMenu(recid);
  });
  
  $('.t204__burger').bind('clickedAnchorInTooltipMenu',function(){    
    t204_hideMenu(recid);
  });  
}

function t204_showMenu(recid) {  
  var el=$("#rec"+recid); 
  el.find("#t204__menu").finish();              
  el.find('#t204__menu').css("visibility","visible");
  el.find('#t204__menu').css("opacity","0");
  el.find('#t204__menu').css("right","-300px");
  el.find('#t204__menu').animate({"opacity": "1","right": "0px"}, 300);
  el.find('#t204__closelayer').css("visibility","visible"); 
}

function t204_hideMenu(recid) {
  var el=$("#rec"+recid);
  el.find("#t204__menu").finish();		          
  el.find('#t204__menu').css("visibility","hidden");
  el.find('#t204__closelayer').css("visibility","hidden");	
  el.find(".t204__item a").each(function() {
    $(this).on('click', function(e) {
      if ($(this).is(".t794__tm-link")) { return; }    
      t204_hideMenu(recid);
    });
  });
} 
function t213_init(recid){
    var el = $("#t213-marker"+recid);
    var cotimer;
    var wnd=$(window);
    var bdy=$('body');
    var needcolor=el.attr("data-bg-color");
    bdy.css("transition", "background-color 1000ms linear");
    if(window.t213higher===undefined)window.t213higher=1000000;
    if(window.t213higher>el.offset().top){
        window.t213higher=el.offset().top;
        window.t213higher_id=recid;
    }
    var bodydefcolor=bdy.css("background-color");
    var timer_count=0;

    wnd.scroll(function() {
        if(cotimer) {
            window.clearTimeout(cotimer);
            if(timer_count>=15){
                t212_timer_do(el,wnd,bdy,needcolor,bodydefcolor,recid);
            }
            timer_count++;
        }
        cotimer = window.setTimeout(function() {
            t212_timer_do(el,wnd,bdy,needcolor,bodydefcolor,recid);
            timer_count=0;
        }, 100);
    });        

    wnd.scroll();         
}

function t212_timer_do(el,wnd,bdy,needcolor,bodydefcolor,recid){
    var a,c,d,bc;
    a = el.offset().top;
    c = wnd.scrollTop();
    d = wnd.height();                  
    bc = bdy.attr("data-bg-color");

    if((c+d) >= a){
      bdy.css("background-color",needcolor);
    }else{
      if(window.t213higher_id==recid){
        bdy.css("background-color",bodydefcolor);
      }
    }    
} 
function t219_showcomments(recid){
  $("#rec"+recid+" .t-btn").css("display","none");
  $("#rec"+recid+" .t219__blocktitle").css("display","block");

  var disqus_shortname = $("#rec"+recid+" .t219__disqusthread").attr('data-disqus-shortname');
console.log(disqus_shortname);
  if(disqus_shortname!==""){
	  var disqus_identifier = disqus_shortname;    
  }else{
	  var disqus_identifier = "t_page_" + $("#rec"+recid+" .t219__disqusthread").attr("data-page-id");
  }

  var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
  dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
  (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
} 
function t226_floating_init(el){
    console.log('floating_init');

    var wnd=$(window);
    var col=el.parent();

    el.css('max-width',el.width());
    el.css('width','100%');
    col.css('min-height',el.height());

    var timer;
    var timer_count=0;
    var timer_react=5;

    wnd.scroll(function() {
        if(timer) {
            window.clearTimeout(timer);
            if(timer_count>=timer_react){
                t226_floating_scroll(el,wnd,col);
                timer_count=0;
            }
            timer_count++;
        }

        timer = window.setTimeout(function() {
                t226_floating_scroll(el,wnd,col);
                timer_count=0;    
        }, 50);
    });        


    wnd.resize(function() {
         wnd.scroll();
    });

    wnd.scroll();
}

function t226_floating_scroll(el,wnd,col){
    var wnd_height = wnd.height();
    var wnd_width = wnd.width();

    if(wnd_width<=1024){
        el.removeClass('t226__fixedTop');
        el.removeClass('t226__fixedBottom');
        el.removeClass('t226__floating');
        return('');
    }

    el.css('max-width',col.width());

    if(col.height()<el.height() && col.height()>0){
        col.height(el.height());
    }

    var el_height = el.height();
    var col_top = col.offset().top;
    var col_width = col.width();
    var col_height = col.height();
    var col_bottom = col_top + col_height;

    var wnd_top = wnd.scrollTop();
    var wnd_bottom = wnd_top + wnd_height;  

    if(wnd_top+el_height+50 >= col_bottom){
        //console.log('fixedbottom');
        el.addClass('t226__fixedBottom');
        el.removeClass('t226__fixedTop');
        el.removeClass('t226__floating');
    }else if(wnd_top+50 > col_top){
        //console.log('floating');
        el.addClass('t226__floating');
        el.removeClass('t226__fixedBottom');
        el.removeClass('t226__fixedTop');
    }else{
        //console.log('fixedtop');
        el.addClass('t226__fixedTop');
        el.removeClass('t226__fixedBottom');  
        el.removeClass('t226__floating');
    }
} 
function t228_highlight(){
  var url=window.location.href;
  var pathname=window.location.pathname;
  if(url.substr(url.length - 1) == "/"){ url = url.slice(0,-1); }
  if(pathname.substr(pathname.length - 1) == "/"){ pathname = pathname.slice(0,-1); }
  if(pathname.charAt(0) == "/"){ pathname = pathname.slice(1); }
  if(pathname == ""){ pathname = "/"; }
  $(".t228__list_item a[href='"+url+"']").addClass("t-active");
  $(".t228__list_item a[href='"+url+"/']").addClass("t-active");
  $(".t228__list_item a[href='"+pathname+"']").addClass("t-active");
  $(".t228__list_item a[href='/"+pathname+"']").addClass("t-active");
  $(".t228__list_item a[href='"+pathname+"/']").addClass("t-active");
  $(".t228__list_item a[href='/"+pathname+"/']").addClass("t-active");
}

function t228_checkAnchorLinks(recid) {
    if ($(window).width() >= 960) {
        var t228_navLinks = $("#rec" + recid + " .t228__list_item a:not(.tooltipstered)[href*='#']");
        if (t228_navLinks.length > 0) {
            setTimeout(function(){
              t228_catchScroll(t228_navLinks);
            }, 500);
        }
    }
}

function t228_catchScroll(t228_navLinks) {
    var t228_clickedSectionId = null,
        t228_sections = new Array(),
        t228_sectionIdTonavigationLink = [],
        t228_interval = 100,
        t228_lastCall, t228_timeoutId;
    t228_navLinks = $(t228_navLinks.get().reverse());
    t228_navLinks.each(function() {
        var t228_cursection = t228_getSectionByHref($(this));
        if (typeof t228_cursection.attr("id") != "undefined") {
            t228_sections.push(t228_cursection);
        }
        t228_sectionIdTonavigationLink[t228_cursection.attr("id")] = $(this);
    });
		t228_updateSectionsOffsets(t228_sections);
    t228_sections.sort(function(a, b) {
      return b.attr("data-offset-top") - a.attr("data-offset-top");
    });
		$(window).bind('resize', t_throttle(function(){t228_updateSectionsOffsets(t228_sections);}, 200));
		$('.t228').bind('displayChanged',function(){t228_updateSectionsOffsets(t228_sections);});
		setInterval(function(){t228_updateSectionsOffsets(t228_sections);},5000);
    t228_highlightNavLinks(t228_navLinks, t228_sections, t228_sectionIdTonavigationLink, t228_clickedSectionId);

    t228_navLinks.click(function() {
        var t228_clickedSection = t228_getSectionByHref($(this));
        if (!$(this).hasClass("tooltipstered") && typeof t228_clickedSection.attr("id") != "undefined") {
            t228_navLinks.removeClass('t-active');
            $(this).addClass('t-active');
            t228_clickedSectionId = t228_getSectionByHref($(this)).attr("id");
        }
    });
    $(window).scroll(function() {
        var t228_now = new Date().getTime();
        if (t228_lastCall && t228_now < (t228_lastCall + t228_interval)) {
            clearTimeout(t228_timeoutId);
            t228_timeoutId = setTimeout(function() {
                t228_lastCall = t228_now;
                t228_clickedSectionId = t228_highlightNavLinks(t228_navLinks, t228_sections, t228_sectionIdTonavigationLink, t228_clickedSectionId);
            }, t228_interval - (t228_now - t228_lastCall));
        } else {
            t228_lastCall = t228_now;
            t228_clickedSectionId = t228_highlightNavLinks(t228_navLinks, t228_sections, t228_sectionIdTonavigationLink, t228_clickedSectionId);
        }
    });
}


function t228_updateSectionsOffsets(sections){
	$(sections).each(function(){
		var t228_curSection = $(this);
		t228_curSection.attr("data-offset-top",t228_curSection.offset().top);
	});
}


function t228_getSectionByHref(curlink) {
    var t228_curLinkValue = curlink.attr("href").replace(/\s+/g, '');
    if (t228_curLinkValue[0]=='/') { t228_curLinkValue = t228_curLinkValue.substring(1); }
    if (curlink.is('[href*="#rec"]')) {
        return $(".r[id='" + t228_curLinkValue.substring(1) + "']");
    } else {
        return $(".r[data-record-type='215']").has("a[name='" + t228_curLinkValue.substring(1) + "']");
    }
}

function t228_highlightNavLinks(t228_navLinks, t228_sections, t228_sectionIdTonavigationLink, t228_clickedSectionId) {
    var t228_scrollPosition = $(window).scrollTop(),
        t228_valueToReturn = t228_clickedSectionId;
    /*if first section is not at the page top (under first blocks)*/
    if (t228_sections.length != 0 && t228_clickedSectionId == null && t228_sections[t228_sections.length-1].attr("data-offset-top") > (t228_scrollPosition + 300)){
      t228_navLinks.removeClass('t-active');
      return null;
    }

    $(t228_sections).each(function(e) {
        var t228_curSection = $(this),
            t228_sectionTop = t228_curSection.attr("data-offset-top"),
            t228_id = t228_curSection.attr('id'),
            t228_navLink = t228_sectionIdTonavigationLink[t228_id];
        if (((t228_scrollPosition + 300) >= t228_sectionTop) || (t228_sections[0].attr("id") == t228_id && t228_scrollPosition >= $(document).height() - $(window).height())) {
            if (t228_clickedSectionId == null && !t228_navLink.hasClass('t-active')) {
                t228_navLinks.removeClass('t-active');
                t228_navLink.addClass('t-active');
                t228_valueToReturn = null;
            } else {
                if (t228_clickedSectionId != null && t228_id == t228_clickedSectionId) {
                    t228_valueToReturn = null;
                }
            }
            return false;
        }
    });
    return t228_valueToReturn;
}

function t228_setPath(){
}

function t228_setWidth(recid){
  var window_width=$(window).width();
  if(window_width>980){
    $(".t228").each(function() {
      var el=$(this);
      var left_exist=el.find('.t228__leftcontainer').length;
      var left_w=el.find('.t228__leftcontainer').outerWidth(true);
      var max_w=left_w;
      var right_exist=el.find('.t228__rightcontainer').length;
      var right_w=el.find('.t228__rightcontainer').outerWidth(true);
	  var items_align=el.attr('data-menu-items-align');
      if(left_w<right_w)max_w=right_w;
      max_w=Math.ceil(max_w);
      var center_w=0;
      el.find('.t228__centercontainer').find('li').each(function() {
        center_w+=$(this).outerWidth(true);
      });
      var padd_w=40;
      var maincontainer_width=el.find(".t228__maincontainer").outerWidth(true);
      if(maincontainer_width-max_w*2-padd_w*2>center_w+20){
          //if(left_exist>0 && right_exist>0){
		  if(items_align=="center" || typeof items_align==="undefined"){
            el.find(".t228__leftside").css("min-width",max_w+"px");
            el.find(".t228__rightside").css("min-width",max_w+"px");
            el.find(".t228__list").removeClass("t228__list_hidden");
          }
       }else{
          el.find(".t228__leftside").css("min-width","");
          el.find(".t228__rightside").css("min-width","");  
          
      }
    });
  }
}

function t228_setBg(recid){
  var window_width=$(window).width();
  if(window_width>980){
    $(".t228").each(function() {
      var el=$(this);
      if(el.attr('data-bgcolor-setbyscript')=="yes"){
        var bgcolor=el.attr("data-bgcolor-rgba");
        el.css("background-color",bgcolor);             
      }
      });
      }else{
        $(".t228").each(function() {
          var el=$(this);
          var bgcolor=el.attr("data-bgcolor-hex");
          el.css("background-color",bgcolor);
          el.attr("data-bgcolor-setbyscript","yes");
      });
  }
}

function t228_appearMenu(recid) {
      var window_width=$(window).width();
      if(window_width>980){
           $(".t228").each(function() {
                  var el=$(this);
                  var appearoffset=el.attr("data-appearoffset");
                  if(appearoffset!=""){
                          if(appearoffset.indexOf('vh') > -1){
                              appearoffset = Math.floor((window.innerHeight * (parseInt(appearoffset) / 100)));
                          }

                          appearoffset=parseInt(appearoffset, 10);

                          if ($(window).scrollTop() >= appearoffset) {
                            if(el.css('visibility') == 'hidden'){
                                el.finish();
                                el.css("top","-50px");  
                                el.css("visibility","visible");
                                var topoffset = el.data('top-offset');
                                if (topoffset && parseInt(topoffset) > 0) {
                                    el.animate({"opacity": "1","top": topoffset+"px"}, 200,function() {
                                    });       
                                    
                                } else {
                                    el.animate({"opacity": "1","top": "0px"}, 200,function() {
                                    });       
                                }
                            }
                          }else{
                            el.stop();
                            el.css("visibility","hidden");
							el.css("opacity","0");	
                          }
                  }
           });
      }

}

function t228_changebgopacitymenu(recid) {
  var window_width=$(window).width();
  if(window_width>980){
    $(".t228").each(function() {
      var el=$(this);
      var bgcolor=el.attr("data-bgcolor-rgba");
      var bgcolor_afterscroll=el.attr("data-bgcolor-rgba-afterscroll");
      var bgopacityone=el.attr("data-bgopacity");
      var bgopacitytwo=el.attr("data-bgopacity-two");
      var menushadow=el.attr("data-menushadow");
      if(menushadow=='100'){
        var menushadowvalue=menushadow;
      }else{
        var menushadowvalue='0.'+menushadow;
      }
      if ($(window).scrollTop() > 20) {
        el.css("background-color",bgcolor_afterscroll);
        if(bgopacitytwo=='0' || (typeof menushadow == "undefined" && menushadow == false)){
          el.css("box-shadow","none");
        }else{
          el.css("box-shadow","0px 1px 3px rgba(0,0,0,"+ menushadowvalue +")");
        }
      }else{
        el.css("background-color",bgcolor);
        if(bgopacityone=='0.0' || (typeof menushadow == "undefined" && menushadow == false)){
          el.css("box-shadow","none");
        }else{
          el.css("box-shadow","0px 1px 3px rgba(0,0,0,"+ menushadowvalue +")");
        }
      }
    });
  }
}

function t228_createMobileMenu(recid){
  var window_width=$(window).width(),
      el=$("#rec"+recid),
      menu=el.find(".t228"),
      burger=el.find(".t228__mobile");
  burger.click(function(e){
    menu.fadeToggle(300);
    $(this).toggleClass("t228_opened")
  })
  $(window).bind('resize', t_throttle(function(){
    window_width=$(window).width();
    if(window_width>980){
      menu.fadeIn(0);
    }
  }, 200));
}



 
function t229_highlight(recid){
  var url=window.location.href;
  var pathname=window.location.pathname;
  if(url.substr(url.length - 1) == "/"){ url = url.slice(0,-1); }
  if(pathname.substr(pathname.length - 1) == "/"){ pathname = pathname.slice(0,-1); }
  if(pathname.charAt(0) == "/"){ pathname = pathname.slice(1); }
  if(pathname == ""){ pathname = "/"; }
  $(".t229__list_item a[href='"+url+"']").addClass("t-active");
  $(".t229__list_item a[href='"+url+"/']").addClass("t-active");
  $(".t229__list_item a[href='"+pathname+"']").addClass("t-active");
  $(".t229__list_item a[href='/"+pathname+"']").addClass("t-active");
  $(".t229__list_item a[href='"+pathname+"/']").addClass("t-active");
  $(".t229__list_item a[href='/"+pathname+"/']").addClass("t-active");
}


function t229_checkAnchorLinks(recid) {
    if ($(window).width() >= 960) {
        var t229_navLinks = $("#rec" + recid + " .t229__list_item a:not(.tooltipstered)[href*='#']");
        if (t229_navLinks.length > 0) {
            t229_catchScroll(t229_navLinks);
        }
    }
}

function t229_catchScroll(t229_navLinks) {
    var t229_clickedSectionId = null,
        t229_sections = new Array(),
        t229_sectionIdTonavigationLink = [],
        t229_interval = 100,
        t229_lastCall, t229_timeoutId;
    t229_navLinks = $(t229_navLinks.get().reverse());
    t229_navLinks.each(function() {
        var t229_cursection = t229_getSectionByHref($(this));
        if (typeof t229_cursection.attr("id") != "undefined") {
            t229_sections.push(t229_cursection);
        }
        t229_sectionIdTonavigationLink[t229_cursection.attr("id")] = $(this);
    });
		t229_updateSectionsOffsets(t229_sections);
    t229_sections.sort(function(a, b) {
      return b.attr("data-offset-top") - a.attr("data-offset-top");
    });
		$(window).bind('resize', t_throttle(function(){t229_updateSectionsOffsets(t229_sections);}, 200));
		$('.t229').bind('displayChanged',function(){t229_updateSectionsOffsets(t229_sections);});
		setInterval(function(){t229_updateSectionsOffsets(t229_sections);},5000);
    t229_highlightNavLinks(t229_navLinks, t229_sections, t229_sectionIdTonavigationLink, t229_clickedSectionId);

    t229_navLinks.click(function() {
        var t229_clickedSection = t229_getSectionByHref($(this));
        if (!$(this).hasClass("tooltipstered") && typeof t229_clickedSection.attr("id") != "undefined") {
            t229_navLinks.removeClass('t-active');
            $(this).addClass('t-active');
            t229_clickedSectionId = t229_getSectionByHref($(this)).attr("id");
        }
    });
    $(window).scroll(function() {
        var t229_now = new Date().getTime();
        if (t229_lastCall && t229_now < (t229_lastCall + t229_interval)) {
            clearTimeout(t229_timeoutId);
            t229_timeoutId = setTimeout(function() {
                t229_lastCall = t229_now;
                t229_clickedSectionId = t229_highlightNavLinks(t229_navLinks, t229_sections, t229_sectionIdTonavigationLink, t229_clickedSectionId);
            }, t229_interval - (t229_now - t229_lastCall));
        } else {
            t229_lastCall = t229_now;
            t229_clickedSectionId = t229_highlightNavLinks(t229_navLinks, t229_sections, t229_sectionIdTonavigationLink, t229_clickedSectionId);
        }
    });
}


function t229_updateSectionsOffsets(sections){
	$(sections).each(function(){
		var t229_curSection = $(this);
		t229_curSection.attr("data-offset-top",t229_curSection.offset().top);
	});
}


function t229_getSectionByHref(curlink) {
    var t229_curLinkValue = curlink.attr("href").replace(/\s+/g, '');
    if (t229_curLinkValue[0]=='/') { t229_curLinkValue = t229_curLinkValue.substring(1); }
    if (curlink.is('[href*="#rec"]')) {
        return $(".r[id='" + t229_curLinkValue.substring(1) + "']");
    } else {
        return $(".r[data-record-type='215']").has("a[name='" + t229_curLinkValue.substring(1) + "']");
    }
}

function t229_highlightNavLinks(t229_navLinks, t229_sections, t229_sectionIdTonavigationLink, t229_clickedSectionId) {
    var t229_scrollPosition = $(window).scrollTop(),
        t229_valueToReturn = t229_clickedSectionId;
    /*if first section is not at the page top (under first blocks)*/
    if (t229_sections.length != 0 && t229_clickedSectionId == null && t229_sections[t229_sections.length-1].attr("data-offset-top") > (t229_scrollPosition + 300)){
      t229_navLinks.removeClass('t-active');
      return null;
    }

    $(t229_sections).each(function(e) {
        var t229_curSection = $(this),
            t229_sectionTop = t229_curSection.attr("data-offset-top"),
            t229_id = t229_curSection.attr('id'),
            t229_navLink = t229_sectionIdTonavigationLink[t229_id];
        if (((t229_scrollPosition + 300) >= t229_sectionTop) || (t229_sections[0].attr("id") == t229_id && t229_scrollPosition >= $(document).height() - $(window).height())) {
            if (t229_clickedSectionId == null && !t229_navLink.hasClass('t-active')) {
                t229_navLinks.removeClass('t-active');
                t229_navLink.addClass('t-active');
                t229_valueToReturn = null;
            } else {
                if (t229_clickedSectionId != null && t229_id == t229_clickedSectionId) {
                    t229_valueToReturn = null;
                }
            }
            return false;
        }
    });
    return t229_valueToReturn;
}

function t229_setPath(pageid){
}

function t229_setBg(recid){
      var window_width=$(window).width();
      if(window_width>980){
          $(".t229").each(function() {
          	 var el=$(this);
             if(el.attr('data-bgcolor-setbyscript')=="yes"){
	             var bgcolor=el.attr("data-bgcolor-rgba");
	             el.css("background-color",bgcolor);             
             }
          });
      }else{
          $(".t229").each(function() {
             var el=$(this);
             var bgcolor=el.attr("data-bgcolor-hex");
             el.css("background-color",bgcolor);
             el.attr("data-bgcolor-setbyscript","yes");
		  });
      }
  }

function t229_appearMenu(recid) {
        var window_width=$(window).width();
        if(window_width>980){
	         $("#rec"+recid+" .t229").each(function() {
					var el=$(this);
					var appearoffset=el.attr("data-appearoffset");
					if(appearoffset!=""){
			                if(appearoffset.indexOf('vh') > -1){
				                appearoffset = Math.floor((window.innerHeight * (parseInt(appearoffset) / 100)));
			                }
					
							appearoffset=parseInt(appearoffset, 10);
		
							if ($(window).scrollTop() >= appearoffset) {
							  if(el.css('visibility') == 'hidden'){
								  el.finish();
								  el.css("top","-50px");	
								  el.css("visibility","visible");
								  el.animate({"opacity": "1","top": "0px"}, 200,function() {
								  });	  	  
							  }
							}else{
							  el.stop();
							  el.css("visibility","hidden");
							}
					}
	         });
        }
    
    }


function t229_changeBgOpacityMenu(recid) {
        var window_width=$(window).width();
        if(window_width>980){
	         $(".t229").each(function() {
					var el=$(this);
					var bgcolor=el.attr("data-bgcolor-rgba");
					var bgcolor_afterscroll=el.attr("data-bgcolor-rgba-afterscroll");
					if ($(window).scrollTop() > 20) {
						el.css("background-color",bgcolor_afterscroll);
					}else{
						el.css("background-color",bgcolor);
					}
	         });
        }
    
    } 
function t235__next(){
    if((cur+1)>=$(".r").not('[data-t263-block-notslide=yes]').size())return;    
    cur++;
    $(".r").not('[data-t263-block-notslide=yes]').each(function(i) {
        if((cur-1)==i){
            var el=$(this);
			var trans_out_y='-100px';
			if(el.height()+100>$(window).height())trans_out_y='0px';
			el.transition({ y: trans_out_y,opacity: 0},250,'out',function() {
				el.css('display','none');
		    });
        }        
        if(cur==i){
            var el=$(this);
            var speed='slow';
            if(cur==0){
                speed=0;
            }

            el.css('display','none');
			var trans_in_y='50px';
			if(el.height()+100>$(window).height())trans_in_y='0px';
			el.transition({y:trans_in_y},1,'ease',function() {});
			el.animate({opacity:"0"}, 300, function() {
                el.css('display','block');
                el.css('opacity','0');
                el.transition({y:'0px',opacity: 1},500,'ease',function() {});
				$('.r').removeClass('t235__active');
				el.addClass('t235__active');
                if(typeof lazyload_cover=='object')lazyload_cover.update();
                if(typeof lazyload_img=='object')lazyload_img.update();
                if(typeof lazyload_bgimg=='object')lazyload_bgimg.update();
			});


            if(el.height()>$(window).height()){
                $('#t235__scrldonwicon').fadeIn('slow',function(){
                    $('#t235__scrldonwicon').delay(1000).fadeOut('slow');	
                });
            }

            var bg=el.attr('data-bg-color');
            if(bg!==undefined && bg!=='none'){
                $('#allrecordstable').css('background-color',bg);
            }else{
                $('#allrecordstable').css('background-color','');
            }
        }
    });
    t235__update();
    setTimeout(function(){
      $(window).trigger('resize');
      $("#allrecords").css('width', $(window).width()+'px');
    },400);
}

function t235__prev(){
    if((cur-1)==-1)return;
    cur--;    
    $(".r").not('[data-t263-block-notslide=yes]').each(function(i) {
        if((cur+1)==i){
            var el=$(this);
            el.css('display','none');
        }        
        if(cur==i){
            var el=$(this);
            el.css('display','block');
			el.css('opacity','0');
			el.transition({ y: '0px'},1,'easeOutSine');
			el.animate({opacity:"1"}, 50, function() {});
            $('.r').removeClass('t235__active');
            el.addClass('t235__active');

            var bg=el.attr('data-bg-color');
            if(bg!==undefined && bg!=='none'){
                $('#allrecordstable').css('background-color',bg);
            }else{
                $('#allrecordstable').css('background-color','');
            }              
        }
    });
    t235__update();
    setTimeout(function(){
      $(window).trigger('resize');
      $("#allrecords").css('width', $(window).width()+'px');
    },400);
}  

function t235__galnext(){
	var elactive=$('.t235__active');
	var tplid=elactive.attr('data-record-type');
	if(tplid=='5')elactive.find('[data-slide=next]').trigger('click');
}

function t235__update(){
  var c=cur+1;
  var t=$(".r").not('[data-t263-block-notslide=yes]').size();
  $('.t235__count').html(c+'/'+t);
  if(typeof lazyload_cover=='object')lazyload_cover.update();
  if(typeof lazyload_img=='object')lazyload_img.update();
  if(typeof lazyload_bgimg=='object')lazyload_bgimg.update();
}

function t235__init(){
  $("#allrecords").wrap("<table id='allrecordstable' width='100%' height='100%' style='height:100vh; border:0px; margin:0px; padding:0px; border-spacing:0px;'><tr><td></td></tr></table>");
  $("#allrecords").css('width', $(window).width()+'px');
  var wnd = $(window);
  $(".r").not('[data-t263-block-notslide=yes]').each(function(i) {
      var el=$(this);
      el.css('padding','0px');
      if(el.height()>wnd.height()){
          el.css('padding-top','150px');
          el.css('padding-bottom','150px');            	
      }
      el.css('display','none');
      el.css('opacity','');   
	  el.css('background-color','');   
  });
  t235__next();
  $('#tildacopy').css('display','none');

  $('.t235').css('right','-=100');
  setTimeout(function() {
      $('.t235').addClass('t235_anim');
      $('.t235').css('right','+=100');    
  }, 800);   

  $(document).keydown(function(e) {
      switch(e.which) {
          case 38: t235__prev();
          break;

          case 40: t235__next();
          break;

          case 33: t235__prev();
          break;

          case 34: t235__next();
          break;

          case 32: t235__next();
          break;

          case 190: t235__galnext();
          break;

          default: return;
      }
      if(e.which!=190){
		e.preventDefault();
	  }
  });

  $('#allrecordstable').css('transition','background-color 500ms linear');
  $('.t-cover__carrier').css('background-attachment','scroll');
} 
function t232_expandtext(recid){
  $("#rec"+recid).find(".t232__text").toggle();
}
 
window.t256showvideo = function(recid){
    $(document).ready(function(){
        var el = $('#coverCarry'+recid);
        var videourl = '';

        var youtubeid=$("#rec"+recid+" .t256__video-container").attr('data-content-popup-video-url-youtube');
        if(youtubeid > '') {
            videourl = 'https://www.youtube.com/embed/' + youtubeid;
        }

        $("body").addClass("t256__overflow");
		$("#rec"+recid+" .t256__cover").addClass( "t256__hidden");
        $("#rec"+recid+" .t256__video-container").removeClass( "t256__hidden");
        $("#rec"+recid+" .t256__video-carier").html("<iframe id=\"youtubeiframe"+recid+"\" class=\"t256__iframe\" width=\"100%\" height=\"540\" src=\"" + videourl + "?rel=0&autoplay=1\" frameborder=\"0\" allowfullscreen></iframe><a class=\"t256__close-link\" href=\"javascript:t256hidevideo('"+recid+"');\"><div class=\"t256__close\"></div></a>");
    });
}

window.t256hidevideo = function(recid){
    $(document).ready(function(){
        $("body").removeClass("t256__overflow");
        $("#rec"+recid+" .t256__cover").removeClass( "t256__hidden");
        $("#rec"+recid+" .t256__video-container").addClass( "t256__hidden");
        $("#rec"+recid+" .t256__video-carier").html("<div class=\"t256__video-bg2\"></div>");
    });
} 
function t260_init(){
	$(".t260").each(function() {
		var el=$(this);
		if(el.attr('data-block-init')=='yes'){
		}else{
		  el.attr('data-block-init','yes');

          var toggler = el.find(".t260__header");
          var content = el.find(".t260__content");

          toggler.click(function() {
			$(this).toggleClass("t260__opened");
			if($(this).hasClass("t260__opened")==true){
				content.slideDown();
			}else{
				content.slideUp();
			}
          })

		}
	});
} 
function t262_appendGoogleMap(recid, key) {
	var grecid = recid;

	if (typeof google === 'object' && typeof google.maps === 'object') {
		t262_handleGoogleApiReady(grecid);
	} else {
		if(window.googleapiiscalled!==true){
			var runfunc = 'window.t262_handleGoogleApiReady_'+grecid+' = function () { t262_handleGoogleApiReady("'+grecid+'") }';
			eval(runfunc);

			var script = document.createElement("script");
			script.type = "text/javascript";
			script.src = "//maps.google.com/maps/api/js?key="+jQuery.trim(key)+"&callback=t262_handleGoogleApiReady_"+grecid;
			document.body.appendChild(script);
			window.googleapiiscalled=true;
		} else {
			setTimeout(function(){
			  t262_appendGoogleMap(grecid, key);
			},200);
		}
	}
}

function t262_setMapHeight(recid) {
	var el=$('#rec'+recid);
	var map = el.find('.t262__map');
	var textwrapper = el.find('.t262__col_text').height();
	map.css('height', textwrapper);
}

function t262_handleGoogleApiReady(recid){
	$('#rec'+recid).find('.t262__map').each(function(index,Element) {
		var el=$(Element);
		var arMarkers = window['arMapMarkers'+recid];
		window.isDragMap = $isMobile ? false : true;
	
		var myLatLng = arMarkers.length > 0 ? new google.maps.LatLng(parseFloat(arMarkers[0].lat), parseFloat(arMarkers[0].lng)) : false;
		var myOptions = {
			zoom: parseInt(el.attr('data-map-zoom')),
			center:myLatLng,
			scrollwheel: false,
			draggable: window.isDragMap,
			zoomControl: true
		};

		var map = new google.maps.Map(Element, myOptions);

		var i, mrk, marker, markers=[], infowindow;
		var bounds = new google.maps.LatLngBounds();
		for(i in arMarkers) {
			mrk = arMarkers[i];
			myLatLng = new google.maps.LatLng(parseFloat(mrk.lat), parseFloat(mrk.lng));
			marker = new google.maps.Marker({
				position: myLatLng,
				map: map,
				title: mrk.title
			});
			bounds.extend(myLatLng);

			if (mrk.descr > '') {
				attachInfoMessage(marker, mrk.descr);
			} else {
				attachInfoMessage(marker, mrk.title);
			}

			markers[markers.length] = marker;
			infowindow='';
			marker='';
		}
		
		function attachInfoMessage(marker, descr) {
			var infowindow = new google.maps.InfoWindow({
				content:  $("<textarea/>").html(descr).text()
			});
		  
			marker.addListener('click', function() {
				infowindow.open(marker.get('map'), marker);
			});
		}
		
		if (arMarkers.length > 1) {
			map.fitBounds(bounds);
			if (map.getZoom() > parseInt(el.attr('data-map-zoom'))) {
				map.setZoom(parseInt(el.attr('data-map-zoom')));
			}
		}

	  
		// Resizing the map for responsive design
		google.maps.event.addDomListener(window, "resize", function() {
			var center = map.getCenter();
			google.maps.event.trigger(map, "resize");
			map.setCenter(center); 
		}); 

		// DBL Click - activate on mobile      
		if ($isMobile) {
			google.maps.event.addDomListener(window, "dblclick", function() {
				if (window.isDragMap) {
					window.isDragMap = false;
				} else {
					window.isDragMap = true;
				}
				map.setOptions({draggable: window.isDragMap});
			}); 
		}

	}); 
}


function t262_appendYandexMap(recid,key) {
	var yarecid = recid;
	if (typeof ymaps === 'object' && typeof ymaps.Map === 'function') {
		t262_handleYandexApiReady(recid);
	} else {
		if(window.yandexmapsapiiscalled!==true){
			var runfunc = 'window.t262_handleYandexApiReady_'+yarecid+' = function () { return t262_handleYandexApiReady("'+yarecid+'") }';
			eval(runfunc);

			var script = document.createElement("script");
			script.type = "text/javascript";
			script.src = "https://api-maps.yandex.ru/2.1/?lang=ru-RU&coordorder=latlong&onload=t262_handleYandexApiReady_"+yarecid;
			if (key > '') {
				script.src = script.src + '&apikey='+key;
			}
			document.body.appendChild(script);
			window.yandexmapsapiiscalled=true;
		} else {
		  setTimeout(function(){
			t262_appendYandexMap(yarecid,key);
		  },200);
	  }
	}
}

function t262_handleYandexApiReady(recid){
	$('#rec'+recid).find('.t262__map').each(function(index,Element) {
		var el=$(Element);
		var arMarkers = window['arMapMarkers'+recid];

		window.isDragMap = $isMobile ? false : true;
			
		if(el.attr('data-map-style')!=''){var mapstyle=eval(el.attr('data-map-style'));}else{var mapstyle='[]';}
		var myLatlng = arMarkers.length > 0 ? [parseFloat(arMarkers[0].lat), parseFloat(arMarkers[0].lng)] : false;
		var myStates = {
			zoom: parseInt(el.attr('data-map-zoom')),
			center:myLatlng,
			scrollZoom: false,
			controls: ['typeSelector','zoomControl'],
			drag: window.isDragMap
		};

		var map = new ymaps.Map(Element, myStates), i, mrk, marker;
		var myGroup = new ymaps.GeoObjectCollection({}) ;
		map.behaviors.disable('scrollZoom');
		for(i in arMarkers) {
			mrk = arMarkers[i];
			myLatlng = [parseFloat(mrk.lat), parseFloat(mrk.lng)];

			myGroup.add(new ymaps.Placemark(myLatlng, { hintContent: mrk.title, balloonContent: mrk.descr > '' ? $("<textarea/>").html(mrk.descr).text() : mrk.title }));			
		}
		map.geoObjects.add(myGroup);
		if (arMarkers.length > 1) {
			map.setBounds(myGroup.getBounds(), {checkZoomRange: true}) ;
		}
		
		$(window).resize(function(){
			map.container.fitToViewport();
		});

		// DBL Click - activate on mobile      
		if ($isMobile) {
			$(window).dblclick(function() {
				if (window.isDragMap) {
					window.isDragMap = false;
				} else {
					window.isDragMap = true;
				}
				if (window.isDragMap) {
					map.behaviors.enable('drag');
				} else {
					map.behaviors.disable('drag');
				}
			});
		}

	});
} 
window.t266showvideo = function(recid){
    $(document).ready(function(){
        var el = $('#coverCarry'+recid);
        var videourl = '';

        var youtubeid=$("#rec"+recid+" .t266__video-container").attr('data-content-popup-video-url-youtube');
        if(youtubeid > '') {
            videourl = 'https://www.youtube.com/embed/' + youtubeid;
        }

        $("body").addClass("t266__overflow");
		$("#rec"+recid+" .t266__cover").addClass("t266__hidden");
        $("#rec"+recid+" .t266__video-container").removeClass("t266__hidden");
        $("#rec"+recid+" .t266__video-carier").html("<iframe id=\"youtubeiframe"+recid+"\" class=\"t266__iframe\" width=\"100%\" height=\"540\" src=\"" + videourl + "?rel=0&autoplay=1\" frameborder=\"0\" allowfullscreen></iframe><a class=\"t266__close-link\" href=\"javascript:t266hidevideo('"+recid+"');\"><div class=\"t266__close\"></div></a>");
    });
}

window.t266hidevideo = function(recid){
    $(document).ready(function(){
        $("body").removeClass("t266__overflow");
        $("#rec"+recid+" .t266__cover").removeClass("t266__hidden");
        $("#rec"+recid+" .t266__video-container").addClass("t266__hidden");
        $("#rec"+recid+" .t266__video-carier").html("<div class=\"t266__video-bg2\"></div>");
    });
} 
function t268_init(recid){
  var el=$("#rec"+recid);
  el.find(".t268__col-left").css({'height':(el.find(".t268__col-right").height()+'px')});

  $(window).resize(function(){
    el.find(".t268__col-left").css({'height':(el.find(".t268__col-right").height()+'px')});
  });
}
 
function t186C_init(recid){
	var t186C_el = $('#rec'+recid),
			t186C_btn = t186C_el.find('.t-submit');
	t186C_btn.click(function(){
		setTimeout(function(){t186C_checkSuccess(t186C_el);}, 100);
		setTimeout(function(){t186C_checkSuccess(t186C_el);}, 300);
		setTimeout(function(){t186C_checkSuccess(t186C_el);}, 700);
		setTimeout(function(){t186C_checkSuccess(t186C_el);}, 1500);
	});
}

function t186C_checkSuccess(t186C_el){
	var t186C_formWrapper = t186C_el.find('.t186C__wrapper');
	if (t186C_el.find('.js-form-proccess').hasClass('js-send-form-success') && !t186C_formWrapper.hasClass('t186C__hiding')){
		t186C_formWrapper.addClass('t186C__hiding');
		var t186C_root = $('html, body'),
				t186C_targetOffset = t186C_el.find('.t186C__blockinput-success').offset().top;
		if ($(window).width()>960) {
			var t186C_target = t186C_targetOffset - 200;
		}	else {
			var t186C_target = t186C_targetOffset - 100;
		}

		if (t186C_targetOffset > $(window).scrollTop()) {
			t186C_formWrapper.addClass('t186C__wrapper_hidden');
		} else {
			t186C_root.animate({ scrollTop: t186C_target}, 400);
			setTimeout(function(){t186C_formWrapper.addClass('t186C__wrapper_hidden');}, 400);
		}
	}
}
 
function t300_init(){
  $(".t300").each(function() {
	var $hook=$(this).attr('data-tooltip-hook'),
        $recid=$(this).attr('data-tooltip-id');
    if($hook!==''){
		var $obj = $('a[href*="'+$hook+'"]');
		var $content=$(this).find('.t300__content').html();
		if($hook.charAt(0)=='#'){var touchDevices=true;}else{var touchDevices=false;}
		var position=$(this).attr('data-tooltip-position');
		if(position!==''){}else{position='top';}
	    $obj.tooltipster({'theme':'t300__tooltipster-noir t300__tooltipster-noir_'+$recid+'','contentAsHTML': true,'content': $content, interactive:true, touchDevices:touchDevices, position:position});
	}
  });
}

$(document).ready(function(){
	t300_init();
    setTimeout(function() { t300_init(); }, 500)
});
 
    var t279 = {};
    
    t279.equalheight = function(recid) {

        var currentTallest = 0,
            currentRowStart = 0,
            rowDivs = new Array(),
            $el,
            topPosition = 0;
            
        $('#rec'+recid+' .t279__textwrapper').each(function() {
     
            $el = $(this);
            $($el).height('auto')
            topPostion = $el.position().top;
       
            if (currentRowStart != topPostion) {
                for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
                    rowDivs[currentDiv].height(currentTallest);
                }
                rowDivs.length = 0;
                currentRowStart = topPostion;
                currentTallest = $el.height();
                rowDivs.push($el);
            } else {
                rowDivs.push($el);
                currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
            }
            for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
        });
    };
 
function t280_showMenu(recid){
  var el=$("#rec"+recid);
  el.find('.t280__burger, .t280__menu__bg, .t280__menu__item:not(".tooltipstered")').click(function(){
    if ($(this).is(".t280__menu__item.tooltipstered, .t794__tm-link")) { return; }  
    $('body').toggleClass('t280_opened');
  });
  $('.t280').bind('clickedAnchorInTooltipMenu',function(){
    $('body').removeClass('t280_opened');
  });  
}

function t280_changeSize(recid){
  var el=$("#rec"+recid);
  var div = el.find(".t280__menu").height();
  var bottomheight = el.find(".t280__bottom").height();
  var headerheight = el.find(".t280__container").height();
  var wrapper = el.find(".t280__menu__wrapper");
  var win = $(window).height() - bottomheight - headerheight - 40;
  if (div > win ) {
    wrapper.addClass('t280__menu_static');
  }
  else {
    wrapper.removeClass('t280__menu_static');
  }
}

function t280_changeBgOpacityMenu(recid) {
  var window_width=$(window).width();
  var record = $("#rec"+recid);
  record.find(".t280__container__bg").each(function() {
        var el=$(this);
        var bgcolor=el.attr("data-bgcolor-rgba");
        var bgcolor_afterscroll=el.attr("data-bgcolor-rgba-afterscroll");
        var bgopacity=el.attr("data-bgopacity");
        var bgopacity_afterscroll=el.attr("data-bgopacity2");
        var menu_shadow=el.attr("data-menu-shadow");
        if ($(window).scrollTop() > 20) {
            el.css("background-color",bgcolor_afterscroll);
            if (bgopacity_afterscroll != "0" && bgopacity_afterscroll != "0.0") {
              el.css('box-shadow',menu_shadow);
            } else {
              el.css('box-shadow','none');
            }
        }else{
            el.css("background-color",bgcolor);
            if (bgopacity != "0" && bgopacity != "0.0") {
              el.css('box-shadow',menu_shadow);
            } else {
              el.css('box-shadow','none');
            }
        }
  });
}

function t280_appearMenu(recid) {
      var window_width=$(window).width();
           $(".t280").each(function() {
                  var el=$(this);
                  var appearoffset=el.attr("data-appearoffset");
                  if(appearoffset!=""){
                          if(appearoffset.indexOf('vh') > -1){
                              appearoffset = Math.floor((window.innerHeight * (parseInt(appearoffset) / 100)));
                          }

                          appearoffset=parseInt(appearoffset, 10);

                          if ($(window).scrollTop() >= appearoffset) {
                            if(el.css('visibility') == 'hidden'){
                                el.finish();
                                el.css("top","-50px");  
                                el.css("visibility","visible");
                                el.animate({"opacity": "1","top": "0px"}, 200,function() {
                                });       
                            }
                          }else{
                            el.stop();
                            el.css("visibility","hidden");
                          }
                  }
           });

}

function t280_highlight(recid){
  var url=window.location.href;
  var pathname=window.location.pathname;
  if(url.substr(url.length - 1) == "/"){ url = url.slice(0,-1); }
  if(pathname.substr(pathname.length - 1) == "/"){ pathname = pathname.slice(0,-1); }
  if(pathname.charAt(0) == "/"){ pathname = pathname.slice(1); }
  if(pathname == ""){ pathname = "/"; }
  $(".t280__menu a[href='"+url+"']").addClass("t-active");
  $(".t280__menu a[href='"+url+"/']").addClass("t-active");
  $(".t280__menu a[href='"+pathname+"']").addClass("t-active");
  $(".t280__menu a[href='/"+pathname+"']").addClass("t-active");
  $(".t280__menu a[href='"+pathname+"/']").addClass("t-active");
  $(".t280__menu a[href='/"+pathname+"/']").addClass("t-active");
}
 
function t312_showPopup(tf_url){
  var el=$('.t312');

  var code="<iframe id=\"typeform-full\" width=\"100%\" height=\"100%\" frameborder=\"0\" src=\""+tf_url+"\" data-hook-iframe=\"t312\"></iframe>";
  code +="<script type=\"text/javascript\" src=\"https://s3-eu-west-1.amazonaws.com/share.typeform.com/embed.js\"></script>"
  var h=$(window).height()-100;
  el.find('[data-hook-typeform-carrier]').html(code);
  el.find('[data-hook-iframe]').height(h);

  $('body').addClass('t312__body_popupshowed');
  if(el.find('.t312__popup').attr('style') && el.find('.t312__popup').attr('style') > '') {
    el.find('.t312__popup').attr('style','');
  }
  el.addClass('t312__popup_show');
  el.find('.t312__close, .t312__bg').click(function(){
	 t312_closePopup();
  });
}

function t312_closePopup(){
  $('body').removeClass('t312__body_popupshowed');
  $('.t312').removeClass('t312__popup_show');
}

function t312_initPopup(){
  $("a[href*='typeform.com']").each(function() {
      var el=$(this);
      el.attr('data-mode','1');
      el.attr('target','_blank');
      //el.addClass('typeform-share link');
      if($(window).width()>980){
        el.click(function(e){
          var tf_url=el.attr('href');
          t312_showPopup(tf_url);
          t312_resizePopup();
          e.preventDefault();
        });
      }
  });
}

function t312_resizePopup(){
  var div = $(".t312__mainblock").height();
  var win = $(window).height();
  var popup = $(".t312__content");
  if (div > win ) {
    popup.addClass('t312__content_static');
  }
  else {
    popup.removeClass('t312__content_static');
  }
} 
function t315_showcomments(recid)
{
  var el=$("#rec"+recid);
  el.find(".t-btn").css("display","none");
  el.find(".t315__blocktitle").css("display","block");
  el.find(".t315__blockhtml").css("display","block");
}
 
function t281_initPopup(recid){
  $('#rec'+recid).attr('data-animationappear','off');
  $('#rec'+recid).css('opacity','1');
  var el=$('#rec'+recid).find('.t-popup'),
      hook=el.attr('data-tooltip-hook'),
      analitics=el.attr('data-track-popup');
  if(hook!==''){
    var obj = $('a[href="'+hook+'"]');
    obj.click(function(e){
      t281_showPopup(recid);
      t281_resizePopup(recid);
      e.preventDefault();
      if(window.lazy=='y'){t_lazyload_update();}
      if (analitics > '') {
        Tilda.sendEventToStatistics(analitics, hook);
      }
    });
  }
}

function t281_lockScroll(){
  var body = $("body");
	if (!body.hasClass('t-body_scroll-locked')) {
		var bodyScrollTop = (typeof window.pageYOffset !== 'undefined') ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
		body.addClass('t-body_scroll-locked');
		body.css("top","-"+bodyScrollTop+"px");
    body.attr("data-popup-scrolltop",bodyScrollTop);
	}
}

function t281_unlockScroll(){
  var body = $("body");
	if (body.hasClass('t-body_scroll-locked')) {
    var bodyScrollTop = $("body").attr("data-popup-scrolltop");
		body.removeClass('t-body_scroll-locked');
		body.css("top","");
    body.removeAttr("data-popup-scrolltop")
		window.scrollTo(0, bodyScrollTop);
	}
}

function t281_showPopup(recid){
  var el=$('#rec'+recid),
      popup = el.find('.t-popup');

  popup.css('display', 'block');
  setTimeout(function() {
    popup.find('.t-popup__container').addClass('t-popup__container-animated');
    popup.addClass('t-popup_show');
  }, 50);

  $('body').addClass('t-body_popupshowed t281__body_popupshowed');
  /*fix IOS11 cursor bug + general IOS background scroll*/
  if (/iPhone|iPad|iPod/i.test(navigator.userAgent) && !window.MSStream) {
    setTimeout(function() {
      t281_lockScroll();
    }, 500);
  }
  
  el.find('.t-popup').click(function(e){
    if (e.target == this) { t281_closePopup(); }
  });

  el.find('.t-popup__close').click(function(e){
    t281_closePopup();
  });

  el.find('a[href*=#]').click(function(e){
    var url = $(this).attr('href');
    if (!url || (url.substring(0,7) != '#price:' && url.substring(0,7) != '#order:')) {
      t281_closePopup();
      if (!url || url.substring(0,7) == '#popup:') {
        setTimeout(function() {
          $('body').addClass('t-body_popupshowed');
        }, 300);
      }
    }
  });

  $(document).keydown(function(e) {
    if (e.keyCode == 27) { t281_closePopup(); }
  });
}

function t281_closePopup(){
  $('body').removeClass('t-body_popupshowed t281__body_popupshowed');
  /*fix IOS11 cursor bug + general IOS background scroll*/
  if (/iPhone|iPad|iPod/i.test(navigator.userAgent) && !window.MSStream) {
    t281_unlockScroll();
  }  
  $('.t-popup').removeClass('t-popup_show');
  setTimeout(function() {
    $('.t-popup').not('.t-popup_show').css('display', 'none');
  }, 300);
}

function t281_resizePopup(recid){
  var el = $("#rec"+recid),
      div = el.find(".t-popup__container").height(),
      win = $(window).height() - 120,
      popup = el.find(".t-popup__container");
  if (div > win ) {
    popup.addClass('t-popup__container-static');
  } else {
    popup.removeClass('t-popup__container-static');
  }
}

function t281_sendPopupEventToStatistics(popupname) {
  var virtPage = '/tilda/popup/';
  var virtTitle = 'Popup: ';
  if (popupname.substring(0,7) == '#popup:') {
      popupname = popupname.substring(7);
  }
    
  virtPage += popupname;
  virtTitle += popupname;
  if (window.Tilda && typeof Tilda.sendEventToStatistics == 'function') {
    Tilda.sendEventToStatistics(virtPage, virtTitle, '', 0);
  } else {
    if(ga) {
      if (window.mainTracker != 'tilda') {
        ga('send', {'hitType':'pageview', 'page':virtPage,'title':virtTitle});
      }
    }
  
    if (window.mainMetrika > '' && window[window.mainMetrika]) {
      window[window.mainMetrika].hit(virtPage, {title: virtTitle,referer: window.location.href});
    }
  }
} 
function t282_showMenu(recid){
  var el=$("#rec"+recid);
  el.find('.t282__burger, .t282__menu__item:not(".tooltipstered"), .t282__overlay').click(function(){
    if ($(this).is(".t282__menu__item.tooltipstered, .t794__tm-link")) { return; }  
    $('body').toggleClass('t282_opened');
    el.find('.t282__menu__container, .t282__overlay').toggleClass('t282__closed');
    el.find(".t282__menu__container").css({'top':(el.find(".t282__container").height()+'px')});
  });
  $('.t282').bind('clickedAnchorInTooltipMenu',function(){
    $('body').removeClass('t282_opened');
    $('#rec'+recid+' .t282__menu__container, #rec'+recid+' .t282__overlay').addClass('t282__closed');
  });  
}

function t282_changeSize(recid){
  var el=$("#rec"+recid);
  var bottomheight = el.find(".t282__menu__container");
  var headerheight = el.find(".t282__container");
  var menu = bottomheight.height() + headerheight.height();
  var win = $(window).height();
  if (menu > win ) {
    $("#nav"+recid).addClass('t282__menu_static');
  }
  else {
    $("#nav"+recid).removeClass('t282__menu_static');
  }
}

function t282_changeBgOpacityMenu(recid) {
 var window_width=$(window).width();
 var record = $("#rec"+recid);
 record.find(".t282__container__bg").each(function() {
    var el=$(this);
    var bgcolor=el.attr("data-bgcolor-rgba");
    var bgcolor_afterscroll=el.attr("data-bgcolor-rgba-afterscroll");
    var bgopacity=el.attr("data-bgopacity");
    var bgopacity_afterscroll=el.attr("data-bgopacity2");
    var menu_shadow=el.attr("data-menu-shadow");
    if ($(window).scrollTop() > 20) {
        el.css("background-color",bgcolor_afterscroll);
        if (bgopacity_afterscroll != "0" && bgopacity_afterscroll != "0.0") {
          el.css('box-shadow',menu_shadow);
        } else {
          el.css('box-shadow','none');
        }
    }else{
        el.css("background-color",bgcolor);
        if (bgopacity != "0" && bgopacity != "0.0") {
          el.css('box-shadow',menu_shadow);
        } else {
          el.css('box-shadow','none');
        }
    }
 });
}

function t282_highlight(recid){
  var url=window.location.href;
  var pathname=window.location.pathname;
  if(url.substr(url.length - 1) == "/"){ url = url.slice(0,-1); }
  if(pathname.substr(pathname.length - 1) == "/"){ pathname = pathname.slice(0,-1); }
  if(pathname.charAt(0) == "/"){ pathname = pathname.slice(1); }
  if(pathname == ""){ pathname = "/"; }
  $(".t282__menu a[href='"+url+"']").addClass("t-active");
  $(".t282__menu a[href='"+url+"/']").addClass("t-active");
  $(".t282__menu a[href='"+pathname+"']").addClass("t-active");
  $(".t282__menu a[href='/"+pathname+"']").addClass("t-active");
  $(".t282__menu a[href='"+pathname+"/']").addClass("t-active");
  $(".t282__menu a[href='/"+pathname+"/']").addClass("t-active");
}

function t282_appearMenu(recid) {
      var window_width=$(window).width();
           $(".t282").each(function() {
                  var el=$(this);
                  var appearoffset=el.attr("data-appearoffset");
                  if(appearoffset!=""){
                          if(appearoffset.indexOf('vh') > -1){
                              appearoffset = Math.floor((window.innerHeight * (parseInt(appearoffset) / 100)));
                          }

                          appearoffset=parseInt(appearoffset, 10);

                          if ($(window).scrollTop() >= appearoffset) {
                            if(el.css('visibility') == 'hidden'){
                                el.finish();
                                el.css("top","-50px");  
                                el.css("visibility","visible");
                                el.animate({"opacity": "1","top": "0px"}, 200,function() {
                                });       
                            }
                          }else{
                            el.stop();
                            el.css("visibility","hidden");
                          }
                  }
           });

}

 
function t330_showPopup(recid){
  var el=$('#rec'+recid),
      popup = el.find('.t-popup');

  popup.css('display', 'block');
  setTimeout(function() {
    popup.find('.t-popup__container').addClass('t-popup__container-animated');
    popup.addClass('t-popup_show');
  }, 50);

  $('body').addClass('t-body_popupshowed t330__body_popupshowed');

  el.find('.t-popup').click(function(e){
    if (e.target == this) { t330_closePopup(); }
  });

  el.find('.t-popup__close').click(function(e){
    t330_closePopup();
  });

  el.find('a[href*=#]').click(function(e){
    var url = $(this).attr('href');
    if (!url || url.substring(0,7) != '#price:') {
      t330_closePopup();
      if (!url || url.substring(0,7) == '#popup:') {
        setTimeout(function() {
          $('body').addClass('t-body_popupshowed');
        }, 300);
      }
    }
  });

  $(document).keydown(function(e) {
    if (e.keyCode == 27) { t330_closePopup(); }
  });
}

function t330_closePopup(){
  $('body').removeClass('t-body_popupshowed t330__body_popupshowed');
  $('.t-popup').removeClass('t-popup_show');
  setTimeout(function() {
    $('.t-popup').not('.t-popup_show').css('display', 'none');
  }, 300);
}

function t330_resizePopup(recid){
  var el = $("#rec"+recid),
      div = el.find(".t-popup__container").height(),
      win = $(window).height() - 120,
      popup = el.find(".t-popup__container");
  if (div > win ) {
    popup.addClass('t-popup__container-static');
  } else {
    popup.removeClass('t-popup__container-static');
  }
}

function t330_sendPopupEventToStatistics(popupname) {
  var virtPage = '/tilda/popup/';
  var virtTitle = 'Popup: ';
  if (popupname.substring(0,7) == '#popup:') {
      popupname = popupname.substring(7);
  }
    
  virtPage += popupname;
  virtTitle += popupname;
  if (window.Tilda && typeof Tilda.sendEventToStatistics == 'function') {
    Tilda.sendEventToStatistics(virtPage, virtTitle, '', 0);
  } else {
    if(ga) {
      if (window.mainTracker != 'tilda') {
        ga('send', {'hitType':'pageview', 'page':virtPage,'title':virtTitle});
      }
    }
  
    if (window.mainMetrika > '' && window[window.mainMetrika]) {
      window[window.mainMetrika].hit(virtPage, {title: virtTitle,referer: window.location.href});
    }
  }
}

function t330_initPopup(recid){
  $('#rec'+recid).attr('data-animationappear','off');
  $('#rec'+recid).css('opacity','1');
  var el=$('#rec'+recid).find('.t-popup'),
      hook=el.attr('data-tooltip-hook'),
      analitics=el.attr('data-track-popup');
  if(hook!==''){
    var obj = $('a[href="'+hook+'"]');
    obj.click(function(e){
      t330_showPopup(recid);
      t330_resizePopup(recid);
      e.preventDefault();
      if(window.lazy=='y'){t_lazyload_update();}
      if (analitics == 'yes') {
        t330_sendPopupEventToStatistics(hook);
      }
    });
  }
} 
function t331_setHeight(recid){
  var el=$("#rec"+recid); 
  var div = el.find(".t331__video-carier");
  var ratiowidth = div.attr("data-video-width");
  var ratioheight = div.attr("data-video-height"); 
  var ratio = ratioheight/ratiowidth;     
  var height=div.width() * ratio;
  div.height(height);
  div.parent().height(height);
}

function t331_initPopup(recid){
  $('#rec'+recid).attr('data-animationappear','off');
  $('#rec'+recid).css('opacity','1');
  var el=$('#rec'+recid).find('.t-popup'),
      hook=el.attr('data-tooltip-hook'),
      analitics=el.attr('data-track-popup');
  if(hook!==''){
    var obj = $('a[href="'+hook+'"]');
    obj.click(function(e){
      t331_showPopup(recid);
      t331_resizePopup(recid);
      e.preventDefault();
      if (analitics > '') {
        var virtTitle = hook;
        if (virtTitle.substring(0,7) == '#popup:') {
            virtTitle = virtTitle.substring(7);
        }
        Tilda.sendEventToStatistics(analitics, virtTitle);
      }
    });
  }
}

function t331_showPopup(recid){
  var el=$('#rec'+recid),
      popup = el.find('.t-popup');

  var youtubeid = el.find(".t331__youtube").attr('data-content-popup-video-url-youtube');
  var videourl = 'https://www.youtube.com/embed/' + youtubeid;
  el.find(".t331__video-carier").html("<iframe id=\"youtubeiframe"+recid+"\" class=\"t331__iframe\" width=\"100.5%\" height=\"100.5%\" src=\"" + videourl + "?autoplay=1&rel=0\" frameborder=\"0\" allowfullscreen></iframe>");

  popup.css('display', 'block');
  t331_setHeight(recid);
  setTimeout(function() {
    popup.find('.t-popup__container').addClass('t-popup__container-animated');
    popup.addClass('t-popup_show');
  }, 50);

  $('body').addClass('t-body_popupshowed');

  el.find('.t-popup').click(function(e){
    if (e.target == this) {
    t331_popup_close(recid);
    }
  });

  el.find('.t-popup__close').click(function(e){
    t331_popup_close(recid);
  });

  $(document).keydown(function(e) {
    if (e.keyCode == 27) { t331_popup_close(recid); }
  });
}

function t331_popup_close(recid){
  $('body').removeClass('t-body_popupshowed');
  $('.t-popup').removeClass('t-popup_show');
  setTimeout(function() {
    $("#rec"+recid+" .t331__video-carier").html("");
    $('.t-popup').not('.t-popup_show').css('display', 'none');
  }, 300);
}

function t331_resizePopup(recid){
  var el = $("#rec"+recid),
      div = el.find(".t-popup__container").height(),
      win = $(window).height(),
      popup = el.find(".t-popup__container");
  if (div > win ) {
    popup.addClass('t-popup__container-static');
  } else {
    popup.removeClass('t-popup__container-static');
  }
}
/* deprecated */
function t331_sendPopupEventToStatistics(popupname) {
  var virtPage = '/tilda/popup/';
  var virtTitle = 'Popup: ';
  if (popupname.substring(0,7) == '#popup:') {
      popupname = popupname.substring(7);
  }
    
  virtPage += popupname;
  virtTitle += popupname;
    
  if(ga) {
    if (window.mainTracker != 'tilda') {
      ga('send', {'hitType':'pageview', 'page':virtPage,'title':virtTitle});
    }
  }
  
  if (window.mainMetrika > '' && window[window.mainMetrika]) {
    window[window.mainMetrika].hit(virtPage, {title: virtTitle,referer: window.location.href});
  }
} 
var t334 = {};
t334.initeffect = function (recid){
    if ($('#rec'+recid).find('.t-container').attr('data-show-button')=="true") {
      $('#rec'+recid).find(".t334__cell").each(function() {
        var sizer = $(this).find(".t334__button-container").height();
        $(this).find(".t334__textwrapper__content").css({'padding-bottom':(sizer+'px')});
        $(this).find(".t334__button-container").addClass("t334__button-container_show");  
      });
    } else {
      $('#rec'+recid).find(".t334__cell").hover(function(){
        var sizer = $(this).find(".t334__button-container").height();
        $(this).find(".t334__textwrapper__content").css({'padding-bottom':(sizer+'px')});
        $(this).find(".t334__button-container").addClass("t334__button-container_show");
      }, function(){
        $(this).find(".t334__textwrapper__content").css("padding-bottom","0");
        $(this).find(".t334__button-container").removeClass("t334__button-container_show");
      });
    }
};
  
 
	var t335 = {};
    t335.initeffect = function(recid) {
        $('#rec'+recid).find(".t335__cell").hover(function(){
            var sizer = $(this).find(".t335__button-container").height();
            $(this).find(".t335__textwrapper__content").css({'padding-bottom':(sizer+'px')});
            $(this).find(".t335__button-container").addClass("t335__button-container_show");
        }, function(){
            $(this).find(".t335__textwrapper__content").css("padding-bottom","0");
            $(this).find(".t335__button-container").removeClass("t335__button-container_show");
        });
    };
 
    var t336 = {};
    t336.initeffect = function(recid){
        $('#rec'+recid).find(".t336__cell").hover(function(){
            var sizer = $(this).find(".t336__button-container").height();
            $(this).find(".t336__textwrapper__content").css({'padding-bottom':(sizer+'px')});
            $(this).find(".t336__button-container").addClass("t336__button-container_show");
        }, function(){
            $(this).find(".t336__textwrapper__content").css("padding-bottom","0");
            $(this).find(".t336__button-container").removeClass("t336__button-container_show");
        });
    };
    
 
function t341_showCaptions(recid){
  var el=$("#t-carousel"+recid);
  var caption = el.find('.item:nth-child(1) .t-carousel__caption-inside');
  var captioncontainer = el.find('.t-carousel__caption__container');
  captioncontainer.html(caption.html());
  caption.css('display','none');

  $("#t-carousel"+recid).on('slide.bs.carousel', function(evt) {
    var el=$("#t-carousel"+recid);
    var caption = el.find('.item:nth-child(' + ($(evt.relatedTarget).index()+1) + ') .t-carousel__caption-inside');
    var captioncontainer = el.find('.t-carousel__caption__container');
    captioncontainer.html(caption.html());
    caption.css('display','none');
  });
}

function t341_checkSize(recid){
  var el=$("#rec"+recid);
  var containerinside = el.find(".t-carousel__arrows__container_inside");
  var containeroutside = el.find(".t-carousel__arrows__container_outside");
  var inner = el.find(".t-carousel__inner");
  var arrowleft = el.find(".t-carousel__arrow_left");
  var arrowright = el.find(".t-carousel__arrow_right");
  containeroutside.css({'max-width':(arrowleft.width()+arrowright.width()+inner.width()+ 60 +'px')});
  containerinside.css({'max-width':(inner.width()+'px')});

  var sizer = el.find('.t-carousel__height');
  var height = sizer.height();
  var width = sizer.width();
  if (width==0) {
    var width = $(window).width();
  }
  var ratio = width/height;
  var gallerywrapper = el.find(".t-carousel__checksize");
  var gallerywidth = gallerywrapper.width();

  if (height != $(window).height()) {
    gallerywrapper.css({'height':((gallerywidth/ratio)+'px')});
  }
} 
function t341_sendPaymentEventToStatistics(product, price) {
    if (Tilda && typeof Tilda.sendEventToStatistics == 'function') {
        var virtPage = '/tilda/payment/?product='+product+'&price='+price;
        var virtTitle = 'Order: '+product+' = '+price;
        Tilda.sendEventToStatistics(virtPage, virtTitle,'',price);
    } else {
        var virtPage = '/tilda/order/?product='+product+'&price='+price;
        var virtTtitle = 'Order: '+product+' = '+price;

        if(ga) {
            if (window.mainTracker == 'tilda') {
                ga('tilda.send', {'hitType':'pageview', 'page':virtPage,'title':virtTtitle});
            } else {
                ga('send', {'hitType':'pageview', 'page':virtPage,'title':virtTtitle});
            }
        }
        
        if (window.mainMetrika > '' && window[window.mainMetrika]) {
            window[window.mainMetrika].hit(virtPage, {title: virtTtitle,referer: window.location.href});
        }
    }
}

function t341_initStripePayment(recid, publishableapi, companyname, logo) {
	
	if (typeof StripeCheckout === 'object' ) {
		t341_handleStripeApiReady(recid,publishableapi, companyname, logo);
	} else {
		if(window.stripeapiiscalled!==true){
			var script = document.createElement("script");
			script.type = "text/javascript";
			script.src = "https://checkout.stripe.com/checkout.js";
			document.body.appendChild(script);
			window.stripeapiiscalled=true;
		}
		
		setTimeout(function(){
			t341_initStripePayment(recid, publishableapi, companyname, logo)
		}, 10);
	}

}

function t341_handleStripeApiReady(recid,publishableapi, companyname, logo) {
	if(! window.stripehandler) {
		window.stripehandler = StripeCheckout.configure({
			key: publishableapi,
			image: logo,
			name: (companyname ? companyname : window.location.host),
			locale: 'auto',
			token: function(token) {
				if (token && token.id) {
					t341_sendPaymentEventToStatistics($('#rec'+recid+' .js-product-name').val(), parseInt($('#rec'+recid+' .js-amount').val())*100);

					var data = {};
					data.projectid = $('#allrecords').attr('data-tilda-project-id');
					data.token = token.id;
					if (token.email) {
						data.email = token.email;
					}
					data.amount = parseInt($('#rec'+recid+' .js-amount').val())*100;
					data.products = [{
						product: $('#rec'+recid+' .js-product-name').val(),
						amount: parseInt($('#rec'+recid+' .js-amount').val())*100
						}
					];
					data.currency = $('#rec'+recid+' .js-currency').val();
					
					$.post('https://forms.tildacdn.com/payment/stripe/', data, function(json){
						},
						'json'
					);

					if ($('#rec'+recid+' .js-success-url').val() > '') {
						window.location.href = $('#rec'+recid+' .js-success-url').val();
					} else {
						$('#rec'+recid+' .t341__submit').val('Payed');
					}

				}
			}
		});
		// Close Checkout on page navigation:
		$(window).on('popstate', function() {
			window.stripehandler.close();
		});
	}
	
	$('#rec'+recid+' .t341__submit').on('click', function(e) {
		e.preventDefault();
		// Open Checkout with further options:
		window.stripehandler.open({
			name: companyname,
			image: logo,
			description: $('#rec'+recid+' .js-product-name').val(),
			amount: parseInt($('#rec'+recid+' .js-amount').val()*100),
			currency: $('#rec'+recid+' .js-currency').val(),
			shippingAddress: $('#rec'+recid+' .js-need-shipping').val() == '1' ? true : false,
			billingAddress: $('#rec'+recid+' .js-need-shipping').val() == '1' ? true : false,
		});
	});
}


function t341_initCloudPayments(recid, publishableapi) {
	
	if (typeof cp == "object" && typeof cp.CloudPayments == "function") {
		t341_handleCloudPaymentsApiReady(recid,publishableapi);
	} else {
		if(window.cloudpaymentsapiiscalled!==true){
			var script = document.createElement("script");
			script.type = "text/javascript";
			script.src = "https://widget.cloudpayments.ru/bundles/cloudpayments";
			document.body.appendChild(script);
			window.cloudpaymentsapiiscalled=true;
		}
		
		setTimeout(function(){
			t341_initCloudPayments(recid, publishableapi);
		}, 10);
	}

}

function t341_handleCloudPaymentsApiReady(recid,publishableapi) {
	
	$('#rec'+recid+' .t341__submit').on('click', function(e) {
		e.preventDefault();
		
		var currency = $('#rec'+recid+' .js-currency').val();
		if(! window.cloudpaymentshandler) {
			var lang='';
			if ( $('#rec'+recid+' .js-language').length > 0) {
				lang = $('#rec'+recid+' .js-language').val();
			}
			if (lang == '') {
				lang = (currency == 'RUB' || currency == 'BYR' ? 'ru-RU' : 'en-US');
			}
			window.cloudpaymentshandler = new cp.CloudPayments({language: lang});
		}

		/* Open Checkout with further options:*/
		window.cloudpaymentshandler.charge(
			{
				publicId: publishableapi, 
				description: $('#rec'+recid+' .js-product-name').val(), 
				amount: parseFloat($('#rec'+recid+' .js-amount').val()),
				currency: currency, 
			},
			function (options) { /* success*/
				//действие при успешной оплате
				t341_sendPaymentEventToStatistics($('#rec'+recid+' .js-product-name').val(), parseInt($('#rec'+recid+' .js-amount').val()));
				if ($('#rec'+recid+' .js-success-url').val() > '') {
					window.location.href = $('#rec'+recid+' .js-success-url').val();
				} else {
					$('#rec'+recid+' .t341__submit').val('Payed');
				}
				
			},
			function (reason, options) { // fail
				if ($('#rec'+recid+' .js-failure-url').val() > '') {
					window.location.href = $('#rec'+recid+' .js-failure-url').val();
				}
			}
		);
	});
}
 
function t342_sendPaymentEventToStatistics(product, price) {
    if (Tilda && typeof Tilda.sendEventToStatistics == 'function') {
        var virtPage = '/tilda/payment/?product='+product+'&price='+price;
        var virtTitle = 'Order: '+product+' = '+price;
        Tilda.sendEventToStatistics(virtPage, virtTitle,'',price);
    } else {
        var virtPage = '/tilda/order/?product='+product+'&price='+price;
        var virtTitle = 'Order: '+product+' = '+price;

        if(window.ga && window.mainTracker != 'tilda') {
            ga('send', {'hitType':'pageview', 'page':virtPage,'title':virtTitle});
        }
        
        if (window.mainMetrika > '' && window[window.mainMetrika]) {
            window[window.mainMetrika].hit(virtPage, {title: virtTitle,referer: window.location.href});
        }
    }
}

function t342_initStripePayment(recid, publishableapi, companyname, logo) {
	
	if (typeof StripeCheckout === 'object' ) {
		t342_handleStripeApiReady(recid,publishableapi, companyname, logo);
	} else {
		if(window.stripeapiiscalled!==true){
			var script = document.createElement("script");
			script.type = "text/javascript";
			script.src = "https://checkout.stripe.com/checkout.js";
			document.body.appendChild(script);
			window.stripeapiiscalled=true;
		}
		
		setTimeout(function(){
			t342_initStripePayment(recid, publishableapi, companyname, logo)
		}, 10);
	}

}

function t342_handleStripeApiReady(recid, publishableapi, companyname, logo) {
	if(! window.stripehandler) {
		window.stripehandler = StripeCheckout.configure({
			key: publishableapi,
			image: logo,
			name: (companyname ? companyname : window.location.host),
			locale: 'auto'
		});
		// Close Checkout on page navigation:
		$(window).on('popstate', function() {
			window.stripehandler.close();
		});
	}
	
	$('[href^="#price"]').click(function(e){
		e.preventDefault();

		var t342click = $(this);
		var tmp = $(this).attr('href');
		// format:  #price:Cost:Product name
		var arParam = tmp.split(':');
		var productprice = parseInt(arParam[1].replace(/[^0-9\.]/g,''));
		var productname = arParam[2];
		if (! productname) {
			var tmp=$(this).closest('.r').find('.title');
			if (tmp.length > 0) {
				productname = tmp.text();
			}
			productname = $(this).text();
		}
		
		window.stripehandler.open({
			name: companyname,
			image: logo,
			description: productname,
			amount: parseInt(productprice)*100,
			currency: $('#rec'+recid+' .js-stripe-currency').val(),
			shippingAddress: $('#rec'+recid+' .js-stripe-need-shipping').val() == '1' ? true : false,
			billingAddress: $('#rec'+recid+' .js-stripe-need-shipping').val() == '1' ? true : false,
			token: function(token, args) {
				if (token && token.id) {
					t342_sendPaymentEventToStatistics(productname, productprice*100);

					var data = {};
					data.projectid = $('#allrecords').attr('data-tilda-project-id');
					data.token = token.id;
					if (token.email) {
						data.email = token.email;
					}
					data.amount = parseInt(productprice)*100;
					data.products = [{
						product: productname,
						amount: parseInt(productprice)*100
						}
					];
					data.currency = $('#rec'+recid+' .js-stripe-currency').val();
					
					$.post('https://forms.tildacdn.com/payment/stripe/', data, function(json){
							if ($('#rec'+recid+' .js-success-url').val() > '') {
								window.location.href = $('#rec'+recid+' .js-success-url').val();
							} else {
								t342click.html('<span style="vertical-align: middle;">Payed</span>');
							}

						},
						'json'
					).fail(function(){

						if ($('#rec'+recid+' .js-success-url').val() > '') {
							window.location.href = $('#rec'+recid+' .js-success-url').val();
						} else {
							t342click.html('<span style="vertical-align: middle;">Try, again</span>');
						}
					});
				}
			}
			
		});

	});
}

function t342_initCloudPayments(recid, publishableapi) {
	
	if (typeof cp == "object" && typeof cp.CloudPayments == "function") {
		t342_handleCloudPaymentsApiReady(recid,publishableapi);
	} else {
		if(window.cloudpaymentsapiiscalled!==true){
			var script = document.createElement("script");
			script.type = "text/javascript";
			script.src = "https://widget.cloudpayments.ru/bundles/cloudpayments";
			document.body.appendChild(script);
			window.cloudpaymentsapiiscalled=true;
		}
		
		setTimeout(function(){
			t342_initCloudPayments(recid, publishableapi);
		}, 10);
	}

}

function t342_handleCloudPaymentsApiReady(recid,publishableapi) {
	
	$('[href^="#price"]').click(function(e){
		e.preventDefault();

		var currency = $('#rec'+recid+' .js-currency').val();
		if(! window.cloudpaymentshandler) {
			var lang='';
			if ( $('#rec'+recid+' .js-language').length > 0) {
				lang = $('#rec'+recid+' .js-language').val();
			}
			if (lang == '') {
				lang = (currency == 'RUB' || currency == 'BYR' ? 'ru-RU' : 'en-US');
			}
			window.cloudpaymentshandler = new cp.CloudPayments({language: lang});
		}

		var t342click = $(this);
		var tmp = $(this).attr('href');
		// format:  #price:Cost:Product name
		var arParam = tmp.split(':');
		var productprice = parseFloat(arParam[1].replace(/[^0-9\.]/g,''));
		var productname = arParam[2];
		if (! productname) {
			var tmp=$(this).closest('.r').find('.title');
			if (tmp.length > 0) {
				productname = tmp.text();
			}
			productname = $(this).text();
		}

		/* Open Checkout with further options:*/
		window.cloudpaymentshandler.charge(
			{
				publicId: publishableapi, 
				description: productname, 
				amount: productprice,
				currency: currency, 
			},
			function (options) { /* success*/
				//действие при успешной оплате
				t342_sendPaymentEventToStatistics(productname, productprice);
				if ($('#rec'+recid+' .js-success-url').val() > '') {
					window.location.href = $('#rec'+recid+' .js-success-url').val();
				} else {
					t342click.html('OK');
				}
				
			},
			function (reason, options) { // fail
				if ($('#rec'+recid+' .js-failure-url').val() > '') {
					window.location.href = $('#rec'+recid+' .js-failure-url').val();
				}
			}
		);
	});
}

function t342_initPayment(recid){
	if ($('#allrecords').find('.t362').length == 0) {

		if ($('.js-stripe-publishable-key').length > 0) {
			t342_initStripePayment(recid, $('.js-stripe-publishable-key').val(), $('.js-stripe-company-name').val(), $('.js-stripe-logo').val());
		} else {
			if ($('.js-cp-key').length > 0) {
				t342_initCloudPayments(recid, $('.js-cp-key').val());
			} else {
				$('[href^="#price"]').click(function(e){
					e.preventDefault();
		
					var tmp = $(this).attr('href');
					// format:  #price:Cost:Product name
					var arParam = tmp.split(':');
					var price = parseInt(arParam[1].replace(/[^0-9\.]/g,''));
					var name = arParam[2];
					if (! name) {
						var tmp=$(this).closest('.r').find('.title');
						if (tmp.length > 0) {
							name = tmp.text();
						}
						name = $(this).text();
					}
			
					var $form = $('#formpayment'+recid);
					$form.find('.js_payment_product').val(name);
					$form.find('.js_payment_price').val(price);
					
					var $yabox = $('.js-yapayment-paymentbox');
					if ( $yabox.length > 0) {
						var $parent = $(this).parent();
						$($parent).css('position','relative');
						$('.js-yapayment-paymentbox').appendTo($parent);
						$('.js-yapayment-paymentbox').show();
		
						$('.r').click(function(){ $('.js-yapayment-paymentbox').hide(); $('.r').off('click'); return false; });
		
						$('.js-yapayment-paymentbox a').click(function(){
							$form.find('input[name=paymentType]').val($(this).data('payment-currency'));
							var $ctrl=$form.find('[name=customerNumber]');
							if($ctrl.length > 0) {
								$ctrl.val(new Date().getTime());
							}
							t342_sendPaymentEventToStatistics(name,price);
							$form.submit();
							return false;
						});
					} else {
						t342_sendPaymentEventToStatistics(name,price);
						$form.submit();
					}
					return false;
				});
			}
		}
	}
} 
function t347_setHeight(recid){
  var el=$('#rec'+recid);
  var div = el.find(".t347__table");
  var height=div.width() * 0.5625;
  div.height(height);
}

window.t347showvideo = function(recid){
    $(document).ready(function(){
        var el = $('#rec'+recid);
        var videourl = '';

        var youtubeid=$("#rec"+recid+" .t347__video-container").attr('data-content-popup-video-url-youtube');
        if(youtubeid > '') {
            videourl = 'https://www.youtube.com/embed/' + youtubeid;
        }

        $("#rec"+recid+" .t347__video-container").removeClass( "t347__hidden");
        $("#rec"+recid+" .t347__video-carier").html("<iframe id=\"youtubeiframe"+recid+"\" class=\"t347__iframe\" width=\"100%\" height=\"100%\" src=\"" + videourl + "?autoplay=1&rel=0\" frameborder=\"0\" allowfullscreen></iframe>");
    });
}

window.t347hidevideo = function(recid){
    $(document).ready(function(){
        $("#rec"+recid+" .t347__video-container").addClass( "t347__hidden");
        $("#rec"+recid+" .t347__video-carier").html("");
    });
} 
function t349_floating_init(el){
    /*console.log('floating_init');*/

    var wnd=$(window);
    var col=el.parent();

    el.css('max-width',el.width());
    el.css('width','100%');
    col.css('min-height',el.height());
	window.setTimeout(function() {col.css('min-height',el.height());}, 300);

    var timer;
    var timer_count=0;
    var timer_react=5;

    wnd.scroll(function() {
        if(timer) {
            window.clearTimeout(timer);
            if(timer_count>=timer_react){
                t349_floating_scroll(el,wnd,col);
                timer_count=0;
            }
            timer_count++;
        }

        timer = window.setTimeout(function() {
                t349_floating_scroll(el,wnd,col);
                timer_count=0;    
        }, 50);
    });        


    wnd.resize(function() {
         wnd.scroll();
    });

    wnd.scroll();
}

function t349_floating_scroll(el,wnd,col){
    var wnd_height = wnd.height();
    var wnd_width = wnd.width();

    if(wnd_width<=1024){
        el.removeClass('t349__fixedTop');
        el.removeClass('t349__fixedBottom');
        el.removeClass('t349__floating');
        return('');
    }

    el.css('max-width',col.width());

    if(col.height()<el.height() && col.height()>0){
        col.height(el.height());
    }

    var el_height = el.height();
    var col_top = col.offset().top;
    var col_width = col.width();
    var col_height = col.height();
    var col_bottom = col_top + col_height;

    var wnd_top = wnd.scrollTop();
    var wnd_bottom = wnd_top + wnd_height;  

    if(wnd_top+el_height+50 >= col_bottom){
        //console.log('fixedbottom');
        el.addClass('t349__fixedBottom');
        el.removeClass('t349__fixedTop');
        el.removeClass('t349__floating');
    }else if(wnd_top+50 > col_top){
        //console.log('floating');
        el.addClass('t349__floating');
        el.removeClass('t349__fixedBottom');
        el.removeClass('t349__fixedTop');
    }else{
        //console.log('fixedtop');
        el.addClass('t349__fixedTop');
        el.removeClass('t349__fixedBottom');  
        el.removeClass('t349__floating');
    }
} 
function t351_setSize(recid){
  var el=$("#rec"+recid);
  var height = el.find(".t351__sizer").height();
  var width = el.find(".t351__sizer").width();
  var ratio = width/height;
  var imgwrapper = el.find(".t351__imgwrapper");
  var imgwidth = imgwrapper.width();
  imgwrapper.css({'height':((imgwidth/ratio)+'px')});
} 
function t353_setSize(recid){
  var el=$("#rec"+recid);
  var height = el.find(".t353__sizer").height();
  var width = el.find(".t353__sizer").width();
  var ratio = width/height;
  var imgwrapper = el.find(".t353__imgwrapper");
  var imgwidth = imgwrapper.width();
  imgwrapper.css({'height':((imgwidth/ratio)+'px')});
}

function t353_setHeight(recid){
  var currentTallest = 0,
      currentRowStart = 0,
      rowDivs = new Array(),
      $el,
      topPosition = 0;

  $('#rec'+recid+' .t353__textwrapper').each(function() {

      $el = $(this);
      $($el).height('auto')
      topPostion = $el.position().top;
 
      if (currentRowStart != topPostion) {
          for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
              rowDivs[currentDiv].height(currentTallest);
          }
          rowDivs.length = 0;
          currentRowStart = topPostion;
          currentTallest = $el.height();
          rowDivs.push($el);
      } else {
          rowDivs.push($el);
          currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
      }
      for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
          rowDivs[currentDiv].height(currentTallest);
      }
  });
      
  $('#rec'+recid+' .t353__wrapper').each(function() {

      $el = $(this);
      $($el).height('auto')
      topPostion = $el.position().top;
 
      if (currentRowStart != topPostion) {
          for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
              rowDivs[currentDiv].height(currentTallest);
          }
          rowDivs.length = 0;
          currentRowStart = topPostion;
          currentTallest = $el.height();
          rowDivs.push($el);
      } else {
          rowDivs.push($el);
          currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
      }
      for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
          rowDivs[currentDiv].height(currentTallest);
      }
  });
} 
function t354_createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else var expires = "";
  document.cookie = name+"="+value+expires+"; path=/";
}

function t354_readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

function t354_checkPosition(recid){
  var el = $('#rec'+recid).find('.t354__opener');
  var name = el.attr('data-cookie-name');
  var time = el.attr('data-cookie-time');
  var multiplier = el.attr('data-trigger-position');
  var position = $(window).height() * multiplier;
  var value = "t354cookie";
  var cookie = t354_readCookie(name);
  if (cookie) {
    $("#rec"+recid+" .t354").html("");
  }else if (el.length){
    var scroll = $(window).scrollTop() + position;
    var objoffset = el.offset().top;
    if (scroll >= objoffset) {
      el.trigger('click');
      $("#rec"+recid+" .t354").html("");
      t354_createCookie(name,value,time);
    }
  }
} 
function t358_setHeight(recid){
  var el=$('#rec'+recid);
  var div = el.find(".t358__video-carier");
  var height=div.width() * 0.5625;
  div.height(height);
  div.parent().height(height);
}

function t358_initPopup(recid){
  $('#rec'+recid).attr('data-animationappear','off');
  $('#rec'+recid).css('opacity','1');
  var el=$('#rec'+recid).find('.t-popup'),
      hook=el.attr('data-tooltip-hook'),
      analitics=el.attr('data-track-popup');
  if(hook!==''){
    var obj = $('a[href="'+hook+'"]');
    obj.click(function(e){
      t358_showPopup(recid);
      t358_resizePopup(recid);
      e.preventDefault();
      if (analitics > '') {
        var virtTitle = hook;
        if (virtTitle.substring(0,7) == '#popup:') {
            virtTitle = virtTitle.substring(7);
        }
        Tilda.sendEventToStatistics(analitics, virtTitle);
      }
    });
  }
}

function t358_showPopup(recid){
  var el=$('#rec'+recid),
      popup = el.find('.t-popup');

  var vimeoid=$("#rec"+recid+" .t358__vimeo").attr('data-content-popup-video-url-vimeo');
  var videourl = '//player.vimeo.com/video/' + vimeoid;
  $("#rec"+recid+" .t358__video-carier").html("<iframe id=\"vimeoiframe"+recid+"\" class=\"t358__iframe\" width=\"100%\" height=\"100%\" src=\"" + videourl + "?title=0&byline=0&portrait=0&badge=0&color=ffffff&autoplay=1\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>");

  popup.css('display', 'block');
  t358_setHeight(recid);
  setTimeout(function() {
    popup.find('.t-popup__container').addClass('t-popup__container-animated');
    popup.addClass('t-popup_show');
  }, 50);

  $('body').addClass('t-body_popupshowed');

  el.find('.t-popup').click(function(e){
    if (e.target == this) {
    t358_popup_close(recid);
    }
  });

  el.find('.t-popup__close').click(function(e){
    t358_popup_close(recid);
  });

  $(document).keydown(function(e) {
    if (e.keyCode == 27) { t358_popup_close(recid); }
  });
}

function t358_popup_close(recid){
  $('body').removeClass('t-body_popupshowed');
  $('.t-popup').removeClass('t-popup_show');
  setTimeout(function() {
    $("#rec"+recid+" .t358__video-carier").html("");
    $('.t-popup').not('.t-popup_show').css('display', 'none');
  }, 300);
}

function t358_resizePopup(recid){
  var el = $("#rec"+recid),
      div = el.find(".t-popup__container").height(),
      win = $(window).height(),
      popup = el.find(".t-popup__container");
  if (div > win ) {
    popup.addClass('t-popup__container-static');
  } else {
    popup.removeClass('t-popup__container-static');
  }
}
/* deprecated */
function t358_sendPopupEventToStatistics(popupname) {
  var virtPage = '/tilda/popup/';
  var virtTitle = 'Popup: ';
  if (popupname.substring(0,7) == '#popup:') {
      popupname = popupname.substring(7);
  }
    
  virtPage += popupname;
  virtTitle += popupname;
    
  if(ga) {
    if (window.mainTracker != 'tilda') {
      ga('send', {'hitType':'pageview', 'page':virtPage,'title':virtTitle});
    }
  }
  
  if (window.mainMetrika > '' && window[window.mainMetrika]) {
    window[window.mainMetrika].hit(virtPage, {title: virtTitle,referer: window.location.href});
  }
} 
function t359_initPopup(recid){
  $('#rec'+recid).attr('data-animationappear','off');
  $('#rec'+recid).css('opacity','1');
  var el=$('#rec'+recid).find('.t-popup'),
      hook=el.attr('data-tooltip-hook'),
      analitics=el.attr('data-track-popup');
  if(hook!==''){
    var obj = $('a[href="'+hook+'"]');
    obj.click(function(e){
      t359_showPopup(recid);
      t359_resizePopup(recid);
      e.preventDefault();
      if (analitics == 'yes') {
        t359_sendPopupEventToStatistics(hook);
      }
      t359_positionArrows(recid);
    });
  }
}

function t359_showPopup(recid){
  var el=$('#rec'+recid),
      popup = el.find('.t-popup');

  popup.css('display', 'block');
  t359_resizeGallery(recid);
  setTimeout(function() {
    popup.find('.t-popup__container').addClass('t-popup__container-animated');
    popup.addClass('t-popup_show');
  }, 50);

  $('body').addClass('t-body_popupshowed');

  el.find('.t-popup').click(function(e){
    if (e.target == this) { t359_closePopup(); }
  });

  el.find('.t-popup__close').click(function(e){
    t359_closePopup();
  });

  $(document).keydown(function(e) {
    if (e.keyCode == 27) { t359_closePopup(); }
  });
}

function t359_closePopup(){
  $('body').removeClass('t-body_popupshowed');
  $('.t-popup').removeClass('t-popup_show');
  setTimeout(function() {
    $('.t-popup').not('.t-popup_show').css('display', 'none');
  }, 300);
}

function t359_resizePopup(recid){
  var el = $("#rec"+recid),
      div = el.find(".t-popup__container").height(),
      win = $(window).height() - 120,
      popup = el.find(".t-popup__container");
  if (div > win ) {
    popup.addClass('t-popup__container-static');
  } else {
    popup.removeClass('t-popup__container-static');
  }
}

function t359_sendPopupEventToStatistics(popupname) {
  var virtPage = '/tilda/popup/';
  var virtTitle = 'Popup: ';
  if (popupname.substring(0,7) == '#popup:') {
      popupname = popupname.substring(7);
  }
    
  virtPage += popupname;
  virtTitle += popupname;
    
  if(ga) {
    if (window.mainTracker != 'tilda') {
      ga('send', {'hitType':'pageview', 'page':virtPage,'title':virtTitle});
    }
  }
  
  if (window.mainMetrika > '' && window[window.mainMetrika]) {
    window[window.mainMetrika].hit(virtPage, {title: virtTitle,referer: window.location.href});
  }
}

function t359_showCaptions(recid){
  var el=$("#t-carousel"+recid);
  var caption = el.find('.item:nth-child(1) .t-carousel__caption-inside');
  var captioncontainer = el.find('.t-carousel__caption__container');
  captioncontainer.html(caption.html());
  caption.css('display','none');

  $("#t-carousel"+recid).on('slide.bs.carousel', function(evt) {
    var el=$("#t-carousel"+recid);
    var caption = el.find('.item:nth-child(' + ($(evt.relatedTarget).index()+1) + ') .t-carousel__caption-inside');
    var captioncontainer = el.find('.t-carousel__caption__container');
    captioncontainer.html(caption.html());
    caption.css('display','none');
  });
}

function t359_positionArrows(recid){
  var el=$("#rec"+recid);
  var containerinside = el.find(".t-carousel__arrows__container_inside");
  var containeroutside = el.find(".t-carousel__arrows__container_outside");
  var inner = el.find(".t-carousel__inner");
  var arrowleft = el.find(".t-carousel__arrow_left");
  var arrowright = el.find(".t-carousel__arrow_right");
  containeroutside.css({'max-width':(arrowleft.width()+arrowright.width()+inner.width()+ 60 +'px')});
  containerinside.css({'max-width':(inner.width()+'px')});
}

function t359_resizeGallery(recid){
  var el=$("#rec"+recid);
  var element = el.find('.t-carousel__checksize');
  var sizer = el.find('.t-carousel__height');
  if (window.matchMedia('(max-width: 800px)').matches) {
    var ratio = 0.9;
    element.height(sizer.height() * ratio);
  }
  if (window.matchMedia('(max-width: 700px)').matches) {
    var ratio = 0.8;
    element.height(sizer.height() * ratio);
  }
  if (window.matchMedia('(max-width: 600px)').matches) {
    var ratio = 0.7;
    element.height(sizer.height() * ratio);
  }
  if (window.matchMedia('(max-width: 500px)').matches) {
    var ratio = 0.6;
    element.height(sizer.height() * ratio);
  }
  if (window.matchMedia('(max-width: 400px)').matches) {
    var ratio = 0.5;
    element.height(sizer.height() * ratio);
  }
  if (window.matchMedia('(min-width: 800px)').matches) {
    element.height(sizer.height());
  }
} 
function t362_sendPopupEventToStatistics(link_recid, popupname)
{
    var virtPage = '/tilda/popup/';
    var virtTitle = 'Payment popup: ';
    if (popupname.substring(0,7) == '#price:') {
        popupname = popupname.substring(7);
    }
    
    virtPage = virtPage + link_recid + '/';
    virtTitle += popupname;
    
    if (Tilda && typeof Tilda.sendEventToStatistics == 'function') {
        Tilda.sendEventToStatistics(virtPage, virtTitle,'',0);
    } else {
        if (window.ga && window.mainTracker != 'tilda') {
            ga('send', {'hitType':'pageview', 'page':virtPage,'title':virtTitle});
        }
        
        if (window.mainMetrika > '' && window[window.mainMetrika]) {
            window[window.mainMetrika].hit(virtPage, {title: virtTitle,referer: window.location.href});
        }
    }

}

function t362_sendPaymentEventToStatistics(product, price) {
    if (Tilda && typeof Tilda.sendEventToStatistics == 'function') {
        var virtPage = '/tilda/payment/?product='+product+'&price='+price;
        var virtTitle = 'Order: '+product+' = '+price;
        Tilda.sendEventToStatistics(virtPage, virtTitle,'',price);
    } else {
        var virtPage = '/tilda/order/?product='+product+'&price='+price;
        var virtTitle = 'Order: '+product+' = '+price;

        if(window.ga && window.mainTracker != 'tilda') {
            ga('send', {'hitType':'pageview', 'page':virtPage,'title':virtTitle});
        }
        
        if (window.mainMetrika > '' && window[window.mainMetrika]) {
            window[window.mainMetrika].hit(virtPage, {title: virtTitle,referer: window.location.href});
        }
    }
}

function t362_showPopup(recid,name,price){
  var el=$('#rec'+recid),
      popup = el.find('.t-popup');

  popup.css('display', 'block');
  el.find('.js-product-title').html(name+' = ' + price);
  el.find('.js-successbox').hide();
  setTimeout(function() {
    popup.find('.t-popup__container').addClass('t-popup__container-animated');
    popup.addClass('t-popup_show');
  }, 50);

  $('body').addClass('t-body_popupshowed t362__body_popupshowed');

  el.find('.t-popup').click(function(e){
    if (e.target == this) { t362_closePopup(); }
  });

  el.find('.t-popup__close').click(function(e){
    t362_closePopup();
  });
}

function t362_closePopup(){
  $('body').removeClass('t-body_popupshowed t362__body_popupshowed');
  $('.t-popup').removeClass('t-popup_show');
  setTimeout(function() {
    $('.t-popup').not('.t-popup_show').css('display', 'none');
  }, 300);
}

function t362_resizePopup(recid){
  var el = $("#rec"+recid),
      div = el.find(".t-popup__container").height(),
      win = $(window).height() - 120,
      popup = el.find(".t-popup__container");
  if (div > win ) {
    popup.addClass('t-popup__container-static');
  } else {
    popup.removeClass('t-popup__container-static');
  }
}

window.t362_sendPaymentForm = function($form) {
  var recid = $form.attr('id').replace('form','');
  var $paymentForm = $('#formpayment'+recid);
  
  if($paymentForm.length == 0) {
    if ($form.data('success-url') > '') {
      window.location.href = $form.data('success-url');
    }
    return false;
  }

  var name = $paymentForm.find('.js_payment_product').val();
  var price = $paymentForm.find('.js_payment_price').val();

  if ($form.data('success-url') > '') {
    $paymentForm.find('.js_payment_successurl').val($form.data('success-url'));
  }
  if($paymentForm.find('.js_payment_successurl').val() == '') {
	$paymentForm.find('.js_payment_successurl').val(window.location.href);
  }

  if ($('#rec'+recid).find('.js-payment-type').length>0) {
    $paymentForm.find('input[name=paymentType]').val( $('#rec'+recid).find('.js-payment-type').val() );
  }

  var $ctrl=$paymentForm.find('[name=customerNumber]');

  var tildaformresult = $form.data('tildaformresult');
  if (tildaformresult && tildaformresult.tranid > '0') {
    if($ctrl.length > 0) {
      $ctrl.val(tildaformresult.tranid); /* dataid */
    }
    
    $ctrl=$paymentForm.find('.js_payment_ordernumber');
    if($ctrl.length > 0) {
      if (tildaformresult.orderid > '0') {
        $ctrl.val(tildaformresult.orderid);
      } else {
        $ctrl.val('');
      }
    }
  } else {
    if($ctrl.length > 0) {
      $ctrl.val('');
    }
  }

  t362_sendPaymentEventToStatistics(name,price);

  var actionUrl = $paymentForm.attr('action');
  if(actionUrl && actionUrl.indexOf('eshop.xml') > 0) {
    var allData = '';
    $form.find('input[type=text]').each(function(){
      var str = $(this).val();
      var cssclass=$(this).attr('class');
      if (!cssclass || cssclass.indexOf('js_pay')==-1) {
        allData = allData+''+str+'; ';
      }
      
      if (str > '' && str.indexOf('@')>0) {
        var $jqemail = $paymentForm.find('input[name=custEmail]');
        if (!$jqemail || $jqemail.length == 0) {
          $paymentForm.append("<input type=hidden name=custEmail value='"+str+"'>");
        } else {
          $jqemail.val(str);
        }
        
        $jqemail = $paymentForm.find('input[name=cps_email]');
        if (!$jqemail || $jqemail.length == 0) {
          $paymentForm.append("<input type=hidden name=cps_email value='"+str+"'>");
        } else {
          $jqemail.val(str);
        }

        if ($paymentForm.find('input[name=business]').length > 0) {
          var $jqemail = $paymentForm.find('input[name=email]');
          if (!$jqemail || $jqemail.length == 0) {
            $paymentForm.append("<input type=hidden name=email value='"+str+"'>");
          } else {
            $jqemail.val(str);
          }
        }
      }
    });
    
    var $jqord = $paymentForm.find('input[name=orderDetails]');
    if($jqord && $jqord.length > 0 && allData > '') {
      $jqord.val($jqord.val()+' ['+allData+']'); 
    }
  }

  $paymentForm.submit();
}

function t362_proccessError($form, recid) {
  var $recbox = $('#rec'+recid);

  $form.find('.js-errorbox-all').hide();
  $form.find('.js-rule-error').hide();
  $form.find('.js-error-rule-all').html('');
  $form.find('.js-successbox').hide();
  $form.find('.js-error-control-box').removeClass('js-error-control-box');

  $form.removeClass('js-send-form-error');
  $form.removeClass('js-send-form-success');

  var arError = validateForm($form);
  var $blockinput='';
  if (arError && arError.length > 0) {
    var clsInputBoxSelector = $form.data('inputbox');
    if ( !clsInputBoxSelector ) {
      clsInputBoxSelector = '.blockinput';
    }

    for(var i=0; i<arError.length; i++) {
      if (!arError[i] || !arError[i].obj) { continue; }
      
      arError[i].obj.closest(clsInputBoxSelector).addClass('js-error-control-box');
      
      for(j=0;j < arError[i].type.length;j++) {
        error = arError[i].type[j];
        var $errItem = $form.find('.js-rule-error-'+error);
        if ($errItem.length > 0){
          $errItem.css('display','block').show();
        }
      }
    }
    $form.find('.js-errorbox-all').css('display','block').show();
    return false;
  } else {
    return true;
  }
}

function t362_initPopup(recid){
  $('#rec'+recid).attr('data-animationappear','off');
  $('#rec'+recid).css('opacity','1');

  var el=$('#rec'+recid).find('.t362');
  $('[href^="#price"]').click(function(e){
    t362_closePopup();
    e.preventDefault();
    var tmp = $(this).attr('href');
    // format:  #price:Cost:Product name
    var arParam = tmp.split(':');
        var price = arParam[1].replace(',','.');
        price = parseInt(price.replace(/[^0-9\.]/g,''));
    var pricetext = arParam[1];
    var name = arParam[2];
    var link_recid='0';
    var $link_rec = $(this).closest('.r');
    var htmlpayment = '';
    
    if ($link_rec.length > 0) {
      link_recid = $link_rec.attr('id');
    
      if (! name) {
        var tmp=$link_rec.find('.t-title');
        if (tmp.length > 0) {
          name = tmp.text();
        }
        name = $(this).text();
      }
    }
    

    var $recbox = $('#rec'+recid);
    $recbox.find('.js_payment_product').val(name);
    $recbox.find('.js_payment_price').val(price);
    $recbox.find('#form'+recid).show();

    if(window.tilda_payment_type>'') {
      $recbox.find('.js-tilda-payment').remove();

      /* если Я.Касса подключенная по HTTP */
      if (window.tilda_payment_type == 'yakassa_http') {
		var strvalue = '';
		htmlpayment = '<input class="js-tilda-payment" type="hidden" name="tilda_p_projectid" value="'+$('#allrecords').attr('data-tilda-project-id')+'">';
        htmlpayment = htmlpayment + '<input class="js-tilda-payment" type="hidden" name="tilda_p_amount" value="'+price+'">';
        htmlpayment = htmlpayment + '<input class="js-tilda-payment" type="hidden" name="tilda_p_product_name_0" value="'+name+'">';
        htmlpayment = htmlpayment + '<input class="js-tilda-payment" type="hidden" name="tilda_p_product_amount_0" value="'+price+'">';
		strvalue = window.location.href;
        strvalue = strvalue.substring(0,250);
        htmlpayment = htmlpayment + '<input class="js-tilda-payment" type="hidden" name="tilda_srv_page" value="'+strvalue+'">';
		strvalue = (document.referrer ? document.referrer : '');
        strvalue = strvalue.substring(0,250);
        htmlpayment = htmlpayment + '<input class="js-tilda-payment" type="hidden" name="tilda_srv_referrer" value="'+strvalue+'">';
        htmlpayment = htmlpayment + '<input class="js-tilda-payment" type="hidden" name="tilda_srv_uagent" value="'+navigator.userAgent+'">';
		strvalue = (document.cookie ? document.cookie : '');
        strvalue = strvalue.substring(0,250);
        htmlpayment = htmlpayment + '<input class="js-tilda-payment" type="hidden" name="tilda_srv_cookie" value="'+strvalue+'">';
        var $paymentForm = $('#formpayment'+recid);
        $paymentForm.append(htmlpayment);
        htmlpayment = '';

        /* заменяем обработчик формы на свой */
        $('#form'+recid).removeClass('js-form-proccess').data('success-callback','');
        $('#form'+recid).addClass('js-form-yakassa-proccess');

        
        function t362_YaKassaPayment(e) {
          if (! $(this).hasClass('js-form-yakassa-proccess')) {
            return;
          }
          var $recbox = $('#rec'+recid);
          var $paymentForm = $('#formpayment'+recid);
          //var htmlpayment = '';
          
          e.stopPropagation();
          e.preventDefault();

          if (t362_proccessError($(this))) {
            var i,arFormElements = $('#form'+recid).serializeArray();
            var iCntSrv=0;
            for(i in arFormElements) {
              var elemvalue = arFormElements[i].value, elemname = arFormElements[i].name;
              
              if (elemname == 'productprice' || elemname == 'productname' || elemname == 'form-spec-comments' || elemname == 'tildaspec-cookie') {
                continue;
              }

              if (elemvalue > '' && elemvalue.indexOf('@')>0) {
                var $jqemail;
                /*
                $jqemail = $paymentForm.find('input[name=custEmail]');
                if (!$jqemail || $jqemail.length == 0) {
                  $paymentForm.append("<input type=hidden name=custEmail value='"+elemvalue+"'>");
                } else {
                  $jqemail.val(elemvalue);
                }
                */
                
                $jqemail = $paymentForm.find('input[name=cps_email]');
                if (!$jqemail || $jqemail.length == 0) {
                  $paymentForm.append("<input type=hidden name=cps_email value='"+elemvalue+"'>");
                } else {
                  $jqemail.val(elemvalue);
                }

                $jqemail = $paymentForm.find('input[name=customerNumber]');
                if (!$jqemail || $jqemail.length == 0) {
                  $paymentForm.append("<input type=hidden name=customerNumber value='"+elemvalue+"'>");
                } else {
                  $jqemail.val(elemvalue);
                }

                elemname = elemname.replace('[','_');
                elemname = elemname.replace(']','_');
                /* htmlpayment = htmlpayment + '<input class="js-tilda-payment" type="hidden" name="tildaform_'+elemname+'" value="'+elemvalue+'">'; */
                htmlpayment = htmlpayment + '<input class="js-tilda-payment" type="hidden" name="tildaform__'+parseInt(i)+'_'+elemname+'" value="'+elemvalue+'">';

              } else {
                
                if(arFormElements[i].name == 'formservices[]') {
                  htmlpayment = htmlpayment + '<input class="js-tilda-payment" type="hidden" name="tilda_fs_'+iCntSrv+'" value="'+elemvalue+'">';
                  iCntSrv = parseInt(iCntSrv)+1;
                } else {
                  elemname = elemname.replace('[','_');
                  elemname = elemname.replace(']','_');
                  /*
htmlpayment = htmlpayment + '<input class="js-tilda-payment" type="hidden" name="tildaform_'+elemname+'" value="'+elemvalue+'">';
*/
                  htmlpayment = htmlpayment + '<input class="js-tilda-payment" type="hidden" name="tildaform__'+parseInt(i)+'_'+elemname+'" value="'+elemvalue+'">';
                }
              }
            }

            if ($paymentForm.find('input[name=customerNumber]').val() == '') {
              var t = new Date();
              t = t.getTime();
              $paymentForm.find('input[name=customerNumber]').val(t);
            }

            if ($paymentForm.find('input[name=orderNumber]').val() == '') {
              $paymentForm.find('input[name=orderNumber]').remove();
            }

            if ($(this).data('success-url') > '') {
              $paymentForm.find('.js_payment_successurl').val($(this).data('success-url'));
            } else {
				if ($paymentForm.find('.js_payment_successurl').val() == '') {
              		$paymentForm.find('.js_payment_successurl').val(window.location.href);
				}
            }
            
            if ($paymentForm.find('.js_payment_failurl').val() == '') {
              $paymentForm.find('.js_payment_failurl').val(window.location.href);
            }
          
            if ($recbox.find('.js-payment-type').length>0) {
              $paymentForm.find('input[name=paymentType]').val( $recbox.find('.js-payment-type').val() );
            }

            $paymentForm.append(htmlpayment);

            $paymentForm.submit();
          }
        }
        
        $('#rec'+recid+' .js-form-yakassa-proccess').off('submit');
        $('#rec'+recid+' .js-form-yakassa-proccess').on('submit', t362_YaKassaPayment);
      } else {
            if(window.tilda_payment_type == 'robokassa') {
                /* заменяем обработчик формы на свой */
                $('#form'+recid).removeClass('js-form-proccess').data('success-callback','');
                $('#form'+recid).addClass('js-form-robokassa-proccess');

                $('#rec'+recid+' .js-form-robokassa-proccess').off('submit');
                $('#rec'+recid+' .js-form-robokassa-proccess').on('submit', function(e){
                    e.preventDefault();
                    $('#rec'+recid).find('.js-btn-robokassa').trigger('click');
                    return false;
                });
                
                $('#rec'+recid).find('.js-btn-robokassa').off('click');
                $('#rec'+recid).find('.js-btn-robokassa').on('click', function(e){
                    e.preventDefault();
                    var $recbox = $('#rec'+recid);
                    
                    var btnformsubmit = $(this);
                    var $form = $(this).closest('form');
                
                    if (!$form || $form.length == 0) {
                        return false;
                    }

                    if (! $form.hasClass('js-form-robokassa-proccess')) {
                        return;
                    }

                    var btnstatus = btnformsubmit.data('form-sending-status');
                    if (btnstatus >= '1') {
                        /* 0 - могу отправлять, 1 - отправляю, как только отправлено снова в ставим в 0 */
                        return false;
                    }
                    
                    btnformsubmit.addClass('t-btn_sending');
                    btnformsubmit.data('form-sending-status','1');
                    btnformsubmit.data('submitform', $form);
                    
                    var $errBox = $form.find('.js-errorbox-all');
                    if ($errBox && $errBox.length > 0) {
                        $errBox.hide();
                    }

                    if (t362_proccessError($form)) {

                        var $elem = $form.find('input[name=tildaspec-cookie]');
                        if (!$elem || $elem.length == 0){
                            $form.append('<input type="hidden" name="tildaspec-cookie" value="">');
                            $elem = $form.find('input[name=tildaspec-cookie]');
                        }
                        if ($elem.length > 0) {
                            $elem.val(document.cookie);
                        }
                        
                        $elem = $form.find('input[name=tildaspec-referer]');
                        if (!$elem || $elem.length == 0){
                            $form.append('<input type="hidden" name="tildaspec-referer" value="">');
                            $elem = $form.find('input[name=tildaspec-referer]');
                        }
                        if ($elem.length > 0) {
                            $elem.val(window.location.href);
                        }
                    
                        $elem = $form.find('input[name=tildaspec-projectid]');
                        if (!$elem || $elem.length == 0){
                            $form.append('<input type="hidden" name="tildaspec-projectid" value="'+parseInt($('#allrecords').data('tilda-project-id'))+'">');
                        }
                        $elem = $form.find('input[name=tildaspec-hash]');
                        if (!$elem || $elem.length == 0){
                            console.log('Empty hash for payment form');
                            return false;
                        }
                        
                        var amount = $form.find('.js_payment_price').val();
                        Tilda.robokassaPayment($form, btnformsubmit,'',amount);
                    } else {
                        btnformsubmit.removeClass('t-btn_sending');
                        btnformsubmit.data('form-sending-status','0');
                        btnformsubmit.data('submitform', $form);
                    }
                    return false;
                });
            
            } else {
                var htmlpayment = '<input class="js-tilda-payment" type="hidden" name="tildapayment[projectid]" value="'+$('#allrecords').attr('data-tilda-project-id')+'">';
                htmlpayment = htmlpayment + '<input class="js-tilda-payment" type="hidden" name="tildapayment[amount]" value="'+price+'">';
                htmlpayment = htmlpayment + '<input class="js-tilda-payment" type="hidden" name="tildapayment[products][0][product]" value="'+name+'">';
                htmlpayment = htmlpayment + '<input class="js-tilda-payment" type="hidden" name="tildapayment[products][0][amount]" value="'+price+'">';
          
                $('#form'+recid).append(htmlpayment);
            }
      }
    }
    
    t362_showPopup(recid,name,pricetext);
    t362_sendPopupEventToStatistics(link_recid,name);
    t362_resizePopup(recid);

    if ($recbox.find('.js-stripe-publishable-key').length > 0) {
      var companyname = $recbox.find('.js-stripe-company-name').val()
      if(! window.stripehandler) {
        window.stripehandler = StripeCheckout.configure({
          key: $recbox.find('.js-stripe-publishable-key').val(),
          image: $recbox.find('.js-stripe-logo').val(),
          name: (companyname ? companyname : window.location.host),
          locale: 'auto'
        });
        /* Close Checkout on page navigation:*/
        $(window).on('popstate', function() {
          window.stripehandler.close();
        });
      }
      
      
      /* заменяем обработчик формы на свой */
      $('#form'+recid).removeClass('js-form-proccess').data('success-callback','');
      //$('#rec'+recid).off('submit','.js-form-proccess');
      if($('#formpayment'+recid).attr('action') > '') {
        $('#form'+recid).data('success-url', $('#formpayment'+recid).attr('action'));
      }
      $('#form'+recid).addClass('js-form-stripe-proccess');

      function t362_stripePayment(e){
        if (! $(this).hasClass('js-form-stripe-proccess')) {
          return;
        }
        var $recbox = $('#rec'+recid);
        e.stopPropagation();
        e.preventDefault();
        
        if (t362_proccessError($(this),recid)) {
          
          window.stripehandler.open({
            name: $recbox.find('.js-stripe-company-name').val(),
            image: $recbox.find('.js-stripe-logo').val(),
            description: $recbox.find('.js_payment_product').val(),
            amount:  $recbox.find('.js_payment_price').val()*100,
            currency: $recbox.find('.js-stripe-currency').val(),
            shippingAddress: $recbox.find('.js-stripe-need-shipping').val() == '1' ? true : false,
            token: function(token, args) {
              if (token && token.id) {
                t362_sendPaymentEventToStatistics(name,price*100);
                $('#form'+recid).removeClass('js-form-stripe-proccess');
                $('#form'+recid).off('submit', t362_stripePayment);

                var htmlpayment = '<input class="js-tilda-payment js-stripe-tokenoptions" type="hidden" name="tildapayment[stripetoken]" value="'+token.id+'">';
                if (token.email) {
                  htmlpayment = htmlpayment + '<input class="js-tilda-payment js-stripe-tokenoptions" type="hidden" name="tildapayment[email]" value="'+token.email+'">';
                }
                htmlpayment = htmlpayment + '<input class="js-tilda-payment js-stripe-tokenoptions" type="hidden" name="tildapayment[currency]" value="'+$recbox.find('.js-stripe-currency').val()+'">';
                
                $('#form'+recid).find('.js-stripe-tokenoptions').remove();
                $('#form'+recid).append(htmlpayment);

                $('#form'+recid).addClass('js-form-proccess').submit();
              }
            }
            
          });
          
        }
        return false;
      }

      $('#rec'+recid+' .js-form-stripe-proccess').on('submit', t362_stripePayment);

    }

    if ($recbox.find('.js-cp-key').length > 0) {

      /* заменяем обработчик формы на свой */
      $('#form'+recid).removeClass('js-form-proccess').data('success-callback','');
      //$('#rec'+recid).off('submit','.js-form-proccess');
      if($('#formpayment'+recid).attr('action') > '') {
        $('#form'+recid).data('success-url', $('#formpayment'+recid).attr('action'));
      }
      $('#form'+recid).addClass('js-form-cp-proccess');

      function t362_cloudPayments(e){
        if (! $(this).hasClass('js-form-cp-proccess')) {
          return;
        }

        var $recbox = $('#rec'+recid);
        e.stopPropagation();
        e.preventDefault();
        
        var currency = $('#rec'+recid+' .js-currency').val();
        if(! window.cloudpaymentshandler) {
          var lang='';
          if ( $('#rec'+recid+' .js-language').length > 0) {
            lang = $('#rec'+recid+' .js-language').val();
          }
          if (lang == '') {
            lang = (currency == 'RUB' || currency == 'BYR' ? 'ru-RU' : 'en-US');
          }
          window.cloudpaymentshandler = new cp.CloudPayments({language: lang});
        }
        
        if (t362_proccessError($(this),recid)) {
          $recbox.find('.t-popup').css('z-index','8000');
          var $paymentForm = $('#formpayment'+recid), $form = $('#form'+recid), email, allData={};
          $form.find('input,textarea').each(function(){
            var str = $(this).val();
            var ctrlname = $(this).attr('name');
            if ( ctrlname.substring(0,8)!= 'formserv' && ctrlname != 'form-spec-comments' && str > '') {
              allData[ctrlname] = str;
            }
            if (str > '' && str.indexOf('@')>0) {
              var $jqemail = $paymentForm.find('input[name=accountId]');
              if (!$jqemail || $jqemail.length == 0) {
                $paymentForm.append("<input type=hidden name=accountId value='"+str+"'>");
              } else {
                $jqemail.val(str);
              }
            }
          });
          email = $paymentForm.find('input[name=accountId]').val();

          if ($paymentForm.data('recurrent') == 1) {
            allData.cloudPayments = {recurrent: { interval: 'Month', period: 1 }};
            if ($paymentForm.data('recurrent-interval') > '') {
                allData.cloudPayments.recurrent.interval = $paymentForm.data('recurrent-interval');
            }
            if ($paymentForm.data('recurrent-period') > '') {
                allData.cloudPayments.recurrent.period = parseInt($paymentForm.data('recurrent-period'));
            }
          }
          
         /* $('#rec'+recid).find('.t-popup').css('z-index','8000');*/

          window.cloudpaymentshandler.charge(
            {
              publicId: $recbox.find('.js-cp-key').val(), 
              description: $recbox.find('.js_payment_product').val(), 
              amount: parseFloat($recbox.find('.js_payment_price').val()),
              currency: $recbox.find('.js-currency').val(), 
              accountId: (email ? email : ''),
              data: allData
            },
            function (options) { /* success*/
              //действие при успешной оплате
              t362_sendPaymentEventToStatistics(name, price);
              $('#form'+recid).removeClass('js-form-cp-proccess');
              $('#form'+recid).off('submit', t362_cloudPayments);
              
              $('#form'+recid).addClass('js-form-proccess').submit();
              $recbox.find('.t-popup').css('z-index','');
            },
            function (reason, options) { // fail
              if ($('#rec'+recid+' .js-failure-url').val() > '') {
                window.location.href = $('#rec'+recid+' .js-failure-url').val();
              }
              $recbox.find('.t-popup').css('z-index','');
            }
          );

        }
        return false;
      }

      $('#rec'+recid+' .js-form-cp-proccess').on('submit', t362_cloudPayments);

    }

    return false;
  });

  if ($('#rec'+recid).find('[name=tildaspec-cookie]').length > 0 ) {
    $('#rec'+recid).find('[name=tildaspec-cookie]').val(document.cookie);
  }

  if ($('#rec'+recid).find('.js-stripe-publishable-key').length > 0 && window.stripeapiiscalled!==true){
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "https://checkout.stripe.com/checkout.js";
      document.body.appendChild(script);
      window.stripeapiiscalled=true;
  }

  if ($('#rec'+recid).find('.js-cp-key').length > 0 && window.cloudpaymentsapiiscalled!==true){
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "https://widget.cloudpayments.ru/bundles/cloudpayments";
      document.body.appendChild(script);
      window.cloudpaymentsapiiscalled=true;
  }

} 
function t364_showPopup(recid){
  var el=$('#rec'+recid),
      popup = el.find('.t-popup');

  popup.css('display', 'block');
  setTimeout(function() {
    popup.find('.t-popup__container').addClass('t-popup__container-animated');
    popup.addClass('t-popup_show');
  }, 50);

  $('body').addClass('t-body_popupshowed');

  el.find('.t-popup').click(function(e){
    if (e.target == this) { t364_closePopup(); }
  });

  el.find('.t-popup__close').click(function(e){
    t364_closePopup();
  });

  el.find('.t364__text').click(function(){
    t364_closePopup();
    t364_createCookie('t364closefb','yes',30);
  });

  el.find('a[href*=#]').click(function(e){
    var url = $(this).attr('href');
    if (!url || url.substring(0,7) != '#price:') {
      t364_closePopup();
      if (!url || url.substring(0,7) == '#popup:') {
        setTimeout(function() {
          $('body').addClass('t-body_popupshowed');
        }, 300);
      }
    }
  });

  $(document).keydown(function(e) {
    if (e.keyCode == 27) { t364_closePopup(); }
  });
}

function t364_closePopup(){
  $('body').removeClass('t-body_popupshowed');
  $('.t-popup').removeClass('t-popup_show');
  setTimeout(function() {
    $('.t-popup').not('.t-popup_show').css('display', 'none');
  }, 300);
}

function t364_resizePopup(recid){
  var el = $("#rec"+recid),
      div = el.find(".t-popup__container").height(),
      win = $(window).height() - 30,
      popup = el.find(".t-popup__container");
  if (div > win ) {
    popup.addClass('t-popup__container-static');
  } else {
    popup.removeClass('t-popup__container-static');
  }
}
/*deprecated*/
function t364_sendPopupEventToStatistics(popupname) {
  var virtPage = '/tilda/popup/';
  var virtTitle = 'Popup: ';
  if (popupname.substring(0,7) == '#popup:') {
      popupname = popupname.substring(7);
  }
    
  virtPage += popupname;
  virtTitle += popupname;
    
  if(ga) {
    if (window.mainTracker != 'tilda') {
      ga('send', {'hitType':'pageview', 'page':virtPage,'title':virtTitle});
    }
  }
  
  if (window.mainMetrika > '' && window[window.mainMetrika]) {
    window[window.mainMetrika].hit(virtPage, {title: virtTitle,referer: window.location.href});
  }
}

function t364_createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else { var expires = ""; }
  document.cookie = name+"="+value+expires+"; path=/";
}

function t364_readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0)==' '){ c = c.substring(1,c.length);}
    if (c.indexOf(nameEQ) == 0){ return c.substring(nameEQ.length,c.length);}
  }
  return null;
}

function t364_initPopup(recid){
  $('#rec'+recid).attr('data-animationappear','off');
  $('#rec'+recid).css('opacity','1');
  var el=$('#rec'+recid).find('.t-popup'),
      hook=el.attr('data-tooltip-hook'),
      analitics=el.attr('data-track-popup');
  var cookieexist=el.attr('data-cookies-exist');
  if(cookieexist!=='yes'){
    var cookie = t364_readCookie('');
  } else { var cookie = t364_readCookie('t364closefb'); }
  if(hook!=='' && cookie!=='yes'){
    var obj = $('a[href="'+hook+'"]');
    obj.click(function(e){
      t364_showPopup(recid);
      t364_resizePopup(recid);
      e.preventDefault();
      if (analitics > '') {
        var virtTitle = hook;
        if (virtTitle.substring(0,7) == '#popup:') {
            virtTitle = virtTitle.substring(7);
        }
        Tilda.sendEventToStatistics(analitics, virtTitle);
      }

    });
  }
} 
function t365_showPopup(recid){
  var el=$('#rec'+recid),
      popup = el.find('.t-popup');

  popup.css('display', 'block');
  setTimeout(function() {
    popup.find('.t-popup__container').addClass('t-popup__container-animated');
    popup.addClass('t-popup_show');
  }, 50);

  $('body').addClass('t-body_popupshowed');

  el.find('.t-popup').click(function(e){
    if (e.target == this) { t365_closePopup(); }
  });

  el.find('.t-popup__close').click(function(e){
    t365_closePopup();
  });

  el.find('.t365__text').click(function(){
    t365_closePopup();
    t365_createCookie('t365closefb','yes',30);
  });

  el.find('a[href*=#]').click(function(e){
    var url = $(this).attr('href');
    if (!url || url.substring(0,7) != '#price:') {
      t365_closePopup();
      if (!url || url.substring(0,7) == '#popup:') {
        setTimeout(function() {
          $('body').addClass('t-body_popupshowed');
        }, 300);
      }
    }
  });

  $(document).keydown(function(e) {
    if (e.keyCode == 27) { t365_closePopup(); }
  });
}

function t365_closePopup(){
  $('body').removeClass('t-body_popupshowed');
  $('.t-popup').removeClass('t-popup_show');
  setTimeout(function() {
    $('.t-popup').not('.t-popup_show').css('display', 'none');
  }, 300);
}

function t365_resizePopup(recid){
  var el = $("#rec"+recid),
      div = el.find(".t-popup__container").height(),
      win = $(window).height() - 30,
      popup = el.find(".t-popup__container");
  if (div > win ) {
    popup.addClass('t-popup__container-static');
  } else {
    popup.removeClass('t-popup__container-static');
  }
}
/* deprecated */
function t365_sendPopupEventToStatistics(popupname) {
  var virtPage = '/tilda/popup/';
  var virtTitle = 'Popup: ';
  if (popupname.substring(0,7) == '#popup:') {
      popupname = popupname.substring(7);
  }
    
  virtPage += popupname;
  virtTitle += popupname;
    
  if(ga) {
    if (window.mainTracker != 'tilda') {
      ga('send', {'hitType':'pageview', 'page':virtPage,'title':virtTitle});
    }
  }
  
  if (window.mainMetrika > '' && window[window.mainMetrika]) {
    window[window.mainMetrika].hit(virtPage, {title: virtTitle,referer: window.location.href});
  }
}

function t365_createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else { var expires = ""; }
  document.cookie = name+"="+value+expires+"; path=/";
}

function t365_readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' '){ c = c.substring(1,c.length); }
    if (c.indexOf(nameEQ) == 0){ return c.substring(nameEQ.length,c.length); }
  }
  return null;
}

function t365_initPopup(recid){
  $('#rec'+recid).attr('data-animationappear','off');
  $('#rec'+recid).css('opacity','1');
  var el=$('#rec'+recid).find('.t-popup'),
      hook=el.attr('data-tooltip-hook'),
      analitics=el.attr('data-track-popup');
  var cookieexist=el.attr('data-cookies-exist');
  if(cookieexist!=='yes'){
    var cookie = t365_readCookie('');
  } else { var cookie = t365_readCookie('t365closefb'); }
  if(hook!=='' && cookie!=='yes'){
    var obj = $('a[href="'+hook+'"]');
    obj.click(function(e){
      t365_showPopup(recid);
      t365_resizePopup(recid);
      e.preventDefault();
      if (analitics > '') {
        var virtTitle = hook;
        if (virtTitle.substring(0,7) == '#popup:') {
            virtTitle = virtTitle.substring(7);
        }
        Tilda.sendEventToStatistics(analitics, virtTitle);
      }

    });
  }
} 
function t366_showPopup(recid){
  var el=$('#rec'+recid),
      popup = el.find('.t-popup');

  popup.css('display', 'block');
  t366_resizeGallery(recid);
  setTimeout(function() {
    popup.find('.t-popup__container').addClass('t-popup__container-animated');
    popup.addClass('t-popup_show');
  }, 50);

  $('body').addClass('t-body_popupshowed');

  el.find('.t-popup').click(function(e){
    if (e.target == this) { t366_closePopup(); }
  });

  el.find('.t-popup__close').click(function(e){
    t366_closePopup();
  });

  el.find('a[href*=#]:not(.carousel-control,.t-carousel__control)').click(function(e){
    var url = $(this).attr('href');
    if (!url || url.substring(0,7) != '#price:') {
      t366_closePopup();
      if (!url || url.substring(0,7) == '#popup:') {
        setTimeout(function() {
          $('body').addClass('t-body_popupshowed');
        }, 300);
      }
    }
  });

  $(document).keydown(function(e) {
    if (e.keyCode == 27) { t366_closePopup(); }
  });
}

function t366_closePopup(){
  $('body').removeClass('t-body_popupshowed');
  $('.t-popup').removeClass('t-popup_show');
  setTimeout(function() {
    $('.t-popup').not('.t-popup_show').css('display', 'none');
  }, 300);
}

function t366_resizePopup(recid){
  var el = $("#rec"+recid),
      div = el.find(".t-popup__container").height(),
      win = $(window).height() - 120,
      popup = el.find(".t-popup__container");
  if (div > win ) {
    popup.addClass('t-popup__container-static');
  } else {
    popup.removeClass('t-popup__container-static');
  }
}

function t366_sendPopupEventToStatistics(popupname) {
  var virtPage = '/tilda/popup/';
  var virtTitle = 'Popup: ';
  if (popupname.substring(0,7) == '#popup:') {
      popupname = popupname.substring(7);
  }
    
  virtPage += popupname;
  virtTitle += popupname;
  if (window.Tilda && typeof Tilda.sendEventToStatistics == 'function') {
    Tilda.sendEventToStatistics(virtPage, virtTitle, '', 0);
  } else {
    if(ga) {
      if (window.mainTracker != 'tilda') {
        ga('send', {'hitType':'pageview', 'page':virtPage,'title':virtTitle});
      }
    }
  
    if (window.mainMetrika > '' && window[window.mainMetrika]) {
      window[window.mainMetrika].hit(virtPage, {title: virtTitle,referer: window.location.href});
    }
  }
}

function t366_initPopup(recid){
  $('#rec'+recid).attr('data-animationappear','off');
  $('#rec'+recid).css('opacity','1');
  var el=$('#rec'+recid).find('.t-popup'),
      hook=el.attr('data-tooltip-hook'),
      analitics=el.attr('data-track-popup');
  if(hook!==''){
    var obj = $('a[href="'+hook+'"]');
    obj.click(function(e){
      t366_showPopup(recid);
      t366_resizePopup(recid);
      e.preventDefault();
      if(window.lazy=='y'){t_lazyload_update();}
      if (analitics == 'yes') {
        t366_sendPopupEventToStatistics(hook);
      }
    });
  }
}

function t366_resizeGallery(recid){
  var el=$("#rec"+recid);
  var element = el.find('.t-carousel__checksize');
  var sizer = el.find('.t-carousel__height');
  if (window.matchMedia('(max-width: 800px)').matches) {
    var ratio = 0.9;
    element.height(sizer.height() * ratio);
  }
  if (window.matchMedia('(max-width: 700px)').matches) {
    var ratio = 0.8;
    element.height(sizer.height() * ratio);
  }
  if (window.matchMedia('(max-width: 600px)').matches) {
    var ratio = 0.7;
    element.height(sizer.height() * ratio);
  }
  if (window.matchMedia('(max-width: 500px)').matches) {
    var ratio = 0.6;
    element.height(sizer.height() * ratio);
  }
  if (window.matchMedia('(max-width: 400px)').matches) {
    var ratio = 0.5;
    element.height(sizer.height() * ratio);
  }
  if (window.matchMedia('(min-width: 800px)').matches) {
    element.height(sizer.height());
  }
} 
function t367_createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else var expires = "";
  document.cookie = name+"="+value+expires+"; path=/";
}

function t367_readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

function t367_autoInit(recid){
  var el = $('#rec'+recid).find('.t367__opener');
  var name = el.attr('data-cookie-name');
  var time = el.attr('data-cookie-time');
  var value = "t367cookie";
  var cookie = t367_readCookie(name);
  var delay = el.attr('data-trigger-time');
  var delaytime = delay * 1000;
  if (cookie) {
    $("#rec"+recid+" .t367").html("");
  }else if (el.length){
    setTimeout(function () {
      el.trigger('click');
      $("#rec"+recid+" .t367").html("");
      t367_createCookie(name,value,time);
    }, delaytime);
  }
} 
function t368_alignVertical(recid){
  var el=$("#rec"+recid);
  el.find(".t368__video").css({'padding-bottom':(el.find(".t368__text").height()+12+'px')});
} 
function t369_init(recid){
  t_sldsInit(recid);

  setTimeout(function(){
    t_prod__init(recid);
  }, 500);

  $('#rec'+recid).find('.t744').bind('displayChanged',function(){
      t744_updateSlider(recid);
  });
}

function t369_showPopup(recid){
  var el=$('#rec'+recid),
      popup = el.find('.t-popup');

  popup.css('display', 'block');
  t369_resizeGallery(recid);
  setTimeout(function() {
    popup.find('.t-popup__container').addClass('t-popup__container-animated');
    popup.addClass('t-popup_show');
  }, 50);

  $('body').addClass('t-body_popupshowed');

  el.find('.t-popup').click(function(e){
    if (e.target == this) { t369_closePopup(); }
  });

  el.find('.t-popup__close').click(function(e){
    t369_closePopup();
  });

  el.find('a[href*=#]:not(.carousel-control,.t-carousel__control)').click(function(e){
    var url = $(this).attr('href');
    if (!url || url.substring(0,7) != '#price:') {
      t369_closePopup();
      if (!url || url.substring(0,7) == '#popup:') {
        setTimeout(function() {
          $('body').addClass('t-body_popupshowed');
        }, 300);
      }
    }
  });

  $(document).keydown(function(e) {
    if (e.keyCode == 27) { t369_closePopup(); }
  });
}

function t369_closePopup(){
  $('body').removeClass('t-body_popupshowed');
  $('.t-popup').removeClass('t-popup_show');
  setTimeout(function() {
    $('.t-popup').not('.t-popup_show').css('display', 'none');
  }, 300);
}

function t369_resizePopup(recid){
  var el = $("#rec"+recid),
      div = el.find(".t-popup__container").height(),
      win = $(window).height() - 120,
      popup = el.find(".t-popup__container");
  if (div > win ) {
    popup.addClass('t-popup__container-static');
  } else {
    popup.removeClass('t-popup__container-static');
  }
}

function t369_sendPopupEventToStatistics(popupname) {
  var virtPage = '/tilda/popup/';
  var virtTitle = 'Popup: ';
  if (popupname.substring(0,7) == '#popup:') {
      popupname = popupname.substring(7);
  }
    
  virtPage += popupname;
  virtTitle += popupname;
  if (window.Tilda && typeof Tilda.sendEventToStatistics == 'function') {
    Tilda.sendEventToStatistics(virtPage, virtTitle, '', 0);
  } else {
    if(ga) {
      if (window.mainTracker != 'tilda') {
        ga('send', {'hitType':'pageview', 'page':virtPage,'title':virtTitle});
      }
    }
  
    if (window.mainMetrika > '' && window[window.mainMetrika]) {
      window[window.mainMetrika].hit(virtPage, {title: virtTitle,referer: window.location.href});
    }
  }
}

function t369_initPopup(recid){
  $('#rec'+recid).attr('data-animationappear','off');
  $('#rec'+recid).css('opacity','1');
  var el=$('#rec'+recid).find('.t-popup'),
      hook=el.attr('data-tooltip-hook'),
      analitics=el.attr('data-track-popup');
  if(hook!==''){
    var obj = $('a[href="'+hook+'"]');
    obj.click(function(e){
      t369_showPopup(recid);
      t369_resizePopup(recid);
      e.preventDefault();
      if(window.lazy=='y'){t_lazyload_update();}
      if (analitics == 'yes') {
        t369_sendPopupEventToStatistics(hook);
      }
    });
  }
}

function t369_resizeGallery(recid){
  var el=$("#rec"+recid);
  var element = el.find('.t-carousel__checksize');
  var sizer = el.find('.t-carousel__height');
  if (window.matchMedia('(max-width: 800px)').matches) {
    var ratio = 0.9;
    element.height(sizer.height() * ratio);
  }
  if (window.matchMedia('(max-width: 700px)').matches) {
    var ratio = 0.8;
    element.height(sizer.height() * ratio);
  }
  if (window.matchMedia('(max-width: 600px)').matches) {
    var ratio = 0.7;
    element.height(sizer.height() * ratio);
  }
  if (window.matchMedia('(max-width: 500px)').matches) {
    var ratio = 0.6;
    element.height(sizer.height() * ratio);
  }
  if (window.matchMedia('(max-width: 400px)').matches) {
    var ratio = 0.5;
    element.height(sizer.height() * ratio);
  }
  if (window.matchMedia('(min-width: 800px)').matches) {
    element.height(sizer.height());
  }
} 
function t376_setbg(){
    var bg="no";
    
    $(".r").each(function() {
      var el=$(this);
                  
      if(el.find('.t376').length){bg=el.find('.t376').attr('data-section-bg-color');}

	  if(el.is("[data-bg-color]") === false){

        if(bg!=="no"){
          if(el.is("[data-t376-bg-manual-setted]") === false || (el.is("[data-t376-bg-manual-setted]") && el.attr('data-t376-bg-manual-setted') !== bg) ) {
            el.css('background-color',bg);
            el.attr('data-t376-bg-manual-setted',bg);
          }
        }

        if( bg==="no" && el.is("[data-t376-bg-manual-setted]") ) {
          el.css('background-color','');
          el.removeAttr('data-t376-bg-manual-setted');
        }

	  }

    });
} 
function t381_appearMenu(recid) {
    var window_width=$(window).width();
    if(window_width>980){
         $(".t381").each(function() {
                var el=$(this);
                var appearoffset=el.attr("data-appearoffset");
                var hideoffset=el.attr("data-hideoffset");
                if(appearoffset!=""){
                        if(appearoffset.indexOf('vh') > -1){
                            appearoffset = Math.floor((window.innerHeight * (parseInt(appearoffset) / 100)));
                        }

                        appearoffset=parseInt(appearoffset, 10);

                        if ($(window).scrollTop() >= appearoffset) {
                          if(el.css('visibility') == 'hidden'){
                              el.finish();
                              el.css("visibility","visible");
                              el.animate({"opacity": "1"}, 300,function() {
                              });       
                          }
                        }else{
                          el.stop();
                          el.css("visibility","hidden");
                        }
                }

                if(hideoffset!=""){
                        if(hideoffset.indexOf('vh') > -1){
                            hideoffset = Math.floor((window.innerHeight * (parseInt(hideoffset) / 100)));
                        }

                        hideoffset=parseInt(hideoffset, 10);

                        if ($(window).scrollTop()+$(window).height() >= $(document).height() - hideoffset) {
                          if(el.css('visibility') != 'hidden'){
                              el.finish();
                              el.css("visibility","hidden");
                          }
                        }else{
                          if (appearoffset!="") {
                              if($(window).scrollTop() >= appearoffset){
                                el.stop();
                                el.css("visibility","visible");
                              }
                          }else{
                              el.stop();
                              el.css("visibility","visible");
                          }
                        }
                }
         });
    }
}

 
function t383_highlight(link){
  if(link && link!=''){
	  $("a[href='"+link+"']").addClass("t-active");
  }
}


 
function t384_checkSize(recid){
  var el=$("#rec"+recid);
  var sizer = el.find('.t-carousel__height');
  var height = sizer.height();
  var width = sizer.width();
  var ratio = width/height;
  var gallerywrapper = el.find(".t-carousel__checksize");
  var gallerywidth = gallerywrapper.width();

  if (height != $(window).height()) {
    gallerywrapper.css({'height':((gallerywidth/ratio)+'px')});
  }
} 
    var t385 = {};
    
    t385.equalheight = function(recid) {

        var currentTallest = 0,
            currentRowStart = 0,
            rowDivs = new Array(),
            $el,
            topPosition = 0;
            
        $('#rec'+recid+' .t385__textwrapper').each(function() {
     
            $el = $(this);
            $($el).height('auto')
            topPostion = $el.position().top;
       
            if (currentRowStart != topPostion) {
                for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
                    rowDivs[currentDiv].height(currentTallest);
                }
                rowDivs.length = 0;
                currentRowStart = topPostion;
                currentTallest = $el.height();
                rowDivs.push($el);
            } else {
                rowDivs.push($el);
                currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
            }
            for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
        });
    };
 
    var t386 = {};
    
    t386.equalheight = function(recid) {

        var currentTallest = 0,
            currentRowStart = 0,
            rowDivs = new Array(),
            $el,
            topPosition = 0;
            
        $('#rec'+recid+' .t386__textwrapper').each(function() {
     
            $el = $(this);
            $($el).height('auto')
            topPostion = $el.position().top;
       
            if (currentRowStart != topPostion) {
                for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
                    rowDivs[currentDiv].height(currentTallest);
                }
                rowDivs.length = 0;
                currentRowStart = topPostion;
                currentTallest = $el.height();
                rowDivs.push($el);
            } else {
                rowDivs.push($el);
                currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
            }
            for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
        });
    };
 
function t389_scrollToTop(){
  $('html, body').animate({scrollTop: 0}, 700);								
}	  
function t390_showPopup(recid){
  var el=$('#rec'+recid),
      popup = el.find('.t-popup');

  popup.css('display', 'block');
  setTimeout(function() {
    popup.find('.t-popup__container').addClass('t-popup__container-animated');
    popup.addClass('t-popup_show');
  }, 50);

  $('body').addClass('t-body_popupshowed');

  el.find('.t-popup').click(function(e){
    if (e.target == this) { t390_closePopup(); }
  });

  el.find('.t-popup__close').click(function(e){
    t390_closePopup();
  });

  el.find('a[href*=#]').click(function(e){
    var url = $(this).attr('href');
    if (!url || url.substring(0,7) != '#price:') {
      t390_closePopup();
      if (!url || url.substring(0,7) == '#popup:') {
        setTimeout(function() {
          $('body').addClass('t-body_popupshowed');
        }, 300);
      }
    }
  });

  $(document).keydown(function(e) {
    if (e.keyCode == 27) { t390_closePopup(); }
  });
}

function t390_closePopup(){
  $('body').removeClass('t-body_popupshowed');
  $('.t-popup').removeClass('t-popup_show');
  setTimeout(function() {
    $('.t-popup').not('.t-popup_show').css('display', 'none');
  }, 300);
}

function t390_resizePopup(recid){
  var el = $("#rec"+recid),
      div = el.find(".t-popup__container").height(),
      win = $(window).height() - 120,
      popup = el.find(".t-popup__container");
  if (div > win ) {
    popup.addClass('t-popup__container-static');
  } else {
    popup.removeClass('t-popup__container-static');
  }
}
/* deprecated */
function t390_sendPopupEventToStatistics(popupname) {
  var virtPage = '/tilda/popup/';
  var virtTitle = 'Popup: ';
  if (popupname.substring(0,7) == '#popup:') {
      popupname = popupname.substring(7);
  }
    
  virtPage += popupname;
  virtTitle += popupname;
  if (window.Tilda && typeof Tilda.sendEventToStatistics == 'function') {
    Tilda.sendEventToStatistics(virtPage, virtTitle, '', 0);
  } else {
    if(ga) {
      if (window.mainTracker != 'tilda') {
        ga('send', {'hitType':'pageview', 'page':virtPage,'title':virtTitle});
      }
    }
  
    if (window.mainMetrika > '' && window[window.mainMetrika]) {
      window[window.mainMetrika].hit(virtPage, {title: virtTitle,referer: window.location.href});
    }
  }
}

function t390_initPopup(recid){
  $('#rec'+recid).attr('data-animationappear','off');
  $('#rec'+recid).css('opacity','1');
  var el=$('#rec'+recid).find('.t-popup'),
      hook=el.attr('data-tooltip-hook'),
      analitics=el.attr('data-track-popup');
  if(hook!==''){
    $('.r').on('click', 'a[href="' + hook + '"]', function(e) {
      t390_showPopup(recid);
      t390_resizePopup(recid);
      e.preventDefault();
      if(window.lazy=='y'){t_lazyload_update();}
      if (analitics > '') {
        var virtTitle = hook;
        if (virtTitle.substring(0,7) == '#popup:') {
            virtTitle = virtTitle.substring(7);
        }
        Tilda.sendEventToStatistics(analitics, virtTitle);
      }
    });
  }
} 
function t391_checkSize(recid){
  var el=$("#rec"+recid);
  var cover = el.find('.t-cover');
  var carrier = el.find('.t-cover__carrier');
  var filter = el.find('.t-cover__filter');
  var height = el.find('.t391__firstcol').height() + el.find('.t391__secondcol').height();
  if (window.matchMedia('(max-width: 960px)').matches && height > 0) {
    cover.css('height',height);
    carrier.css('height',height);
    filter.css('height',height);
  }
} 
function t393_appearMenu(recid) {
    var window_width=$(window).width();
    if(window_width>980){
         $(".t393").each(function() {
                var el=$(this);
                var appearoffset=el.attr("data-appearoffset");
                var hideoffset=el.attr("data-hideoffset");
                if(appearoffset!=""){
                        if(appearoffset.indexOf('vh') > -1){
                            appearoffset = Math.floor((window.innerHeight * (parseInt(appearoffset) / 100)));
                        }

                        appearoffset=parseInt(appearoffset, 10);

                        if ($(window).scrollTop() >= appearoffset) {
                          if(el.css('visibility') == 'hidden'){
                              el.finish();
                              el.css("visibility","visible");
                              el.animate({"opacity": "1"}, 300,function() {
                              });       
                          }
                        }else{
                          el.stop();
                          el.css("visibility","hidden");
                        }
                }

                if(hideoffset!=""){
                        if(hideoffset.indexOf('vh') > -1){
                            hideoffset = Math.floor((window.innerHeight * (parseInt(hideoffset) / 100)));
                        }

                        hideoffset=parseInt(hideoffset, 10);

                        if ($(window).scrollTop()+$(window).height() >= $(document).height() - hideoffset) {
                          if(el.css('visibility') != 'hidden'){
                              el.finish();
                              el.css("visibility","hidden");
                          }
                        }else{
                          if (appearoffset!="") {
                              if($(window).scrollTop() >= appearoffset){
                                el.stop();
                                el.css("visibility","visible");
                              }
                          }else{
                              el.stop();
                              el.css("visibility","visible");
                          }
                        }
                }
         });
    }
}

 
function t395_init(recid){
  var el=$('#rec'+recid);
  el.find('.t395__tab').click(function() {
    el.find('.t395__tab').removeClass('t395__tab_active');
    $(this).addClass('t395__tab_active');
  t395_alltabs_updateContent(recid);
    t395_updateSelect(recid);
    $('.t347').trigger('displayChanged');
    $('.t346').trigger('displayChanged');
    $('.t764, .t506, .t675, .t570, .t774, .t397, .t504, .t498, .t778, .t592, .t477, .t480, .t511, .t552, .t132, .t598, .t599, .t650, .t659, .t351, .t353, .t341, .t404, .t385, .t386, .t409, .t384, .t279, .t349, .t433, .t418, .t268, .t428, .t532, .t601, .t478, .t228, .t229, .t456, .t520, .t615, .t517, .t688, .t744, .t609, .t604, .t670, .t686, .t554, .t230, .t486, .t117, .t422, .t616, .t121, .t801, .t412, .t760, .t827, .t829, .t762, .t826, .t734, .t726, .t799, .t842, .t843, .t849, .t850, .t851, .t856, .t858, .t859, .t860, .t518, .t396, .t728, .t738, .t544, .t780, .t698').trigger('displayChanged');
    setTimeout(function(){
      $('.t351, .t353, .t341, .t404, .t385, .t386, .t409, .t384, .t279, .t349, .t410, .t433, .t418, .t520, .t829, .t396, .t738').trigger('displayChanged');
    },50);
    if(window.lazy=='y'){t_lazyload_update();}
  });
  t395_alltabs_updateContent(recid);
  t395_updateContentBySelect(recid);
  var bgcolor=el.css("background-color");
  var bgcolor_target=el.find(".t395__select, .t395__firefoxfix");
  bgcolor_target.css("background", bgcolor);
}

function t395_alltabs_updateContent(recid){
  var el=$('#rec'+recid);
  el.find(".t395__tab").each(function (i) {
    var rec_ids = $(this).attr('data-tab-rec-ids').split(',');
  rec_ids.forEach(function(rec_id, i, arr) {
    var rec_el=$('#rec'+rec_id);
    rec_el.attr('data-connect-with-tab','yes');
    rec_el.attr('data-animationappear','off');
    rec_el.addClass('t379__off');
  });
  });

  el.find(".t395__tab_active").each(function (i) {
    var rec_ids = $(this).attr('data-tab-rec-ids').split(',');
  rec_ids.forEach(function(rec_id, i, arr) {
    //console.log(rec_id);
    var rec_el=$('#rec'+rec_id);
    rec_el.removeClass('t379__off');
    rec_el.css('opacity','');
  });
  });
}

function t395_updateContentBySelect(recid) {
  var el=$('#rec'+recid);
  el.find(".t395__select").change(function() {
    var select_val = el.find(".t395__select").val();
    var tab_index = el.find(".t395__tab[data-tab-rec-ids='" + select_val + "']");
    tab_index.trigger('click');
  });
}

function t395_updateSelect(recid) {
  var el=$('#rec'+recid);
  var current_tab = el.find(".t395__tab_active").attr('data-tab-rec-ids');
  var el_select=el.find(".t395__select");
  el_select.val(current_tab);
}
 
function t396_init(recid){
  var data='';
  var res=t396_detectResolution();
  t396_initTNobj();    
  t396_switchResolution(res);
  t396_updateTNobj();
  t396_artboard_build(data,recid);

  window.tn_window_width=$(window).width();
  
  $( window ).resize(function () {
    tn_console('>>>> t396: Window on Resize event >>>>');
    t396_waitForFinalEvent(function(){

        if($isMobile){
	        var ww=$(window).width();	        
	        if(ww!=window.tn_window_width){
		        t396_doResize(recid);
	        }
        }else{
			t396_doResize(recid);
        }

    }, 500, 'resizeruniqueid'+recid);
  });
  
  $(window).on("orientationchange",function(){
    tn_console('>>>> t396: Orient change event >>>>');
    t396_waitForFinalEvent(function(){
		t396_doResize(recid);
    }, 600, 'orientationuniqueid'+recid);
  });  

  $( window ).load(function() {
	  var ab=$('#rec'+recid).find('.t396__artboard');
      t396_allelems__renderView(ab);
  });
  
	var rec = $('#rec' + recid);
	if (rec.attr('data-connect-with-tab') == 'yes') {
		rec.find('.t396').bind('displayChanged', function() {
			var ab = rec.find('.t396__artboard');
			t396_allelems__renderView(ab);
		});
	}      
}

function t396_doResize(recid){
    var ww=$(window).width();
    window.tn_window_width=ww;
    var res=t396_detectResolution();
    var ab=$('#rec'+recid).find('.t396__artboard');
    t396_switchResolution(res);
    t396_updateTNobj();
    t396_ab__renderView(ab);
    t396_allelems__renderView(ab);	
}

function t396_detectResolution(){
    var ww=$(window).width();
    var res;
    res=1200;
    if(ww<1200){res=960;}
    if(ww<960){res=640;}
    if(ww<640){res=480;}
    if(ww<480){res=320;}
	return(res);
}

function t396_initTNobj(){
	tn_console('func: initTNobj');	
	window.tn={};
	
	window.tn.canvas_min_sizes = ["320","480","640","960","1200"];
	window.tn.canvas_max_sizes = ["480","640","960","1200",""];	
	window.tn.ab_fields = ["height","width","bgcolor","bgimg","bgattachment","bgposition","filteropacity","filtercolor","filteropacity2","filtercolor2","height_vh","valign"];	
}

function t396_updateTNobj(){
	tn_console('func: updateTNobj');		
	
	if(typeof window.zero_window_width_hook!='undefined' && window.zero_window_width_hook=='allrecords' && $('#allrecords').length){
		window.tn.window_width = parseInt($('#allrecords').width());
	}else{
		window.tn.window_width = parseInt($(window).width());
	}
	/* window.tn.window_width = parseInt($(window).width()); */
	window.tn.window_height = parseInt($(window).height());

	if(window.tn.curResolution==1200){
		window.tn.canvas_min_width = 1200;
		window.tn.canvas_max_width = window.tn.window_width;
	}
	if(window.tn.curResolution==960){
		window.tn.canvas_min_width = 960;
		window.tn.canvas_max_width = 1200;
	}
	if(window.tn.curResolution==640){
		window.tn.canvas_min_width = 640;
		window.tn.canvas_max_width = 960;
	}
	if(window.tn.curResolution==480){
		window.tn.canvas_min_width = 480;
		window.tn.canvas_max_width = 640;
	}
	if(window.tn.curResolution==320){
		window.tn.canvas_min_width = 320;
		window.tn.canvas_max_width = 480;
	}
	
	window.tn.grid_width = window.tn.canvas_min_width;	
	window.tn.grid_offset_left = parseFloat( (window.tn.window_width-window.tn.grid_width)/2 );	

}


var t396_waitForFinalEvent = (function () {
  var timers = {};
  return function (callback, ms, uniqueId) {
    if (!uniqueId) {
      uniqueId = "Don't call this twice without a uniqueId";
    }
    if (timers[uniqueId]) {
      clearTimeout (timers[uniqueId]);
    }
    timers[uniqueId] = setTimeout(callback, ms);
  };
})();

  
function t396_switchResolution(res,resmax){
	tn_console('func: switchResolution');
	
	if(typeof resmax=='undefined'){
		if(res==1200)resmax='';
		if(res==960)resmax=1200;
		if(res==640)resmax=960;
		if(res==480)resmax=640;
		if(res==320)resmax=480;
	}
	
	window.tn.curResolution=res;
	window.tn.curResolution_max=resmax;
}

function t396_artboard_build(data,recid){
  tn_console('func: t396_artboard_build. Recid:'+recid);
  tn_console(data);    

  /* set style to artboard */
  var ab=$('#rec'+recid).find('.t396__artboard');

  t396_ab__renderView(ab);

  /* create elements */
  ab.find('.tn-elem').each(function() {
      var item=$(this);
      if(item.attr('data-elem-type')=='text'){
          t396_addText(ab,item);
      }
      if(item.attr('data-elem-type')=='image'){
          t396_addImage(ab,item);
      }
      if(item.attr('data-elem-type')=='shape'){
          t396_addShape(ab,item);
      }		
      if(item.attr('data-elem-type')=='button'){
          t396_addButton(ab,item);
      }	
      if(item.attr('data-elem-type')=='video'){
          t396_addVideo(ab,item);
      }
      if(item.attr('data-elem-type')=='html'){
          t396_addHtml(ab,item);
      }
      if(item.attr('data-elem-type')=='tooltip'){
          t396_addTooltip(ab,item);
      }
      if(item.attr('data-elem-type')=='form'){
          t396_addForm(ab,item);
      }
  });

  $('#rec'+recid).find('.t396__artboard').removeClass('rendering').addClass('rendered');
  
  if(ab.attr('data-artboard-ovrflw')=='visible'){
      $('#allrecords').css('overflow','hidden');
  }

}

function t396_ab__renderView(ab){
	var fields = window.tn.ab_fields;
	
	for ( var i = 0; i < fields.length; i++ ) {
		t396_ab__renderViewOneField(ab,fields[i]);
	}

	var ab_min_height=t396_ab__getFieldValue(ab,'height');
	var ab_max_height=t396_ab__getHeight(ab);

	var offset_top=0;
	if(ab_min_height==ab_max_height){
	  offset_top=0;
	}else{
	  var ab_valign=t396_ab__getFieldValue(ab,'valign');
      if(ab_valign=='top'){
          offset_top=0;
      }else if(ab_valign=='center'){
          offset_top=parseFloat( (ab_max_height-ab_min_height)/2 ).toFixed(1);
      }else if(ab_valign=='bottom'){
          offset_top=parseFloat( (ab_max_height-ab_min_height) ).toFixed(1);
      }else if(ab_valign=='stretch'){
          offset_top=0;
		  ab_min_height=ab_max_height;
      }else{
          offset_top=0;
	  }
	}

	ab.attr('data-artboard-proxy-min-offset-top',offset_top);
	ab.attr('data-artboard-proxy-min-height',ab_min_height);
	ab.attr('data-artboard-proxy-max-height',ab_max_height);
}

function t396_addText(ab,el){
	tn_console('func: addText');
				
	/* add data atributes */
	var fields_str='top,left,width,container,axisx,axisy,widthunits,leftunits,topunits';
	var fields=fields_str.split(',');
	el.attr('data-fields',fields_str);		

	/* render elem view */	
	t396_elem__renderView(el);
	
}

function t396_addImage(ab,el){
	tn_console('func: addImage');	
			
	/* add data atributes */
	var fields_str='img,width,filewidth,fileheight,top,left,container,axisx,axisy,widthunits,leftunits,topunits';
	var fields=fields_str.split(',');
	el.attr('data-fields',fields_str);	
		

	/* render elem view */	
	t396_elem__renderView(el);

	el.find('img').on("load", function() {
	  t396_elem__renderViewOneField(el,'top');
	  if(typeof $(this).attr('src')!='undefined' && $(this).attr('src')!=''){
		setTimeout( function() { 
			t396_elem__renderViewOneField(el,'top');
		} , 2000);
	  }                                       
	}).each(function() {
	  if(this.complete) $(this).load();
	}); 
	
    el.find('img').on('tuwidget_done', function(e, file) { 
		t396_elem__renderViewOneField(el,'top');
    });

}

function t396_addShape(ab,el){
	tn_console('func: addShape');		

	/* add data atributes */
	var fields_str='width,height,top,left,';
	fields_str+='container,axisx,axisy,widthunits,heightunits,leftunits,topunits';
	var fields=fields_str.split(',');
	el.attr('data-fields',fields_str);	
		
	/* render elem view */	
	t396_elem__renderView(el);
	
}

function t396_addButton(ab,el){
	tn_console('func: addButton');
	
	/* add data atributes */
	var fields_str='top,left,width,height,container,axisx,axisy,caption,leftunits,topunits';
	var fields=fields_str.split(',');
	el.attr('data-fields',fields_str);
		
	/* render elem view */	
	t396_elem__renderView(el);

	return(el);	
}

function t396_addVideo(ab,el){
	tn_console('func: addVideo');		

	/* add data atributes */
	var fields_str='width,height,top,left,';
	fields_str+='container,axisx,axisy,widthunits,heightunits,leftunits,topunits';
	var fields=fields_str.split(',');
	el.attr('data-fields',fields_str);	
		
	/* render elem view */	
	t396_elem__renderView(el);
	
	var viel=el.find('.tn-atom__videoiframe');
	var viatel=el.find('.tn-atom');
	viatel.css('background-color','#000');
	
	var vihascover=viatel.attr('data-atom-video-has-cover');
	if(typeof vihascover=='undefined'){
	    vihascover='';
	}
	if(vihascover=='y'){
        viatel.click(function() {
            var viifel=viel.find('iframe');
            if(viifel.length){
                var foo=viifel.attr('data-original');
                viifel.attr('src',foo);
            }
            viatel.css('background-image','none');
            viatel.find('.tn-atom__video-play-link').css('display','none');
        });
	}
	
	var autoplay=t396_elem__getFieldValue(el,'autoplay');
	var showinfo=t396_elem__getFieldValue(el,'showinfo');
	var loop=t396_elem__getFieldValue(el,'loop');
	var mute=t396_elem__getFieldValue(el,'mute');
	var startsec=t396_elem__getFieldValue(el,'startsec');
	var endsec=t396_elem__getFieldValue(el,'endsec');
	var tmode=$('#allrecords').attr('data-tilda-mode');
    var url='';
    
	var viyid=viel.attr('data-youtubeid');
	if(typeof viyid!='undefined' && viyid!=''){
       url='//www.youtube.com/embed/';
	   url+=viyid+'?rel=0&fmt=18&html5=1';
	   url+='&showinfo='+(showinfo=='y'?'1':'0');
	   if(loop=='y'){url+='&loop=1&playlist='+viyid;}
	   if(startsec>0){url+='&start='+startsec;}
	   if(endsec>0){url+='&end='+endsec;}
	   if(mute=='y'){url+='&mute=1';}
	   if(vihascover=='y'){
	       url+='&autoplay=1';
	       viel.html('<iframe id="youtubeiframe" width="100%" height="100%" data-original="'+url+'" frameborder="0" allowfullscreen data-flag-inst="y"></iframe>');
	   }else{
	       if(typeof tmode!='undefined' && tmode=='edit'){}else{
	           if(autoplay=='y'){url+='&autoplay=1';}
	       }
	       if(window.lazy=='y'){
	           viel.html('<iframe id="youtubeiframe" class="t-iframe" width="100%" height="100%" data-original="'+url+'" frameborder="0" allowfullscreen data-flag-inst="lazy"></iframe>');
		       el.append('<script>lazyload_iframe = new LazyLoad({elements_selector: ".t-iframe"});</script>');
	       }else{
    	       viel.html('<iframe id="youtubeiframe" width="100%" height="100%" src="'+url+'" frameborder="0" allowfullscreen data-flag-inst="y"></iframe>');	        
	       }
	   }
	}

	var vivid=viel.attr('data-vimeoid');
	if(typeof vivid!='undefined' && vivid>0){
        url='//player.vimeo.com/video/';
	    url+=vivid+'?color=ffffff&badge=0';
	    if(showinfo=='y'){url+='&title=1&byline=1&portrait=1';}else{url+='&title=0&byline=0&portrait=0';}
	    if(loop=='y'){url+='&loop=1';}
	    if(mute=='y'){url+='&muted=1';}
	    if(vihascover=='y'){
	        url+='&autoplay=1';
	        viel.html('<iframe data-original="'+url+'" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
	    }else{
	        if(typeof tmode!='undefined' && tmode=='edit'){}else{
	            if(autoplay=='y'){url+='&autoplay=1';}
	        }	        
	        if(window.lazy=='y'){
	      	    viel.html('<iframe class="t-iframe" data-original="'+url+'" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
		        el.append('<script>lazyload_iframe = new LazyLoad({elements_selector: ".t-iframe"});</script>');
	        }else{
    	        viel.html('<iframe src="'+url+'" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');	        
	        }
	    }
	}
	
}

function t396_addHtml(ab,el){
	tn_console('func: addHtml');		

	/* add data atributes */
	var fields_str='width,height,top,left,';
	fields_str+='container,axisx,axisy,widthunits,heightunits,leftunits,topunits';	
	var fields=fields_str.split(',');
	el.attr('data-fields',fields_str);	
		
	/* render elem view */	
	t396_elem__renderView(el);
	
}

function t396_addTooltip(ab, el) {
    tn_console('func: addTooltip');
    var fields_str = 'width,height,top,left,';
    fields_str += 'container,axisx,axisy,widthunits,heightunits,leftunits,topunits,tipposition';
    var fields = fields_str.split(',');
    el.attr('data-fields', fields_str);
    t396_elem__renderView(el);

    var pinEl = el.find('.tn-atom__pin');
    var tipEl = el.find('.tn-atom__tip');
    var tipopen = el.attr('data-field-tipopen-value');
    
    if (isMobile || (typeof tipopen!='undefined' && tipopen=='click')) {
        t396_setUpTooltip_mobile(el,pinEl,tipEl);
    } else {
        t396_setUpTooltip_desktop(el,pinEl,tipEl);
    }

    setTimeout(function() {
        $('.tn-atom__tip-img').each(function() {
            var foo = $(this).attr('data-tipimg-original');
            if (typeof foo != 'undefined' && foo != '') {
                $(this).attr('src', foo);
            }
        })
    }, 3000);
}

function t396_addForm(ab,el){
	tn_console('func: addForm');		

	/* add data atributes */
	var fields_str='width,top,left,';
	fields_str+='inputs,container,axisx,axisy,widthunits,leftunits,topunits';
	var fields=fields_str.split(',');
	el.attr('data-fields',fields_str);	
		
	/* render elem view */	
	t396_elem__renderView(el);
	
}

function t396_elem__setFieldValue(el,prop,val,flag_render,flag_updateui,res){
	if(res=='')res=window.tn.curResolution;	
	if(res<1200 && prop!='zindex'){
		el.attr('data-field-'+prop+'-res-'+res+'-value',val);
	}else{
		el.attr('data-field-'+prop+'-value',val);		
	}
	if(flag_render=='render')elem__renderViewOneField(el,prop);
	if(flag_updateui=='updateui')panelSettings__updateUi(el,prop,val);
}

function t396_elem__getFieldValue(el,prop){
	
	var res=window.tn.curResolution;
	
	var r;
		
	if(res<1200){
		
		if(res==960){
			r=el.attr('data-field-'+prop+'-res-960-value');			
			if(typeof r=='undefined'){
				r=el.attr('data-field-'+prop+'-value');
			}
		}

		if(res==640){
			r=el.attr('data-field-'+prop+'-res-640-value');			
			if(typeof r=='undefined'){
				r=el.attr('data-field-'+prop+'-res-960-value');
				if(typeof r=='undefined'){
					r=el.attr('data-field-'+prop+'-value');
				}
			}
		}

		if(res==480){
			r=el.attr('data-field-'+prop+'-res-480-value');			
			if(typeof r=='undefined'){
				r=el.attr('data-field-'+prop+'-res-640-value');
				if(typeof r=='undefined'){
					r=el.attr('data-field-'+prop+'-res-960-value');
					if(typeof r=='undefined'){
						r=el.attr('data-field-'+prop+'-value');
					}
				}
			}
		}

		if(res==320){
			r=el.attr('data-field-'+prop+'-res-320-value');			
			if(typeof r=='undefined'){
				r=el.attr('data-field-'+prop+'-res-480-value');
				if(typeof r=='undefined'){
					r=el.attr('data-field-'+prop+'-res-640-value');
					if(typeof r=='undefined'){
						r=el.attr('data-field-'+prop+'-res-960-value');
						if(typeof r=='undefined'){
							r=el.attr('data-field-'+prop+'-value');
						}
					}
				}
			}
		}
						
	}else{
		r=el.attr('data-field-'+prop+'-value');		
	}		

	return(r);
}

function t396_elem__renderView(el){
	tn_console('func: elem__renderView');	
	var fields=el.attr('data-fields');
	if(! fields) {
		return false;
	}
	fields = fields.split(',');
	
	/* set to element value of every field  via css */	
	for ( var i = 0; i < fields.length; i++ ) {
		t396_elem__renderViewOneField(el,fields[i]);
	}
		
}

function t396_elem__renderViewOneField(el,field){

	var value=t396_elem__getFieldValue(el,field);

	if(field=='left'){
		value = t396_elem__convertPosition__Local__toAbsolute(el,field,value);
		el.css('left',parseFloat(value).toFixed(1)+'px');
	}

	if(field=='top'){
		value = t396_elem__convertPosition__Local__toAbsolute(el,field,value);
		el.css('top',parseFloat(value).toFixed(1)+'px');
	}
		
	if(field=='width'){
		value = t396_elem__getWidth(el,value);
        el.css('width',parseFloat(value).toFixed(1)+'px');
		var eltype=el.attr('data-elem-type');
		if(eltype=='tooltip'){
            var pinSvgIcon = el.find('.tn-atom__pin-icon');
            /*add width to svg nearest parent to fix InternerExplorer problem*/
            if (pinSvgIcon.length > 0) {
                var pinSize = parseFloat(value).toFixed(1) + 'px';
                pinSvgIcon.css({'width': pinSize, 'height': pinSize});
            }
			el.css('height',parseInt(value).toFixed(1)+'px');	
		}
	}
	
	if(field=='height'){
        var eltype = el.attr('data-elem-type');
        if (eltype == 'tooltip') {
            return;
        }
		value=t396_elem__getHeight(el,value);
		el.css('height', parseFloat(value).toFixed(1)+'px');
	}	
	
	if(field=='container'){
		t396_elem__renderViewOneField(el,'left');
		t396_elem__renderViewOneField(el,'top');
	}

	if(field=='width' || field=='height' || field=='fontsize' || field=='fontfamily' || field=='letterspacing' || field=='fontweight' || field=='img'){
		t396_elem__renderViewOneField(el,'left');
		t396_elem__renderViewOneField(el,'top');
	}
	
	if(field=='inputs'){
		value=el.find('.tn-atom__inputs-textarea').val();
		try {
		    t_zeroForms__renderForm(el,value);
		} catch (err) {
        }		    
	}

}
                    
function t396_elem__convertPosition__Local__toAbsolute(el,field,value){
	
	value = parseInt(value);			
	
	if(field=='left'){

		var el_container,offset_left,el_container_width,el_width;
		var container=t396_elem__getFieldValue(el,'container');
		
		if(container=='grid'){
			el_container = 'grid';
			offset_left = window.tn.grid_offset_left;
			el_container_width = window.tn.grid_width;
		}else{
			el_container = 'window';
			offset_left = 0;
			el_container_width = window.tn.window_width;			
		}		
			
		/* fluid or not	*/
		var el_leftunits=t396_elem__getFieldValue(el,'leftunits');
		if(el_leftunits=='%'){

				value = t396_roundFloat( el_container_width * value/100 );
			
		}
			
        value = offset_left + value;

        var el_axisx=t396_elem__getFieldValue(el,'axisx');

        if(el_axisx=='center'){
			el_width = t396_elem__getWidth(el);
            value = el_container_width/2 - el_width/2 + value;
        }

        if(el_axisx=='right'){
            el_width = t396_elem__getWidth(el);
            value = el_container_width - el_width + value;
        }
		
	}	
	
	if(field=='top'){
		var ab=el.parent();

		var el_container,offset_top,el_container_height,el_height;
		var container=t396_elem__getFieldValue(el,'container');
		
		if(container=='grid'){
			el_container = 'grid';
			offset_top = parseFloat( ab.attr('data-artboard-proxy-min-offset-top') );
			el_container_height = parseFloat( ab.attr('data-artboard-proxy-min-height') );
		}else{
			el_container = 'window';
			offset_top = 0;
			el_container_height = parseFloat( ab.attr('data-artboard-proxy-max-height') );
		}

		/* fluid or not	*/
		var el_topunits=t396_elem__getFieldValue(el,'topunits');
		if(el_topunits=='%'){

				value = ( el_container_height * (value/100) );
			
		}

        value = offset_top + value;

        var el_axisy=t396_elem__getFieldValue(el,'axisy');

        if(el_axisy=='center'){
			/* var el_height=parseFloat(el.innerHeight()); */
			el_height=t396_elem__getHeight(el);
            value = el_container_height/2 - el_height/2 + value;
        }

        if(el_axisy=='bottom'){
			/* var el_height=parseFloat(el.innerHeight()); */
			el_height=t396_elem__getHeight(el);
            value = el_container_height - el_height + value;
        }	
                                                   
	}		
	
	return(value);				
	
}

                                          
function t396_ab__setFieldValue(ab,prop,val,res){
	/* tn_console('func: ab__setFieldValue '+prop+'='+val);	*/
	
	if(res=='')res=window.tn.curResolution;
	
	if(res<1200){
		ab.attr('data-artboard-'+prop+'-res-'+res,val);
	}else{
		ab.attr('data-artboard-'+prop,val);		
	}
	
}

function t396_ab__getFieldValue(ab,prop){
	
	var res=window.tn.curResolution;
	
	var r;
		
	if(res<1200){
		
		if(res==960){
			r=ab.attr('data-artboard-'+prop+'-res-960');			
			if(typeof r=='undefined'){
				r=ab.attr('data-artboard-'+prop+'');
			}
		}

		if(res==640){
			r=ab.attr('data-artboard-'+prop+'-res-640');			
			if(typeof r=='undefined'){
				r=ab.attr('data-artboard-'+prop+'-res-960');
				if(typeof r=='undefined'){
					r=ab.attr('data-artboard-'+prop+'');
				}
			}
		}

		if(res==480){
			r=ab.attr('data-artboard-'+prop+'-res-480');			
			if(typeof r=='undefined'){
				r=ab.attr('data-artboard-'+prop+'-res-640');
				if(typeof r=='undefined'){
					r=ab.attr('data-artboard-'+prop+'-res-960');
					if(typeof r=='undefined'){
						r=ab.attr('data-artboard-'+prop+'');
					}
				}
			}
		}

		if(res==320){
			r=ab.attr('data-artboard-'+prop+'-res-320');			
			if(typeof r=='undefined'){
				r=ab.attr('data-artboard-'+prop+'-res-480');
				if(typeof r=='undefined'){
					r=ab.attr('data-artboard-'+prop+'-res-640');
					if(typeof r=='undefined'){
						r=ab.attr('data-artboard-'+prop+'-res-960');
						if(typeof r=='undefined'){
							r=ab.attr('data-artboard-'+prop+'');
						}
					}
				}
			}
		}
						
	}else{
		r=ab.attr('data-artboard-'+prop);		
	}		

	return(r);
}

function t396_ab__renderViewOneField(ab,field){	
	var value=t396_ab__getFieldValue(ab,field);		

}

function t396_allelems__renderView(ab){
	tn_console('func: allelems__renderView: abid:'+ab.attr('data-artboard-recid'));
	ab.find(".tn-elem").each(function() {	
		t396_elem__renderView($(this));
	});
	
}

function t396_ab__filterUpdate(ab){
	var filter=ab.find('.t396__filter');
	var c1=filter.attr('data-filtercolor-rgb');
	var c2=filter.attr('data-filtercolor2-rgb');
	var o1=filter.attr('data-filteropacity');
	var o2=filter.attr('data-filteropacity2');
	if((typeof c2=='undefined' || c2=='') && (typeof c1!='undefined' && c1!='')){
		filter.css("background-color", "rgba("+c1+","+o1+")");
	}else if((typeof c1=='undefined' || c1=='') && (typeof c2!='undefined' && c2!='')){
		filter.css("background-color", "rgba("+c2+","+o2+")");		
	}else if(typeof c1!='undefined' && typeof c2!='undefined' && c1!='' && c2!=''){
		filter.css({
			background: "-webkit-gradient(linear, left top, left bottom, from(rgba("+c1+","+o1+")), to(rgba("+c2+","+o2+")) )" 
		});	
	}else{
		filter.css("background-color", 'transparent');
	}
}

function t396_ab__getHeight(ab, ab_height){
	if(typeof ab_height=='undefined')ab_height=t396_ab__getFieldValue(ab,'height');
	ab_height=parseFloat(ab_height);

    /* get Artboard height (fluid or px) */
    var ab_height_vh=t396_ab__getFieldValue(ab,'height_vh');
    if(ab_height_vh!=''){
          ab_height_vh=parseFloat(ab_height_vh);
          if(isNaN(ab_height_vh)===false){
              var ab_height_vh_px=parseFloat( window.tn.window_height * parseFloat(ab_height_vh/100) );
              if( ab_height < ab_height_vh_px ){
                  ab_height=ab_height_vh_px;
              }
          }
    }
                                               
	return(ab_height);
}
                                                       
function t396_hex2rgb(hexStr){
    /*  note: hexStr should be #rrggbb */
    var hex = parseInt(hexStr.substring(1), 16);
    var r = (hex & 0xff0000) >> 16;
    var g = (hex & 0x00ff00) >> 8;
    var b = hex & 0x0000ff;
    return [r, g, b];
}

String.prototype.t396_replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};


function t396_elem__getWidth(el,value){
	if(typeof value=='undefined')value=parseFloat( t396_elem__getFieldValue(el,'width') );
	var el_widthunits=t396_elem__getFieldValue(el,'widthunits');
	if(el_widthunits=='%'){
		var el_container=t396_elem__getFieldValue(el,'container');
		if(el_container=='window'){
			value=parseFloat( window.tn.window_width * parseFloat( parseInt(value)/100 ) );
		}else{
			value=parseFloat( window.tn.grid_width * parseFloat( parseInt(value)/100 ) );
		}
	}
	return(value);	
}

function t396_elem__getHeight(el,value){

	if(typeof value=='undefined')value=t396_elem__getFieldValue(el,'height');	

	value=parseFloat(value);
	
	if(el.attr('data-elem-type')=='shape' || el.attr('data-elem-type')=='video' || el.attr('data-elem-type')=='html'){		
		
		var el_heightunits=t396_elem__getFieldValue(el,'heightunits');
		
		if(el_heightunits=='%'){
		
            var ab=el.parent();
            var ab_min_height=parseFloat( ab.attr('data-artboard-proxy-min-height') );
			var ab_max_height=parseFloat( ab.attr('data-artboard-proxy-max-height') );

			var el_container=t396_elem__getFieldValue(el,'container');
			if(el_container=='window'){
				value=parseFloat( ab_max_height * parseFloat( value/100 ) );
			}else{
				value=parseFloat( ab_min_height * parseFloat( value/100 ) );
			}
			
		}		
		
	}else if(el.attr('data-elem-type')=='button'){
		
		value = value;
		
	}else{
		
		value =  parseFloat(el.innerHeight());
		
	}
	
	return(value);	
}

function t396_roundFloat(n){
	n = Math.round(n * 100) / 100;
	return(n);
}

function tn_console(str){
	if(window.tn_comments==1)console.log(str);
}

function t396_setUpTooltip_desktop(el, pinEl, tipEl) {
    var timer;
    pinEl.mouseover(function() {
        /*if any other tooltip is waiting its timeout to be hided — hide it*/
        $('.tn-atom__tip_visible').each(function(){
            var thisTipEl = $(this).parents('.t396__elem');
            if (thisTipEl.attr('data-elem-id') != el.attr('data-elem-id')) {
                t396_hideTooltip(thisTipEl, $(this));
            }
        });

        clearTimeout(timer);
        if (tipEl.css('display') == 'block') {
            return;
        }
        t396_showTooltip(el, tipEl);
    });
    pinEl.mouseout(function() {
        timer = setTimeout(function() {
            t396_hideTooltip(el, tipEl);
        }, 300);
    })
}

function t396_setUpTooltip_mobile(el,pinEl,tipEl) {
    pinEl.on('click', function(e) {
        if (tipEl.css('display') == 'block' && $(e.target).hasClass("tn-atom__pin")) {
            t396_hideTooltip(el,tipEl);
        } else {
            t396_showTooltip(el,tipEl);
        }
    });
    var id = el.attr("data-elem-id");
    $(document).click(function(e) {
        var isInsideTooltip = ($(e.target).hasClass("tn-atom__pin") || $(e.target).parents(".tn-atom__pin").length > 0);
        if (isInsideTooltip) {
            var clickedPinId = $(e.target).parents(".t396__elem").attr("data-elem-id");
            if (clickedPinId == id) {
                return;
            }
        }
        t396_hideTooltip(el,tipEl);
    })
}

function t396_hideTooltip(el, tipEl) {
    tipEl.css('display', '');
    tipEl.css({
        "left": "",
        "transform": "",
        "right": ""
    });
    tipEl.removeClass('tn-atom__tip_visible');
    el.css('z-index', '');
}

function t396_showTooltip(el, tipEl) {
    var pos = el.attr("data-field-tipposition-value");
    if (typeof pos == 'undefined' || pos == '') {
        pos = 'top';
    };
    var elSize = el.height();
    var elTop = el.offset().top;
    var elBottom = elTop + elSize;
    var elLeft = el.offset().left;
    var elRight = el.offset().left + elSize;
    var winTop = $(window).scrollTop();
    var winWidth = $(window).width();
    var winBottom = winTop + $(window).height();
    var tipElHeight = tipEl.outerHeight();
    var tipElWidth = tipEl.outerWidth();
    var padd=15;
    if (pos == 'right' || pos == 'left') {
        var tipElRight = elRight + padd + tipElWidth;
        var tipElLeft = elLeft - padd - tipElWidth;
        if ((pos == 'right' && tipElRight > winWidth) || (pos == 'left' && tipElLeft < 0)) {
            pos = 'top';
        }
    }
    if (pos == 'top' || pos == 'bottom') {
        var tipElRight = elRight + (tipElWidth / 2 - elSize / 2);
        var tipElLeft = elLeft - (tipElWidth / 2 - elSize / 2);
        if (tipElRight > winWidth) {
            var rightOffset = -(winWidth - elRight - padd);
            tipEl.css({
                "left": "auto",
                "transform": "none",
                "right": rightOffset + "px"
            });
        }
        if (tipElLeft < 0) {
            var leftOffset = -(elLeft - padd);
            tipEl.css({
                "left": leftOffset + "px",
                "transform": "none"
            });
        }
    }
    if (pos == 'top') {
        var tipElTop = elTop - padd - tipElHeight;
        if (winTop > tipElTop) {
            pos = 'bottom';
        }
    }
    if (pos == 'bottom') {
        var tipElBottom = elBottom + padd + tipElHeight;
        if (winBottom < tipElBottom) {
            pos = 'top';
        }
    }
    tipEl.attr('data-tip-pos', pos);
    tipEl.css('display', 'block');
    tipEl.addClass('tn-atom__tip_visible');
    el.css('z-index', '1000');
}


 
function t397_init(recid) {
    var el = $('#rec' + recid);
    el.find('.t397__tab').click(function() {
        el.find('.t397__tab').removeClass('t397__tab_active');
        $(this).addClass('t397__tab_active');
        t397_alltabs_updateContent(recid);
        t397_updateSelect(recid);
        $('.t230, .t670, .t347, .t346, .t519, .t774, .t764, .t744, .t349, .t650, .t604, .t117, .t517, .t609, .t351, .t353, .t341, .t404, .t385, .t386, .t412, .t268, .t425, .t409, .t384, .t279, .t428, .t418, .t433, .t121, .t478, .t498, .t552, .t544, .t554, .t545, .t486, .t570, .t422, .t601, .t228, .t229, .t456, .t592, .t520, .t599, .t422, .t504, .t688, .t675, .t132, .t616, .t686, .t778, .t615, .t433, .t598, .t762, .t538, .t226, .t698, .t760, .t511, .t799, .t780, .t827, .t740, .t480, .t827, .t829, .t605, .t726, .t728, .t822, .t798, .t801, .t694, .t842, .t843, .t849, .t850, .t851, .t856, .t858, .t859, .t860, .t396, .t518, .t738, .t532').trigger('displayChanged');
        setTimeout(function() {
            $('.t351, .t353, .t341, .t404, .t385, .t386, .t412, .t268, .t425, .t409, .t384, .t279, .t428, .t433, .t545, .t422, .t410, .t829, .t396, .t738').trigger('displayChanged')
        }, 50);
        if (window.lazy == 'y') {
            t_lazyload_update()
        }
    });
    t397_alltabs_updateContent(recid);
    t397_updateContentBySelect(recid);
    $('.t397').bind('displayChanged',function(){
        t397_alltabs_updateContent(recid);
        t397_updateContentBySelect(recid);
    });
    var bgcolor = el.css("background-color");
    var bgcolor_target = el.find(".t397__select, .t397__firefoxfix");
    bgcolor_target.css("background-color", bgcolor)
}

function t397_alltabs_updateContent(recid){
    var el = $('#rec' + recid);
    el.find(".t397__tab").each(function(i) {
        var rec_ids = $(this).attr('data-tab-rec-ids').split(',');
        rec_ids.forEach(function(rec_id, i, arr) {
            var rec_el = $('#rec' + rec_id);
            rec_el.attr('data-connect-with-tab', 'yes');
            rec_el.attr('data-animationappear', 'off');
            rec_el.addClass('t379__off')
        })
    });    
    el.find(".t397__tab_active").each(function(i) {
        if ($(this).is(":visible") || el.find(".t397__select").is(":visible")) {
            var rec_ids = $(this).attr('data-tab-rec-ids').split(',');
            rec_ids.forEach(function(rec_id, i, arr) {
                var rec_el = $('#rec' + rec_id);
                rec_el.removeClass('t379__off');
                rec_el.css('opacity', '')
            })
        }
    });
}

function t397_updateContentBySelect(recid) {
    var el = $('#rec' + recid);
    el.find(".t397__select").change(function() {
        var select_val = el.find(".t397__select").val();
        var tab_index = el.find(".t397__tab[data-tab-rec-ids='" + select_val + "']");
        tab_index.trigger('click')
    })
}

function t397_updateSelect(recid) {
    var el = $('#rec' + recid);
    var current_tab = el.find(".t397__tab_active").attr('data-tab-rec-ids');
    var el_select = el.find(".t397__select");
    el_select.val(current_tab)
} 
function t398_init(recid){
  t398_addArrow(recid);
  t398_highlight();
  $('#rec'+recid).find(".t398").each(function() {
	var $hook=$(this).attr('data-tooltip-hook');
    var $margin=$(this).attr('data-tooltip-margin');
    if($hook!==''){
      var $obj = $('a[href="'+$hook+'"]');
      var $content=$(this).find('.t398__content').html();
      if($hook.charAt(0)=='#'){var touchDevices=true;}else{var touchDevices=false;}
      var position=$(this).attr('data-tooltip-position');
      if(position!==''){}else{position='top';}
      $obj.click(function(e){
        e.preventDefault();
      });
      $obj.tooltipster({
        'theme':'t398__tooltipster-noir t398__tooltipster-noir_'+recid+'',
        'contentAsHTML': true,
        'content': $content,
        interactive:true,
        touchDevices:touchDevices,
        position:position,
        functionReady: function(origin, tooltip) {
          $(".t398__tooltipster-noir_"+recid+"").css("margin-top", $margin);
        }
      });
    }
  });
}

function t398_addArrow(recid){
  $('#rec'+recid).find(".t398").each(function() {
	var $hook=$(this).attr('data-tooltip-hook');
    var $obj = $('a[href="'+$hook+'"]');
    var arrow=$(this).attr('data-add-arrow');
    var arrow_height = $obj.height();
    if($hook!=='' && arrow!==''){
      $obj.append("<div class=\"t398__arrow t398__arrow_"+recid+"\" style=\"height: "+arrow_height+"\px;\"></div>");
    }
  });
}

function t398_highlight(){
  var url=window.location.href;
  var pathname=window.location.pathname;
  if(url.substr(url.length - 1) == "/"){ url = url.slice(0,-1); }
  if(pathname.substr(pathname.length - 1) == "/"){ pathname = pathname.slice(0,-1); }
  if(pathname.charAt(0) == "/"){ pathname = pathname.slice(1); }
  if(pathname == ""){ pathname = "/"; }
  $(".t398__list_item a[href='"+url+"']").addClass("t-active");
  $(".t398__list_item a[href='"+url+"/']").addClass("t-active");
  $(".t398__list_item a[href='"+pathname+"']").addClass("t-active");
  $(".t398__list_item a[href='/"+pathname+"']").addClass("t-active");
  $(".t398__list_item a[href='"+pathname+"/']").addClass("t-active");
  $(".t398__list_item a[href='/"+pathname+"/']").addClass("t-active");
}
 
function t400_init(recid){
  var el=$('#rec'+recid);
  
  var btn = el.find('.t400__submit');
  var hideBackText = btn.attr("data-hide-back-text");
  var showMoreText = btn.html();  
  
  el.find('.t400__submit').click(function() {
      
    if (typeof hideBackText != 'undefined' && hideBackText.length > 0 && $(this).hasClass('t400__submit_hide-back')) {
        t400_alltabs_updateContent(recid);
        $(this).removeClass('t400__submit_hide-back');
        btn.html(showMoreText);
        return;
    }      
      
    var rec_ids = $(this).attr('data-hidden-rec-ids').split(',');
	rec_ids.forEach(function(rec_id, i, arr) {
	  var rec_el=$('#rec'+rec_id);
	  rec_el.removeClass('t400__off');
	  rec_el.css('opacity','');
	});
    $('.t544, .t477, .t532, .t764, .t418, .t774, .t480, .t686, .t599, .t570, .t554, .t650, .t351, .t353, .t341, .t385, .t226, .t404, .t412, .t552, .t279, .t384, .t229, .t456, .t268, .t334, .t121, .t517, .t545, .t518, .t744, .t778, .t604, .t774, .t694, .t230, .t609, .t688, .t670, .t592, .t740, .t762, .t827, .t829, .t498, .t539, .t422, .t347, .t801, .t842, .t843, .t849, .t850, .t851, .t856, .t858, .t859, .t860, .t728, .t738, .t836, .t615, .t822').trigger('displayChanged');
    setTimeout(function(){
      $('.t351, .t353, .t341, .t410, .t385, .t738, .t829').trigger('displayChanged');
    },50);
    if(typeof hideBackText != 'undefined' && hideBackText.length > 0){
        btn.addClass('t400__submit_hide-back');
        btn.html(hideBackText);
    } else {
        el.addClass('t400__off').hide();
    }
    if(window.lazy=='y'){t_lazyload_update();}
  });
  t400_alltabs_updateContent(recid);
  t400_checkSize(recid);
}

function t400_alltabs_updateContent(recid){
  var el=$('#rec'+recid);
  el.find(".t400__submit").each(function (i) {
    var rec_ids = $(this).attr('data-hidden-rec-ids').split(',');
	rec_ids.forEach(function(rec_id, i, arr) {
	  var rec_el=$('#rec'+rec_id);
	  rec_el.attr('data-animationappear','off');
	  rec_el.addClass('t400__off');
	});
  });
}

function t400_checkSize(recid){
  var el=$("#rec"+recid).find(".t400__submit");
  if(el.length){
    var btnheight = el.height();
    var textheight = el[0].scrollHeight;
    if (btnheight < textheight) {
      var btntext = el.text();
      el.addClass("t400__submit-overflowed");
      el.html("<span class=\"t400__text\">" + btntext + "</span>");
    }
  }
} 
function t403_showMore(recid) {
  var el=$('#rec'+recid).find(".t403");
  el.find(".t403__container-table").hide();
  cards_size = el.find(".t403__container-table").size();
  cards_count=parseInt(el.attr("data-show-count"));
  x=cards_count;
  y=cards_count;
  el.find('.t403__container-table:lt('+x+')').show();
  el.find('.t403__showmore').click(function () {
      x= (x+y <= cards_size) ? x+y : cards_size;
      el.find('.t403__container-table:lt('+x+')').show();
      if(x == cards_size){
          el.find('.t403__showmore').hide();
      }
  });
} 
function t404_unifyHeights(recid) {
    var el=$('#rec'+recid).find(".t404");
    el.find('.t-container').each(function() {
        var highestBox = 0;
        $('.t404__title', this).css('height', '');
        $('.t404__title', this).each(function(){
            if($(this).height() > highestBox)highestBox = $(this).height();
        });  
        if($(window).width()>=960){
          $('.t404__title',this).css('height', highestBox);   
        }else{
          $('.t404__title',this).css('height', "auto");    
        }
        
        $('.t404__descr', this).css('height', '');
        var highestBox = 0;
        $('.t404__descr', this).each(function(){
            if($(this).height() > highestBox)highestBox = $(this).height(); 
        });  
        if($(window).width()>=960){
          $('.t404__descr',this).css('height', highestBox);   
        }else{
          $('.t404__descr',this).css('height', "auto");    
        }
                
    });
}

function t404_unifyHeightsTextwrapper(recid) {
    var el=$('#rec'+recid).find(".t404");
    el.find('.t-container').each(function() {
        var highestBox = 0;
        $('.t404__textwrapper', this).each(function(){
          $(this).css("height","auto");
            if($(this).height() > highestBox)highestBox = $(this).height(); 
        });  
        if($(window).width()>=960){
          $('.t404__textwrapper',this).css('height', highestBox);   
        }else{
          $('.t404__textwrapper',this).css('height', "auto");    
        }      
    });
}

function t404_showMore(recid) {
  var el=$('#rec'+recid).find(".t404");
  el.find(".t-col").hide();
  var cards_size = el.find(".t-col").size();
  var cards_count=parseInt(el.attr("data-show-count"));
  if (cards_count > 500) { cards_count = 500; }
  var x=cards_count;
  var y=cards_count;
  el.find('.t-col:lt('+x+')').show();
  el.find('.t404__showmore').click(function () {
      x= (x+y <= cards_size) ? x+y : cards_size;
      el.find('.t-col:lt('+x+')').show();
      if(x == cards_size){
          el.find('.t404__showmore').hide();
      }
      $('.t404').trigger('displayChanged');
      if(window.lazy=='y'){t_lazyload_update();}
  });
}



 
function t405_showMore(recid) {
  var el=$('#rec'+recid).find(".t405");
  el.find(".t-col").hide();
  var cards_size = el.find(".t-col").size();
  var cards_count=parseInt(el.attr("data-show-count"));
  if (cards_count > 500) { cards_count = 500; }
  var x=cards_count;
  var y=cards_count;
  el.find('.t-col:lt('+x+')').show();
  el.find('.t405__showmore').click(function () {
      x= (x+y <= cards_size) ? x+y : cards_size;
      el.find('.t-col:lt('+x+')').show();
      if(x == cards_size){
          $(this).hide();
      }
      $('.t405').trigger('displayChanged');
      if(window.lazy=='y'){t_lazyload_update();}
  });
}


 
function t409_unifyHeights(recid) {
  if($(window).width()>=960){
    var el = $("#rec"+recid);
    var imgwidth = el.find(".t409__img").width();
    var imgwrapperwidth = el.find(".t409__imgwrapper").css("max-width");
    var imgwrapperwidthpx = parseInt(imgwrapperwidth, 10);
    var margin = imgwrapperwidthpx - imgwidth;
    el.find(".t409__img").css("margin-left", margin);
  }
}
 
function t410_init(recid) {
  var el=$('#rec'+recid);
  var firstimgurl = el.find(".t410__wrapper").attr("data-juxtapose-imgurl-first");
  var firstimgdescr = el.find(".t410__wrapper").attr("data-juxtapose-imgdescr-first");
  var secondimgurl = el.find(".t410__wrapper").attr("data-juxtapose-imgurl-second");
  var secondimgdescr = el.find(".t410__wrapper").attr("data-juxtapose-imgdescr-second");
  new juxtapose.JXSlider('#t410-juxtapose__' + recid + '', [{
      src: firstimgurl,
      label: firstimgdescr
  }, {
      src: secondimgurl,
      label: secondimgdescr
  }], {
      animate: false,
      showLabels: true,
      showCredits: false,
      startingPosition: '50%',
      makeResponsive: true,
      callback: function() {
        if (window.$isMobile) {
          el.find('.t410__wrapper').append('<div class="t410__mobile_left"></div><div class="t410__mobile_right"></div>');
          var hanlerWidth = el.find('.jx-handle').width(),
              leftSide = el.find('.jx-image.jx-left'),
              rightSide = el.find('.jx-image.jx-right'),
              leftWidth = leftSide.width() - hanlerWidth/2,
              rightWidth = rightSide.width() - hanlerWidth/2,
              wrapper = el.find('.t410__wrapper'),
              mobileLeft = el.find('.t410__mobile_left'),
              mobileRight = el.find('.t410__mobile_right');

          mobileLeft.css('width', leftWidth);
          mobileRight.css('width', rightWidth);

          wrapper.on('touchend', function() {
            leftWidth = leftSide.width() - hanlerWidth/2;
            rightWidth = rightSide.width() - hanlerWidth/2;
            mobileLeft.css('width', leftWidth);
            mobileRight.css('width', rightWidth);
          });
        }
      }
  });
} 
function t412_unifyHeights(recid) {
    var el=$("#rec"+recid);

    el.find('.t412__descr').css('height', "auto");  
    $('#rec'+recid+' .t412 .t-container').each(function() {
        var highestBox2 = 0;
        $('.t412__descr', this).each(function(){
            if($(this).height() > highestBox2)highestBox2 = $(this).height(); 
        });  
        if($(window).width()>=960 && $(this).is(':visible')){
        	$('.t412__descr',this).css('height', highestBox2); 
        }else{
	        $('.t412__descr',this).css('height', "auto");    
        }
    });

    el.find('.t412__title').css('height', "auto");
    $('#rec'+recid+' .t412 .t-container').each(function() {
        var highestBox3 = 0;
        $('.t412__title', this).each(function(){
            if($(this).height() > highestBox3)highestBox3 = $(this).height(); 
        });  
        if($(window).width()>=960 && $(this).is(':visible')){
        	$('.t412__title',this).css('height', highestBox3); 
        }else{
	        $('.t412__title',this).css('height', "auto");    
        }
    });

    el.find('.t412__wrapper').css('height', "auto");
    $('#rec'+recid+' .t412 .t-container').each(function() {
        var highestBox = 0;
        $('.t412__wrapper', this).each(function(){
            if($(this).height() > highestBox)highestBox = $(this).height();
        });  
        if($(window).width()>=960 && $(this).is(':visible')){
        	$('.t412__wrapper',this).css('height', highestBox); 
        }else{
	        $('.t412__wrapper',this).css('height', "auto");    
        }
    });
} 
function t414_showPopup(recid){
  var el=$('#rec'+recid).find('.t414');
  $('body').addClass('t414__body_popupshowed');
  el.show();
  el.find('.t414__close, .t414__bg, .t414__closer').click(function(){
    t414_closePopup(recid);
  });
  $(document).keydown(function(e) {
    if (e.keyCode == 27) {
      $('body').removeClass('t414__body_popupshowed');
      $('.t414').hide();
    }
  });
}

function t414_closePopup(recid){
  $('body').removeClass('t414__body_popupshowed');
  $('.t414').hide();
}

function t414_initPopup(recid){
  var el=$('#rec'+recid).find('.t414');
  var hook=el.attr('data-tooltip-hook');
  if(hook!==''){
      var obj = $('a[href="'+hook+'"]');
      obj.click(function(e){
        t414_showPopup(recid);
        var popup = el.find(".t414__content");
        popup.addClass('t414__content_static');
        e.preventDefault();
      });
  }
}

function t414_resizePopup(recid){
  var el = $("#rec"+recid);
  var div = el.find(".t414__mainblock").height();
  var win = $(window).height();
  var popup = el.find(".t414__content");
  if (div > win ) {
    popup.addClass('t414__content_static');
  }
  else {
    popup.removeClass('t414__content_static');
  }
} 
function t418_checkSize(recid){
  var el=$("#rec"+recid);
  var sizer = el.find('.t418__height');
  var height = sizer.height();
  var width = sizer.width();
  var ratio = width/height;
  var gallerywrapper = el.find(".t418__checksize");
  var gallerywidth = gallerywrapper.width();
  gallerywrapper.css({'height':((gallerywidth/ratio)+'px')});

  var maxwidth = el.find(".t418__height").width();
  var windowwidth  = $(window).width();
  var value = windowwidth - 80;
  if (maxwidth > windowwidth) {
    el.find(".t418__item").css("max-width", value + "px");
    el.find(".t418__img").css("left", "20px");
    el.find(".t418__img").css("right", "20px");
  } else {
    el.find(".t418__item").css("max-width", "");
    el.find(".t418__img").css("left", "");
    el.find(".t418__img").css("right", "");
  }
}

function t418_init(recid){
  var el=$('#rec'+recid);
  var pos = 0;
  var t418_doResize;
  var totalSlides = el.find('.t418__item').length;
  var sliderWidth = el.find('.t418__item').width();

  $(window).resize(function() {
    if (t418_doResize) clearTimeout(t418_doResize);
    t418_doResize = setTimeout(function() {
      sliderWidth = el.find('.t418__slider').width();
      el.find('.t418__slidecontainer').width(sliderWidth*totalSlides);
      console.log(sliderWidth);
    }, 200); 
  });
  
  el.find('.t418__slidecontainer').width(sliderWidth*totalSlides);
  
  el.find('.t418__next').click(function(){
    slideRight(recid);
  });

  el.find('.t418__previous').click(function(){
    slideLeft(recid);
  });

  function slideLeft(recid){
    var el=$('#rec'+recid);
    pos--;
    if(pos==-1){ pos = totalSlides-1; }
    el.find('.t418__slidecontainer').css({transform: 'translate(-' + (sliderWidth*pos) + 'px, 0)'})
    el.find('.t418__slidecontainer').css("transition-duration", ".3s");
    if(window.lazy=='y'){t_lazyload_update();}
  }

  function slideRight(recid){
    var el=$('#rec'+recid);
    pos++;
    if(pos==totalSlides){ pos = 0; }
    el.find('.t418__slidecontainer').css({transform: 'translate(-' + (sliderWidth*pos) + 'px, 0)'})
    el.find('.t418__slidecontainer').css("transition-duration", ".3s");
    if(window.lazy=='y'){t_lazyload_update();}
  }

  var swipeOptions = {
      triggerOnTouchEnd: true,
      swipeStatus: swipeStatus,
      allowPageScroll: "vertical",
      threshold: 75
  };

  el.find(".t418__slidecontainer").swipe(swipeOptions);
  el.find(".t418__slidecontainer").swipe( {
    tap:function(event, target) {
      slideRight(recid);
    }
  });

  function swipeStatus(event, phase, direction, distance) {
      if (phase == "move" && (direction == "left" || direction == "right")) {
          var duration = 0;

          if (direction == "left") {
              scrollImages((sliderWidth * pos) + distance, duration);
          } else if (direction == "right") {
              scrollImages((sliderWidth * pos) - distance, duration);
          }

      } else if (phase == "cancel") {
          scrollImages(sliderWidth * pos);
      } else if (phase == "end") {
          if (direction == "right") {
              slideLeft(recid);
          } else if (direction == "left") {
              slideRight(recid);
          }
      }
  }

  function scrollImages(distance, duration) {
      //el.find(".t418__slidecontainer").css("transition-duration", "0s");
      el.find(".t418__slidecontainer").css("transition-duration", (duration / 1000).toFixed(1) + "s");
      var value = (distance < 0 ? "" : "-") + Math.abs(distance).toString();
      el.find(".t418__slidecontainer").css("transform", "translate(" + value + "px, 0)");
  }
}

                               
 
t422_setHeight = function(recid) {
  if ($(window).width()>960) {
    t422_checkEqualHeight(recid);
  } else {
    $('#rec'+recid+' .t422__img-mobile').height(200);
    $('#rec'+recid+' .t422__text').height('auto');
  }
};

t422_checkEqualHeight = function(recid) {
  var t422__txtel=$('#rec'+recid+' .t422__text');
  var t422__imgel=$('#rec'+recid+' .t422__img');
  var t422__borderwidth = 0;
  if (t422__txtel.css("border-top-width") && t422__txtel.css("border-top-width")[1]!='p') {
    t422__borderwidth = + (t422__txtel.css("border-top-width")[0] + t422__txtel.css('border-top-width')[1]);
  }else{if (t422__txtel.css("border-top-width"))
    	t422__borderwidth = +(t422__txtel.css("border-top-width")[0]);
  }
  if (t422__imgel.height() < (t422__txtel.height() + t422__borderwidth*2)) {
      t422__imgel.height(t422__txtel.height() + t422__borderwidth*2);
  }else{if ((t422__imgel.height() - t422__borderwidth*2) > t422__txtel.height()) {
        t422__txtel.height(t422__imgel.height() - t422__borderwidth*2);
    }
  }
}; 
function t425_unifyHeights(recid) {
    var el=$("#rec"+recid);

    el.find('.t425__col').css('height', "auto");
    $('#rec'+recid+' .t425 .t-container').each(function() {
        var t425__highestBox = 0;
        $('.t425__col', this).each(function(){						
			var t425__curcol=$(this);	
			var t425__curcolchild=t425__curcol.find('.t425__col-wrapper');
			if(t425__curcol.height() < t425__curcolchild.height())t425__curcol.height(t425__curcolchild.height());
            if(t425__curcol.height() > t425__highestBox)t425__highestBox = t425__curcol.height();			
        });  
        if($(window).width()>=960){
        	$('.t425__col',this).css('height', t425__highestBox); 
        }else{
	        $('.t425__col',this).css('height', "auto");    
        }
    });
}; 
function t426_unifyHeights(recid) {  
	$('#rec'+recid+' .t426 .t-container').each(function() {        		
        var t426__largestHeight = 0;
        $('.t426__col', this).each(function(){                
        	var t426__curimg=$(this).find('img');		
        	if(t426__curimg.height() > t426__largestHeight)t426__largestHeight = t426__curimg.height();        
        });            
        $('.t426__col', this).each(function(){        	
        	$(this).height(t426__largestHeight);
        });        
	});
};
 
t427_alignMiddle = function(recid) {
	if ($(window).width()>960) {
		var t427__img = $('#rec'+recid+' .t427__img');
		var t427__arrow = $('#rec'+recid+' .t427__arrow');		
		t427__arrow.css('top', (t427__img.height()-t427__arrow.height())/2);
	}
}; 
function t428_unifyHeights(recid) {
    $('#rec'+recid+' .t428 .t-container').each(function() {
        var t428__highestBox = 0;
        $('.t428__col', this).each(function(){
			var t428__curcol=$(this);
			var t428__curcolchild=t428__curcol.find('.t428__col-wrapper');
			if(t428__curcol.height() < t428__curcolchild.height())t428__curcol.height(t428__curcolchild.height());
            if(t428__curcol.height() > t428__highestBox)t428__highestBox = t428__curcol.height();
        });
        if($(window).width()>=960){
        	$('.t428__col',this).css('height', t428__highestBox);
        }else{
	        $('.t428__col',this).css('height', "auto");
        }
    });
}; 
t431_createTable = function(recid,tablehead,tabledata,tablecolsize,hastargetblank,btnstyles,t431__tdstyles,t431__thstyles,t431__oddrowstyles,t431__evenrowstyles){
	var t431__arrayColSize = t431_parseData(tablecolsize);
	var t431__arrayHead = t431_parseData(tablehead);
    var t431__arrayData = t431_parseData(tabledata);

	var t431__maxcolnumber = t431__findMaxRowLengthInTable(t431__arrayHead,t431__arrayData);
	var t431__colWidth = t431__setColumnsWidth(t431__arrayColSize,t431__maxcolnumber,recid);
	if (t431__colWidth[0].myText && t431__colWidth[0].myText[t431__colWidth[0].myText.length - 1] == "%") {
		for (var i=0; i<t431__colWidth.length; i++) {
			t431__colWidth[i].myText = t431__colWidth[i].myText.slice(0,-1);
			t431__colWidth[i].myText += "vw";
		}
	}

	var t431__container = $('#rec'+recid+' .t431 .t-container .t431__table');
	var t431__htmlTable = "";
	if (t431__arrayHead) { t431__htmlTable += t431__generateHtml(recid,t431__arrayHead,"th",hastargetblank,t431__colWidth,btnstyles,t431__thstyles,null,null,t431__maxcolnumber);}
	t431__container.append(t431__htmlTable);
	t431__htmlTable = "";
	if (t431__arrayData) { t431__htmlTable += t431__generateHtml(recid,t431__arrayData,"td",hastargetblank,t431__colWidth,btnstyles,t431__tdstyles,t431__oddrowstyles,t431__evenrowstyles,t431__maxcolnumber);}
    t431__container.append(t431__htmlTable);
};


/*add display:block to thead and tbody for vertical scroll, set th width to fix unequal col width*/
t431_setHeadWidth = function(recid) {
	if ($(window).width()>960){
        var t431__tbody = $('#rec'+recid+' .t431 .t431__tbody');
        var t431__thead = $('#rec'+recid+' .t431 .t431__thead');
		t431__tbody.css("display","block");
		t431__thead.css("display","block");

		var t431__colWidth = $('#rec'+recid+' .t431 .t431__tbody tr:first').children().map(function() {
            return $(this).width();
        });

		if($('#rec'+recid+' .t431 .t431__tbody tr td:first').css('border-left-width').length>=3) {
			var t431__verticalborder = $('#rec'+recid+' .t431 .t431__tbody tr td:first').css('border-left-width').slice(0,-2);
		}

        $('#rec'+recid+' .t431 .t431__thead tr').children().each(function(i, v) {
            if ($(v).is(":last-child")) {
                $(v).width(t431__colWidth[i] + (t431__tbody.width() - $('#rec'+recid+' .t431 .t431__tbody tr:first').width()));
            } else {
                $(v).width(t431__colWidth[i] + (+t431__verticalborder));
            }
        });
	}
};


t431__findMaxRowLengthInTable = function(arrayhead, arraydata) {
	var t431__headmaxlength = 0;
	var t431__datamaxlength = 0;
	if (arrayhead) {
		t431__headmaxlength = t431__findMaxRowLengInArray(arrayhead);
	}
	if (arraydata) {
		t431__datamaxlength = t431__findMaxRowLengInArray(arraydata);
	}
	if (t431__datamaxlength>t431__headmaxlength) {
		return t431__datamaxlength;
	} else {
		return t431__headmaxlength;
	}
};


t431__findMaxRowLengInArray = function(curarray) {
	var t431__maxlength = 0;
	for (var i=0; i<curarray.length; i++) {
		if (curarray[i].length>t431__maxlength) {
			t431__maxlength = curarray[i].length;
		}
	}
	return t431__maxlength;
};


t431__setColumnsWidth = function(t431__colwidth,t431__colsnumber,recid) {
		if (t431__colwidth) {
			return t431__colwidth[0];
		}	else {
			var t431__tablewidth = $('#rec'+recid+' .t431 .t-container .t-col').width();
			return (t431__tablewidth/t431__colsnumber + "px");
		}
};


t431__generateHtml = function(recid,arrayValues,coltag,hastargetblank,colWidth,btnstyles,colstyles,oddrowstyles,evenrowstyles,maxcolnumber) {
	var t431__htmlpart = "";


	if (coltag == "td") {
		var t431__theadorbodytag = "tbody";
	} else {
		var t431__theadorbodytag = "thead";
	}
	t431__htmlpart += "<" + t431__theadorbodytag + " class=\"t431__" + t431__theadorbodytag + "\">";

	//remove forst body row top border, if table head has bottom border
	if($('#rec'+recid+' .t431 .t-container .t431__thead th').length>0 && $('#rec'+recid+' .t431 .t-container .t431__thead th').css("border-bottom-width")[0]!="0") {
		var t431__firstbodyrowstyle = "border-top: 0 !important;";
	}

	for (var i=0; i<arrayValues.length; i++) {

		//add classes for striped table
		if (coltag == "td") {
			if ((i + 1) % 2 > 0) {
				t431__htmlpart += "<tr class=\"t431__oddrow\"" + "style=\"" + oddrowstyles + "\">";
			} else { t431__htmlpart += "<tr class=\"t431__evenrow\"" + "style=\"" + evenrowstyles + "\">";}
		} else {
			t431__htmlpart += "<tr>";
		}

		var t431__addingcols = 0;
		if (arrayValues[i].length<maxcolnumber) {
			t431__addingcols = maxcolnumber - arrayValues[i].length;
        }
		for (var j=0; j<(arrayValues[i].length + t431__addingcols); j++) {
			if (arrayValues[i][j]) {
				//define col width
                if(Array.isArray(colWidth) && colWidth[j]) {
                    var t431__curWidth = colWidth[j].myText;
                } else { var t431__curWidth = colWidth;}

				 if (i==0 && coltag=="td") {
					var t431__colwithattr = "<" + coltag + " class=\"t431__" + coltag + "\" style=\"width:" + t431__curWidth + ";" + colstyles + t431__firstbodyrowstyle + "\">";
				} else {
					var t431__colwithattr = "<" + coltag + " class=\"t431__" + coltag + "\" style=\"width:" + t431__curWidth + ";" + colstyles + "\">";
				}

                if (arrayValues[i][j].myHref) {
                    var t431__tblank = "";
                    if (hastargetblank) {var t431__tblank = "target=\"_blank\"";}
                    //define link type
                    if (arrayValues[i][j].myHrefType == "link") {
                        var t431__linkwithattr = "<a href=\"" + arrayValues[i][j].myHref + "\"" + t431__tblank + ">";
                        var t431__linkclosetag = "</a>";
                    } else {
                        var t431__linkwithattr = "<div class=\"t431__btnwrapper\"><a href=\"" + arrayValues[i][j].myHref + "\"" + t431__tblank + " class=\"t-btn t-btn_sm\" style=\"" + btnstyles + "\"><table style=\"width:100%; height:100%;\"><tr><td>";
                        var t431__linkclosetag = "</td></tr></table></a></div>";
                    }
                    t431__htmlpart += t431__colwithattr + t431__linkwithattr + arrayValues[i][j].myText + t431__linkclosetag + "</" + coltag + ">";
                } else {
                    t431__htmlpart += t431__colwithattr + arrayValues[i][j].myText + "</" + coltag + ">";
                }
			} else {
					t431__htmlpart += "<" + coltag + " class=\"t431__" + coltag + "\" style=\"width:" + t431__curWidth + ";" + colstyles + "\">" + "</" + coltag + ">";
			}
		}
		t431__htmlpart += "</tr>";
	}
	t431__htmlpart += "</" + t431__theadorbodytag + ">";
	return t431__htmlpart;
};


t431_parseData = function(t431__data) {
  if (t431__data!="" && typeof t431__data!='undefined')
  {
	t431__data = t431__addBrTag(t431__data);
    var t431__arrayTable = new Array();
    var t431__arrayRow = new Array();
    var t431__curItem = {myText:"", myHref:"", myHrefType:""};
	var t431__HasLink = "";
	var t431__HasLinkWithSpace = "";
    var t431__HasBtn = "";
	var t431__HasBtnWithSpace = "";
	var t431__EndOfLine = "";
    for (var i=0; i<t431__data.length; i++)
    {
	  //col end and check of special symbols: «>», «<» and «&»
      if (t431__data[i] == ";" && !((t431__data[i-1]&&(t431__data[i-1]=="t")) && (t431__data[i-2]&&(t431__data[i-2]=="g" || t431__data[i-2]=="l")) && (t431__data[i-3]&&(t431__data[i-3]=="&"))) && !((t431__data[i-1]&&(t431__data[i-1]=="p")) && (t431__data[i-2]&&(t431__data[i-2]=="m")) && (t431__data[i-3]&&(t431__data[i-3]=="a")) && (t431__data[i-4]&&(t431__data[i-4]=="&")))) {
          t431__arrayRow.push(t431__curItem);
          var t431__curItem = {myText:"", myHref:""};
          t431__HasLink = "";
          t431__HasLinkWithSpace = "";
          t431__HasBtn = "";
          t431__HasBtnWithSpace = "";
      } else {
        if(t431__HasLink == "link=" || t431__HasLinkWithSpace == " link=" || t431__HasBtn == "button=" || t431__HasBtnWithSpace == " button=") {
		  if (t431__curItem.myHref=="" && t431__HasLink == "link=") {
			t431__curItem.myText = t431__curItem.myText.slice(0,-5);
			t431__curItem.myHrefType = "link";
		  } else { if (t431__curItem.myHref=="" && t431__HasLinkWithSpace == " link=") {
			t431__curItem.myText = t431__curItem.myText.slice(0,-6);
            t431__curItem.myHrefType = "link";
		  } else {if (t431__curItem.myHref=="" && t431__HasBtn == "button=") {
			t431__curItem.myText = t431__curItem.myText.slice(0,-7);
			t431__curItem.myHrefType = "btn";
		  } else { if (t431__curItem.myHref=="" && t431__HasBtnWithSpace == " button=") {
			t431__curItem.myText = t431__curItem.myText.slice(0,-8);
			t431__curItem.myHrefType = "btn";
		  }}}}
		  t431__curItem.myHref += (t431__data[i]);
		} else {
		  t431__curItem.myText += (t431__data[i]);
		  t431__HasLink = t431__checkSubstr("link=",t431__HasLink,t431__data[i]);
		  t431__HasLinkWithSpace = t431__checkSubstr(" link=",t431__HasLinkWithSpace,t431__data[i]);
		  t431__HasBtn = t431__checkSubstr("button=",t431__HasBtn,t431__data[i]);
		  t431__HasBtnWithSpace = t431__checkSubstr(" button=",t431__HasBtnWithSpace,t431__data[i]);
		}
		t431__EndOfLine = t431__checkSubstr("<br />",t431__EndOfLine,t431__data[i]);
        if (t431__EndOfLine == "<br />") {
          if (t431__curItem.myHref) {
			t431__curItem.myHref = t431__curItem.myHref.slice(0,-6);
		  } else {
			t431__curItem.myText = t431__curItem.myText.slice(0,-6);
		  }
          t431__arrayRow.push(t431__curItem);
          t431__arrayTable.push(t431__arrayRow);
          var t431__curItem = {myText:"", myHref:""};
		  t431__HasLink = "";
		  t431__HasLinkWithSpace = "";
		  t431__HasBtn = "";
		  t431__HasBtnWithSpace = "";
          t431__arrayRow = new Array();
        }
      }
    }
	if (t431__arrayRow.length > 0 || t431__curItem.myText!="") {
		if (t431__curItem!="") {
			t431__arrayRow.push(t431__curItem);
		}
		t431__arrayTable.push(t431__arrayRow);
	}
  }
  return t431__arrayTable;
};


// checking a step by step combining of t431__targetSubstr
t431__checkSubstr = function(t431__targetSubstr,t431__curSubstr,t431__curSymbol){
	if (!t431__curSubstr && t431__curSymbol == t431__targetSubstr[0]) {
    return t431__curSymbol;
  } else {
    if (t431__curSubstr) {
		for (var i=0; i<(t431__targetSubstr.length-1); i++) {
			if (t431__curSubstr[t431__curSubstr.length - 1] == t431__targetSubstr[i] && t431__curSymbol == t431__targetSubstr[i+1]) {
				return (t431__curSubstr += t431__curSymbol);
            }
        }
    }
  }
};


t431__addBrTag = function(t431__oldStringItem){
	if(typeof t431__oldStringItem=='undefined')return;
	var t431__newStringItem = "";
	for (var i=0; i < t431__oldStringItem.length; i++) {
		if (t431__oldStringItem[i] == "\n" || t431__oldStringItem[i] == "\r") {
			t431__newStringItem += "<br />";
		} else {
			t431__newStringItem += t431__oldStringItem[i];
		}
	}
	return t431__newStringItem;
};
 
function t433_setMapHeight(recid) {
	var el=$('#rec'+recid);
	var map = el.find('.t433__map');
	var textwrapper = el.find('.t433__col_text').height();
	map.css('height', textwrapper);
	el.find('.t-map').css('height', textwrapper).trigger('sizechange');
}
 
function t441__createPieChart(recid,data1,data2,data3,data4,sectorcolor,piebgcolor,bgcolor,blocksnumber,diagramwidth,diameter) {		
	if(diameter>300 || diameter=="" || diameter<100) {
		if(diameter=="") {var t441__radius = 100; diameter = 200;}
		if(diameter>300) {var t441__radius = 150; diameter = 300;}
        if(diameter<100) {var t441__radius = 50; diameter = 100;}
	} else {
		var t441__radius = diameter/2;
	}

	if(diagramwidth=="") { diagramwidth = 10;}
    if(diagramwidth>t441__radius) { diagramwidth = 10;}
	if(diagramwidth<1) { diagramwidth = 1;}
	                    
	//check Retina
	if(window.devicePixelRatio >= 2) {
		var t441__oldsize = diameter;                       
        t441__radius = t441__radius*2;
		diameter = diameter*2;
		diagramwidth = diagramwidth*2;
	}                       
                       
	//border id drawing at the edge of circle, so we need correct the radius to fin into canvas                        
	var t441__correction = +diagramwidth/2;

    var t441__dataarray = [data1,data2,data3,data4];    
    for (var i=0; i<4; i++) {
        if (t441__dataarray[i]!="" && blocksnumber>i) {
            var t441__canvas = document.querySelector('#rec'+recid+' .t441__pie'+(i+1));
			t441__canvas.setAttribute("width", diameter);
			t441__canvas.setAttribute("height", diameter);						
            var t441__context = t441__canvas.getContext("2d");
			if(window.devicePixelRatio >= 2) {								
				t441__canvas.style.width = t441__oldsize + "px";
				t441__canvas.style.height = t441__oldsize + "px";
			}			
			for (var j = 0; j < 2; j++) {				                               
				if(j==1 && t441__dataarray[i]==0) {continue;}                                  
				//0 - bg, 1 - percent sector                                  
                if (j==0) {                    					                                  
					t441__context.strokeStyle = piebgcolor;
					var t441__angle = Math.PI*2;           
					t441__context.lineWidth = diagramwidth-1;                                  
                } else {
                    t441__context.strokeStyle = sectorcolor;
					var t441__angle = Math.PI*2*(t441__dataarray[i]/100);
					t441__context.lineWidth = diagramwidth;                                  
				}
                t441__context.beginPath();								
				t441__context.lineCap="round";
				t441__context.moveTo(diameter-t441__correction,t441__radius);
				t441__context.arc(t441__radius, t441__radius, t441__radius-t441__correction, 0, t441__angle, false);				
				t441__context.stroke();				
			}			
		}
	}
} 
function t446_setLogoPadding(recid){
	if($(window).width()>980){			  
        var t446__menu = $('#rec'+recid+' .t446');
        var t446__logo=t446__menu.find('.t446__logowrapper');	  
        var t446__leftpart=t446__menu.find('.t446__leftwrapper');
        var t446__rightpart=t446__menu.find('.t446__rightwrapper');
        t446__leftpart.css("padding-right",t446__logo.width()/2+50);
        t446__rightpart.css("padding-left",t446__logo.width()/2+50);			        
	}
}

function t446_checkOverflow(recid, menuheight){    
  var t446__menu = $('#rec'+recid+' .t446');
  var t446__rightwr=t446__menu.find('.t446__rightwrapper');	  
  var t446__rightmenuwr=t446__rightwr.find('.t446__rightmenuwrapper');
  var t446__rightadditionalwr=t446__rightwr.find('.t446__additionalwrapper');
  var t446__burgeroverflow=t446__rightwr.find('.t446__burgerwrapper_overflow');  
  var t446__burgerwithoutoverflow=t446__rightwr.find('.t446__burgerwrapper_withoutoverflow');      

  if (menuheight>0) {var t446__height = menuheight;} else {var t446__height = 80;}  

  if($(window).width()>980 && (t446__rightmenuwr.width() + t446__rightadditionalwr.width()) > t446__rightwr.width()){    	  	  	  	  	  	  
		t446__menu.css("height", t446__height*2);
		t446__rightadditionalwr.css("float","right");

		t446__burgeroverflow.css("display","table-cell");
		t446__burgerwithoutoverflow.css("display","none");				
  } else {
		if(t446__menu.height()>t446__height) {t446__menu.css("height",t446__height);}
		if(t446__rightadditionalwr.css("float")=="right") {t446__rightadditionalwr.css("float","none");}

		t446__burgeroverflow.css("display","none");
		t446__burgerwithoutoverflow.css("display","table-cell");		
  }
}

function t446_highlight(){
  var url=window.location.href;
  var pathname=window.location.pathname;
  if(url.substr(url.length - 1) == "/"){ url = url.slice(0,-1); }
  if(pathname.substr(pathname.length - 1) == "/"){ pathname = pathname.slice(0,-1); }
  if(pathname.charAt(0) == "/"){ pathname = pathname.slice(1); }
  if(pathname == ""){ pathname = "/"; }
  $(".t446__list_item a[href='"+url+"']").addClass("t-active");
  $(".t446__list_item a[href='"+url+"/']").addClass("t-active");
  $(".t446__list_item a[href='"+pathname+"']").addClass("t-active");
  $(".t446__list_item a[href='/"+pathname+"']").addClass("t-active");
  $(".t446__list_item a[href='"+pathname+"/']").addClass("t-active");
  $(".t446__list_item a[href='/"+pathname+"/']").addClass("t-active");
}

function t446_checkAnchorLinks(recid) {
    if ($(window).width() >= 960) {
        var t446_navLinks = $("#rec" + recid + " .t446__list_item a:not(.tooltipstered)[href*='#']");
        if (t446_navLinks.length > 0) {
            t446_catchScroll(t446_navLinks);
        }
    }
}

function t446_catchScroll(t446_navLinks) {
    var t446_clickedSectionId = null,
        t446_sections = new Array(),
        t446_sectionIdTonavigationLink = [],
        t446_interval = 100,
        t446_lastCall, t446_timeoutId;
    t446_navLinks = $(t446_navLinks.get().reverse());
    t446_navLinks.each(function() {
        var t446_cursection = t446_getSectionByHref($(this));
        if (typeof t446_cursection.attr("id") != "undefined") {
            t446_sections.push(t446_cursection);
        }
        t446_sectionIdTonavigationLink[t446_cursection.attr("id")] = $(this);
    });
		t446_updateSectionsOffsets(t446_sections);
    t446_sections.sort(function(a, b) {
      return b.attr("data-offset-top") - a.attr("data-offset-top");
    });
		$(window).bind('resize', t_throttle(function(){t446_updateSectionsOffsets(t446_sections);}, 200));
		$('.t446').bind('displayChanged',function(){t446_updateSectionsOffsets(t446_sections);});
		setInterval(function(){t446_updateSectionsOffsets(t446_sections);},5000);
    t446_highlightNavLinks(t446_navLinks, t446_sections, t446_sectionIdTonavigationLink, t446_clickedSectionId);

    t446_navLinks.click(function() {
        var t446_clickedSection = t446_getSectionByHref($(this));
        if (!$(this).hasClass("tooltipstered") && typeof t446_clickedSection.attr("id") != "undefined") {
            t446_navLinks.removeClass('t-active');
            $(this).addClass('t-active');
            t446_clickedSectionId = t446_getSectionByHref($(this)).attr("id");
        }
    });
    $(window).scroll(function() {
        var t446_now = new Date().getTime();
        if (t446_lastCall && t446_now < (t446_lastCall + t446_interval)) {
            clearTimeout(t446_timeoutId);
            t446_timeoutId = setTimeout(function() {
                t446_lastCall = t446_now;
                t446_clickedSectionId = t446_highlightNavLinks(t446_navLinks, t446_sections, t446_sectionIdTonavigationLink, t446_clickedSectionId);
            }, t446_interval - (t446_now - t446_lastCall));
        } else {
            t446_lastCall = t446_now;
            t446_clickedSectionId = t446_highlightNavLinks(t446_navLinks, t446_sections, t446_sectionIdTonavigationLink, t446_clickedSectionId);
        }
    });
}


function t446_updateSectionsOffsets(sections){
	$(sections).each(function(){
		var t446_curSection = $(this);
		t446_curSection.attr("data-offset-top",t446_curSection.offset().top);
	});
}


function t446_getSectionByHref(curlink) {
    var t446_curLinkValue = curlink.attr("href").replace(/\s+/g, '');
    if (t446_curLinkValue[0]=='/') { t446_curLinkValue = t446_curLinkValue.substring(1); }
    if (curlink.is('[href*="#rec"]')) {
        return $(".r[id='" + t446_curLinkValue.substring(1) + "']");
    } else {
        return $(".r[data-record-type='215']").has("a[name='" + t446_curLinkValue.substring(1) + "']");
    }
}

function t446_highlightNavLinks(t446_navLinks, t446_sections, t446_sectionIdTonavigationLink, t446_clickedSectionId) {
    var t446_scrollPosition = $(window).scrollTop(),
        t446_valueToReturn = t446_clickedSectionId;
    /*if first section is not at the page top (under first blocks)*/
    if (t446_sections.length != 0 && t446_clickedSectionId == null && t446_sections[t446_sections.length-1].attr("data-offset-top") > (t446_scrollPosition + 300)){
      t446_navLinks.removeClass('t-active');
      return null;
    }

    $(t446_sections).each(function(e) {
        var t446_curSection = $(this),
            t446_sectionTop = t446_curSection.attr("data-offset-top"),
            t446_id = t446_curSection.attr('id'),
            t446_navLink = t446_sectionIdTonavigationLink[t446_id];
        if (((t446_scrollPosition + 300) >= t446_sectionTop) || (t446_sections[0].attr("id") == t446_id && t446_scrollPosition >= $(document).height() - $(window).height())) {
            if (t446_clickedSectionId == null && !t446_navLink.hasClass('t-active')) {
                t446_navLinks.removeClass('t-active');
                t446_navLink.addClass('t-active');
                t446_valueToReturn = null;
            } else {
                if (t446_clickedSectionId != null && t446_id == t446_clickedSectionId) {
                    t446_valueToReturn = null;
                }
            }
            return false;
        }
    });
    return t446_valueToReturn;
}

function t446_setPath(){
}

function t446_setBg(recid){
  var window_width=$(window).width();
  if(window_width>980){
    $(".t446").each(function() {
      var el=$(this);
      if(el.attr('data-bgcolor-setbyscript')=="yes"){
        var bgcolor=el.attr("data-bgcolor-rgba");
        el.css("background-color",bgcolor);
      }
      });
      }else{
        $(".t446").each(function() {
          var el=$(this);
          var bgcolor=el.attr("data-bgcolor-hex");
          el.css("background-color",bgcolor);
          el.attr("data-bgcolor-setbyscript","yes");
      });
  }
}

function t446_appearMenu(recid) {
      var window_width=$(window).width();
      if(window_width>980){
           $(".t446").each(function() {
                  var el=$(this);
                  var appearoffset=el.attr("data-appearoffset");
                  if(appearoffset!=""){
                          if(appearoffset.indexOf('vh') > -1){
                              appearoffset = Math.floor((window.innerHeight * (parseInt(appearoffset) / 100)));
                          }

                          appearoffset=parseInt(appearoffset, 10);

                          if ($(window).scrollTop() >= appearoffset) {
                            if(el.css('visibility') == 'hidden'){
                                el.finish();
                                el.css("top","-50px");
                                el.css("visibility","visible");
                                el.animate({"opacity": "1","top": "0px"}, 200,function() {
                                });
                            }
                          }else{
                            el.stop();
                            el.css("visibility","hidden");
                          }
                  }
           });
      }

}

function t446_changebgopacitymenu(recid) {
  var window_width=$(window).width();
  if(window_width>980){
    $(".t446").each(function() {
      var el=$(this);
      var bgcolor=el.attr("data-bgcolor-rgba");
      var bgcolor_afterscroll=el.attr("data-bgcolor-rgba-afterscroll");
      var bgopacityone=el.attr("data-bgopacity");
      var bgopacitytwo=el.attr("data-bgopacity-two");
      var menushadow=el.attr("data-menushadow");
      if(menushadow=='100'){
        var menushadowvalue=menushadow;
      }else{
        var menushadowvalue='0.'+menushadow;
      }
      if ($(window).scrollTop() > 20) {
        el.css("background-color",bgcolor_afterscroll);
        if(bgopacitytwo=='0' || menushadow==' '){
          el.css("box-shadow","none");
        }else{
          el.css("box-shadow","0px 1px 3px rgba(0,0,0,"+ menushadowvalue +")");
        }
      }else{
        el.css("background-color",bgcolor);
        if(bgopacityone=='0.0' || menushadow==' '){
          el.css("box-shadow","none");
        }else{
          el.css("box-shadow","0px 1px 3px rgba(0,0,0,"+ menushadowvalue +")");
        }
      }
    });
  }
}

function t446_createMobileMenu(recid){
  var window_width=$(window).width(),
      el=$("#rec"+recid),
      menu=el.find(".t446"),
      burger=el.find(".t446__mobile");
  burger.click(function(e){
    menu.fadeToggle(300);
    $(this).toggleClass("t446_opened")
  })
  $(window).bind('resize', t_throttle(function(){
    window_width=$(window).width();
    if(window_width>980){
      menu.fadeIn(0);
    }
  }, 200));
} 
function t448_setHeight(recid) {
  var el=$("#rec"+recid);
  var coverheight = el.find(".t-cover").height();
  var coverwrapper = el.find(".t448-cover__wrapper");
  var textheight = el.find(".t448__wrapper").innerHeight();
  var imgheight = el.find(".t448__screenshot").height();
  var height = textheight + imgheight;
  var newheight = coverheight - imgheight;
  var container = el.find(".t448");
  var attr = container.attr("data-crop-image");

  if (typeof attr !== typeof undefined && attr !== false) {
    container.addClass("t448__no-overflow");
    container.css("height", coverwrapper.height());
  }

  if (coverheight > height) {
    el.addClass("t448__stretched");
    coverwrapper.css("height",newheight);
    if (typeof attr !== typeof undefined && attr !== false) {
      container.removeClass("t448__no-overflow");
      container.css("height", "");
    }
  } else {
    el.removeClass("t448__stretched");
    coverwrapper.css("height","");
  }
} 
function t449_appearMenu(recid) {
    var window_width=$(window).width();
    if(window_width>980){
         $(".t449").each(function() {
                var el=$(this);
                var appearoffset=el.attr("data-appearoffset");
                var hideoffset=el.attr("data-hideoffset");
                if(appearoffset!=""){
                        if(appearoffset.indexOf('vh') > -1){
                            appearoffset = Math.floor((window.innerHeight * (parseInt(appearoffset) / 100)));
                        }

                        appearoffset=parseInt(appearoffset, 10);

                        if ($(window).scrollTop() >= appearoffset) {
                          if(el.hasClass('t449__beforeready')){
                              el.finish(); 
                              el.removeClass("t449__beforeready");
                          }
                        }else{
                          el.stop();
                          el.addClass("t449__beforeready");
                        }
                }

                if(hideoffset!=""){
                        if(hideoffset.indexOf('vh') > -1){
                            hideoffset = Math.floor((window.innerHeight * (parseInt(hideoffset) / 100)));
                        }

                        hideoffset=parseInt(hideoffset, 10);

                        if ($(window).scrollTop()+$(window).height() >= $(document).height() - hideoffset) {
                          if(!el.hasClass('t449__beforeready')){
                              el.finish();
                              el.addClass("t449__beforeready");
                          }
                        }else{
                          if (appearoffset!="") {
                              if($(window).scrollTop() >= appearoffset){
                                el.stop();
                                el.removeClass("t449__beforeready");
                              }
                          }else{
                              el.stop();
                              el.removeClass("t449__beforeready");
                          }
                        }
                }
         });
    }
} 
function t450_showMenu(recid){
  var el=$('#rec'+recid);
  $('body').addClass('t450__body_menushowed');
  el.find('.t450').addClass('t450__menu_show');
  el.find('.t450__overlay').addClass('t450__menu_show');
  $('.t450').bind('clickedAnchorInTooltipMenu',function(){
    t450_closeMenu();
  });
  el.find('.t450__overlay, .t450__close, a[href*=#]').click(function() {
    var url = $(this).attr('href');
    if (typeof url!='undefined' && url!='' && (url.substring(0, 7) == '#price:' || url.substring(0, 9) == '#submenu:')) { return; }
    t450_closeMenu();
  });
  $(document).keydown(function(e) {
    if (e.keyCode == 27) {
    	$('body').removeClass('t390__body_popupshowed');
      $('.t390').removeClass('t390__popup_show');
    }
});
}

function t450_closeMenu(){
  $('body').removeClass('t450__body_menushowed');
  $('.t450').removeClass('t450__menu_show');
  $('.t450__overlay').removeClass('t450__menu_show');
}

function t450_checkSize(recid){
  var el=$('#rec'+recid).find('.t450');
  var windowheight = $(window).height() - 80;
  var contentheight = el.find(".t450__top").height() + el.find(".t450__rightside").height();
  if (contentheight > windowheight) {
    el.addClass('t450__overflowed');
    el.find(".t450__container").css('height', 'auto');
  }
}

function t450_appearMenu(recid) {
  var el=$('#rec'+recid);
  var burger=el.find(".t450__burger_container");
   burger.each(function() {
          var el=$(this);
          var appearoffset=el.attr("data-appearoffset");
          var hideoffset=el.attr("data-hideoffset");
          if(appearoffset!=""){
                  if(appearoffset.indexOf('vh') > -1){
                      appearoffset = Math.floor((window.innerHeight * (parseInt(appearoffset) / 100)));
                  }

                  appearoffset=parseInt(appearoffset, 10);

                  if ($(window).scrollTop() >= appearoffset) {
                    if(el.hasClass('t450__beforeready')){
                        el.finish(); 
                        el.removeClass("t450__beforeready");
                    }
                  }else{
                    el.stop();
                    el.addClass("t450__beforeready");
                  }
          }

          if(hideoffset!=""){
                  if(hideoffset.indexOf('vh') > -1){
                      hideoffset = Math.floor((window.innerHeight * (parseInt(hideoffset) / 100)));
                  }

                  hideoffset=parseInt(hideoffset, 10);

                  if ($(window).scrollTop()+$(window).height() >= $(document).height() - hideoffset) {
                    if(!el.hasClass('t450__beforeready')){
                        el.finish();
                        el.addClass("t450__beforeready");
                    }
                  }else{
                    if (appearoffset!="") {
                        if($(window).scrollTop() >= appearoffset){
                          el.stop();
                          el.removeClass("t450__beforeready");
                        }
                    }else{
                        el.stop();
                        el.removeClass("t450__beforeready");
                    }
                  }
          }
   });
}

function t450_initMenu(recid){
  var el=$('#rec'+recid).find('.t450');
  var hook=el.attr('data-tooltip-hook');
  if(hook!==''){
    var obj = $('a[href="'+hook+'"]');
    obj.click(function(e){
      t450_closeMenu();
      t450_showMenu(recid);
      t450_checkSize(recid);
      e.preventDefault();
    });
  }
  $('#rec'+recid).find('.t450__burger_container').click(function(e){
    t450_closeMenu();
    t450_showMenu(recid);
    t450_checkSize(recid);
  });
}

 
function t451_showMenu(recid){
  var el=$('#rec'+recid);
  $('body').addClass('t451__body_menushowed');
  el.find('.t451m').addClass('t451m__menu_show');
  el.find('.t451m__overlay').addClass('t451m__menu_show');
  el.find('.t451m__overlay, .t451m__close, a[href*=#]').click(function(){
    if ($(this).is(".tooltipstered, .t794__tm-link")) { return; }  
    t451_closeMenu();
  });
  $(document).keydown(function(e) {
    if (e.keyCode == 27) {
      $('body').removeClass('t451__body_menushowed');
      $('.t451m').removeClass('t451m__menu_show');
      $('.t451m__overlay').removeClass('t451m__menu_show');
    }
});
}

function t451_closeMenu(){
  $('body').removeClass('t451__body_menushowed');
  $('.t451m').removeClass('t451m__menu_show');
  $('.t451m__overlay').removeClass('t451m__menu_show');
}

function t451_checkSize(recid){
  var el=$('#rec'+recid).find('.t451m');
  var windowheight = $(window).height() - 80;
  var contentheight = el.find(".t451m__top").height() + el.find(".t451m__rightside").height();
  if (contentheight > windowheight) {
    el.addClass('t451m__overflowed');
    el.find(".t451m__container").css('height', 'auto');
  }
}

function t451_initMenu(recid){
  var el=$('#rec'+recid);
  var obj = el.find('.t451__burger');
  obj.click(function(e){
    t451_closeMenu();
    t451_showMenu(recid);
    t451_checkSize(recid);
    e.preventDefault();
  });
  $('.t451').bind('clickedAnchorInTooltipMenu',function(){
    t451_closeMenu();
  });
}

function t451_highlight(){
  var url=window.location.href;
  var pathname=window.location.pathname;
  if(url.substr(url.length - 1) == "/"){ url = url.slice(0,-1); }
  if(pathname.substr(pathname.length - 1) == "/"){ pathname = pathname.slice(0,-1); }
  if(pathname.charAt(0) == "/"){ pathname = pathname.slice(1); }
  if(pathname == ""){ pathname = "/"; }
  $(".t451__list_item a[href='"+url+"']").addClass("t-active");
  $(".t451__list_item a[href='"+url+"/']").addClass("t-active");
  $(".t451__list_item a[href='"+pathname+"']").addClass("t-active");
  $(".t451__list_item a[href='/"+pathname+"']").addClass("t-active");
  $(".t451__list_item a[href='"+pathname+"/']").addClass("t-active");
  $(".t451__list_item a[href='/"+pathname+"/']").addClass("t-active");
}   

function t451_changeBgOpacityMenu(recid) {
  var window_width=$(window).width();
  var record = $("#rec"+recid);
  record.find(".t451__container__bg").each(function() {
        var el=$(this);
        var bgcolor=el.attr("data-bgcolor-rgba");
        var bgcolor_afterscroll=el.attr("data-bgcolor-rgba-afterscroll");
        var bgopacity=el.attr("data-bgopacity");
        var bgopacity_afterscroll=el.attr("data-bgopacity2");
        var menu_shadow=el.attr("data-menu-shadow");
        if ($(window).scrollTop() > 20) {
            el.css("background-color",bgcolor_afterscroll);
            if (bgopacity_afterscroll != "0" && bgopacity_afterscroll != "0.0") {
              el.css('box-shadow',menu_shadow);
            } else {
              el.css('box-shadow','none');
            }
        }else{
            el.css("background-color",bgcolor);
            if (bgopacity != "0" && bgopacity != "0.0") {
              el.css('box-shadow',menu_shadow);
            } else {
              el.css('box-shadow','none');
            }
        }
  });
}

function t451_appearMenu(recid) {
      var window_width=$(window).width();
      var record = $("#rec"+recid);
           record.find(".t451__panel").each(function() {
                  var el=$(this);
                  var appearoffset=el.attr("data-appearoffset");
console.log(appearoffset)
                  if(appearoffset!=""){
                          if(appearoffset.indexOf('vh') > -1){
                              appearoffset = Math.floor((window.innerHeight * (parseInt(appearoffset) / 100)));
                          }

                          appearoffset=parseInt(appearoffset, 10);

                          if ($(window).scrollTop() >= appearoffset) {
                            if(el.hasClass('t451__beforeready')){
                                el.removeClass('t451__beforeready');
                            }
                          }else{
                            el.addClass('t451__beforeready');
                          }
                  }
           });

}

 
function t452_scrollToTop(){
  $('html, body').animate({scrollTop: 0}, 700);								
}	  
function t453_highlight(){
  var url=window.location.href;
  var pathname=window.location.pathname;
  if(url.substr(url.length - 1) == "/"){ url = url.slice(0,-1); }
  if(pathname.substr(pathname.length - 1) == "/"){ pathname = pathname.slice(0,-1); }
  if(pathname.charAt(0) == "/"){ pathname = pathname.slice(1); }
  if(pathname == ""){ pathname = "/"; }
  $(".t453__item a[href='"+url+"']").addClass("t-active");
  $(".t453__item a[href='"+url+"/']").addClass("t-active");
  $(".t453__item a[href='"+pathname+"']").addClass("t-active");
  $(".t453__item a[href='/"+pathname+"']").addClass("t-active");
  $(".t453__item a[href='"+pathname+"/']").addClass("t-active");
  $(".t453__item a[href='/"+pathname+"/']").addClass("t-active");
}   

function t453_checkAnchorLinks(recid) {
	if($(window).width()>=960) {
	  var t453_navLinks = $("#rec"+recid+" .t453__item a:not(.tooltipstered)[href*='#']");
      if (t453_navLinks.length>0){
      	t453_catchScroll(t453_navLinks);
      };
	}
}

function t453_catchScroll(t453_navLinks) {
    var t453_clickedSectionId = null,
      t453_sections = new Array(),
      t453_sectionIdTonavigationLink = {},
      t453_interval = 100,
      t453_lastCall,
      t453_timeoutId,
	  t453_offsetTop = $(".t453").attr("data-offset-top");
	if (typeof t453_offsetTop == "undefined") { t453_offsetTop = 0; }	
	t453_navLinks.each(function(){
		var t453_cursection = t453_getSectionByHref($(this));
		if (typeof t453_cursection.attr("id") != "undefined") { t453_sections.push(t453_cursection); }
		t453_sectionIdTonavigationLink[t453_cursection.attr("id")] = $(this);
	});

	t453_highlightNavLinks(t453_navLinks,t453_sections,t453_sectionIdTonavigationLink,t453_clickedSectionId,t453_offsetTop);
	t453_navLinks.click(function() {		
		if (!$(this).hasClass("tooltipstered")) {
		  t453_navLinks.removeClass('t-active');	
          t453_sectionIdTonavigationLink[t453_getSectionByHref($(this)).attr("id")].addClass('t-active');
          t453_clickedSectionId = t453_getSectionByHref($(this)).attr("id");
		}
  	});
	$(window).scroll( function() {
		var t453_now = new Date().getTime();
		if (t453_lastCall && t453_now < (t453_lastCall + t453_interval) ) {
				clearTimeout(t453_timeoutId);
				t453_timeoutId = setTimeout(function () {
						t453_lastCall = t453_now;
						t453_clickedSectionId = t453_highlightNavLinks(t453_navLinks,t453_sections,t453_sectionIdTonavigationLink,t453_clickedSectionId,t453_offsetTop);
				}, t453_interval - (t453_now - t453_lastCall) );
		} else {
				t453_lastCall = t453_now;
				t453_clickedSectionId = t453_highlightNavLinks(t453_navLinks,t453_sections,t453_sectionIdTonavigationLink,t453_clickedSectionId,t453_offsetTop);
		}
	});
}

function t453_getSectionByHref (curlink) {
	if (curlink.is('[href*="#rec"]')) { return $(".r[id='"+curlink.attr("href").substring(1)+"']"); }
	else { return $(".r[data-record-type='215']").has("a[name='"+curlink.attr("href").substring(1)+"']"); }
}

function t453_highlightNavLinks(t453_navLinks,t453_sections,t453_sectionIdTonavigationLink,t453_clickedSectionId,offsetTop) {	                                                      
	var t453_scrollPosition = $(window).scrollTop(),
		t453_valueToReturn = t453_clickedSectionId;
	$(t453_sections).each(function(e) {
			var t453_curSection = $(this),
					t453_sectionTop = t453_curSection.offset().top,
					t453_id = t453_curSection.attr('id'),
					t453_navLink = t453_sectionIdTonavigationLink[t453_id];
			if (t453_scrollPosition >= (t453_sectionTop - offsetTop) || (t453_sections[0].attr("id") == t453_id && $(window).scrollTop() >= $(document).height() - $(window).height())) {
				
				if (t453_clickedSectionId == null && !t453_navLink.hasClass('t-active')) {
					t453_navLinks.removeClass('t-active');
					t453_navLink.addClass('t-active');
					t453_valueToReturn = null;
				} else {
					if (t453_clickedSectionId != null && t453_id == t453_clickedSectionId) {
						t453_valueToReturn = null;
					}
				}
				return false;
			}
	});
	return t453_valueToReturn;
}

function t453_appearMenu(recid) {
      var window_width=$(window).width();
      var record = $("#rec"+recid);
           record.find(".t453").each(function() {
                  var el=$(this);
                  var appearoffset=el.attr("data-appearoffset");
console.log(appearoffset)
                  if(appearoffset!=""){
                          if(appearoffset.indexOf('vh') > -1){
                              appearoffset = Math.floor((window.innerHeight * (parseInt(appearoffset) / 100)));
                          }

                          appearoffset=parseInt(appearoffset, 10);

                          if ($(window).scrollTop() >= appearoffset) {
                            if(el.hasClass('t453__beforeready')){
                                el.removeClass('t453__beforeready');
                            }
                          }else{
                            el.addClass('t453__beforeready');
                          }
                  }
           });

} 
function t454_setLogoPadding(recid){
	if($(window).width()>980){
        var t454__menu = $('#rec'+recid+' .t454');
        var t454__logo=t454__menu.find('.t454__logowrapper');
        var t454__leftpart=t454__menu.find('.t454__leftwrapper');
        var t454__rightpart=t454__menu.find('.t454__rightwrapper');
        t454__leftpart.css("padding-right",t454__logo.width()/2+50);
        t454__rightpart.css("padding-left",t454__logo.width()/2+50);
	}
}

function t454_highlight(){
  var url=window.location.href;
  var pathname=window.location.pathname;
  if(url.substr(url.length - 1) == "/"){ url = url.slice(0,-1); }
  if(pathname.substr(pathname.length - 1) == "/"){ pathname = pathname.slice(0,-1); }
  if(pathname.charAt(0) == "/"){ pathname = pathname.slice(1); }
  if(pathname == ""){ pathname = "/"; }
  $(".t454__list_item a[href='"+url+"']").addClass("t-active");
  $(".t454__list_item a[href='"+url+"/']").addClass("t-active");
  $(".t454__list_item a[href='"+pathname+"']").addClass("t-active");
  $(".t454__list_item a[href='/"+pathname+"']").addClass("t-active");
  $(".t454__list_item a[href='"+pathname+"/']").addClass("t-active");
  $(".t454__list_item a[href='/"+pathname+"/']").addClass("t-active");
}

function t454_checkAnchorLinks(recid) {
    if ($(window).width() >= 960) {
        var t454_navLinks = $("#rec" + recid + " .t454__list_item a:not(.tooltipstered)[href*='#']");
        if (t454_navLinks.length > 0) {
            t454_catchScroll(t454_navLinks);
        }
    }
}

function t454_catchScroll(t454_navLinks) {
    var t454_clickedSectionId = null,
        t454_sections = new Array(),
        t454_sectionIdTonavigationLink = [],
        t454_interval = 100,
        t454_lastCall, t454_timeoutId;
    t454_navLinks = $(t454_navLinks.get().reverse());
    t454_navLinks.each(function() {
        var t454_cursection = t454_getSectionByHref($(this));
        if (typeof t454_cursection.attr("id") != "undefined") {
            t454_sections.push(t454_cursection);
        }
        t454_sectionIdTonavigationLink[t454_cursection.attr("id")] = $(this);
    });
		t454_updateSectionsOffsets(t454_sections);
		$(window).bind('resize', t_throttle(function(){t454_updateSectionsOffsets(t454_sections);}, 200));
		$('.t454').bind('displayChanged',function(){t454_updateSectionsOffsets(t454_sections);});
		setInterval(function(){t454_updateSectionsOffsets(t454_sections);},5000);
    t454_highlightNavLinks(t454_navLinks, t454_sections, t454_sectionIdTonavigationLink, t454_clickedSectionId);

    t454_navLinks.click(function() {
        if (!$(this).hasClass("tooltipstered")) {
            t454_navLinks.removeClass('t-active');
            t454_sectionIdTonavigationLink[t454_getSectionByHref($(this)).attr("id")].addClass('t-active');
            t454_clickedSectionId = t454_getSectionByHref($(this)).attr("id");
        }
    });
    $(window).scroll(function() {
        var t454_now = new Date().getTime();
        if (t454_lastCall && t454_now < (t454_lastCall + t454_interval)) {
            clearTimeout(t454_timeoutId);
            t454_timeoutId = setTimeout(function() {
                t454_lastCall = t454_now;
                t454_clickedSectionId = t454_highlightNavLinks(t454_navLinks, t454_sections, t454_sectionIdTonavigationLink, t454_clickedSectionId);
            }, t454_interval - (t454_now - t454_lastCall));
        } else {
            t454_lastCall = t454_now;
            t454_clickedSectionId = t454_highlightNavLinks(t454_navLinks, t454_sections, t454_sectionIdTonavigationLink, t454_clickedSectionId);
        }
    });
}


function t454_updateSectionsOffsets(sections){
	$(sections).each(function(){
		var t454_curSection = $(this);
		t454_curSection.attr("data-offset-top",t454_curSection.offset().top);
	});
}


function t454_getSectionByHref(curlink) {
    var t454_curLinkValue = curlink.attr("href").replace(/\s+/g, '');
    if (curlink.is('[href*="#rec"]')) {
        return $(".r[id='" + t454_curLinkValue.substring(1) + "']");
    } else {
        return $(".r[data-record-type='215']").has("a[name='" + t454_curLinkValue.substring(1) + "']");
    }
}


function t454_highlightNavLinks(t454_navLinks, t454_sections, t454_sectionIdTonavigationLink, t454_clickedSectionId) {
    var t454_scrollPosition = $(window).scrollTop(),
        t454_valueToReturn = t454_clickedSectionId;
    /*if first section is not at the page top (under first blocks)*/
    if (t454_sections.length != 0 && t454_clickedSectionId == null && t454_sections[t454_sections.length-1].attr("data-offset-top") > (t454_scrollPosition + 300)){
      t454_navLinks.removeClass('t-active');
      return null;
    }

    $(t454_sections).each(function(e) {
        var t454_curSection = $(this),
            t454_sectionTop = t454_curSection.attr("data-offset-top"),
            t454_id = t454_curSection.attr('id'),
            t454_navLink = t454_sectionIdTonavigationLink[t454_id];
        if (((t454_scrollPosition + 300) >= t454_sectionTop) || (t454_sections[0].attr("id") == t454_id && t454_scrollPosition >= $(document).height() - $(window).height())) {
            if (t454_clickedSectionId == null && !t454_navLink.hasClass('t-active')) {
                t454_navLinks.removeClass('t-active');
                t454_navLink.addClass('t-active');
                t454_valueToReturn = null;
            } else {
                if (t454_clickedSectionId != null && t454_id == t454_clickedSectionId) {
                    t454_valueToReturn = null;
                }
            }
            return false;
        }
    });
    return t454_valueToReturn;
}

function t454_setPath(){
}

function t454_setBg(recid){
  var window_width=$(window).width();
  if(window_width>980){
    $(".t454").each(function() {
      var el=$(this);
      if(el.attr('data-bgcolor-setbyscript')=="yes"){
        var bgcolor=el.attr("data-bgcolor-rgba");
        el.css("background-color",bgcolor);
      }
      });
      }else{
        $(".t454").each(function() {
          var el=$(this);
          var bgcolor=el.attr("data-bgcolor-hex");
          el.css("background-color",bgcolor);
          el.attr("data-bgcolor-setbyscript","yes");
      });
  }
}

function t454_appearMenu(recid) {
      var window_width=$(window).width();
      if(window_width>980){
           $(".t454").each(function() {
                  var el=$(this);
                  var appearoffset=el.attr("data-appearoffset");
                  if(appearoffset!=""){
                          if(appearoffset.indexOf('vh') > -1){
                              appearoffset = Math.floor((window.innerHeight * (parseInt(appearoffset) / 100)));
                          }

                          appearoffset=parseInt(appearoffset, 10);

                          if ($(window).scrollTop() >= appearoffset) {
                            if(el.css('visibility') == 'hidden'){
                                el.finish();
                                el.css("top","-80px");
                                el.css("visibility","visible");
                                el.animate({"opacity": "1","top": "0px"}, 200,function() {
                                });
                            }
                          }else{
                            el.stop();
                            el.css("visibility","hidden");
                          }
                  }
           });
      }

}

function t454_changebgopacitymenu(recid) {
  var window_width=$(window).width();
  if(window_width>980){
    $(".t454").each(function() {
      var el=$(this);
      var bgcolor=el.attr("data-bgcolor-rgba");
      var bgcolor_afterscroll=el.attr("data-bgcolor-rgba-afterscroll");
      var bgopacityone=el.attr("data-bgopacity");
      var bgopacitytwo=el.attr("data-bgopacity-two");
      var menushadow=el.attr("data-menushadow");
      if(menushadow=='100'){
        var menushadowvalue=menushadow;
      }else{
        var menushadowvalue='0.'+menushadow;
      }
      if ($(window).scrollTop() > 20) {
        el.css("background-color",bgcolor_afterscroll);
        if(bgopacitytwo=='0' || menushadow==' '){
          el.css("box-shadow","none");
        }else{
          el.css("box-shadow","0px 1px 3px rgba(0,0,0,"+ menushadowvalue +")");
        }
      }else{
        el.css("background-color",bgcolor);
        if(bgopacityone=='0.0' || menushadow==' '){
          el.css("box-shadow","none");
        }else{
          el.css("box-shadow","0px 1px 3px rgba(0,0,0,"+ menushadowvalue +")");
        }
      }
    });
  }
}

function t454_createMobileMenu(recid){
  var window_width=$(window).width(),
      el=$("#rec"+recid),
      menu=el.find(".t454"),
      burger=el.find(".t454__mobile");
  burger.click(function(e){
    menu.fadeToggle(300);
    $(this).toggleClass("t454_opened")
  })
  $(window).bind('resize', t_throttle(function(){
    window_width=$(window).width();
    if(window_width>980){
      menu.fadeIn(0);
    }
  }, 200));
} 
function t456_setListMagin(recid,imglogo){
	if($(window).width()>980){		
        var t456__menu = $('#rec'+recid+' .t456');        
        var t456__leftpart=t456__menu.find('.t456__leftwrapper');
        var t456__listpart=t456__menu.find('.t456__list');		
		if (imglogo){
			t456__listpart.css("margin-right",t456__leftpart.width());
		} else {
			t456__listpart.css("margin-right",t456__leftpart.width()+30);        
		}		        
	}
}

function t456_highlight(){
  var url=window.location.href;
  var pathname=window.location.pathname;
  if(url.substr(url.length - 1) == "/"){ url = url.slice(0,-1); }
  if(pathname.substr(pathname.length - 1) == "/"){ pathname = pathname.slice(0,-1); }
  if(pathname.charAt(0) == "/"){ pathname = pathname.slice(1); }
  if(pathname == ""){ pathname = "/"; }
  $(".t456__list_item a[href='"+url+"']").addClass("t-active");
  $(".t456__list_item a[href='"+url+"/']").addClass("t-active");
  $(".t456__list_item a[href='"+pathname+"']").addClass("t-active");
  $(".t456__list_item a[href='/"+pathname+"']").addClass("t-active");
  $(".t456__list_item a[href='"+pathname+"/']").addClass("t-active");
  $(".t456__list_item a[href='/"+pathname+"/']").addClass("t-active");
}


function t456_checkAnchorLinks(recid) {
    if ($(window).width() >= 960) {
        var t456_navLinks = $("#rec" + recid + " .t456__list_item a:not(.tooltipstered)[href*='#']");
        if (t456_navLinks.length > 0) {
            t456_catchScroll(t456_navLinks);
        }
    }
}

function t456_catchScroll(t456_navLinks) {
    var t456_clickedSectionId = null,
        t456_sections = new Array(),
        t456_sectionIdTonavigationLink = [],
        t456_interval = 100,
        t456_lastCall, t456_timeoutId;
    t456_navLinks = $(t456_navLinks.get().reverse());
    t456_navLinks.each(function() {
        var t456_cursection = t456_getSectionByHref($(this));
        if (typeof t456_cursection.attr("id") != "undefined") {
            t456_sections.push(t456_cursection);
        }
        t456_sectionIdTonavigationLink[t456_cursection.attr("id")] = $(this);
    });

		$(window).bind('resize', t_throttle(function(){t456_updateSectionsOffsets(t456_sections);}, 200));
		$('.t456').bind('displayChanged',function(){t456_updateSectionsOffsets(t456_sections);});
		setInterval(function(){t456_updateSectionsOffsets(t456_sections);},5000);
    setTimeout(function(){
			t456_updateSectionsOffsets(t456_sections);
			t456_highlightNavLinks(t456_navLinks, t456_sections, t456_sectionIdTonavigationLink, t456_clickedSectionId);
		},1000);

    t456_navLinks.click(function() {
        if (!$(this).hasClass("tooltipstered")) {
            t456_navLinks.removeClass('t-active');
            t456_sectionIdTonavigationLink[t456_getSectionByHref($(this)).attr("id")].addClass('t-active');
            t456_clickedSectionId = t456_getSectionByHref($(this)).attr("id");
        }
    });
    $(window).scroll(function() {
        var t456_now = new Date().getTime();
        if (t456_lastCall && t456_now < (t456_lastCall + t456_interval)) {
            clearTimeout(t456_timeoutId);
            t456_timeoutId = setTimeout(function() {
                t456_lastCall = t456_now;
                t456_clickedSectionId = t456_highlightNavLinks(t456_navLinks, t456_sections, t456_sectionIdTonavigationLink, t456_clickedSectionId);
            }, t456_interval - (t456_now - t456_lastCall));
        } else {
            t456_lastCall = t456_now;
            t456_clickedSectionId = t456_highlightNavLinks(t456_navLinks, t456_sections, t456_sectionIdTonavigationLink, t456_clickedSectionId);
        }
    });
}


function t456_updateSectionsOffsets(sections){
	$(sections).each(function(){
		var t456_curSection = $(this);
		t456_curSection.attr("data-offset-top",t456_curSection.offset().top);
	});
}


function t456_getSectionByHref(curlink) {
    var t456_curLinkValue = curlink.attr("href").replace(/\s+/g, '');
    if (curlink.is('[href*="#rec"]')) {
        return $(".r[id='" + t456_curLinkValue.substring(1) + "']");
    } else {
        return $(".r[data-record-type='215']").has("a[name='" + t456_curLinkValue.substring(1) + "']");
    }
}

function t456_highlightNavLinks(t456_navLinks, t456_sections, t456_sectionIdTonavigationLink, t456_clickedSectionId) {
    var t456_scrollPosition = $(window).scrollTop(),
        t456_valueToReturn = t456_clickedSectionId;
    /*if first section is not at the page top (under first blocks)*/
    if (t456_sections.length != 0 && t456_clickedSectionId == null && t456_sections[t456_sections.length-1].attr("data-offset-top") > (t456_scrollPosition + 300)){
      t456_navLinks.removeClass('t-active');
      return null;
    }

    $(t456_sections).each(function(e) {
        var t456_curSection = $(this),
            t456_sectionTop = t456_curSection.attr("data-offset-top"),
            t456_id = t456_curSection.attr('id'),
            t456_navLink = t456_sectionIdTonavigationLink[t456_id];
        if (((t456_scrollPosition + 300) >= t456_sectionTop) || (t456_sections[0].attr("id") == t456_id && t456_scrollPosition >= $(document).height() - $(window).height())) {
            if (t456_clickedSectionId == null && !t456_navLink.hasClass('t-active')) {
                t456_navLinks.removeClass('t-active');
                t456_navLink.addClass('t-active');
                t456_valueToReturn = null;
            } else {
                if (t456_clickedSectionId != null && t456_id == t456_clickedSectionId) {
                    t456_valueToReturn = null;
                }
            }
            return false;
        }
    });
    return t456_valueToReturn;
}

function t456_setPath(){
}

function t456_setBg(recid){
  var window_width=$(window).width();
  if(window_width>980){
    $(".t456").each(function() {
      var el=$(this);
      if(el.attr('data-bgcolor-setbyscript')=="yes"){
        var bgcolor=el.attr("data-bgcolor-rgba");
        el.css("background-color",bgcolor);
      }
      });
      }else{
        $(".t456").each(function() {
          var el=$(this);
          var bgcolor=el.attr("data-bgcolor-hex");
          el.css("background-color",bgcolor);
          el.attr("data-bgcolor-setbyscript","yes");
      });
  }
}

function t456_appearMenu(recid) {
      var window_width=$(window).width();
      if(window_width>980){
           $(".t456").each(function() {
                  var el=$(this);
                  var appearoffset=el.attr("data-appearoffset");
                  if(appearoffset!=""){
                          if(appearoffset.indexOf('vh') > -1){
                              appearoffset = Math.floor((window.innerHeight * (parseInt(appearoffset) / 100)));
                          }

                          appearoffset=parseInt(appearoffset, 10);

                          if ($(window).scrollTop() >= appearoffset) {
                            if(el.css('visibility') == 'hidden'){
                                el.finish();
                                el.css("top","-50px");
                                el.css("visibility","visible");
                                el.animate({"opacity": "1","top": "0px"}, 200,function() {
                                });
                            }
                          }else{
                            el.stop();
                            el.css("visibility","hidden");
                          }
                  }
           });
      }

}

function t456_changebgopacitymenu(recid) {
  var window_width=$(window).width();
  if(window_width>980){
    $(".t456").each(function() {
      var el=$(this);
      var bgcolor=el.attr("data-bgcolor-rgba");
      var bgcolor_afterscroll=el.attr("data-bgcolor-rgba-afterscroll");
      var bgopacityone=el.attr("data-bgopacity");
      var bgopacitytwo=el.attr("data-bgopacity-two");
      var menushadow=el.attr("data-menushadow");
      if(menushadow=='100'){
        var menushadowvalue=menushadow;
      }else{
        var menushadowvalue='0.'+menushadow;
      }
      if ($(window).scrollTop() > 20) {
        el.css("background-color",bgcolor_afterscroll);
        if(bgopacitytwo=='0' || menushadow==' '){
          el.css("box-shadow","none");
        }else{
          el.css("box-shadow","0px 1px 3px rgba(0,0,0,"+ menushadowvalue +")");
        }
      }else{
        el.css("background-color",bgcolor);
        if(bgopacityone=='0.0' || menushadow==' '){
          el.css("box-shadow","none");
        }else{
          el.css("box-shadow","0px 1px 3px rgba(0,0,0,"+ menushadowvalue +")");
        }
      }
    });
  }
}

function t456_createMobileMenu(recid){
  var window_width=$(window).width(),
      el=$("#rec"+recid),
      menu=el.find(".t456"),
      burger=el.find(".t456__mobile");
  burger.click(function(e){
    menu.fadeToggle(300);
    $(this).toggleClass("t456_opened")
  });
  $(window).bind('resize', t_throttle(function(){
    window_width=$(window).width();
    if(window_width>980){
      menu.fadeIn(0);
    }
  }, 200));
} 
function t461_setLogoPadding(recid){
	if($(window).width()>980){			  
        var t461__menu = $('#rec'+recid+' .t461');
        var t461__logo=t461__menu.find('.t461__logowrapper');	  
        var t461__leftpart=t461__menu.find('.t461__leftwrapper');
        var t461__rightpart=t461__menu.find('.t461__rightwrapper');
        t461__leftpart.css("padding-right",t461__logo.width()/2+50);
        t461__rightpart.css("padding-left",t461__logo.width()/2+50);			        
	}
}

function t461_highlight(){
  var url=window.location.href;
  var pathname=window.location.pathname;
  if(url.substr(url.length - 1) == "/"){ url = url.slice(0,-1); }
  if(pathname.substr(pathname.length - 1) == "/"){ pathname = pathname.slice(0,-1); }
  if(pathname.charAt(0) == "/"){ pathname = pathname.slice(1); }
  if(pathname == ""){ pathname = "/"; }
  $(".t461__list_item a[href='"+url+"']").addClass("t-active");
  $(".t461__list_item a[href='"+url+"/']").addClass("t-active");
  $(".t461__list_item a[href='"+pathname+"']").addClass("t-active");
  $(".t461__list_item a[href='/"+pathname+"']").addClass("t-active");
  $(".t461__list_item a[href='"+pathname+"/']").addClass("t-active");
  $(".t461__list_item a[href='/"+pathname+"/']").addClass("t-active");
}

function t461_checkAnchorLinks(recid) {
	if($(window).width()>=960) {
	  var t461_navLinks = $("#rec"+recid+" .t461__desktoplist .t461__list_item a:not(.tooltipstered)[href*='#']");
      if (t461_navLinks.length>0){
      	t461_catchScroll(t461_navLinks);
      };
	}
}

function t461_catchScroll(t461_navLinks) {
    var t461_clickedSectionId = null,
        t461_sections = new Array(),
        t461_sectionIdTonavigationLink = [],
        t461_interval = 100,
        t461_lastCall, t461_timeoutId;
    t461_navLinks = $(t461_navLinks.get().reverse());
    t461_navLinks.each(function() {
        var t461_cursection = t461_getSectionByHref($(this));
        if (typeof t461_cursection.attr("id") != "undefined") {
            t461_sections.push(t461_cursection);
        }
        t461_sectionIdTonavigationLink[t461_cursection.attr("id")] = $(this);
    });
		t461_updateSectionsOffsets(t461_sections);
    t461_sections.sort(function(a, b) {
      return b.attr("data-offset-top") - a.attr("data-offset-top");
    });
		$(window).bind('resize', t_throttle(function(){t461_updateSectionsOffsets(t461_sections);}, 200));
		$('.t461').bind('displayChanged',function(){t461_updateSectionsOffsets(t461_sections);});
		setInterval(function(){t461_updateSectionsOffsets(t461_sections);},5000);
    t461_highlightNavLinks(t461_navLinks, t461_sections, t461_sectionIdTonavigationLink, t461_clickedSectionId);

    t461_navLinks.click(function() {
        var t461_clickedSection = t461_getSectionByHref($(this));
        if (!$(this).hasClass("tooltipstered") && typeof t461_clickedSection.attr("id") != "undefined") {
            t461_navLinks.removeClass('t-active');
            $(this).addClass('t-active');
            t461_clickedSectionId = t461_getSectionByHref($(this)).attr("id");
        }
    });
    $(window).scroll(function() {
        var t461_now = new Date().getTime();
        if (t461_lastCall && t461_now < (t461_lastCall + t461_interval)) {
            clearTimeout(t461_timeoutId);
            t461_timeoutId = setTimeout(function() {
                t461_lastCall = t461_now;
                t461_clickedSectionId = t461_highlightNavLinks(t461_navLinks, t461_sections, t461_sectionIdTonavigationLink, t461_clickedSectionId);
            }, t461_interval - (t461_now - t461_lastCall));
        } else {
            t461_lastCall = t461_now;
            t461_clickedSectionId = t461_highlightNavLinks(t461_navLinks, t461_sections, t461_sectionIdTonavigationLink, t461_clickedSectionId);
        }
    });
}


function t461_updateSectionsOffsets(sections){
	$(sections).each(function(){
		var t461_curSection = $(this);
		t461_curSection.attr("data-offset-top",t461_curSection.offset().top);
	});
}


function t461_getSectionByHref(curlink) {
    var t461_curLinkValue = curlink.attr("href").replace(/\s+/g, '');
    if (t461_curLinkValue[0]=='/') { t461_curLinkValue = t461_curLinkValue.substring(1); }
    if (curlink.is('[href*="#rec"]')) {
        return $(".r[id='" + t461_curLinkValue.substring(1) + "']");
    } else {
        return $(".r[data-record-type='215']").has("a[name='" + t461_curLinkValue.substring(1) + "']");
    }
}

function t461_highlightNavLinks(t461_navLinks, t461_sections, t461_sectionIdTonavigationLink, t461_clickedSectionId) {
    var t461_scrollPosition = $(window).scrollTop(),
        t461_valueToReturn = t461_clickedSectionId;
    /*if first section is not at the page top (under first blocks)*/
    if (t461_sections.length != 0 && t461_clickedSectionId == null && t461_sections[t461_sections.length-1].attr("data-offset-top") > (t461_scrollPosition + 300)){
      t461_navLinks.removeClass('t-active');
      return null;
    }

    $(t461_sections).each(function(e) {
        var t461_curSection = $(this),
            t461_sectionTop = t461_curSection.attr("data-offset-top"),
            t461_id = t461_curSection.attr('id'),
            t461_navLink = t461_sectionIdTonavigationLink[t461_id];
        if (((t461_scrollPosition + 300) >= t461_sectionTop) || (t461_sections[0].attr("id") == t461_id && t461_scrollPosition >= $(document).height() - $(window).height())) {
            if (t461_clickedSectionId == null && !t461_navLink.hasClass('t-active')) {
                t461_navLinks.removeClass('t-active');
                t461_navLink.addClass('t-active');
                t461_valueToReturn = null;
            } else {
                if (t461_clickedSectionId != null && t461_id == t461_clickedSectionId) {
                    t461_valueToReturn = null;
                }
            }
            return false;
        }
    });
    return t461_valueToReturn;
}


function t461_setPath(){
}

function t461_setBg(recid){
  var window_width=$(window).width();
  if(window_width>980){
    $(".t461").each(function() {
      var el=$(this);
      if(el.attr('data-bgcolor-setbyscript')=="yes"){
        var bgcolor=el.attr("data-bgcolor-rgba");
        el.css("background-color",bgcolor);
      }
      });
      }else{
        $(".t461").each(function() {
          var el=$(this);
          var bgcolor=el.attr("data-bgcolor-hex");
          el.css("background-color",bgcolor);
          el.attr("data-bgcolor-setbyscript","yes");
      });
  }
}

function t461_appearMenu(recid) {
      var window_width=$(window).width();
      if(window_width>980){
           $(".t461").each(function() {
                  var el=$(this);
                  var appearoffset=el.attr("data-appearoffset");
                  if(appearoffset!=""){
                          if(appearoffset.indexOf('vh') > -1){
                              appearoffset = Math.floor((window.innerHeight * (parseInt(appearoffset) / 100)));
                          }

                          appearoffset=parseInt(appearoffset, 10);

                          if ($(window).scrollTop() >= appearoffset) {
                            if(el.css('visibility') == 'hidden'){
                                el.finish();
                                el.css("top","-50px");
                                el.css("visibility","visible");
                                el.animate({"opacity": "1","top": "0px"}, 200,function() {
                                });
                            }
                          }else{
                            el.stop();
                            el.css("visibility","hidden");
                          }
                  }
           });
      }

}

function t461_changebgopacitymenu(recid) {
  var window_width=$(window).width();
  if(window_width>980){
    $(".t461").each(function() {
      var el=$(this);
      var bgcolor=el.attr("data-bgcolor-rgba");
      var bgcolor_afterscroll=el.attr("data-bgcolor-rgba-afterscroll");
      var bgopacityone=el.attr("data-bgopacity");
      var bgopacitytwo=el.attr("data-bgopacity-two");
      var menushadow=el.attr("data-menushadow");
      if(menushadow=='100'){
        var menushadowvalue=menushadow;
      }else{
        var menushadowvalue='0.'+menushadow;
      }
      if ($(window).scrollTop() > 20) {
        el.css("background-color",bgcolor_afterscroll);
        if(bgopacitytwo=='0' || menushadow==' '){
          el.css("box-shadow","none");
        }else{
          el.css("box-shadow","0px 1px 3px rgba(0,0,0,"+ menushadowvalue +")");
        }
      }else{
        el.css("background-color",bgcolor);
        if(bgopacityone=='0.0' || menushadow==' '){
          el.css("box-shadow","none");
        }else{
          el.css("box-shadow","0px 1px 3px rgba(0,0,0,"+ menushadowvalue +")");
        }
      }
    });
  }
}

function t461_createMobileMenu(recid){
  var window_width=$(window).width(),
      el=$("#rec"+recid),
      menu=el.find(".t461"),
      burger=el.find(".t461__mobile");
  burger.click(function(e){
    menu.fadeToggle(300);
    $(this).toggleClass("t461_opened")
  })
  $(window).bind('resize', t_throttle(function(){
    window_width=$(window).width();
    if(window_width>980){
      menu.fadeIn(0);
    }
  }, 200));
} 
function t462_highlight(){
  var url=window.location.href;
  var pathname=window.location.pathname;
  if(url.substr(url.length - 1) == "/"){ url = url.slice(0,-1); }
  if(pathname.substr(pathname.length - 1) == "/"){ pathname = pathname.slice(0,-1); }
  if(pathname.charAt(0) == "/"){ pathname = pathname.slice(1); }
  if(pathname == ""){ pathname = "/"; }
  $(".t462__list_item a[href='"+url+"']").addClass("t-active");
  $(".t462__list_item a[href='"+url+"/']").addClass("t-active");
  $(".t462__list_item a[href='"+pathname+"']").addClass("t-active");
  $(".t462__list_item a[href='/"+pathname+"']").addClass("t-active");
  $(".t462__list_item a[href='"+pathname+"/']").addClass("t-active");
  $(".t462__list_item a[href='/"+pathname+"/']").addClass("t-active");
}

function t462_checkAnchorLinks(recid) {
	if($(window).width()>=960) {
	  var t462_navLinks = $("#rec"+recid+" .t462__list_item a:not(.tooltipstered)[href*='#']");
      if (t462_navLinks.length>0){
      	t462_catchScroll(t462_navLinks);
      };
	}
}

function t462_catchScroll(t462_navLinks) {
    var t462_clickedSectionId = null,
      t462_sections = new Array(),
      t462_sectionIdTonavigationLink = {},
      t462_interval = 100,
      t462_lastCall,
      t462_timeoutId,
	  t462_offsetTop = $(".t270").attr("data-offset-top");
	if (typeof t462_offsetTop == "undefined") { t462_offsetTop = 0; }
	t462_navLinks = $(t462_navLinks.get().reverse());
	t462_navLinks.each(function(){
		var t462_cursection = t462_getSectionByHref($(this));
		if (typeof t462_cursection.attr("id") != "undefined") { t462_sections.push(t462_cursection); }
		t462_sectionIdTonavigationLink[t462_cursection.attr("id")] = $(this);
	});

	t462_highlightNavLinks(t462_navLinks,t462_sections,t462_sectionIdTonavigationLink,t462_clickedSectionId,t462_offsetTop);
	t462_navLinks.click(function() {		
		if (!$(this).hasClass("tooltipstered")) {
		  t462_navLinks.removeClass('t-active');	
          t462_sectionIdTonavigationLink[t462_getSectionByHref($(this)).attr("id")].addClass('t-active');
          t462_clickedSectionId = t462_getSectionByHref($(this)).attr("id");
		}
  	});
	$(window).scroll( function() {
		var t462_now = new Date().getTime();
		if (t462_lastCall && t462_now < (t462_lastCall + t462_interval) ) {
				clearTimeout(t462_timeoutId);
				t462_timeoutId = setTimeout(function () {
						t462_lastCall = t462_now;
						t462_clickedSectionId = t462_highlightNavLinks(t462_navLinks,t462_sections,t462_sectionIdTonavigationLink,t462_clickedSectionId,t462_offsetTop);
				}, t462_interval - (t462_now - t462_lastCall) );
		} else {
				t462_lastCall = t462_now;
				t462_clickedSectionId = t462_highlightNavLinks(t462_navLinks,t462_sections,t462_sectionIdTonavigationLink,t462_clickedSectionId,t462_offsetTop);
		}
	});
}

function t462_getSectionByHref (curlink) {
	if (curlink.is('[href*="#rec"]')) { return $(".r[id='"+curlink.attr("href").substring(1)+"']"); }
	else { return $(".r[data-record-type='215']").has("a[name='"+curlink.attr("href").substring(1)+"']"); }
}

function t462_highlightNavLinks(t462_navLinks,t462_sections,t462_sectionIdTonavigationLink,t462_clickedSectionId,offsetTop) {	                                                      
	var t462_scrollPosition = $(window).scrollTop(),
		t462_valueToReturn = t462_clickedSectionId;
	$(t462_sections).each(function(e) {
			var t462_curSection = $(this),
					t462_sectionTop = t462_curSection.offset().top,
					t462_id = t462_curSection.attr('id'),
					t462_navLink = t462_sectionIdTonavigationLink[t462_id];
			if (t462_scrollPosition >= (t462_sectionTop - offsetTop) || (t462_sections[0].attr("id") == t462_id && $(window).scrollTop() >= $(document).height() - $(window).height())) {
				if (t462_clickedSectionId == null && !t462_navLink.hasClass('t-active')) {
					t462_navLinks.removeClass('t-active');
					t462_navLink.addClass('t-active');
					t462_valueToReturn = null;
				} else {
					if (t462_clickedSectionId != null && t462_id == t462_clickedSectionId) {
						t462_valueToReturn = null;
					}
				}
				return false;
			}
	});
	return t462_valueToReturn;
}

function t462_setPath(){
}

function t462_setBg(recid){
  var window_width=$(window).width();
  if(window_width>980){
    $(".t462").each(function() {
      var el=$(this);
      if(el.attr('data-bgcolor-setbyscript')=="yes"){
        var bgcolor=el.attr("data-bgcolor-rgba");
        el.css("background-color",bgcolor);
      }
      });
      }else{
        $(".t462").each(function() {
          var el=$(this);
          var bgcolor=el.attr("data-bgcolor-hex");
          el.css("background-color",bgcolor);
          el.attr("data-bgcolor-setbyscript","yes");
      });
  }
}

function t462_appearMenu(recid) {
      var window_width=$(window).width();
      if(window_width>980){
           $(".t462").each(function() {
                  var el=$(this);
                  var appearoffset=el.attr("data-appearoffset");
                  if(appearoffset!=""){
                          if(appearoffset.indexOf('vh') > -1){
                              appearoffset = Math.floor((window.innerHeight * (parseInt(appearoffset) / 100)));
                          }

                          appearoffset=parseInt(appearoffset, 10);

                          if ($(window).scrollTop() >= appearoffset) {
                            if(el.css('visibility') == 'hidden'){
                                el.finish();
                                el.css("top","-50px");
                                el.css("visibility","visible");
                                el.animate({"opacity": "1","top": "0px"}, 200,function() {
                                });
                            }
                          }else{
                            el.stop();
                            el.css("visibility","hidden");
                          }
                  }
           });
      }

}

function t462_changebgopacitymenu(recid) {
  var window_width=$(window).width();
  if(window_width>980){
    $(".t462").each(function() {
      var el=$(this);
      var bgcolor=el.attr("data-bgcolor-rgba");
      var bgcolor_afterscroll=el.attr("data-bgcolor-rgba-afterscroll");
      var bgopacityone=el.attr("data-bgopacity");
      var bgopacitytwo=el.attr("data-bgopacity-two");
      var menushadow=el.attr("data-menushadow");
      if(menushadow=='100'){
        var menushadowvalue=menushadow;
      }else{
        var menushadowvalue='0.'+menushadow;
      }
      if ($(window).scrollTop() > 20) {
        el.css("background-color",bgcolor_afterscroll);
        if(bgopacitytwo=='0' || menushadow==' '){
          el.css("box-shadow","none");
        }else{
          el.css("box-shadow","0px 1px 3px rgba(0,0,0,"+ menushadowvalue +")");
        }
      }else{
        el.css("background-color",bgcolor);
        if(bgopacityone=='0.0' || menushadow==' '){
          el.css("box-shadow","none");
        }else{
          el.css("box-shadow","0px 1px 3px rgba(0,0,0,"+ menushadowvalue +")");
        }
      }
    });
  }
}

function t462_createMobileMenu(recid){
  var window_width=$(window).width(),
      el=$("#rec"+recid),
      menu=el.find(".t462"),
      burger=el.find(".t462__mobile");
  burger.click(function(e){
    menu.fadeToggle(300);
    $(this).toggleClass("t462_opened")
  })
  $(window).bind('resize', t_throttle(function(){
    window_width=$(window).width();
    if(window_width>980){
      menu.fadeIn(0);
    }
  }, 200));
}
 
function t466_highlight(){
  var url=window.location.href;
  var pathname=window.location.pathname;
  if(url.substr(url.length - 1) == "/"){ url = url.slice(0,-1); }
  if(pathname.substr(pathname.length - 1) == "/"){ pathname = pathname.slice(0,-1); }
  if(pathname.charAt(0) == "/"){ pathname = pathname.slice(1); }
  if(pathname == ""){ pathname = "/"; }
  $(".t466__item a[href='"+url+"']").addClass("t-active");
  $(".t466__item a[href='"+url+"/']").addClass("t-active");
  $(".t466__item a[href='"+pathname+"']").addClass("t-active");
  $(".t466__item a[href='/"+pathname+"']").addClass("t-active");
  $(".t466__item a[href='"+pathname+"/']").addClass("t-active");
  $(".t466__item a[href='/"+pathname+"/']").addClass("t-active");
}

function t466_checkAnchorLinks(recid) {
	if($(window).width()>=960) {
	  var t466_navLinks = $("#rec"+recid+" .t466__menu a:not(.tooltipstered)[href*='#']");
      if (t466_navLinks.length>0){
      	t466_catchScroll(t466_navLinks);
      };
	}
}

function t466_catchScroll(t466_navLinks) {
    var t466_clickedSectionId = null,
      t466_sections = new Array(),
      t466_sectionIdTonavigationLink = {},
      t466_interval = 100,
      t466_lastCall,
      t466_timeoutId,
	  t466_offsetTop = $(".t466").attr("data-offset-top");
	if (typeof t466_offsetTop == "undefined") { t466_offsetTop = 0; }
	t466_navLinks = $(t466_navLinks.get().reverse());
	t466_navLinks.each(function(){
		var t466_cursection = t466_getSectionByHref($(this));
		if (typeof t466_cursection.attr("id") != "undefined") { t466_sections.push(t466_cursection); }
		t466_sectionIdTonavigationLink[t466_cursection.attr("id")] = $(this);
	});

	t466_highlightNavLinks(t466_navLinks,t466_sections,t466_sectionIdTonavigationLink,t466_clickedSectionId,t466_offsetTop);
	t466_navLinks.click(function() {		
		if (!$(this).hasClass("tooltipstered")) {
		  t466_navLinks.removeClass('t-active');	
          t466_sectionIdTonavigationLink[t466_getSectionByHref($(this)).attr("id")].addClass('t-active');
          t466_clickedSectionId = t466_getSectionByHref($(this)).attr("id");
		}
  	});
	$(window).scroll( function() {
		var t466_now = new Date().getTime();
		if (t466_lastCall && t466_now < (t466_lastCall + t466_interval) ) {
				clearTimeout(t466_timeoutId);
				t466_timeoutId = setTimeout(function () {
						t466_lastCall = t466_now;
						t466_clickedSectionId = t466_highlightNavLinks(t466_navLinks,t466_sections,t466_sectionIdTonavigationLink,t466_clickedSectionId,t466_offsetTop);
				}, t466_interval - (t466_now - t466_lastCall) );
		} else {
				t466_lastCall = t466_now;
				t466_clickedSectionId = t466_highlightNavLinks(t466_navLinks,t466_sections,t466_sectionIdTonavigationLink,t466_clickedSectionId,t466_offsetTop);
		}
	});
}

function t466_getSectionByHref (curlink) {
	if (curlink.is('[href*="#rec"]')) { return $(".r[id='"+curlink.attr("href").substring(1)+"']"); }
	else { return $(".r[data-record-type='215']").has("a[name='"+curlink.attr("href").substring(1)+"']"); }
}

function t466_highlightNavLinks(t466_navLinks,t466_sections,t466_sectionIdTonavigationLink,t466_clickedSectionId,offsetTop) {	                                                      
	var t466_scrollPosition = $(window).scrollTop(),
		t466_valueToReturn = t466_clickedSectionId;
	$(t466_sections).each(function(e) {
			var t466_curSection = $(this),
					t466_sectionTop = t466_curSection.offset().top,
					t466_id = t466_curSection.attr('id'),
					t466_navLink = t466_sectionIdTonavigationLink[t466_id];
			if (t466_scrollPosition >= (t466_sectionTop - offsetTop) || (t466_sections[0].attr("id") == t466_id && $(window).scrollTop() >= $(document).height() - $(window).height())) {
				if (t466_clickedSectionId == null && !t466_navLink.hasClass('t-active')) {
					t466_navLinks.removeClass('t-active');
					t466_navLink.addClass('t-active');
					t466_valueToReturn = null;
				} else {
					if (t466_clickedSectionId != null && t466_id == t466_clickedSectionId) {
						t466_valueToReturn = null;
					}
				}
				return false;
			}
	});
	return t466_valueToReturn;
}

function t466_initMobileMenu(recid) {
  var window_width=$(window).width();
  var el = $("#rec"+recid);
  if(980>window_width){
    el.find(".t466").each(function() {
      $(this).find(".t466__mobile").css("top", $(this).find(".t466__container__bg_main").innerHeight() + 2);
      $(this).find(".t466__burger, a[href*=#]").click(function(){
        if ($(this).is(".tooltipstered, .t794__tm-link")) { return; }  
        $("body").toggleClass('t466_opened');
        $(this).closest(".t466").find(".t466__mobile").slideToggle(300);
      });
    });
  }
  $('.t466').bind('clickedAnchorInTooltipMenu',function(){    
    $('body').removeClass('t466_opened');
    $(this).closest(".t466").find(".t466__mobile").slideUp(300);
  });  
}

function t466_appearMenu(recid) {
      var window_width=$(window).width();
      var record = $("#rec"+recid);
           record.find(".t466").each(function() {
                  var el=$(this);
                  var appearoffset=el.attr("data-appearoffset");
                  if(appearoffset!=""){
                          if(appearoffset.indexOf('vh') > -1){
                              appearoffset = Math.floor((window.innerHeight * (parseInt(appearoffset) / 100)));
                          }

                          appearoffset=parseInt(appearoffset, 10);

                          if ($(window).scrollTop() >= appearoffset) {
                            if(el.hasClass('t466__beforeready')){
                                el.removeClass('t466__beforeready');
                            }
                          }else{
                            el.addClass('t466__beforeready');
                          }
                  }
           });

}

function t466_changeBgOpacityMenu(recid) {
  var window_width=$(window).width();
  var record = $("#rec"+recid);
  record.find(".t466__container__bg").each(function() {
        var el=$(this);
        var bgcolor=el.attr("data-bgcolor-rgba");
        var bgcolor_afterscroll=el.attr("data-bgcolor-rgba-afterscroll");
        var bgopacity=el.attr("data-bgopacity");
        var bgopacity_afterscroll=el.attr("data-bgopacity2");
        var menu_shadow=el.attr("data-menu-shadow");
        if ($(window).scrollTop() > 20) {
            el.css("background-color",bgcolor_afterscroll);
            if (bgopacity_afterscroll != "0" && bgopacity_afterscroll != "0.0") {
              el.css('box-shadow',menu_shadow);
            } else {
              el.css('box-shadow','none');
            }
        }else{
            el.css("background-color",bgcolor);
            if (bgopacity != "0" && bgopacity != "0.0") {
              el.css('box-shadow',menu_shadow);
            } else {
              el.css('box-shadow','none');
            }
        }
  });
} 
function t477_setHeight(recid) {
  var el=$('#rec'+recid);
  el.find('.t-container').each(function() {
    var highestBox = 0;
    $('.t477__col', this).each(function(){
        if($(this).height() > highestBox)highestBox = $(this).height(); 
    });
    $('.t477__textwrapper',this).css('height', highestBox);
    $('.t477__blockimg',this).css('height', highestBox);
  });
} 
function t478_setHeight(recid) {
  var el=$('#rec'+recid);
  var sizer = el.find('.t478__sizer');
  var height = sizer.height();
  var width = sizer.width();
  var ratio = width/height;
  var imgwrapper = el.find(".t478__blockimg, .t478__textwrapper");
  var imgwidth = imgwrapper.width();
  if (height != $(window).height()) {
    imgwrapper.css({'height':((width/ratio)+'px')});
  }
} 
function t480_setHeight(recid) {
  var el=$('#rec'+recid);
  var sizer = el.find('.t480__sizer');
  var height = sizer.height();
  var width = sizer.width();
  var ratio = width/height;
  var imgwrapper = el.find(".t480__blockimg, .t480__textwrapper");
  var imgwidth = imgwrapper.width();
  if (height != $(window).height()) {
    imgwrapper.css({'height':((imgwidth/ratio)+'px')});
  }
} 
function t481_highlight(){
  var url=window.location.href;
  var pathname=window.location.pathname;
  if(url.substr(url.length - 1) == "/"){ url = url.slice(0,-1); }
  if(pathname.substr(pathname.length - 1) == "/"){ pathname = pathname.slice(0,-1); }
  if(pathname.charAt(0) == "/"){ pathname = pathname.slice(1); }
  if(pathname == ""){ pathname = "/"; }
  $(".t481__list_item a[href='"+url+"']").addClass("t-active");
  $(".t481__list_item a[href='"+url+"/']").addClass("t-active");
  $(".t481__list_item a[href='"+pathname+"']").addClass("t-active");
  $(".t481__list_item a[href='/"+pathname+"']").addClass("t-active");
  $(".t481__list_item a[href='"+pathname+"/']").addClass("t-active");
  $(".t481__list_item a[href='/"+pathname+"/']").addClass("t-active");
}

function t481_checkAnchorLinks(recid) {
	if($(window).width()>=960) {
	  var t481_navLinks = $("#rec"+recid+" .t481__list_item a:not(.tooltipstered)[href*='#']");
      if (t481_navLinks.length>0){
      	t481_catchScroll(t481_navLinks);
      };
	}
}

function t481_catchScroll(t481_navLinks) {
    var t481_clickedSectionId = null,
      t481_sections = new Array(),
      t481_sectionIdTonavigationLink = {},
      t481_interval = 100,
      t481_lastCall,
      t481_timeoutId,
	  t481_offsetTop = $(".t270").attr("data-offset-top");
	if (typeof t481_offsetTop == "undefined") { t481_offsetTop = 0; }
	t481_navLinks = $(t481_navLinks.get().reverse());
	t481_navLinks.each(function(){
		var t481_cursection = t481_getSectionByHref($(this));
		if (typeof t481_cursection.attr("id") != "undefined") { t481_sections.push(t481_cursection); }
		t481_sectionIdTonavigationLink[t481_cursection.attr("id")] = $(this);
	});

	t481_highlightNavLinks(t481_navLinks,t481_sections,t481_sectionIdTonavigationLink,t481_clickedSectionId,t481_offsetTop);
	t481_navLinks.click(function() {		
		if (!$(this).hasClass("tooltipstered")) {
		  t481_navLinks.removeClass('t-active');	
          t481_sectionIdTonavigationLink[t481_getSectionByHref($(this)).attr("id")].addClass('t-active');
          t481_clickedSectionId = t481_getSectionByHref($(this)).attr("id");
		}
  	});
	$(window).scroll( function() {
		var t481_now = new Date().getTime();
		if (t481_lastCall && t481_now < (t481_lastCall + t481_interval) ) {
				clearTimeout(t481_timeoutId);
				t481_timeoutId = setTimeout(function () {
						t481_lastCall = t481_now;
						t481_clickedSectionId = t481_highlightNavLinks(t481_navLinks,t481_sections,t481_sectionIdTonavigationLink,t481_clickedSectionId,t481_offsetTop);
				}, t481_interval - (t481_now - t481_lastCall) );
		} else {
				t481_lastCall = t481_now;
				t481_clickedSectionId = t481_highlightNavLinks(t481_navLinks,t481_sections,t481_sectionIdTonavigationLink,t481_clickedSectionId,t481_offsetTop);
		}
	});
}

function t481_getSectionByHref (curlink) {
	if (curlink.is('[href*="#rec"]')) { return $(".r[id='"+curlink.attr("href").substring(1)+"']"); }
	else { return $(".r[data-record-type='215']").has("a[name='"+curlink.attr("href").substring(1)+"']"); }
}

function t481_highlightNavLinks(t481_navLinks,t481_sections,t481_sectionIdTonavigationLink,t481_clickedSectionId,offsetTop) {	                                                      
	var t481_scrollPosition = $(window).scrollTop(),
		t481_valueToReturn = t481_clickedSectionId;
	$(t481_sections).each(function(e) {
			var t481_curSection = $(this),
					t481_sectionTop = t481_curSection.offset().top,
					t481_id = t481_curSection.attr('id'),
					t481_navLink = t481_sectionIdTonavigationLink[t481_id];                                                 			                                                      
			if (t481_scrollPosition >= (t481_sectionTop - offsetTop) || (t481_sections[0].attr("id") == t481_id && $(window).scrollTop() >= $(document).height() - $(window).height())) {
				if (t481_clickedSectionId == null && !t481_navLink.hasClass('t-active')) {
					t481_navLinks.removeClass('t-active');
					t481_navLink.addClass('t-active');					
					t481_valueToReturn = null;
				} else {
					if (t481_clickedSectionId != null && t481_id == t481_clickedSectionId) {
						t481_valueToReturn = null;
					}
				}
				return false;
			}
	});
	return t481_valueToReturn;
}

function t481_setPath(){
}

function t481_setWidth(recid){
  var window_width=$(window).width();
  if(window_width>980){
    $(".t481").each(function() {
      var el=$(this);
      var left_exist=el.find('.t481__leftcontainer').length;
      var left_w=el.find('.t481__leftcontainer').outerWidth(true);
      var max_w=left_w;
      var right_exist=el.find('.t481__rightcontainer').length;
      var right_w=el.find('.t481__rightcontainer').outerWidth(true);
    var items_align=el.attr('data-menu-items-align');
      if(left_w<right_w)max_w=right_w;
      max_w=Math.ceil(max_w);
      var center_w=0;
      el.find('.t481__centercontainer').find('li').each(function() {
        center_w+=$(this).outerWidth(true);
      });
      //console.log(max_w);
      //console.log(center_w);
      var padd_w=40;
      var maincontainer_width=el.find(".t481__maincontainer").outerWidth(true);
      if(maincontainer_width-max_w*2-padd_w*2>center_w+20){
          //if(left_exist>0 && right_exist>0){
      if(items_align=="center" || typeof items_align==="undefined"){
            el.find(".t481__leftside").css("min-width",max_w+"px");
            el.find(".t481__rightside").css("min-width",max_w+"px");
            
          }
       }else{
          el.find(".t481__leftside").css("min-width","");
          el.find(".t481__rightside").css("min-width","");  
          
      }
    });
  }
}

function t481_setBg(recid){
  var window_width=$(window).width();
  if(window_width>980){
    $(".t481").each(function() {
      var el=$(this);
      if(el.attr('data-bgcolor-setbyscript')=="yes"){
        var bgcolor=el.attr("data-bgcolor-rgba");
        el.css("background-color",bgcolor);             
      }
      });
      }else{
        $(".t481").each(function() {
          var el=$(this);
          var bgcolor=el.attr("data-bgcolor-hex");
          el.css("background-color",bgcolor);
          el.attr("data-bgcolor-setbyscript","yes");
      });
  }
}

function t481_appearMenu(recid) {
      var window_width=$(window).width();
      if(window_width>980){
           $(".t481").each(function() {
                  var el=$(this);
                  var appearoffset=el.attr("data-appearoffset");
                  if(appearoffset!=""){
                          if(appearoffset.indexOf('vh') > -1){
                              appearoffset = Math.floor((window.innerHeight * (parseInt(appearoffset) / 100)));
                          }

                          appearoffset=parseInt(appearoffset, 10);

                          if ($(window).scrollTop() >= appearoffset) {
                            if(el.css('visibility') == 'hidden'){
                                el.finish();
                                el.css("visibility","visible");
                                el.animate({"opacity": "1"}, 200,function() {
                                });       
                            }
                          }else{
                            el.stop();
                            el.animate({"opacity": "0"}, 200,function() {
                            });
                            el.css("visibility","hidden");
                          }
                  }
           });
      }

}

function t481_changebgopacitymenu(recid) {
  var window_width=$(window).width();
  if(window_width>980){
    $(".t481").each(function() {
      var el=$(this);
      var bgcolor=el.attr("data-bgcolor-rgba");
      var bgcolor_afterscroll=el.attr("data-bgcolor-rgba-afterscroll");
      var bgopacityone=el.attr("data-bgopacity");
      var bgopacitytwo=el.attr("data-bgopacity-two");
      var menushadow=el.attr("data-menushadow");
      if(menushadow=='100'){
        var menushadowvalue=menushadow;
      }else{
        var menushadowvalue='0.'+menushadow;
      }
      if ($(window).scrollTop() > 20) {
        el.css("background-color",bgcolor_afterscroll);
        if(bgopacitytwo=='0' || menushadow==' '){
          el.css("box-shadow","none");
        }else{
          el.css("box-shadow","0px 1px 3px rgba(0,0,0,"+ menushadowvalue +")");
        }
      }else{
        el.css("background-color",bgcolor);
        if(bgopacityone=='0.0' || menushadow==' '){
          el.css("box-shadow","none");
        }else{
          el.css("box-shadow","0px 1px 3px rgba(0,0,0,"+ menushadowvalue +")");
        }
      }
    });
  }
}

function t481_createMobileMenu(recid){
  var window_width=$(window).width(),
      el=$("#rec"+recid),
      menu=el.find(".t481"),
      burger=el.find(".t481__mobile");
  burger.click(function(e){
    menu.fadeToggle(300);
    $(this).toggleClass("t481_opened")
  })
  $(window).bind('resize', t_throttle(function(){
    window_width=$(window).width();
    if(window_width>980){
      menu.fadeIn(0);
    }
  }, 200));
}

 
function t486_setHeight(recid) {
  var el=$('#rec'+recid);
  var window_width=$(window).width();
  if(window_width>980){
    el.find('.t486__blockimg').css('height', el.find('.t486__blockimg').innerWidth());
    var textwrapper = el.find('.t486__textwrapper');
    var blockimg = el.find('.t486__imgcontainer');
    textwrapper.css('height', blockimg.innerHeight());

    
  } else {
    el.find('.t486__blockimg').css('height', el.find('.t486__blockimg').width());
    el.find('.t486__textwrapper').css('height', 'auto'); 
  }
} 
function t498_unifyHeights(recid) {
    $('#rec'+recid+' .t498 .t-container').each(function() {
        var t498__highestBox = 0;
        $('.t498__col', this).each(function(){
			var t498__curcol=$(this);
			var t498__curcolchild=t498__curcol.find('.t498__col-wrapper');
			if(t498__curcol.height() < t498__curcolchild.height())t498__curcol.height(t498__curcolchild.height());
            if(t498__curcol.height() > t498__highestBox)t498__highestBox = t498__curcol.height();
        });
        if($(window).width()>=960){
        	$('.t498__col',this).css('height', t498__highestBox);
        }else{
	        $('.t498__col',this).css('height', "auto");
        }
    });
};
 
function t504_unifyHeights(recid) {
    $('#rec'+recid+' .t504 .t-container').each(function() {
        var t504__highestBox = 0;
        $('.t504__col', this).each(function(){
			var t504__curcol=$(this);
			var t504__curcolchild=t504__curcol.find('.t504__col-wrapper');
			if(t504__curcol.height() < t504__curcolchild.height())t504__curcol.height(t504__curcolchild.height());
            if(t504__curcol.height() > t504__highestBox)t504__highestBox = t504__curcol.height();
        });
        if($(window).width()>=960){
        	$('.t504__col',this).css('height', t504__highestBox);
        }else{
	        $('.t504__col',this).css('height', "auto");
        }
    });
};
 
function t505__createPieChart(recid,data1,data2,data3,data4,sectorcolor,piebgcolor,bgcolor,blocksnumber,diagramwidth,diameter) {
	if(diameter>300 || diameter=="" || diameter<100) {
		if(diameter=="") {var t505__radius = 100; diameter = 200;}
		if(diameter>300) {var t505__radius = 150; diameter = 300;}
        if(diameter<100) {var t505__radius = 50; diameter = 100;}
	} else {
		var t505__radius = diameter/2;
	}

	if(diagramwidth=="") { diagramwidth = 10;}
    if(diagramwidth>t505__radius) { diagramwidth = 10;}
	if(diagramwidth<1) { diagramwidth = 1;}

	//check Retina
	if(window.devicePixelRatio >= 2) {
		var t505__oldsize = diameter;
        t505__radius = t505__radius*2;
		diameter = diameter*2;
		diagramwidth = diagramwidth*2;
	}

	//border id drawing at the edge of circle, so we need correct the radius to fin into canvas
	var t505__correction = +diagramwidth/2;

    var t505__dataarray = [data1,data2,data3,data4];
    for (var i=0; i<4; i++) {
        if (t505__dataarray[i]!="" && blocksnumber>i) {
            var t505__canvas = document.querySelector('#rec'+recid+' .t505__pie'+(i+1));
			t505__canvas.setAttribute("width", diameter);
			t505__canvas.setAttribute("height", diameter);
            var t505__context = t505__canvas.getContext("2d");
			if(window.devicePixelRatio >= 2) {
				t505__canvas.style.width = t505__oldsize + "px";
				t505__canvas.style.height = t505__oldsize + "px";
			}
			for (var j = 0; j < 2; j++) {
				if(j==1 && t505__dataarray[i]==0) {continue;}
				//0 - bg, 1 - percent sector
                if (j==0) {
					t505__context.strokeStyle = piebgcolor;
					var t505__angle = Math.PI*2;
					t505__context.lineWidth = diagramwidth-1;
                } else {
                    t505__context.strokeStyle = sectorcolor;
					var t505__angle = Math.PI*2*(t505__dataarray[i]/100);
					t505__context.lineWidth = diagramwidth;
				}
                t505__context.beginPath();
				t505__context.lineCap="round";
				t505__context.moveTo(diameter-t505__correction,t505__radius);
				t505__context.arc(t505__radius, t505__radius, t505__radius-t505__correction, 0, t505__angle, false);
				t505__context.stroke();
			}
		}
	}
}
 
function t509_setHeight(recid) {  
  var t509__el=$("#rec"+recid);	
  var t509__image = t509__el.find(".t509__blockimg");
  t509__image.each(function() {
    var t509__width = $(this).attr("data-image-width");
    var t509__height = $(this).attr("data-image-height");	
    var t509__ratio = t509__height/t509__width;
    var t509__padding = t509__ratio*100;    	
    $(this).css("padding-bottom",t509__padding+"%");		
  });
  
  if ($(window).width()>960){
    var t509__textwr = t509__el.find(".t509__textwrapper");
    var t509__deskimg = t509__el.find(".t509__desktopimg");
    t509__textwr.each(function() {    
    $(this).css("height", t509__deskimg.innerHeight());	
    });
  }
}
 
function t517_unifyHeights(recid) {
if($(window).width()>=960){
	$('#rec'+recid+' .t517 .t-container .t517__row').each(function() {
		var t517__highestBox = 0;
		var t517__currow = $(this);
		$('.t517__col', this).each(function(){
			var t517__curcol = $(this);			
			var t517__curcolinfo=t517__curcol.find('.t517__sectioninfowrapper');			
			var t517__curcolpers=t517__curcol.find('.t517__personwrapper');
			var t517__curcolinnerheight = t517__curcolinfo.outerHeight() + t517__curcolpers.outerHeight();						
			if(t517__curcolinnerheight > t517__highestBox){t517__highestBox = t517__curcolinnerheight;}
		});
		$('.t517__col',this).css('height', t517__highestBox);
	});
}
};
 
function t518_unifyColHeadersHeights(recid) {
if($(window).width()>=960){
	var t518__highestBox = 0;
	$('#rec'+recid+' .t518 .t-container .t518__col-header').each(function() {
		var t518__curcolheader = $(this);
		var t518__curcolheaderinner = t518__curcolheader.find('.t518__col-header-inner');
		var t518__curcolinnerheight = t518__curcolheaderinner.outerHeight();
		if(t518__curcolinnerheight > t518__highestBox)t518__highestBox = t518__curcolinnerheight;
	});
	$('#rec'+recid+' .t518__col-header').css('height', t518__highestBox);
}
};

function t518_unifyColItems(recid,prefixwidth) {
//if prefixwidth>400, there is just one column or block is empty
	if($(window).width()>=960 && prefixwidth!=400){
	  var t518__colsitems = new Array();
	  var t518__minitemsnumber = 0;
	  for (var i=0; i<3; i++){
	    var t518__curcolitems = document.querySelectorAll('#rec'+recid+' .t518__col_'+(i+1)+' .t518__item');
	    if(typeof t518__curcolitems!="undefined" && t518__curcolitems!=null && t518__curcolitems.length > 0){t518__colsitems.push(t518__curcolitems);}
	    if(t518__curcolitems.length>0 && ((t518__curcolitems.length<t518__minitemsnumber) || (t518__minitemsnumber==0)))
			{t518__minitemsnumber=t518__curcolitems.length;}
	  }                                                                                       
	  //unifying items heights
	  for (var i=0; i<t518__minitemsnumber; i++){
	    var t518__maxrowheight = 0;
	    for (var j=0; j<t518__colsitems.length; j++){
	      var t518__curiteminfo=t518__colsitems[j][i].querySelector('.t518__sectioninfowrapper');
	      var t518__curitempers=t518__colsitems[j][i].querySelector('.t518__personwrapper');
	      var t518__curiteminnerheight = 0;
				if (typeof t518__curiteminfo!="undefined" && t518__curiteminfo!=null) {t518__curiteminnerheight+=t518__curiteminfo.offsetHeight;}
				if (typeof t518__curitempers!="undefined" && t518__curitempers!=null) {t518__curiteminnerheight+=t518__curitempers.offsetHeight;}
	      if (t518__curiteminnerheight>t518__maxrowheight){
	        t518__maxrowheight = t518__curiteminnerheight;
	      }
	    }
	    for (var j=0; j<t518__colsitems.length; j++){
	      if (typeof t518__colsitems[j][i]!="undefined" && t518__colsitems[j][i]!=null){t518__colsitems[j][i].style.height = t518__maxrowheight+"px";}
		  var t518__personwr = t518__colsitems[j][i].querySelector('.t518__personwrapper');
		  if (typeof t518__personwr!="undefined" && t518__personwr!=null){t518__personwr.style.position = "absolute";}
	    }
	  }
	}
};
 
function t527_setHeight(recid) {
  var t527__el=$("#rec"+recid),
      t527__image = t527__el.find(".t527__bgimg:first"),
      t527__width = t527__image.attr("data-image-width"),
      t527__height = t527__image.attr("data-image-height"),
      t527__ratio = t527__height/t527__width,
      t527__padding = t527__ratio*100;	  
  $("#rec"+recid+" .t527__bgimg").css("padding-bottom",t527__padding+"%");  
} 
function t531_setHeight(recid) {
  var t531__el=$("#rec"+recid),
      t531__image = t531__el.find(".t531__blockimg"),
      t531__width = t531__image.attr("data-image-width"),
      t531__height = t531__image.attr("data-image-height"),
      t531__ratio = t531__height/t531__width,
      t531__padding = t531__ratio*100;
  $("#rec"+recid+" .t531__blockimg").css("padding-bottom",t531__padding+"%");

  if ($(window).width()>480){
    var t531__textwr = t531__el.find(".t531__textwrapper");
    var t531__deskimg = t531__el.find(".t531__imgwrapper");
    t531__textwr.each(function() {
    $(this).css("height", t531__deskimg.innerHeight());
    });
  }
}
 
function t532__emulateMobileHover(recid) {
  var el = $('#rec'+recid),
      cell = el.find('.t532__cell');

  cell.hover(
    function () {
      $(this).addClass("t532__cell_hover");
    },
    function () {
      $(this).removeClass("t532__cell_hover");
    }
  );
}

function t532_setHeight(recid) {  
  var t532__el=$("#rec"+recid),
			t532__image = t532__el.find(".t532__bg:first"),
			t532__wrapper = t532__el.find(".t532__table:first"),
			t532__width = t532__image.attr("data-image-width"),
			t532__height = t532__image.attr("data-image-height"),
			t532__ratio = t532__height/t532__width;		
	$("#rec"+recid+" .t532__table").css("height",t532__wrapper.innerWidth()*t532__ratio);			    
}
 
function t533_equalHeight(recid){
  var el = $('#rec'+recid);
  el.find('.t533').css('visibility', 'visible');
  el.find('.t533__textwrapper').css('height','auto');
  $('#rec'+recid+' .t533__row').each(function() {
    var highestBox = 0;
    $('.t533__textwrapper', this).each(function(){
      if($(this).height() > highestBox)highestBox = $(this).height(); 
    });  
    if($(window).width()>=960 && $(this).is(':visible')){
      $('.t533__textwrapper',this).css('height', highestBox); 
    }else{
      $('.t533__textwrapper',this).css('height', "auto");    
    }
  });
}; 
function t534_setWidth(recid){
  var el = $('#rec'+recid),
      topsection = el.find('.t534__topsection'),
      slidewidth = el.find('.t-slides__container').width();
  topsection.css('max-width', slidewidth);
} 
function t536_setWidth(recid){
  var el = $('#rec'+recid),
      topsection = el.find('.t536__topsection'),
      slidewidth = el.find('.t-slides__container').width();
  topsection.css('max-width', slidewidth);
} 
function t537_setHeight(recid) {
  var t537__el=$("#rec"+recid),
      t537__image = t537__el.find(".t537__bgimg:first"),
      t537__width = t537__image.attr("data-image-width"),
      t537__height = t537__image.attr("data-image-height"),
      t537__ratio = t537__height/t537__width,
      t537__padding = t537__ratio*100;	  
  $("#rec"+recid+" .t537__bgimg").css("padding-bottom",t537__padding+"%");  
} 
function t538_setWidth(recid){
  var el = $('#rec'+recid),
      topsection = el.find('.t538__topsection'),
      slidewidth = el.find('.t-slides__container').width();
  topsection.css('max-width', slidewidth);
} 
function t539_equalHeight(recid,blocks){
  if(blocks=='' || parseInt(blocks)==0) {
    return false;
  }
  var t539__el = $('#rec'+recid),
      t539__cols = t539__el.find(".t539__textwrapper");
	t539__cols.css("height","auto");
	if($(window).width()<=480){                                                
      t539__el.find('.t539').css('visibility', 'visible');
      return;                                                     
    }
	if ($(window).width()<=960) {var t539__perRow = 2;}
	else {var t539__perRow = +blocks;}
	for( var i = 0; i < t539__cols.length; i +=t539__perRow )
	{
		var t539__maxHeight = 0,
				t539__row = t539__cols.slice(i, i + t539__perRow);
		t539__row.each(function(){
			var t539__itemHeight = $(this).outerHeight();
			if ( t539__itemHeight > t539__maxHeight ) { t539__maxHeight = t539__itemHeight; }
		});
		t539__row.css( "height", t539__maxHeight );
	}
  t539__el.find('.t539').css('visibility', 'visible');
};

function t539_setHeight(recid) {
  var t539__el=$("#rec"+recid),
      t539__image = t539__el.find(".t539__bgimg:first"),
      t539__width = t539__image.attr("data-image-width"),
      t539__height = t539__image.attr("data-image-height"),
      t539__ratio = t539__height/t539__width,
      t539__padding = t539__ratio*100;	  
  $("#rec"+recid+" .t539__bgimg").css("padding-bottom",t539__padding+"%");  
}

 
function t544_setHeight(recid) {
  var el=$('#rec'+recid);
  var sizer = el.find('.t544__sizer');
  var height = sizer.height();
  var width = sizer.width();
  var ratio = width/height;
  var imgwrapper = el.find(".t544__blockimg, .t544__textwrapper");
  var imgwidth = imgwrapper.width();
  if (height != $(window).height()) {
    imgwrapper.css({'height':((imgwidth/ratio)+'px')});
  }
} 
function t545_setHeight(recid) {
  var el=$('#rec'+recid);
  var t545_height = el.find('.t-container').attr("data-height");
  el.find('.t-container').each(function() {
    var highestBox = 0;
    $('.t545__col', this).each(function(){
        if($(this).height() > highestBox){highestBox = $(this).height();} 
    });
	if(t545_height > highestBox){highestBox = t545_height;}
    $('.t545__textwrapper',this).css('height', highestBox);
    $('.t545__blockimg',this).css('height', highestBox);
  });
} 
function t552_init(recid,ratio){	
  var t552__el=$("#rec"+recid),
      t552__image = t552__el.find(".t552__blockimg:first");    

  t552__setHeight(recid,t552__image,ratio);
  var t552__doResize;
  $(window).resize(function(){
    clearTimeout(t552__doResize);
    t552__doResize = setTimeout(function() {
    	t552__setHeight(recid,t552__image,ratio);
    }, 200);
  });
}

function t552__setHeight(recid,image,ratio){  
  $("#rec"+recid+" .t552__blockimg").css("height",Math.round(image.innerWidth()*ratio));    	    
} 
function t557_init(recid,snowtype){
	$('<img/>').attr('src', 'https://static.tildacdn.com/img/snowflakes_1.png').load(function() {$(this).remove();});
	$('<img/>').attr('src', 'https://static.tildacdn.com/img/snowflakes_2.png').load(function() {$(this).remove();});
	$('<img/>').attr('src', 'https://static.tildacdn.com/img/snowflakes_3.png').load(function() {
		$(this).remove();
		t557__addSnow(recid,snowtype);
	});
}

function t557__addSnow(recid,snowtype){
  	var el=$('#rec'+recid),
  		t557_ids=el.find('.t557__snow-recid-holder').attr('data-snow-rec-ids').split(',');
	if (t557_ids!=""){
        t557_ids.forEach(function(rec_id, i, arr){
						var t557_zeroattr=$('#rec'+rec_id).attr('data-record-type');						
						if(t557_zeroattr==396){
							var t557_wrappertype=" .t396__artboard";						
						}else{							
							var t557_wrappertype=" .t-cover";						
						}
						var t557_cover=document.querySelector('#rec'+rec_id+t557_wrappertype);
						if (t557_cover!=null){
								var t557_snow = document.createElement('div');
								t557_snow.className = snowtype;
								t557_cover.appendChild(t557_snow);	
						}            
        });
	} else {
		t557_cover=$('.t-cover').first();
		var t557_snow = document.createElement('div');
		t557_snow.className = snowtype;
        t557_cover.append(t557_snow);
	}
	$('.'+snowtype).animate({"opacity": "1"}, 1000, function() {});
}
 
function t569_init(recid){
  var el = $('#rec'+recid),
      line = el.find('.t569__line'),
      blocksnumber = el.find('.t569').attr('data-blocks-count'),
      t569_resize;

  if (blocksnumber=='4') {
    var cirqlenumber = 4;
  } else {
    var cirqlenumber = 8;
  }

  line.each(function() {
    var e = $(this).find('.t569__cirqle');
    for (i = 0; i < cirqlenumber; i++) {
      e.clone().insertAfter(e);
    }
  });
                      
  line.css('max-width', $('.t569__col').width() - $('.t569__bgimg').outerWidth());
                                 
  $(window).resize(function() {
    if (t569_resize) clearTimeout(t569_resize);
    t569_resize = setTimeout(function() {
      line.css('max-width', $('.t569__col').width() - $('.t569__bgimg').outerWidth());
    }, 200);        
  });
} 
function t570_init(recid){
if($(window).width()>750){
  t570_setMapHeight(recid);

  $(window).load(function() {
      t570_setMapHeight(recid);
  });

  $(window).resize(function(){
    t570_setMapHeight(recid);
  });
}
}

function t570_setMapHeight(recid) {
  var t570__el=$('#rec'+recid),
  	  t570__map = t570__el.find('.t-map');
  var t570__textwrapper = t570__el.find('.t570__col_text').height();
  t570__map.css('height', t570__textwrapper).trigger('sizechange');
} 
function t576_init(recid){
  var el = $('#rec'+recid),
      line = el.find('.t576__line'),
      cirqle = el.find('.t576__cicqle'),
      block = el.find('.t576__item'),
      t576_resize;

  block.each(function() {
    $(this).find('.t576__circle').css('top', $(this).find('.t576__img').outerHeight() + 15);
  });

  el.find('.t576__item:first-child').find('.t576__line').css('top', el.find('.t576__item:first-child').find('.t576__img').outerHeight() + 15);
                      
  el.find('.t576__item:last-child').find('.t576__line').css('height', el.find('.t576__item:last-child').find('.t576__img').outerHeight() + 20);
} 
function t577_equalHeight(recid){
  var el = $('#rec'+recid);
  el.find('.t577').css('visibility', 'visible');
  el.find('.t577__textwrapper').css('height','auto');
  el.find('.t577__descr').css('height','auto');
  $('#rec'+recid+' .t577__row').each(function() {
    var highestBox = 0;
    $('.t577__descr', this).each(function(){
      if($(this).height() > highestBox)highestBox = $(this).height(); 
    });  
    if($(window).width()>=960 && $(this).is(':visible')){
      $('.t577__descr',this).css('height', highestBox); 
    }else{
      $('.t577__descr',this).css('height', "auto");    
    }
  });
  $('#rec'+recid+' .t577__row').each(function() {
    var highestBox = 0;
    $('.t577__textwrapper', this).each(function(){
      if($(this).height() > highestBox)highestBox = $(this).height(); 
    });  
    if($(window).width()>=960 && $(this).is(':visible')){
      $('.t577__textwrapper',this).css('height', highestBox); 
    }else{
      $('.t577__textwrapper',this).css('height', "auto");    
    }
  });
}; 
function t582_init(recid){
    $(document).ready(function() {
      var t582__showMenu;
      $(window).bind('scroll', t_throttle(function(){
        clearTimeout(t582__showMenu);
        t582__showMenu = setTimeout(function() {t582_appearMenu(recid);}, 50);
      }, 200));
      $('.t582').removeClass('t582__beforeready');
      t582_appearMenu(recid);
    });
}

function t582_appearMenu(recid) {
  $(".t582").each(function() {
    var el=$(this),
        appearoffset=el.attr("data-appearoffset"),
        window_width=$(window).width(),
				window_scrollTop=$(window).scrollTop(),
				window_height=$(window).height();
    if(window_width<=980 && appearoffset!=""){appearoffset="150";}
		if(appearoffset==""){appearoffset="0";}
    if(appearoffset.indexOf('vh') > -1){ appearoffset = Math.floor((window_height * (parseInt(appearoffset) / 100))); }
		appearoffset=parseInt(appearoffset, 10);

    if (window_scrollTop >= appearoffset && window_scrollTop+window_height+70 <= $(document).height()) {
      if(el.css('visibility') == 'hidden'){
          el.finish();
          el.css("bottom","-100px");
          el.css("visibility","visible");
          el.animate({"opacity": "1","bottom": "0"}, 400,function() {
          });
      }
    }else{
      el.stop();
      el.css("visibility","hidden");
        el.css("opacity","0");
    }
  });
}
 
function t585_init(recid){
  var el= $('#rec'+recid),
      toggler = el.find(".t585__header");
  
  toggler.click(function(){
    $(this).toggleClass("t585__opened");
    $(this).next().slideToggle();
    if(window.lazy=='y'){t_lazyload_update();}
  });
}
 
function t590_init(recid,height){	
  t590__setHeight(recid,height);  

  var t590__doResize;
  $(window).resize(function(){
    clearTimeout(t590__doResize);
    t590__doResize = setTimeout(function() {
    	t590__setHeight(recid);
    }, 200);
  });
}

function t590__setHeight(recid,height) {      
  if (height=="" || typeof height=="undefined"){
  var t590__el=$("#rec"+recid),
      t590__div=t590__el.find("#youtubeiframe"+recid),
      t590__height=t590__div.width() * 0.5625;
  t590__div.height(t590__height);
  t590__div.parent().height(t590__height);         
  }  
} 
function t592_init(recid){
  var element = $('#rec'+recid).find('.t592__descr');

  var highestBox = 0;

  element.css('height','');

  element.each(function(){
    if($(this).height() > highestBox)highestBox = $(this).height(); 
  });

  if($(window).width()>=960){
      element.css('height', highestBox); 
  }else{
     element.css('height', '');    
  }
}; 
function t598_init(recid){
  var el = $('#rec'+recid);

  if (el.find('.t598__title').length) {
    t598_equalHeight(el.find('.t598__title'));
  }
  if (el.find('.t598__descr').length) {
    t598_equalHeight(el.find('.t598__descr'));
  }
  if (el.find('.t598__price').length) {
    t598_equalHeight(el.find('.t598__price'));
  }
  if (el.find('.t598__imgwrapper').length) {
    t598_equalHeight(el.find('.t598__imgwrapper'));
    $(window).load(function() {
       t598_equalHeight(el.find('.t598__imgwrapper'));
    });
  }
};

function t598_equalHeight(element) {
  var highestBox = 0;

  element.css('height','');

  element.each(function(){
    if($(this).height() > highestBox)highestBox = $(this).height(); 
  });

  if($(window).width()>=960){
      element.css('height', highestBox); 
  }else{
     element.css('height', '');    
  }
} 
function t599_init(recid){
  var el = $('#rec'+recid);

  if (el.find('.t599__title').length) {
    t599_equalHeight(el.find('.t599__title'));
  }
  if (el.find('.t599__descr').length) {
    t599_equalHeight(el.find('.t599__descr'));
  }
  if (el.find('.t599__price').length) {
    t599_equalHeight(el.find('.t599__price'));
  }
  if (el.find('.t599__subtitle').length) {
    t599_equalHeight(el.find('.t599__subtitle'));
  }
};

function t599_equalHeight(element) {
  var highestBox = 0;

  element.css('height','');

  element.each(function(){
    if($(this).height() > highestBox)highestBox = $(this).height(); 
  });

  if($(window).width()>=960){
      element.css('height', highestBox); 
  }else{
     element.css('height', '');    
  }
} 
function t601_init(recid) {
  var el=$('#rec'+recid);
  var slide1=el.find('[data-slide-index=1]');
  var imagesSlide1=slide1.find('.t601__img');
  imagesSlide1.on('load',function() {
    if ($(this).parents('.t-slides__item[data-slide-index=1]').length==0){ return; }
    t_slides_setSliderHeight(recid);
  });
} 
function t602_init(recid){
	var t602_lastCall,
			t602_timeoutId,
			t602_interval = 100;
	$(window).scroll( function() {
		var t602_now = new Date().getTime();
		if (t602_lastCall && t602_now < (t602_lastCall + t602_interval) ) {
				clearTimeout(t602_timeoutId);
				t602_timeoutId = setTimeout(function () {
						t602_lastCall = t602_now;
						t602_setProgressBarWidth(recid);
				}, t602_interval - (t602_now - t602_lastCall) );
		} else {
				t602_lastCall = t602_now;
				t602_setProgressBarWidth(recid);
		}
	});
}


function t602_setProgressBarWidth(recid) {
	var t602_windowScrollTop = $(window).scrollTop(),
			t602_docHeight = $(document).height(),
			t602_winHeight = $(window).height();
			t602_scrollPercent = (t602_windowScrollTop / (t602_docHeight-t602_winHeight)) * 100;
	$(".t602__indicator").css('width', t602_scrollPercent + '%');
}
 
function t604_init(recid) {  
  t604_imageHeight(recid);
  t604_arrowWidth(recid);
  t604_show(recid);
  t604_hide(recid);
  $(window).bind('resize', t_throttle(function(){
    t604_arrowWidth(recid);
  }, 200));
}

function t604_show(recid) {  
  var el=$("#rec"+recid),
      play = el.find('.t604__play');
  play.click(function(){
    if($(this).attr('data-slider-video-type')=='youtube'){
      var url = $(this).attr('data-slider-video-url');
      $(this).next().html("<iframe class=\"t604__iframe\" width=\"100%\" height=\"100%\" src=\"https://www.youtube.com/embed/"+url+"?autoplay=1\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>");
    }
    if($(this).attr('data-slider-video-type')=='vimeo'){
      var url = $(this).attr('data-slider-video-url');
      $(this).next().html("<iframe class=\"t604__iframe\" width=\"100%\" height=\"100%\" src=\"https://player.vimeo.com/video/"+url+"?autoplay=1\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>");
    }
    $(this).next().css('z-index', '3');
  });
}

function t604_hide(recid) {  
  var el=$("#rec"+recid),
      body = el.find('.t604__frame');
  el.on('updateSlider', function(){
    body.html('').css('z-index', '');
  });
}

function t604_imageHeight(recid) {  
  var el=$("#rec"+recid); 
  var image = el.find(".t604__separator");
  image.each(function() {
    var width = $(this).attr("data-slider-image-width");
    var height = $(this).attr("data-slider-image-height"); 
    var ratio = height/width;
    var padding = ratio*100;      
    $(this).css("padding-bottom",padding+"%");    
  });
}

function t604_arrowWidth(recid) {  
  var el=$("#rec"+recid),
      arrow = el.find('.t-slds__arrow_wrapper'),
      slideWidth = el.find('.t-slds__wrapper').width(),
      windowWidth = $(window).width(),
      arrowWidth = windowWidth-slideWidth;
  if(windowWidth>960){
    arrow.css('width', arrowWidth/2);
  } else {
    arrow.css('width', '');
  }
} 
function t607_init(recid) {
	t607_checkAnchorLinks(recid);
}


function t607_checkAnchorLinks(recid) {
	if($(window).width()>=960) {
	  var t607_navLinks = $("#rec"+recid+" .t607__list_item a:not(.tooltipstered)[href*='#']");
      if (t607_navLinks.length>0){
      	t607_catchScroll(t607_navLinks);
      };
	}
}


function t607_catchScroll(t607_navLinks) {
    var t607_clickedSectionId = null,
      t607_sections = new Array(),
      t607_sectionIdTonavigationLink = {},
      t607_interval = 100,
      t607_lastCall,
      t607_timeoutId;
	t607_navLinks = $(t607_navLinks.get().reverse());
	t607_navLinks.each(function(){
		var t607_cursection = t607_getSectionByHref($(this));
		if (typeof t607_cursection.attr("id") != "undefined") { t607_sections.push(t607_cursection); }
		t607_sectionIdTonavigationLink[t607_cursection.attr("id")] = $(this);
	});
	t607_highlightNavLinks(t607_navLinks,t607_sections,t607_sectionIdTonavigationLink,t607_clickedSectionId);
	setTimeout(function() { t607_highlightNavLinks(t607_navLinks,t607_sections,t607_sectionIdTonavigationLink,t607_clickedSectionId); }, 1000);

	$(document).keydown(function(e) {
		var t607_direction = "";
		switch(e.which) {
				case 38: t607_direction = "top"; break;
				case 40: t607_direction = "bottom"; break;
				case 33: t607_direction = "top"; break;
				case 34: t607_direction = "bottom"; break;
				default: return;
		}
		if (t607_direction!="") {
			var t607_curActiveSectionId = t607_getSectionByHref(t607_navLinks.filter(".t-active")).attr("id"),
			 		t607_newActiveSectionIndex = $.map(t607_sections, function(obj, index) {
			    if(obj.attr("id") == t607_curActiveSectionId && t607_direction == "top") { return index + 1; }
					if(obj.attr("id") == t607_curActiveSectionId && t607_direction == "bottom") { return index - 1; }
			});
			var t607_newActiveSection = t607_sections[t607_newActiveSectionIndex[0]];
			if (typeof t607_newActiveSection == "undefined") { return; }

			t607_navLinks.removeClass('t-active');
			var	$root = $('html, body'),
					t607_offsetTop = $(".t607").attr("data-offset-top");
			t607_sectionIdTonavigationLink[t607_newActiveSection.attr("id")].addClass('t-active');
			t607_clickedSectionId = t607_newActiveSection.attr("id");
			if (typeof t607_offsetTop!="undefined") { $root.animate({ scrollTop: t607_newActiveSection.offset().top - t607_offsetTop}, 500); }
			else { $root.animate({ scrollTop: t607_newActiveSection.offset().top}, 500); }
		}
	});

	t607_navLinks.click(function() {
		if (!$(this).hasClass("tooltipstered")) {
		  t607_navLinks.removeClass('t-active');
			var t607_clickedSection = t607_getSectionByHref($(this)),
					$root = $('html, body'),
					t607_offsetTop = $(".t607").attr("data-offset-top");
		  if (!$(this).hasClass("t-active")) { t607_clickedSectionId = t607_clickedSection.attr("id"); }
          t607_sectionIdTonavigationLink[t607_clickedSection.attr("id")].addClass('t-active');          
          if (typeof t607_offsetTop!="undefined") { $root.animate({ scrollTop: t607_clickedSection.offset().top - t607_offsetTop}, 500); }
          else { $root.animate({ scrollTop: t607_clickedSection.offset().top}, 500); }
          return false;
		}
  	});

	$(window).scroll( function() {
		var t607_now = new Date().getTime();
		if (t607_lastCall && t607_now < (t607_lastCall + t607_interval) ) {
				clearTimeout(t607_timeoutId);
				t607_timeoutId = setTimeout(function () {
						t607_lastCall = t607_now;
						t607_clickedSectionId = t607_highlightNavLinks(t607_navLinks,t607_sections,t607_sectionIdTonavigationLink,t607_clickedSectionId);
				}, t607_interval - (t607_now - t607_lastCall) );
		} else {
				t607_lastCall = t607_now;
				t607_clickedSectionId = t607_highlightNavLinks(t607_navLinks,t607_sections,t607_sectionIdTonavigationLink,t607_clickedSectionId);
		}
	});
}


function t607_getSectionByHref (curlink) {
  var t651_curLinkValue = curlink.attr("href").replace(/\s+/g, '');
  if (curlink.is('[href*="#rec"]')) {
      return $(".r[id='" + t651_curLinkValue.substring(1) + "']");
  } else {
      return $(".r[data-record-type='215']").has("a[name='" + t651_curLinkValue.substring(1) + "']");
  }
}


function t607_highlightNavLinks(t607_navLinks,t607_sections,t607_sectionIdTonavigationLink,t607_clickedSectionId) {
	var t607_scrollPosition = $(window).scrollTop(),
		t607_valueToReturn = t607_clickedSectionId;

	/*if the first section is too small*/
	if (typeof t607_sections[t607_sections.length-2]!="undefined" && t607_sections[t607_sections.length-2].offset().top <= $(window).height()/2 && t607_scrollPosition == 0) {
		t607_navLinks.removeClass('t-active');
		t607_navLink = t607_sectionIdTonavigationLink[t607_sections[t607_sections.length-1].attr("id")];
		t607_navLink.addClass('t-active');
		return null;
	}

	$(t607_sections).each(function(e) {
			var t607_curSection = $(this),
					t607_sectionTop = t607_curSection.offset().top,
					t607_id = t607_curSection.attr('id'),
					t607_navLink = t607_sectionIdTonavigationLink[t607_id];
			if ((t607_scrollPosition + $(window).height()/2) >= t607_sectionTop || (t607_sections[0].attr("id") == t607_id && $(window).scrollTop() >= $(document).height() - $(window).height())) {
				if (t607_clickedSectionId == null && !t607_navLink.hasClass('t-active')) {					
					t607_navLinks.removeClass('t-active');
					t607_navLink.addClass('t-active');
					t607_valueToReturn = null;
				} else {
					if (t607_clickedSectionId != null && t607_id == t607_clickedSectionId) {
						t607_valueToReturn = null;
					}
				}
				return false;
			}
	});
	return t607_valueToReturn;
}
 
function t608_setHeight(recid) {  
  var el=$("#rec"+recid); 
  var image = el.find(".t608__bgimg");
  image.each(function() {
    var width = $(this).attr("data-image-width");
    var height = $(this).attr("data-image-height"); 
    var ratio = height/width;
    var padding = ratio*100;      
    $(this).css("padding-bottom", padding+"%");    
  });
} 
function t609_setHeight(recid) {  
  var el=$("#rec"+recid); 
  var image = el.find(".t609__bgimg");
  image.each(function() {
    var width = $(this).attr("data-image-width");
    var height = $(this).attr("data-image-height"); 
    var ratio = height/width;
    var padding = ratio*100;      
    $(this).css("padding-bottom", padding+"%");    
  });
}

function t609_init(recid){
  var el = $('#rec'+recid),
      element = el.find('.t609__descr'),
      highestBox = 0;

  element.css('height','');

  element.each(function(){
    if($(this).height() > highestBox)highestBox = $(this).height(); 
  });

  if($(window).width()>=960){
      element.css('height', highestBox); 
  }else{
     element.css('height', '');    
  }
} 
function t615_init(recid){
  var el = $('#rec'+recid);

  if (el.find('.t615__title').length) {
    t615_equalHeight(el.find('.t615__title'));
  }
  if (el.find('.t615__descr').length) {
    t615_equalHeight(el.find('.t615__descr'));
  }
  if (el.find('.t615__price').length) {
    t615_equalHeight(el.find('.t615__price'));
  }
  if (el.find('.t615__imgwrapper').length) {
    t615_equalHeight(el.find('.t615__imgwrapper'));
    $(window).load(function() {
       t615_equalHeight(el.find('.t615__imgwrapper'));
    });
  }
};

function t615_equalHeight(element) {
  var highestBox = 0;

  element.css('height','');

  element.each(function(){
    if($(this).height() > highestBox)highestBox = $(this).height(); 
  });

  if($(window).width()>=960){
      element.css('height', highestBox); 
  }else{
     element.css('height', '');    
  }
} 
function t616_init(recid){
  var el = $('#rec'+recid);

  if (el.find('.t616__title').length) {
    t616_equalHeight(el.find('.t616__title'));
  }
  if (el.find('.t616__text').length) {
    t616_equalHeight(el.find('.t616__text'));
  }
  if (el.find('.t616__price').length) {
    t616_equalHeight(el.find('.t616__price'));
  }
  t616_equalHeight(el.find('.t616__header'));
};

function t616_equalHeight(element) {
  var highestBox = 0;

  element.css('height','');

  element.each(function(){
    if($(this).height() > highestBox)highestBox = $(this).height(); 
  });

  if($(window).width()>=960){
      element.css('height', highestBox); 
  }else{
     element.css('height', '');    
  }
} 
function t635_init(recid){
	t635_startType(recid);
}




function t635_startType(recid){
	var t635_el = $('#rec'+recid),
			t635_data = t635_el.find(".t635__textholder"),
			t635_animRecId = t635_data.attr("data-recid"),
			t635_animText = t635_findAnimElem(t635_animRecId),
			t635_phrasesList = [],
			t635_phrase1 = t635_data.attr("data-text1"),
			t635_phrase2 = t635_data.attr("data-text2"),
			t635_phrase3 = t635_data.attr("data-text3"),
			t635_phrase4 = t635_data.attr("data-text4"),
			t635_phrase5 = t635_data.attr("data-text5"),
			t635_speed = t635_data.attr("data-speed"),
		  t635_loop = t635_data.attr("data-loop"),
      t635_backspaceDelay = t635_data.attr("data-backspacing-delay");
    if (typeof t635_animText=="undefined"){return;}  
	if (typeof t635_phrase1!="undefined") {t635_phrasesList.push(t635_phrase1.slice(0,80));}
	if (typeof t635_phrase2!="undefined") {t635_phrasesList.push(t635_phrase2.slice(0,80));}
	if (typeof t635_phrase3!="undefined") {t635_phrasesList.push(t635_phrase3.slice(0,80));}
	if (typeof t635_phrase4!="undefined") {t635_phrasesList.push(t635_phrase4.slice(0,80));}
	if (typeof t635_phrase5!="undefined") {t635_phrasesList.push(t635_phrase5.slice(0,80));}


  if(t635_animText.length != 0 && t635_phrasesList.length != 0) {
    var t635_animTextHtml = t635_animText.html(),
        t635_animTextSplitted = t635_animTextHtml.split("|"),
		t635_curWin = $(window);
    t635_animText.html(t635_animTextSplitted[0] + "<span class=\"t635__typing-text\"></span>" + t635_animTextSplitted[1]);

    t635_updateAnimTextLimits(t635_animRecId);
    t635_curWin.bind('resize', t_throttle(function(){t635_updateAnimTextLimits(t635_animRecId);}, 200));
    setInterval(function(){t635_updateAnimTextLimits(t635_animRecId);},5000);

    var t635_animatedText = $("#rec"+t635_animRecId+" .t635__typing-text"),
        t635_animTextTop = t635_animatedText.attr("data-top-limit"),
        t635_animTextBottom = t635_animatedText.attr("data-bottom-limit"),
        t635_winTop = t635_curWin.scrollTop(),
        t635_winBottom = t635_winTop + t635_curWin.height();
        t635_animateText(t635_animRecId,t635_phrasesList,t635_speed,t635_loop,t635_backspaceDelay);
    if (t635_animTextBottom<t635_winTop || t635_animTextTop>t635_winBottom){
      $("#rec"+t635_animRecId+" .t635__typing-text").data('typed').pauseTyping();
      $("#rec"+t635_animRecId+" .t635__typing-text").html("");
    }

    t635_curWin.bind('scroll', t_throttle( function(){
      t635_animTextTop = t635_animatedText.attr("data-top-limit");
      t635_animTextBottom = t635_animatedText.attr("data-bottom-limit");
      t635_winTop = t635_curWin.scrollTop();
      t635_winBottom = t635_winTop + t635_curWin.height();
      if (t635_animTextBottom<t635_winTop || t635_animTextTop>t635_winBottom){
        $("#rec"+t635_animRecId+" .t635__typing-text").data('typed').pauseTyping();
        $("#rec"+t635_animRecId+" .t635__typing-text").html("");
      } else {
	    $("#rec"+t635_animRecId+" .t635__typing-text").data('typed').continueTyping();
      }
    }, 200));
  }
}




function t635_findAnimElem(animRecId) {
  var animRec = $("#rec"+animRecId);
  var animH1 = animRec.find("h1:contains(\'|\')").last();
  var animH2 = animRec.find("h2:contains(\'|\')").last();
  var animH3 = animRec.find("h3:contains(\'|\')").last();
  var animDiv = animRec.find("div:contains(\'|\')").last();
  if (typeof animH1!="undefined" && animH1.length>0) {
    return animH1;
  }
  if (typeof animH2!="undefined" && animH2.length>0) {
    return animH2;
  }
  if (typeof animH3!="undefined" && animH3.length>0) {
    return animH3;
  }
  if (typeof animDiv!="undefined" && animDiv.length>0) {
    return animDiv;
  }
}




function t635_updateAnimTextLimits(t635_animRecId){
	var t635_animatedBlock = $("#rec"+t635_animRecId),
		t635_animatedText = t635_animatedBlock.find(".t635__typing-text");
	t635_animatedText.attr("data-top-limit",t635_animatedText.offset().top);
	t635_animatedText.attr("data-bottom-limit",(t635_animatedBlock.offset().top+t635_animatedBlock.height()));
}




function t635_animateText(t635_animRecId,t635_phrasesList,t635_speed,t635_loop,t635_backspaceDelay) {
	if (typeof t635_speed=="undefined"){t635_speed = 40;}
  if (typeof t635_backspaceDelay=="undefined"){t635_backspaceDelay = 800;}
  if (typeof t635_loop=="undefined"){t635_loop = true;}else{t635_loop = false;}
	$("#rec"+t635_animRecId+" .t635__typing-text").typed({
		strings: t635_phrasesList,
		typeSpeed: t635_speed*1,
		startDelay: 600,
		backSpeed: 10,
		backDelay: t635_backspaceDelay*1,
		loop: t635_loop,
		contentType: 'text'
	});
}
 
function t650_unifyHeights(recid) {
if($(window).width()>=960){
	$('#rec'+recid+' .t650 .t-container .t650__row').each(function() {
		var t650_highestBox = 0,
			t650_currow = $(this);
		$('.t650__inner-col', this).each(function(){
			var t650_curCol = $(this),
                t650_curText = t650_curCol.find(".t650__text"),
                t650_curBtn = t650_curCol.find(".t650__btn-container"),
                t650_curColHeight = t650_curText.outerHeight() + t650_curBtn.outerHeight();			
			if(t650_curColHeight > t650_highestBox){t650_highestBox = t650_curColHeight;}
		});
		$('.t650__inner-col',this).css('height', t650_highestBox);
	});
} else {
	$('.t650__inner-col').css('height', 'auto');
}
}
 
function t651_initPopup(recid){
  if(window.$isMobile){
    if ($('#rec'+recid+' .t651__phone').length==0){ return; }  
    t651_phone = $('#rec'+recid+' .t651__phone').html().replace(/\s+/g, '');
    $('#rec'+recid+' .t651__btn').click(function(){
	  window.location.href="tel:"+t651_phone;	                             
      $('.t651__btn_wrapper').removeClass('t651__btn_animate');
      $('.t651__btn-text').css('display','none');	                             	
    });                         
  	return;
  }
  $('#rec'+recid).attr('data-animationappear','off');
  $('#rec'+recid).css('opacity','1');
  var el=$('#rec'+recid).find('.t651__popup'),
      analitics=el.attr('data-track-popup'),
      hook="TildaCallBackWidget"+recid,
      obj = $('#rec'+recid+' .t651__btn');
  obj.click(function(e){
    if (obj.hasClass("t651__btn_active")) {t651_closePopup(); return;}
    obj.addClass("t651__btn_active");
    t651_showPopup(recid);
    e.preventDefault();    
    if (analitics > '') {
        Tilda.sendEventToStatistics(analitics, hook);
    }
  });
}

function t651_showPopup(recid){
  var el=$('#rec'+recid),
      popup = el.find('.t651__popup');
                             
  $('.t651__btn_wrapper').removeClass('t651__btn_animate');
  $('.t651__btn-text').css('display','none');	

  popup.css('display', 'block');
  setTimeout(function() {
    popup.addClass('t651__popup_show');
  }, 50);

  $(document).keydown(function(e) {
    if (e.keyCode == 27) { t651_closePopup(); }
  });
}

function t651_closePopup(){
  $('.t651__btn').removeClass('t651__btn_active');
  $('.t651__popup').removeClass('t651__popup_show');
  setTimeout(function() {
    $('.t651__popup').not('.t651__popup_show').css('display', 'none');
  }, 300);
}

function t651_sendPopupEventToStatistics(popupname) {
  var virtPage = '/tilda/popup/';
  var virtTitle = 'Popup: ';
  if (popupname.substring(0,7) == '#popup:') {
      popupname = popupname.substring(7);
  }

  virtPage += popupname;
  virtTitle += popupname;
  if (window.Tilda && typeof Tilda.sendEventToStatistics == 'function') {
    Tilda.sendEventToStatistics(virtPage, virtTitle, '', 0);
  } else {

   if(ga) {
     if (window.mainTracker != 'tilda') {
       ga('send', {'hitType':'pageview', 'page':virtPage,'title':virtTitle});
     }
   }

   if (window.mainMetrika > '' && window[window.mainMetrika]) {
     window[window.mainMetrika].hit(virtPage, {title: virtTitle,referer: window.location.href});
   }

  }
}
 
function t652_initPopup(recid){
  $('#rec'+recid).attr('data-animationappear','off');
  $('#rec'+recid).css('opacity','1');
  var el=$('#rec'+recid).find('.t652__popup'),
      analitics=el.attr('data-track-popup'),
      obj = $('#rec'+recid+' .t652__btn');
  obj.click(function(e){
    if (obj.hasClass("t652__btn_active")) {
		t652_closePopup();  
		return;
	}
    obj.addClass("t652__btn_active");
	$('#rec'+recid+' .t652').addClass("t652_active");
    t652_showPopup(recid);
    e.preventDefault();
    if (analitics == 'yes') {t652_sendPopupEventToStatistics(hook);}
  });
}

function t652_showPopup(recid){
  var el=$('#rec'+recid),
      popup = el.find('.t652__popup');

  $('.t652__btn_wrapper').removeClass('t652__btn_animate');
  $('.t652__btn-text').css('display','none');	

  popup.css('display', 'block');
  setTimeout(function() {
    popup.addClass('t652__popup_show');
  }, 50);

  el.find(".t652__mobile-icon-close").click(function(e){ t652_closePopup(); });	

  $(document).keydown(function(e) {
    if (e.keyCode == 27) { t652_closePopup(); }
  });
}

function t652_closePopup(){
  $('.t652').removeClass("t652_active");
  $('.t652__btn').removeClass('t652__btn_active');
  $('.t652__popup').removeClass('t652__popup_show');
  setTimeout(function() {
    $('.t652__popup').not('.t652__popup_show').css('display', 'none');
  }, 300);
}

function t652_sendPopupEventToStatistics(popupname) {
  var virtPage = '/tilda/popup/';
  var virtTitle = 'Popup: ';
  if (popupname.substring(0,7) == '#popup:') {
      popupname = popupname.substring(7);
  }

  virtPage += popupname;
  virtTitle += popupname;
  if (window.Tilda && typeof Tilda.sendEventToStatistics == 'function') {
    Tilda.sendEventToStatistics(virtPage, virtTitle, '', 0);
  } else {

   if(ga) {
     if (window.mainTracker != 'tilda') {
       ga('send', {'hitType':'pageview', 'page':virtPage,'title':virtTitle});
     }
   }

   if (window.mainMetrika > '' && window[window.mainMetrika]) {
     window[window.mainMetrika].hit(virtPage, {title: virtTitle,referer: window.location.href});
   }

  }
}
 
function t653_initPopup(recid){
  $('#rec'+recid).attr('data-animationappear','off');
  $('#rec'+recid).css('opacity','1');
  var el=$('#rec'+recid).find('.t653__popup'),
      analitics=el.attr('data-track-popup'),
      hook="TildaSubscriptionWidget"+recid,
      obj = $('#rec'+recid+' .t653__btn');
  obj.click(function(e){
    if (obj.hasClass("t653__btn_active")) {t653_closePopup(); return;}
	$('#rec'+recid+' .t653').addClass("t653_active");
    obj.addClass("t653__btn_active");
    t653_showPopup(recid);
    e.preventDefault();
    if (analitics > '') {
        Tilda.sendEventToStatistics(analitics, hook);
    }
  });
}

function t653_lockScroll(){
  var body = $("body");
	if (!body.hasClass('t-body_scroll-locked')) {
		var bodyScrollTop = (typeof window.pageYOffset !== 'undefined') ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
		body.addClass('t-body_scroll-locked');
    console.log("class added");
		body.css("top","-"+bodyScrollTop+"px");
    body.attr("data-popup-scrolltop",bodyScrollTop);
	}
}

function t653_unlockScroll(){
  var body = $("body");
	if (body.hasClass('t-body_scroll-locked')) {
    var bodyScrollTop = $("body").attr("data-popup-scrolltop");
		body.removeClass('t-body_scroll-locked');
		body.css("top","");
    body.removeAttr("data-popup-scrolltop")
		window.scrollTo(0, bodyScrollTop);
	}
}

function t653_showPopup(recid){
  var el=$('#rec'+recid),
      popup = el.find('.t653__popup');

  $('.t653__btn_wrapper').removeClass('t653__btn_animate');
  $('.t653__btn-text').css('display','none');	
  /*fix IOS11 cursor bug + general IOS background scroll*/
  if (/iPhone|iPad|iPod/i.test(navigator.userAgent) && !window.MSStream && $(window).width()<960) {
    console.log("lock scroll");
    setTimeout(function() {
      t653_lockScroll();
    }, 500);
  }  

  popup.css('display', 'block');
  setTimeout(function() {
    popup.addClass('t653__popup_show');
  }, 50);

  el.find(".t653__mobile-icon-close").click(function(e){ t653_closePopup(); });

  $(document).keydown(function(e) {
    if (e.keyCode == 27) { t653_closePopup(); }
  });
}

function t653_closePopup(){
  /*fix IOS11 cursor bug + general IOS background scroll*/
  if (/iPhone|iPad|iPod/i.test(navigator.userAgent) && !window.MSStream) {
    t653_unlockScroll();
  }    
  $('.t653').removeClass("t653_active");
  $('.t653__btn').removeClass('t653__btn_active');
  $('.t653__popup').removeClass('t653__popup_show');
  setTimeout(function() {
    $('.t653__popup').not('.t653__popup_show').css('display', 'none');
  }, 300);
}

/* deprecated */
function t653_sendPopupEventToStatistics(popupname) {
  var virtPage = '/tilda/popup/';
  var virtTitle = 'Popup: ';
  if (popupname.substring(0,7) == '#popup:') {
      popupname = popupname.substring(7);
  }

  virtPage += popupname;
  virtTitle += popupname;
  if (window.Tilda && typeof Tilda.sendEventToStatistics == 'function') {
    Tilda.sendEventToStatistics(virtPage, virtTitle, '', 0);
  } else {

   if(ga) {
     if (window.mainTracker != 'tilda') {
       ga('send', {'hitType':'pageview', 'page':virtPage,'title':virtTitle});
     }
   }

   if (window.mainMetrika > '' && window[window.mainMetrika]) {
     window[window.mainMetrika].hit(virtPage, {title: virtTitle,referer: window.location.href});
   }

  }
}
 
function t654_showPanel(recid){
  var t654_el = $('#rec'+recid),
      t654_block = t654_el.find('.t654'),
      t654_closeBtn = t654_el.find('.t654__icon-close'),
      t654_storageItem = t654_block.attr('data-storage-item'),		
      t654_lastOpen = localStorage.getItem(t654_storageItem),
      t654_delta = t654_block.attr('data-storage-delta')*86400,
      t654_today = Math.floor(Date.now() / 1000),
      t654_curDelta = t654_today - t654_lastOpen;
  if (t654_lastOpen==null || t654_curDelta>=t654_delta){
	t654_block.removeClass('t654_closed');
  }
  t654_closeBtn.click(function(e){
    t654_block.addClass('t654_closed');
	if (t654_delta){localStorage.setItem(t654_storageItem, Math.floor(Date.now() / 1000));}    
    e.preventDefault();
  });
}


function t654_setBg(recid){
  var window_width=$(window).width();
  if(window_width>980){
    $(".t654").each(function() {
      var el=$(this);
      if(el.attr('data-bgcolor-setbyscript')=="yes"){
        var bgcolor=el.attr("data-bgcolor-rgba");
        el.css("background-color",bgcolor);
      }
      });
      }else{
        $(".t654").each(function() {
          var el=$(this);
          var bgcolor=el.attr("data-bgcolor-hex");
          el.css("background-color",bgcolor);
          el.attr("data-bgcolor-setbyscript","yes");
      });
  }
}

function t654_appearMenu(recid) {
      var window_width=$(window).width();
      if(window_width>980){
           $(".t654").each(function() {
                  var el=$(this);
                  var appearoffset=el.attr("data-appearoffset");
                  if(appearoffset!=""){
                          if(appearoffset.indexOf('vh') > -1){
                              appearoffset = Math.floor((window.innerHeight * (parseInt(appearoffset) / 100)));
                          }

                          appearoffset=parseInt(appearoffset, 10);

                          if ($(window).scrollTop() >= appearoffset) {
                            if(el.css('visibility') == 'hidden'){
                                el.finish();
                                if (el.hasClass('t654_top')){
                                  el.css("top","-50px");
                                  el.css("visibility","visible");
                                  el.animate({"opacity": "1","top": "0px"}, 200,function() {});
                                }else{
                                  el.css("bottom","-50px");
                                  el.css("visibility","visible");
                                  el.animate({"opacity": "1","bottom": "0px"}, 200,function() {});
                                }
                            }
                          }else{
                            el.stop();
                            el.css("visibility","hidden");
                          }
                  }
           });
      }

}

function t654_changebgopacitymenu(recid) {
  var window_width=$(window).width();
  if(window_width>980){
    $(".t654").each(function() {
      var el=$(this);
      var bgcolor=el.attr("data-bgcolor-rgba");
      var bgcolor_afterscroll=el.attr("data-bgcolor-rgba-afterscroll");
      var bgopacityone=el.attr("data-bgopacity");
      var bgopacitytwo=el.attr("data-bgopacity-two");
      var menushadow=el.attr("data-menushadow");
      if(menushadow=='100'){
        var menushadowvalue=menushadow;
      }else{
        var menushadowvalue='0.'+menushadow;
      }
      if ($(window).scrollTop() > 20) {
        el.css("background-color",bgcolor_afterscroll);
        if(bgopacitytwo=='0' || menushadow==' '){
          el.css("box-shadow","none");
        }else{
          el.css("box-shadow","0px 1px 3px rgba(0,0,0,"+ menushadowvalue +")");
        }
      }else{
        el.css("background-color",bgcolor);
        if(bgopacityone=='0.0' || menushadow==' '){
          el.css("box-shadow","none");
        }else{
          el.css("box-shadow","0px 1px 3px rgba(0,0,0,"+ menushadowvalue +")");
        }
      }
    });
  }
}
 
function t657_init(recid){
  var t657_el = $('#rec'+recid),
      t657_block = t657_el.find('.t657'),
      t657_closeBtn = t657_el.find('.t657__btn'),
      t657_closeIcon = t657_el.find('.t657__icon-close'),
			t657_storageItem = t657_block.attr('data-storage-item'),
			t657_lastOpen = localStorage.getItem(t657_storageItem);

  if (t657_lastOpen==null) {
  	t657_block.removeClass('t657_closed');
  }

  t657_closeBtn.add(t657_closeIcon).click(function(e){
    t657_block.addClass('t657_closed');
  	localStorage.setItem(t657_storageItem, Math.floor(Date.now() / 1000));
  	e.preventDefault();
  });
}
 
function t658_init(recid){
	$('#rec'+recid).attr('data-animationappear','off').removeClass('r_hidden').removeClass('r_anim');
	var t658_el = $('#rec'+recid),
        t658_block = t658_el.find('.t658'),
        t658_closeBtn = t658_el.find('.t658__btn'),
        t658_storageItem = t658_block.attr('data-storage-item'),        
        t658_lastOpen = localStorage.getItem(t658_storageItem);
	if (t658_lastOpen==null || t658_block.attr('data-unpublish')) {		
		t658_block.css('display','block');
		setTimeout(function() {
			t658_block.removeClass('t658_closed');
		}, 500);
		$('body').addClass('t658__body_popupshowed');
	}
	t658_closeBtn.click(function(e){
		t658_block.addClass('t658_closed');
		setTimeout(function() {
			t658_block.css('display','none');
		}, 300);
		$('body').removeClass('t658__body_popupshowed');
        localStorage.setItem(t658_storageItem, Math.floor(Date.now() / 1000));
        e.preventDefault();
	});
}
 
function t668_init(recid){
  var el= $('#rec'+recid),
      toggler = el.find(".t668__header");
  
  toggler.click(function(){
    $(this).toggleClass("t668__opened");
    $(this).next().slideToggle();
    if(window.lazy=='y'){t_lazyload_update();}
  });
}
 
function t670_init(recid) {  
  t670_imageHeight(recid);
  t670_show(recid);
  t670_hide(recid)
}

function t670_show(recid) {  
  var el=$("#rec"+recid),
      play = el.find('.t670__play');
  play.click(function(){
    if($(this).attr('data-slider-video-type')=='youtube'){
      var url = $(this).attr('data-slider-video-url');
      $(this).next().html("<iframe class=\"t670__iframe\" width=\"100%\" height=\"100%\" src=\"https://www.youtube.com/embed/"+url+"?autoplay=1\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>");
    }
    if($(this).attr('data-slider-video-type')=='vimeo'){
      var url = $(this).attr('data-slider-video-url');
      $(this).next().html("<iframe class=\"t670__iframe\" width=\"100%\" height=\"100%\" src=\"https://player.vimeo.com/video/"+url+"?autoplay=1\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>");
    }
    $(this).next().css('z-index', '3');
  });
}

function t670_hide(recid) {  
  var el=$("#rec"+recid),
      body = el.find('.t670__frame');
  el.on('updateSlider', function(){
    body.html('').css('z-index', '');
  });
}

function t670_imageHeight(recid) {  
  var el=$("#rec"+recid); 
  var image = el.find(".t670__separator");
  image.each(function() {
    var width = $(this).attr("data-slider-image-width");
    var height = $(this).attr("data-slider-image-height"); 
    var ratio = height/width;
    var padding = ratio*100;      
    $(this).css("padding-bottom",padding+"%");    
  });
} 
function t671_init(recid){
	
	var el = $('#rec'+recid);
	var c=Date.now();

	if(typeof window.t671_obj=='object'){
		var obj=window.t671_obj;
		t671_process(obj,el);
	}else{
      $.ajax({
        type: "POST",
        url: "/pages.json?c="+c,
        dataType : "text",
        success: function(data){
            if(data!=''){
                var obj = jQuery.parseJSON( data );
                if(typeof obj=='object'){
                  window.t671_obj=obj;
                  t671_process(obj,el);
                }
            }
        },
        error: function(){
        },
        timeout: 1000*10		  			  
      });	
	}
		
}
	
function t671_process(obj,el){

	var projectid=$('#allrecords').attr('data-tilda-project-id');
	var pageid=$('#allrecords').attr('data-tilda-page-id');
	var reverse=el.find('.t671__container').attr('data-reverse');
		
    if(reverse=='yes'){
		obj=obj.reverse();
	}

	var title_style=el.find('.t671').attr('data-title-style');
	var descr_style=el.find('.t671').attr('data-descr-style');
	var date_style=el.find('.t671').attr('data-date-style');
	var date_noshow=el.find('.t671').attr('data-date-noshow');

	$.each( obj, function( key, page ) {

		var str='';
		var url='/page'+page.pageid+'.html';
		if(page.alias!=''){
			url='/'+page.alias+'';
		}
		var date=page.date;
		if(date!=''){
			date=date.substring(0,10);
		}
		
		str += '<a href="'+url+'" style="font-family:Helvetica Neue, Helvetica, Arial, sans-serif; text-decoration:none; color:#000;">';
		str += '<div>';
		str += '<div style="border:1px solid #eee; width:100%; padding:20px; box-sizing:border-box; margin-bottom:40px;">';
		if(page.img!=''){
			str += '<div style="width:100%; margin-bottom:20px;"><img src="'+page.img+'" style="width:100%;"></div>';
		}
		str += '<div style="font-size:22px; margin-bottom:15px; '+title_style+'">'+page.title+'</div>';
		if(page.descr!=''){
			str += '<div style="font-size:16px; margin-bottom:20px; line-height:1.55; '+descr_style+'">'+page.descr+'</div>';
		}
		if(date!='' && date_noshow!='on'){
			str += '<div style="letter-spacing:2px; font-size:13px; opacity:0.4; margin-bottom:1px; '+date_style+'">'+date+'</div>';
		}
		str += '</div>';		
		str += '</div>';
		str += '</a>';		
		
		if(page.is_index!='y'){
	        el.find('.t671__container').append(str);
		}
			
	});
	
} 
function t674_init(recid){
  $("#rec"+recid+" .t674__img-holder").on('load', function() {
    $("body").addClass("t674__body_with-bg");
  }).each(function() {
    if(this.complete) $(this).load();
  });
}
 
function t675_init(recid) {  
  var el=$("#rec"+recid),
      textwrapper=el.find('.t675__textwrapper'),
      dots=el.find('.t-slds__bullet_wrapper');
  textwrapper.css('margin-bottom', dots.outerHeight()+7);
} 
function t678_onSuccess(t678_form){
	var t678_inputsWrapper = t678_form.find('.t-form__inputsbox');
    var t678_inputsHeight = t678_inputsWrapper.height();
    var t678_inputsOffset = t678_inputsWrapper.offset().top;
    var t678_inputsBottom = t678_inputsHeight + t678_inputsOffset;
	var t678_targetOffset = t678_form.find('.t-form__successbox').offset().top;

    if ($(window).width()>960) {
        var t678_target = t678_targetOffset - 200;
    }	else {
        var t678_target = t678_targetOffset - 100;
    }

    if (t678_targetOffset > $(window).scrollTop() || ($(document).height() - t678_inputsBottom) < ($(window).height() - 100)) {
        t678_inputsWrapper.addClass('t678__inputsbox_hidden');
		setTimeout(function(){
			if ($(window).height() > $('.t-body').height()) {$('.t-tildalabel').animate({ opacity:0 }, 50);}
		}, 300);		
    } else {
        $('html, body').animate({ scrollTop: t678_target}, 400);
        setTimeout(function(){t678_inputsWrapper.addClass('t678__inputsbox_hidden');}, 400);
    }

	var successurl = t678_form.data('success-url');
    if(successurl && successurl.length > 0) {
        setTimeout(function(){
            window.location.href= successurl;
        },500);
    }

}

 
function t686_init(recid){
	setTimeout(function(){
      t686_setHeight(recid);
    }, 500);
    
	var t686__doResize;
	$(window).resize(function(){
		clearTimeout(t686__doResize);
		t686__doResize = setTimeout(function() {
			t686_setHeight(recid);
		}, 200);
	});
}

function t686_setHeight(recid){
	var t686_el = $('#rec'+recid+' .t686'),
        t686_ratio = t686_el.attr('data-tile-ratio'),
        t686_ratioHeight = t686_el.find('.t686__col').width()*t686_ratio;

	t686_el.find('.t686__row').each(function() {
		var t686_largestHeight = 0,
				t686_currow = $(this);

		$('.t686__table', this).each(function(){
			var t686_curCol = $(this),
          		t686_curColHeight = t686_curCol.find(".t686__textwrapper").outerHeight();
      		if ($(this).find(".t686__cell").hasClass("t686__button-bottom")){ t686_curColHeight+= t686_curCol.find(".t686__button-container").outerHeight(); }
			if(t686_curColHeight > t686_largestHeight){ t686_largestHeight = t686_curColHeight; }
		});

		if($(window).width()>=960){
			if (t686_largestHeight>t686_ratioHeight){ $('.t686__table',this).css('height', t686_largestHeight); }
			else { $('.t686__table',this).css('height', t686_ratioHeight); }
			$('.t686__table',this).css('min-height', 'auto');
		} else {
			$('.t686__table',this).css('min-height', t686_ratioHeight);
			$('.t686__table',this).css('height','');
		}
		
		if (t686_GetIEVersion() > 0){
            var curRowHeight = $('.t686__table',this).css('height');
            $('.t686__bg',this).css('height', curRowHeight);
            $('.t686__overlay',this).css('height', curRowHeight);
        }
	});
}

function t686_GetIEVersion() {
    var sAgent = window.navigator.userAgent;
    var Idx = sAgent.indexOf("MSIE");
    if (Idx > 0) {
      return parseInt(sAgent.substring(Idx+ 5, sAgent.indexOf(".", Idx)));
    } else {
      if (!!navigator.userAgent.match(/Trident\/7\./)){
        return 11;
      } else {
        return 0;
      }
    }
}
 
function t688_unifyHeights(recid) {	
	if($(window).width()>=960){
		$('#rec'+recid+' .t688 .t-container .t688__row').each(function() {
			var t688_highestBox = 0,
				t688_currow = $(this);
			$(':not(.t688__featured) .t688__inner-col', this).each(function(){
				var t688_curCol = $(this),
                t688_curText = t688_curCol.find(".t688__textwrapper_inner"),	                
                t688_curColHeight = t688_curText.outerHeight();				
				if(t688_curColHeight > t688_highestBox){t688_highestBox = t688_curColHeight;}				
			});			
			$('.t688__textwrapper',this).css('height', t688_highestBox);
			$('.t688__featured',this).css('height',$('.t688__col',this).height()+'px');			
		});
	} else {
		$('.t688__textwrapper').css('height', 'auto');
		$("#rec"+recid).find(".t688__featured").css({'height':($("#rec"+recid).find(".t688__col").height()+'px')});
	}
} 
function t690_onSuccess(t690_form){
	var t690_inputsWrapper = t690_form.find('.t-form__inputsbox');
    var t690_inputsHeight = t690_inputsWrapper.height();
    var t690_inputsOffset = t690_inputsWrapper.offset().top;
    var t690_inputsBottom = t690_inputsHeight + t690_inputsOffset;
	var t690_targetOffset = t690_form.find('.t-form__successbox').offset().top;

    if ($(window).width()>960) {
        var t690_target = t690_targetOffset - 200;
    }	else {
        var t690_target = t690_targetOffset - 100;
    }

    if (t690_targetOffset > $(window).scrollTop() || ($(document).height() - t690_inputsBottom) < ($(window).height()-100)) {
        t690_inputsWrapper.addClass('t690__inputsbox_hidden');
		setTimeout(function(){
			if ($(window).height() > $('.t-body').height()) {$('.t-tildalabel').animate({ opacity:0 }, 50);}
		}, 300);                                                                                                                           
    } else {
        $('html, body').animate({ scrollTop: t690_target}, 400);
        setTimeout(function(){t690_inputsWrapper.addClass('t690__inputsbox_hidden');}, 400);
    }
                                                                                                                           
	var successurl = t690_form.data('success-url');
    if(successurl && successurl.length > 0) {
        setTimeout(function(){
            window.location.href= successurl;
        },500);
    }
                                                                                                                           
} 
function t691_unifyHeights(recid) {
if($(window).width()>=960){
	$('#rec'+recid+' .t691 .t-container .t691__row').each(function() {
		var t691__highestBox = 0;
		var t691__currow = $(this);
		$('.t691__col', this).each(function(){
			var t691__curcol = $(this);
			var t691__curcolinfo=t691__curcol.find('.t691__sectioninfowrapper');
			var t691__curcolpers=t691__curcol.find('.t691__personwrapper');
			var t691__curcolinnerheight = t691__curcolinfo.outerHeight() + t691__curcolpers.outerHeight();
			if(t691__curcolinnerheight > t691__highestBox){t691__highestBox = t691__curcolinnerheight;}
		});
		$('.t691__col',this).css('height', t691__highestBox);
	});
}
};
 
function t694_init(recid){
	t694_setHeight(recid);
	var t694__doResize;
	$(window).resize(function(){
		clearTimeout(t694__doResize);
		t694__doResize = setTimeout(function() {
			t694_setHeight(recid);
		}, 200);
	});
}

function t694_setHeight(recid){
	var t694_el = $('#rec'+recid+' .t694'),
		t694_ratio = t694_el.attr('data-tile-ratio'),
		t694_ratioHeight = t694_el.find('.t694__col').width()*t694_ratio;

	if($(window).width()>=768){
        t694_el.find('.t694__row').each(function() {
            var t694_largestHeight = 0,                
                t694_currow = $(this);

            $('.t694__table', this).each(function(){
                var t694_curCol = $(this),
                    t694_curColHeight = t694_curCol.find(".t694__textwrapper").outerHeight();
                if ($(this).find(".t694__cell").hasClass("t694__button-bottom")){ t694_curColHeight+= t694_curCol.find(".t694__button-container").outerHeight(); }
                if(t694_curColHeight > t694_largestHeight){ t694_largestHeight = t694_curColHeight; }
            });

            if (t694_largestHeight>t694_ratioHeight){
                $('.t694__table',this).css('height', t694_largestHeight);
            } else {
                if ($('.t694__table',this).css('height')!='') {
                  $('.t694__table',this).css('height','');
                }
            }					
        });
	} else {
		t694_el.find('.t694__table').css('height','');
	}
}
 
function t696_onSuccess(t696_form){
	var t696_inputsWrapper = t696_form.find('.t-form__inputsbox');
    var t696_inputsHeight = t696_inputsWrapper.height();
    var t696_inputsOffset = t696_inputsWrapper.offset().top;
    var t696_inputsBottom = t696_inputsHeight + t696_inputsOffset;
	var t696_targetOffset = t696_form.find('.t-form__successbox').offset().top;

    if ($(window).width()>960) {
        var t696_target = t696_targetOffset - 200;
    }	else {
        var t696_target = t696_targetOffset - 100;
    }

    if (t696_targetOffset > $(window).scrollTop() || ($(document).height() - t696_inputsBottom) < ($(window).height() - 100)) {
        t696_inputsWrapper.addClass('t696__inputsbox_hidden');
		setTimeout(function(){
			if ($(window).height() > $('.t-body').height()) {$('.t-tildalabel').animate({ opacity:0 }, 50);}
		}, 300);		
    } else {
        $('html, body').animate({ scrollTop: t696_target}, 400);
        setTimeout(function(){t696_inputsWrapper.addClass('t696__inputsbox_hidden');}, 400);
    }

	var successurl = t696_form.data('success-url');
    if(successurl && successurl.length > 0) {
        setTimeout(function(){
            window.location.href= successurl;
        },500);
    }

} 
function t698_fixcontentheight(id){
        /* correct cover height if content more when cover height */
        var el = $("#rec" + id);
        var hcover=el.find(".t-cover").height();
        var hcontent=el.find("div[data-hook-content]").outerHeight();
        if(hcontent>300 && hcover<hcontent){
         var hcontent=hcontent+120;
         if(hcontent>1000){hcontent+=100;}
         console.log('auto correct cover height: '+hcontent);
         el.find(".t-cover").height(hcontent);
         el.find(".t-cover__filter").height(hcontent);
         el.find(".t-cover__carrier").height(hcontent);
         el.find(".t-cover__wrapper").height(hcontent);
         if($isMobile == false){
          setTimeout(function() {
           var divvideo=el.find(".t-cover__carrier");
           if(divvideo.find('iframe').length>0){
            console.log('correct video from cover_fixcontentheight');
      setWidthHeightYoutubeVideo(divvideo, hcontent+'px');
     }
    }, 2000);
   }
        }
 }

function t698_onSuccess(t698_form){
	var t698_inputsWrapper = t698_form.find('.t-form__inputsbox');
    var t698_inputsHeight = t698_inputsWrapper.height();
    var t698_inputsOffset = t698_inputsWrapper.offset().top;
    var t698_inputsBottom = t698_inputsHeight + t698_inputsOffset;
	var t698_targetOffset = t698_form.find('.t-form__successbox').offset().top;

    if ($(window).width()>960) {
        var t698_target = t698_targetOffset - 200;
    }	else {
        var t698_target = t698_targetOffset - 100;
    }

    if (t698_targetOffset > $(window).scrollTop() || ($(document).height() - t698_inputsBottom) < ($(window).height() - 100)) {
        t698_inputsWrapper.addClass('t698__inputsbox_hidden');
		setTimeout(function(){
			if ($(window).height() > $('.t-body').height()) {$('.t-tildalabel').animate({ opacity:0 }, 50);}
		}, 300);		
    } else {
        $('html, body').animate({ scrollTop: t698_target}, 400);
        setTimeout(function(){t698_inputsWrapper.addClass('t698__inputsbox_hidden');}, 400);
    }

	var successurl = t698_form.data('success-url');
    if(successurl && successurl.length > 0) {
        setTimeout(function(){
            window.location.href= successurl;
        },500);
    }

} 
function t700_init(recid,height){
  t700__setHeight(recid,height);

  var t700__doResize;
  $(window).resize(function(){
    clearTimeout(t700__doResize);
    t700__doResize = setTimeout(function() {
    	t700__setHeight(recid);
    }, 200);
  });
}

function t700__setHeight(recid,height) {
  if (height=="" || typeof height=="undefined"){
  var t700__el=$("#rec"+recid),
      t700__div=t700__el.find("#youtubeiframe"+recid),
      t700__height=t700__div.width() * 0.5625;
  t700__div.height(t700__height);
  t700__div.parent().height(t700__height);
  }
}

function t700_onSuccess(t700_form){
	var t700_inputsWrapper = t700_form.find('.t-form__inputsbox');
    var t700_inputsHeight = t700_inputsWrapper.height();
    var t700_inputsOffset = t700_inputsWrapper.offset().top;
    var t700_inputsBottom = t700_inputsHeight + t700_inputsOffset;
	var t700_targetOffset = t700_form.find('.t-form__successbox').offset().top;

    if ($(window).width()>960) {
        var t700_target = t700_targetOffset - 200;
    }	else {
        var t700_target = t700_targetOffset - 100;
    }

    if (t700_targetOffset > $(window).scrollTop() || ($(document).height() - t700_inputsBottom) < ($(window).height() - 100)) {
        t700_inputsWrapper.addClass('t700__inputsbox_hidden');
		setTimeout(function(){
			if ($(window).height() > $('.t-body').height()) {$('.t-tildalabel').animate({ opacity:0 }, 50);}
		}, 300);
    } else {
        $('html, body').animate({ scrollTop: t700_target}, 400);
        setTimeout(function(){t700_inputsWrapper.addClass('t700__inputsbox_hidden');}, 400);
    }

	var successurl = t700_form.data('success-url');
    if(successurl && successurl.length > 0) {
        setTimeout(function(){
            window.location.href= successurl;
        },500);
    }

}
 
function t702_onSuccess(t702_form){
	var t702_inputsWrapper = t702_form.find('.t-form__inputsbox');
    var t702_inputsHeight = t702_inputsWrapper.height();
    var t702_inputsOffset = t702_inputsWrapper.offset().top;
    var t702_inputsBottom = t702_inputsHeight + t702_inputsOffset;
	var t702_targetOffset = t702_form.find('.t-form__successbox').offset().top;

    if ($(window).width()>960) {
        var t702_target = t702_targetOffset - 200;
    }	else {
        var t702_target = t702_targetOffset - 100;
    }

    if (t702_targetOffset > $(window).scrollTop() || ($(document).height() - t702_inputsBottom) < ($(window).height() - 100)) {
        t702_inputsWrapper.addClass('t702__inputsbox_hidden');
		setTimeout(function(){
			if ($(window).height() > $('.t-body').height()) {$('.t-tildalabel').animate({ opacity:0 }, 50);}
		}, 300);
    } else {
        $('html, body').animate({ scrollTop: t702_target}, 400);
        setTimeout(function(){t702_inputsWrapper.addClass('t702__inputsbox_hidden');}, 400);
    }

	var successurl = t702_form.data('success-url');
    if(successurl && successurl.length > 0) {
        setTimeout(function(){
            window.location.href= successurl;
        },500);
    }

}


function t702_lockScroll(){
  var body = $("body");
	if (!body.hasClass('t-body_scroll-locked')) {
		var bodyScrollTop = (typeof window.pageYOffset !== 'undefined') ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
		body.addClass('t-body_scroll-locked');
		body.css("top","-"+bodyScrollTop+"px");
    body.attr("data-popup-scrolltop",bodyScrollTop);
	}
}

function t702_unlockScroll(){
  var body = $("body");
	if (body.hasClass('t-body_scroll-locked')) {
    var bodyScrollTop = $("body").attr("data-popup-scrolltop");
		body.removeClass('t-body_scroll-locked');
		body.css("top","");
    body.removeAttr("data-popup-scrolltop")
		window.scrollTo(0, bodyScrollTop);
	}
}


function t702_showPopup(recid){
  var el=$('#rec'+recid),
      popup = el.find('.t-popup');

  popup.css('display', 'block');
  el.find('.t-range').trigger('popupOpened');
  if(window.lazy=='y'){t_lazyload_update();}
  setTimeout(function() {
    popup.find('.t-popup__container').addClass('t-popup__container-animated');
    popup.addClass('t-popup_show');
  }, 50);

  $('body').addClass('t-body_popupshowed t702__body_popupshowed');
  /*fix IOS11 cursor bug + general IOS background scroll*/
  if (/iPhone|iPad|iPod/i.test(navigator.userAgent) && !window.MSStream) {
    setTimeout(function() {
      t702_lockScroll();
    }, 500);
  }
  el.find('.t-popup').click(function(e){
    if (e.target == this) { t702_closePopup(); }
  });

  el.find('.t-popup__close').click(function(e){
    t702_closePopup();
  });

  el.find('a[href*="#"]').click(function(e){
    var url = $(this).attr('href');
    if (!url || url.substring(0,7) != '#price:') {
      t702_closePopup();
      if (!url || url.substring(0,7) == '#popup:') {
        setTimeout(function() {
          $('body').addClass('t-body_popupshowed');
        }, 300);
      }
    }
  });

  $(document).keydown(function(e) {
    if (e.keyCode == 27) { t702_closePopup(); }
  });
}

function t702_closePopup(){
  $('body').removeClass('t-body_popupshowed t702__body_popupshowed');
  /*fix IOS11 cursor bug + general IOS background scroll*/
  if (/iPhone|iPad|iPod/i.test(navigator.userAgent) && !window.MSStream) {
    t702_unlockScroll();
  }  
  $('.t-popup').removeClass('t-popup_show');
  setTimeout(function() {
    $('.t-popup').not('.t-popup_show').css('display', 'none');
  }, 300);
}

function t702_resizePopup(recid){
  var el = $("#rec"+recid),
      div = el.find(".t-popup__container").height(),
      win = $(window).height() - 120,
      popup = el.find(".t-popup__container");
  if (div > win ) {
    popup.addClass('t-popup__container-static');
  } else {
    popup.removeClass('t-popup__container-static');
  }
}
/* deprecated */
function t702_sendPopupEventToStatistics(popupname) {
  var virtPage = '/tilda/popup/';
  var virtTitle = 'Popup: ';
  if (popupname.substring(0,7) == '#popup:') {
      popupname = popupname.substring(7);
  }

  virtPage += popupname;
  virtTitle += popupname;
  if (window.Tilda && typeof Tilda.sendEventToStatistics == 'function') {
    Tilda.sendEventToStatistics(virtPage, virtTitle, '', 0);
  } else {
    if(ga) {
      if (window.mainTracker != 'tilda') {
        ga('send', {'hitType':'pageview', 'page':virtPage,'title':virtTitle});
      }
    }

    if (window.mainMetrika > '' && window[window.mainMetrika]) {
      window[window.mainMetrika].hit(virtPage, {title: virtTitle,referer: window.location.href});
    }
  }
}

function t702_initPopup(recid){
  $('#rec'+recid).attr('data-animationappear','off');
  $('#rec'+recid).css('opacity','1');
  var el=$('#rec'+recid).find('.t-popup'),
      hook=el.attr('data-tooltip-hook'),
      analitics=el.attr('data-track-popup');
  if(hook!==''){
    var obj = $('a[href="'+hook+'"]');
    obj.click(function(e){
      t702_showPopup(recid);
      t702_resizePopup(recid);
      e.preventDefault();
      if(window.lazy=='y'){t_lazyload_update();}
      if (analitics > '') {
          var virtTitle = hook;
        if (virtTitle.substring(0,7) == '#popup:') {
            virtTitle = virtTitle.substring(7);
        }
          
        Tilda.sendEventToStatistics(analitics, virtTitle);
      }

    });
  }
}
 
function t704_onSuccess(t704_form){
	var t704_inputsWrapper = t704_form.find('.t-form__inputsbox');
    var t704_inputsHeight = t704_inputsWrapper.height();
    var t704_inputsOffset = t704_inputsWrapper.offset().top;
    var t704_inputsBottom = t704_inputsHeight + t704_inputsOffset;
	var t704_targetOffset = t704_form.find('.t-form__successbox').offset().top;

    if ($(window).width()>960) {
        var t704_target = t704_targetOffset - 200;
    }	else {
        var t704_target = t704_targetOffset - 100;
    }

    if (t704_targetOffset > $(window).scrollTop() || ($(document).height() - t704_inputsBottom) < ($(window).height() - 100)) {
        t704_inputsWrapper.addClass('t704__inputsbox_hidden');
		setTimeout(function(){
			if ($(window).height() > $('.t-body').height()) {$('.t-tildalabel').animate({ opacity:0 }, 50);}
		}, 300);
    } else {
        $('html, body').animate({ scrollTop: t704_target}, 400);
        setTimeout(function(){t704_inputsWrapper.addClass('t704__inputsbox_hidden');}, 400);
    }

	var successurl = t704_form.data('success-url');
    if(successurl && successurl.length > 0) {
        setTimeout(function(){
            window.location.href= successurl;
        },500);
    }

}
 
function t706_onSuccessCallback(t706_form){
 /*if (typeof localStorage === 'object') {
	try {
	  localStorage.removeItem("tcart");
	} catch (e) {
	  console.log('Your web browser does not support localStorage.');
	}
 }		
 delete window.tcart;
 tcart__loadLocalObj();*/
 $( ".t706__cartwin-products" ).slideUp( 10, function() {	
 });
 $( ".t706__cartwin-bottom" ).slideUp( 10, function() {	
 });
 $( ".t706 .t-form__inputsbox" ).slideUp( 700, function() {	
 });
 /*window.tcart_success='yes';*/
 try {
	/*fix IOS11 cursor bug + general IOS background scroll*/
	tcart__unlockScroll();
 } catch (e) {}
} 
function t708_initPopup(recid){
  $('#rec'+recid).attr('data-animationappear','off');
  $('#rec'+recid).css('opacity','1');
  var el=$('#rec'+recid).find('.t708__popup'),
      analitics=el.attr('data-track-popup'),
      hook="TildaSendMessageWidget"+recid,
      obj = $('#rec'+recid+' .t708__btn');
  obj.click(function(e){
    if (obj.hasClass("t708__btn_active")) {
		t708_closePopup();
		return;
	}
    obj.addClass("t708__btn_active");
	$('#rec'+recid+' .t708').addClass("t708_active");
    t708_showPopup(recid);
    e.preventDefault();
    if (analitics > '') {
        Tilda.sendEventToStatistics(analitics, hook);
    }
  });
}

function t708_lockScroll(){
  var body = $("body");
	if (!body.hasClass('t-body_scroll-locked')) {
		var bodyScrollTop = (typeof window.pageYOffset !== 'undefined') ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
		body.addClass('t-body_scroll-locked');
    console.log("class added");
		body.css("top","-"+bodyScrollTop+"px");
    body.attr("data-popup-scrolltop",bodyScrollTop);
	}
}

function t708_unlockScroll(){
  var body = $("body");
	if (body.hasClass('t-body_scroll-locked')) {
    var bodyScrollTop = $("body").attr("data-popup-scrolltop");
		body.removeClass('t-body_scroll-locked');
		body.css("top","");
    body.removeAttr("data-popup-scrolltop")
		window.scrollTo(0, bodyScrollTop);
	}
}

function t708_showPopup(recid){
  var el=$('#rec'+recid),
      popup = el.find('.t708__popup');

  $('.t708__btn_wrapper').removeClass('t708__btn_animate');
  $('.t708__btn-text').css('display','none');
  if ($(window).width()<960) { $('body').addClass('t708__body_popupshowed'); }
  /*fix IOS11 cursor bug + general IOS background scroll*/
  if (/iPhone|iPad|iPod/i.test(navigator.userAgent) && !window.MSStream && $(window).width()<960) {
    console.log("lock scroll");
    setTimeout(function() {
      t708_lockScroll();
    }, 500);
  }  

  popup.css('display', 'block');
  el.find('.t-range').trigger('popupOpened');
  setTimeout(function() {
    popup.addClass('t708__popup_show');
  }, 50);

  el.find(".t708__mobile-icon-close").click(function(e){ t708_closePopup(); });

  $(document).keydown(function(e) {
    if (e.keyCode == 27) { t708_closePopup(); }
  });
}

function t708_closePopup(){
  if ($(window).width()<960) { $('body').removeClass('t708__body_popupshowed'); }
  /*fix IOS11 cursor bug + general IOS background scroll*/
  if (/iPhone|iPad|iPod/i.test(navigator.userAgent) && !window.MSStream) {
    t708_unlockScroll();
  }  
  $('.t708').removeClass("t708_active");
  $('.t708__btn').removeClass('t708__btn_active');
  $('.t708__popup').removeClass('t708__popup_show');
  setTimeout(function() {
    $('.t708__popup').not('.t708__popup_show').css('display', 'none');
  }, 300);
}

function t708_sendPopupEventToStatistics(popupname) {
  var virtPage = '/tilda/popup/';
  var virtTitle = 'Popup: ';
  if (popupname.substring(0,7) == '#popup:') {
      popupname = popupname.substring(7);
  }

  virtPage += popupname;
  virtTitle += popupname;
  if (window.Tilda && typeof Tilda.sendEventToStatistics == 'function') {
    Tilda.sendEventToStatistics(virtPage, virtTitle, '', 0);
  } else {

   if(ga) {
     if (window.mainTracker != 'tilda') {
       ga('send', {'hitType':'pageview', 'page':virtPage,'title':virtTitle});
     }
   }

   if (window.mainMetrika > '' && window[window.mainMetrika]) {
     window[window.mainMetrika].hit(virtPage, {title: virtTitle,referer: window.location.href});
   }

  }
}


function t708_onSuccess(t708_form){
	var t708_inputsWrapper = t708_form.find('.t-form__inputsbox');
    var t708_inputsHeight = t708_inputsWrapper.height();
    var t708_inputsOffset = t708_inputsWrapper.offset().top;
    var t708_inputsBottom = t708_inputsHeight + t708_inputsOffset;
	var t708_targetOffset = t708_form.find('.t-form__successbox').offset().top;

    if ($(window).width()>960) {
        var t708_target = t708_targetOffset - 200;
    }	else {
        var t708_target = t708_targetOffset - 100;
    }

    if (t708_targetOffset > $(window).scrollTop() || ($(document).height() - t708_inputsBottom) < ($(window).height() - 100)) {
        t708_inputsWrapper.addClass('t708__inputsbox_hidden');
		setTimeout(function(){
			if ($(window).height() > $('.t-body').height()) {$('.t-tildalabel').animate({ opacity:0 }, 50);}
		}, 300);
    } else {
        $('html, body').animate({ scrollTop: t708_target}, 400);
        setTimeout(function(){t708_inputsWrapper.addClass('t708__inputsbox_hidden');}, 400);
    }

	var successurl = t708_form.data('success-url');
    if(successurl && successurl.length > 0) {
        setTimeout(function(){
            window.location.href= successurl;
        },500);
    }
}
 
function t712_onSuccess(t712_form){
	var t712_inputsWrapper = t712_form.find('.t-form__inputsbox');
    var t712_inputsHeight = t712_inputsWrapper.height();
    var t712_inputsOffset = t712_inputsWrapper.offset().top;
    var t712_inputsBottom = t712_inputsHeight + t712_inputsOffset;
	var t712_targetOffset = t712_form.find('.t-form__successbox').offset().top;

    if ($(window).width()>960) {
        var t712_target = t712_targetOffset - 200;
    }	else {
        var t712_target = t712_targetOffset - 100;
    }

    if (t712_targetOffset > $(window).scrollTop() || ($(document).height() - t712_inputsBottom) < ($(window).height() - 100)) {
        t712_inputsWrapper.addClass('t712__inputsbox_hidden');
		setTimeout(function(){
			if ($(window).height() > $('.t-body').height()) {$('.t-tildalabel').animate({ opacity:0 }, 50);}
		}, 300);		
    } else {
        $('html, body').animate({ scrollTop: t712_target}, 400);
        setTimeout(function(){t712_inputsWrapper.addClass('t712__inputsbox_hidden');}, 400);
    }

	var successurl = t712_form.data('success-url');
    if(successurl && successurl.length > 0) {
        setTimeout(function(){
            window.location.href= successurl;
        },500);
    }

}


function t712_fixcontentheight(id){
        /* correct cover height if content more when cover height */
        var el = $("#rec" + id);
        var hcover=el.find(".t-cover").height();
        var hcontent=el.find("div[data-hook-content]").outerHeight();
        if(hcontent>300 && hcover<hcontent){
         var hcontent=hcontent+120;
         if(hcontent>1000){hcontent+=100;}
         console.log('auto correct cover height: '+hcontent);
         el.find(".t-cover").height(hcontent);
         el.find(".t-cover__filter").height(hcontent);
         el.find(".t-cover__carrier").height(hcontent);
         el.find(".t-cover__wrapper").height(hcontent);
         if($isMobile == false){
          setTimeout(function() {
           var divvideo=el.find(".t-cover__carrier");
           if(divvideo.find('iframe').length>0){
            console.log('correct video from cover_fixcontentheight');
      setWidthHeightYoutubeVideo(divvideo, hcontent+'px');
     }
    }, 2000);
   }
        }
 } 
function t716_onSuccess(t716_form){
	var t716_inputsWrapper = t716_form.find('.t-form__inputsbox');
    var t716_inputsHeight = t716_inputsWrapper.height();
    var t716_inputsOffset = t716_inputsWrapper.offset().top;
    var t716_inputsBottom = t716_inputsHeight + t716_inputsOffset;
	var t716_targetOffset = t716_form.find('.t-form__successbox').offset().top;

    if ($(window).width()>960) {
        var t716_target = t716_targetOffset - 200;
    }	else {
        var t716_target = t716_targetOffset - 100;
    }

    if (t716_targetOffset > $(window).scrollTop() || ($(document).height() - t716_inputsBottom) < ($(window).height() - 100)) {
        t716_inputsWrapper.addClass('t716__inputsbox_hidden');
		setTimeout(function(){
			if ($(window).height() > $('.t-body').height()) {$('.t-tildalabel').animate({ opacity:0 }, 50);}
		}, 300);
    } else {
        $('html, body').animate({ scrollTop: t716_target}, 400);
        setTimeout(function(){t716_inputsWrapper.addClass('t716__inputsbox_hidden');}, 400);
    }

	var successurl = t716_form.data('success-url');
    if(successurl && successurl.length > 0) {
        setTimeout(function(){
            window.location.href= successurl;
        },500);
    }

}


function t716_fixcontentheight(id){
        /* correct cover height if content more when cover height */
        var el = $("#rec" + id);
        var hcover=el.find(".t-cover").height();
        var hcontent=el.find("div[data-hook-content]").outerHeight();
        if(hcontent>300 && hcover<hcontent){
         var hcontent=hcontent+120;
         if(hcontent>1000){hcontent+=100;}
         console.log('auto correct cover height: '+hcontent);
         el.find(".t-cover").height(hcontent);
         el.find(".t-cover__filter").height(hcontent);
         el.find(".t-cover__carrier").height(hcontent);
         el.find(".t-cover__wrapper").height(hcontent);
         if($isMobile == false){
          setTimeout(function() {
           var divvideo=el.find(".t-cover__carrier");
           if(divvideo.find('iframe').length>0){
            console.log('correct video from cover_fixcontentheight');
      setWidthHeightYoutubeVideo(divvideo, hcontent+'px');
     }
    }, 2000);
   }
        }
 }
 
function t718_onSuccess(t718_form){
	var t718_inputsWrapper = t718_form.find('.t-form__inputsbox');
    var t718_inputsHeight = t718_inputsWrapper.height();
    var t718_inputsOffset = t718_inputsWrapper.offset().top;
    var t718_inputsBottom = t718_inputsHeight + t718_inputsOffset;
	var t718_targetOffset = t718_form.find('.t-form__successbox').offset().top;

    if ($(window).width()>960) {
        var t718_target = t718_targetOffset - 200;
    }	else {
        var t718_target = t718_targetOffset - 100;
    }

    if (t718_targetOffset > $(window).scrollTop() || ($(document).height() - t718_inputsBottom) < ($(window).height() - 100)) {
        t718_inputsWrapper.addClass('t718__inputsbox_hidden');
		setTimeout(function(){
			if ($(window).height() > $('.t-body').height()) {$('.t-tildalabel').animate({ opacity:0 }, 50);}
		}, 300);
    } else {
        $('html, body').animate({ scrollTop: t718_target}, 400);
        setTimeout(function(){t718_inputsWrapper.addClass('t718__inputsbox_hidden');}, 400);
    }

	var successurl = t718_form.data('success-url');
    if(successurl && successurl.length > 0) {
        setTimeout(function(){
            window.location.href= successurl;
        },500);
    }

}
 
function t720_onSuccess(t720_form){
	var t720_inputsWrapper = t720_form.find('.t-form__inputsbox');
    var t720_inputsHeight = t720_inputsWrapper.height();
    var t720_inputsOffset = t720_inputsWrapper.offset().top;
    var t720_inputsBottom = t720_inputsHeight + t720_inputsOffset;
	var t720_targetOffset = t720_form.find('.t-form__successbox').offset().top;

    if ($(window).width()>960) {
        var t720_target = t720_targetOffset - 200;
    }	else {
        var t720_target = t720_targetOffset - 100;
    }

    if (t720_targetOffset > $(window).scrollTop() || ($(document).height() - t720_inputsBottom) < ($(window).height() - 100)) {
        t720_inputsWrapper.addClass('t720__inputsbox_hidden');
		setTimeout(function(){
			if ($(window).height() > $('.t-body').height()) {$('.t-tildalabel').animate({ opacity:0 }, 50);}
		}, 300);
    } else {
        $('html, body').animate({ scrollTop: t720_target}, 400);
        setTimeout(function(){t720_inputsWrapper.addClass('t720__inputsbox_hidden');}, 400);
    }

	var successurl = t720_form.data('success-url');
    if(successurl && successurl.length > 0) {
        setTimeout(function(){
            window.location.href= successurl;
        },500);
    }

}


function t720_fixcontentheight(id){
        /* correct cover height if content more when cover height */
        var el = $("#rec" + id);
        var hcover=el.find(".t-cover").height();
        var hcontent=el.find("div[data-hook-content]").outerHeight();
        if(hcontent>300 && hcover<hcontent){
         var hcontent=hcontent+120;
         if(hcontent>1000){hcontent+=100;}
         console.log('auto correct cover height: '+hcontent);
         el.find(".t-cover").height(hcontent);
         el.find(".t-cover__filter").height(hcontent);
         el.find(".t-cover__carrier").height(hcontent);
         el.find(".t-cover__wrapper").height(hcontent);
         if($isMobile == false){
          setTimeout(function() {
           var divvideo=el.find(".t-cover__carrier");
           if(divvideo.find('iframe').length>0){
            console.log('correct video from cover_fixcontentheight');
      setWidthHeightYoutubeVideo(divvideo, hcontent+'px');
     }
    }, 2000);
   }
        }
 }
 
function t722_onSuccess(t722_form){
	var t722_inputsWrapper = t722_form.find('.t-form__inputsbox');
    var t722_inputsHeight = t722_inputsWrapper.height();
    var t722_inputsOffset = t722_inputsWrapper.offset().top;
    var t722_inputsBottom = t722_inputsHeight + t722_inputsOffset;
	var t722_targetOffset = t722_form.find('.t-form__successbox').offset().top;

    if ($(window).width()>960) {
        var t722_target = t722_targetOffset - 200;
    }	else {
        var t722_target = t722_targetOffset - 100;
    }

    if (t722_targetOffset > $(window).scrollTop() || ($(document).height() - t722_inputsBottom) < ($(window).height() - 100)) {
        t722_inputsWrapper.addClass('t722__inputsbox_hidden');
		setTimeout(function(){
			if ($(window).height() > $('.t-body').height()) {$('.t-tildalabel').animate({ opacity:0 }, 50);}
		}, 300);
    } else {
        $('html, body').animate({ scrollTop: t722_target}, 400);
        setTimeout(function(){t722_inputsWrapper.addClass('t722__inputsbox_hidden');}, 400);
    }

	var successurl = t722_form.data('success-url');
    if(successurl && successurl.length > 0) {
        setTimeout(function(){
            window.location.href= successurl;
        },500);
    }

}


function t722_fixcontentheight(id){
        /* correct cover height if content more when cover height */
        var el = $("#rec" + id);
        var hcover=el.find(".t-cover").height();
        var hcontent=el.find("div[data-hook-content]").outerHeight();
        if(hcontent>300 && hcover<hcontent){
         var hcontent=hcontent+120;
         if(hcontent>1000){hcontent+=100;}
         console.log('auto correct cover height: '+hcontent);
         el.find(".t-cover").height(hcontent);
         el.find(".t-cover__filter").height(hcontent);
         el.find(".t-cover__carrier").height(hcontent);
         el.find(".t-cover__wrapper").height(hcontent);
         if($isMobile == false){
          setTimeout(function() {
           var divvideo=el.find(".t-cover__carrier");
           if(divvideo.find('iframe').length>0){
            console.log('correct video from cover_fixcontentheight');
      setWidthHeightYoutubeVideo(divvideo, hcontent+'px');
     }
    }, 2000);
   }
        }
 }
 
function t724_init(recid) {
    try {
        localStorage.setItem('localStorageTest', 1);
        localStorage.removeItem('localStorageTest');
    } catch (e) { return; }
    if (window.$isMobile) { return; }
    var el = $('#rec'+recid).find('.t724__opener');
    var name = el.attr('data-cookie-name');
    var time = el.attr('data-cookie-time')*24*60*60*1000;
    var html = document.documentElement;
    var lstorage = sessionStorage.getItem(name);
    $('html').on('mouseleave', function(e){
        if (e.clientY > 10) { return; }
        var curDate = Math.floor(Date.now());
        if (time==0){
            lstorage = sessionStorage.getItem(name);
        } else {
            lstorage = localStorage.getItem(name);
        }
        if (((lstorage==null || typeof lstorage=='undefined') && !el.hasClass('t724__opener_activated')) || (lstorage<(curDate-time) && time>0)) {
            el.trigger('click');
            el.addClass('t724__opener_activated');
            if (time==0){ sessionStorage.setItem(name, curDate); }
            if (time>0) { localStorage.setItem(name, curDate); }
        }
    });

}
 
function t744_init(recid){
  t_sldsInit(recid);

  setTimeout(function(){
    t_prod__init(recid);
  }, 500);

  $('#rec'+recid).find('.t744').bind('displayChanged',function(){
      t744_updateSlider(recid);
  });
}

function t744_updateSlider(recid){
  var el=$('#rec'+recid);
  t_slds_SliderWidth(recid);
  sliderWrapper = el.find('.t-slds__items-wrapper');
  sliderWidth = el.find('.t-slds__container').width();
  pos = parseFloat(sliderWrapper.attr('data-slider-pos'));
  sliderWrapper.css({
      transform: 'translate3d(-' + (sliderWidth * pos) + 'px, 0, 0)'
  });
  t_slds_UpdateSliderHeight(recid);
  t_slds_UpdateSliderArrowsHeight(recid);
} 
function t746_initPopup(recid){
  $('#rec'+recid).attr('data-animationappear','off');
  $('#rec'+recid).css('opacity','1');
  var el=$('#rec'+recid).find('.t-popup'),
      hook=el.attr('data-tooltip-hook'),
      analitics=el.attr('data-track-popup');
  t746_imageHeight(recid);
  t746_arrowWidth(recid);
  t746_show(recid);
  t746_hide(recid);
  $(window).bind('resize', t_throttle(function(){
    t746_arrowWidth(recid);
  }, 200));
  $( window ).on( "orientationchange", function( event ) {
     setTimeout(function() { t_slds_updateSlider(recid); }, 500);
    });
  if(hook!==''){
    var obj = $('a[href="'+hook+'"]');
    obj.click(function(e){
      t746_showPopup(recid);
      t_sldsInit(recid);
      t_slds_updateSlider(recid);
      t746_arrowWidth(recid);
      t746_resizePopup(recid);
      e.preventDefault();
      if(window.lazy=='y'){t_lazyload_update();}
      if (analitics > '') {
        var virtTitle = hook;
        if (virtTitle.substring(0,7) == '#popup:') {
            virtTitle = virtTitle.substring(7);
        }
        Tilda.sendEventToStatistics(analitics, virtTitle);
      }
    });
  }
}

function t746_showPopup(recid){
  var el=$('#rec'+recid),
      popup = el.find('.t-popup')
      iframeBody = el.find('.t746__frame');;

  popup.css('display', 'block');
  if(window.lazy=='y'){t_lazyload_update();}
  setTimeout(function() {
    popup.find('.t-popup__container').addClass('t-popup__container-animated');
    popup.addClass('t-popup_show');
  }, 50);

  $('body').addClass('t-body_popupshowed');

  el.find('.t-popup').click(function(e){
    if (e.target == this) {
      iframeBody.html('').css('z-index', '');
      t746_closePopup();
    }
  });

  el.find('.t-popup__close').click(function(e){
    iframeBody.html('').css('z-index', '');
    t746_closePopup();
  });

  $(document).keydown(function(e) {
    if (e.keyCode == 27) {
      t746_closePopup();
      iframeBody.html('').css('z-index', '');
    }
  });
}

function t746_closePopup(){
  $('body').removeClass('t-body_popupshowed');
  $('.t-popup').removeClass('t-popup_show');
  setTimeout(function() {
    $('.t-popup').not('.t-popup_show').css('display', 'none');
  }, 300);
}

function t746_resizePopup(recid){
  var el = $("#rec"+recid),
      div = el.find(".t-popup__container").height(),
      win = $(window).height(),
      popup = el.find(".t-popup__container");
  if (div > win ) {
    popup.addClass('t-popup__container-static');
  } else {
    popup.removeClass('t-popup__container-static');
  }
}
/* deprecated */
function t746_sendPopupEventToStatistics(popupname) {
  var virtPage = '/tilda/popup/';
  var virtTitle = 'Popup: ';
  if (popupname.substring(0,7) == '#popup:') {
      popupname = popupname.substring(7);
  }
    
  virtPage += popupname;
  virtTitle += popupname;
    
  if(ga) {
    if (window.mainTracker != 'tilda') {
      ga('send', {'hitType':'pageview', 'page':virtPage,'title':virtTitle});
    }
  }
  
  if (window.mainMetrika > '' && window[window.mainMetrika]) {
    window[window.mainMetrika].hit(virtPage, {title: virtTitle,referer: window.location.href});
  }
}

function t746_show(recid) {  
  var el=$("#rec"+recid),
      play = el.find('.t746__play');
  play.click(function(){
    if($(this).attr('data-slider-video-type')=='youtube'){
      var url = $(this).attr('data-slider-video-url');
      $(this).next().html("<iframe class=\"t746__iframe\" width=\"100%\" height=\"100%\" src=\"https://www.youtube.com/embed/"+url+"?autoplay=1\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>");
    }
    if($(this).attr('data-slider-video-type')=='vimeo'){
      var url = $(this).attr('data-slider-video-url');
      $(this).next().html("<iframe class=\"t746__iframe\" width=\"100%\" height=\"100%\" src=\"https://player.vimeo.com/video/"+url+"?autoplay=1\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>");
    }
    $(this).next().css('z-index', '3');
  });
}

function t746_hide(recid) {  
  var el=$("#rec"+recid),
      body = el.find('.t746__frame');
  el.on('updateSlider', function(){
    body.html('').css('z-index', '');
  });
}

function t746_imageHeight(recid) {  
  var el=$("#rec"+recid); 
  var image = el.find(".t746__separator");
  image.each(function() {
    var width = $(this).attr("data-slider-image-width");
    var height = $(this).attr("data-slider-image-height"); 
    var ratio = height/width;
    var padding = ratio*100;      
    $(this).css("padding-bottom",padding+"%");    
  });
}

function t746_arrowWidth(recid) {  
  var el=$("#rec"+recid),
      arrow = el.find('.t-slds__arrow_wrapper'),
      slideWidth = el.find('.t-slds__wrapper').width(),
      windowWidth = $(window).width(),
      arrowWidth = windowWidth-slideWidth;
  if(windowWidth>960){
    arrow.css('width', arrowWidth/2);
  } else {
    arrow.css('width', '');
  }
} 
function t750_init(recid){
  t_sldsInit(recid);

  setTimeout(function(){
    t_prod__init(recid);
    t750_initPopup(recid);
  }, 500);
}

function t750_initPopup(recid){
  $('#rec'+recid).attr('data-animationappear','off');
  $('#rec'+recid).css('opacity','1');
  var el=$('#rec'+recid).find('.t-popup'),
      hook=el.attr('data-tooltip-hook'),
      analitics=el.attr('data-track-popup');
  if(hook!==''){
    var obj = $('a[href="'+hook+'"]');
    obj.click(function(e){
      t750_showPopup(recid);
      e.preventDefault();
      if(window.lazy=='y'){t_lazyload_update();}
      if (analitics > '') {
        var virtTitle = hook;
        if (virtTitle.substring(0,7) == '#popup:') {
            virtTitle = virtTitle.substring(7);
        }
        Tilda.sendEventToStatistics(analitics, virtTitle);
      }

    });
  }
}

function t750_showPopup(recid){
  var el=$('#rec'+recid),
      popup = el.find('.t-popup'),
      sliderWrapper = el.find('.t-slds__items-wrapper'),
      sliderWidth = el.find('.t-slds__container').width(),
      pos = parseFloat(sliderWrapper.attr('data-slider-pos'));

  popup.css('display', 'block');
  setTimeout(function() {
    popup.find('.t-popup__container').addClass('t-popup__container-animated');
    popup.addClass('t-popup_show');
    t_slds_SliderWidth(recid);
    sliderWrapper = el.find('.t-slds__items-wrapper');
    sliderWidth = el.find('.t-slds__container').width();
    pos = parseFloat(sliderWrapper.attr('data-slider-pos'));
    sliderWrapper.css({
        transform: 'translate3d(-' + (sliderWidth * pos) + 'px, 0, 0)'
    });
    t_slds_UpdateSliderHeight(recid);
    t_slds_UpdateSliderArrowsHeight(recid);
    if(window.lazy=='y'){t_lazyload_update();}
  }, 50);

  $('body').addClass('t-body_popupshowed');

  el.find('.t-popup').click(function(e){
    if (e.target == this) {
      t750_closePopup();
    }
  });

  el.find('.t-popup__close, .t750__close-text').click(function(e){
    t750_closePopup();
  });

  $(document).keydown(function(e) {
    if (e.keyCode == 27) {
      t750_closePopup();
    }
  });
}

function t750_closePopup(){
  $('body').removeClass('t-body_popupshowed');
  $('.t-popup').removeClass('t-popup_show');
  setTimeout(function() {
    $('.t-popup').not('.t-popup_show').css('display', 'none');
  }, 300);
}
/*deprecated*/
function t750_sendPopupEventToStatistics(popupname) {
  var virtPage = '/tilda/popup/';
  var virtTitle = 'Popup: ';
  if (popupname.substring(0,7) == '#popup:') {
      popupname = popupname.substring(7);
  }

  virtPage += popupname;
  virtTitle += popupname;

  if(ga) {
    if (window.mainTracker != 'tilda') {
      ga('send', {'hitType':'pageview', 'page':virtPage,'title':virtTitle});
    }
  }

  if (window.mainMetrika > '' && window[window.mainMetrika]) {
    window[window.mainMetrika].hit(virtPage, {title: virtTitle,referer: window.location.href});
  }
}
 
function t754__init(recid){
  setTimeout(function(){
    t_prod__init(recid);
    t754_initPopup(recid);
    t754__updateLazyLoad(recid);
  }, 500);
}

function t754__updateLazyLoad(recid) {
  var scrollContainer = $("#rec"+recid+" .t754__container_mobile-flex");
  var curMode = $(".t-records").attr("data-tilda-mode");
  if (scrollContainer.length && curMode!="edit" && curMode!="preview") {
    scrollContainer.bind('scroll', t_throttle(function() {
        t_lazyload_update();
    }, 500));
  }
}

function t754_initPopup(recid){
  var rec=$('#rec'+recid); 
  rec.find('[href^="#prodpopup"]').one( "click", function(e) {
      e.preventDefault();	  
	  var el_popup=rec.find('.t-popup');
	  var el_prod=$(this).closest('.js-product');
	  var lid_prod=el_prod.attr('data-product-lid');
	  t_sldsInit(recid+' #t754__product-' + lid_prod + '');
  });
  rec.find('[href^="#prodpopup"]').click(function(e){	
      e.preventDefault();
      t754_showPopup(recid);	  
	  var el_popup=rec.find('.t-popup');
	  var el_prod=$(this).closest('.js-product');
	  var lid_prod=el_prod.attr('data-product-lid');
	  el_popup.find('.js-product').css('display','none');
	  var el_fullprod=el_popup.find('.js-product[data-product-lid="'+lid_prod+'"]')
	  el_fullprod.css('display','block');
    
    var analitics=el_popup.attr('data-track-popup');
    if (analitics > '') {
        var virtTitle = el_fullprod.find('.js-product-name').text();
        if (! virtTitle) {
            virtTitle = 'prod'+lid_prod;
        }
        Tilda.sendEventToStatistics(analitics, virtTitle);
    }

	  var curUrl = window.location.href;
      if (curUrl.indexOf('#!/tproduct/')<0 && curUrl.indexOf('%23!/tproduct/')<0) {
        if (typeof history.replaceState!='undefined'){
          window.history.replaceState('','',window.location.href+'#!/tproduct/'+recid+'-'+lid_prod);
        }
      }	
      t754_updateSlider(recid+' #t754__product-' + lid_prod + '');
      if(window.lazy=='y'){t_lazyload_update();}
  });
  if ($('#record'+recid).length==0){ t754_checkUrl(recid); }
  t754_copyTypography(recid);
}

function t754_checkUrl(recid){
  var curUrl = window.location.href;
  var tprodIndex = curUrl.indexOf('#!/tproduct/');
  if(/iPhone|iPad|iPod/i.test(navigator.userAgent) && tprodIndex<0){ tprodIndex = curUrl.indexOf('%23!/tproduct/'); }
  if (tprodIndex>=0){
    var curUrl = curUrl.substring(tprodIndex,curUrl.length);
    var curProdLid = curUrl.substring(curUrl.indexOf('-')+1,curUrl.length);
    var rec=$('#rec'+recid);
    if (curUrl.indexOf(recid)>=0 && rec.find('[data-product-lid='+curProdLid+']').length) {
  	  rec.find('[data-product-lid='+curProdLid+'] [href^="#prodpopup"]').triggerHandler('click');
    }
  }
}

function t754_updateSlider(recid) {
    var el=$('#rec'+recid);
    t_slds_SliderWidth(recid);
    var sliderWrapper = el.find('.t-slds__items-wrapper');
    var sliderWidth = el.find('.t-slds__container').width();
    var pos = parseFloat(sliderWrapper.attr('data-slider-pos'));
    sliderWrapper.css({
        transform: 'translate3d(-' + (sliderWidth * pos) + 'px, 0, 0)'
    });
    t_slds_UpdateSliderHeight(recid);
    t_slds_UpdateSliderArrowsHeight(recid);
}

function t754_showPopup(recid){
  var el=$('#rec'+recid);
  var popup = el.find('.t-popup');

  popup.css('display', 'block');
  setTimeout(function() {
    popup.find('.t-popup__container').addClass('t-popup__container-animated');
    popup.addClass('t-popup_show');
    if(window.lazy=='y'){t_lazyload_update();}
  }, 50);

  $('body').addClass('t-body_popupshowed');

  el.find('.t-popup').click(function(e){
    if (e.target == this) {
      t754_closePopup();
    }
  });

  el.find('.t-popup__close, .t754__close-text').click(function(e){
    t754_closePopup();
  });

  $(document).keydown(function(e) {
    if (e.keyCode == 27) {
      t754_closePopup();
    }
  });
}

function t754_closePopup(){
  $('body').removeClass('t-body_popupshowed');
  $('.t-popup').removeClass('t-popup_show');
  var curUrl=window.location.href;
  var indexToRemove=curUrl.indexOf('#!/tproduct/');
  if(/iPhone|iPad|iPod/i.test(navigator.userAgent) && indexToRemove<0){ indexToRemove=curUrl.indexOf('%23!/tproduct/'); }
  curUrl=curUrl.substring(0,indexToRemove);
  setTimeout(function() {
    $(".t-popup").scrollTop(0);  
    $('.t-popup').not('.t-popup_show').css('display', 'none');
	if (typeof history.replaceState!='undefined'){
      window.history.replaceState('','',curUrl);
    }                                                                        	
  }, 300);
}

function t754_removeSizeStyles(styleStr){
	if(typeof styleStr!="undefined" && (styleStr.indexOf('font-size')>=0 || styleStr.indexOf('padding-top')>=0 || styleStr.indexOf('padding-bottom')>=0)){
		var styleStrSplitted = styleStr.split(';');
		styleStr = "";
		for (var i=0;i<styleStrSplitted.length;i++){
			if(styleStrSplitted[i].indexOf('font-size')>=0 || styleStrSplitted[i].indexOf('padding-top')>=0 || styleStrSplitted[i].indexOf('padding-bottom')>=0){
				styleStrSplitted.splice(i,1); i--; continue;
			}			
			if(styleStrSplitted[i]==""){continue;}
			styleStr+=styleStrSplitted[i]+";";
		}
	}
	return styleStr;
}

function t754_copyTypography(recid){
  var rec=$('#rec'+recid);
  var titleStyle=rec.find('.t754__title').attr('style');
	var descrStyle=rec.find('.t754__descr').attr('style');
	rec.find('.t-popup .t754__title').attr("style",t754_removeSizeStyles(titleStyle));
	rec.find('.t-popup .t754__descr, .t-popup .t754__text').attr("style",t754_removeSizeStyles(descrStyle));
} 
function t756_init(recid){
  t_sldsInit(recid);

  setTimeout(function(){
    t_prod__init(recid);
    t756_initPopup(recid);
  }, 500);
}

function t756_showPopup(recid){
  var el=$('#rec'+recid),
      popup = el.find('.t-popup'),
      sliderWrapper = el.find('.t-slds__items-wrapper'),
      sliderWidth = el.find('.t-slds__container').width(),
      pos = parseFloat(sliderWrapper.attr('data-slider-pos'));

  popup.css('display', 'block');

  setTimeout(function() {
    popup.find('.t-popup__container').addClass('t-popup__container-animated');
    popup.addClass('t-popup_show');
    t_slds_SliderWidth(recid);
    sliderWrapper = el.find('.t-slds__items-wrapper');
    sliderWidth = el.find('.t-slds__container').width();
    pos = parseFloat(sliderWrapper.attr('data-slider-pos'));
    sliderWrapper.css({
        transform: 'translate3d(-' + (sliderWidth * pos) + 'px, 0, 0)'
    });
    t_slds_UpdateSliderHeight(recid);
    t_slds_UpdateSliderArrowsHeight(recid);
    if(window.lazy=='y'){t_lazyload_update();}
  }, 50);

  $('body').addClass('t-body_popupshowed');

  el.find('.t-popup').click(function(e){
    if (e.target == this) { t756_closePopup(); }
  });

  el.find('.t-popup__close, .t756__close-text').click(function(e){
    t756_closePopup();
  });

  el.find('a[href*=#]').click(function(e){
    var url = $(this).attr('href');
    if (!url || url.substring(0,7) != '#price:') {
      t756_closePopup();
      if (!url || url.substring(0,7) == '#popup:') {
        setTimeout(function() {
          $('body').addClass('t-body_popupshowed');
        }, 300);
      }
    }
  });

  $(document).keydown(function(e) {
    if (e.keyCode == 27) { t756_closePopup(); }
  });
}

function t756_closePopup(){
  $('body').removeClass('t-body_popupshowed');
  $('.t-popup').removeClass('t-popup_show');
  setTimeout(function() {
    $('.t-popup').not('.t-popup_show').css('display', 'none');
  }, 300);
}
/* deprecated */
function t756_sendPopupEventToStatistics(popupname) {
  var virtPage = '/tilda/popup/';
  var virtTitle = 'Popup: ';
  if (popupname.substring(0,7) == '#popup:') {
      popupname = popupname.substring(7);
  }
    
  virtPage += popupname;
  virtTitle += popupname;
  if (window.Tilda && typeof Tilda.sendEventToStatistics == 'function') {
    Tilda.sendEventToStatistics(virtPage, virtTitle, '', 0);
  } else {
    if(ga) {
      if (window.mainTracker != 'tilda') {
        ga('send', {'hitType':'pageview', 'page':virtPage,'title':virtTitle});
      }
    }
  
    if (window.mainMetrika > '' && window[window.mainMetrika]) {
      window[window.mainMetrika].hit(virtPage, {title: virtTitle,referer: window.location.href});
    }
  }
}

function t756_initPopup(recid){
  $('#rec'+recid).attr('data-animationappear','off');
  $('#rec'+recid).css('opacity','1');
  var el=$('#rec'+recid).find('.t-popup'),
      hook=el.attr('data-tooltip-hook'),
      analitics=el.attr('data-track-popup');
  if(hook!==''){
    var obj = $('a[href="'+hook+'"]');
    obj.click(function(e){
      t756_showPopup(recid);
      e.preventDefault();

      if (analitics > '') {
        var virtTitle = hook;
        if (virtTitle.substring(0,7) == '#popup:') {
            virtTitle = virtTitle.substring(7);
        }
        Tilda.sendEventToStatistics(analitics, virtTitle);
      }
    });
  }
}
 
function t760_init(recid){
  setTimeout(function(){
    t_prod__init(recid);
  }, 500);

  t760_floating(recid);
  $(window).bind('resize', t_throttle(function(){
    t760_floating(recid);
  }, 300)); 
  
  $('#rec'+recid).find('.t760').bind('displayChanged',function(){
    t760_floating(recid);
  });  
}

function t760_floating(recid){
  var element = $('#rec'+recid);
  if($isMobile == false){    
    element.find(".t760__floatable[data-floating='yes']").each(function() {
      var div=$(this);
      t760_floating_init(div);
    });
  }
}

function t760_floating_init(el){
  var wnd=$(window);
  var col=el.parent();

  el.css('max-width', '');
  el.css('max-width',el.width());
  el.css('width','100%');
  col.css('min-height', '');
  col.css('min-height',el.height());
  $(window).load(function(){
    col.css('min-height',el.height());
  });

  wnd.bind('scroll', t_throttle(function(){
     t760_floating_scroll(el,wnd,col);
  }, 20));      

  wnd.resize(function() {
       wnd.scroll();
  });

  wnd.scroll();
}

function t760_floating_scroll(el,wnd,col){
  var wnd_height = wnd.height();
  var wnd_width = wnd.width();

  if(wnd_width<=1024){
    el.removeClass('t760__fixedTop');
    el.removeClass('t760__fixedBottom');
    el.removeClass('t760__floating');
    return('');
  }

  el.css('max-width',col.width());

  if(col.height()<el.height() && col.height()>0){
    col.height(el.height());
  }

  var el_height = el.height();
  var col_top = col.offset().top;
  var col_width = col.width();
  var col_height = col.height();
  var col_bottom = col_top + col_height;

  var wnd_top = wnd.scrollTop();
  var wnd_bottom = wnd_top + wnd_height;

  var offset = parseFloat(el.attr('data-offset-top'));

  if(wnd_top+el_height+offset >= col_bottom){
    el.css('top', '');
    el.addClass('t760__fixedBottom');
    el.removeClass('t760__fixedTop');
    el.removeClass('t760__floating');
  }else if(wnd_top+offset > col_top){
    el.css('top', offset);
    el.addClass('t760__floating');
    el.removeClass('t760__fixedBottom');
    el.removeClass('t760__fixedTop');
  }else{
    el.css('top', '');
    el.addClass('t760__fixedTop');
    el.removeClass('t760__fixedBottom');  
    el.removeClass('t760__floating');
  }
} 
function t762_init(recid){
  t_sldsInit(recid);

  setTimeout(function(){
    t_prod__init(recid);
  }, 500);
  
  $('#rec'+recid).find('.t762').bind('displayChanged',function(){
      t_slds_updateSlider(recid);
  });  
}
 
function t764_updateSlider(recid){
  var el=$('#rec'+recid);
  t_slds_SliderWidth(recid);
  sliderWrapper = el.find('.t-slds__items-wrapper');
  sliderWidth = el.find('.t-slds__container').width();
  pos = parseFloat(sliderWrapper.attr('data-slider-pos'));
  sliderWrapper.css({
      transform: 'translate3d(-' + (sliderWidth * pos) + 'px, 0, 0)'
  });
  t_slds_UpdateSliderHeight(recid);
  t_slds_UpdateSliderArrowsHeight(recid);
} 
function t766_init(recid){
  t_sldsInit(recid);

  setTimeout(function(){
    t_prod__init(recid);
    t766_initPopup(recid);
  }, 500);
}


function t766_showPopup(recid){
  var el=$('#rec'+recid),
      popup = el.find('.t-popup'),
      sliderWrapper = el.find('.t-slds__items-wrapper'),
      sliderWidth = el.find('.t-slds__container').width(),
      pos = parseFloat(sliderWrapper.attr('data-slider-pos'));

  popup.css('display', 'block');

  setTimeout(function() {
    popup.find('.t-popup__container').addClass('t-popup__container-animated');
    popup.addClass('t-popup_show');
    t_slds_SliderWidth(recid);
    sliderWrapper = el.find('.t-slds__items-wrapper');
    sliderWidth = el.find('.t-slds__container').width();
    pos = parseFloat(sliderWrapper.attr('data-slider-pos'));
    sliderWrapper.css({
        transform: 'translate3d(-' + (sliderWidth * pos) + 'px, 0, 0)'
    });
    t_slds_UpdateSliderHeight(recid);
    t_slds_UpdateSliderArrowsHeight(recid);
    if(window.lazy=='y'){t_lazyload_update();}
  }, 50);

  $('body').addClass('t-body_popupshowed');

  el.find('.t-popup').click(function(e){
    if (e.target == this) { t766_closePopup(); }
  });

  el.find('.t-popup__close, .t766__close-text').click(function(e){
    t766_closePopup();
  });

  el.find('a[href*=#]').click(function(e){
    var url = $(this).attr('href');
    if (!url || url.substring(0,7) != '#price:') {
      t766_closePopup();
      if (!url || url.substring(0,7) == '#popup:') {
        setTimeout(function() {
          $('body').addClass('t-body_popupshowed');
        }, 300);
      }
    }
  });

  $(document).keydown(function(e) {
    if (e.keyCode == 27) { t766_closePopup(); }
  });
}

function t766_closePopup(){
  $('body').removeClass('t-body_popupshowed');
  $('.t-popup').removeClass('t-popup_show');
  setTimeout(function() {
    $('.t-popup').not('.t-popup_show').css('display', 'none');
  }, 300);
}
/* deprecated */
function t766_sendPopupEventToStatistics(popupname) {
  var virtPage = '/tilda/popup/';
  var virtTitle = 'Popup: ';
  if (popupname.substring(0,7) == '#popup:') {
      popupname = popupname.substring(7);
  }
    
  virtPage += popupname;
  virtTitle += popupname;
  if (window.Tilda && typeof Tilda.sendEventToStatistics == 'function') {
    Tilda.sendEventToStatistics(virtPage, virtTitle, '', 0);
  } else {
    if(ga) {
      if (window.mainTracker != 'tilda') {
        ga('send', {'hitType':'pageview', 'page':virtPage,'title':virtTitle});
      }
    }
  
    if (window.mainMetrika > '' && window[window.mainMetrika]) {
      window[window.mainMetrika].hit(virtPage, {title: virtTitle,referer: window.location.href});
    }
  }
}

function t766_initPopup(recid){
  $('#rec'+recid).attr('data-animationappear','off');
  $('#rec'+recid).css('opacity','1');
  var el=$('#rec'+recid).find('.t-popup'),
      hook=el.attr('data-tooltip-hook'),
      analitics=el.attr('data-track-popup');
  t_sldsInit(recid);
  if(hook!==''){
    var obj = $('a[href="'+hook+'"]');
    obj.click(function(e){
      t766_showPopup(recid);
      e.preventDefault();

      if (analitics > '') {
        var virtTitle = hook;
        if (virtTitle.substring(0,7) == '#popup:') {
            virtTitle = virtTitle.substring(7);
        }
        Tilda.sendEventToStatistics(analitics, virtTitle);
      }
    });
  }
}
 
function t770_init(recid){
  var rec=$('#rec'+recid);
  var navElem=rec.find('.t770');
  var isFixed=(navElem.css('position')=='fixed');
  var redactorMode=navElem.hasClass('t770_redactor-mode');

  if(!redactorMode){
  	t770_highlight();
  	navElem.removeClass('t770__beforeready');
  	if(isFixed){
        t770_checkAnchorLinks(recid);
  	}
  	if(isFixed && navElem.attr('data-bgopacity-two')){
        t770_changebgopacitymenu(recid);
        $(window).bind('scroll', t_throttle(function(){t770_changebgopacitymenu(recid)}, 200));
  	}
    if(isFixed && navElem.attr('data-appearoffset')){
        navElem.removeClass('t770__beforeready');
        t770_appearMenu(recid);
        $(window).bind('scroll', t_throttle(function(){t770_appearMenu(recid)}, 200));
    }
  }
  if(rec.find('.t770__imglogo').attr('data-img-width')){
  	t770_setLogoPadding(recid);
  }
  if(rec.find('.t770__mobile_burger').length){
	  t770_createMobileMenu(recid);
  }

  t770_setBg(recid);
  $(window).bind('resize', t_throttle(function(){t770_setBg(recid);}, 200));
}


function t770_setLogoPadding(recid){
	if($(window).width()>980){			  
        var t770__menu = $('#rec'+recid+' .t770');
        var t770__logo=t770__menu.find('.t770__logowrapper');	  
        var t770__leftpart=t770__menu.find('.t770__leftwrapper');
        var t770__rightpart=t770__menu.find('.t770__rightwrapper');
        t770__leftpart.css("padding-right",t770__logo.width()/2+50);
        t770__rightpart.css("padding-left",t770__logo.width()/2+50);			        
	}
}

function t770_highlight(){
  var url=window.location.href;
  var pathname=window.location.pathname;
  if(url.substr(url.length - 1) == "/"){ url = url.slice(0,-1); }
  if(pathname.substr(pathname.length - 1) == "/"){ pathname = pathname.slice(0,-1); }
  if(pathname.charAt(0) == "/"){ pathname = pathname.slice(1); }
  if(pathname == ""){ pathname = "/"; }
  $(".t770__list_item a[href='"+url+"']").addClass("t-active");
  $(".t770__list_item a[href='"+url+"/']").addClass("t-active");
  $(".t770__list_item a[href='"+pathname+"']").addClass("t-active");
  $(".t770__list_item a[href='/"+pathname+"']").addClass("t-active");
  $(".t770__list_item a[href='"+pathname+"/']").addClass("t-active");
  $(".t770__list_item a[href='/"+pathname+"/']").addClass("t-active");
}

function t770_checkAnchorLinks(recid) {
    if ($(window).width() >= 960) {
        var t770_navLinks = $("#rec" + recid + " .t770__desktoplist .t770__list_item a:not(.tooltipstered)[href*='#']");
        if (t770_navLinks.length > 0) {
            t770_catchScroll(t770_navLinks);
        }
    }
}

function t770_catchScroll(t770_navLinks) {
    var t770_clickedSectionId = null,
        t770_sections = new Array(),
        t770_sectionIdTonavigationLink = [],
        t770_interval = 100,
        t770_lastCall, t770_timeoutId;
    t770_navLinks = $(t770_navLinks.get().reverse());
    t770_navLinks.each(function() {
        var t770_cursection = t770_getSectionByHref($(this));
        if (typeof t770_cursection.attr("id") != "undefined") {
            t770_sections.push(t770_cursection);
        }
        t770_sectionIdTonavigationLink[t770_cursection.attr("id")] = $(this);
    });
		t770_updateSectionsOffsets(t770_sections);
    t770_sections.sort(function(a, b) {
      return b.attr("data-offset-top") - a.attr("data-offset-top");
    });
		$(window).bind('resize', t_throttle(function(){t770_updateSectionsOffsets(t770_sections);}, 200));
		$('.t770').bind('displayChanged',function(){t770_updateSectionsOffsets(t770_sections);});
		setInterval(function(){t770_updateSectionsOffsets(t770_sections);},5000);
    t770_highlightNavLinks(t770_navLinks, t770_sections, t770_sectionIdTonavigationLink, t770_clickedSectionId);

    t770_navLinks.click(function() {
        var t770_clickedSection = t770_getSectionByHref($(this));
        if (!$(this).hasClass("tooltipstered") && typeof t770_clickedSection.attr("id") != "undefined") {
            t770_navLinks.removeClass('t-active');
            $(this).addClass('t-active');
            t770_clickedSectionId = t770_getSectionByHref($(this)).attr("id");
        }
    });
    $(window).scroll(function() {
        var t770_now = new Date().getTime();
        if (t770_lastCall && t770_now < (t770_lastCall + t770_interval)) {
            clearTimeout(t770_timeoutId);
            t770_timeoutId = setTimeout(function() {
                t770_lastCall = t770_now;
                t770_clickedSectionId = t770_highlightNavLinks(t770_navLinks, t770_sections, t770_sectionIdTonavigationLink, t770_clickedSectionId);
            }, t770_interval - (t770_now - t770_lastCall));
        } else {
            t770_lastCall = t770_now;
            t770_clickedSectionId = t770_highlightNavLinks(t770_navLinks, t770_sections, t770_sectionIdTonavigationLink, t770_clickedSectionId);
        }
    });
}


function t770_updateSectionsOffsets(sections){
	$(sections).each(function(){
		var t770_curSection = $(this);
		t770_curSection.attr("data-offset-top",t770_curSection.offset().top);
	});
}


function t770_getSectionByHref(curlink) {
    var t770_curLinkValue = curlink.attr("href").replace(/\s+/g, '');
    if (t770_curLinkValue[0]=='/') { t770_curLinkValue = t770_curLinkValue.substring(1); }
    if (curlink.is('[href*="#rec"]')) {
        return $(".r[id='" + t770_curLinkValue.substring(1) + "']");
    } else {
        return $(".r[data-record-type='215']").has("a[name='" + t770_curLinkValue.substring(1) + "']");
    }
}

function t770_highlightNavLinks(t770_navLinks, t770_sections, t770_sectionIdTonavigationLink, t770_clickedSectionId) {
    var t770_scrollPosition = $(window).scrollTop(),
        t770_valueToReturn = t770_clickedSectionId;
    /*if first section is not at the page top (under first blocks)*/
    if (t770_sections.length != 0 && t770_clickedSectionId == null && t770_sections[t770_sections.length-1].attr("data-offset-top") > (t770_scrollPosition + 300)){
      t770_navLinks.removeClass('t-active');
      return null;
    }

    $(t770_sections).each(function(e) {
        var t770_curSection = $(this),
            t770_sectionTop = t770_curSection.attr("data-offset-top"),
            t770_id = t770_curSection.attr('id'),
            t770_navLink = t770_sectionIdTonavigationLink[t770_id];
        if (((t770_scrollPosition + 300) >= t770_sectionTop) || (t770_sections[0].attr("id") == t770_id && t770_scrollPosition >= $(document).height() - $(window).height())) {
            if (t770_clickedSectionId == null && !t770_navLink.hasClass('t-active')) {
                t770_navLinks.removeClass('t-active');
                t770_navLink.addClass('t-active');
                t770_valueToReturn = null;
            } else {
                if (t770_clickedSectionId != null && t770_id == t770_clickedSectionId) {
                    t770_valueToReturn = null;
                }
            }
            return false;
        }
    });
    return t770_valueToReturn;
}

function t770_setPath(){
}

function t770_setBg(recid){
  var window_width=$(window).width();
  if(window_width>980){
    $(".t770").each(function() {
      var el=$(this);
      if(el.attr('data-bgcolor-setbyscript')=="yes"){
        var bgcolor=el.attr("data-bgcolor-rgba");
        el.css("background-color",bgcolor);
      }
      });
      }else{
        $(".t770").each(function() {
          var el=$(this);
          var bgcolor=el.attr("data-bgcolor-hex");
          el.css("background-color",bgcolor);
          el.attr("data-bgcolor-setbyscript","yes");
      });
  }
}

function t770_appearMenu(recid) {
      var window_width=$(window).width();
      if(window_width>980){
           $(".t770").each(function() {
                  var el=$(this);
                  var appearoffset=el.attr("data-appearoffset");
                  if(appearoffset!=""){
                          if(appearoffset.indexOf('vh') > -1){
                              appearoffset = Math.floor((window.innerHeight * (parseInt(appearoffset) / 100)));
                          }

                          appearoffset=parseInt(appearoffset, 10);

                          if ($(window).scrollTop() >= appearoffset) {
                            if(el.css('visibility') == 'hidden'){
                                el.finish();
                                el.css("top","-50px");
                                el.css("visibility","visible");
                                el.animate({"opacity": "1","top": "0px"}, 200,function() {
                                });
                            }
                          }else{
                            el.stop();
                            el.css("visibility","hidden");
                          }
                  }
           });
      }

}

function t770_changebgopacitymenu(recid) {
  var window_width=$(window).width();
  if(window_width>980){
    $(".t770").each(function() {
      var el=$(this);
      var bgcolor=el.attr("data-bgcolor-rgba");
      var bgcolor_afterscroll=el.attr("data-bgcolor-rgba-afterscroll");
      var bgopacityone=el.attr("data-bgopacity");
      var bgopacitytwo=el.attr("data-bgopacity-two");
      var menushadow=el.attr("data-menushadow");
      if(menushadow=='100'){
        var menushadowvalue=menushadow;
      }else{
        var menushadowvalue='0.'+menushadow;
      }
      if ($(window).scrollTop() > 20) {
        el.css("background-color",bgcolor_afterscroll);
        if(bgopacitytwo=='0' || menushadow==' '){
          el.css("box-shadow","none");
        }else{
          el.css("box-shadow","0px 1px 3px rgba(0,0,0,"+ menushadowvalue +")");
        }
      }else{
        el.css("background-color",bgcolor);
        if(bgopacityone=='0.0' || menushadow==' '){
          el.css("box-shadow","none");
        }else{
          el.css("box-shadow","0px 1px 3px rgba(0,0,0,"+ menushadowvalue +")");
        }
      }
    });
  }
}

function t770_createMobileMenu(recid){
  var window_width=$(window).width(),
      el=$("#rec"+recid),
      menu=el.find(".t770"),
      burger=el.find(".t770__mobile");
  burger.click(function(e){
    menu.fadeToggle(300);
    $(this).toggleClass("t770_opened")
  })
  $(window).bind('resize', t_throttle(function(){
    window_width=$(window).width();
    if(window_width>980){
      menu.fadeIn(0);
    }
  }, 200));
} 
function t774_init(recid){
  t774_unifyHeights(recid);

  $(window).bind('resize', t_throttle(function(){t774_unifyHeights(recid)}, 200));

  $(".t774").bind("displayChanged",function(){
    t774_unifyHeights(recid);
  });
  
    $(window).load(function() {
        t774_unifyHeights(recid);
    });  
}


function t774_unifyHeights(recid){
    var t774_el = $('#rec'+recid),
        t774_blocksPerRow = t774_el.find(".t774__container").attr("data-blocks-per-row"),
        t774_cols = t774_el.find(".t774__content"),
		t774_mobScroll = t774_el.find(".t774__scroll-icon-wrapper").length;

	if($(window).width()<=480 && t774_mobScroll==0){
		t774_cols.css("height","auto");
		return;
	}

   	var t774_perRow = +t774_blocksPerRow;	
	if ($(window).width()<=960 && t774_mobScroll>0) {var t774_perRow = t774_cols.length;}
	else { if ($(window).width()<=960) {var t774_perRow = 2;} }

	for( var i = 0; i < t774_cols.length; i +=t774_perRow ){
		var t774_maxHeight = 0,
			t774_row = t774_cols.slice(i, i + t774_perRow);		
		t774_row.each(function(){
          var t774_curText = $(this).find(".t774__textwrapper"),
              t774_curBtns = $(this).find(".t774__btn-wrapper, .t774__btntext-wrapper"),
              t774_itemHeight = t774_curText.outerHeight() + t774_curBtns.outerHeight();		  
          if ( t774_itemHeight > t774_maxHeight ) { t774_maxHeight = t774_itemHeight; }
		});
		t774_row.css( "height", t774_maxHeight );
	}
} 
function t776__init(recid){
  setTimeout(function(){
    t_prod__init(recid);
    t776_initPopup(recid);
    t776__updateLazyLoad(recid);
  }, 500);
}

function t776__updateLazyLoad(recid) {
  var scrollContainer = $("#rec"+recid+" .t776__container_mobile-flex");
  var curMode = $(".t-records").attr("data-tilda-mode");
  if (scrollContainer.length && curMode!="edit" && curMode!="preview") {
    scrollContainer.bind('scroll', t_throttle(function() {
        t_lazyload_update();
    }, 500));
  }
}

function t776_initPopup(recid){
  var rec=$('#rec'+recid); 
  rec.find('[href^="#prodpopup"]').one( "click", function(e) {
      e.preventDefault();	  
	  var el_popup=rec.find('.t-popup');
	  var el_prod=$(this).closest('.js-product');
	  var lid_prod=el_prod.attr('data-product-lid');
	  t_sldsInit(recid+' #t776__product-' + lid_prod + '');
  });
  rec.find('[href^="#prodpopup"]').click(function(e){	
      e.preventDefault();
      t776_showPopup(recid);	  
	  var el_popup=rec.find('.t-popup');
	  var el_prod=$(this).closest('.js-product');
	  var lid_prod=el_prod.attr('data-product-lid');
	  el_popup.find('.js-product').css('display','none');
	  var el_fullprod=el_popup.find('.js-product[data-product-lid="'+lid_prod+'"]')
	  el_fullprod.css('display','block');

    var analitics=el_popup.attr('data-track-popup');
    if (analitics > '') {
        var virtTitle = el_fullprod.find('.js-product-name').text();
        if (! virtTitle) {
            virtTitle = 'prod'+lid_prod;
        }
        Tilda.sendEventToStatistics(analitics, virtTitle);
    }

      var curUrl = window.location.href;
      if (curUrl.indexOf('#!/tproduct/')<0 && curUrl.indexOf('%23!/tproduct/')<0) {
        if (typeof history.replaceState!='undefined'){
          window.history.replaceState('','',window.location.href+'#!/tproduct/'+recid+'-'+lid_prod);
        }
      }
      t776_updateSlider(recid+' #t776__product-' + lid_prod + '');
      if(window.lazy=='y'){t_lazyload_update();}
  });
  if ($('#record'+recid).length==0){ t776_checkUrl(recid); }
  t776_copyTypography(recid);
}

function t776_checkUrl(recid){
  var curUrl = window.location.href;
  var tprodIndex = curUrl.indexOf('#!/tproduct/');
  if(/iPhone|iPad|iPod/i.test(navigator.userAgent) && tprodIndex<0){ tprodIndex = curUrl.indexOf('%23!/tproduct/'); }
  if (tprodIndex>=0){
    var curUrl = curUrl.substring(tprodIndex,curUrl.length);
    var curProdLid = curUrl.substring(curUrl.indexOf('-')+1,curUrl.length);
    var rec=$('#rec'+recid);
    if (curUrl.indexOf(recid)>=0 && rec.find('[data-product-lid='+curProdLid+']').length) {
  	  rec.find('[data-product-lid='+curProdLid+'] [href^="#prodpopup"]').triggerHandler('click');
    }
  }
}

function t776_updateSlider(recid) {
    var el=$('#rec'+recid);
    t_slds_SliderWidth(recid);
    var sliderWrapper = el.find('.t-slds__items-wrapper');
    var sliderWidth = el.find('.t-slds__container').width();
    var pos = parseFloat(sliderWrapper.attr('data-slider-pos'));
    sliderWrapper.css({
        transform: 'translate3d(-' + (sliderWidth * pos) + 'px, 0, 0)'
    });
    t_slds_UpdateSliderHeight(recid);
    t_slds_UpdateSliderArrowsHeight(recid);
}

function t776_showPopup(recid){
  var el=$('#rec'+recid);
  var popup = el.find('.t-popup');

  popup.css('display', 'block');
  setTimeout(function() {
    popup.find('.t-popup__container').addClass('t-popup__container-animated');
    popup.addClass('t-popup_show');
    if(window.lazy=='y'){t_lazyload_update();}
  }, 50);

  $('body').addClass('t-body_popupshowed');

  el.find('.t-popup').click(function(e){
    if (e.target == this) {
      t776_closePopup();
    }
  });

  el.find('.t-popup__close, .t776__close-text').click(function(e){
    t776_closePopup();
  });

  $(document).keydown(function(e) {
    if (e.keyCode == 27) {
      t776_closePopup();
    }
  });
}

function t776_closePopup(){
  $('body').removeClass('t-body_popupshowed');
  $('.t-popup').removeClass('t-popup_show');
  var curUrl=window.location.href;
  var indexToRemove=curUrl.indexOf('#!/tproduct/');
  if(/iPhone|iPad|iPod/i.test(navigator.userAgent) && indexToRemove<0){ indexToRemove=curUrl.indexOf('%23!/tproduct/'); }
  curUrl=curUrl.substring(0,indexToRemove);
  setTimeout(function() {
    $(".t-popup").scrollTop(0);  
    $('.t-popup').not('.t-popup_show').css('display', 'none');
	if (typeof history.replaceState!='undefined'){
      window.history.replaceState('','',curUrl);
    }                                                                        	
  }, 300);
}

function t776_removeSizeStyles(styleStr){
	if(typeof styleStr!="undefined" && (styleStr.indexOf('font-size')>=0 || styleStr.indexOf('padding-top')>=0 || styleStr.indexOf('padding-bottom')>=0)){
		var styleStrSplitted = styleStr.split(';');
		styleStr = "";
		for (var i=0;i<styleStrSplitted.length;i++){
			if(styleStrSplitted[i].indexOf('font-size')>=0 || styleStrSplitted[i].indexOf('padding-top')>=0 || styleStrSplitted[i].indexOf('padding-bottom')>=0){
				styleStrSplitted.splice(i,1); i--; continue;
			}			
			if(styleStrSplitted[i]==""){continue;}
			styleStr+=styleStrSplitted[i]+";";
		}
	}
	return styleStr;
}

function t776_copyTypography(recid){
  var rec=$('#rec'+recid);
  var titleStyle=rec.find('.t776__title').attr('style');
	var descrStyle=rec.find('.t776__descr').attr('style');
	rec.find('.t-popup .t776__title').attr("style",t776_removeSizeStyles(titleStyle));
	rec.find('.t-popup .t776__descr, .t-popup .t776__text').attr("style",t776_removeSizeStyles(descrStyle));
} 
function t778__init(recid){
  t778_unifyHeights(recid);
  $(window).load(function(){
    t778_unifyHeights(recid);
  });  

  $(window).bind('resize', t_throttle(function(){t778_unifyHeights(recid)}, 200));

  $(".t778").bind("displayChanged",function(){
      t778_unifyHeights(recid);
  });

  setTimeout(function(){
    t_prod__init(recid);
    t778_initPopup(recid);
    t778__updateLazyLoad(recid);
  }, 500);
}

function t778__updateLazyLoad(recid) {
  var scrollContainer = $("#rec"+recid+" .t778__container_mobile-flex");
  var curMode = $(".t-records").attr("data-tilda-mode");
  if (scrollContainer.length && curMode!="edit" && curMode!="preview") {
    scrollContainer.bind('scroll', t_throttle(function() {
        t_lazyload_update();
    }, 500));
  }
}

function t778_unifyHeights(recid){
    var t778_el = $('#rec'+recid),
        t778_blocksPerRow = t778_el.find(".t778__container").attr("data-blocks-per-row"),
        t778_cols = t778_el.find(".t778__content"),
		t778_mobScroll = t778_el.find(".t778__scroll-icon-wrapper").length;

	if($(window).width()<=480 && t778_mobScroll==0){
		t778_cols.css("height","auto");
		return;
	}

   	var t778_perRow = +t778_blocksPerRow;	
	if ($(window).width()<=960 && t778_mobScroll>0) {var t778_perRow = t778_cols.length;}
	else { if ($(window).width()<=960) {var t778_perRow = 2;} }

	for( var i = 0; i < t778_cols.length; i +=t778_perRow ){
		var t778_maxHeight = 0,
			t778_row = t778_cols.slice(i, i + t778_perRow);		
		t778_row.each(function(){
          var t778_curText = $(this).find(".t778__textwrapper"),
              t778_curBtns = $(this).find(".t778__btn-wrapper_absolute"),
              t778_itemHeight = t778_curText.outerHeight() + t778_curBtns.outerHeight();		  
          if ( t778_itemHeight > t778_maxHeight ) { t778_maxHeight = t778_itemHeight; }
		});
		t778_row.css( "height", t778_maxHeight );
	}
}


function t778_initPopup(recid){
  var rec=$('#rec'+recid); 
  rec.find('[href^="#prodpopup"]').one( "click", function(e) {
      e.preventDefault();	  
	  var el_popup=rec.find('.t-popup');
	  var el_prod=$(this).closest('.js-product');
	  var lid_prod=el_prod.attr('data-product-lid');
	  t_sldsInit(recid+' #t778__product-' + lid_prod + '');
  });
  rec.find('[href^="#prodpopup"]').click(function(e){	
      e.preventDefault();
      t778_showPopup(recid);	  
	  var el_popup=rec.find('.t-popup');
	  var el_prod=$(this).closest('.js-product');
	  var lid_prod=el_prod.attr('data-product-lid');
	  el_popup.find('.js-product').css('display','none');
	  var el_fullprod=el_popup.find('.js-product[data-product-lid="'+lid_prod+'"]')
	  el_fullprod.css('display','block');
	  
    var analitics=el_popup.attr('data-track-popup');
    if (analitics > '') {
        var virtTitle = el_fullprod.find('.js-product-name').text();
        if (! virtTitle) {
            virtTitle = 'prod'+lid_prod;
        }
        Tilda.sendEventToStatistics(analitics, virtTitle);
    }

	  var curUrl = window.location.href;
      if (curUrl.indexOf('#!/tproduct/')<0 && curUrl.indexOf('%23!/tproduct/')<0) {
        if (typeof history.replaceState!='undefined'){
          window.history.replaceState('','',window.location.href+'#!/tproduct/'+recid+'-'+lid_prod);
        }
      }	
      t778_updateSlider(recid+' #t778__product-' + lid_prod + '');
      if(window.lazy=='y'){t_lazyload_update();}
  });
  if ($('#record'+recid).length==0){ t778_checkUrl(recid); }
  t778_copyTypography(recid);
}

function t778_checkUrl(recid){
  var curUrl = window.location.href;
  var tprodIndex = curUrl.indexOf('#!/tproduct/');
  if(/iPhone|iPad|iPod/i.test(navigator.userAgent) && tprodIndex<0){ tprodIndex = curUrl.indexOf('%23!/tproduct/'); }
  if (tprodIndex>=0){
    var curUrl = curUrl.substring(tprodIndex,curUrl.length);
    var curProdLid = curUrl.substring(curUrl.indexOf('-')+1,curUrl.length);
    var rec=$('#rec'+recid);
    if (curUrl.indexOf(recid)>=0 && rec.find('[data-product-lid='+curProdLid+']').length) {
  	  rec.find('[data-product-lid='+curProdLid+'] [href^="#prodpopup"]').triggerHandler('click');
    }
  }
}

function t778_updateSlider(recid) {
    var el=$('#rec'+recid);
    t_slds_SliderWidth(recid);
    var sliderWrapper = el.find('.t-slds__items-wrapper');
    var sliderWidth = el.find('.t-slds__container').width();
    var pos = parseFloat(sliderWrapper.attr('data-slider-pos'));
    sliderWrapper.css({
        transform: 'translate3d(-' + (sliderWidth * pos) + 'px, 0, 0)'
    });
    t_slds_UpdateSliderHeight(recid);
    t_slds_UpdateSliderArrowsHeight(recid);
}

function t778_showPopup(recid){
  var el=$('#rec'+recid);
  var popup = el.find('.t-popup');

  popup.css('display', 'block');
  setTimeout(function() {
    popup.find('.t-popup__container').addClass('t-popup__container-animated');
    popup.addClass('t-popup_show');
    if(window.lazy=='y'){t_lazyload_update();}
  }, 50);

  $('body').addClass('t-body_popupshowed');

  el.find('.t-popup').click(function(e){
    if (e.target == this) {
      t778_closePopup();
    }
  });

  el.find('.t-popup__close, .t778__close-text').click(function(e){
    t778_closePopup();
  });

  $(document).keydown(function(e) {
    if (e.keyCode == 27) {
      t778_closePopup();
    }
  });
}

function t778_closePopup(){
  $('body').removeClass('t-body_popupshowed');
  $('.t-popup').removeClass('t-popup_show');
  var curUrl=window.location.href;
  var indexToRemove=curUrl.indexOf('#!/tproduct/');
  if(/iPhone|iPad|iPod/i.test(navigator.userAgent) && indexToRemove<0){ indexToRemove=curUrl.indexOf('%23!/tproduct/'); }
  curUrl=curUrl.substring(0,indexToRemove);	
  setTimeout(function() {
    $(".t-popup").scrollTop(0);  
    $('.t-popup').not('.t-popup_show').css('display', 'none');
	if (typeof history.replaceState!='undefined'){
      window.history.replaceState('','',curUrl);
    }                                                                        	
  }, 300);
}

function t778_removeSizeStyles(styleStr){
	if(typeof styleStr!="undefined" && (styleStr.indexOf('font-size')>=0 || styleStr.indexOf('padding-top')>=0 || styleStr.indexOf('padding-bottom')>=0)){
		var styleStrSplitted = styleStr.split(';');
		styleStr = "";
		for (var i=0;i<styleStrSplitted.length;i++){
			if(styleStrSplitted[i].indexOf('font-size')>=0 || styleStrSplitted[i].indexOf('padding-top')>=0 || styleStrSplitted[i].indexOf('padding-bottom')>=0){
				styleStrSplitted.splice(i,1); i--; continue;
			}			
			if(styleStrSplitted[i]==""){continue;}
			styleStr+=styleStrSplitted[i]+";";
		}
	}
	return styleStr;
}

function t778_copyTypography(recid){
  var rec=$('#rec'+recid);
  var titleStyle=rec.find('.t778__title').attr('style');
	var descrStyle=rec.find('.t778__descr').attr('style');
	rec.find('.t-popup .t778__title').attr("style",t778_removeSizeStyles(titleStyle));
	rec.find('.t-popup .t778__descr, .t-popup .t778__text').attr("style",t778_removeSizeStyles(descrStyle));
} 
function t780_init(recid){
    if($("#rec"+recid+" .t-slds").length){
        t_sldsInit(recid);
    }    

  setTimeout(function(){
    t_prod__init(recid);
  }, 500);
  
    $('#rec'+recid).find('.t780').bind('displayChanged',function(){
      t_slds_updateSlider(recid);
  });  
} 
$btnpaysubmit = false;

/* new block */
$(document).ready(function(){

    window.tildaGetPaymentForm = function (price, product, paysystem, blockid) {
        var $allrecords = $('#allrecords');
        var formnexturl = 'htt'+'ps://forms.tildacdn'+'.com/payment/next/';
        var virtPage = '/tilda/'+blockid+'/payment/';
        var virtTitle = 'Go to payment from '+blockid;

        if (window.Tilda && typeof Tilda.sendEventToStatistics == 'function') {
            Tilda.sendEventToStatistics(virtPage, virtTitle, product, price);
        }

        $.ajax ({
            type: "POST",
            url: formnexturl /*$(this).attr('action')*/,
            data: {
                projectid: $allrecords.data('tilda-project-id'),
                formskey: $allrecords.data('tilda-formskey'),
                price: price,
                product: product,
                system: paysystem
            },
            dataType : "json",
            success: function(json){
                $btnpaysubmit.removeClass('t-btn_sending');
                tildaBtnPaySubmit = '0';
                
                /* если нужно переслать данные дальше, в платежную систему */
                if (json && json.next && json.next.type > '') {
                    var res = window.tildaForm.payment($('#'+blockid), json.next);
                    successurl = '';
                    return false;
                }
                
            },
            fail: function(error){
                var txt;
                $btnpaysubmit.removeClass('t-btn_sending');
                tildaBtnPaySubmit = '0';

                if (error && error.responseText>'') {
                    txt = error.responseText+'. Please, try again later.';
                } else {
                    if (error && error.statusText) {
                        txt = 'Error ['+error.statusText+']. Please, try again later.';
                    }else {
                        txt = 'Unknown error. Please, try again later.';
                    }
                }
                alert(txt);
            },
            timeout: 10*1000
        });
        
    };
    
    if (typeof tcart__cleanPrice == 'undefined') {
        function tcart__cleanPrice (price) {
            if (typeof price=='undefined' || price=='' || price==0) {
                price=0;
            } else {
                price = price.replace(',','.');
                price = price.replace(/[^0-9\.]/g,'');
                price = parseFloat(price).toFixed(2);
                if(isNaN(price)) { price=0; }
                price = parseFloat(price);
                price = price*1;
                if (price<0) { price=0; }
            }
            return price;
        }
    }
                             
    if (typeof tcart__escapeHtml == 'undefined') {
        function tcart__escapeHtml(text) {
            var map = {
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#039;'
            };
            return text.replace(/[<>"']/g, function(m) { return map[m]; });
        }
    }

    if ($('.js-payment-systembox').length > 0) {
        var tildaBtnPaySubmit = '0';
        $('a[href^="#order"]').off('dblclick');
        $('a[href^="#order"]').off('click');
        $('a[href^="#order"]').click(function(e){
            e.preventDefault();

            // защита от поаторной отправки
            if (tildaBtnPaySubmit == '1') {
                return false;
            }

            if ($('.t706').length > 0) {
                console.log('Conflict error: there are two incompatible blocks on the page: ST100 and ST105. Please go to Tilda Editor and delete one of these blocks.');
                return false;
            }
            
            $btnpaysubmit = $(this);
            $btnpaysubmit.addClass('t-btn_sending');
            tildaBtnPaySubmit = '1'

            var tmp = $(this).attr('href');
            var arParam, price=0, product='';
            if (tmp.substring(0,7) == '#order:') {
                // format:  #order:Product name=Cost
                tmp = tmp.split(':');
                arParam = tmp[1].split('=');
                price = tcart__cleanPrice(arParam[1]);
                product = tcart__escapeHtml(arParam[0]);
            } else {
                var pel=$(this).closest('.js-product');
                if(typeof pel!='undefined') {
                    if(product==''){
                            product=pel.find('.js-product-name').text();
                            if (typeof product=='undefined') { product='' };
                    }
                    if(price=='' || price==0){
                        price = pel.find('.js-product-price').text();
                        price = tcart__cleanPrice(price);
                    }
                    var optprice = 0;
                    var options=[];
                    pel.find('.js-product-option').each(function() {
                        var el_opt=$(this);
                        var op_option=el_opt.find('.js-product-option-name').text();
                        var op_variant=el_opt.find('option:selected').val();
                        var op_price=el_opt.find('option:selected').attr('data-product-variant-price');
                        op_price = tcart__cleanPrice(op_price);
                        
                        if(typeof op_option!='undefined' && typeof op_variant!='undefined'){
                            var obj={};
                            if(op_option!=''){
                                op_option = tcart__escapeHtml(op_option);
                            }
                            if(op_variant!=''){
                                op_variant = tcart__escapeHtml(op_variant);
                                op_variant = op_variant.replace(/(?:\r\n|\r|\n)/g, '');
                            }
                            if(op_option.length>1 && op_option.charAt(op_option.length-1)==':'){
                                op_option=op_option.substring(0,op_option.length-1);
                            }
                            
                            optprice = optprice + parseFloat(op_price);
                            options.push(op_option + '=' + op_variant);
                        }
                    });			

                    if (options.length > 0) {
                        product = product + ': '+options.join(', ');
                        /* price = parseFloat(optprice); */
                    }
                }
            }
            var $parent = $(this).parent();
            var blockid = $(this).closest('.r').attr('id');
            var $paysystems= $('.js-dropdown-paysystem .js-payment-system');
            
            if (! product) {
                var tmp=$(this).closest('.r').find('.title');
                if (tmp.length > 0) {
                    product = tmp.text();
                } else {
                    product = $(this).text();
                }
            }

            if ($paysystems.length == 0) {
                alert('Error: payment system is not assigned. Add payment system in the Site Settings.');
                $btnpaysubmit.removeClass('t-btn_sending');
                tildaBtnPaySubmit = '0';
                return false;
            }
            if ($paysystems.length == 1) {
                tildaGetPaymentForm(price, product, $paysystems.data('payment-system'), blockid);
            } else {
                var $jspaybox = $('.js-payment-systembox');
                if ( $jspaybox.length > 0) {
                    var $linkelem = $(this);
                    var offset = $linkelem.offset();
                    $jspaybox.css('top',offset.top+'px');
                    $jspaybox.css('left',offset.left+'px');
                    $jspaybox.css('margin-top','-45px');
                    $jspaybox.css('margin-left','-25px');
                    $jspaybox.css('position','absolute');
                    $jspaybox.css('z-index','9999999');
                    $jspaybox.appendTo($('body'));
                    $(window).resize(function(){
                        if ($jspaybox.css('display')=='block' && $linkelem) {
                            offset = $linkelem.offset();
                            $jspaybox.css('top',offset.top+'px');
                            $jspaybox.css('left',offset.left+'px');
                        }
                    });
                    /*
                    $jspaybox.css('margin-top','-45px');
                    $($parent).css('position','relative');
                    $jspaybox.appendTo($parent);
                    */
                    $jspaybox.show();
                    /*
                    var parentoffset = $(this).offset();
                    var payboxoffset = $jspaybox.offset();
                    if (parentoffset.top > parseInt(payboxoffset.top) + parseInt($jspaybox.height())) {
                        var margintop = parseInt(parentoffset.top)+parseInt($(this).height())-parseInt(payboxoffset.top)-parseInt( $jspaybox.height());
                        $jspaybox.css('margin-top', margintop+'px');
                    }
                    */
                    $('.r').click(function(){ 
                        $btnpaysubmit.removeClass('t-btn_sending');
                        tildaBtnPaySubmit = '0';

                        $jspaybox.hide(); 
                        $('.r').off('click'); 
                        return false; 
                    });

                    $('.js-payment-systembox a').off('dblclick');
                    $('.js-payment-systembox a').off('click');
                    $('.js-payment-systembox a').click(function(e){
                        e.preventDefault();
                        $jspaybox.hide();
                        $linkelem = false;
                        tildaGetPaymentForm(price, product, $(this).data('payment-system'), blockid);
                        return false;
                    });
                }
            }

            return false;
        });
    }

});
 
function t786__init(recid){
  setTimeout(function(){
    t_prod__init(recid);
    t786_initPopup(recid);
    t786__updateLazyLoad(recid);
  }, 500);
}

function t786__updateLazyLoad(recid) {
  var scrollContainer = $("#rec"+recid+" .t786__container_mobile-flex");
  var curMode = $(".t-records").attr("data-tilda-mode");
  if (scrollContainer.length && curMode!="edit" && curMode!="preview") {
    scrollContainer.bind('scroll', t_throttle(function() {
        t_lazyload_update();
    }, 500));
  }
}

function t786_initPopup(recid){
  var rec=$('#rec'+recid); 
  rec.find('[href^="#prodpopup"]').one( "click", function(e) {
      e.preventDefault();	  
	  var el_popup=rec.find('.t-popup');
	  var el_prod=$(this).closest('.js-product');
	  var lid_prod=el_prod.attr('data-product-lid');
	  t_sldsInit(recid+' #t786__product-' + lid_prod + '');
  });
  rec.find('[href^="#prodpopup"]').click(function(e){	
      e.preventDefault();
      t786_showPopup(recid);	  
	  var el_popup=rec.find('.t-popup');
	  var el_prod=$(this).closest('.js-product');
	  var lid_prod=el_prod.attr('data-product-lid');
	  el_popup.find('.js-product').css('display','none');
	  var el_fullprod=el_popup.find('.js-product[data-product-lid="'+lid_prod+'"]')
	  el_fullprod.css('display','block');
	  
    var analitics=el_popup.attr('data-track-popup');
    if (analitics > '') {
        var virtTitle = el_fullprod.find('.js-product-name').text();
        if (! virtTitle) {
            virtTitle = 'prod'+lid_prod;
        }
        Tilda.sendEventToStatistics(analitics, virtTitle);
    }

	  var curUrl = window.location.href;
      if (curUrl.indexOf('#!/tproduct/')<0 && curUrl.indexOf('%23!/tproduct/')<0) {
		if (typeof history.replaceState!='undefined'){
		  window.history.replaceState('','',window.location.href+'#!/tproduct/'+recid+'-'+lid_prod);	
		}        
      }	
      t786_updateSlider(recid+' #t786__product-' + lid_prod + '');
      if(window.lazy=='y'){t_lazyload_update();}
  });
  if ($('#record'+recid).length==0){ t786_checkUrl(recid); }
  t786_copyTypography(recid);
}

function t786_checkUrl(recid){
  var curUrl = window.location.href;
  var tprodIndex = curUrl.indexOf('#!/tproduct/');
  if(/iPhone|iPad|iPod/i.test(navigator.userAgent) && tprodIndex<0){ tprodIndex = curUrl.indexOf('%23!/tproduct/'); }
  if (tprodIndex>=0){
    var curUrl = curUrl.substring(tprodIndex,curUrl.length);
    var curProdLid = curUrl.substring(curUrl.indexOf('-')+1,curUrl.length);
    var rec=$('#rec'+recid);
    if (curUrl.indexOf(recid)>=0 && rec.find('[data-product-lid='+curProdLid+']').length) {
  	  rec.find('[data-product-lid='+curProdLid+'] [href^="#prodpopup"]').triggerHandler('click');
    }
  }
}

function t786_updateSlider(recid) {
    var el=$('#rec'+recid);
    t_slds_SliderWidth(recid);
    var sliderWrapper = el.find('.t-slds__items-wrapper');
    var sliderWidth = el.find('.t-slds__container').width();
    var pos = parseFloat(sliderWrapper.attr('data-slider-pos'));
    sliderWrapper.css({
        transform: 'translate3d(-' + (sliderWidth * pos) + 'px, 0, 0)'
    });
    t_slds_UpdateSliderHeight(recid);
    t_slds_UpdateSliderArrowsHeight(recid);
}

function t786_showPopup(recid){
  var el=$('#rec'+recid);
  var popup = el.find('.t-popup');

  popup.css('display', 'block');
  setTimeout(function() {
    popup.find('.t-popup__container').addClass('t-popup__container-animated');
    popup.addClass('t-popup_show');
    if(window.lazy=='y'){t_lazyload_update();}
  }, 50);

  $('body').addClass('t-body_popupshowed');

  el.find('.t-popup').click(function(e){
    if (e.target == this) {
      t786_closePopup();
    }
  });

  el.find('.t-popup__close, .t786__close-text').click(function(e){
    t786_closePopup();
  });

  $(document).keydown(function(e) {
    if (e.keyCode == 27) {
      t786_closePopup();
    }
  });
}

function t786_closePopup(){
  $('body').removeClass('t-body_popupshowed');
  $('.t-popup').removeClass('t-popup_show');
  var curUrl=window.location.href;
  var indexToRemove=curUrl.indexOf('#!/tproduct/');
  if(/iPhone|iPad|iPod/i.test(navigator.userAgent) && indexToRemove<0){ indexToRemove=curUrl.indexOf('%23!/tproduct/'); }
  curUrl=curUrl.substring(0,indexToRemove);
  setTimeout(function() {
    $(".t-popup").scrollTop(0);  
    $('.t-popup').not('.t-popup_show').css('display', 'none');
    if (typeof history.replaceState!='undefined'){
      window.history.replaceState('','',curUrl);                                                                  
    }                                                                    	                                                                        	
  }, 300);
}

function t786_removeSizeStyles(styleStr){
	if(typeof styleStr!="undefined" && (styleStr.indexOf('font-size')>=0 || styleStr.indexOf('padding-top')>=0 || styleStr.indexOf('padding-bottom')>=0)){
		var styleStrSplitted = styleStr.split(';');
		styleStr = "";
		for (var i=0;i<styleStrSplitted.length;i++){
			if(styleStrSplitted[i].indexOf('font-size')>=0 || styleStrSplitted[i].indexOf('padding-top')>=0 || styleStrSplitted[i].indexOf('padding-bottom')>=0){
				styleStrSplitted.splice(i,1); i--; continue;
			}			
			if(styleStrSplitted[i]==""){continue;}
			styleStr+=styleStrSplitted[i]+";";
		}
	}
	return styleStr;
}

function t786_copyTypography(recid){
  var rec=$('#rec'+recid);
  var titleStyle=rec.find('.t786__title').attr('style');
	var descrStyle=rec.find('.t786__descr').attr('style');
	rec.find('.t-popup .t786__title').attr("style",t786_removeSizeStyles(titleStyle));
	rec.find('.t-popup .t786__descr, .t-popup .t786__text').attr("style",t786_removeSizeStyles(descrStyle));
} 
function t788_init(recid){
  setTimeout(function(){
    $('#rec'+recid+' .t788').addClass('js-product');
    $('#rec'+recid+' .t-cover__carrier').addClass('js-product-img');      
    t_prod__init(recid);
  }, 500);
} 
function t790_init(recid) {
  $(".yButton .yButtonText").addClass("t790__yclients-btn-text");
} 
function t794_init(recid){
  var hook = $("#rec"+recid+" .t794").attr("data-tooltip-hook");
  if(typeof hook == "undefined" || hook == ""){return;};
  var hookLinks = $("a[href='"+hook+"']");
  hookLinks.addClass("t794__tm-link");
  hookLinks.attr("data-tooltip-menu-id",recid);
  t794_addArrow(recid,hookLinks);
  t794_setUpMenu(recid,hookLinks);
  t794_highlight();
}


function t794_setUpMenu(recid,hookLinks) {
  var submenu=$("#rec"+recid+" .t794__tooltip-menu");
  if (isMobile) {
    t794_setUpMenu_mobile(recid,hookLinks,submenu);
  } else {
    t794_setUpMenu_desktop(recid,hookLinks,submenu);
  }
  $(window).bind('scroll', t_throttle(function(){
    if (submenu.hasClass("t794__tooltip-menu_show")) {
      t794_hideSubmenu(submenu);
    }
  }, 300));
  $(".t794__tooltip-menu a[href*=#]").click(function(){
    t794_hideSubmenu(submenu);
    $('.t450, .t199__mmenu, .t280, .t282, .t204__burger, .t451, .t466').trigger('clickedAnchorInTooltipMenu');
  });
}


function t794_setUpMenu_mobile(recid,hookLinks,submenu) {
  var vIndent=$("#rec"+recid+" .t794").attr('data-tooltip-margin');
  hookLinks.on("click",function(e) {
    if (submenu.hasClass("t794__tooltip-menu_show")) {
      t794_hideSubmenu(submenu);
    } else {
      var curAnchor = $(this);
      t794_showSubmenu(curAnchor,submenu,vIndent);
    }
    e.preventDefault();
  });
  $(document).click(function(e) {
    var isInsideSubmenu = ($(e.target).hasClass("t794__tooltip-menu") || $(e.target).parents(".t794__tooltip-menu").length > 0);
    var isAnchor = ($(e.target).hasClass("t794__tm-link") || $(e.target).parents(".t794__tm-link").length > 0);
    if (isAnchor) {
      var curAnchor;
      if ($(e.target).hasClass("t794__tm-link")) {
        curAnchor = $(e.target);
      } else {
        curAnchor = $(e.target).parents(".t794__tm-link");
      }
      if (curAnchor.attr("data-tooltip-menu-id")!=recid && submenu.hasClass("t794__tooltip-menu_show")) {
        t794_hideSubmenu(submenu);
      }
    }
    if(!isInsideSubmenu && !isAnchor && submenu.hasClass("t794__tooltip-menu_show")) {
      t794_hideSubmenu(submenu);
    }
  });
}


function t794_setUpMenu_desktop(recid,hookLinks,submenu) {
  var vIndent=$("#rec"+recid+" .t794").attr('data-tooltip-margin');  
  var timer;
  hookLinks.add(submenu).on("mouseover",function(){
    /*if submenu is hovered while disappearing*/
    if ($(this).hasClass("t794__tooltip-menu") && !$(this).hasClass("t794__tooltip-menu_show")){return;}
    clearTimeout(timer);
    /*if link is already hoverd and now hover is on submenu element*/
    if ($(this).hasClass("t794__tooltip-menu") && submenu.hasClass("t794__tooltip-menu_show")){return;}
    var curAnchor = $(this);
    t794_showSubmenu(curAnchor,submenu,vIndent);
  });
  hookLinks.add(submenu).on("mouseout",function(){
    timer = setTimeout(function(){
      t794_hideSubmenu(submenu);
    }, 300);
  });
  hookLinks.on("click",function(e){
    e.preventDefault();
  });
}


function t794_showSubmenu(curAnchor,submenu,vIndent) {
  var submenuHeight = submenu.outerHeight();
  var submenuWidth = submenu.outerWidth();
  var anchorHeight = curAnchor.height();
  var anchorWidth = curAnchor.width();
  if (curAnchor.hasClass('t-btn')) {
    anchorWidth = curAnchor.outerWidth();
  }  
  var winHeight = $(window).height();
  var winWidth = $(window).width();
  var scrollTop = $(window).scrollTop();
  var anchorLeft = curAnchor.offset().left;
  if (typeof vIndent != "undefined" && vIndent != "") {
    vIndent = vIndent.replace("px","")*1;
    /*add arrow*/
    vIndent = vIndent + 10;
  }
  var posy = curAnchor.offset().top + anchorHeight + vIndent;
  var posx = anchorLeft;
  /*detect posy, show on the top or bottom?*/
  if (posy + submenuHeight > scrollTop + winHeight) {
    posy = Math.max(posy - submenuHeight - anchorHeight - vIndent*2, scrollTop);
    submenu.removeClass("t794__tooltip-menu_bottom").addClass("t794__tooltip-menu_top");
  } else {
    submenu.removeClass("t794__tooltip-menu_top").addClass("t794__tooltip-menu_bottom");
  }
  if (posx + submenuWidth/2 < winWidth) {
    /*show in the center of anchor*/
    posx = posx + (anchorWidth - submenuWidth) / 2;
    /*show near left window border*/
    if (posx < 0) {
      posx = 10;
    }
  } else {
    /*show near right window border*/
    posx = winWidth - submenuWidth - 10;
  }
  submenu.css({"display":"block","left":posx,"top":posy});
  submenu[0].offsetHeight;
  submenu.addClass("t794__tooltip-menu_show");
  curAnchor.addClass("t794__tm-link_active");
}


function t794_hideSubmenu(submenu) {
  submenu.css({"display":"","left":"","top":""});
  submenu.removeClass("t794__tooltip-menu_show");
  $(".t794__tm-link_active").removeClass("t794__tm-link_active");
}


function t794_addArrow(recid,hookLinks){
  var arrow=$("#rec"+recid+" .t794").attr('data-add-arrow');
  if (typeof arrow == "undefined" || arrow == ""){return;};
  hookLinks.each(function(){
    var arrowHeight = $(this).height();
    $(this).append("<div class=\"t794__arrow\" style=\"height: "+arrowHeight+"px;\"></div>");
  });
}


function t794_highlight(){
  var url=window.location.href;
  var pathname=window.location.pathname;
  if(url.substr(url.length - 1) == "/"){ url = url.slice(0,-1); }
  if(pathname.substr(pathname.length - 1) == "/"){ pathname = pathname.slice(0,-1); }
  if(pathname.charAt(0) == "/"){ pathname = pathname.slice(1); }
  if(pathname == ""){ pathname = "/"; }
  $(".t794__list_item a[href='"+url+"']").addClass("t-active");
  $(".t794__list_item a[href='"+url+"/']").addClass("t-active");
  $(".t794__list_item a[href='"+pathname+"']").addClass("t-active");
  $(".t794__list_item a[href='/"+pathname+"']").addClass("t-active");
  $(".t794__list_item a[href='"+pathname+"/']").addClass("t-active");
  $(".t794__list_item a[href='/"+pathname+"/']").addClass("t-active");
}
 
function t796_init(recid) {
    var el = $("#rec" + recid);
    var shapeEl = el.find(".t796__shape-border");
    var recs = el.find(".t796").attr("data-shape-rec-ids");

    if (typeof recs != "undefined") {
        recs = recs.split(",");
        /* append to certain blocks */
        recs.forEach(function(rec_id, i, arr) {
            var curRec = $("#rec" + rec_id);
            var curShapeEl = shapeEl.clone();
            t796_setColor(el,curShapeEl);
            t796_addDivider(curRec, curShapeEl);
        });
    } else {
        if (shapeEl.hasClass('t796__shape-border_top') || shapeEl.hasClass('t796__shape-border_top-flip')) {
            var curRec = el.next(".r");
            if (curRec.attr("data-record-type") == "215" || curRec.attr("data-record-type") == "706") {
                curRec = curRec.next(".r");
            }
        }

        if (shapeEl.hasClass('t796__shape-border_bottom') || shapeEl.hasClass('t796__shape-border_bottom-flip')) {
            var curRec = el.prev(".r");
            if (curRec.attr("data-record-type") == "215" || curRec.attr("data-record-type") == "706") {
                curRec = curRec.prev(".r");
            }
        }

        if (curRec.length != 0) {
            var curShapeEl = shapeEl.clone();
            t796_setColor(el, curShapeEl);
            t796_addDivider(curRec, curShapeEl);
        }
    }
}


function t796_addDivider(curRec, curShapeEl) {
    curRec.attr("data-animationappear","off").removeClass('r_hidden');
    var coverWrapper = curRec.find(".t-cover");
    var zeroWrapper = curRec.find(".t396");
    if (coverWrapper.length > 0 || zeroWrapper.length > 0) {
        /* if cover or zero */
        if (coverWrapper.length > 0) {
            coverWrapper.find(".t-cover__filter").after(curShapeEl);
        }
        if (zeroWrapper.length > 0) {
           zeroWrapper.after(curShapeEl);
           curRec.css("position", "relative");
        }
        curShapeEl.css("display", "block");
    } else {
        /*if any block*/
        var wrapper = curRec;
        var curRecType = curRec.attr("data-record-type");
        if (wrapper.length == 0) {
            return true;
        }
        wrapper.append(curShapeEl);
        wrapper.css("position", "relative");
        if (curRecType != "554" && curRecType != "125") {
            wrapper.children("div").first().css({
                "position": "relative",
                "z-index": "1"
            }).addClass("t796_cont-near-shape-divider");;
        }
        if (curRecType == "734" || curRecType == "675" || curRecType == "279") {
            curShapeEl.css("z-index", "1");
        }
        curShapeEl.css("display", "block");
    }
}


function t796_setColor(el,curShapeEl) {
    /* get color from nearest block, if it is not set for curShape */
    if (typeof curShapeEl.attr("data-fill-color") != "undefined") {
        return;
    }

    if (curShapeEl.hasClass("t796__shape-border_bottom") || curShapeEl.hasClass("t796__shape-border_bottom-flip")) {
        var nearestBlock = el.next(".r");
    } else {
        var nearestBlock = el.prev(".r");
    }

    if (nearestBlock.length == 0) {
        return;
    }

    var fillColor = nearestBlock.attr("data-bg-color");
    if (typeof fillColor == "undefined") {
        return;
    }

    curShapeEl.find(".t796__svg").css("fill",fillColor);
}
 
function t797_init(recid) {
    if (isMobile) {
        $("#rec" + recid + " .t797__txt-wrapper").css("display", "none");
    }
    tvote__init(recid);
}
 
function t802_insta_init(recid,instauser){
    var projectid=$('#allrecords').attr('data-tilda-project-id');
    t802_insta_loadflow(recid,projectid,instauser);
}

function t802_insta_loadflow(recid,projectid,instauser){
    if (instauser == '') {
        var url = "https://insta.tildacdn.com/fish/0.json";
    } else {
        var url = "https://insta.tildacdn.com/json/project"+projectid+"_"+instauser+".json";
    }

    $.ajax({
      type: "GET",
      url: url,
      dataType : "json",
      success: function(data){
            if(typeof data=='object'){
                t802_insta_draw(recid,data);
            }else{
                console.log('error. insta flow json not object');
                console.log(data);
            }
      },
      error: function(){
          console.log('error load instgram flow');
      },
      timeout: 1000*90
    });       
}

function t802_insta_draw(recid,obj){
	if(typeof obj.photos=='undefined'){return;}
	$.each(obj.photos, function(index, item) {
	    t802_insta_drawItem(recid,obj.username,item);
	});		
}

function t802_insta_drawItem(recid,username,item){
    var emptyEl = $("#rec"+recid).find(".t802__imgwrapper_empty").first();
    if (emptyEl.length > 0) {
        emptyEl.removeClass("t802__imgwrapper_empty");
        emptyEl.append('<div class="t802__bgimg" style="background-image:url('+item.url+')"></div>');
        emptyEl.wrap('<a href="'+item.link+'" target="_blank"></a>');
        
        /*add text and filter for hover*/
        var hoverEl = emptyEl.find(".t802__hover-wrapper");
        if (hoverEl.length > 0 && isMobile == false) {
            var text = t802_insta_cropText(recid,'@'+username+': '+item.text);
            hoverEl.append('<div class="t802__hover-filter"></div>');
            hoverEl.append('<div class="t802__text t-text t-descr_xxs">'+text+'</div>');
        }
    }
}

function t802_insta_cropText(recid,text){
    var colsInLine = $("#rec"+recid).find("[data-cols-in-line]").attr("data-cols-in-line");
    if (colsInLine == 6) {
        var maxLength = 90;
    } else {
        var maxLength = 130;    
    }
    if (text.length > maxLength) {
        text = text.substring(0, maxLength);
        text = text.substring(0, Math.min(maxLength,text.lastIndexOf(" ")));
        text += ' ...';
    }
    return text;
} 
function t803_init(recid){
var el = $("#rec" + recid);    
    var data = el.find('.t803__multi-datablock').children();
    var multidata = {};
    $.each(data, function(){
        var source = $(this).children('.t803__multi-source').html();
        var value = $(this).children('.t803__multi-key-values').html();
        var key = $(this).children('.t803__multi-key').html();
        var def = $(this).children('.t803__multi-default').html();
        var v = {};
        v[source] = value
        multidata[source] = {
                'default':def,
                'key':key,
                'values':v
        }
    });
    $.each($('[field]'), function(){
        fix = $(this).html().replace(/(?!%%)[A-zА-яё0-9_-]*(?=%%)/ig, '<span data-replace-key="$&"></span>');
        fix = fix.replace(/%{2}/igm,'');
        $(this).html(fix);
    });
    var params = window.location.search.replace('?','').split('&').reduce(
        function(p,e){
            var a = e.split('=');
            p[ decodeURIComponent(a[0])+'='+decodeURIComponent(a[1])] = decodeURIComponent(a[0])+'='+decodeURIComponent(a[1]);
            return p;
        },
        {}
    );
    var stop = 0;
    $.each(multidata, function(index, value){
        var key = params[index];
        if(typeof key != 'undefined'){
            $('[data-replace-key='+value.key+']').html(value.values[key]);
            stop = 1;
            console.log(value.values[key]);
        }
        if(stop === 0){
            console.log(stop);
            $('[data-replace-key='+value.key+']').html(value.default);
        }
    });
   
} 
function t804_init(recid){
var el = $("#rec" + recid);        
var geodata = [];
    var key = el.find('.t_804_geo-datablock').children('.t_804_geo-key').html();
    var def = el.find('.t_804_geo-datablock').children('.t_804_geo-default').html();
    data = el.find('.t_804_geo-datablock').children('.t_804_geo-data').children();
    $.each(data, function(){
        var valuesArr = $(this).children('.t_804_geo-geoip').html().split(';');
        var country = [];
        var region = [];
        var city = [];
        $.each(valuesArr, function(index, value){
            if(value === ''){return true;}
            var strVal = value.split(',');
            if(strVal.length === 3){
            city.push(strVal[2]);
            }
            if(strVal.length === 2){
            region.push(strVal[1]);
            }
            if(strVal.length === 1){
            country.push(strVal[0]);
            }
        });
        var value = $(this).children('.t_804_geo-value').html()
        
        var geo = $.merge(country,region);
        geo = $.merge(geo,city);
        geodata.push( {'value':value, 'geo': geo});
    });
    $.each($('[field]'), function(){
        fix = $(this).html().replace(/(?!%%)[A-zА-яё0-9_-]*(?=%%)/ig, '<span data-replace-key="$&"></span>');
        fix = fix.replace(/%{2}/igm,'');
        $(this).html(fix);
    });
    getGeo(key,geodata,def);
    
    function getGeo(key,geodata,def){
        $.ajax({
        type: "GET",
        url: "https://geo.tildacdn.com/geo/full/",
        crossDomain: true,
        dataType : "json",
        success: function(data){
            replaceGeo(data,key,geodata,def)
        },
        error: function(data){
            replaceGeo(data,key,geodata,def)
        },
        timeout: 1000*15
    });
    }
    function replaceGeo(data,key,geodata,def){
        var city = data.city.name_en;
        var region = data.region.name_en;
        var country = data.country.iso;
        var val = def;
        $.each(geodata, function(index, value) {
            if($.inArray(country, value.geo) != -1){
                val = value.value;
            }
            if($.inArray(region, value.geo) != -1){
                val = value.value;
            }
            if($.inArray(city, value.geo) != -1){
                val = value.value;
            }
        });
        $('[data-replace-key='+key+']').html(val);
    }
} 
function t806__init(recid) {
  tvote__init(recid);
  var testWrap = $('#rec' + recid);
  var testContainer = testWrap.find('.t806');
  var rightAnswersCount;
  var testAnswers = testWrap.find('.t806__answers');
  var testBlock = testWrap.find('.t806__test');
  var testResultWrap = testWrap.find('.t806__result-wrap');
  var shareVK = testWrap.find('.t806__social-btn-vk');
  var shareFB = testWrap.find('.t806__social-btn-fb');
  var shareTwitter = testWrap.find('.t806__social-btn-twitter');
  var rightTestAnswers = [];
  var testImgSrc = [];
  var startTitle = testWrap.find('.t806__start-title').text();
  var startText = testWrap.find('.t806__start-text').text();
  var siteLocation = window.location.href;

  testBlock.addClass('t806__counter');
  testBlock.attr('data-count', 0);

  testResultWrap.each(function(i) {
    if ($(testResultWrap[i]).find('img').attr('src') !== '') {
      testImgSrc.push($(testResultWrap[i]).find('img').attr('src'));
    }
  });

  if (testImgSrc.length == 1) {
    testResultWrap.each(function(i) {
      $(testResultWrap[i]).find('img').attr('src', testImgSrc[0]);
      $(testResultWrap[i]).find('.t806__result-desc').removeClass('t806__result-desc_withoutimg');
      $(testResultWrap[i]).find('.t806__result-count, .t806__result-variant').css('color', '#ffffff');
    });
  }

  testAnswers.each(function() {
    rightTestAnswers.push($(this).attr('data-right-answer'));

    $(this).removeAttr('data-right-answer');
  });

  t806__changeRadio(recid, rightTestAnswers);
  t806__changeTestInput(recid);
  t806__startClickBtn(recid);
  t806__checkClickBtn(recid, rightTestAnswers);
  t806__nextClickBtn(recid);
  t806__resultClickBtn(recid);
  t806__restartClickBtn(recid, rightTestAnswers);

  shareVK.click(function() {t806_shareVK(recid, startTitle, siteLocation)});
  shareFB.click(function() {t806_shareFB(recid, startTitle, startText, siteLocation)});
  shareTwitter.click(function() {t806_shareTwitter(recid, startTitle, siteLocation)});

  t806__clearFormOnBackClick(testWrap);
}


function t806_scrollToTop(testBlock) {
  var topCoordinate = testBlock.offset().top;
  $('html, body').animate({
    scrollTop: topCoordinate
  }, 0);
}


function t806__clearFormOnBackClick(testWrap) {
  window.addEventListener('pagehide', function() {
    testWrap.find('.t806__input').prop('checked' , false);
  });
}


function t806__startClickBtn(test) {
  var testWrap = $('#rec' + test);
  var questionFirst = 1;
  var testBtnStart = testWrap.find('.t806__start-btn');

  testBtnStart.on('click', function (e) {
    var testStart = $(this).parents('.t806__start');

    testStart.hide();
    testStart.next().show();
    t806__showNumber(test, questionFirst);

    t806_fixcontentheight(test);
    t806_scrollToTop(testWrap);

    if (typeof $(".t-records").attr("data-tilda-mode")=="undefined") {
        if(window.lazy=='y'){t_lazyload_update();}
    }

    e.preventDefault();
  });
}


function t806__changeRadio(test, rightansw) {
  var testBlock = $('#rec' + test);
  var testInput = testBlock.find('.t806__input[type="radio"]');
  var lastQuestion = testBlock.find('.t806__question').last();

  lastQuestion.addClass('t806__lastquestion');

  testInput.change(function () {
    var rightAnswersCount = testBlock.find('.t806__counter').attr('data-count');
    var testItem = $(this).parents('#rec' + test + ' .t806__question');
    var testAnswers = $(this).parents('#rec' + test + ' .t806__answers');
    var answerVote = $(this).parents('#rec' + test + ' .t806__answers').find('.t806__answer .t-vote__btn-res');
    var currentRightAnswer = rightansw[testItem.attr('data-question-num') - 1];

    if ($(this).attr('type') === 'radio') {
      var checkedRadio = $(this).val();

      testAnswers.addClass('t806__answers_answered');

      if (testItem.hasClass('t806__lastquestion')) {
        testAnswers.siblings('.t806__btn-wrapper').find('.t806__btn_result').addClass('t806__btn_show');
      } else {
        testAnswers.siblings('.t806__btn-wrapper').find('.t806__btn_next').addClass('t806__btn_show');
      }

      testItem.find('.t806__input').attr('disabled', true);

      if (+checkedRadio === +currentRightAnswer) {
        rightAnswersCount++;
        testBlock.find('.t806__counter').attr('data-count', rightAnswersCount);
      }

      if (+testItem.find('.t806__input:checked').val() !== +currentRightAnswer) {
        testItem.find('.t806__input:checked').parents('.t806__answer').addClass('t806__answer_wrong');
      }
      testItem.find('.t806__input:checked').parent().siblings('.t806__details').show();

      testItem.find('.t806__input[value="' + currentRightAnswer + '"]').parents('.t806__answer').addClass('t806__answer_correct');

      answerVote.addClass('t806__answer-vote_show');

      testItem.find('.t806__input:checked').parents('.t806__answer_correct').addClass('t806__answer_withoutopacity');
      testItem.find('.t806__input[type="radio"]').parents('.t806__answer_correct').addClass('t806__answer_withoutopacity');
    }

    t806_fixcontentheight(test);
  });
}


function t806__changeTestInput(test) {
  var testBlock = $('#rec' + test);
  var testInput = testBlock.find('.t806__input[type="checkbox"]');
  var lastQuestion = testBlock.find('.t806__question').last();
  var checkedAnswerCheck = [];

  testBlock.find('.t806__answers').attr('data-test-checked', '');

  lastQuestion.addClass('t806__lastquestion');

  testInput.change(function () {
    var testAnswers = $(this).parents('#rec' + test + ' .t806__answers');

    if ($(this).attr('type') === 'checkbox') {
      testAnswers.siblings('.t806__btn-wrapper').find('.t806__btn_check').addClass('t806__btn_show');
    }

    if ($(this).attr('type') === 'checkbox' && $(this).is(':checked') && checkedAnswerCheck.indexOf($(this).val()) === -1) {
      checkedAnswerCheck.push($(this).val());
    }

    if ($(this).attr('type') === 'checkbox' && !$(this).is(":checked")) {
      checkedAnswerCheck.splice(checkedAnswerCheck.indexOf($(this).val()), 1);
    }

    testAnswers.attr('data-test-checked', checkedAnswerCheck.join(','));

    t806_fixcontentheight(test);
  });

  return checkedAnswerCheck;
}


function t806__checkClickBtn(test, rightansw) {
  var rightChecked = false;
  var testBlock = $('#rec' + test);
  var testBtnCheck = testBlock.find('.t806__btn_check');
  var testInput = testBlock.find('.t806__input');
  var checkedAnswersTruth = [];

  testBtnCheck.on('click', function (e) {
    var rightAnswersCount = testBlock.find('.t806__counter').attr('data-count');
    var testItem = $(this).parents('#rec' + test + ' .t806__question');
    var testAnswers = $(this).parents('#rec' + test + ' .t806__question').find('.t806__answers');
    var answerVote = $(this).parents('.t806__btn-wrapper').siblings('#rec' + test + ' .t806__answers').find('.t806__answer .t-vote__btn-res');
    var checkboxAnswersArr = [];
    var checkboxAnswers = rightansw[testItem.attr('data-question-num') - 1].split(',');
    var checkedAnswers = testAnswers.attr('data-test-checked').split(',');

    for (var i = 0; i < checkboxAnswers.length; i++) {
      checkboxAnswersArr.push(checkboxAnswers[i]);
    }

    testItem.find(testInput).attr('disabled', true);

    answerVote.addClass('t806__answer-vote_show');

    checkedAnswers.forEach(function (item, i) {
      var checkedCheckboxSort = checkedAnswers.sort();
      var checkboxAnswersArrSort = checkboxAnswersArr.sort();

      if (+checkedCheckboxSort[i] === +checkboxAnswersArrSort[i] && checkedCheckboxSort.length === checkboxAnswersArrSort.length) {
        checkedAnswersTruth.push(1);
      } else {
        checkedAnswersTruth.push(0);
      }
    });

    var rightChecked = checkedAnswersTruth.every(function(item) {
      return item == 1;
    });

    if (testItem.find(testInput).attr('type') === 'checkbox') {
      checkboxAnswersArr.forEach(function (item) {
        testItem.find('.t806__input[value="' + +item + '"]').parents('.t806__answer').addClass('t806__answer_correct');
      });

      checkedAnswers.forEach(function (item) {
        if (checkboxAnswersArr.indexOf(item) === -1) {
          testItem.find('.t806__input[value="' + +item + '"]:checked').parents('.t806__answer').addClass('t806__answer_wrong');
          testItem.find('.t806__input[value="' + +item + '"]').parent().siblings().show();
        }
      });
    }

    testItem.find('.t806__input:checked').parents('.t806__answer_correct').addClass('t806__answer_withoutopacity');

    if (rightChecked) {
      rightAnswersCount++;
      testBlock.find('.t806__counter').attr('data-count', rightAnswersCount);
    }

    checkedAnswersTruth = [];

    $(this).removeClass('t806__btn_show');

    if (testItem.hasClass('t806__lastquestion')) {
      $(this).parents('.t806__question').find('.t806__btn_result').addClass('t806__btn_show');
    } else {
      $(this).parents('.t806__question').find('.t806__btn_next').addClass('t806__btn_show');
    }

    testAnswers.addClass('t806__answers_answered');

    t806_fixcontentheight(test);

    if (typeof $(".t-records").attr("data-tilda-mode")=="undefined") {
        if(window.lazy=='y'){t_lazyload_update();}
    }

    testItem.find('.t806__input:checked').parent().siblings('.t806__details').show();
    t806__changeTestInput(test);

    e.preventDefault();
  });
}


function t806__nextClickBtn(test) {
  var testBlock = $('#rec' + test);
  var testBtnNext = testBlock.find('.t806__btn_next');
  var questionNumber;

  testBtnNext.on('click', function (e) {
    var parentTop = $(this).parents('#rec' + test + ' .t806').offset().top;
    var testItem = $(this).parents('#rec' + test + ' .t806__question');
    questionNumber = testItem.next().attr('data-question-num');

    testItem.hide();
    testItem.next().show();
    t806__showNumber(test, questionNumber);

    t806_fixcontentheight(test);
    t806_scrollToTop(testBlock);

    if (typeof $(".t-records").attr("data-tilda-mode")=="undefined") {
        if(window.lazy=='y'){t_lazyload_update();}
    }

    e.preventDefault();
  });
}


function t806__resultClickBtn(test) {
  var testBtnResult = $('#rec' + test + ' .t806__btn_result');
  var testBlock = $('#rec' + test);

  testBtnResult.on('click', function (e) {
    var parentTop = $(this).parents('#rec' + test + ' .t806__test').offset().top;
    var testItem = $(this).parents('#rec' + test + ' .t806__question');

    testItem.hide();
    t806_scrollToTop(testBlock);
    t806__showResult(test);

    t806_fixcontentheight(test);

    if (typeof $(".t-records").attr("data-tilda-mode")=="undefined") {
        if(window.lazy=='y'){t_lazyload_update();}
    }

    e.preventDefault();
  });
}


function t806__restartClickBtn(test, rightansw) {
  var testBlock = $('#rec' + test);
  var testContainer = testBlock.find('.t806');
  var testRestart = testBlock.find('.t806__btn_restart');
  var testItemAll = testBlock.find('.t806__question');

  testRestart.on('click', function (e) {
    testBlock.find('.t806__start').show();
    testBlock.find('.t806__result').hide();
    testBlock.find('.t806__btn_next').removeClass('t806__btn_show');
    testBlock.find('.t806__btn_result').removeClass('t806__btn_show');
    testBlock.find('.t806__btn_check').removeClass('t806__btn_show');
    testBlock.find('.t806__details').hide();
    testBlock.find('.t806__answers').removeClass('t806__answers_answered');
    testBlock.find('.t806__answers').attr('data-test-checked', '');
    testBlock.find('.t806__answer').removeClass('t806__answer_correct');
    testBlock.find('.t806__answer').removeClass('t806__answer_wrong');
    testBlock.find('.t806__input').parents('.t806__answer').removeClass('t806__answer_withoutopacity');
    testBlock.find('.t806__input').prop('checked' , false);
    testBlock.find('.t806__input').removeAttr('disabled');
    testBlock.find('.t806__answer .t-vote__btn-res').removeClass('t806__answer-vote_show');
    $('#rec' + test + ' .t806__counter').attr('data-count', 0);
    testBlock.find('.t806__number').text(1 + '/' + testItemAll.length);

    t806_fixcontentheight(test);

    if (testContainer.hasClass('t806__test-reload')) {
      document.location.reload(true);
    }

    e.preventDefault();
  });
}


function t806__showResult(test) {
  var testBlock = $('#rec' + test);
  var testContainer = testBlock.find('.t806');
  var fullResult = testBlock.find('.t806__result');
  var startImg = testBlock.find('.t806__start-img img');
  var fullResultLength = fullResult.length;
  var allResult;
  var resultLength = testBlock.find('.t806__result').length;
  var rightAnswersCount = $('#rec' + test).find('.t806__counter').attr('data-count');
  var testItemAll = $('#rec' + test + ' .t806__question');
  var resultCount = $('#rec' + test + ' .t806__result .t806__result-count');
  var resultPercent = rightAnswersCount / testItemAll.length * 100;

  resultCount.text(rightAnswersCount + '/' + testItemAll.length);

  if (resultPercent <= 100 * 1/fullResultLength) {
    testBlock.find('.t806__result_1').show();
  }

  for (var i = 0; i < fullResultLength; i++) {
    if (resultPercent > 100 * (i+1)/fullResultLength && resultPercent <= 100 * (i+2)/fullResultLength) {
      testBlock.find('.t806__result_' + (i + 2)).show();
    }
  }

  if (resultPercent > 100 * (fullResultLength - 1)/fullResultLength) {
    testBlock.find('.t806__result_' + fullResultLength).show();
  }

  var resultData = [];

  fullResult.each(function(i) {
    if ($(fullResult[i]).css('display') == 'block') {
      resultData[0] = $(fullResult[i]).find('.t806__result-variant').text()
      resultData[1] = $(fullResult[i]).find('.t806__result-count').text();

      resultData[2] = '';

      if (testContainer.hasClass('t806__test-reload')) {
        if ($(fullResult[i]).find('.t806__result-wrap img').length != 0) {
          if (typeof window.lazy !== 'undefined') {
           resultData[2] = $(fullResult[i]).find('.t806__result-wrap img').attr('data-original');
         } else {
           resultData[2] = $(fullResult[i]).find('.t806__result-wrap img').attr('src');
         }
        }

        if ($(fullResult[i]).find('.t806__result-wrap img').length == 0 && startImg.length != 0){
          if (typeof window.lazy !== 'undefined') {
           resultData[2] = startImg.attr('data-original');
         } else {
           resultData[2] = startImg.attr('src');
         }
        }
      }

      if (!testContainer.hasClass('t806__test-reload')) {
        if ($(fullResult[i]).find('.t806__result-wrap img').length != 0) {
          resultData[2] = $(fullResult[i]).find('.t806__result-wrap img').attr('src');
        }

        if ($(fullResult[i]).find('.t806__result-wrap img').length == 0 && startImg.length != 0){
          resultData[2] = startImg.attr('src');
        }
      }

      resultData[3] = $(fullResult[i]).attr('data-quiz-result-number');
    }
  });

  return resultData;
}


function t806__showNumber(test, number) {
  var testItemNumber = $('#rec' + test + ' .t806__number');
  var testItemAll = $('#rec' + test + ' .t806__question');
  testItemNumber.html('<span>' + number + '</span>' + '<span>/</span>' + '<span>' + testItemAll.length + '</span>');
}


function t806_fixcontentheight(id) {
    /* correct cover height if content more when cover height */
  var el = $("#rec" + id);
  var hcover=el.find(".t-cover").height();
  var hcontent=el.find("div[data-hook-content]").outerHeight();
  if(hcontent>300 && hcover<hcontent){
     var hcontent=hcontent+120;
     if(hcontent>1000){hcontent+=100;}
     el.find(".t-cover").height(hcontent);
     el.find(".t-cover__filter").height(hcontent);
     el.find(".t-cover__carrier").height(hcontent);
     el.find(".t-cover__wrapper").height(hcontent);
     if($isMobile == false){
       setTimeout(function() {
         var divvideo=el.find(".t-cover__carrier");
         if(divvideo.find('iframe').length>0){
            setWidthHeightYoutubeVideo(divvideo, hcontent+'px');
         }
       }, 2000);
    }
  }
}


function t806_changeShareFBUrl(siteLocation, searchUrl) {
  var url = siteLocation.split('?')[0] + '?';
  var searchParametrs = decodeURIComponent(searchUrl.substring(1));
  var params = searchParametrs.split('&');

  params.forEach(function(item) {
    if (item.indexOf('fb_action_ids') == -1 && item.indexOf('fb_action_types')  == -1 && item.indexOf('result') == -1) {
      url = url + item + '&';
    }
  });

  url = url.substring(0, url.length - 1);
  return url;
}


function t806_shareVK(recid, ptitle, purl) {
  var dataForShare = t806__showResult(recid);
  var text = dataForShare[0];
  var count = dataForShare[1];
  var slash = dataForShare[2].indexOf('/') == 0 ? '' : '/';
  var urlPathname = window.location.pathname.length > 1 ? window.location.pathname : '';
  var img = dataForShare[2].indexOf('://') != -1 ? dataForShare[2] : window.location.protocol + '//' + window.location.host + urlPathname + slash + dataForShare[2];
  var resultNumber = dataForShare[3];
  var idUrl = recid + resultNumber + 'vk';
  var urlValueImg = 'https://vote.tildacdn.com/vote/2/share/index.php?text=' + text + '&result=' + count + '&url=' + img + '&id=' + idUrl + '&social=vk' + '&name=' + ptitle;

  var value = $.ajax({
    url: urlValueImg,
    type: 'GET',
    async: false,
    data: {
      format: 'json'
    },
    error: function() {
      console.log('Error');
    },
    complete: function(data) {
      var urlImg = data.responseJSON.url;
      var shareUrl = window.location.href.indexOf('#') != -1 ? purl.split('#')[0] : purl;
      url = 'http://vkontakte.ru/share.php?url=' + shareUrl + '&title=' + ptitle + '&description=' + ptitle + '&image=' + urlImg + '&noparse=true';
      t806__openPopup(url);
    }
  });
}


function t806_shareFB(recid, ptitle, pdescr, purl) {
  var dataForShare = t806__showResult(recid);
  var text = dataForShare[0];
  var count = dataForShare[1];
  var slash = dataForShare[2].indexOf('/') == 0 ? '' : '/';
  var urlPathname = window.location.pathname.length > 1 ? window.location.pathname : '';
  var img = dataForShare[2].indexOf('://') != -1 ? dataForShare[2] : window.location.protocol + '//' + window.location.host + urlPathname + slash + dataForShare[2];
  var resultNumber = dataForShare[3];
  var idUrl = recid + resultNumber + 'fb';
  var param = count.substring(0, count.indexOf('/')) + count.substring(count.indexOf('/') + 1);
  var urlValueImg = 'https://vote.tildacdn.com/vote/2/share/index.php?text=' + text + '&result=' + count + '&url=' + img + '&id=' + idUrl + '&social=fb' + '&name=' + ptitle;

  var value = $.ajax({
    url: urlValueImg,
    type: 'GET',
    async: false,
    data: {
      format: 'json'
    },
    error: function() {
      console.log('Error');
    },
    complete: function(data) {
      var urlImg = data.responseJSON.url;
      var searchUrl = window.location.search;
      purl = searchUrl !== '' ? t806_changeShareFBUrl(purl, searchUrl) + '?result=' + param : purl + '?result=' + param;

      FB.ui({
        method: 'share_open_graph',
        action_type: 'og.shares',
        action_properties: JSON.stringify({
        object: {
            'og:url': purl,
            'og:title': ptitle,
            'og:description': pdescr,
            'og:image': urlImg,
            'og:image:type': 'image/jpeg',
            'og:image:width': '1200',
            'og:image:height': '630'
          }
        })
      });
    }
  });
}


function t806_shareTwitter(recid, ptitle, purl) {
  var dataForShare = t806__showResult(recid);
  var testWrap = $('#rec' + recid);
  var testContainer = testWrap.find('.t806');
  var text = dataForShare[0];
  var count = dataForShare[1];
  var img = dataForShare[2];

  var resultCount = count.substring(0, count.indexOf('/'));
  var allCount = count.substring(count.indexOf('/') + 1)

  var result;

  if (testContainer.hasClass('t806__ru')) {
    result = 'Мой результат: ' + resultCount + ' из ' + allCount + '. ' + text;
  }
  if (testContainer.hasClass('t806__en')) {
    result = 'My result: ' + resultCount + ' out of ' + allCount + '. ' + text;
  }

  url = 'https://twitter.com/share?url=' + purl + '&text=' + result;

  t806__openPopup(url);
}


function t806__openPopup(url) {
  window.open(url,'','toolbar=0,status=0,width=626,height=436');
}
 
function t807__init(recid) {
  tvote__init(recid);
  var testWrap = $('#rec' + recid);

  $('#rec'+recid).find('.t-vote').bind('tildavote:numberschanged',function(){
    $(".js-vote-item").each(function() {
        var percentage = $(this).find(".t-vote__btn-res__percent");
        if (typeof percentage != "undefined") {
            var bar = $(this).find(".t807__answer-progressbar");
            bar.css("width",percentage.html());
        }
    })
  });

  $('#rec'+recid).find('.t-vote').bind('tildavote:resultsended',function(){
    if (!$(this).hasClass('t-vote_sended') || $(this).hasClass('t807__hidden')) {
      return;
    }
    
    $(this).addClass('t807__hidden');

    if (!$(this).attr('data-vote-visibility') && $(this).hasClass('t807__test')) {
      t807__onSuccess(recid);
    }

  });

  t807__replyClickBtn(recid);
}

function t807__replyClickBtn(test) {
    var testBlock = $('#rec' + test);
    var replyBtn = testBlock.find('.t807__btn_reply');

    replyBtn.on('click', function (e) {
        e.preventDefault();
    });
}


function t807__onSuccess(test) {
  var testBlock = $('#rec' + test).find('.t807__test');
  var t807_targetOffset = testBlock.offset().top;

  if ($(window).width()>960) {
    var t807_target = t807_targetOffset - 200;
  } else {
    var t807_target = t807_targetOffset - 100;
  }

  $('html, body').animate({ scrollTop: t807_target}, 400);
}
 
function t813_init(recid,height){
  t813__setHeight(recid,height);

  var doResize;
  $(window).resize(function(){
    clearTimeout(doResize);
    doResize = setTimeout(function() {
    	t813__setHeight(recid);
    }, 200);
  });
}

function t813__setHeight(recid,height) {
  if (height=="" || typeof height=="undefined"){
  var el = $("#rec"+recid),
      div = el.find(".t813__contentwrapper"),
      height = div.width() * 0.5625;
  div.height(height);
  div.parent().height(height);
  }
}

function t813_onSuccess(form){
	var inputsWrapper = form.find('.t-form__inputsbox');
    var inputsHeight = inputsWrapper.height();
    var inputsOffset = inputsWrapper.offset().top;
    var inputsBottom = inputsHeight + inputsOffset;
	var targetOffset = form.find('.t-form__successbox').offset().top;

    if ($(window).width()>960) {
        var target = targetOffset - 200;
    }	else {
        var target = targetOffset - 100;
    }

    if (targetOffset > $(window).scrollTop() || ($(document).height() - inputsBottom) < ($(window).height() - 100)) {
        inputsWrapper.addClass('t813__inputsbox_hidden');
		setTimeout(function(){
			if ($(window).height() > $('.t-body').height()) {$('.t-tildalabel').animate({ opacity:0 }, 50);}
		}, 300);
    } else {
        $('html, body').animate({ scrollTop: target}, 400);
        setTimeout(function(){inputsWrapper.addClass('t813__inputsbox_hidden');}, 400);
    }

	var successurl = form.data('success-url');
    if(successurl && successurl.length > 0) {
        setTimeout(function(){
            window.location.href= successurl;
        },500);
    }

}
 
function t814_init(recid) {

  t814_setHeight(recid);

  $(window).bind('resize', t_throttle(function() {
    if (typeof window.noAdaptive!="undefined" && window.noAdaptive==true && $isMobile){return;}
    t814_setHeight(recid);
  }, 200));

  $('.t814').bind('displayChanged',function(){
    t814_setHeight(recid);
  });

}

function t814_setHeight(rec) {
  el = $('#rec'+rec)

  var imgWrapperHeight = el.find(".t814__blockimg").height();
  var blockTextWrapper = el.find(".t814__blocktext-wrapper");
  var textWrapper = el.find(".t814__blocktext");

  if ($(window).width() > 960) {
    textWrapper.css('height', imgWrapperHeight);
    blockTextWrapper.css('height', textWrapper.outerHeight(true));
  } else {
    blockTextWrapper.css('height', 'auto');
  }

}
 
function t815_init(recid){
    var rec = $('#rec'+recid);
    var el = rec.find('.t815');
    var isFixed = (el.css('position') == 'fixed');
    var redactorMode = el.hasClass('t815_redactor-mode');

    if (!redactorMode) {
      	el.removeClass('t815__beforeready');

      	if (isFixed && el.attr('data-bgopacity-two')) {
            t815_changebgopacitymenu(recid);
            $(window).bind('scroll', t_throttle(function(){t815_changebgopacitymenu(recid)}, 200));
      	}

        if (isFixed && el.attr('data-appearoffset')) {
            el.removeClass('t815__beforeready');
            t815_appearMenu(recid);
            $(window).bind('scroll', t_throttle(function(){t815_appearMenu(recid)}, 200));
        }
    }

    t815_setBg(recid);
    $(window).bind('resize', t_throttle(function(){t815_setBg(recid);}, 200));
}


function t815_setBg(recid) {
    var window_width = $(window).width();
    if (window_width > 980) {
        $(".t815").each(function() {
            var el = $(this);
            if (el.attr('data-bgcolor-setbyscript') == "yes") {
                var bgcolor = el.attr("data-bgcolor-rgba");
                el.css("background-color",bgcolor);
            }
        });
    } else {
        $(".t815").each(function() {
            var el=$(this);
            var bgcolor = el.attr("data-bgcolor-hex");
            el.css("background-color",bgcolor);
            el.attr("data-bgcolor-setbyscript","yes");
        });
    }
}

function t815_appearMenu(recid) {
    var window_width = $(window).width();
    if (window_width > 980){
        $(".t815").each(function() {
            var el = $(this);
            var appearoffset = el.attr("data-appearoffset");
            if (appearoffset!="") {
                if(appearoffset.indexOf('vh') > -1) {
                    appearoffset = Math.floor((window.innerHeight * (parseInt(appearoffset) / 100)));
                }

                appearoffset = parseInt(appearoffset, 10);

                if ($(window).scrollTop() >= appearoffset) {
                    if (el.css('visibility') == 'hidden') {
                        el.finish();
                        el.css("top","-50px");
                        el.css("visibility","visible");
                        el.animate({"opacity": "1","top": "0px"}, 200, function() {});
                    }
                } else {
                    el.stop();
                    el.css("visibility","hidden");
                }
            }
        });
    }
}

function t815_changebgopacitymenu(recid) {
    var window_width = $(window).width();
    if(window_width > 980){
        $(".t815").each(function() {
            var el = $(this);
            var bgcolor = el.attr("data-bgcolor-rgba");
            var bgcolor_afterscroll = el.attr("data-bgcolor-rgba-afterscroll");
            var bgopacityone = el.attr("data-bgopacity");
            var bgopacitytwo = el.attr("data-bgopacity-two");
            var menushadow = el.attr("data-menushadow");
            if (menushadow == '100') {
                var menushadowvalue = menushadow;
            } else {
                var menushadowvalue = '0.'+menushadow;
            }
            if ($(window).scrollTop() > 20) {
                el.css("background-color", bgcolor_afterscroll);
                if(bgopacitytwo == '0' || menushadow == ' '){
                  el.css("box-shadow", "none");
                } else {
                  el.css("box-shadow", "0px 1px 3px rgba(0,0,0,"+ menushadowvalue +")");
                }
            } else {
                el.css("background-color",bgcolor);
                if (bgopacityone == '0.0' || menushadow == ' '){
                  el.css("box-shadow","none");
                } else {
                  el.css("box-shadow","0px 1px 3px rgba(0,0,0,"+ menushadowvalue +")");
                }
            }
        });
    }
}
 
function t816_init(recid, padding) {
  var rec = $('#rec'+recid);
  var el = rec.find('.t816');

  t816_setHeight(rec, padding);

  $(window).bind('resize', t_throttle(function() {
    if (typeof window.noAdaptive!="undefined" && window.noAdaptive==true && $isMobile){return;}
    t816_setHeight(rec, padding);
  }, 200));

  $('.t816').bind('displayChanged',function(){
    t816_setHeight(rec, padding);
  });

}

function t816_setHeight(rec, padding) {

  var galleryContainer = $('.t816__container');
  var galleryRow = $('.t816__row:first-child');
  var colOffset = $('.t816__tile_offset');
  if (colOffset.length == 0) {return;}
  var containerOffset = colOffset.position().top - padding;

   if ($(window).width() >= 960) {
     galleryContainer.css('padding-bottom', containerOffset);
   }

}
 
function t817_init(recid) {
  var rec = $('#rec'+recid);
  var curMode = $('.t-records').attr('data-tilda-mode');
  var tab = rec.find('.t817__tab');
  var select = rec.find('.t817__select');
  var content = rec.find('.t817__content');

  if (curMode!='edit' && curMode!='preview') {
    t817_scrollToTabs(recid);
  }

  t817_showTabByUrl(recid, tab, content, select);
  t817_showTab(tab, content, recid);
  t817_showTabMobile(select, content, recid);
}

function t817_showTab(tab, content, recid) {
  var tabNumber;
  var curUrl = window.location.href;
  var curMode = $('.t-records').attr('data-tilda-mode');
  tab.on('click', function(e) {
    tabNumber = $(this).attr('data-tab-number');
    tab.removeClass('t817__tab_active');
    content.removeClass('t817__content_active');
    $(this).addClass('t817__tab_active');

    t817_removeUrl();

    content.each(function(i) {
      if ($(content[i]).attr('data-tab-content-number') == tabNumber) {
        $(content[i]).addClass('t817__content_active');
      }
    });

    if (curMode!='edit' && curMode!='preview') {
      if (typeof history.replaceState!='undefined'){
        window.history.replaceState('', '', window.location.href + '#!/tab/' + recid + '-' + tabNumber);
      }
    }


    if (typeof $('.t-records').attr('data-tilda-mode') == 'undefined') {
        if(window.lazy == 'y'){t_lazyload_update();}
    }

    e.preventDefault();
  })
}

function t817_showTabMobile(select, content, recid) {
  var tabNumberMobile;
  var curUrl = window.location.href;
  var curMode = $('.t-records').attr('data-tilda-mode');
  select.change(function(e) {
    tabNumberMobile = $(this).val();
    content.removeClass('t817__content_active');

    t817_removeUrl();

    content.each(function(i) {
      if ($(content[i]).attr('data-tab-content-number') == tabNumberMobile) {
        $(content[i]).addClass('t817__content_active');
      }
    });

    if (curMode!='edit' && curMode!='preview') {
      if (typeof history.replaceState!='undefined'){
        window.history.replaceState('', '', window.location.href + '#!/tab/' + recid + '-' + tabNumberMobile);
      }
    }

    if (typeof $('.t-records').attr('data-tilda-mode') == 'undefined') {
        if(window.lazy == 'y'){t_lazyload_update();}
    }

    e.preventDefault();
  })
}

function t817_showTabByUrl(recid, tab, content, select) {
  var curUrl = window.location.href;
  var tabIndexNumber = curUrl.indexOf(recid+'-');
  var tabIndex = curUrl.substring(tabIndexNumber+recid.length+1);

  if (tabIndexNumber != -1) {
    tab.each(function(i) {
      if ($(tab[i]).attr('data-tab-number') == tabIndex) {
        $(tab[i]).addClass('t817__tab_active');
      }
    });

    content.each(function(i) {
      if ($(content[i]).attr('data-tab-content-number') == tabIndex) {
        $(content[i]).addClass('t817__content_active');
      }
    });

    select.val(tabIndex);

  } else {
    tab.first().addClass('t817__tab_active');
    content.first().addClass('t817__content_active');
  }

}

function t817_scrollToTabs(recid) {
  var curUrl = window.location.href;
  var tabIndexNumber = curUrl.indexOf('#!/tab/');
  var tabIndexNumberStart = curUrl.indexOf('tab/');

  if (tabIndexNumber!= -1) {
    var tabRec = curUrl.substring(tabIndexNumberStart+4,tabIndexNumberStart+4+recid.length)

    if (+tabRec == +recid) {
      var tabBlock = $('#rec' + tabRec).find('.t817');
      var targetOffset = tabBlock.offset().top;

      if ($(window).width()>960) {
        var target = targetOffset - 200;
      } else {
        var target = targetOffset - 100;
      }

      $('html, body').animate({
        scrollTop: target
      }, 400);
    }
  }
}

function t817_removeUrl() {
  var curUrl = window.location.href;
  var indexToRemove = curUrl.indexOf('#!/tab/');
  if (/iPhone|iPad|iPod/i.test(navigator.userAgent) && indexToRemove<0) { indexToRemove = curUrl.indexOf('%23!/tab/'); }
  curUrl = curUrl.substring(0,indexToRemove);
  if (indexToRemove != -1) {
    if (typeof history.replaceState!='undefined'){
      window.history.replaceState('', '', curUrl);
    }
  }
}
 
function t819_init(recid) {
  var rec = $('#rec'+recid);
  var curMode = $('.t-records').attr('data-tilda-mode');
  var tab = rec.find('.t819__tab');
  var select = rec.find('.t819__select');
  var content = rec.find('.t819__content');

  if (curMode!='edit' && curMode!='preview') {
    t819_scrollToTabs(recid);
  }

  t819_showTabByUrl(recid, tab, content, select);
  t819_showTab(tab, content, recid);
  t819_showTabMobile(select, content, recid);
}

function t819_showTab(tab, content, recid) {
  var tabNumber;
  var curUrl = window.location.href;
  var curMode = $('.t-records').attr('data-tilda-mode');
  tab.on('click', function(e) {
    tabNumber = $(this).attr('data-tab-number');
    tab.removeClass('t819__tab_active');
    content.removeClass('t819__content_active');
    $(this).addClass('t819__tab_active');

    t819_removeUrl();

    content.each(function(i) {
      if ($(content[i]).attr('data-tab-content-number') == tabNumber) {
        $(content[i]).addClass('t819__content_active');
      }
    });

    if (curMode!='edit' && curMode!='preview') {
      if (typeof history.replaceState!='undefined'){
        window.history.replaceState('', '', window.location.href + '#!/tab/' + recid + '-' + tabNumber);
      }
    }


    if (typeof $('.t-records').attr('data-tilda-mode') == 'undefined') {
        if(window.lazy == 'y'){t_lazyload_update();}
    }

    e.preventDefault();
  })
}

function t819_showTabMobile(select, content, recid) {
  var tabNumberMobile;
  var curUrl = window.location.href;
  var curMode = $('.t-records').attr('data-tilda-mode');
  select.change(function(e) {
    tabNumberMobile = $(this).val();
    content.removeClass('t819__content_active');

    t819_removeUrl();

    content.each(function(i) {
      if ($(content[i]).attr('data-tab-content-number') == tabNumberMobile) {
        $(content[i]).addClass('t819__content_active');
      }
    });

    if (curMode!='edit' && curMode!='preview') {
      if (typeof history.replaceState!='undefined'){
        window.history.replaceState('', '', window.location.href + '#!/tab/' + recid + '-' + tabNumberMobile);
      }
    }

    if (typeof $('.t-records').attr('data-tilda-mode') == 'undefined') {
        if(window.lazy == 'y'){t_lazyload_update();}
    }

    e.preventDefault();
  })
}

function t819_showTabByUrl(recid, tab, content, select) {
  var curUrl = window.location.href;
  var tabIndexNumber = curUrl.indexOf(recid+'-');
  var tabIndex = curUrl.substring(tabIndexNumber+recid.length+1);

  if (tabIndexNumber != -1) {
    tab.each(function(i) {
      if ($(tab[i]).attr('data-tab-number') == tabIndex) {
        $(tab[i]).addClass('t819__tab_active');
      }
    });

    content.each(function(i) {
      if ($(content[i]).attr('data-tab-content-number') == tabIndex) {
        $(content[i]).addClass('t819__content_active');
      }
    });

    select.val(tabIndex);

  } else {
    tab.first().addClass('t819__tab_active');
    content.first().addClass('t819__content_active');
  }

}

function t819_scrollToTabs(recid) {
  var curUrl = window.location.href;
  var tabIndexNumber = curUrl.indexOf('#!/tab/');
  var tabIndexNumberStart = curUrl.indexOf('tab/');

  if (tabIndexNumber!= -1) {
    var tabRec = curUrl.substring(tabIndexNumberStart+4,tabIndexNumberStart+4+recid.length)

    if (+tabRec == +recid) {
      var tabBlock = $('#rec' + tabRec).find('.t819');
      var targetOffset = tabBlock.offset().top;

      if ($(window).width()>960) {
        var target = targetOffset - 200;
      } else {
        var target = targetOffset - 100;
      }

      $('html, body').animate({
        scrollTop: target
      }, 400);
    }
  }
}

function t819_removeUrl() {
  var curUrl = window.location.href;
  var indexToRemove = curUrl.indexOf('#!/tab/');
  if (/iPhone|iPad|iPod/i.test(navigator.userAgent) && indexToRemove<0) { indexToRemove = curUrl.indexOf('%23!/tab/'); }
  curUrl = curUrl.substring(0,indexToRemove);
  if (indexToRemove != -1) {
    if (typeof history.replaceState!='undefined'){
      window.history.replaceState('', '', curUrl);
    }
  }
}
 
function t821_init(recid){
    var rec = $('#rec'+recid);
    var el = rec.find('.t821');
    var isFixed = (el.css('position') == 'fixed');
    var redactorMode = el.hasClass('t821_redactor-mode');

    if (!redactorMode) {
      	el.removeClass('t821__beforeready');

      	if (isFixed && el.attr('data-bgopacity-two')) {
            t821_changebgopacitymenu(recid);
            $(window).bind('scroll', t_throttle(function(){t821_changebgopacitymenu(recid)}, 200));
      	}

        if (isFixed && el.attr('data-appearoffset')) {
            el.removeClass('t821__beforeready');
            t821_appearMenu(recid);
            $(window).bind('scroll', t_throttle(function(){t821_appearMenu(recid)}, 200));
        }
    }

    t821_setBg(recid);
    $(window).bind('resize', t_throttle(function(){t821_setBg(recid);}, 200));
}


function t821_setBg(recid) {
    var window_width = $(window).width();
    if (window_width > 980) {
        $(".t821").each(function() {
            var el = $(this);
            if (el.attr('data-bgcolor-setbyscript') == "yes") {
                var bgcolor = el.attr("data-bgcolor-rgba");
                el.css("background-color",bgcolor);
            }
        });
    } else {
        $(".t821").each(function() {
            var el=$(this);
            var bgcolor = el.attr("data-bgcolor-hex");
            el.css("background-color",bgcolor);
            el.attr("data-bgcolor-setbyscript","yes");
        });
    }
}

function t821_appearMenu(recid) {
    var window_width = $(window).width();
    if (window_width > 980){
        $(".t821").each(function() {
            var el = $(this);
            var appearoffset = el.attr("data-appearoffset");
            if (appearoffset!="") {
                if(appearoffset.indexOf('vh') > -1) {
                    appearoffset = Math.floor((window.innerHeight * (parseInt(appearoffset) / 100)));
                }

                appearoffset = parseInt(appearoffset, 10);

                if ($(window).scrollTop() >= appearoffset) {
                    if (el.css('visibility') == 'hidden') {
                        el.finish();
                        el.css("top","-50px");
                        el.css("visibility","visible");
                        el.animate({"opacity": "1","top": "0px"}, 200, function() {});
                    }
                } else {
                    el.stop();
                    el.css("visibility","hidden");
                }
            }
        });
    }
}

function t821_changebgopacitymenu(recid) {
    var window_width = $(window).width();
    if(window_width > 980){
        $(".t821").each(function() {
            var el = $(this);
            var bgcolor = el.attr("data-bgcolor-rgba");
            var bgcolor_afterscroll = el.attr("data-bgcolor-rgba-afterscroll");
            var bgopacityone = el.attr("data-bgopacity");
            var bgopacitytwo = el.attr("data-bgopacity-two");
            var menushadow = el.attr("data-menushadow");
            if (menushadow == '100') {
                var menushadowvalue = menushadow;
            } else {
                var menushadowvalue = '0.'+menushadow;
            }
            if ($(window).scrollTop() > 20) {
                el.css("background-color", bgcolor_afterscroll);
                if(bgopacitytwo == '0' || menushadow == ' '){
                  el.css("box-shadow", "none");
                } else {
                  el.css("box-shadow", "0px 1px 3px rgba(0,0,0,"+ menushadowvalue +")");
                }
            } else {
                el.css("background-color",bgcolor);
                if (bgopacityone == '0.0' || menushadow == ' '){
                  el.css("box-shadow","none");
                } else {
                  el.css("box-shadow","0px 1px 3px rgba(0,0,0,"+ menushadowvalue +")");
                }
            }
        });
    }
}


function t821_createMobileMenu(recid){
  var window_width=$(window).width(),
      el=$("#rec"+recid),
      menu=el.find(".t821"),
      burger=el.find(".t821__mobile");
  burger.click(function(e){
    menu.fadeToggle(300);
    $(this).toggleClass("t821_opened")
  })
  $(window).bind('resize', t_throttle(function(){
    window_width=$(window).width();
    if(window_width>980){
      menu.fadeIn(0);
    }
  }, 200));
}
 
function t822_init(recid) {

  t822_setHeight(recid);

  $(window).load(function() {
    t822_setHeight(recid);
  });

  $(window).bind('resize', t_throttle(function() {
    if (typeof window.noAdaptive!="undefined" && window.noAdaptive==true && $isMobile){return;}
    t822_setHeight(recid);
  }, 200));

  $('.t822').bind('displayChanged',function(){
    t822_setHeight(recid);
  });

}

function t822_setHeight(recid) {
    $('#rec'+recid+' .t822 .t-container').each(function() {
        var t822__highestBox = 0;
        $('.t822__col', this).each(function(){
			var t822__curcol=$(this);
			var t822__curcolchild=t822__curcol.find('.t822__col-wrapper');
			if(t822__curcol.height() < t822__curcolchild.height())t822__curcol.height(t822__curcolchild.height());
            if(t822__curcol.height() > t822__highestBox)t822__highestBox = t822__curcol.height();
        });
        if($(window).width()>=960){
        	$('.t822__col',this).css('height', t822__highestBox);
        }else{
	        $('.t822__col',this).css('height', "auto");
        }
    });
};
 
function t823_onSuccess(form){
	var inputsWrapper = form.find('.t-form__inputsbox');
  var inputsHeight = inputsWrapper.height();
  var inputsOffset = inputsWrapper.offset().top;
  var inputsBottom = inputsHeight + inputsOffset;
	var targetOffset = form.find('.t-form__successbox').offset().top;

  if ($(window).width()>960) {
    var target = targetOffset - 200;
  }	else {
    var target = targetOffset - 100;
  }

  if (targetOffset > $(window).scrollTop() || ($(document).height() - inputsBottom) < ($(window).height() - 100)) {
    inputsWrapper.addClass('t823__inputsbox_hidden');
		setTimeout(function(){
			if ($(window).height() > $('.t-body').height()) {$('.t-tildalabel').animate({ opacity:0 }, 50);}
		}, 300);
  } else {
    $('html, body').animate({ scrollTop: target}, 400);
    setTimeout(function(){inputsWrapper.addClass('t823__inputsbox_hidden');}, 400);
  }

	var successurl = form.data('success-url');
	if(successurl && successurl.length > 0) {
    setTimeout(function(){
      window.location.href= successurl;
    },500);
	}
}
 
function t824_init(recid){
  $('#rec'+recid).attr('data-animationappear','off');
  $('#rec'+recid).css('opacity','1');

  var rec = $('#rec'+recid);
  var block = $('#rec'+recid).find('.t824');
  var el = $('#rec'+recid).find('.t824__popup');
  var analitics = el.attr('data-track-popup');
  var hook = "TildaSendMessageWidget"+recid;
  var widgetBtn = $('#rec' + recid + ' .t824__btn');
  var closeBtn = $('#rec' + recid + ' .t824__popup-icon-close');
  var popupContainer = $('#rec' + recid + ' .t824__popup-container');

  t824_appearPopup(recid);
  $(window).bind('scroll', t_throttle(function(){t824_appearPopup(recid)}, 200));

  widgetBtn.click(function(e){
    $('#rec' + recid + ' .t824').addClass('t824_active');
    t824_showPopup(recid);
    popupContainer.css('visibility', 'visible');
    popupContainer.animate({'opacity': '1'}, 200, function() {});
    widgetBtn.css('visibility', 'hidden');
    widgetBtn.animate({'opacity': '0'}, 200, function() {});

    if (analitics > '') {
      Tilda.sendEventToStatistics(analitics, hook);
    }

    e.preventDefault();
  });

  closeBtn.click(function(e) {
    t824_closePopup(rec);
    widgetBtn.css('visibility', 'visible');
    widgetBtn.animate({'opacity': '1'}, 200, function() {});
    if(window.lazy == 'y'){t_lazyload_update();}
    e.preventDefault();
  });

  widgetBtn.click(function(e) {
    t824_showPopup(recid);
    $(this).css('visibility', 'hidden');
    e.preventDefault();
  });

  rec.find('.t824__mobile-icon-close').click(function(e){ t824_closePopup(rec); });

  t824_checkPhoneNumber(recid);
}

function t824_showPopup(recid){
  var el=$('#rec'+recid);
  var popup = el.find('.t824__popup');

  el.find('.t824__btn_wrapper').removeClass('t824__btn_animate');
  el.find('.t824__btn-text').css('display','none');
  if ($(window).width()<960) { $('body').addClass('t824__body_popupshowed'); }

  popup.css('display', 'block');

  setTimeout(function() {
    popup.addClass('t824__popup_show');
  }, 50);

  el.find('.t824__mobile-icon-close').click(function(e){ t824_closePopup(el); });

  $(document).keydown(function(e) {
    if (e.keyCode == 27) { t824_closePopup(el); }
  });

  if(window.lazy == 'y'){t_lazyload_update();}
}

function t824_closePopup(rec){
  if ($(window).width()<960) { $('body').removeClass('t824__body_popupshowed'); }
  rec.find('.t824').removeClass('t824_active');
  rec.find('.t824__popup').removeClass('t824__popup_show');

  setTimeout(function() {
    rec.find('.t824__popup').not('.t824__popup_show').css('display', 'none');
  }, 300);
}

function t824_checkPhoneNumber(recid) {
  var el = $('#rec'+recid);
  var phone = el.find('.t824__phone').html();
  var phoneArr = phone.split('');
  var phoneWithoutSpaceArr = [];

  for (var i = 0; i < phoneArr.length; i++) {
    if (phoneArr[i] !== ' ') {
      phoneWithoutSpaceArr.push(phoneArr[i]);
    }
  }

  var phoneWithoutSpace = phoneWithoutSpaceArr.join('');

  el.find('.t824__phone').attr('href', 'tel:'+phoneWithoutSpace);
}

function t824_sendPopupEventToStatistics(popupname) {
  var virtPage = '/tilda/popup/';
  var virtTitle = 'Popup: ';

  if (popupname.substring(0,7) == '#popup:') {
      popupname = popupname.substring(7);
  }

  virtPage += popupname;
  virtTitle += popupname;
  if (window.Tilda && typeof Tilda.sendEventToStatistics == 'function') {
    Tilda.sendEventToStatistics(virtPage, virtTitle, '', 0);
  } else {

   if(ga) {
     if (window.mainTracker != 'tilda') {
       ga('send', {'hitType':'pageview', 'page':virtPage,'title':virtTitle});
     }
   }

    if (window.mainMetrika > '' && window[window.mainMetrika]) {
     window[window.mainMetrika].hit(virtPage, {title: virtTitle,referer: window.location.href});
    }
  }
}

function t824_appearPopup(recid) {
  var window_width = $(window).width();

  if (window_width > 980) {
    var el = $('#rec' + recid + ' .t824__popup-container');
    var widgetBtn = $('#rec' + recid + ' .t824__btn');
    var appearoffset = el.attr('data-appearoffset');

    if (appearoffset!='') {
      if(appearoffset.indexOf('vh') > -1) {
        appearoffset = Math.floor((window.innerHeight * (parseInt(appearoffset) / 100)));
      }

      appearoffset = parseInt(appearoffset, 10);

      if ($(window).scrollTop() >= appearoffset) {
        if (el.css('visibility') == 'hidden' && widgetBtn.css('visibility') == 'hidden') {
          el.finish();

          el.parents('.t824__popup').css('display', 'block');
          setTimeout(function() {
            el.parents('.t824__popup').addClass('t824__popup_show');
          }, 50);

          el.css('visibility','visible');
          if(window.lazy == 'y'){t_lazyload_update();}
          el.animate({'opacity': '1'}, 200, function() {});
        }
      }
    }

    if (appearoffset=='') {
      if (el.css('visibility') == 'hidden' && widgetBtn.css('visibility') == 'hidden') {

        el.parents('.t824__popup').css('display', 'block');
        setTimeout(function() {
          el.parents('.t824__popup').addClass('t824__popup_show');
        }, 50);

        el.css('visibility','visible');
        if(window.lazy == 'y'){t_lazyload_update();}
        el.animate({'opacity': '1'}, 200, function() {});
      }
    }
  }
}
 
function t825_initPopup(recid) {
  var rec = $('#rec' + recid);
  $('#rec' + recid).attr('data-animationappear', 'off');
  $('#rec' + recid).css('opacity', '1');
  var el = $('#rec' + recid).find('.t825__popup');
  var analitics = el.attr('data-track-popup');
  var hook="TildaSendMessageWidget" + recid;
  var obj = $('#rec' + recid + ' .t825__btn');

  obj.click(function(e) {
    if (obj.hasClass('t825__btn_active')) {
  		t825_closePopup(rec);
  		return;
	}
  obj.addClass('t825__btn_active');
	$('#rec' + recid + ' .t825').addClass('t825_active');
    t825_showPopup(recid);
    e.preventDefault();
    if (analitics > '') {
        Tilda.sendEventToStatistics(analitics, hook);
    }
  });

  if(window.lazy == 'y'){t_lazyload_update();}

  t825_checkPhoneNumber(recid);
}


function t825_showPopup(recid) {
  var el = $('#rec' + recid);
  var popup = el.find('.t825__popup');

  el.find('.t825__btn_wrapper').removeClass('t825__btn_animate');
  el.find('.t825__btn-text').css('display','none');
  if ($(window).width() < 960) { $('body').addClass('t825__body_popupshowed'); }

  popup.css('display', 'block');
  setTimeout(function() {
    popup.addClass('t825__popup_show');
  }, 50);

  el.find('.t825__mobile-icon-close').click(function(e) { t825_closePopup(el); });

  $(document).keydown(function(e) {
    if (e.keyCode == 27) { t825_closePopup(el); }
  });

  if(window.lazy == 'y'){t_lazyload_update();}
}

function t825_closePopup(rec) {
  if ($(window).width() < 960) { $('body').removeClass('t825__body_popupshowed'); }
  rec.find('.t825').removeClass('t825_active');
  rec.find('.t825__btn').removeClass('t825__btn_active');
  rec.find('.t825__popup').removeClass('t825__popup_show');
  setTimeout(function() {
    rec.find('.t825__popup').not('.t825__popup_show').css('display', 'none');
  }, 300);
}


function t825_checkPhoneNumber(recid) {
  var el = $('#rec' + recid);
  var whatsapp = el.find('.t825__whatsapp').attr('href');
  var telegram = el.find('.t825__telegram').attr('href');
  var telegramLink = el.find('.t825__telegram_link').attr('href');
  var vk = el.find('.t825__vk').attr('href');
  var skype = el.find('.t825__skype').attr('href');
  var skypeChat = el.find('.t825__skype_chat').attr('href');
  var mail = el.find('.t825__mail').attr('href');
  var viber = el.find('.t825__viber').attr('href');
  var fb = el.find('.t825__fb').attr('href');
  var phone = el.find('.t825__phone').attr('href');
  
  if (typeof telegramLink != 'undefined') {
      if (telegramLink.search(/http/i) !== -1) {
          el.find('.t825__telegram_link').attr('href', telegramLink);
      } else {
          if (telegramLink.search(/tg/i) !== -1) {
            el.find('.t825__telegram_link').attr('href', telegramLink);  
          } else {
            el.find('.t825__telegram_link').attr('href', 'https://'+telegramLink);
          }
      }
  }

  if (typeof whatsapp != 'undefined') {
    el.find('.t825__whatsapp').attr('href', 'https://api.whatsapp.com/send?phone='+whatsapp.replace(/[+?^${}()|[\]\\\s]/g,''));
  }

  el.find('.t825__telegram').attr('href', 'https://t.me/'+telegram);
  el.find('.t825__vk').attr('href', 'https://vk.me/'+vk);

  if (typeof skype != 'undefined') {
    el.find('.t825__skype').attr('href', 'skype:'+skype.replace(/[+?^${}()|[\]\\\s]/g,'')+'?call');
  }

  if (typeof skypeChat != 'undefined') {
    el.find('.t825__skype_chat').attr('href', 'skype:'+skypeChat.replace(/[+?^${}()|[\]\\\s]/g,'')+'?chat');
  }

  if (typeof viber != 'undefined') {
    el.find('.t825__viber').attr('href', 'viber://chat?number=%2B'+viber.replace(/[+?^${}()|[\]\\\s]/g,''));
  }

  el.find('.t825__mail').attr('href', 'mailto:'+mail);

  el.find('.t825__fb').attr('href', 'https://m.me/'+fb);

  if (typeof phone != 'undefined') {
    el.find('.t825__phone').attr('href', 'tel:+'+phone.replace(/[+?^${}()|[\]\\\s]/g,''));
  }
}

function t825_sendPopupEventToStatistics(popupname) {
  var virtPage = '/tilda/popup/';
  var virtTitle = 'Popup: ';
  if (popupname.substring(0,7) == '#popup:') {
    popupname = popupname.substring(7);
  }

  virtPage += popupname;
  virtTitle += popupname;
  if (window.Tilda && typeof Tilda.sendEventToStatistics == 'function') {
    Tilda.sendEventToStatistics(virtPage, virtTitle, '', 0);
  } else {
    if(ga) {
      if (window.mainTracker != 'tilda') {
        ga('send', {'hitType':'pageview', 'page':virtPage,'title':virtTitle});
      }
    }
    if (window.mainMetrika > '' && window[window.mainMetrika]) {
      window[window.mainMetrika].hit(virtPage, {title: virtTitle,referer: window.location.href});
    }
  }
}
 
function t826_init(recid) {
    t826_startAnimation(recid);

    var t826__smartResize;

    window.addEventListener("resize", function () {
        if (!$isMobile) {
            clearTimeout(t826__smartResize);
            t826__smartResize = setTimeout(function () {
                $("div:not(.t826__animation) > div[data-galaxy-id=" + recid + "]").remove();
                t826_startAnimation(recid);
            }, 500);
        }
    }, !1);

    window.addEventListener("orientationchange", function () {
        if ($isMobile) {
            clearTimeout(t826__smartResize);
            t826__smartResize = setTimeout(function () {
                $("div:not(.t826__animation) > div[data-galaxy-id=" + recid + "]").remove();
                t826_startAnimation(recid);
            }, 500);
        }
    }, !1);
    
    $('.t826').bind('displayChanged', function() {
        $("div:not(.t826__animation) > div[data-galaxy-id=" + recid + "]").remove();
        t826_startAnimation(recid);
    });
}

function t826_startAnimation(recid) {
    var el = $("#rec" + recid);
    var GalaxyEl = el.find(".t826__galaxy");
    var wr = el.find(".t826");
    var recs = wr.attr("data-galaxy-rec-ids");
    var wholepage = wr.attr("data-galaxy-whole-page");
    var vertFlip = wr.attr("data-galaxy-vflip");
    var color = wr.attr("data-element-color");
    var opacity = wr.attr("data-element-opacity");
    var options = {
        'color': (color === "" ? "255, 255, 255" : color),
        'opacity': (opacity === "" ? 1 : opacity)
    };

    if (vertFlip === "yes") {
        GalaxyEl.addClass("t826__galaxy_flip");
    }

    if ($("#allrecords").attr("data-tilda-mode") === "edit") {
        t826_addAnimation(el.find(".t826__demo"), GalaxyEl, options);
        return;
    }

    if (typeof recs !== "undefined") {
        recs = recs.split(",");
        /* append to certain blocks */
        recs.forEach(function (rec, index, array) {
            var curRec = $("#rec" + rec);
            var curGalaxyEl = GalaxyEl.clone().css("position", "absolute");
            t826_addAnimation(curRec, curGalaxyEl, options);
        });
    } else {
        var nextBlock = el.next(":has(.t-cover)");
        var prevBlock = el.prev(":has(.t-cover)");
        var curGalaxyEl = GalaxyEl.clone().css("position", "absolute");
        if (nextBlock.length !== 0) {
            t826_addAnimation(nextBlock, curGalaxyEl, options);
        } else if (prevBlock.length !== 0) {
            t826_addAnimation(prevBlock, curGalaxyEl, options);
        }
    }

    if (wholepage === "yes") {
        el.find(".t826__animation").css("display", "block");
        t826_addAnimation($("#allrecords"), GalaxyEl.css("position", "fixed"), options);
    }
}

function t826_addAnimation(curRec, GalaxyEl, options) {
    curRec.attr("data-animationappear", "off").removeClass('r_hidden');

    var curRecType = curRec.attr("data-record-type");
    var curRecId = curRec.attr("id");

    if (curRecType === "396") {
        /*if zero block*/
        curRec.find(".t396__filter").after(GalaxyEl);
        GalaxyEl.css("z-index", "0");
    } else if (curRecId === "allrecords") {
        GalaxyEl.css("z-index", "-1");
    } else {
        var coverWrapper = curRec.find(".t-cover");
        if (coverWrapper.length > 0) {
            /*if cover*/
            coverWrapper.find(".t-cover__filter").after(GalaxyEl);
            GalaxyEl.css("z-index", "0");
        } else {
            /*if any block*/
            var wrapper = curRec;
            if (wrapper.length == 0) {
                return true;
            }
            wrapper.append(GalaxyEl);
            wrapper.css("position", "relative");
            wrapper.children("div").first().css({
                "position": "relative",
                "z-index": "1"
            });
            if (curRecType == "734" || curRecType == "675") {
                return;
            }
            GalaxyEl.css("z-index", "0");
        }
    }

    t826_runningAnimation(curRec, options);
}

function t826_runningAnimation(curRec, options) {
    var starsSetting = [{
        name: "near",
        count: 100,
        speed: 50
    }, {
        name: "mid",
        count: 200,
        speed: 100
    }, {
        name: "far",
        count: 700,
        speed: 150
    }];

    var curRecId = curRec.attr("id");
    var maxHeight = curRec.outerHeight();
    var maxWidth = curRec.outerWidth();

    if (typeof curRecId === "undefined") {
        curRecId = "demo";
    } else if (curRecId === "allrecords") {
        maxHeight = $(window).height();
        maxWidth = $(window).width();
    }

    var animationName = "t826__galaxy-" + curRecId;
    curRec.find("#" + animationName).remove();

    var newStyle = document.createElement("style");
    newStyle.type = "text/css";
    newStyle.id = animationName;
    newStyle.innerHTML = "@keyframes " + animationName + " {" +
        "to {" +
        "transform: translateY(" + (-maxHeight) + "px);" +
        "}" +
        "}";

    if (options.color === "#ffffff") options.color = "#fff";

    starsSetting.forEach(function (value, index, array) {
        var x = Math.round(Math.random() * maxHeight);
        var y = Math.round(Math.random() * maxWidth);
        var dot = "";

        if (options.opacity < 1) {
            dot = x + "px " + y + "px rgba(" + options.color + "," + options.opacity + ")";
        } else {
            dot = x + "px " + y + "px rgb(" + options.color + ")";
        }

        var countDots = Math.round(array[index].count * maxHeight / 2000);

        for (var i = 0; i < countDots; i++) {
            var x = Math.round(Math.random() * maxWidth);
            var y = Math.round(Math.random() * maxHeight);

            if (options.opacity < 1) {
                dot += ", " + x + "px " + y + "px rgba(" + options.color + "," + options.opacity + ")";
                dot += ", " + x + "px " + (y + maxHeight) + "px rgba(" + options.color + "," + options.opacity + ")";
            } else {
                dot += ", " + x + "px " + y + "px rgb(" + options.color + ")";
                dot += ", " + x + "px " + (y + maxHeight) + "px rgb(" + options.color + ")";
            }
        }

        var animationDuration = Math.round(array[index].speed * maxHeight / 2000);
        className = "t826__galaxy-" + array[index].name + "-" + curRecId;

        newStyle.innerHTML += "." + className + ":after, ." + className + " {" +
            "box-shadow: " + dot + ";" +
            "animation-duration: " + animationDuration + "s;" +
            "animation-name: " + animationName +
            "} ." + className + ":after {" +
            "content: ' ';" +
            "position: absolute;" +
            "top: " + maxHeight + "px" +
            "}";

        curRec.find(".t826__galaxy > .t826__galaxy-wrapper > .t826__galaxy-" + array[index].name).addClass(className);
    });

    curRec.prepend(newStyle);

    curRec.find(".t826__galaxy > .t826__galaxy-wrapper").css("animation-name", "t826__galaxy-fadeIn");
}
 
function t827_init(recid) {
  var rec = $('#rec'+recid);
  var grid = rec.find('.t827__grid');
  var sizer = rec.find('.t827__grid-sizer');
  var item = rec.find('.t827__grid-item');
  var images = rec.find('.t827__grid img');
  var overlay = rec.find('.t827__overlay');
  var startContainerWidth = rec.find('.t827__grid-sizer').width();
  
  t827_reverse(grid, item);

  images.load(function() {
    t827_initMasonry(rec, recid, grid);
    setTimeout(function(){t827_showOverlay(overlay, item);}, 500);
  });

  if (overlay.hasClass('t827__overlay_preview')) {
    setTimeout(function(){
      t827_showOverlay(overlay, item);
    }, 1000);
  }

  t827_initMasonry(rec, recid, grid);

  $(window).bind('resize', function() {
    if (typeof window.noAdaptive!="undefined" && window.noAdaptive==true && $isMobile){return;}
    t827_calcColumnWidth(rec, startContainerWidth, grid, sizer, item);
  });

  $('.t827').bind('displayChanged', function() {
    t827_initMasonry(rec, recid, grid);
    t827_calcColumnWidth(rec, startContainerWidth, grid, sizer, item);
  });

  t827_calcColumnWidth(rec, startContainerWidth, grid, sizer, item);
}


function t827_reverse(grid, item) {
  if (grid.hasClass('t827__grid_reverse')) {
    grid.append(function() {
      return $(this).children().get().reverse();
    });
  }
}


function t827_initMasonry(rec, recid, grid) {
  var $grid = grid;
  var gutterSizerWidth = rec.find('.t827__gutter-sizer').width();
  var gutterElement = rec.find('.t827__gutter-sizer').width() == 40 ? 39 : '#rec' + recid + ' .t827__gutter-sizer';
  $grid.imagesLoaded(function(){
    $grid.masonry({
      itemSelector: '#rec' + recid + ' .t827__grid-item',
      columnWidth: '#rec' + recid + ' .t827__grid-sizer',
      gutter: gutterElement,
      isFitWidth: true
    });
  });
}

function t827_showOverlay(overlay, item) {

  if ($(window).width() >= 1024) {
    overlay.css('display', 'block');
  } else {
    item.click(function() {
      if ($(this).find('.t827__overlay').css('opacity') == '0') {
        overlay.css('opacity', '0');
        $(this).find('.t827__overlay').css('opacity', '1');
      } else {
        $(this).find('.t827__overlay').css('opacity', '0');
      }
    });
  }
}

function t827_calcColumnWidth(rec, startcontainerwidth, grid, sizer, item) {
  var containerWidth = rec.find('.t827__container').width();
  var sizerWidth = rec.find('.t827__grid-sizer').width();
  var itemWidth = rec.find('.t827__grid-item').width();
  var gutterSizerWidth = rec.find('.t827__gutter-sizer').width() == 40 ? 39 : rec.find('.t827__gutter-sizer').width();
  var columnAmount = Math.round(containerWidth / startcontainerwidth);
  var newSizerWidth = ((containerWidth - gutterSizerWidth * (columnAmount - 1)) / columnAmount);

  if (containerWidth > itemWidth) {
    sizer.css('width', newSizerWidth);
    item.css('width', newSizerWidth);
  } else {
    grid.css('width', '100%');
    sizer.css('width', '100%');
    item.css('width', '100%');
  }
}
 
function t829_init(recid) {
  var rec = $('#rec'+recid);
  var grid = rec.find('.t829__grid');
  var sizer = rec.find('.t829__grid-sizer');
  var item = rec.find('.t829__grid-item');
  var images = rec.find('.t829__grid img');
  var startContainerWidth = rec.find('.t829__grid-sizer').width();

  images.load(function() {
    if (!(grid.hasClass('t829__container_mobile-flex') && $(window).width() < 768)) {
      t829_initMasonry(rec, recid, grid);
    }
  });

  if (!(grid.hasClass('t829__container_mobile-flex') && $(window).width() < 768)) {
    t829_initMasonry(rec, recid, grid);
    t829_calcColumnWidth(rec, startContainerWidth, grid, sizer, item);
  }

  grid.bind('touchmove scroll', function() {
    if (typeof $('.t-records').attr('data-tilda-mode') == 'undefined') {
      if(window.lazy == 'y'){t_lazyload_update();}
    }
  })

  $(window).bind('resize', function() {
    if (typeof window.noAdaptive!="undefined" && window.noAdaptive==true && $isMobile){return;}
    if (!(grid.hasClass('t829__container_mobile-flex') && $(window).width() < 768)) {
      t829_calcColumnWidth(rec, startContainerWidth, grid, sizer, item);
    }
  });

  $('.t829').bind('displayChanged', function() {
    if (grid.hasClass('t829__container_mobile-flex')) {
      if ($(window).width() >= 768) {
        t829_initMasonry(rec, recid, grid);
      }
    } else {
      t829_initMasonry(rec, recid, grid);
    }
    if (!(grid.hasClass('t829__container_mobile-flex') && $(window).width() < 768)) {
      t829_calcColumnWidth(rec, startContainerWidth, grid, sizer, item);
    }
  });

}

function t829_initMasonry(rec, recid, grid) {
  var $grid = grid;
  var gutterSizerWidth = rec.find('.t829__gutter-sizer').width();
  var gutterElement = rec.find('.t829__gutter-sizer').width() == 40 ? 39 : '#rec' + recid + ' .t829__gutter-sizer';
  $grid.imagesLoaded(function(){
    $grid.masonry({
      itemSelector: '#rec' + recid + ' .t829__grid-item',
      columnWidth: '#rec' + recid + ' .t829__grid-sizer',
      gutter: gutterElement,
      isFitWidth: true
    });
  });
}

function t829_calcColumnWidth(rec, startcontainerwidth, grid, sizer, item) {
  var containerWidth = rec.find('.t829__container').width();
  var sizerWidth = rec.find('.t829__grid-sizer').width();
  var itemWidth = rec.find('.t829__grid-item').width();
  var gutterSizerWidth = rec.find('.t829__gutter-sizer').width() == 40 ? 39 : rec.find('.t829__gutter-sizer').width();
  var columnAmount = Math.round(containerWidth / startcontainerwidth);
  var newSizerWidth = ((containerWidth - gutterSizerWidth * (columnAmount - 1)) / columnAmount);

  if (containerWidth > itemWidth) {
    sizer.css('width', newSizerWidth);
    item.css('width', newSizerWidth);
  } else {
    grid.css('width', '100%');
    sizer.css('width', '100%');
    item.css('width', '100%');
  }
}
 
function t830_init(recid){
  var rec = $('#rec' + recid);
  var allrecords = $("#allrecords");
  var el = rec.find('.t830');
  var panel = rec.find('.t830__panel');
  var overlay = rec.find('.t830m__overlay');
  var menu = rec.find('.t830m');
  var submenu = rec.find('.t830m__submenu');
  var burger = rec.find('.t830__side .t830__burger');
  var menuItem = rec.find('.t830m__list-title a');
  var submenuItem = rec.find('.t830m__submenu-item a');

  if ($(window).width() > 1259) {
    $('.t-body').prepend(rec);
    allrecords.addClass('t830__allrecords');
    $('.t-tildalabel').addClass('t830__t-tildalabel');
  }

  t830_initMenu(rec, menu, burger);
  t830_removePadding(rec, allrecords);
  t830_calcCol(rec, menu, allrecords);
  t830_menuHighlight();
  t830_submenuHighlight();
  t830_openSubmenu(rec);
  t830_hoverShowMenu(rec, menu, panel, overlay, burger);

  $(window).resize(function() {
    t830_calcCol(rec, menu, allrecords);
    t830_removePadding(rec, allrecords);

    if (menu.hasClass('t830m_close') && $(window).width() > 1499) {
      overlay.removeClass('t830m__menu_show');
    }
  });

  if (submenu.hasClass('t830m__submenu_close')) {
    t830_toggleMenu(rec, submenu);
  }

  if ($(window).width() > 1259) {
    t830_scrollSideMenu(rec);
  }

  menuItem.click(function() {
    if (window.location.hash.length != 0) {
      menuItem.removeClass('t-active');
      $(this).addClass('t-active');
    }
  });

  submenuItem.click(function() {
    if (window.location.hash.length != 0) {
      submenuItem.removeClass('t-active');
      $(this).addClass('t-active');
    }
  });

  t830_checkAnchorLinks(recid);

}


function t830_calcCol(rec, menu, allrecords) {
  if ($(window).width() > 1259 && !menu.hasClass('t830m_open')) {
    allrecords.addClass('t830__allrecords_padd');
    $('.t-tildalabel').addClass('t830__t-tildalabel_padd');
  }

  if ($(window).width() > 1259 && menu.hasClass('t830m_open')) {
    allrecords.addClass('t830__allrecords_padd-small');
    $('.t-tildalabel').addClass('t830__t-tildalabel_padd-small');
  }
}


function t830_toggleMenu(rec, submenu) {
  var listTitle = rec.find('.t830m__list-title_toggle');
  var submenu;
  var textTitle;

  listTitle.click(function() {
    submenu = $(this).next();
    textTitle = $(this).find('.t830m__list-title-text');
    submenu.slideToggle('slow');

    textTitle.toggleClass('t830m__list-title-text_opacity');
    textTitle.toggleClass('t-menu__link-item');
  });
}


function t830_openSubmenu(rec) {
  var submenuItem = rec.find('.t830m__submenu-item a.t-active');
  submenuItem.parents('.t830m__submenu').css('display', 'block');
}


function t830_hoverShowMenu(rec, menu, panel, overlay, burger) {
  if ($(window).width() > 1259 && panel.hasClass('t830__panel_hover')) {
    panel.mouseenter(function(e) {
      menu.addClass('t830m__menu_show');
      burger.addClass('t830__burger_open');
      overlay.addClass('t830m__overlay_hover');
    });

    menu.mouseleave(function() {
      menu.removeClass('t830m__menu_show');
      burger.removeClass('t830__burger_open');
    });

    overlay.mouseenter(function() {
      menu.removeClass('t830m__menu_show');
      burger.removeClass('t830__burger_open');
      overlay.removeClass('t830m__overlay_hover');
    })

    menu.find('a').on('click', function() {
      menu.removeClass('t830m__menu_show');
      burger.removeClass('t830__burger_open');
    });

    burger.click(function() {
      if (burger.hasClass('t830__burger_open')) {
        t830_closeMenu(rec, menu);
        burger.removeClass('t830__burger_open');
      } else {
        menu.addClass('t830m__menu_show');
        burger.addClass('t830__burger_open');
        overlay.addClass('t830m__overlay_hover');
      }
    });
  }
}


function t830_showMenu(rec, menu, burger) {
  var panel = rec.find('.t830__panel');

  $('body').addClass('t830__body_menushowed');
  rec.find('.t830m').addClass('t830m__menu_show');
  rec.find('.t830m__overlay').addClass('t830m__menu_show');

  rec.find('.t830m__overlay, .t830m__close, a[href*=#]').click(function(){
    if ($(this).is('.tooltipstered, .t794__tm-link')) { return; }
    t830_closeMenu(rec, menu);
    burger.removeClass('t830__burger_open');
  });

  panel.addClass('t830__panel_close');

  $(document).keydown(function(e) {
    if (e.keyCode == 27) {
      if ($('.t-site-search-popup__background').length === 0) {
        $('body').removeClass('t830__body_menushowed');
        $('.t830m').removeClass('t830m__menu_show');
        burger.removeClass('t830__burger_open');
        $('.t830m__overlay').removeClass('t830m__menu_show');
      }
    }
  });
}


function t830_closeMenu(rec, menu) {
  var panel = rec.find('.t830__panel');

  if (menu.hasClass('t830m_open') && $(window).width() < 1500) {
    panel.removeClass('t830__panel_close');
  }

  $('body').removeClass('t830__body_menushowed');
  $('.t830m').removeClass('t830m__menu_show');
  $('.t830m__overlay').removeClass('t830m__menu_show');
}


function t830_initMenu(rec, menu, burger) {
  var obj = rec.find('.t830__menu__content');
  var panel = rec.find('.t830__panel');
  var menu = rec.find('.t830m');

  if (panel.hasClass('t830__panel_click') || (panel.hasClass('t830__panel_hover') && $(window).width() <= 1259)) {
    obj.click(function(e) {
      if (menu.hasClass('t830m__menu_show')) {
        burger.removeClass('t830__burger_open');
        t830_closeMenu(rec, menu);
      } else {
        burger.addClass('t830__burger_open');
        t830_showMenu(rec, menu, burger);
      }

      e.preventDefault();
    });
  }

  $('.t830').bind('clickedAnchorInTooltipMenu',function(){
    t830_closeMenu(rec, menu);
  });
}


function t830_menuHighlight() {
  var url = window.location.href;
  var pathname = window.location.pathname;
  if (url.substr(url.length - 1) == '/') { url = url.slice(0,-1); }
  if (pathname.substr(pathname.length - 1) == "/") { pathname = pathname.slice(0,-1); }
  if (pathname.charAt(0) == '/') { pathname = pathname.slice(1); }
  if (pathname == '') { pathname = '/'; }
  $(".t830m__list-title a[href='" + url + "']").addClass('t-active');
  $(".t830m__list-title a[href='" + url + "/']").addClass('t-active');
  $(".t830m__list-title a[href='" + pathname + "']").addClass('t-active');
  $(".t830m__list-title a[href='/" + pathname + "']").addClass('t-active');
  $(".t830m__list-title a[href='" + pathname + "/']").addClass('t-active');
  $(".t830m__list-title a[href='/" + pathname + "/']").addClass('t-active');
}


function t830_submenuHighlight() {
  var url = window.location.href;
  var pathname = window.location.pathname;
  if (url.substr(url.length - 1) == '/') { url = url.slice(0,-1); }
  if (pathname.substr(pathname.length - 1) == '/') { pathname = pathname.slice(0,-1); }
  if (pathname.charAt(0) == '/') { pathname = pathname.slice(1); }
  if (pathname == '') { pathname = "/"; }
  $(".t830m__submenu-item a[href='" + url + "']").addClass('t-active');
  $(".t830m__submenu-item a[href='" + url + "/']").addClass('t-active');
  $(".t830m__submenu-item a[href='" + pathname + "']").addClass('t-active');
  $(".t830m__submenu-item a[href='/" + pathname + "']").addClass('t-active');
  $(".t830m__submenu-item a[href='" + pathname + "/']").addClass('t-active');
  $(".t830m__submenu-item a[href='/" + pathname + "/']").addClass('t-active');
}


function t830_scrollSideMenu(rec) {
  var container = rec.find('.t830m__container');

  container.on('scroll wheel DOMMouseScroll mousewheel', function(e) {
    var searchResultContainer = rec.find('.t-site-search-dm');

    if (searchResultContainer.length == 0 ) {
      t830_stopScroll(this, e);
    }
  });
}


function t830_stopScroll(block, eventScroll) {
  var $this = $(block);
  var scrollTop = block.scrollTop;
  var scrollHeight = block.scrollHeight;
  var height = $this.height();
  var delta = (eventScroll.type == 'DOMMouseScroll' ? eventScroll.originalEvent.detail * -40 : eventScroll.originalEvent.wheelDelta);
  var up = delta > 0;

  var prevent = function() {
    eventScroll.stopPropagation();
    eventScroll.preventDefault();
    eventScroll.returnValue = false;
    return false;
  }
  if (!up && -delta > scrollHeight - height - scrollTop) {
    $this.scrollTop(scrollHeight);
    return prevent();
  } else if (up && delta > scrollTop) {
    $this.scrollTop(0);
    return prevent();
  }
}


function t830_removePadding(rec, allrecords) {
  if (rec.css('display') == 'none') {
    allrecords.css('padding-left', 0);
    $('.t-tildalabel').css('padding-left', 0);
  }
}


function t830_checkAnchorLinks(recid) {
  if ($(window).width() >= 960) {
    var submenuNavLinks = $("#rec" + recid + " .t830m__submenu-item a:not(.tooltipstered)[href*='#']");
    var menuNavLinks = $("#rec" + recid + " .t830m__menu-item a:not(.tooltipstered)[href*='#']");

    if (submenuNavLinks.length > 0) {
      setTimeout(function() {
        t830_catchScroll(submenuNavLinks, recid);
      }, 500);
    }

    if (menuNavLinks.length > 0) {
      setTimeout(function() {
        t830_catchScroll(menuNavLinks, recid);
      }, 500);
    }
  }
}


function t830_catchScroll(navLinks, recid) {
  var rec = $('#rec' + recid);
  var clickedSectionId = null;
  var sections = new Array();
  var sectionIdTonavigationLink = [];
  var interval = 100;
  var lastCall;
  var timeoutId;
  var navLinks = $(navLinks.get().reverse());

  navLinks.each(function() {
    var cursection = t830_getSectionByHref($(this));
    if (typeof cursection.attr('id') != 'undefined') {
      sections.push(cursection);
    }
    sectionIdTonavigationLink[cursection.attr('id')] = $(this);
  });
  t830_updateSectionsOffsets(sections);

  sections.sort(function(a, b) {
    return b.attr('data-offset-top') - a.attr('data-offset-top');
  });

  $(window).bind('resize', t_throttle(function() {t830_updateSectionsOffsets(sections);}, 200));
  $('.t830').bind('displayChanged',function() {t830_updateSectionsOffsets(sections);});
  setInterval(function() {t830_updateSectionsOffsets(sections);}, 5000);
  t830_highlightNavLinks(navLinks, sections, sectionIdTonavigationLink, clickedSectionId);

  navLinks.click(function() {
    var clickedSection = t830_getSectionByHref($(this));
    if (!$(this).hasClass('tooltipstered') && typeof clickedSection.attr('id') != 'undefined') {
      navLinks.removeClass('t-active');
      $(this).addClass('t-active');
      clickedSectionId = t830_getSectionByHref($(this)).attr("id");
    }
  });

  $(window).scroll(function() {
    var now = new Date().getTime();
    if (lastCall && now < (lastCall + interval)) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(function() {
        lastCall = now;
        clickedSectionId = t830_highlightNavLinks(navLinks, sections, sectionIdTonavigationLink, clickedSectionId);
      }, interval - (now - lastCall));
    } else {
      lastCall = now;
      clickedSectionId = t830_highlightNavLinks(navLinks, sections, sectionIdTonavigationLink, clickedSectionId);
    }
  });
}


function t830_getSectionByHref(curlink) {
  var curLinkValue = curlink.attr('href').replace(/\s+/g, '');
  if (curLinkValue[0]=='/') { curLinkValue = curLinkValue.substring(1); }
  if (curlink.is('[href*="#rec"]')) {
    return $(".r[id='" + curLinkValue.substring(1) + "']");
  } else {
    return $(".r[data-record-type='215']").has("a[name='" + curLinkValue.substring(1) + "']");
  }
}


function t830_highlightNavLinks(navLinks, sections, sectionIdTonavigationLink, clickedSectionId) {
  var scrollPosition = $(window).scrollTop();
  var valueToReturn = clickedSectionId;
  if (sections.length != 0 && clickedSectionId == null && sections[sections.length-1].attr('data-offset-top') > (scrollPosition + 300)){
    navLinks.removeClass('t-active');
    return null;
  }

  $(sections).each(function(e) {
    var curSection = $(this);
    var sectionTop = curSection.attr('data-offset-top');
    var id = curSection.attr('id');
    var navLink = sectionIdTonavigationLink[id];

    if (((scrollPosition + 300) >= sectionTop) || (sections[0].attr("id") == id && scrollPosition >= $(document).height() - $(window).height())) {
      if (clickedSectionId == null && !navLink.hasClass('t-active')) {
        navLinks.removeClass('t-active');
        navLink.addClass('t-active');
        valueToReturn = null;
      } else {
        if (clickedSectionId != null && id == clickedSectionId) {
          valueToReturn = null;
        }
      }
      return false;
    }
  });

  return valueToReturn;
}


function t830_updateSectionsOffsets(sections) {
  $(sections).each(function() {
    var curSection = $(this);
    curSection.attr('data-offset-top', curSection.offset().top);
  });
}
 
function t833_init(recid) {
  t833_startAnimation(recid);
}


function t833_showOnCertainWidth(el, wrapper) {
    el.attr('class').split(' ').forEach(function(item) {
        if (item.indexOf('t-screen') !== -1) {
            wrapper.addClass(item);
        }
    });
}


function t833_startAnimation(recid) {
    var el = $('#rec' + recid);
    var wrapper = el.find('.t833__sliderwrapper');
    var wr = el.find('.t833');
    var recs = wr.attr('data-coverslider-rec-ids');
    
    t833_showOnCertainWidth(el, wrapper);
    
    if ($('#allrecords').attr('data-tilda-mode') === 'edit') {
        t833_addAnimation(el.find('.t833__demo'), wrapper);
        return;
    }

    if (typeof recs !== 'undefined') {
        recs = recs.split(',');
        /* append to certain blocks */
        recs.forEach(function (rec, index, array) {
            var curRec = $('#rec' + rec);
            var curWrapper = wrapper.clone().css('position', 'absolute');
            t833_addAnimation(curRec, curWrapper);
        });
    } else {
        var nextBlock = el.next(':has(.t-cover)');
        var prevBlock = el.prev(':has(.t-cover)');
        var curWrapper = wrapper.clone().css('position', 'absolute');
        if (nextBlock.length !== 0) {
            t833_addAnimation(nextBlock, curWrapper);
        } else if (prevBlock.length !== 0) {
            t833_addAnimation(prevBlock, curWrapper);
        }
    }
}

function t833_addAnimation(curRec, wrapper) {
    curRec.attr('data-animationappear', 'off').removeClass('r_hidden');

    var curRecType = curRec.attr('data-record-type');
    var curRecId = curRec.attr('id');

    if (curRecType === '396') {
        /*if zero block*/
        curRec.find('.t396__filter').after(wrapper);
        wrapper.css('z-index', '0');
    }

    var coverWrapper = curRec.find('.t-cover');
    if (coverWrapper.length > 0) {
        /*if cover*/
        coverWrapper.find('.t-cover__filter').after(wrapper);
        wrapper.css('z-index', '0');
    }

    if (curRec.length != 0) {
      $(window).load(function() {
        t833_changeSlide(curRec);
      });
    }

    var slider = curRec.find('.t833__slider');
    var slide = curRec.find('.t833__slide');
    var numberOfSlides = slide.length;

    if (numberOfSlides === 3 || numberOfSlides === 2) {
      slide.clone().appendTo(slider);
    }
}

function t833_changeSlide(curRec) {
  var slide = curRec.find('.t833__slide');
  var firstSlide = curRec.find('.t833__slide:first-child');
  var numberOfSlides = slide.length;
  var i = 1;

  firstSlide.addClass('t833__slide_fx1');

  window.setInterval(t833_kenBurns, 5000);

  function t833_kenBurns() {

    if (i == numberOfSlides) {
      i = 0;
    }

    $(slide[i]).addClass('t833__slide_fx');

    if (i === 0) {
      $(slide[numberOfSlides-2]).removeClass('t833__slide_fx t833__slide_fx1');
    }

    if (i === 1) {
      $(slide[numberOfSlides-1]).removeClass('t833__slide_fx t833__slide_fx1');
      slide.removeClass('t833__slide_opacity');
    }

    if (i > 1) {
      $(slide[i-2]).removeClass('t833__slide_fx t833__slide_fx1');
    }

    i++;
  }
}
 
function t835_init(recid){
  var rec = $('#rec' + recid);
  var quiz = rec.find('.t835__quiz');
  var quizWrapper = rec.find('.t835__quiz-wrapper');
  var quizFormWrapper = rec.find('.t835__quiz-form-wrapper');
  var form = rec.find('.t835 .t-form');
  var quizQuestion = rec.find('.t835 .t-input-group');
  var prevBtn = rec.find('.t835__btn_prev');
  var nextBtn = rec.find('.t835__btn_next');
  var resultBtn = rec.find('.t835__btn_result');
  var errorBoxMiddle = rec.find('.t-form__errorbox-middle .t-form__errorbox-wrapper');
  var submitBtnWrapper = rec.find('.t835 .t-form__submit');
  var btnSubmit = rec.find('.t835 .t-submit');
  var captureFormHTML = '<div class="t835__capture-form"></div>';
  rec.find('.t835 .t-form__errorbox-middle').before(captureFormHTML);
  var quizDescriptionHeight = rec.find('.t835__quiz-description-wrapper').outerHeight(true);
  var resultTitleHeight = rec.find('.t835__result-title').outerHeight(true);
  var quizQuestionNumber = 0;
  form.removeClass('js-form-proccess');

  quizQuestion.each(function(i) {
    $(quizQuestion[i]).attr('data-question-number', i);
  });

  t835_wrapCaptureForm(rec);
  var captureForm = rec.find('.t835__capture-form');

  t835_showCounter(rec, quizQuestionNumber);
  t835_disabledPrevBtn(rec, quizQuestionNumber);
  t835_checkLength(rec);

  prevBtn.click(function(e) {
    if (quizQuestionNumber > 0) {
      quizQuestionNumber--;
    }

    t835_setProgress(rec, -1);

    if (typeof $(".t-records").attr("data-tilda-mode")=="undefined") {
        if(window.lazy=='y'){t_lazyload_update();}
    }

    t835_awayFromResultScreen(rec);
    t835_showCounter(rec, quizQuestionNumber);
    t835_hideError(rec, quizQuestionNumber);
    t835_disabledPrevBtn(rec, quizQuestionNumber);
    t835_switchQuestion(rec, quizQuestionNumber);
    t835_scrollToTop(quizFormWrapper);

    e.preventDefault();
  });

  nextBtn.click(function(e) {
    if (quizWrapper.hasClass('t835__quiz-published')) {
      var showErrors = t835_setError(rec, quizQuestionNumber);
    }

    if (showErrors) {errorBoxMiddle.hide();}

    if (!showErrors) {
      quizQuestionNumber++;
      prevBtn.attr('disabled', false);
      t835_setProgress(rec, 1);
      t835_showCounter(rec, quizQuestionNumber);
      t835_switchQuestion(rec, quizQuestionNumber);
      t835_scrollToTop(quizFormWrapper);
    }

    if (typeof $(".t-records").attr("data-tilda-mode")=="undefined") {
        if(window.lazy=='y'){t_lazyload_update();}
    }

    e.preventDefault();
  });

  quizQuestion.keypress(function(e) {
    if (event.keyCode === 13 && !form.hasClass('js-form-proccess')) {
      if (quizWrapper.hasClass('t835__quiz-published')) {
        var showErrors = t835_setError(rec, quizQuestionNumber);
      }
      var questionArr = t835_createQuestionArr(rec);

      if (showErrors) {errorBoxMiddle.hide();}

      prevBtn.attr('disabled', false);
      if (!showErrors) {
        quizQuestionNumber++;
        t835_setProgress(rec, 1);

        if (quizQuestionNumber < questionArr.length) {
          t835_switchQuestion(rec, quizQuestionNumber);
        } else {
          t835_switchResultScreen(rec);
          form.addClass('js-form-proccess');
        }
        
        t835_scrollToTop(quizFormWrapper);
        t835_disabledPrevBtn(rec, quizQuestionNumber);
      }

      if (typeof $(".t-records").attr("data-tilda-mode")=="undefined") {
          if(window.lazy=='y'){t_lazyload_update();}
      }

      e.preventDefault();
    }
  });

  resultBtn.click(function(e) {

    if (quizWrapper.hasClass('t835__quiz-published')) {
      var showErrors = t835_setError(rec, quizQuestionNumber);
    }

    if (showErrors) {errorBoxMiddle.hide();}

    if (!showErrors) {
      quizQuestionNumber++;
      t835_setProgress(rec, 1);
      t835_switchResultScreen(rec);
      t835_scrollToTop(quizFormWrapper);
      form.addClass('js-form-proccess');
      t835_disabledPrevBtn(rec, quizQuestionNumber);
    }

    e.preventDefault();
  });
}


function t835_scrollToTop(quizFormWrapper) {
    var topCoordinateForm = quizFormWrapper.offset().top;
    $('html, body').animate({
      scrollTop: topCoordinateForm - 150
    }, 0);
}


function t835_checkLength(rec) {
  var nextBtn = rec.find('.t835__btn_next');
  var resultBtn = rec.find('.t835__btn_result');
  var questionArr = t835_createQuestionArr(rec);

  if (questionArr.length < 2) {
    nextBtn.hide();
    resultBtn.show();
  }
}


function t835_showCounter(rec, quizQuestionNumber) {
  var counter = rec.find('.t835__quiz-description-counter');
  var questionArr = t835_createQuestionArr(rec);
  counter.html(quizQuestionNumber + 1 + '/' + questionArr.length);
}


function t835_setError(rec, quizQuestionNumber) {
  var questionArr = t835_createQuestionArr(rec);
  var currentQuestion = $(questionArr[quizQuestionNumber]);
  var isFieldErrorBoxExist;
  var arErrors = window.tildaForm.validate(currentQuestion);
  var showErrors;

  currentQuestion.addClass('js-error-control-box');
  if (currentQuestion.find('.t-input-error').length > 0) {
    isFieldErrorBoxExist = 1;
  }

  var errorsTypeObj = arErrors[0];
  var arLang = window.tildaForm.arValidateErrors[window.tildaBrowserLang] || {};

  if (errorsTypeObj != undefined) {
    var errorType = errorsTypeObj.type[0];
    var sError = arLang[errorType];
    showErrors = errorType == 'emptyfill' ? false : window.tildaForm.showErrors(currentQuestion, arErrors);
    currentQuestion.find('.t-input-error').html(sError);
  }

  return showErrors;
}


function t835_hideError(rec, quizQuestionNumber) {
  var questionArr = t835_createQuestionArr(rec);
  var currentQuestion = $(questionArr[quizQuestionNumber]);
  currentQuestion.removeClass('js-error-control-box');
  currentQuestion.find('.t-input-error').html('');
}


function t835_setProgress(rec, index) {
  var progressbarWidth = rec.find('.t835__progressbar').width();
  var progress = rec.find('.t835__progress');
  var questionArr = t835_createQuestionArr(rec);
  var progressWidth = progress.width();
  var progressStep = progressbarWidth / (questionArr.length);
  var percentProgressWidth = (progressWidth + index * progressStep) / progressbarWidth * 100 + '%';

  progress.css('width', percentProgressWidth);
}


function t835_wrapCaptureForm(rec) {
  var captureForm = rec.find('.t835__capture-form');
  var quizQuestion = rec.find('.t835 .t-input-group');
  var quizFormWrapper = rec.find('.t835__quiz-form-wrapper');

  quizQuestion.each(function(i) {
    var currentQuizQuestion = $(quizQuestion[i]);
    var emailInputExist = $(currentQuizQuestion).hasClass('t-input-group_em');
    var nameInputExist = $(currentQuizQuestion).hasClass('t-input-group_nm');
    var phoneInputExist = $(currentQuizQuestion).hasClass('t-input-group_ph');
    var checkboxInputExist = $(currentQuizQuestion).hasClass('t-input-group_cb');
    var quizQuestionNumber = currentQuizQuestion.attr('data-question-number');
    var maxCountOfCaptureFields = quizFormWrapper.hasClass('t835__quiz-form-wrapper_withcheckbox') ? 4 : 3;

    if (quizQuestionNumber >= quizQuestion.length - maxCountOfCaptureFields) {

      if (quizFormWrapper.hasClass('t835__quiz-form-wrapper_withcheckbox')) {
        if (emailInputExist || nameInputExist || phoneInputExist || checkboxInputExist) {
          currentQuizQuestion.addClass('t835__t-input-group_capture');
          captureForm.append(currentQuizQuestion);
        }
      } else {
        if (emailInputExist || nameInputExist || phoneInputExist) {
          currentQuizQuestion.addClass('t835__t-input-group_capture');
          captureForm.append(currentQuizQuestion);
        }
      }
    }
  });
}


function t835_createQuestionArr(rec) {
  var quizQuestion = rec.find('.t835 .t-input-group');
  var questionArr = [];

  quizQuestion.each(function(i) {
    var question = $(quizQuestion[i]);
    if (!question.hasClass('t835__t-input-group_capture')) {
      questionArr.push(quizQuestion[i]);
    }
  });

  return questionArr;
}


function t835_disabledPrevBtn(rec, quizQuestionNumber) {
  var prevBtn = rec.find('.t835__btn_prev');
  quizQuestionNumber == 0 ? prevBtn.attr('disabled', true) : prevBtn.attr('disabled', false);
}


function t835_switchQuestion(rec, quizQuestionNumber) {
  var nextBtn = rec.find('.t835__btn_next');
  var resultBtn = rec.find('.t835__btn_result');
  var questionArr = t835_createQuestionArr(rec);

  $(questionArr).hide();
  $(questionArr[quizQuestionNumber]).show();

  if (quizQuestionNumber === questionArr.length - 1) {
    nextBtn.hide();
    resultBtn.show();
  } else {
    nextBtn.show();
    resultBtn.hide();
  }
}


function t835_switchResultScreen(rec) {
  var captureForm = rec.find('.t835__capture-form');
  var quizDescription = rec.find('.t835__quiz-description');
  var resultTitle = rec.find('.t835__result-title');
  var prevBtn = rec.find('.t835__btn_prev');
  var resultBtn = rec.find('.t835__btn_result');
  var submitBtnWrapper = rec.find('.t835 .t-form__submit');
  var questionArr = t835_createQuestionArr(rec);

  $(questionArr).hide();
  $(captureForm).show();

  resultBtn.hide();
  quizDescription.hide();
  resultTitle.show();

  submitBtnWrapper.show();
}


function t835_awayFromResultScreen(rec) {
  var captureForm = rec.find('.t835__capture-form');
  var quizDescription = rec.find('.t835__quiz-description');
  var resultTitle = rec.find('.t835__result-title');
  var submitBtnWrapper = rec.find('.t835 .t-form__submit');

  submitBtnWrapper.hide();
  $(captureForm).hide();
  quizDescription.show();
  resultTitle.hide();
}


function t835_onSuccess(form) {
  var inputsWrapper = form.find('.t-form__inputsbox');
  var inputsHeight = inputsWrapper.height();
  var inputsOffset = inputsWrapper.offset().top;
  var inputsBottom = inputsHeight + inputsOffset;
  var targetOffset = form.find('.t-form__successbox').offset().top;
  var prevBtn = form.parents('.t835').find('.t835__btn_prev');

  if ($(window).width() > 960) {
    var target = targetOffset - 200;
  } else {
    var target = targetOffset - 100;
  }

  if (targetOffset > $(window).scrollTop() || ($(document).height() - inputsBottom) < ($(window).height() - 100)) {
    inputsWrapper.addClass('t835__inputsbox_hidden');
    setTimeout(function() {
      if ($(window).height() > $('.t-body').height()) {$('.t-tildalabel').animate({ opacity:0 }, 50);}
    }, 300);
  } else {
    $('html, body').animate({ scrollTop: target}, 400);
    setTimeout(function() {inputsWrapper.addClass('t835__inputsbox_hidden');}, 400);
  }

  var successurl = form.data('success-url');
  if (successurl && successurl.length > 0) {
    setTimeout(function() {
      window.location.href = successurl;
    }, 500);
  }
  
  prevBtn.hide();
}
 
function t842_init(recid) {
  var rec = $('#rec' + recid);
  var container = rec.find('.t842');
  var doResize;

  t842_unifyHeights(rec);

  $(window).resize(function() {
    clearTimeout(doResize);
    doResize = setTimeout(function() {
      t842_unifyHeights(rec);
    }, 200);
  });

  $(window).load(function() {
    t842_unifyHeights(rec);
  });

  $('.t842').bind('displayChanged', function() {
    t842_unifyHeights(rec);
  });

  if (container.hasClass('t842__previewmode')) {
    setInterval(function() {
      t842_unifyHeights(rec);
    }, 5000);
  }
}


function t842_unifyHeights(rec) {
  if ($(window).width() >= 960) {
    rec.find('.t842 .t-container .t842__row').each(function() {
      var highestBox = 0;
      var row = $(this);
      $('.t842__inner-col', this).each(function() {
        var col = $(this);
        var wrap = col.find('.t842__wrap');
        var colHeight = wrap.outerHeight();
        if (colHeight > highestBox) {
          highestBox = colHeight;
        }
      });
      $('.t842__inner-col', this).css('height', highestBox);
      $('.t842__bgimg', this).css('height', highestBox);
    });
  } else {
    $('.t842__inner-col').css('height', 'auto');
    $('.t842__bgimg').css('height', 'auto');
  }
}
 
function t843_init(recid) {
  var rec = $('#rec' + recid);
  var container = rec.find('.t843');

  t843_setHeight(rec);

  $(window).bind('resize', t_throttle(function() {
    if (typeof window.noAdaptive!="undefined" && window.noAdaptive==true && $isMobile){return;}
    t843_setHeight(rec);
  }, 200));

  $('.t843').bind('displayChanged',function(){
    t843_setHeight(rec);
  });

  if (container.hasClass('t843__previewmode')) {
    setInterval(function() {
      t843_setHeight(rec);
    }, 5000);
  }
}

function t843_setHeight(rec) {
  var image = rec.find('.t843__blockimg');
  image.each(function() {
    var width = $(this).attr('data-image-width');
    var height = $(this).attr('data-image-height');
    var ratio = height / width;
    var padding = ratio * 100;
    $(this).css('padding-bottom', padding + '%');
  });

  if ($(window).width() > 960){
    var textwr = rec.find('.t843__textwrapper');
    var deskimg = rec.find('.t843__desktopimg');
    textwr.each(function() {
      $(this).css('height', deskimg.innerHeight());
    });
  }
}
 
function t849_init(recid) {
  var rec = $('#rec' + recid);
  var toggler = rec.find('.t849__header');

  toggler.click(function() {
    $(this).toggleClass('t849__opened');
    $(this).next().slideToggle();
    if(window.lazy == 'y') {t_lazyload_update();}
  });
}
 
function t850_init(recid) {
  var rec = $('#rec' + recid);
  var container = rec.find('.t850');
  var doResize;

  t850_unifyHeights(rec);

  $(window).resize(function() {
    clearTimeout(doResize);
    doResize = setTimeout(function() {
      t850_unifyHeights(rec);
    }, 200);
  });

  $(window).load(function() {
    t850_unifyHeights(rec);
  });

  $('.t850').bind('displayChanged', function() {
    t850_unifyHeights(rec);
  });

  if (container.hasClass('t850__previewmode')) {
    setInterval(function() {
      t850_unifyHeights(rec);
    }, 5000);
  }
}


function t850_unifyHeights(rec) {
  if ($(window).width() >= 960) {
  	rec.find('.t850 .t-container .t850__row').each(function() {
  		var highestBox = 0;
  		var currow = $(this);
  		$('.t850__inner-col', this).each(function() {
  			var curCol = $(this);
        var curText = curCol.find('.t850__wrap');
        var curColHeight = curText.outerHeight();
  			if (curColHeight > highestBox) {highestBox = curColHeight;}
  		});
  		$('.t850__inner-col', this).css('height', highestBox);
  	});
  } else {
  	$('.t850__inner-col').css('height', 'auto');
  }
}
 
function t851_init(recid) {
  var rec = $('#rec' + recid + ' .t851');
  var doResize;

  setTimeout(function() {
    t851_setHeight(rec);
  }, 500);

  $(window).resize(function() {
    clearTimeout(doResize);
    doResize = setTimeout(function() {
      t851_setHeight(rec);
    }, 200);
  });

  $('.t851').bind('displayChanged', function() {
    t851_setHeight(rec);
  });

  if (rec.hasClass('t851__previewmode')) {
    setInterval(function() {
      t851_setHeight(rec);
    }, 5000);
  }
}

function t851_setHeight(rec) {
  var ratio = rec.attr('data-tile-ratio');
  var ratioHeight = rec.find('.t851__col').width() * ratio;

  rec.find('.t851__row').each(function() {
    var largestHeight = 0;
    var currow = $(this);

    $('.t851__table', this).each(function() {
    var curCol = $(this);
    var curColHeight = curCol.find('.t851__textwrapper').outerHeight();
    if ($(this).find('.t851__cell').hasClass('t851__button-bottom')) {curColHeight += curCol.find('.t851__button-container').outerHeight();}
    if (curColHeight > largestHeight) {largestHeight = curColHeight;}
    });

    if($(window).width() >= 960) {
      if (largestHeight > ratioHeight) {$('.t851__table',this).css('height', largestHeight);}
      else {$('.t851__table', this).css('height', ratioHeight);}
      $('.t851__table', this).css('min-height', 'auto');
    } else {
      $('.t851__table',this).css('min-height', ratioHeight);
      $('.t851__table',this).css('height','');
    }

    if (t851_GetIEVersion() > 0) {
      var curRowHeight = $('.t851__table',this).css('height');
      $('.t851__bg',this).css('height', curRowHeight);
      $('.t851__overlay',this).css('height', curRowHeight);
    }
  });
}

function t851_GetIEVersion() {
  var sAgent = window.navigator.userAgent;
  var Idx = sAgent.indexOf("MSIE");
  if (Idx > 0) {
    return parseInt(sAgent.substring(Idx+ 5, sAgent.indexOf(".", Idx)));
  } else {
    if (!!navigator.userAgent.match(/Trident\/7\./)){
      return 11;
    } else {
      return 0;
    }
  }
}
 
function t854_init(recid) {
  var rec = $('#rec' + recid);
  var btnNews = rec.find('.t854__news-btn');
  var newsContent = rec.find('.t854__news-content');
  var attrKeyTelegram = newsContent.attr('data-telegram-key');
  var keyTelegram = attrKeyTelegram.length !== 0 ? attrKeyTelegram : 'V1J5MnVkSWJ2UW5nN1JZM';
  var attrCountNews = newsContent.attr('data-telegram-news-amount');
  var symbolsAttr = newsContent.attr('data-telegram-symbols-preview')
  var countNews = attrCountNews.length !== 0 ? +attrCountNews : 5;
  var dateFormat = newsContent.attr('data-telegram-date');
  var currentFromNews = 0;
  var currentShlop = 0;
  var symbolsAmount = 40;

  if (symbolsAttr === '') {
    symbolsAmount = 200;
  } else {
    if (symbolsAttr < 40) {
      symbolsAmount = 40;
    } else if (symbolsAttr > 1000) {
      symbolsAmount = 1000;
    } else {
      symbolsAmount = symbolsAttr;
    }
  }

  var totalNews = t854_showNews(rec, newsContent, keyTelegram, countNews, currentFromNews, currentShlop, dateFormat, symbolsAmount);
  newsContent.removeAttr('data-telegram-key data-telegram-news-amount data-telegram-symbols-preview data-telegram-date');
  t854_hideBtn(btnNews, totalNews, currentFromNews, countNews);

  btnNews.on('click', function(e) {
    e.preventDefault();
    currentFromNews = currentFromNews + countNews;
    currentShlop = $(this).parents('.t854__news-wrap').attr('data-news-shlop');
    t854_hideBtn(btnNews, totalNews, currentFromNews, countNews);
    if (currentFromNews < totalNews) {
      t854_showNews(rec, newsContent, keyTelegram, countNews, currentFromNews, currentShlop, dateFormat, symbolsAmount);
    }
  });
}


function t854_hideBtn(btnNews, totalNews, currentFromNews, countNews) {
  if ((totalNews - currentFromNews) <= countNews) {
    btnNews.hide();
  }
}


function t854_formatDate(date, dateFormat) {
  var dateParts = date.split('-');
  var newDate = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
  var newMonth = newDate.getMonth();
  var newDay = newDate.getDay();
  var dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  switch (+dateFormat) {
    case 1:
      return (dateParts[1] + '-' + dateParts[2] + '-' + dateParts[0]);
      break;
    case 2:
      return (dateParts[2] + '-' + dateParts[1] + '-' + dateParts[0]);
      break;
    case 3:
      return (dateParts[2] + '/' + dateParts[1] + '/' + dateParts[0]);
      break;
    case 4:
      return (dateParts[2] + '.' + dateParts[1] + '.' + dateParts[0]);
      break;
    case 5:
      return (month[newMonth] + ' ' + dateParts[2] + ', ' + dateParts[0]);
      break;
    default:
      return (dayOfWeek[newDay] + ', ' + month[newMonth] + ' ' + dateParts[2]);
      break;
  }
}


function t854_getNews(rec, keyTelegram, count, from, shlop, symbolsAmount) {
  var language = window.navigator ? (window.navigator.language ||
                    window.navigator.systemLanguage ||
                    window.navigator.userLanguage) : "ru";
  language = language.substr(0, 2).toLowerCase();
  var btnNews = rec.find('.t854__news-btn');
  var newsWrap = rec.find('.t854__news-wrap');
  var newsContainer = rec.find('.t854__news-wrap-container');
  var loader = rec.find('.t854__news-loader');
  var urlNews = 'https://news.tildacdn.com/feed/' + keyTelegram + '/' + count + '/' + (parseInt(from) + parseInt(shlop)) + '/' + symbolsAmount;
  var dataJSON = '';
  var news = $.ajax({
    url: urlNews,
    type: 'GET',
    async: false,
    data: {
      format: 'json'
    },
    beforeSend: function() {
      loader.addClass('t854__news-btn-loader_show');
    },
    error: function (data) {
      console.log('Error!');
    },
    success: function(data) {
      dataJSON = JSON.parse(data);
      newsWrap.attr('data-news-shlop', dataJSON.shlop);
      if (dataJSON.status == 'fail') {
        console.log("You entered an " + dataJSON.error);
        btnNews.hide();
        if (language == 'ru') {
          newsWrap.append('<div style="font-family:\'Georgia\',serif;font-size:20px;color:red;">Вы ввели неправильный ключ</div>');
        } else {
          newsWrap.append('<div style="font-family:\'Georgia\',serif;font-size:20px;color:red;">You entered an ' + dataJSON.error + '</div>');
        }
      }
      if (dataJSON.total == 0) {
        console.log("You haven't a publication");
      }
    },
    complete: function() {
      loader.removeClass('t854__news-btn-loader_show');
      newsContainer.css('opacity', 1);
      loader.hide();
    }
  });

  return dataJSON;
}


function t854_showNews(rec, newsContent, keyTelegram, count, from, shlop, dateFormat, symbolsAmount) {
  var news = t854_getNews(rec, keyTelegram, count, from, shlop, symbolsAmount);
  var newsContainer = rec.find('.t854__news');
  var newsMessages = news.messages;
  var totalNews = news.total;
  var arrText = [];
  console.log(symbolsAmount);

  if (newsMessages !== undefined) {
    newsMessages.forEach(function(item, i) {
      var itemNews = item;
      var dateNews = item.date.split(' ');
      var dayNews = dateNews[0];
      var timeNews = dateNews[1].substr(0, 5);
      var textNews = item.text;
      var shortTextNews = item.short_text;
      var imageIdNews = item.files;
      var timeHTML = '<div class="t854__news-time t-descr t-descr_xxs">' + t854_formatDate(dayNews, dateFormat) + '</div>';
      var blockImageArr = [];
      var textHTML = t854_addText(rec, textNews, shortTextNews, newsContainer);
      var imagesHTML = t854_addImage(item, imageIdNews, blockImageArr);

      if (shortTextNews !== undefined) {
        if (imageIdNews.length !== 1) {
          newsContent.append('<div class="t854__news-message t854__news-message_popup t854__news-message_short">' + timeHTML + imagesHTML + textHTML + '</div>');
        } else {
          newsContent.append('<div class="t854__news-message t854__news-message_popup t854__news-message_short">' + timeHTML + '<div class="t854__news-message-flex">' + imagesHTML + textHTML + '</div>' + '</div>');
        }
      } else {
        if (imageIdNews.length !== 1) {
          newsContent.append('<div class="t854__news-message">' + timeHTML + imagesHTML + textHTML + '</div>');
        } else {
          newsContent.append('<div class="t854__news-message">' + timeHTML + '<div class="t854__news-message-flex">' + imagesHTML + textHTML + '</div>' + '</div>');
        }
      }
    });

    t854_addPopup(rec, arrText);
    t854_closePopup(rec);
  }

  return totalNews;
}


function t854_addText(rec, textNews, shortTextNews, newsContainer) {
  var textHTML;

  if (textNews.length === 0) {
    textHTML = '';
  } else {
    if (shortTextNews !== undefined) {
      textHTML = '<div class="t854__news-text t-descr t-descr_xs">' + shortTextNews + '</div><div class="t854__news-text_short-hide t-descr t-descr_xs">' + textNews + '</div>';
    } else {
      textHTML = '<div class="t854__news-text t-descr t-descr_xs">' + textNews + '</div>';
    }
  }

  return textHTML;
}


function t854_addImage(item, imageIdNews, blockImageArr) {
  var images = '';
  var imgHTML = '';

  if (item.files[0] !== undefined) {
    var imageUrl = 'https://news.tildacdn.com/' + item.files[0];
  }

  imageIdNews.forEach(function(item, i) {
    var imageUrl = 'https://news.tildacdn.com/' + item + '/-/resize/x900/';
    var blockImage = '<div class="t854__news-image-wrap"><img src="' + imageUrl + '" class="t854__news-image"></div>';
    blockImageArr.push(blockImage);
  });

  if (blockImageArr.length !== 0) {
    blockImageArr.forEach(function(item) {
      images += item;

      if (blockImageArr.length > 2) {
        imgHTML = '<div class="t854__news-images t854__news-images_col3">' + images + '</div>';
      } else {
        imgHTML = '<div class="t854__news-images">' + images + '</div>';
      }
    });
  }

  return imgHTML;
}


function t854_addPopup(rec, arrText) {
  var popupBlock = rec.find('.t854__news_publish.t854__news_short .t854__news-message');
  var wrapTextPopup = rec.find('.t854__news-popup-bg');
  var textPopup = rec.find('.t854__news-popup');
  var messageWrap = rec.find('.t854__news_publish .t854__news-popup-message-wrap');

  popupBlock.each(function(i) {
    var $this = $(this);
    var imagePopup = $this.find('.t854__news-image');
    var textShortLength = $this.find('.t854__news-text_short-hide').length;
    var messageHTML = $this.html();

    $this.on('click', function(e) {
      $('body').addClass('t854__body_overflow');
      wrapTextPopup.show();
      if (textShortLength !== 0) {
        textPopup.addClass('t854__news-popup_short');
      }
      messageWrap.html($this.html());
      e.preventDefault();
    });

    $this.find('a').on('click', function(e) {
      e.stopPropagation();
    })
  });
}


function t854_closePopup(rec) {
  var wrapTextPopup = rec.find('.t854__news-popup-bg');
  var textPopup = rec.find('.t854__news-popup');
  var contentTextPopup = rec.find('.t854__news-popup-content');
  var imagePopup = rec.find('.t854__news-image');
  var close = rec.find('.t854__news-popup-close');

  wrapTextPopup.on('click', function(e) {
    t854_closeContent(wrapTextPopup, contentTextPopup, textPopup, imagePopup)
    e.preventDefault();
  });

  textPopup.click(function(e) {
    e.stopPropagation();
  });

  close.on('click', function(e) {
    t854_closeContent(wrapTextPopup, contentTextPopup, textPopup, imagePopup)
    e.preventDefault();
  });

  $('body').on('keyup', function (e) {
    if (e.keyCode == 27) {
      t854_closeContent(wrapTextPopup, contentTextPopup, textPopup, imagePopup);
      e.preventDefault();
    }
  });
}


function t854_closeContent(wrapTextPopup, contentTextPopup, textPopup, imagePopup) {
  $('body').removeClass('t854__body_overflow');
  wrapTextPopup.hide();
  textPopup.removeClass('t854__news-popup_short');
  contentTextPopup.html('');
}
 
function t856_init(recid) {
  var rec = $('#rec' + recid + ' .t856');
  var doResize;

  setTimeout(function() {
    t856_setHeight(rec);
  }, 500);

  $(window).resize(function() {
    clearTimeout(doResize);
    doResize = setTimeout(function() {
      t856_setHeight(rec);
    }, 200);
  });

  $('.t856').bind('displayChanged', function() {
    t856_setHeight(rec);
  });

  if (rec.hasClass('t856__previewmode')) {
    setInterval(function() {
      t856_setHeight(rec);
    }, 5000);
  }
}

function t856_setHeight(rec) {
  var ratio = rec.attr('data-tile-ratio');
  var ratioHeight = rec.find('.t856__col').width() * ratio;

  rec.find('.t856__row').each(function() {
    var largestHeight = 0;
    var currow = $(this);

    $('.t856__table', this).each(function() {
    var curCol = $(this);
    var curColHeight = curCol.find('.t856__textwrapper').outerHeight();
    if ($(this).find('.t856__cell').hasClass('t856__button-bottom')) {curColHeight += curCol.find('.t856__button-container').outerHeight();}
    if (curColHeight > largestHeight) {largestHeight = curColHeight;}
    });

    if($(window).width() >= 960) {
      if (largestHeight > ratioHeight) {$('.t856__table',this).css('height', largestHeight);}
      else {$('.t856__table', this).css('height', ratioHeight);}
      $('.t856__table', this).css('min-height', 'auto');
    } else {
      $('.t856__table',this).css('min-height', ratioHeight);
      $('.t856__table',this).css('height','');
    }

    if (t856_GetIEVersion() > 0) {
      var curRowHeight = $('.t856__table',this).css('height');
      $('.t856__bg',this).css('height', curRowHeight);
      $('.t856__overlay',this).css('height', curRowHeight);
    }
  });
}

function t856_GetIEVersion() {
  var sAgent = window.navigator.userAgent;
  var Idx = sAgent.indexOf("MSIE");
  if (Idx > 0) {
    return parseInt(sAgent.substring(Idx+ 5, sAgent.indexOf(".", Idx)));
  } else {
    if (!!navigator.userAgent.match(/Trident\/7\./)){
      return 11;
    } else {
      return 0;
    }
  }
}
 
function t857__init(recid) {
    $('.t857__container_mobile-flex').bind('touchstart', function() {
        $('.t857__col').bind('touchmove', function() {
            if (typeof $(".t-records").attr('data-tilda-mode') == 'undefined') {
                if (window.lazy == 'y') {
                    t_lazyload_update();
                }
            }
        });
    }).mouseup(function() {
        $('.t857__col').unbind('touchend');
    });
}
 
function t858_init(recid) {
  var rec = $('#rec' + recid);
  var container = rec.find('.t858');
  var doResize;

  t858_unifyHeights(rec);

  $(window).resize(function() {
    clearTimeout(doResize);
    doResize = setTimeout(function() {
      t858_unifyHeights(rec);
    }, 200);
  });

  $(window).load(function() {
    t858_unifyHeights(rec);
  });

  $('.t858').bind('displayChanged', function() {
    t858_unifyHeights(rec);
  });

  if (container.hasClass('t858__previewmode')) {
    setInterval(function() {
      t858_unifyHeights(rec);
    }, 5000);
  }
}


function t858_unifyHeights(rec) {
  if ($(window).width() >= 960) {
    rec.find('.t858 .t-container .t858__row').each(function() {
      var highestBox = 0;
      var currow = $(this);
      $('.t858__inner-col', this).each(function() {
        var curCol = $(this);
        var curWrap = curCol.find('.t858__wrap');
        var curColHeight = curWrap.outerHeight();
        if (curColHeight > highestBox) {highestBox = curColHeight;}
      });
      $('.t858__inner-col', this).css('height', highestBox);
    });
  } else {
    $('.t858__inner-col').css('height', 'auto');
  }
}
 
function t859_init(recid) {
  var rec = $('#rec' + recid);
  var container = rec.find('.t859');
  var doResize;

  t859_unifyHeights(rec);

  $(window).resize(function() {
    clearTimeout(doResize);
    doResize = setTimeout(function() {
      t859_unifyHeights(rec);
    }, 200);
  });

  $(window).load(function() {
    t859_unifyHeights(rec);
  });

  $('.t859').bind('displayChanged', function() {
    t859_unifyHeights(rec);
  });

  if (container.hasClass('t859__previewmode')) {
    setInterval(function() {
      t859_unifyHeights(rec);
    }, 5000);
  }
}


function t859_unifyHeights(rec) {
  if ($(window).width() >= 960) {
    rec.find('.t859 .t-container .t859__row').each(function() {
      var highestBox = 0;
      var currow = $(this);
      $('.t859__inner-col', this).each(function() {
        var curCol = $(this);
        var curWrap = curCol.find('.t859__wrap');
        var curColHeight = curWrap.outerHeight();
        if (curColHeight > highestBox) {highestBox = curColHeight;}
      });
      $('.t859__inner-col', this).css('height', highestBox);
    });
  } else {
    $('.t859__inner-col').css('height', 'auto');
  }
}
 
function t860_init(recid) {
  var rec = $('#rec' + recid);
  var container = rec.find('.t860');
  var doResize;

  t860_unifyHeights(rec);
  t860_translateBlock(rec);

  $(window).resize(function() {
    clearTimeout(doResize);
    doResize = setTimeout(function() {
      t860_unifyHeights(rec);
      t860_translateBlock(rec);
    }, 200);
  });

  $(window).load(function() {
    t860_unifyHeights(rec);
    t860_translateBlock(rec);
  });

  $('.t860').bind('displayChanged', function() {
    t860_unifyHeights(rec);
    t860_translateBlock(rec);
  });

  if (container.hasClass('t860__previewmode')) {
    setInterval(function() {
      t860_unifyHeights(rec);
      t860_translateBlock(rec);
    }, 5000);
  }
}


function t860_translateBlock(rec) {
  var blockHover = rec.find('.t860__block_hover');
  var wrapMarginBottom = 30;

  if ($(window).width() > 1024) {
    blockHover.each(function() {
      var $this = $(this);
      var colWrapHeight = $this.parents('.t860__inner-col').height();
      var wrapHeight = $this.find('.t860__show').outerHeight();
      var diff = colWrapHeight - 2 * wrapHeight - wrapMarginBottom / 2;
      $this.css('transform', 'translateY(' + diff + 'px)');
    });
  }
}


function t860_unifyHeights(rec) {
  if ($(window).width() >= 960) {
    rec.find('.t860 .t-container .t860__row').each(function() {
      var highestBox = 0;
      var currow = $(this);
      $('.t860__inner-col', this).each(function() {
        var col = $(this);
        var text = col.find('.t860__wrap');
        var colHeight = text.outerHeight();
        if (colHeight > highestBox) {highestBox = colHeight;}
      });
      $('.t860__inner-col', this).css('height', highestBox);
    });
  } else {
    $('.t860__inner-col').css('height', 'auto');
  }
}
 
function t862_init(recid) {
	var rec = $('#rec' + recid);
	var quiz = rec.find('.t862__quiz');
	var quizWrapper = rec.find('.t862__quiz-wrapper');
	var quizFormWrapper = rec.find('.t862__quiz-form-wrapper');
	var form = rec.find('.t862 .t-form');
	var quizQuestion = rec.find('.t862 .t-input-group');
	var prevBtn = rec.find('.t862__btn_prev');
	var nextBtn = rec.find('.t862__btn_next');
	var resultBtn = rec.find('.t862__btn_result');
	var errorBoxMiddle = rec.find('.t-form__errorbox-middle .t-form__errorbox-wrapper');
	var submitBtnWrapper = rec.find('.t862 .t-form__submit');
	var btnSubmit = rec.find('.t862 .t-submit');
	var captureFormHTML = '<div class="t862__capture-form"></div>';
	rec.find('.t862 .t-form__errorbox-middle').before(captureFormHTML);
	var quizDescriptionHeight = rec.find('.t862__quiz-description-wrapper').outerHeight(true);
	var resultTitleHeight = rec.find('.t862__result-title').outerHeight(true);
	var quizQuestionNumber = 0;
  form.removeClass('js-form-proccess');
	rec.attr('data-animationappear','off');
	rec.css('opacity','1');

  quizQuestion.each(function(i) {
    $(quizQuestion[i]).attr('data-question-number', i);
  });

  t862_wrapCaptureForm(rec);
  var captureForm = rec.find('.t862__capture-form');

  t862_showCounter(rec, quizQuestionNumber);
  t862_disabledPrevBtn(rec, quizQuestionNumber);
  t862_checkLength(rec);

	t862_openToHook(rec, form, quizQuestion, captureForm);

  prevBtn.click(function(e) {
    if (quizQuestionNumber > 0) {
      quizQuestionNumber--;
    }

		t862_setProgress(rec, -1);
    t862_lazyLoad();
    t862_awayFromResultScreen(rec);
    t862_showCounter(rec, quizQuestionNumber);
    t862_hideError(rec, quizQuestionNumber);
    t862_disabledPrevBtn(rec, quizQuestionNumber);
    t862_switchQuestion(rec, quizQuestionNumber);

		e.preventDefault();
  });

  nextBtn.click(function(e) {
    var showErrors = t862_showError(rec, quizWrapper, quizQuestionNumber);

    if (showErrors) {errorBoxMiddle.hide();}

    if (!showErrors) {
      quizQuestionNumber++;
			prevBtn.attr('disabled', false);
      t862_setProgress(rec, 1);
      t862_showCounter(rec, quizQuestionNumber);
      t862_switchQuestion(rec, quizQuestionNumber);
    }

    t862_lazyLoad();

		e.preventDefault();
  });

  quizQuestion.keypress(function(e) {

    if (event.keyCode === 13 && !form.hasClass('js-form-proccess')) {
      var showErrors = t862_showError(rec, quizWrapper, quizQuestionNumber);
      var questionArr = t862_createQuestionArr(rec);

      if (showErrors) {errorBoxMiddle.hide();}

      prevBtn.attr('disabled', false);
      if (!showErrors) {
        quizQuestionNumber++;
        t862_setProgress(rec, 1);

        if (quizQuestionNumber < questionArr.length) {
          t862_switchQuestion(rec, quizQuestionNumber);
        } else {
          t862_switchResultScreen(rec);
          form.addClass('js-form-proccess');
        }
        
        t862_disabledPrevBtn(rec, quizQuestionNumber);
      }

      t862_lazyLoad();

			e.preventDefault();
    }

  });

  resultBtn.click(function(e) {
    var showErrors = t862_showError(rec, quizWrapper, quizQuestionNumber);

    if (showErrors) {errorBoxMiddle.hide();}

    if (!showErrors) {
      quizQuestionNumber++;
      t862_setProgress(rec, 1);
      t862_switchResultScreen(rec);
      form.addClass('js-form-proccess');
      t862_disabledPrevBtn(rec, quizQuestionNumber);
    }

		e.preventDefault();
  });
}


function t862_openToHook(rec, form, quizQuestion, captureForm) {
	var popup = rec.find('.t-popup');
	var hook = popup.attr('data-tooltip-hook');
	var analitics = popup.attr('data-track-popup');

	if (hook !== '') {
		var obj = $('a[href="' + hook + '"]');
		obj.click(function(e) {
			t862_showPopup(rec, form, quizQuestion, captureForm);
			t862_resizePopup(rec);
			e.preventDefault();
			if (window.lazy == 'y') {t_lazyload_update();}
			if (analitics > '') {
				var virtTitle = hook;
				if (virtTitle.substring(0,7) == '#popup:') {
					virtTitle = virtTitle.substring(7);
				}
				Tilda.sendEventToStatistics(analitics, virtTitle);
			}
		});
	}
}


function t862_showError(rec, quizWrapper, quizQuestionNumber) {
	if (quizWrapper.hasClass('t862__quiz-published')) {
		var errors = t862_setError(rec, quizQuestionNumber);

		return errors;
	}
}


function t862_lazyLoad() {
	if (typeof $('.t-records').attr('data-tilda-mode') == 'undefined') {
			if(window.lazy=='y'){t_lazyload_update();}
	}
}


function t862_setHeight(rec, form, quizQuestion, captureForm) {
	var questions = [];
	var questionsHeight = [];

	var descrHeight = rec.find('.t862__quiz-description').outerHeight();
	var titleHeight = rec.find('.t862__result-title').outerHeight();

	quizQuestion.each(function() {
		var $this = $(this);
		if (!$this.hasClass('t862__t-input-group_capture')) {
			questions.push($this);
		}
	});

	questions.forEach(function(item) {
		questionsHeight.push(item.outerHeight());
	});

	var maxHeightQuestion = Math.max.apply(null, questionsHeight);

	var captureFormHeight = captureForm.outerHeight();
	var height = maxHeightQuestion > captureFormHeight ? maxHeightQuestion : captureFormHeight;

	questions.forEach(function(item) {
		item.css('min-height', height);
	});

	captureForm.css('min-height', height);
	rec.find('.t862__quiz-form-wrapper').css('min-height', height);

	var headerHeight = titleHeight > descrHeight ? titleHeight : descrHeight;
	var quizWrapperHeight = rec.find('.t862__quiz-form-wrapper').outerHeight();
	var btnHeight = rec.find('.t862__btn-wrapper').outerHeight();

	rec.find('.t862__wrapper').css('min-height', headerHeight + quizWrapperHeight + btnHeight);
}


function t862_setMobileHeight() {
  t862_calcVH();
  window.addEventListener('resize', function() {
    t862_calcVH();
  });
}


function t862_calcVH() {
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', vh + 'px');
}


function t862_checkLength(rec) {
  var nextBtn = rec.find('.t862__btn_next');
  var resultBtn = rec.find('.t862__btn_result');
  var questionArr = t862_createQuestionArr(rec);

  if (questionArr.length < 2) {
    nextBtn.hide();
    resultBtn.show();
  }
}


function t862_showCounter(rec, quizQuestionNumber) {
  var counter = rec.find('.t862__quiz-description-counter');
  var questionArr = t862_createQuestionArr(rec);
  counter.html(quizQuestionNumber + 1 + '/' + questionArr.length);
}


function t862_setError(rec, quizQuestionNumber) {
  var questionArr = t862_createQuestionArr(rec);
  var currentQuestion = $(questionArr[quizQuestionNumber]);
  var isFieldErrorBoxExist;
  var arErrors = window.tildaForm.validate(currentQuestion);
  var showErrors;

  currentQuestion.addClass('js-error-control-box');
  if (currentQuestion.find('.t-input-error').length > 0) {
    isFieldErrorBoxExist = 1;
  }

  var errorsTypeObj = arErrors[0];
  var arLang = window.tildaForm.arValidateErrors[window.tildaBrowserLang] || {};

  if (errorsTypeObj != undefined) {
    var errorType = errorsTypeObj.type[0];
    var sError = arLang[errorType];
    showErrors = errorType == 'emptyfill' ? false : window.tildaForm.showErrors(currentQuestion, arErrors);
    currentQuestion.find('.t-input-error').html(sError);
  }

  return showErrors;
}


function t862_hideError(rec, quizQuestionNumber) {
  var questionArr = t862_createQuestionArr(rec);
  var currentQuestion = $(questionArr[quizQuestionNumber]);
  currentQuestion.removeClass('js-error-control-box');
  currentQuestion.find('.t-input-error').html('');
}


function t862_setProgress(rec, index) {
  var progressbarWidth = rec.find('.t862__progressbar').width();
  var progress = rec.find('.t862__progress');
  var questionArr = t862_createQuestionArr(rec);
  var progressWidth = progress.width();
  var progressStep = progressbarWidth / (questionArr.length);
  var percentProgressWidth = Math.ceil((progressWidth + index * progressStep) / progressbarWidth * 100) + '%';

  progress.css('width', percentProgressWidth);
}


function t862_wrapCaptureForm(rec) {
  var captureForm = rec.find('.t862__capture-form');
  var quizQuestion = rec.find('.t862 .t-input-group');

  quizQuestion.each(function(i) {
    var currentQuizQuestion = $(quizQuestion[i]);
    var emailInputExist = $(currentQuizQuestion).hasClass('t-input-group_em');
    var nameInputExist = $(currentQuizQuestion).hasClass('t-input-group_nm');
    var phoneInputExist = $(currentQuizQuestion).hasClass('t-input-group_ph');
		var checkboxInputExist = $(currentQuizQuestion).hasClass('t-input-group_cb');
    var quizQuestionNumber = currentQuizQuestion.attr('data-question-number');
    var maxCountOfCaptureFields = 4;

    if (quizQuestionNumber >= quizQuestion.length - maxCountOfCaptureFields) {
      if (emailInputExist || nameInputExist || phoneInputExist || checkboxInputExist) {
        currentQuizQuestion.addClass('t862__t-input-group_capture');
        captureForm.append(currentQuizQuestion);
      }
    }
  });
}


function t862_createQuestionArr(rec) {
  var quizQuestion = rec.find('.t862 .t-input-group');
  var questionArr = [];

  quizQuestion.each(function(i) {
    var question = $(quizQuestion[i]);
    if (!question.hasClass('t862__t-input-group_capture')) {
      questionArr.push(quizQuestion[i]);
    }
  });

  return questionArr;
}


function t862_disabledPrevBtn(rec, quizQuestionNumber) {
  var prevBtn = rec.find('.t862__btn_prev');
  quizQuestionNumber == 0 ? prevBtn.attr('disabled', true) : prevBtn.attr('disabled', false);
}


function t862_switchQuestion(rec, quizQuestionNumber) {
  var nextBtn = rec.find('.t862__btn_next');
  var resultBtn = rec.find('.t862__btn_result');
  var questionArr = t862_createQuestionArr(rec);

  $(questionArr).hide();
  $(questionArr[quizQuestionNumber]).show();

  if (quizQuestionNumber === questionArr.length - 1) {
    nextBtn.hide();
    resultBtn.show();
  } else {
    nextBtn.show();
    resultBtn.hide();
  }
}


function t862_switchResultScreen(rec) {
  var captureForm = rec.find('.t862__capture-form');
  var quizDescription = rec.find('.t862__quiz-description');
  var resultTitle = rec.find('.t862__result-title');
  var prevBtn = rec.find('.t862__btn_prev');
  var resultBtn = rec.find('.t862__btn_result');
  var submitBtnWrapper = rec.find('.t862 .t-form__submit');
  var questionArr = t862_createQuestionArr(rec);

  $(questionArr).hide();
  $(captureForm).show();

  resultBtn.hide();
  quizDescription.hide();
  resultTitle.show();

  submitBtnWrapper.show();
}


function t862_awayFromResultScreen(rec) {
  var captureForm = rec.find('.t862__capture-form');
  var quizDescription = rec.find('.t862__quiz-description');
  var resultTitle = rec.find('.t862__result-title');
  var submitBtnWrapper = rec.find('.t862 .t-form__submit');

  submitBtnWrapper.hide();
  $(captureForm).hide();
  quizDescription.show();
  resultTitle.hide();
}


function t862_onSuccess(form) {
	var inputsWrapper = form.find('.t-form__inputsbox');
	var inputsHeight = inputsWrapper.height();
	var inputsOffset = inputsWrapper.offset().top;
	var inputsBottom = inputsHeight + inputsOffset;
	var targetOffset = form.find('.t-form__successbox').offset().top;
	var prevBtn = form.parents('.t862').find('.t862__btn_prev');

	if ($(window).width() > 960) {
		var target = targetOffset - 200;
	}	else {
		var target = targetOffset - 100;
	}

	if (targetOffset > $(window).scrollTop() || ($(document).height() - inputsBottom) < ($(window).height() - 100)) {
		inputsWrapper.addClass('t862__inputsbox_hidden');
		setTimeout(function() {
			if ($(window).height() > $('.t-body').height()) {$('.t-tildalabel').animate({ opacity:0 }, 50);}
		}, 300);
	} else {
		$('html, body').animate({scrollTop: target}, 400);
		setTimeout(function() {inputsWrapper.addClass('t862__inputsbox_hidden');}, 400);
	}

	var successurl = form.data('success-url');
	if (successurl && successurl.length > 0) {
		setTimeout(function() {
			window.location.href = successurl;
		}, 500);
	}

	prevBtn.hide();
}


function t862_lockScroll() {
	var body = $('body');
	if (!body.hasClass('t-body_scroll-locked')) {
		var bodyScrollTop = (typeof window.pageYOffset !== 'undefined') ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
		body.addClass('t-body_scroll-locked');
		body.css('top','-' + bodyScrollTop + 'px');
		body.attr('data-popup-scrolltop', bodyScrollTop);
	}
}


function t862_unlockScroll() {
	var body = $('body');
	if (body.hasClass('t-body_scroll-locked')) {
		var bodyScrollTop = $('body').attr('data-popup-scrolltop');
		body.removeClass('t-body_scroll-locked');
		body.css('top','');
		body.removeAttr('data-popup-scrolltop')
		window.scrollTo(0, bodyScrollTop);
	}
}


function t862_showPopup(rec, form, quizQuestion, captureForm) {
	var popup = rec.find('.t-popup');
	var quiz = rec.find('.t862__quiz');
	popup.css('display', 'block');
	rec.find('.t-range').trigger('popupOpened');
	if (window.lazy == 'y') {t_lazyload_update();}
	setTimeout(function() {
		popup.find('.t-popup__container').addClass('t-popup__container-animated');
		popup.addClass('t-popup_show');
		if ($(window).width() > 640 && quiz.hasClass('t862__quiz_fixedheight')) {
			t862_setHeight(rec, form, quizQuestion, captureForm);
		}
		
		if ($(window).width() <= 640) {
            t862_setMobileHeight();
        }
        
        t862__showJivo(popup, '1', '1');
	}, 50);

	$('body').addClass('t-body_popupshowed t862__body_popupshowed');
	/*fix IOS11 cursor bug + general IOS background scroll*/
	if (/iPhone|iPad|iPod/i.test(navigator.userAgent) && !window.MSStream) {
		setTimeout(function() {
			t862_lockScroll();
		}, 500);
	}

	rec.find('.t-popup').click(function(e) {
		if (e.target == this) {t862_closePopup();}
	});

	rec.find('.t-popup__close').click(function(e) {
		t862_closePopup();
	});

	rec.find('a[href*="#"]').click(function(e) {
		var url = $(this).attr('href');
		if (!url || url.substring(0,7) != '#price:') {
			t862_closePopup();
			if (!url || url.substring(0,7) == '#popup:') {
				setTimeout(function() {
					$('body').addClass('t-body_popupshowed');
				}, 300);
			}
		}
	});

	$(document).keydown(function(e) {
		if (e.keyCode == 27) {t862_closePopup();}
	});
}


function t862_closePopup() {
	$('body').removeClass('t-body_popupshowed t862__body_popupshowed');
	/*fix IOS11 cursor bug + general IOS background scroll*/
	if (/iPhone|iPad|iPod/i.test(navigator.userAgent) && !window.MSStream) {
		t862_unlockScroll();
	}
	$('.t-popup').removeClass('t-popup_show');
	t862__showJivo($('.t-popup'), '2147483647', '2147483648');
	setTimeout(function() {
		$('.t-popup').not('.t-popup_show').css('display', 'none');
	}, 300);
}


function t862_resizePopup(rec) {
	var div = rec.find('.t-popup__container').height();
	var win = $(window).height() - 120;
	var popup = rec.find('.t-popup__container');
	if (div > win ) {
		popup.addClass('t-popup__container-static');
	} else {
		popup.removeClass('t-popup__container-static');
	}
}


function t862__showJivo(popup, indexMobile, indexDesktop) {
    if ($('._show_1e.wrap_mW.__jivoMobileButton').length != 0) {
        $('._show_1e.wrap_mW.__jivoMobileButton').css('z-index', indexMobile);
    }

    if ($('.label_39#jvlabelWrap').length != 0) {
        $('.label_39#jvlabelWrap').css('z-index', indexDesktop);
    }
}


/* deprecated */
function t862_sendPopupEventToStatistics(popupname) {
	var virtPage = '/tilda/popup/';
	var virtTitle = 'Popup: ';
	if (popupname.substring(0,7) == '#popup:') {
		popupname = popupname.substring(7);
	}

	virtPage += popupname;
	virtTitle += popupname;

	if (window.Tilda && typeof Tilda.sendEventToStatistics == 'function') {
		Tilda.sendEventToStatistics(virtPage, virtTitle, '', 0);
	} else {
		if(ga) {
			if (window.mainTracker != 'tilda') {
				ga('send', {'hitType':'pageview', 'page':virtPage,'title':virtTitle});
			}
		}

		if (window.mainMetrika > '' && window[window.mainMetrika]) {
			window[window.mainMetrika].hit(virtPage, {title: virtTitle,referer: window.location.href});
		}
	}
}
 
function t865_init(recid) {
	var rec = $('#rec' + recid);

	t865__initFB(rec);
	t865_setFBWidth(rec);
	
	t865__initVK(rec);

	$(window).bind('resize', t_throttle(function() {
		if (typeof window.noAdaptive!="undefined" && window.noAdaptive==true && $isMobile){return;}
		t865_setFBWidth(rec);
	}, 100));

	$('.t865').bind('displayChanged',function(){
		t865_setFBWidth(rec);
	});
}


function t865_setFBWidth(rec) {
	setTimeout(function() {
		var fb = rec.find('.fb-comments');
		var colFB = fb.parents('.t865__fb');
		var width = colFB.width();
		fb.find('.fb_ltr').css('width', width);
		fb.find('span').css('width', width);
	}, 500);
}


function t865__initFB(rec) {
	var FBWidgetId = rec.find('.t865__fb').attr('data-comments-fb');
	rec.find('.t865__fb').removeAttr('data-comments-fb');
	rec.find('.t865__fb .fb-comments').attr('data-href', window.location);

	if (rec.find('.t865').hasClass('t865__publish') && FBWidgetId !== undefined) {
		(function(d, s, id) {
		  var js, fjs = d.getElementsByTagName(s)[0];
		  if (d.getElementById(id)) return;
		  js = d.createElement(s); js.id = id;
		  js.src = 'https://connect.facebook.net/ru_RU/sdk.js#xfbml=1&version=v3.1&appId=' + FBWidgetId + '&autoLogAppEvents=1';
		  fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));
	}
}


function t865__initVK(rec) {
	var VKWidgetId = rec.find('.t865__vk').attr('data-comments-vk');
	rec.find('.t865__vk').removeAttr('data-comments-vk');

	if (rec.find('.t865').hasClass('t865__publish') && VKWidgetId !== undefined) {
			VK.init({apiId: VKWidgetId, onlyWidgets: true});
			VK.Widgets.Comments("vk_comments", {limit: 10, attach: "*"});
	}
}
 
function t868_setHeight(recid) {
  var rec = $('#rec' + recid);
  var div = rec.find('.t868__video-carier');
  var height = div.width() * 0.5625;
  div.height(height);
  div.parent().height(height);
}


function t868_initPopup(recid) {
  var rec = $('#rec' + recid);
  $('#rec' + recid).attr('data-animationappear', 'off');
  $('#rec' + recid).css('opacity', '1');
  var el = $('#rec' + recid).find('.t-popup');
  var hook = el.attr('data-tooltip-hook');
  var analitics = el.attr('data-track-popup');
  var customCodeHTML = t868__readCustomCode(rec);

  if (hook !== '') {
    var obj = $('a[href="' + hook + '"]');
    obj.click(function(e) {
      t868_showPopup(recid, customCodeHTML);
      t868_resizePopup(recid);
      e.preventDefault();
      if (analitics > '') {
        var virtTitle = hook;
        if (virtTitle.substring(0,7) == '#popup:') {
          virtTitle = virtTitle.substring(7);
        }
        Tilda.sendEventToStatistics(analitics, virtTitle);
      }
    });
  }
}


function t868__readCustomCode(rec) {
  var customCode = rec.find('.t868 .t868__code-wrap').html();
  rec.find('.t868 .t868__code-wrap').remove();
  return customCode;
}


function t868_showPopup(recid, customCodeHTML) {
  var rec = $('#rec' + recid);
  var popup = rec.find('.t-popup');
  var popupContainer = rec.find('.t-popup__container');
  popupContainer.append(customCodeHTML);

  popup.css('display', 'block');
  t868_setHeight(recid);
  setTimeout(function() {
    popup.find('.t-popup__container').addClass('t-popup__container-animated');
    popup.addClass('t-popup_show');
  }, 50);

  $('body').addClass('t-body_popupshowed');

  rec.find('.t-popup').click(function(e) {
    if (e.target == this) {
      t868_closePopup(recid);
    }
  });

  rec.find('.t-popup__close').click(function(e) {
    t868_closePopup(recid);
  });

  rec.find('a[href*=#]').click(function(e) {
    var url = $(this).attr('href');
    if (url.indexOf('#order') != -1) {
        var popupContainer = rec.find('.t-popup__container');
        setTimeout(function() {
            popupContainer.empty();
        }, 600);
    }
    if (!url || url.substring(0,7) != '#price:') {
      t868_closePopup();
      if (!url || url.substring(0,7) == '#popup:') {
        setTimeout(function() {
          $('body').addClass('t-body_popupshowed');
        }, 300);
      }
    }
  });

  $(document).keydown(function(e) {
    if (e.keyCode == 27) { t868_closePopup(recid); }
  });
}


function t868_closePopup(recid) {
  var rec = $('#rec' + recid);
  var popup = rec.find('.t-popup');
  var popupContainer = rec.find('.t-popup__container');

  $('body').removeClass('t-body_popupshowed');
  $('.t-popup').removeClass('t-popup_show');
  popupContainer.empty();

  setTimeout(function() {
    $('.t-popup').not('.t-popup_show').css('display', 'none');
  }, 300);
}


function t868_resizePopup(recid) {
  var rec = $('#rec' + recid);
  var div = rec.find('.t-popup__container').height();
  var win = $(window).height();
  var popup = rec.find('.t-popup__container');
  if (div > win ) {
    popup.addClass('t-popup__container-static');
  } else {
    popup.removeClass('t-popup__container-static');
  }
}


/* deprecated */
function t868_sendPopupEventToStatistics(popupname) {
  var virtPage = '/tilda/popup/';
  var virtTitle = 'Popup: ';
  if (popupname.substring(0,7) == '#popup:') {
    popupname = popupname.substring(7);
  }

  virtPage += popupname;
  virtTitle += popupname;

  if(ga) {
    if (window.mainTracker != 'tilda') {
      ga('send', {'hitType':'pageview', 'page':virtPage, 'title':virtTitle});
    }
  }

  if (window.mainMetrika > '' && window[window.mainMetrika]) {
    window[window.mainMetrika].hit(virtPage, {title: virtTitle,referer: window.location.href});
  }
}
 
function t875_init(recid) {
    if (document.layers) {document.captureEvents(Event.MOUSEDOWN);}
    document.onmousedown = t875_click;
    document.oncontextmenu = function(event) {
            var event = event || window.event;
            var sender = event.target || event.srcElement;
            if (sender.tagName.match(/INPUT|TEXTAREA/i)) {
                return;
            } else {
                return false;
            }
    };
    t875_preventSelection(document);
    t875_preventUserSelect();
}


function t875_preventUserSelect() {
    $('body').css({'-ms-user-select': 'none', '-moz-user-select': 'none', '-webkit-user-select': 'none', 'user-select': 'none', '-webkit-touch-callout': 'none'});
}

function t875_click(event) {
    t875_returnPrevent(event);

    if (document.all) {
        if (event.button == 2) {
            return false;
        }
    }
    if (document.layers) {
        if (event.which == 3) {
            return false;
        }
    }
}


function t875_preventSelection(element) {
    var preventSelection = false;

    t875_addHandler(element, 'mousemove', function() {
        if (preventSelection) {
            t875_removeSelection();
        }
    });

    t875_addHandler(element, 'mousedown', function(event) {
        var event = event || window.event;
        var sender = event.target || event.srcElement;
        preventSelection = !sender.tagName.match(/INPUT|TEXTAREA/i);
    });

    t875_addHandler(element, 'mouseup', function() {
        if (preventSelection) {
            t875_removeSelection();
        }
        preventSelection = false;
    });

    t875_addHandler(element, 'keydown', t875_killCtrlA);
    t875_addHandler(element, 'keyup', t875_killCtrlA);
    t875_addHandler(element, 'keydown', t875_killCtrlU);
    t875_addHandler(element, 'keyup', t875_killCtrlU);
    t875_addHandler(element, 'keydown', t875_killAltCmdI);
    t875_addHandler(element, 'keyup', t875_killAltCmdI);
    t875_addHandler(element, 'keydown', t875_killCtrlShiftI);
    t875_addHandler(element, 'keyup', t875_killCtrlShiftI);
}


function t875_addHandler(element, event, handler) {
    if (element.attachEvent) {
        element.attachEvent('on' + event, handler);
    } else {
        if (element.addEventListener) {
            element.addEventListener(event, handler, false);
        }
    }
}


function t875_removeSelection() {
    if (window.getSelection) {
        window.getSelection().removeAllRanges();
    } else if (document.selection && document.selection.clear) {
        document.selection.clear();
    }
}


function t875_killCtrlU(event) {
    t875_returnPrevent(event);

    var key = event.keyCode || event.which;
    if ((event.ctrlKey && key == 'U'.charCodeAt(0)) || (event.altKey && event.metaKey && (key == 'U'.charCodeAt(0) || key == 'u'.charCodeAt(0)))) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    }
}


function t875_killAltCmdI(event) {
    t875_returnPrevent(event);

    var key = event.keyCode || event.which;
    if (event.altKey && event.metaKey && (key == 'I'.charCodeAt(0) || key == 'i'.charCodeAt(0))) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    }
}


function t875_killCtrlShiftI(event) {
    t875_returnPrevent(event);

    var key = event.keyCode || event.which;
    if (event.shiftKey && event.ctrlKey && (key == 'I'.charCodeAt(0) || key == 'i'.charCodeAt(0))) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    }
}


function t875_killCtrlA(event) {
    var event = event || window.event;
    var sender = event.target || event.srcElement;
    if (sender.tagName.match(/INPUT|TEXTAREA|BUTTON/i)) {return;}

    var key = event.keyCode || event.which;
    if ((event.ctrlKey && key == 'A'.charCodeAt(0)) || (event.metaKey && key == 'A'.charCodeAt(0))) {
        t875_removeSelection();
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    }
}


function t875_returnPrevent(event) {
    var event = event || window.event;
    var sender = event.target || event.srcElement;
    if (sender.tagName.match(/INPUT|TEXTAREA/i)) {return;}
}