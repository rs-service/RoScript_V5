function decryptData(e, t = 5) {
    let a = "",
        o = atob(e),
        n = o.substring(0, t),
        i = o.substring(t);
    for (let s = 0; s < i.length; s++) a += String.fromCharCode(i.charCodeAt(s) ^ n.charCodeAt(s % n.length));
    return a
}! function() {
    "use strict";
    if ("adshnk.com" === window.location.hostname || "adshrink.it" === window.location.hostname) {
        let e = setInterval(() => {
            "object" == typeof _sharedData && 0 in _sharedData && "destination" in _sharedData[0] ? (clearInterval(e), document.write(_sharedData[0].destination), window.location.replace(document.body.textContent)) : "undefined" != typeof ___reactjsD && "object" == typeof window[___reactjsD.o] && "string" == typeof window[___reactjsD.o].dest && (clearInterval(e), window.location.replace(window[___reactjsD.o].dest))
        })
    } else if ("sub2unlock.com" === window.location.hostname) {
        let t = document.URL;
        if (t.includes("sub2unlock.com/link/unlock")) {
            let a = document.getElementById("link").getAttribute("href");
            window.location.replace(a)
        } else {
            let o = t.split("/"),
                n = o[o.length - 1];
            window.location.replace("https://sub2unlock.com/link/unlock/" + n)
        }
    } else if ("socialwolvez.com" === window.location.hostname) fetch("https://us-central1-social-infra-prod.cloudfunctions.net/linksService/link/guid/" + location.pathname.substr(7)).then(e => (e.ok || window.location.reload(), e.json())).then(e => {
        e && e.link && e.link.url ? window.location.replace(e.link.url) : window.location.reload()
    }).catch(e => {
        window.location.reload()
    });
    else if ("mboost.me" === window.location.hostname) try {
        let i = document.querySelector('script[id="__NEXT_DATA__"]');
        if (i) {
            let s = JSON.parse(i.textContent);
            s.props.pageProps.data.targeturl ? window.location.replace(s.props.pageProps.data.targeturl) : window.location.reload()
        } else window.location.reload()
    } catch (c) {
        window.location.reload()
    } else if ("leasurepartment.xyz" === window.location.hostname) {
        async function l(e) {
            return JSON.parse(atob(e))
        }
        async function r() {
            let e = await l(function e(t) {
                if (t = RegExp("[?&]" + encodeURIComponent(t) + "=([^&]*)").exec(location.search)) return decodeURIComponent(t[1])
            }("cc"));
            e && e.link ? window.location.replace(e.link) : window.location.reload()
        }
        r()
    } let h = {
            "https://work.ink/1STs/lqivwchq": "itsjidy.github.io/SymphonyHub/auth/checkpoint/main",
            "https://work.ink/46x/Check1": "btteam.top/checkpoint/checkpoint-2.php",
            "https://btteam.top/checkpoint/checkpoint-2.php": "work.ink/46x/Check2",
            "https://work.ink/46x/Check2": "btteam.top/checkpoint/redirect-2.php"
        },
        u = window.location.href;
    u in h && window.location.replace(`https://${h[u]}`), u.includes("btteam.top/checkpoint/checkpoint-1.php") && setTimeout(() => {
        window.location.replace("https://btteam.top/checkpoint/redirect-workink.php")
    }, "3000")
}(), "object" == typeof p && p?.PUBLISHER_LINK && decryptData(p.PUBLISHER_LINK) && window.location.assign(decryptData(p.PUBLISHER_LINK));
const util = {
    sleep: function(e) {
        return new Promise(t => setTimeout(t, e))
    },
    linkvertiseSpoof: function(e, t = "") {
        let a = {
            referer: "https://linkvertise.com/"
        };
        return t && ("android" == t ? a = {
            accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en-US",
            referer: "https://linkvertise.com/",
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "cross-site",
            "sec-fetch-user": "?1",
            te: "trailers",
            "upgrade-insecure-requests": "1"
        } : "windows" == t && (a = {
            accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
            referer: "https://linkvertise.com/",
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "cross-site",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1"
        })), new Promise((t, o) => {
            GM.xmlHttpRequest({
                method: "GET",
                url: e,
                headers: a,
                onload: function(e) {
                    t(e.responseText)
                },
                onerror: function(e) {
                    o(e)
                }
            })
        })
    },
    getTurnstileResponse: async function() {
        for (;
            "undefined" == typeof turnstile || !turnstile?.getResponse;) await util.sleep(1);
        let e = "";
        for (; !e;) {
            try {
                e = turnstile.getResponse()
            } catch (t) {}
            await util.sleep(1)
        }
        return turnstile.getResponse()
    },
    getGrecaptchaResponse: async function() {
        for (;
            "undefined" == typeof grecaptcha || !grecaptcha?.getResponse;) await util.sleep(1);
        let e = "";
        for (; !e;) {
            try {
                e = grecaptcha.getResponse()
            } catch (t) {}
            await util.sleep(1)
        }
        return grecaptcha.getResponse()
    },
    getHcaptchaResponse: async function() {
        for (;
            "undefined" == typeof hcaptcha || !hcaptcha?.getResponse;) await util.sleep(1);
        let e = "";
        for (; !e;) {
            try {
                e = hcaptcha.getResponse()
            } catch (t) {}
            await util.sleep(1)
        }
        return hcaptcha.getResponse()
    }
};
async function codex() {
    let e;
    for (; !e;) e = localStorage.getItem("android-session"), await util.sleep(1e3);
    async function t() {
        let t = await (await fetch("https://api.codex.lol/v1/stage/stages", {
            method: "GET",
            headers: {
                "Android-Session": e
            }
        })).json();
        if (t.success) return t.authenticated ? [] : t.stages;
        window.location.reload()
    }
    async function a(t) {
        let a = await (await fetch("https://api.codex.lol/v1/stage/initiate", {
            method: "POST",
            headers: {
                "Android-Session": e,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                stageId: t
            })
        })).json();
        if (a.success) return a.token;
        window.location.reload()
    }
    async function o(t, a) {
        let o = await (await fetch("https://api.codex.lol/v1/stage/validate", {
            method: "POST",
            headers: {
                "Android-Session": e,
                "Content-Type": "application/json",
                "Task-Referrer": a
            },
            body: JSON.stringify({
                token: t
            })
        })).json();
        if (o.success) return o.token;
        window.location.reload()
    }
    async function n(t) {
        if ((await (await fetch("https://api.codex.lol/v1/stage/authenticate", {
                method: "POST",
                headers: {
                    "Android-Session": e,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    tokens: t
                })
            })).json()).success) return !0;
        window.location.reload()
    }

    function i(e) {
        let t = e.split(".")[1];
        return JSON.parse(atob(t = t.replace(/-/g, "+").replace(/_/g, "/")))
    }
    document?.getElementsByTagName("a")?.length && document.getElementsByTagName("a")[0].innerHTML.includes("Get started") && document.getElementsByTagName("a")[0].click();
    let s = await t(),
        c = 0;
    for (; localStorage.getItem(s[c]) && c < s.length;) c++;
    if (c == s.length) return;
    let l = [];
    try {
        for (; c < s.length;) {
            let r = s[c].uuid,
                h = await a(r);
            await util.sleep(6e3);
            let u = i(h),
                d, m = await o(h, d = u.link.includes("loot-links") ? "https://loot-links.com/" : u.link.includes("loot-link") ? "https://loot-link.com/" : "https://linkvertise.com/");
            l.push({
                uuid: r,
                token: m
            }), c++
        }
        n(l) && window.location.reload()
    } catch (f) {
        window.location.reload()
    }
}
async function arceus() {
    try {
        let hwid = (new URL(window.location.href)).searchParams.get('hwid');
        await fetch(`https://spdmteam.com/api/keysystem?hwid=${hwid}&zone=Europe/Rome&advertiser=linkvertise`, { mode: 'no-cors' });
        let checkpointsDone = 1;
        while (checkpointsDone <= 3) {
            await linkvertiseSpoof(`https://spdmteam.com/api/keysystem?step=${checkpointsDone}&advertiser=linkvertise`);
            checkpointsDone++;
        }
        window.location.assign('https://spdmteam.com/key-system-getkey');
    }
    catch (e) {
        window.location.reload();
    }
}
async function delta() {
    if ("Just a moment..." == document.title) return;
    let e = new URL(window.location.href).searchParams.get("id"),
        t = await (await fetch("https://api-gateway.platoboost.com/v1/authenticators/8/" + e)).json();
    if (t.key) return;
    let a = new URL(window.location.href).searchParams.get("tk");
    if (a) await util.sleep(5e3), await (await fetch(`https://api-gateway.platoboost.com/v1/sessions/auth/8/${e}/${a}`, {
        method: "PUT"
    })).json().then(async e => {
        window.location.assign(e.redirect)
    }).catch(e => {
        window.location.reload()
    });
    else {
        let o = t.captcha,
            n = await fetch("https://api-gateway.platoboost.com/v1/sessions/auth/8/" + e, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    captcha: o ? await util.getTurnstileResponse() : "",
                    type: o ? "Turnstile" : ""
                })
            });
        n = await n.json(), await util.sleep(1e3);
        let i = await (await fetch(`https://bypass.rblx.workers.dev/delta-decrypt?url=${encodeURIComponent(n.redirect)}`)).text(),
            s = new URL(i).searchParams.get("r"),
            c = atob(s);
        window.location.assign(c)
    }
}

