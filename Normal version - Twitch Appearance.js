// > first version (normal, 0 scuff) code : https://pastebin.com/5CU5jYww
// second version (navigation on left, can be scuffy) preview: https://i.imgur.com/91YKkNd.png  code: https://pastebin.com/L55jz9sf
// third version (transparent chat, can also be scuffy) preview: https://imgur.com/a/reBRsI0 code: https://pastebin.com/5BUA86tc

// Last updated: October 24th 2021

// can change your own username color line 12
// added Coolhhwip's features: random color names; hide in-chat profile pictures, can still change to gaming account; other qol changes
// no longer need to find code to change something, settings menu line 6

// settings
var hideChatProfilePictures = true; // true/false to hide/show in-chat user profile pictures
var topBarStyle = true; // true - chat top bar floating style / false - normal chat top bar
var showThreeDots = false; // true - show three dots, which let you report a message, false - not
var userNameColor = "random"; // Define a specific color or leave as "random" for randomized username colors
var yourUsername = "Dopexz Ed" // required to set a custom color for your username, if it doesn't work you typed it wrong
var yourUsernameColor = "#1B76FF" // enter a color # code, or a word
var chatBackground = "#18181b"; // change color code/input color word/for image background: "url(https://i.imgur.com/YDFBYJU.png)"; SOME BACKGROUNDS https://imgur.com/a/AA3YNh5 BY maddy5502
var chatTopBarColor = "#18181b"; // chat's top bar color. When using an image chat background, I use "rgba(0,0,0,0.8)" for transparent top bar
var chatTextSize = "13px"; // chat text size (change only the number)
var chatTextColor = "#fff"; // chat text color (input a color # code, or a color (red, purple, blue..))
var topBarColor = "#18181b"; // change facebook's top bar color
var textFontFamily = "Roboto"; // change facebook's default font
var widthOfChat = "310px"; // the width of the chat (if stream has blackbars, adjust to hide them)
//


// ==UserScript==
// @name         FacebookGaming SlimChat + Twitch Appearance
// @namespace    http://tampermonkey.net/
// @version      0.26.3 (final?)
// @source       https://gitlab.com/RaptorPort/fbgaming-slimchat-tampermonkey
// @updateURL    https://pastebin.com/5CU5jYww
// @downloadURL  https://pastebin.com/5CU5jYww
// @description  Twitch appearance for Facebook chat using FacebookGaming SlimChat
// @author       SlimChat: RaptorPort // edited: dope // some features: Coolhhwip
// @match        https://*.facebook.com/*
// @icon         https://www.google.com/s2/favicons?domain=facebook.com
// ==/UserScript==

