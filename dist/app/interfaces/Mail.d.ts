import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
export type Transporter = nodemailer.Transporter<SMTPTransport.SentMessageInfo>;
export type SMTPOptions = SMTPTransport | SMTPTransport.Options;
export interface Template {
    view: string;
    compact: any;
}
export declare enum Carrier {
    usCellular = "%s@email.uscc.net",
    sprint = "%s@messaging.sprintpcs.com",
    cellOne = "%s@mobile.celloneusa.com",
    telUs = "%s@msg.telus.com",
    acWireless = "%s@paging.acswireless.com",
    rogers = "%s@pcs.rogers.com",
    cricket = "%s@mms.cricketwireless.net",
    nextTech = "%s@sms.ntwls.net",
    tMobile = "%s@tmomail.net",
    att = "%s@txt.att.net",
    westernWireless = "%s@cellularonewest.com",
    freeMobile = "%s@txt.freedommobile.ca",
    verizon = "%s@vtext.com",
    republic = "%s@text.republicwireless.com",
    blueSky = "%s@blueskyfrog.com",
    bplMobile = "%s@bplmobile.com",
    clearDigital = "%s@clearlydigital.com",
    comcast = "%s@comcastpcs.textmsg.com",
    corrWireless = "%s@corrwireless.net",
    cellularSouth = "%s@csouth1.com",
    centennialWireless = "%s@cwemail.com",
    carolinaWireless = "%s@cwwsms.com",
    southWesternBell = "%s@email.swbw.com",
    fido = "%s@fido.ca",
    ideaCellular = "%s@ideacellular.net",
    indianaPaging = "%s@inlandlink.com",
    ivcCellular = "%s@ivctext.com",
    allTel = "%s@message.alltel.com",
    centuryTel = "%s@messaging.centurytel.net",
    dobson = "%s@mobile.dobson.net",
    sureWest = "%s@mobile.surewest.com",
    mobileComm = "%s@mobilecomm.net",
    clearNet = "%s@msg.clearnet.com",
    koodooMobile = "%s@msg.koodomobile.com",
    metroCall2 = "%s@my2way.com",
    boostMobile = "%s@myboostmobile.com",
    onlineBeep = "%s@onlinebeep.net",
    metroCall = "%s@page.metrocall.com",
    mci = "%s@pagemci.com",
    americaTech = "%s@paging.acswireless.com",
    pcsOne = "%s@pcsone.net",
    qWest = "%s@qwestmp.com",
    satellink = "%s@satellink.net",
    threeRiver = "%s@sms.3rivers.net",
    blueCell = "%s@sms.bluecell.com",
    edgeWireless = "%s@sms.edgewireless.com",
    goldenTelecom = "%s@sms.goldentele.com",
    psCellular = "%s@sms.pscel.com",
    westCentral = "%s@sms.wcc.net",
    houstonCellular = "%s@text.houstoncellular.net",
    mts = "%s@text.mtsmobility.com",
    sunCom = "%s@tms.suncom.com",
    bellMobile = "%s@txt.bell.ca",
    northEnterMobility = "%s@txt.northerntelmobility.com",
    usWest = "%s@uswestdatamail.com",
    uniCell = "%s@utext.com",
    virginMobileCanada = "%s@vmobile.ca",
    virginMobile = "%s@vmobl.com",
    airTel = "%s@airtelkol.com",
    delhiAitTel = "%s@airtelmail.com",
    tsWireless = "%s@alphame.com",
    blueWin = "%s@bluewin.ch",
    mumbaiBplMobile = "%s@bplmobile.com",
    vodafoneC = "%s@c.vodafone.ne.jp",
    vodafoneH = "%s@h.vodafone.ne.jp",
    vodafoneT = "%s@t.vodafone.ne.jp",
    celForce = "%s@celforce.com",
    moviStar = "%s@correo.movistar.net",
    delhiHutch = "%s@delhi.hutch.co.in",
    dgTextJamaican = "%s@digitextjm.com",
    jsmTel = "%s@e-page.net",
    escoTel = "%s@escotelmobile.com",
    sunriseCom = "%s@freesurf.ch",
    teliaDenmark = "%s@gsm1800.telia.dk",
    iteCell = "%s@itelcel.com",
    mobileOne = "%s@m1.com.sg",
    mOneBermuda = "%s@ml.bm",
    o2mMail = "%s@mmail.co.uk",
    mobilePost = "%s@mobilpost.no",
    mobiStar = "%s@mobistar.be",
    mobTel = "%s@mobtel.co.yu",
    tMoviStar = "%s@movistar.net",
    nextTelMexico = "%s@msgnextel.com.mx",
    globalStar = "%s@msg.globalstarusa.com",
    iridium = "%s@msg.iridium.com",
    oskar = "%s@mujoskar.cz",
    meteor = "%s@mymeteor.ie",
    smartTelecom = "%s@mysmart.mymobile.ph",
    mySunrise = "%s@mysunrise.ch",
    sunriseMessage = "%s@swmsg.com",
    o2 = "%s@o2.co.uk",
    o2Mail = "%s@o2imail.co.uk",
    oneConnect = "%s@onemail.at",
    optsMobile = "%s@optusmobile.com.au",
    mobileFon = "%s@page.mobilfone.com",
    southErlinc = "%s@page.southernlinc.com",
    teleTouch = "%s@pageme.teletouch.com",
    vesSocle = "%s@pager.irkutsk.ru",
    nTele = "%s@pcs.ntelos.com",
    rek2 = "%s@rek2.com.mx",
    chennaiCellular = "%s@rpgmail.net",
    safariCom = "%s@safaricomsms.com",
    setelIndoGsm = "%s@satelindogsm.com",
    scs900 = "%s@scs-900.ru",
    sfrFrance = "%s@sfr.fr",
    mobileTelTanzania = "%s@sms.co.tz",
    comViq = "%s@sms.comviq.se",
    emt = "%s@sms.emt.ee",
    goldenTele = "%s@sms.goldentele.com",
    luxGsm = "%s@sms.luxgsm.lu",
    netCom = "%s@sms.netcom.no",
    primeTel = "%s@sms.primtel.ru",
    tMobileAustria = "%s@sms.t-mobile.at",
    tele2Lv = "%s@sms.tele2.lv",
    umc = "%s@sms.umc.com.ua",
    uralTel = "%s@sms.uraltel.ru",
    vodafoneItaly = "%s@sms.vodafone.it",
    lmt = "%s@smsmail.lmt.lv",
    tMobileGermany = "%s@t-d1-sms.de",
    dtMobile = "%s@t-mobile-sms.de",
    tMobileUk = "%s@t-mobile.uk.net",
    simpleFreedom = "%s@text.simplefreedom.net",
    tim = "%s@timnet.com",
    vodafone = "%s@vodafone.net",
    wynTell = "%s@wyndtell.com",
    projectFi = "%s@msg.fi.google.com"
}
export type Include<T extends any[]> = T[number];
export type Callback = (err?: Error, info?: any) => any;
export type ServiceList = Carrier | 'us' | 'canada' | 'intl';
export type Region = typeof US[number] | typeof Canada[number] | typeof International[number];
export declare const US: readonly ["%s@email.uscc.net", "%s@message.alltel.com", "%s@messaging.sprintpcs.com", "%s@mobile.celloneusa.com", "%s@msg.telus.com", "%s@paging.acswireless.com", "%s@pcs.rogers.com", "%s@qwestmp.com", "%s@sms.ntwls.net", "%s@tmomail.net", "%s@txt.att.net", "%s@txt.windmobile.ca", "%s@vtext.com", "%s@text.republicwireless.com", "%s@msg.fi.google.com"];
export declare const Canada: readonly ["%s@blueskyfrog.com", "%s@bplmobile.com", "%s@cellularonewest.com", "%s@clearlydigital.com", "%s@comcastpcs.textmsg.com", "%s@corrwireless.net", "%s@csouth1.com", "%s@cwemail.com", "%s@cwwsms.com", "%s@email.swbw.com", "%s@email.uscc.net", "%s@fido.ca", "%s@ideacellular.net", "%s@inlandlink.com", "%s@ivctext.com", "%s@message.alltel.com", "%s@messaging.centurytel.net", "%s@messaging.sprintpcs.com", "%s@mobile.celloneusa.com", "%s@mobile.dobson.net", "%s@mobile.surewest.com", "%s@mobilecomm.net", "%s@msg.clearnet.com", "%s@msg.koodomobile.com", "%s@msg.telus.com", "%s@my2way.com", "%s@myboostmobile.com", "%s@onlinebeep.net", "%s@page.metrocall.com", "%s@pagemci.com", "%s@paging.acswireless.com", "%s@pcs.rogers.com", "%s@pcsone.net", "%s@qwestmp.com", "%s@satellink.net", "%s@sms.3rivers.net", "%s@sms.bluecell.com", "%s@sms.edgewireless.com", "%s@sms.goldentele.com", "%s@sms.pscel.com", "%s@sms.wcc.net", "%s@text.houstoncellular.net", "%s@text.mtsmobility.com", "%s@tmomail.net", "%s@tms.suncom.com", "%s@txt.att.net", "%s@txt.bell.ca", "%s@txt.northerntelmobility.com", "%s@txt.windmobile.ca", "%s@uswestdatamail.com", "%s@utext.com", "%s@vmobile.ca", "%s@vmobl.com", "%s@vtext.com"];
export declare const International: readonly ["%s@airtelchennai.com", "%s@airtelkol.com", "%s@airtelmail.com", "%s@alphame.com", "%s@bluewin.ch", "%s@bplmobile.com", "%s@c.vodafone.ne.jp", "%s@celforce.com", "%s@correo.movistar.net", "%s@delhi.hutch.co.in", "%s@digitextjm.com", "%s@e-page.net", "%s@escotelmobile.com", "%s@freesurf.ch", "%s@gsm1800.telia.dk", "%s@h.vodafone.ne.jp", "%s@ideacellular.net", "%s@itelcel.com", "%s@m1.com.sg", "%s@ml.bm", "%s@mmail.co.uk", "%s@mobilpost.no", "%s@mobistar.be", "%s@mobtel.co.yu", "%s@movistar.net", "%s@msgnextel.com.mx", "%s@msg.globalstarusa.com", "%s@msg.iridium.com", "%s@mujoskar.cz", "%s@mymeteor.ie", "%s@mysmart.mymobile.ph", "%s@mysunrise.ch", "%s@o2.co.uk", "%s@o2imail.co.uk", "%s@onemail.at", "%s@onlinebeep.net", "%s@optusmobile.com.au", "%s@page.mobilfone.com", "%s@page.southernlinc.com", "%s@pageme.teletouch.com", "%s@pager.irkutsk.ru", "%s@pcs.ntelos.com", "%s@rek2.com.mx", "%s@rpgmail.net", "%s@safaricomsms.com", "%s@satelindogsm.com", "%s@scs-900.ru", "%s@sfr.fr", "%s@sms.co.tz", "%s@sms.comviq.se", "%s@sms.emt.ee", "%s@sms.goldentele.com", "%s@sms.luxgsm.lu", "%s@sms.netcom.no", "%s@sms.primtel.ru", "%s@sms.t-mobile.at", "%s@sms.tele2.lv", "%s@sms.umc.com.ua", "%s@sms.uraltel.ru", "%s@sms.vodafone.it", "%s@smsmail.lmt.lv", "%s@swmsg.com", "%s@t-d1-sms.de", "%s@t-mobile-sms.de", "%s@t-mobile.uk.net", "%s@t.vodafone.ne.jp", "%s@text.mtsmobility.com", "%s@text.simplefreedom.net", "%s@timnet.com", "%s@vodafone.net", "%s@wyndtell.com"];
export declare const Provider: {
    /**
     * united state provider
     */
    us: readonly ["%s@email.uscc.net", "%s@message.alltel.com", "%s@messaging.sprintpcs.com", "%s@mobile.celloneusa.com", "%s@msg.telus.com", "%s@paging.acswireless.com", "%s@pcs.rogers.com", "%s@qwestmp.com", "%s@sms.ntwls.net", "%s@tmomail.net", "%s@txt.att.net", "%s@txt.windmobile.ca", "%s@vtext.com", "%s@text.republicwireless.com", "%s@msg.fi.google.com"];
    /**
     * canada provider
     */
    canada: readonly ["%s@blueskyfrog.com", "%s@bplmobile.com", "%s@cellularonewest.com", "%s@clearlydigital.com", "%s@comcastpcs.textmsg.com", "%s@corrwireless.net", "%s@csouth1.com", "%s@cwemail.com", "%s@cwwsms.com", "%s@email.swbw.com", "%s@email.uscc.net", "%s@fido.ca", "%s@ideacellular.net", "%s@inlandlink.com", "%s@ivctext.com", "%s@message.alltel.com", "%s@messaging.centurytel.net", "%s@messaging.sprintpcs.com", "%s@mobile.celloneusa.com", "%s@mobile.dobson.net", "%s@mobile.surewest.com", "%s@mobilecomm.net", "%s@msg.clearnet.com", "%s@msg.koodomobile.com", "%s@msg.telus.com", "%s@my2way.com", "%s@myboostmobile.com", "%s@onlinebeep.net", "%s@page.metrocall.com", "%s@pagemci.com", "%s@paging.acswireless.com", "%s@pcs.rogers.com", "%s@pcsone.net", "%s@qwestmp.com", "%s@satellink.net", "%s@sms.3rivers.net", "%s@sms.bluecell.com", "%s@sms.edgewireless.com", "%s@sms.goldentele.com", "%s@sms.pscel.com", "%s@sms.wcc.net", "%s@text.houstoncellular.net", "%s@text.mtsmobility.com", "%s@tmomail.net", "%s@tms.suncom.com", "%s@txt.att.net", "%s@txt.bell.ca", "%s@txt.northerntelmobility.com", "%s@txt.windmobile.ca", "%s@uswestdatamail.com", "%s@utext.com", "%s@vmobile.ca", "%s@vmobl.com", "%s@vtext.com"];
    /**
     * international provider
     */
    intl: readonly ["%s@airtelchennai.com", "%s@airtelkol.com", "%s@airtelmail.com", "%s@alphame.com", "%s@bluewin.ch", "%s@bplmobile.com", "%s@c.vodafone.ne.jp", "%s@celforce.com", "%s@correo.movistar.net", "%s@delhi.hutch.co.in", "%s@digitextjm.com", "%s@e-page.net", "%s@escotelmobile.com", "%s@freesurf.ch", "%s@gsm1800.telia.dk", "%s@h.vodafone.ne.jp", "%s@ideacellular.net", "%s@itelcel.com", "%s@m1.com.sg", "%s@ml.bm", "%s@mmail.co.uk", "%s@mobilpost.no", "%s@mobistar.be", "%s@mobtel.co.yu", "%s@movistar.net", "%s@msgnextel.com.mx", "%s@msg.globalstarusa.com", "%s@msg.iridium.com", "%s@mujoskar.cz", "%s@mymeteor.ie", "%s@mysmart.mymobile.ph", "%s@mysunrise.ch", "%s@o2.co.uk", "%s@o2imail.co.uk", "%s@onemail.at", "%s@onlinebeep.net", "%s@optusmobile.com.au", "%s@page.mobilfone.com", "%s@page.southernlinc.com", "%s@pageme.teletouch.com", "%s@pager.irkutsk.ru", "%s@pcs.ntelos.com", "%s@rek2.com.mx", "%s@rpgmail.net", "%s@safaricomsms.com", "%s@satelindogsm.com", "%s@scs-900.ru", "%s@sfr.fr", "%s@sms.co.tz", "%s@sms.comviq.se", "%s@sms.emt.ee", "%s@sms.goldentele.com", "%s@sms.luxgsm.lu", "%s@sms.netcom.no", "%s@sms.primtel.ru", "%s@sms.t-mobile.at", "%s@sms.tele2.lv", "%s@sms.umc.com.ua", "%s@sms.uraltel.ru", "%s@sms.vodafone.it", "%s@smsmail.lmt.lv", "%s@swmsg.com", "%s@t-d1-sms.de", "%s@t-mobile-sms.de", "%s@t-mobile.uk.net", "%s@t.vodafone.ne.jp", "%s@text.mtsmobility.com", "%s@text.simplefreedom.net", "%s@timnet.com", "%s@vodafone.net", "%s@wyndtell.com"];
};
