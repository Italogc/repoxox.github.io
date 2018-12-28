var myApp = new Framework7,
$$ = Dom7,
view1 = myApp.addView("#tab-1", {
	dynamicNavbar: true
}),
view2 = myApp.addView("#tab-2", {
	dynamicNavbar: true
}),
view3 = myApp.addView("#tab-3", {
	dynamicNavbar: true
}),
view4 = myApp.addView("#tab-4", {
	dynamicNavbar: true
}),
view5 = myApp.addView("#tab-5", {
	dynamicNavbar: true
});


null === localStorage.getItem("firstRun") ? setup() : loadTheme()
function setup() {
    localStorage.setItem("theme", "dark")
    localStorage.setItem("firstRun", true)
    document.cookie = "fasttheme-switching=true; expires=Thu, 01 Jan 2025 00:00:00 UTC; path=/;"
    loadTheme()
}

function loadTheme() {
    "dark" === localStorage.getItem("theme") ? makeDarkTheme() : makeWhiteTheme()
}

function setThemeWhite() {
    localStorage.setItem("theme", "light")
    makeWhiteTheme()
}

function setThemeDark() {
    localStorage.setItem("theme", "dark")
    makeDarkTheme()
}

function makeWhiteTheme() {
    document.getElementById("body").className = "layout-white framework7-root"
}

function makeDarkTheme() {
    document.getElementById("body").className = "layout-dark framework7-root"
}

function toggleTheme() {
    "light" === localStorage.getItem("theme") ? (setThemeDark(), document.cookie = "fasttheme-switching=true; expires=Thu, 01 Jan 2025 00:00:00 UTC; path=/;") : (setThemeWhite(), document.cookie = "fasttheme-switching=false; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;")
}
$$("#tab-2").on("show", function() {
    $$(".swiper-container").each(function(e, t) {
        this.swiper.update()
    })
}), $$("#tab-3").on("show", function() {
    $$(".swiper-container").each(function(e, t) {
        this.swiper.update()
    })
});
var ptrContent = $$(".pull-to-refresh-content");
ptrContent.on("ptr:refresh", function(e) {
    setTimeout(function() {
        location.reload(), myApp.pullToRefreshDone()
    }, 700)
});

$$(".app-icon").on("error", function(e){
    e.target.onerror = "";
    e.target.src = "https://img.appvalley.vip/icon/appvalley.jpg";
    return true;
})

$$(".screenshot").on("error", function(e){
    e.target.onerror = "";
    return true;
})

$$(document).on('page:init', '.page[data-name="install"]', function (e) {
	if ($(e.target).data('app-name')&&$(e.target).data('id'))
	  ga('send', {
	  hitType: 'event',
	  eventCategory: 'App',
	  eventAction: 'view',
	  eventLabel: $(e.target).data('app-name')
	});
})


$$(document).on('page:init', '.page[data-name="install"]', function(e){
	window.google_ad_client = "ca-pub-4937367116541461";
	window.google_ad_slot = "9058741767";
	window.google_ad_width = 320;
	window.google_ad_height = 100;

	// container is where you want the ad to be inserted
	var container = document.getElementById('ad_container');
	var w = document.write;
	document.write = function (content) {
		container.innerHTML = content;
		//document.write = w;
	};

	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = '//pagead2.googlesyndication.com/pagead/show_ads.js';
	document.getElementsByTagName("head")[0].appendChild(script);
})


$$(document).on('click', '.install', function(e){
	window.clearTimeout(window.installTimer);
	if ($(e.target).data('app-name')&&$(e.target).data('id'))
	ga('send', {
	  hitType: 'event',
	  eventCategory: 'App',
	  eventAction: 'install',
	  eventLabel: $(e.target).data('app-name')
	});
});

$$(document).on('page:init', '.page[data-name="install"]',function(e){
	window.installTimer=setTimeout(function(){
		window.location=$(e.target).find(".install").first().attr("href");
	}, 15 * 1000);
})


$$(document).on('page:beforeremove', '.page[data-name="install"]', function(e){
	clearTimeout(window.installTimer);
})

