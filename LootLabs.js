async function lootlabs() {
    let e;
    e = window.fetch, window.fetch = function(t, o) {
        return t.includes(`${INCENTIVE_SYNCER_DOMAIN}/tc`) ? e(t, o).then(e => e.ok ? e.clone().json().then(t => {
            let o = "",
                a = "",
                c = "";
            t.forEach(e => {
                o = e.urid, a = 54, c = e.action_pixel_url
            });
            let n = o.substr(-5) % 3,
                s = new WebSocket(`wss://${n}.${INCENTIVE_SERVER_DOMAIN}/c?uid=${o}&cat=${a}&key=${KEY}`);
            return s.onopen = () => setInterval(() => s.send("0"), 1), s.onmessage = e => {
                e.data.includes("r:") && (PUBLISHER_LINK = e.data.replace("r:", ""))
            }, navigator.sendBeacon(`https://${n}.${INCENTIVE_SERVER_DOMAIN}/st?uid=${o}&cat=${a}`), fetch(c), fetch(`https://${INCENTIVE_SYNCER_DOMAIN}/td?ac=1&urid=${o}&&cat=${a}&tid=${TID}`), s.onclose = () => window.location.href = decodeURIComponent(function e(t, o = 5) {
                let a = "",
                    c = atob(t),
                    n = c.substring(0, o),
                    s = c.substring(o);
                for (let i = 0; i < s.length; i++) a += String.fromCharCode(s.charCodeAt(i) ^ n.charCodeAt(i % n.length));
                return a
            }(PUBLISHER_LINK)), new Response(JSON.stringify(t), {
                status: e.status,
                statusText: e.statusText,
                headers: e.headers
            })
        }) : JSON.stringify(e)) : e(t, o)
    }
}
async function adSpoof(e, t) {
    try {
        const response = await fetch(e, {
            method: "GET",
            headers: {
                "user-agent": "Mozilla/5.0 (Linux; Android 8.1.0; GO3C Build/OPM2.171019.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/88.0.4324.141 Mobile Safari/537.36",
                accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
                "accept-encoding": "gzip, deflate, br",
                "accept-language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7",
                "sec-ch-ua": '"Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"',
                "sec-ch-ua-mobile": "?1",
                "sec-ch-ua-platform": '"Android"',
                referrer: t,
                "sec-fetch-dest": "document",
                "sec-fetch-mode": "navigate",
                "sec-fetch-site": "none",
                "sec-fetch-user": "?1",
                "upgrade-insecure-requests": "1"
            }
        });
        if (response.ok) {
            window.location.href = e;
        }
    } catch (error) {
        console.error(error);
    }
}
async function lvdl() {
    let e = new URL(window.location.href).searchParams.get("r");
    if (e) {
        adSpoof(atob(e), window.location.hostname);
        return;
    }
}
async function start() {
    switch (window.location.hostname) {
        case "loot-link.com":
        case "loot-links.com":
        case "lootlink.org":
        case "lootlinks.co":
        case "lootdest.info":
        case "lootdest.org":
        case "lootdest.com":
        case "links-loot.com":
        case "linksloot.net":
            await lootlabs();
            break;
    }
}
lvdl(),start();