function cssChanges() {

    if (hideChatProfilePictures) {
     // hide in-chat profile pics
        addGlobalStyle('div[role="article"] > .nqmvxvec.s45kfl79.emlxlaya.bkmhp75w.spb7xbtv.a8c37x1j.fv0vnmcu.rs0gx3tq.l9j0dhe7  { display:none !important; }');
        addGlobalStyle('.nqmvxvec.s45kfl79.emlxlaya.bkmhp75w.spb7xbtv.a8c37x1j.fv0vnmcu.rs0gx3tq.l9j0dhe7 {position: fixed;z-index: 100;}');
        addGlobalStyle('.o6r2urh6.l9j0dhe7.b3i9ofy5.e72ty7fz.qlfml3jp.inkptoze.qmr60zad.rt8b4zig.n8ej3o3l.agehan2d.sk4xxmp2.j83agx80.bkfpd7mw {padding-left: 45px; background:rgba(255,255,255,0.03);}');
        addGlobalStyle('.q9uorilb.l9j0dhe7.pzggbiyp.du4w35lb {transform:scale(0.8);}');
    } else {
        //addGlobalStyle('div[role="article"] > .nqmvxvec.s45kfl79.emlxlaya.bkmhp75w.spb7xbtv.a8c37x1j.fv0vnmcu.rs0gx3tq.l9j0dhe7  { }');
        addGlobalStyle('.o6r2urh6.l9j0dhe7.b3i9ofy5.e72ty7fz.qlfml3jp.inkptoze.qmr60zad.rt8b4zig.n8ej3o3l.agehan2d.sk4xxmp2.j83agx80.bkfpd7mw {background:rgba(255,255,255,0.03);}');
    }
    if (topBarStyle) {
        // top bar, delete transparent and type in a color/# code
        // transparent works when you want your whole image to be displayed as chat background so there's no solid colors
        addGlobalStyle('.cwj9ozl2.ni9yibek.hv4rvrfc.dati1w0a.discj3wi {background: var(--topbarcolor) !important;border-bottom: 3px solid rgba(255,255,255,0.04);position: absolute;height: 60px;width: 89%;border-radius: 3px;margin-left: 4%;margin-top: 10px;z-index: 100;box-shadow: 0px 2px 9px 2px rgb(0 0 0 / 75%);}');
    } else {
        addGlobalStyle('.cwj9ozl2.ni9yibek.hv4rvrfc.dati1w0a.discj3wi {background: var(--topbarcolor) !important;border-bottom: 3px solid rgba(255,255,255,0.04);height: 60px;}');
        addGlobalStyle('.discj3wi {padding-bottom: 7px;}');
    }


    addGlobalStyle('.nc684nl6 a:hover {text-decoration:none; opacity: .5; transition: .5s;}');

    // change chat messages text size
    addGlobalStyle('.jq4qci2q {font-size: var(--textsize) !important; font-family: var(--fontfamily) !important;}');

    // change chat's messages text color. Replace #fff with your preferred color that goes well with your background
    addGlobalStyle('.oo9gr5id { color: var(--textcolor); line-height: 18px;}');

    // make picture as chat background
    // or remove url() and type in a color to make the chat whatever color you want
    // 1. you need a picture that looks the size of chat (mine one looks like this: https://i.imgur.com/YDFBYJU.png) I used Photoshop to crop the image into this. You can use various tools too.
    // 2. replace https://i.imgur.com/YDFBYJU.png with your image url
    // 3. background-size: 400px 900px; 400px means width 900px means height: adjust this until your image is properly displayed (so it's not stretched)
    // uncomment below line (remove //) to make image as your chat background //
    addGlobalStyle('.j83agx80.cbu4d94t.bkyfam09.ni8dbmo4.stjgntxs {background: var(--chatbg) no-repeat center; background-size: 410px 910px;}');
    // change facebook's top navigation bar color
    addGlobalStyle('.thodolrn.ojvp67qx.taijpn5t.buofh1pr.j83agx80.aovydwv3.bqdfd6uv {background: var(--topbarcolor);}');

    if (showThreeDots != true) {
        // hides the "Hide this message" dialogue, three dots
        addGlobalStyle('.pgctjfs5 { display: none !important; }');
    }

    // the width of the chat
    addGlobalStyle('.o36gj0jk {width: var(--chatwidth) !important;}');


    // Unless you know what you're doing, don't change anything below

    //pinned comment
    addGlobalStyle('.l6v480f0 {border:0;}');
    addGlobalStyle('.aov4n071.l6v480f0 { margin-top: 8px !important; background: rgba(255,255,255,0.03); bottom: 0 !important; margin: 0; font-weight: bold; z-index: 102; padding: 5px; width: 93%; border-radius: 3px; margin-left: 3%; margin-bottom:3px;}');

    //comment box
    addGlobalStyle('.d1544ag0 { padding-right: 5px !important; }');
    addGlobalStyle('.tw6a2znq { padding-left: 9px !important; }');
    addGlobalStyle('.cxgpxx05 { padding-top: 2px !important; }');
    addGlobalStyle('.sj5x9vvc { padding-bottom: 0px !important; }');
     // changes to message layout / spacing between messages
    addGlobalStyle('.hv4rvrfc { padding-right: 5px !important; }');
    addGlobalStyle('.dati1w0a { padding-left: 6px !important; }');
    addGlobalStyle('.ecm0bbzt { padding-top: 5px !important; }');
    addGlobalStyle('.e5nlhep0 { padding-bottom: 0 !important; }');
    addGlobalStyle('.bvz0fpym { max-width: calc(100%) !important; }');
    // trim down the box around replies
    addGlobalStyle('.pybr56ya { padding-top: 4px !important; }');
    addGlobalStyle('.bq3qbged { padding-bottom: 30px !important; }');

    //hide the share button
    addGlobalStyle('.oajrlxb2.gs1a9yip.g5ia77u1.est2fu8x.i2z0utgf.nalm63nx.rbyq7rg5.goun2846.ccm00jje.s44p3ltw.mk2mc5f4.frvqaej8.ed0hlay0.afxsp9o4.jcgfde61.rq0escxv.nhd2j8a9.pq6dq46d.mg4g778l.btwxx1t3.pfnyh3mw.p7hjln8o.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.tgvbjcpo.hpfvmrgz.jb3vyjys.rz4wbd8a.qt6c0cv9.a8nywdso.l9j0dhe7.i1ao9s8h.esuyzwwr.f1sip0of.du4w35lb.lzcic4wl.abiwlrkh.p8dawk7l.s45kfl79.emlxlaya.bkmhp75w.spb7xbtv.kn9t4qvh.ni8dbmo4.stjgntxs.bxs1uw09 { display: none !important; }');

    //move reactions to the top right of the message
    addGlobalStyle('._6cuq { top: -2px !important; }');
    addGlobalStyle('._6cuq { right: 0px !important; }');
    addGlobalStyle('.btwxx1t3.nc684nl6.bp9cbjyn { margin-right: 5px !important; }');

    // moves badges infront of usernames
    addGlobalStyle('.nc684nl6{  }'); // User name
    addGlobalStyle('.btwxx1t3.nc684nl6.bp9cbjyn { direction: rtl !important; padding-right: 0px !important; }'); // User name and badge outer div
    addGlobalStyle('.nc684nl6 > .kkf49tns  { margin-left: -4px !important; }'); // Move badges left
    addGlobalStyle('.btwxx1t3.nc684nl6.bp9cbjyn:before { content: ": "; }'); // User name

     // username and comment on same line and wrap to next line if is too long
    addGlobalStyle('.btw6a2znq.sj5x9vvc.d1544ag0.cxgpxx05 { display: inline-flex !important;  }'); // Username + Badge + Text
    addGlobalStyle('.btwxx1t3.nc684nl6.bp9cbjyn { display: inline-flex !important; float: left !important; }'); // Username and badge
    addGlobalStyle('.ecm0bbzt.e5nlhep0.a8c37x1j { display: inline !important; overflow: hidden !important; }'); // Text
    addGlobalStyle('.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.c1et5uql { padding-top: 5px !important; }'); // Ensure text is horizontally aligned

    // custom small black scrollbar
    var ss = document.styleSheets[0];
    ss.insertRule('::-webkit-scrollbar { width: 4px; height: 3px; background: rgba(255,255,255,0.03);}', 0);
    ss.insertRule('::-webkit-scrollbar-thumb { height: 50px; background-color: rgba(255,255,255,0.06); border-radius: 3px;}', 0);

    // make usernames bold
    addGlobalStyle('.lrazzd5p  { font-weight: bold !important; }');
    addGlobalStyle('.lrazzd5p:hover { text-transform: none !important; }');

    // hides the "Replying to username" above replies - the original message of the thread will still be displayed
    addGlobalStyle('.rq0escxv.l9j0dhe7.du4w35lb.j83agx80.pfnyh3mw.jifvfom9.bp9cbjyn.owycx6da.btwxx1t3.d1544ag0.tw6a2znq.jb3vyjys.nkwizq5d.roh60bw9.tvmbv18p.hop8lmos { display: none !important; }');


    addGlobalStyle('.qmr60zad { border-radius: 0px !important; }');

    addGlobalStyle('.e72ty7fz.qlfml3jp.inkptoze.qmr60zad.j83agx80.cbu4d94t.ni8dbmo4.stjgntxs.b3i9ofy5 { padding-top: 7px !important; padding-bottom: 7px !important; background:rgba(255,255,255,0.03) !important; border-left: 3px solid rgb(255, 215, 0); border-radius: 3px !important;}'); // stars
    addGlobalStyle('.qc409kkj {background:#1f1f23 !important; border-left: 3px solid rgb(0, 231, 0);}'); // gifts

    addGlobalStyle('.g6srhlxm.e72ty7fz.qlfml3jp.inkptoze.qmr60zad.pybr56ya.d1544ag0.tw6a2znq.bq3qbged {background: transparent !important;}'); // quote style
    addGlobalStyle('.d2edcug0.hpfvmrgz.qv66sw1b.c1et5uql.lr9zc1uh.a8c37x1j.keod5gw0.nxhoafnm.aigsh9s9.d9wwppkn.fe6kdd0r.mau55g9w.c8b282yb.iv3no6db.e9vueds3.j5wam9gi.lrazzd5p.m9osqain > .a8c37x1j.ni8dbmo4.stjgntxs.l9j0dhe7.ojkyduve:before { content: "Replying to: "; };');
    addGlobalStyle('.a8c37x1j.ni8dbmo4.stjgntxs.l9j0dhe7.ojkyduve { color: #adadb8; font-weight: normal !important; font-size: 11px !important; }');

    addGlobalStyle('.a8c37x1j.ni8dbmo4.stjgntxs.l9j0dhe7.ojkyduve { padding-left: 1px !important; padding-top: 3px !important; margin-bottom: -2px !important; }');

    addGlobalStyle('.oajrlxb2.g5ia77u1.qu0x051f.esr5mh6w.e9989ue4.r7d6kgcz.rq0escxv.nhd2j8a9.q9uorilb.p7hjln8o.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.jb3vyjys.rz4wbd8a.qt6c0cv9.a8nywdso.i1ao9s8h.esuyzwwr.f1sip0of.lzcic4wl.m9osqain.gpro0wi8.n3ffmt46.l9j0dhe7 {font-size: 11px;background: url(https://i.imgur.com/zpwfoHJ.png) no-repeat;border-radius: 3px;padding: 3px;}');
                   // reply button style

    addGlobalStyle('.bp9cbjyn.jk6sbkaj.kdgqqoy6.ihh4hy1g.qttc61fc.rq0escxv.pq6dq46d.datstx6m.jb3vyjys.p8fzw8mz.qt6c0cv9.pcp91wgn.afxn4irw.m8weaby5.ee40wjg4.q1gqmpn5.jbu8tgem.l44iypv3 {display: none;}'); // hides *LIVE* top left

    ///VOD VIEWING
    addGlobalStyle('.cwj9ozl2.j83agx80.cbu4d94t.buofh1pr.ni8dbmo4.stjgntxs.du4w35lb {background: transparent !important;}'); // chat color
    addGlobalStyle('.pfnyh3mw.km676qkl.discj3wi.hv4rvrfc.ihqw7lf3.dati1w0a.du4w35lb.cwj9ozl2.j83agx80.btwxx1t3.lzcic4wl { background: transparent;'); // bottom bar color

    // other
    addGlobalStyle('body {font-family:var(--fontfamily) !important;}');

    // Like + Reply + See Thread + Time formatting / Show on hover
    addGlobalStyle('.ozuftl9m { margin-left: 9px !important; margin-bottom: 5px !important; margin-top: 1px !important;}');
    addGlobalStyle('._6coi.oygrvhab.ozuftl9m.l66bhrea.linoseic { display: none !important;}');
    addGlobalStyle('.rj1gh0hx:hover ._6coi.oygrvhab.ozuftl9m.l66bhrea.linoseic { display: list-item !important;}');
    addGlobalStyle('._6coi.oygrvhab.ozuftl9m.l66bhrea.linoseic > li { font-size: 11px !important; padding-right: 14px !important;}');

    addGlobalStyle('.linoseic { padding-top: 0px !important; min-height: 14px !important; }');
    addGlobalStyle('.lrazzd5p a:hover { text-transform: none !important; ');
    addGlobalStyle('.k4urcfbm.n1l5q3vz {display:none;}');
    addGlobalStyle('.ns4ygwem { top: 0px !important; right: 0px !important; opacity: .5 !important; }');
    addGlobalStyle('.ns4ygwem:hover { opacity: 1 !important; }');
    addGlobalStyle('.ggysqto6.oo9gr5id {display:none !important;}');
    addGlobalStyle('.to382e16 {max-width: 25px !important; }');
    addGlobalStyle('.dhix69tm {margin-left: 7px;}');
    addGlobalStyle('.lw6bsss4 {width:32px !important; height:32px !important;}');
    addGlobalStyle('.oajrlxb2.gs1a9yip.g5ia77u1.mtkw9kbi.tlpljxtp.qensuy8j.ppp5ayq2.goun2846.ccm00jje.s44p3ltw.mk2mc5f4.rt8b4zig.n8ej3o3l.agehan2d.sk4xxmp2.rq0escxv.bnpdmtie.pq6dq46d.mg4g778l.btwxx1t3.pfnyh3mw.p7hjln8o.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.tgvbjcpo.hpfvmrgz.jb3vyjys.rz4wbd8a.qt6c0cv9.a8nywdso.l9j0dhe7.i1ao9s8h.esuyzwwr.f1sip0of.du4w35lb.lzcic4wl.n00je7tq.arfg74bv.qs9ysxi8.k77z8yql.abiwlrkh.p8dawk7l.ni8dbmo4.stjgntxs.tm8avpzi {width:32px !important; height:32px !important; left:3%;}');
    addGlobalStyle('.e5nlhep0.cxgpxx05 {display:none !important;}');
    addGlobalStyle('.bp9cbjyn.m9osqain.j83agx80.jq4qci2q.bkfpd7mw.a3bd9o3v.jktsbyx5 {display:none !important;}');
    addGlobalStyle('.tw6a2znq.sj5x9vvc.d1544ag0.cxgpxx05 {background: transparent !important;}');
    addGlobalStyle('.q9uorilb.bvz0fpym.c1et5uql.sf5mxxl7 {background: transparent !important;}');
    addGlobalStyle('.q9uorilb.bvz0fpym.c1et5uql.sf5mxxl7 {width: 100%;}')
    addGlobalStyle('.b3i9ofy5.e72ty7fz.qlfml3jp.inkptoze.qmr60zad.rq0escxv.oo9gr5id.q9uorilb.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.d2edcug0.jm1wdb64.l9j0dhe7.l3itjdph.qv66sw1b {background: transparent !important;}');
    addGlobalStyle('.tdjehn4e {background: transparent;}');
    addGlobalStyle('.rs0gx3tq.oi9244e8.buofh1pr {height:60px;}');
    addGlobalStyle('.oi9244e8 {margin-right:0;}');
    addGlobalStyle('.q66pz984 {color: #fff !important; }');
    addGlobalStyle('.discj3wi.dati1w0a.qt6c0cv9.hv4rvrfc.pfnyh3mw.cbu4d94t.j83agx80 {display: none !important;}');
    addGlobalStyle('.oo1teu6h {background:rgba(255,255,255,0.03) !important; border-left: 3px solid rgb(250, 41, 41);}');
    addGlobalStyle('.oajrlxb2.g5ia77u1.qu0x051f.esr5mh6w.e9989ue4.r7d6kgcz.rq0escxv.nhd2j8a9.q9uorilb.p7hjln8o.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.jb3vyjys.rz4wbd8a.qt6c0cv9.a8nywdso.i1ao9s8h.esuyzwwr.f1sip0of.lzcic4wl.m9osqain.gpro0wi8.n3ffmt46.l9j0dhe7:hover {text-decoration: none !important; opacity: .5; transition:.5s;}');
    addGlobalStyle('._71pn ._6cok {display: none;}');
    addGlobalStyle('.guqryoqb { max-width: 100%;}');
    addGlobalStyle('.l2t8npo1 {margin-left: 5px;}');
    addGlobalStyle('.bp9cbjyn.j83agx80.pfnyh3mw.i1fnvgqd.kvgmc6g5.wkznzc2l.oygrvhab.dhix69tm {display: none;}');
    addGlobalStyle('.discj3wi {padding-top:7px;}');
    addGlobalStyle('.qmr60zad {border-bottom-left-radius: 3px;}'); // unrounding comment box
    addGlobalStyle('.qlfml3jp {border-top-right-radius: 3px;}');
    addGlobalStyle('.inkptoze {border-bottom-right-radius: 3px;}');
    addGlobalStyle('.e72ty7fz {border-top-left-radius: 3px;}');
    addGlobalStyle('.mdldhsdk {margin-top: 7px;');
    addGlobalStyle('.rs0gx3tq {margin-left: 7px;}');
    addGlobalStyle('a:hover {text-decoration:none !important; opacity: .5; transition:.5s;}');
    addGlobalStyle('.tmxdrx1h {display:none !important;}');
    addGlobalStyle('.ols5edhi {border-radius: 3px !important;}');
    addGlobalStyle('.gob819ct {border-bottom-left-radius: 3px;}');
    addGlobalStyle('.gmcszhul {border-radius: 3px !important; background: rgba(255,255,255,0.03);}');
    addGlobalStyle('.w0hvl6rk {margin-bottom: 0px; !important}');
    addGlobalStyle('.bp9cbjyn.jeutjz8y.j83agx80.btwxx1t3 {height: 60px !important; }');
    addGlobalStyle('.f10w8fjw.f9o22wc5.oygrvhab.ad2k81qe.kvgmc6g5.taijpn5t.j83agx80 {height:10px !important; margin-bottom: 10px;}');
    addGlobalStyle('.q676j6op {width: 35px;}');
    addGlobalStyle('.thwo4zme {margin-top: 10px;}');
    addGlobalStyle('.rq0escxv.l9j0dhe7.du4w35lb.j83agx80.pfnyh3mw.i1fnvgqd.bp9cbjyn.owycx6da.btwxx1t3.hv4rvrfc.dati1w0a.ihqw7lf3.discj3wi.b5q2rw42.lq239pai.mysgfdmx.hddg9phg {background: #242526;}');
    addGlobalStyle('.rj1gh0hx.buofh1pr.ni8dbmo4.stjgntxs.rz4wbd8a {border-radius: 3px;}');
    addGlobalStyle('._71pn ._18vj._18vj {background:;}');
    addGlobalStyle('.b3i9ofy5.e72ty7fz.qlfml3jp.inkptoze.qmr60zad.rq0escxv.oo9gr5id.q9uorilb.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.d2edcug0.jm1wdb64.l9j0dhe7.l3itjdph.qv66sw1b { width: 100% !important; }'); // Ensures comment container is 100% width
    // hides Follow button that appears next to some users
    addGlobalStyle('.d2edcug0.hpfvmrgz.qv66sw1b.c1et5uql.lr9zc1uh.a8c37x1j.keod5gw0.nxhoafnm.aigsh9s9.d9wwppkn.fe6kdd0r.mau55g9w.c8b282yb.mdeji52x.e9vueds3.j5wam9gi.lrazzd5p.q66pz984 {display: none;}');
    addGlobalStyle('.rfua0xdk.pmk7jnqg.stjgntxs.ni8dbmo4.ay7djpcl.q45zohi1 {display:none;}');
    addGlobalStyle('.m9osqain.nhd2j8a9.q9uorilb.n3ffmt46.l9j0dhe7.gpro0wi8:hover {text-decoration:none; opacity:.5; transition:.5s;}');
    addGlobalStyle('.rq0escxv.l9j0dhe7.du4w35lb.hybvsw6c.io0zqebd.m5lcvass.fbipl8qg.nwvqtn77.k4urcfbm.ni8dbmo4.stjgntxs.kmp5kqmu {background: #18181b !important;}');
    addGlobalStyle('.roauwr9f.n7fi1qx3.byvelhso.hzruof5a.pmk7jnqg.j9ispegn.kr520xx4 {background: #181818;}');
    addGlobalStyle('.roauwr9f {--T68779821: none;border-bottom: 3px solid rgba(255,255,255,0.06);box-shadow: none;');
    addGlobalStyle('.oajrlxb2.bp9cbjyn.cwj9ozl2.mtkw9kbi.tlpljxtp.qensuy8j.ppp5ayq2.goun2846.ccm00jje.s44p3ltw.mk2mc5f4.rt8b4zig.n8ej3o3l.agehan2d.sk4xxmp2.rq0escxv.nhd2j8a9.pq6dq46d.mg4g778l.btwxx1t3.pfnyh3mw.p7hjln8o.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.tgvbjcpo.hpfvmrgz.cxgpxx05.d1544ag0.sj5x9vvc.tw6a2znq.l9j0dhe7.i1ao9s8h.esuyzwwr.f1sip0of.du4w35lb.lzcic4wl.br7hx15l.h2jyy9rg.n3ddgdk9.owxd89k7.abiwlrkh.p8dawk7l.au4pd6zd.jbw79k83.r44wdlyt.lijpglvz.q66pz984.nysusuju {box-shadow:0px 1px 11px 2px rgb(0 0 0 / 55%);background: rgba(0,0,0,0.6) !important;padding: 9px !important;border-radius: 3px;font-weight: bold;display:block; width:95%; left:3%;}');
    addGlobalStyle('.fop5sh7t.cgat1ltu.tv7at329.j83agx80.c4hnarmi.bp9cbjyn { margin-right: 40px; }');
    addGlobalStyle('.rq0escxv.l9j0dhe7.du4w35lb.j83agx80.pfnyh3mw.jifvfom9.bp9cbjyn.owycx6da.btwxx1t3.jb3vyjys.nkwizq5d.ggphbty4.scwd0bx6.hop8lmos { position: fixed; right: 2%; z-index: 102; margin-top:1px;}');
    addGlobalStyle('.rbyq7rg5 {border:0 !important;} ');

    addGlobalStyle('.ox23h4wi.lthxh50u.pmk7jnqg { top: 0px !important; right: 0px !important; }'); // reactions for stars - was still showing at the bottom and being clipped






}

