"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Provider = exports.International = exports.Canada = exports.US = exports.Carrier = void 0;
var Carrier;
(function (Carrier) {
    Carrier["usCellular"] = "%s@email.uscc.net";
    Carrier["sprint"] = "%s@messaging.sprintpcs.com";
    Carrier["cellOne"] = "%s@mobile.celloneusa.com";
    Carrier["telUs"] = "%s@msg.telus.com";
    Carrier["acWireless"] = "%s@paging.acswireless.com";
    Carrier["rogers"] = "%s@pcs.rogers.com";
    Carrier["cricket"] = "%s@mms.cricketwireless.net";
    Carrier["nextTech"] = "%s@sms.ntwls.net";
    Carrier["tMobile"] = "%s@tmomail.net";
    Carrier["att"] = "%s@txt.att.net";
    Carrier["westernWireless"] = "%s@cellularonewest.com";
    Carrier["freeMobile"] = "%s@txt.freedommobile.ca";
    Carrier["verizon"] = "%s@vtext.com";
    Carrier["republic"] = "%s@text.republicwireless.com";
    Carrier["blueSky"] = "%s@blueskyfrog.com";
    Carrier["bplMobile"] = "%s@bplmobile.com";
    Carrier["clearDigital"] = "%s@clearlydigital.com";
    Carrier["comcast"] = "%s@comcastpcs.textmsg.com";
    Carrier["corrWireless"] = "%s@corrwireless.net";
    Carrier["cellularSouth"] = "%s@csouth1.com";
    Carrier["centennialWireless"] = "%s@cwemail.com";
    Carrier["carolinaWireless"] = "%s@cwwsms.com";
    Carrier["southWesternBell"] = "%s@email.swbw.com";
    Carrier["fido"] = "%s@fido.ca";
    Carrier["ideaCellular"] = "%s@ideacellular.net";
    Carrier["indianaPaging"] = "%s@inlandlink.com";
    Carrier["ivcCellular"] = "%s@ivctext.com";
    Carrier["allTel"] = "%s@message.alltel.com";
    Carrier["centuryTel"] = "%s@messaging.centurytel.net";
    Carrier["dobson"] = "%s@mobile.dobson.net";
    Carrier["sureWest"] = "%s@mobile.surewest.com";
    Carrier["mobileComm"] = "%s@mobilecomm.net";
    Carrier["clearNet"] = "%s@msg.clearnet.com";
    Carrier["koodooMobile"] = "%s@msg.koodomobile.com";
    Carrier["metroCall2"] = "%s@my2way.com";
    Carrier["boostMobile"] = "%s@myboostmobile.com";
    Carrier["onlineBeep"] = "%s@onlinebeep.net";
    Carrier["metroCall"] = "%s@page.metrocall.com";
    Carrier["mci"] = "%s@pagemci.com";
    Carrier["americaTech"] = "%s@paging.acswireless.com";
    Carrier["pcsOne"] = "%s@pcsone.net";
    Carrier["qWest"] = "%s@qwestmp.com";
    Carrier["satellink"] = "%s@satellink.net";
    Carrier["threeRiver"] = "%s@sms.3rivers.net";
    Carrier["blueCell"] = "%s@sms.bluecell.com";
    Carrier["edgeWireless"] = "%s@sms.edgewireless.com";
    Carrier["goldenTelecom"] = "%s@sms.goldentele.com";
    Carrier["psCellular"] = "%s@sms.pscel.com";
    Carrier["westCentral"] = "%s@sms.wcc.net";
    Carrier["houstonCellular"] = "%s@text.houstoncellular.net";
    Carrier["mts"] = "%s@text.mtsmobility.com";
    Carrier["sunCom"] = "%s@tms.suncom.com";
    Carrier["bellMobile"] = "%s@txt.bell.ca";
    Carrier["northEnterMobility"] = "%s@txt.northerntelmobility.com";
    Carrier["usWest"] = "%s@uswestdatamail.com";
    Carrier["uniCell"] = "%s@utext.com";
    Carrier["virginMobileCanada"] = "%s@vmobile.ca";
    Carrier["virginMobile"] = "%s@vmobl.com";
    Carrier["airTel"] = "%s@airtelkol.com";
    Carrier["delhiAitTel"] = "%s@airtelmail.com";
    Carrier["tsWireless"] = "%s@alphame.com";
    Carrier["blueWin"] = "%s@bluewin.ch";
    Carrier["mumbaiBplMobile"] = "%s@bplmobile.com";
    Carrier["vodafoneC"] = "%s@c.vodafone.ne.jp";
    Carrier["vodafoneH"] = "%s@h.vodafone.ne.jp";
    Carrier["vodafoneT"] = "%s@t.vodafone.ne.jp";
    Carrier["celForce"] = "%s@celforce.com";
    Carrier["moviStar"] = "%s@correo.movistar.net";
    Carrier["delhiHutch"] = "%s@delhi.hutch.co.in";
    Carrier["dgTextJamaican"] = "%s@digitextjm.com";
    Carrier["jsmTel"] = "%s@e-page.net";
    Carrier["escoTel"] = "%s@escotelmobile.com";
    Carrier["sunriseCom"] = "%s@freesurf.ch";
    Carrier["teliaDenmark"] = "%s@gsm1800.telia.dk";
    Carrier["iteCell"] = "%s@itelcel.com";
    Carrier["mobileOne"] = "%s@m1.com.sg";
    Carrier["mOneBermuda"] = "%s@ml.bm";
    Carrier["o2mMail"] = "%s@mmail.co.uk";
    Carrier["mobilePost"] = "%s@mobilpost.no";
    Carrier["mobiStar"] = "%s@mobistar.be";
    Carrier["mobTel"] = "%s@mobtel.co.yu";
    Carrier["tMoviStar"] = "%s@movistar.net";
    Carrier["nextTelMexico"] = "%s@msgnextel.com.mx";
    Carrier["globalStar"] = "%s@msg.globalstarusa.com";
    Carrier["iridium"] = "%s@msg.iridium.com";
    Carrier["oskar"] = "%s@mujoskar.cz";
    Carrier["meteor"] = "%s@mymeteor.ie";
    Carrier["smartTelecom"] = "%s@mysmart.mymobile.ph";
    Carrier["mySunrise"] = "%s@mysunrise.ch";
    Carrier["sunriseMessage"] = "%s@swmsg.com";
    Carrier["o2"] = "%s@o2.co.uk";
    Carrier["o2Mail"] = "%s@o2imail.co.uk";
    Carrier["oneConnect"] = "%s@onemail.at";
    Carrier["optsMobile"] = "%s@optusmobile.com.au";
    Carrier["mobileFon"] = "%s@page.mobilfone.com";
    Carrier["southErlinc"] = "%s@page.southernlinc.com";
    Carrier["teleTouch"] = "%s@pageme.teletouch.com";
    Carrier["vesSocle"] = "%s@pager.irkutsk.ru";
    Carrier["nTele"] = "%s@pcs.ntelos.com";
    Carrier["rek2"] = "%s@rek2.com.mx";
    Carrier["chennaiCellular"] = "%s@rpgmail.net";
    Carrier["safariCom"] = "%s@safaricomsms.com";
    Carrier["setelIndoGsm"] = "%s@satelindogsm.com";
    Carrier["scs900"] = "%s@scs-900.ru";
    Carrier["sfrFrance"] = "%s@sfr.fr";
    Carrier["mobileTelTanzania"] = "%s@sms.co.tz";
    Carrier["comViq"] = "%s@sms.comviq.se";
    Carrier["emt"] = "%s@sms.emt.ee";
    Carrier["goldenTele"] = "%s@sms.goldentele.com";
    Carrier["luxGsm"] = "%s@sms.luxgsm.lu";
    Carrier["netCom"] = "%s@sms.netcom.no";
    Carrier["primeTel"] = "%s@sms.primtel.ru";
    Carrier["tMobileAustria"] = "%s@sms.t-mobile.at";
    Carrier["tele2Lv"] = "%s@sms.tele2.lv";
    Carrier["umc"] = "%s@sms.umc.com.ua";
    Carrier["uralTel"] = "%s@sms.uraltel.ru";
    Carrier["vodafoneItaly"] = "%s@sms.vodafone.it";
    Carrier["lmt"] = "%s@smsmail.lmt.lv";
    Carrier["tMobileGermany"] = "%s@t-d1-sms.de";
    Carrier["dtMobile"] = "%s@t-mobile-sms.de";
    Carrier["tMobileUk"] = "%s@t-mobile.uk.net";
    Carrier["simpleFreedom"] = "%s@text.simplefreedom.net";
    Carrier["tim"] = "%s@timnet.com";
    Carrier["vodafone"] = "%s@vodafone.net";
    Carrier["wynTell"] = "%s@wyndtell.com";
    Carrier["projectFi"] = "%s@msg.fi.google.com";
})(Carrier || (exports.Carrier = Carrier = {}));
exports.US = [
    '%s@email.uscc.net',
    '%s@message.alltel.com',
    '%s@messaging.sprintpcs.com',
    '%s@mobile.celloneusa.com',
    '%s@msg.telus.com',
    '%s@paging.acswireless.com',
    '%s@pcs.rogers.com',
    '%s@qwestmp.com',
    '%s@sms.ntwls.net',
    '%s@tmomail.net',
    '%s@txt.att.net',
    '%s@txt.windmobile.ca',
    '%s@vtext.com',
    '%s@text.republicwireless.com',
    '%s@msg.fi.google.com',
];
exports.Canada = [
    '%s@blueskyfrog.com',
    '%s@bplmobile.com',
    '%s@cellularonewest.com',
    '%s@clearlydigital.com',
    '%s@comcastpcs.textmsg.com',
    '%s@corrwireless.net',
    '%s@csouth1.com',
    '%s@cwemail.com',
    '%s@cwwsms.com',
    '%s@email.swbw.com',
    '%s@email.uscc.net',
    '%s@fido.ca',
    '%s@ideacellular.net',
    '%s@inlandlink.com',
    '%s@ivctext.com',
    '%s@message.alltel.com',
    '%s@messaging.centurytel.net',
    '%s@messaging.sprintpcs.com',
    '%s@mobile.celloneusa.com',
    '%s@mobile.dobson.net',
    '%s@mobile.surewest.com',
    '%s@mobilecomm.net',
    '%s@msg.clearnet.com',
    '%s@msg.koodomobile.com',
    '%s@msg.telus.com',
    '%s@my2way.com',
    '%s@myboostmobile.com',
    '%s@onlinebeep.net',
    '%s@page.metrocall.com',
    '%s@pagemci.com',
    '%s@paging.acswireless.com',
    '%s@pcs.rogers.com',
    '%s@pcsone.net',
    '%s@qwestmp.com',
    '%s@satellink.net',
    '%s@sms.3rivers.net',
    '%s@sms.bluecell.com',
    '%s@sms.edgewireless.com',
    '%s@sms.goldentele.com',
    '%s@sms.pscel.com',
    '%s@sms.wcc.net',
    '%s@text.houstoncellular.net',
    '%s@text.mtsmobility.com',
    '%s@tmomail.net',
    '%s@tms.suncom.com',
    '%s@txt.att.net',
    '%s@txt.bell.ca',
    '%s@txt.northerntelmobility.com',
    '%s@txt.windmobile.ca',
    '%s@uswestdatamail.com',
    '%s@utext.com',
    '%s@vmobile.ca',
    '%s@vmobl.com',
    '%s@vtext.com',
];
exports.International = [
    '%s@airtelchennai.com',
    '%s@airtelkol.com',
    '%s@airtelmail.com',
    '%s@alphame.com',
    '%s@bluewin.ch',
    '%s@bplmobile.com',
    '%s@c.vodafone.ne.jp',
    '%s@celforce.com',
    '%s@correo.movistar.net',
    '%s@delhi.hutch.co.in',
    '%s@digitextjm.com',
    '%s@e-page.net',
    '%s@escotelmobile.com',
    '%s@freesurf.ch',
    '%s@gsm1800.telia.dk',
    '%s@h.vodafone.ne.jp',
    '%s@ideacellular.net',
    '%s@itelcel.com',
    '%s@m1.com.sg',
    '%s@ml.bm',
    '%s@mmail.co.uk',
    '%s@mobilpost.no',
    '%s@mobistar.be',
    '%s@mobtel.co.yu',
    '%s@movistar.net',
    '%s@msgnextel.com.mx',
    '%s@msg.globalstarusa.com',
    '%s@msg.iridium.com',
    '%s@mujoskar.cz',
    '%s@mymeteor.ie',
    '%s@mysmart.mymobile.ph',
    '%s@mysunrise.ch',
    '%s@o2.co.uk',
    '%s@o2imail.co.uk',
    '%s@onemail.at',
    '%s@onlinebeep.net',
    '%s@optusmobile.com.au',
    '%s@page.mobilfone.com',
    '%s@page.southernlinc.com',
    '%s@pageme.teletouch.com',
    '%s@pager.irkutsk.ru',
    '%s@pcs.ntelos.com',
    '%s@rek2.com.mx',
    '%s@rpgmail.net',
    '%s@safaricomsms.com',
    '%s@satelindogsm.com',
    '%s@scs-900.ru',
    '%s@sfr.fr',
    '%s@sms.co.tz',
    '%s@sms.comviq.se',
    '%s@sms.emt.ee',
    '%s@sms.goldentele.com',
    '%s@sms.luxgsm.lu',
    '%s@sms.netcom.no',
    '%s@sms.primtel.ru',
    '%s@sms.t-mobile.at',
    '%s@sms.tele2.lv',
    '%s@sms.umc.com.ua',
    '%s@sms.uraltel.ru',
    '%s@sms.vodafone.it',
    '%s@smsmail.lmt.lv',
    '%s@swmsg.com',
    '%s@t-d1-sms.de',
    '%s@t-mobile-sms.de',
    '%s@t-mobile.uk.net',
    '%s@t.vodafone.ne.jp',
    '%s@text.mtsmobility.com',
    '%s@text.simplefreedom.net',
    '%s@timnet.com',
    '%s@vodafone.net',
    '%s@wyndtell.com',
];
exports.Provider = {
    /**
     * united state provider
     */
    us: exports.US,
    /**
     * canada provider
     */
    canada: exports.Canada,
    /**
     * international provider
     */
    intl: exports.International
};
