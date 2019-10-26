console.log('Scrollify is connected');
$.scrollify({
    section: ".scrollify",
    interstitialSection: "",
    easing: "easeOutExpo",
    scrollSpeed: 1500,
    offset: 0,
    scrollbars: true,
    standardScrollElements: "",
    setHeights: true,
    overflowScroll: true,
    updateHash: true,
    touchScroll: true,
    before: function() {},
    after: function() {},
    afterResize: function() {},
    afterRender: function() {}
});