var root = document.querySelector(':root');
var rootStyles = getComputedStyle(root);
var deg= rootStyles.getPropertyValue('--chatbg');
root.style.setProperty('--chatbg', chatBackground);
var txtsz= rootStyles.getPropertyValue('--textsize');
root.style.setProperty('--textsize', chatTextSize);
var txtclr= rootStyles.getPropertyValue('--textcolor');
root.style.setProperty('--textcolor', chatTextColor);
var topbarclr= rootStyles.getPropertyValue('--topbarcolor');
root.style.setProperty('--topbarcolor', topBarColor);
var txtfontfamily= rootStyles.getPropertyValue('--fontfamily');
root.style.setProperty('--fontfamily', textFontFamily);
var chatwidthx= rootStyles.getPropertyValue('--chatwidth');
root.style.setProperty('--chatwidth', widthOfChat);
var chattopbarcolor= rootStyles.getPropertyValue('--topbarcolo');
root.style.setProperty('--topbarcolor', chatTopBarColor);

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

function initChatBoxFinder() {
    var sideBar = document.getElementsByClassName("hybvsw6c j83agx80 pfnyh3mw dp1hu0rb l9j0dhe7 o36gj0jk")[0];
    // will trigger when a clicking in the chat area -> check for a new chatbox
    document.addEventListener('click', function(e) {
        setTimeout(function(){
            var targetElement = event.target
            console.log(targetElement)
            var chatElements = document.getElementsByClassName("rq0escxv j83agx80 cbu4d94t eg9m0zos fh5enmmv k4urcfbm");
            for (let i = 0; i < chatElements.length; i++) {
                if (chatElements[i] != undefined && chatElements[i].getAttribute('chatObserver') != 'true') {
                    initChatObserver(chatElements[i]);
                }
            }
        }, 2000);
    });
}

