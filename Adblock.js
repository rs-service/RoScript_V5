const adblock = async () => {
    await new Promise((e, t) => {
        let r = document.getElementById("movie_player"),
            d = () => {
                let t = r?.classList.contains("ad-interrupting") || r?.classList.contains("ad-showing"),
                    d = document.querySelector(".ytp-ad-preview-text")?.innerText,
                    a = document.querySelector(".ytp-ad-survey")?.length > 0;
                if (t && d) {
                    let n = document.getElementsByClassName("video-stream")[0];
                    n.muted = !0, n.currentTime = n.duration - 0, n.paused && n.play(), document.querySelector(".ytp-ad-skip-button")?.click(), document.querySelector(".ytp-ad-skip-button-modern")?.click()
                } else t && a && (document.querySelector(".ytp-ad-skip-button")?.click(), document.querySelector(".ytp-ad-skip-button-modern")?.click());
                let l = [".ytd-companion-slot-renderer", ".ytd-action-companion-ad-renderer", ".ytd-watch-next-secondary-results-renderer.sparkles-light-cta", ".ytd-unlimited-offer-module-renderer", ".ytp-ad-overlay-image", ".ytp-ad-text-overlay", "div#root.style-scope.ytd-display-ad-renderer.yt-simple-endpoint", "div#sparkles-container.style-scope.ytd-promoted-sparkles-web-renderer", ".ytd-display-ad-renderer", ".ytd-statement-banner-renderer", ".ytd-in-feed-ad-layout-renderer", "div#player-ads.style-scope.ytd-watch-flexy, div#panels.style-scope.ytd-watch-flexy", ".ytd-banner-promo-renderer", ".ytd-video-masthead-ad-v3-renderer", ".ytd-primetime-promo-renderer"];
                l.forEach(e => {
                    document.hideElementsBySelector(e)
                }), e()
            };
        setTimeout(d, 0)
    }), adblock()
}, init = async () => {
    Document.prototype.hideElementsBySelector = e => [...document.querySelectorAll(e)].forEach(e => e.style.display = "none"), adblock()
};
init();