async function hohohub() {
    try {
        var e;
        if (document.body.innerHTML.includes("Successfully Whitelisted!")) return;
        document.getElementById("subscribeModal")?.remove();
        let t = document.cookie.split("; ").find(e => e.includes("session")).split("=")[1];
        await fetch("/api/captcha", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                captchaToken: await util.getTurnstileResponse(),
                session: t
            })
        });
        let a = document.getElementsByTagName("button")[1].onclick.toString();
        a = a.split(",")[1].split(")")[0].trim(), await fetch("/api/redirect", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                startToken: (await (await fetch("/api/start", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        site: 2,
                        cucmep: btoa((a = parseInt(a)) + 10 + 1e3 + 9 + 12 + 6),
                        session: t
                    })
                })).json()).token,
                session: t
            })
        }), await (e = `https://hohohubv-ac90f67762c4.herokuapp.com/api/step?step=${parseInt(document.getElementsByTagName("p")[0].innerHTML.split("checkpoint ")[1].split(" ")[0])+1}`, new Promise((t, a) => {
            GM.xmlHttpRequest({
                method: "GET",
                url: e,
                headers: {
                    accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
                    Referer: "https://loot-link.com/",
                    "Sec-Fetch-Dest": "document",
                    "Sec-Fetch-Mode": "navigate",
                    "Sec-Fetch-Site": "cross-site",
                    "Sec-Fetch-User": "?1",
                    "Upgrade-Insecure-Requests": "1"
                },
                onload: function(e) {
                    t(e)
                },
                onerror: function(e) {
                    a(e)
                }
            })
        })), window.location.reload()
    } catch (o) {
        window.location.reload()
    }
}
async function tsuohub() {
    let e = new URL(window.location.href);
    if ("/complete" == e.pathname || !["/getkey", "/step"].includes(e.pathname)) return;
    let t = new URL(await new Promise(async (t, a) => {
        GM.xmlHttpRequest({
            method: "GET",
            url: `${e.origin+e.pathname+e.search}${e.search?"&":"?"}g-recaptcha-response=${await util.getGrecaptchaResponse()}`,
            onload: function(e) {
                t(e.finalUrl)
            },
            onerror: function(e) {
                a(e)
            },
            headers: {
                Referer: window.location.href
            }
        })
    }));
    "tsuo-script.xyz" == t.hostname ? window.location.assign(t.href) : (await new Promise((e, t) => {
        GM.xmlHttpRequest({
            method: "GET",
            url: "https://tsuo-script.xyz/complete",
            headers: {
                Referer: "https://zonatti.com/"
            },
            onload: function(t) {
                e(t.responseText)
            },
            onerror: function(e) {
                t(e)
            }
        })
    }), window.location.assign("https://tsuo-script.xyz/complete"))
}
let url = new URL(window.location.href);
switch (url.hostname) {
    case "mobile.codex.lol":
        await codex();
        break;
    case "spdmteam.com":
        await arceus();
        break;
    case "gateway.platoboost.com":
        await delta();
        break;
    case "keyrblx.com":
        await keyrblx();
        break;
    case "hohohubv-ac90f67762c4.herokuapp.com":
        await hohohub();
        break;
    case "tsuo-script.xyz":
        await tsuohub()
}