function initChatObserver(chatElement) {
    console.log("Ataching observer to chatbox");
    const options = {
        attributes : true,
        childList : true,
        subTree: true,
        characterData: true,
        attributeOldValue: false,
        characterDataOldValue: false
    };
    var observer = new MutationObserver(processDomChanges);

    observer.observe(chatElement, options);
    chatElement.setAttribute('chatObserver', 'true');

     // process all current messages once
    var messageList = chatElement.childNodes;
    for (let i = messageList.length-1; i >= 0; i--) {
        colorUserNames(messageList[i]);
    }
}

const processDomChanges = function (mutationRecords, observer) {
    mutationRecords.forEach(function (mutation) {
        mutation.addedNodes.forEach(function (node) {
            colorUserNames(node.firstChild);
        });
    });
}

// You can enter your perferred username color below if you like
// Map is ensuring the same user's retain the same username color after it is generated
var userNameColorMap = new Map([
    [yourUsername,yourUsernameColor]
]);

// Randomizes user name colors
function colorUserNames(msgElement) {
    var usernameElement = msgElement.getElementsByClassName("lrazzd5p")[0];
    if (usernameElement != undefined) {
        if(userNameColor != undefined && userNameColor != "random") {
            usernameElement.style.color = userNameColor;
        } else {
            if(userNameColorMap.has(usernameElement.textContent)){
                usernameElement.style.color = userNameColorMap.get(usernameElement.textContent);
            } else {
                var randomGeneratedColor = getRandomColor();
                usernameElement.style.color = randomGeneratedColor;
                userNameColorMap.set(usernameElement.textContent, randomGeneratedColor);
            }
        }
    }
}


