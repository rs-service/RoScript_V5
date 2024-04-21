if (document.title == 'Just a moment...') {
    return;
};
async function codex() {
    let e;
    for (; !e;) e = localStorage.getItem("android-session"), await sleep(1e3);
    async function t() {
        let t = await (await fetch("https://api.codex.lol/v1/stage/stages", {
            method: "GET",
            headers: {
                "Android-Session": e
            }
        })).json();
        if (t.success) return t.authenticated ? [] : t.stages;
        alert("Error: Failed to get stages")
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
        alert("Error: Failed to initiate stage")
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
        alert("Error: Failed to validate stage")
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
        alert("Error: Failed to authenticate")
    }

    function s(e) {
        let t = e.split(".")[1];
        return JSON.parse(t = base64decode(t))
    }
    document?.getElementsByTagName("a")?.length && document.getElementsByTagName("a")[0].innerHTML.includes("Get started") && document.getElementsByTagName("a")[0].click();
    let i = await t(),
        c = 0;
    for (; localStorage.getItem(i[c]) && c < i.length;) c++;
    if (c == i.length) return;
    let r = [];
    try {
        for (; c < i.length;) {
            let l = i[c].uuid,
                p = await a(l);
            await sleep(6e3);
            let h = s(p),
                d, u = await o(p, d = h.link.includes("loot-links") ? "https://loot-links.com/" : h.link.includes("loot-link") ? "https://loot-link.com/" : "https://linkvertise.com/");
            r.push({
                uuid: l,
                token: u
            }), c++
        }
        n(r) && (await sleep(1e3), window.location.reload())
    } catch (m) {
        alert(m)
    }
}
async function sub2get() {
    fetch("https://ethos-testing.vercel.app/api/sub2get/bypass?link=" + window.location.href).then(e => e.json()).then(e => {
        window.location.href = e.bypassed
    }).catch(e => alert("Error:", e))
}
async function rekonise() {
    fetch("https://ethos-testing.vercel.app/api/rekonise/bypass?link=" + window.location.href).then(e => e.json()).then(e => {
        window.location.href = e.bypassed
    }).catch(e => alert("Error:", e))
}
async function letsboost() {
    fetch("https://ethos-testing.vercel.app/api/letsboost/bypass?link=" + window.location.href).then(e => e.json()).then(e => {
        window.location.href = e.bypassed
    }).catch(e => alert("Error:", e))
}
async function boostink() {
    fetch("https://ethos-testing.vercel.app/api/boostink/bypass?link=" + window.location.href).then(e => e.json()).then(e => {
        window.location.href = e.bypassed
    }).catch(e => alert("Error:", e))
}
async function hydrogen() {
    function e(e) {
        return new Promise(t => setTimeout(t, e))
    }
    let t = new URL(window.location.href).searchParams.get("id"),
        a = await (await fetch("https://api-gateway.platoboost.com/v1/authenticators/2569/" + t)).json();
    if (a.key) return;
    let o = new URL(window.location.href).searchParams.get("tk");
    if (o) await e(5e3), await (await fetch(`https://api-gateway.platoboost.com/v1/sessions/auth/2569/${t}/${o}`, {
        method: "PUT"
    })).json().then(async e => {
        if (console.log(e), e.redirect.includes("https://gateway.platoboost.com/")) {
            window.location.reload();
            return
        }
        let t = await (await fetch(`https://bypass.rblx.workers.dev/delta-decrypt?url=${encodeURIComponent(e.redirect)}`)).text(),
            a = new URL(t).searchParams.get("r"),
            o = atob(a);
        window.location.assign(o)
    }).catch(e => {
        alert(e)
    });
    else {
        let n = a.captcha,
            s = await fetch("https://api-gateway.platoboost.com/v1/sessions/auth/2569/" + t, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    captcha: n ? await getTurnstileResponse() : "",
                    type: n ? "Turnstile" : ""
                })
            });
        s = await s.json(), await e(1e3);
        let i = await (await fetch(`https://bypass.rblx.workers.dev/delta-decrypt?url=${encodeURIComponent(s.redirect)}`)).text(),
            c = new URL(i).searchParams.get("r"),
            r = atob(c);
        window.location.assign(r)
    }
}
async function delta() {
    let e = new URL(window.location.href).searchParams.get("id"),
        t = await (await fetch("https://api-gateway.platoboost.com/v1/authenticators/8/" + e)).json();
    if (t.key) return;
    let a = new URL(window.location.href).searchParams.get("tk");
    if (a) await sleep(5e3), await (await fetch(`https://api-gateway.platoboost.com/v1/sessions/auth/8/${e}/${a}`, {
        method: "PUT"
    })).json().then(async e => {
        window.location.assign(e.redirect)
    }).catch(e => {
        alert(e)
    });
    else {
        let o = t.captcha,
            n = await fetch("https://api-gateway.platoboost.com/v1/sessions/auth/8/" + e, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    captcha: o ? await getTurnstileResponse() : "",
                    type: o ? "Turnstile" : ""
                })
            });
        n = await n.json(), await sleep(1e3);
        let s = await (await fetch(`https://bypass.rblx.workers.dev/delta-decrypt?url=${encodeURIComponent(n.redirect)}`)).text(),
            i = new URL(s).searchParams.get("r"),
            c = atob(i);
        window.location.assign(c)
    }
}
async function arceus() {
    try {
        await fetch(`https://spdmteam.com/api/keysystem?hwid=${new URL(window.location.href).searchParams.get("hwid")}&zone=Europe/Rome&advertiser=linkvertise`, {
            mode: "no-cors"
        });
        let e = 1;
        for (; e <= 3;) await linkvertiseSpoof(`https://spdmteam.com/api/keysystem?step=${e}&advertiser=linkvertise`), e++;
        window.location.assign("https://spdmteam.com/key-system-getkey")
    } catch (t) {
        alert(t)
    }
}
async function lvdl() {
    let e = new URL(window.location.href).searchParams.get("r");
    if (e) {
        adSpoof(atob(e), window.location.hostname);
        return
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
                captchaToken: await getTurnstileResponse(),
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
        alert(o)
    }
}