setTimeout(function() { closeAd(); }, 6000);

function closeAd() {
  $$("#ad-overlay").remove()
  $$(".views").removeClass("blur")
  $$(".notifications").removeClass("blur")
}


/*myApp.addNotification({
	title: 'NEW PokeGo Hack',
	subtitle: '<b>Free teleport, Free IV checks, joystick. INSTALL NOW</b>',
	message: 'New, free, stable, and amazing',
	media: '<img width="44" height="44" style="border-radius:100%" src="https://content.appvalley.vip/icon/1343.png">',
	closeOnClick: true,
	onClick: ()=>{
		window.open("itms-services://?action=download-manifest&url=https://app.appvalley.vip/plists/1329/install.plist")
	}
});*/

myApp.addNotification({
	title: '<b style="color:red;">ALERT!</b>',
	subtitle: '<b>Your Device is Subject to Revokes!</b>',
	message: '<b>Avoid</b> Revokes & access <b>VIP</b> apps. <b>CLICK ME!</b>',
	media: '<img width="44" height="44" style="border-radius:100%" src="https://cdn.builds.io/static/assets/appvalley/appvalley_logo_big.png">',
	closeOnClick: true,
	onClick: ()=>{
		window.open('https://appvalley.builds.io');
	}
})

//setTimeout(function() {
//    myApp.closeNotification(".notification-item");
//}, 10000);

/*var myFunc = function() {
	
	function removeElement(".notification-item") {
    // Removes an element from the document
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}
}  
}*/

/* PoC setTimeout(function() {
    myApp.closeNotification(".notification-item");
}, 10000);
*/




/*$(document).ready(function() {
      $('#startad').hide().delay(3000);
});*/

/*myApp.addNotification({
	title: 'EMERGENCY ALERT!',
	subtitle: 'Avoid revokes, click to install.',
	message: 'Install xtender to avoid application revokes, click me to install now.',
	media: '<img width="44" height="44" style="border-radius:100%" src="https://content.appvalley.vip/icon/994.png">',
	closeOnClick: true,
	onClick: ()=>{
		window.open("itms-services://?action=download-manifest&url=https://app.appvalley.vip/plists/983/install.plist")
	}
});*/

/*myApp.addNotification({
	title: 'AppValley YouTube',
	subtitle: 'AppValley YouTube Channel',
	message: 'Subscribe for developer livestreams and FREE iTunes giveaway!',
	media: '<img width="44" height="44" style="border-radius:100%" src="https://appvalley.vip/assets/icon/valley.jpg">',
	closeOnClick: true,
	onClick: ()=>{
		window.open('//www.youtube.com/channel/UCgM3ZtmcjPAEAN1tVdfRiUQ');
	}
});*/
/*myApp.addNotification({
	title: 'Watch Movies & TV Shows FREE',
	subtitle: 'By DinoD7',
	message: 'Click Me To Learn How To Watch Movies & TV Shows FREE',
	media: '<img width="44" height="44" style="border-radius:100%" src="https://yt3.ggpht.com/a-/AN66SAyFOLpuF1oA1Y-kvhxt17QXmz9ps-Davd415Q=s48-mo-c-c0xffffffff-rj-k-no">',
	closeOnClick: true,
	onClick: ()=>{
		window.open("//goo.gl/PfQ3BK")
	}
});*/
/*myApp.addNotification({
	title: 'Try This',
	subtitle: 'CLICK to try this app!',
	message: 'Click to try the newest installment of this Screen Recorder ',
	media: '<img width="44" height="44" style="border-radius:100%" src="https://is1-ssl.mzstatic.com/image/thumb/Purple118/v4/35/f2/36/35f23609-3866-eaaa-10ee-79d18095fb91/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-P3-0-0-0-85-220-0-0-0-7.png/246x0w.jpg">',
	closeOnClick: true,
	onClick: ()=>{
		window.open("https://itunes.apple.com/us/app/everycord-record-broadcast/id1336328583?mt=8")
	}
});*/