// Random Vibrant Colors
function getRandomColor(){
  return "hsl(" + 360 * Math.random() + ',' + (50 + 50 * Math.random()) + '%,' + (40 + 40 * Math.random()) + '%)';
}

(function() {
    'use strict';
    console.log("FacebookGaming SlimChat is running and checking for URLs ...")
    // facebook uses AVAX, which changes the contents of the page via a script instead of reloading it
    // to get around this the script is active on all of facebook and will poll every 5 seconds for url changes
    var fireOnHashChangesToo = true;
    var pageURLCheckTimer = setInterval (
    function () {
        if ( this.lastPathStr !== location.pathname || this.lastQueryStr !== location.search || (fireOnHashChangesToo && this.lastHashStr !== location.hash)) {
            this.lastPathStr = location.pathname;
            this.lastQueryStr = location.search;
            this.lastHashStr = location.hash;
            // check for livestream URL
            var found = location.pathname.match(".*(\/videos\/[^\/\r\n]*|live\/producer\/dashboard\/[^\/\r\n]*\/COMMENTS)")
            if (found) {
                console.log("Applying FB-Gaming SlimChat changes to " + location.hostname + location.pathname)
                cssChanges();
                initChatObserver(document.getElementsByClassName("rq0escxv j83agx80 cbu4d94t eg9m0zos fh5enmmv k4urcfbm")[0]);
                initChatBoxFinder();
            } else {
                //console.log("Leaving FB-Gaming livestream chat -> stopping SlimChat" + location.hostname + location.pathname)
            }
        }
    }
    , 5000
);
})();