function sleep(e) {
    return new Promise(t => setTimeout(t, e))
}

function adSpoof(e, t) {
    return new Promise((a, o) => {
        GM_xmlhttpRequest({
            method: "GET",
            url: e,
            anonymous: !0,
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
            },
            onload: function(t) {
                window.location.href = e
            },
            onerror: function(e) {
                console.log(e)
            }
        })
    })
}

function linkvertiseSpoof(e) {
    return new Promise((t, a) => {
        GM.xmlHttpRequest({
            method: "GET",
            url: e,
            headers: {
                Referer: "https://linkvertise.com/"
            },
            onload: function(e) {
                t(e.responseText)
            },
            onerror: function(e) {
                a(e)
            }
        })
    })
}
async function getTurnstileResponse() {
    let e = "";
    for (;;) {
        try {
            if (e = turnstile.getResponse()) break
        } catch (t) {}
        await sleep(1)
    }
    return turnstile.getResponse()
}

function base64decode(e) {
    return atob(e = e.replace(/-/g, "+").replace(/_/g, "/"))
}
async function start() {
    switch (window.location.hostname) {
        case "mobile.codex.lol":
            await codex();
            break;
        case "hohohubv-ac90f67762c4.herokuapp.com":
            await hohohub();
            break;
        case "rekonise.com":
            await rekonise();
            break;
        case "letsboost.net":
            await letsboost();
            break;
        case "boost.ink":
            await boostink()
    }
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
        alert(e)
    });
    else if ("mboost.me" === window.location.hostname) try {
        let s = document.querySelector('script[id="__NEXT_DATA__"]');
        if (s) {
            let i = JSON.parse(s.textContent);
            i.props.pageProps.data.targeturl ? window.location.replace(i.props.pageProps.data.targeturl) : window.location.reload()
        } else window.location.reload()
    } catch (c) {
        alert(c)
    } else if ("leasurepartment.xyz" === window.location.hostname) {
        async function r(e) {
            return JSON.parse(atob(e))
        }
        async function l() {
            let e = await r(function e(t) {
                if (t = RegExp("[?&]" + encodeURIComponent(t) + "=([^&]*)").exec(location.search)) return decodeURIComponent(t[1])
            }("cc"));
            e && e.link ? window.location.replace(e.link) : window.location.reload()
        }
        l()
    } let p = window.location.href;
    p.includes("gateway.platoboost.com/a/2569") && hydrogen(), p.includes("gateway.platoboost.com/a/8") && delta(), p.includes("spdmteam.com/key-system-1") && arceus(), p.includes("sub2get.com/link?l=") && sub2get()
}(), lvdl(), start();
