// tslint:disable: max-line-length

export enum LanguageEnum {
    English = 'english',
    German = 'german',
    Chinese = 'chinese'
}

// interface ILanguage {
//     [index: string]: string;
// }

interface ILanguages {
    [index: string]: ILanguage;
}

interface ILanguage {
    home: string;
    product: string;
    aboutUs: string;
    contact: string;
    language: string;
    authenticate: string;
    english: string;
    german: string;
    chinese: string;
    homeDescription: string;
    productBasic: string;
    productPremium: string;
    productAds: string;
    productNoAds: string;
    productPerMonth: string;
    productBuyNow: string;
    productComingSoon: string;
    productMinePointPackage: string;
    productMinePointPackageDescription: string;
    productMinePointPackageBonus: string;
    productMinePointPackageBonusDescription: string;
    productHomelessStevePackage: string;
    productHomelessStevePackageDescription: string;
    productGreedyStevePackage: string;
    productGreedyStevePackageDescription: string;
    productImpatientStevePackage: string;
    productImpatientStevePackageDescription: string;
    productDiamondStevePackage: string;
    productDiamondStevePackageDescription: string;
    aboutUsSilasZahner: string;
    aboutUsChristianFuchs: string;
    aboutUsDaniloFurrer: string;
    aboutUsChrisWolf: string;
    aboutUsNilsChapman: string;
    aboutUsKajendranPulendran: string;
    aboutUsGregorMuheim: string;
    aboutUsSilasZahnerDescription: string;
    contactSendEMail: string;
    contactName: string;
    contactSubject: string;
    contactDescription: string;
    contactNameRequired: string;
    contactSubjectRequired: string;
    contactDescriptionRequired: string;
    contactSubmit: string;
    contactGreetings: string;
    authenticateSignIn: string;
    authenticateSignUp: string;
    authenticateUsername: string;
    authenticatePassword: string;
    authenticatePasswordConfirm: string;
    authenticateUsernameRequired: string;
    authenticatePasswordRequired: string;
    authenticatePasswordConfirmRequired: string;
    authenticatePasswordConfirmPasswordConfirmed: string;
}

export const languages: ILanguages = {
    english: {
        home: 'Home',
        product: 'Product',
        aboutUs: 'About us',
        contact: 'Contact',
        language: 'Language',
        authenticate: 'Authenticate',
        english: 'English',
        german: 'German',
        chinese: 'Chinese',
        homeDescription: 'MinePoint is a hosting company that offers servers and various services to the game "Minecraft". We free the users from the complicated setup and maintenance of a server, so that they can fully concentrate on the game.',
        productBasic: 'BASIC',
        productPremium: 'PREMIUM',
        productAds: 'Ads',
        productNoAds: 'No ads!',
        productPerMonth: '/ month',
        productBuyNow: 'Buy now',
        productComingSoon: 'Coming soon',
        productMinePointPackage: 'MinePoint Package',
        productMinePointPackageDescription: 'We offer 100% more power than most of our competitors regarding the costs!',
        productMinePointPackageBonus: 'Set up',
        productMinePointPackageBonusDescription: 'For a one time cost of an additional 5 CHF we will also set up the server for you.',
        productHomelessStevePackage: 'Homeless Steve Package',
        productHomelessStevePackageDescription: 'For the homeless players out here!',
        productGreedyStevePackage: 'Greedy Steve Package',
        productGreedyStevePackageDescription: 'For the players which value money over time!',
        productImpatientStevePackage: 'Impatient Steve Package',
        productImpatientStevePackageDescription: 'For the players which value time over money!',
        productDiamondStevePackage: 'Diamond Steve Package',
        productDiamondStevePackageDescription: 'For the players that are going to spend all it takes to enjoy the game!',
        aboutUsSilasZahner: 'Silas Zahner',
        aboutUsChristianFuchs: 'Christian Fuchs',
        aboutUsDaniloFurrer: 'Danilo Furrer',
        aboutUsChrisWolf: 'Chris Wolf',
        aboutUsNilsChapman: 'Nils Chapman',
        aboutUsKajendranPulendran: 'Kajendran Pulendran',
        aboutUsGregorMuheim: 'Gregor Muheim',
        aboutUsSilasZahnerDescription: 'Silas has a ton of teeth.',
        contactSendEMail: 'Send E-Mail',
        contactName: 'Name',
        contactSubject: 'Subject',
        contactDescription: 'Description',
        contactNameRequired: 'Please enter a name',
        contactSubjectRequired: 'Please enter a subject',
        contactDescriptionRequired: 'Please enter a description',
        contactSubmit: 'Submit',
        contactGreetings: 'Best regards, ',
        authenticateSignIn: 'Sign up',
        authenticateSignUp: 'Sign in',
        authenticateUsername: 'Username',
        authenticatePassword: 'Password',
        authenticatePasswordConfirm: 'Password confirm',
        authenticateUsernameRequired: 'Please enter a username',
        authenticatePasswordRequired: 'Please enter a password',
        authenticatePasswordConfirmRequired: 'Please confirm your password',
        authenticatePasswordConfirmPasswordConfirmed: 'Passwords don\'t match',
    },
    german: {
        home: 'Startseite',
        product: 'Produkt',
        aboutUs: 'Über uns',
        contact: 'Kontakt',
        language: 'Sprache',
        authenticate: 'Authentifizieren',
        english: 'Englisch',
        german: 'Deutsch',
        chinese: 'Chinesisch',
        homeDescription: 'MinePoint ist ein Hosting-Unternehmen, das Server und verschiedene Dienste für das Spiel "Minecraft" anbietet. Wir befreien die Nutzer von der komplizierten Einrichtung und Wartung eines Servers, so dass sie sich voll und ganz auf das Spiel konzentrieren können.',
        productBasic: 'GRUNDLEGEND',
        productPremium: 'PRÄMIE',
        productAds: 'Werbungen',
        productNoAds: 'Keine Werbungen!',
        productPerMonth: '/ Monat',
        productBuyNow: 'Jetzt kaufen',
        productComingSoon: 'Bald erhältlich',
        productMinePointPackage: 'MinePoint Paket',
        productMinePointPackageDescription: 'Wir bieten 100% mehr Leistung als unsere Konkurrenten bezüglich den Kosten!',
        productMinePointPackageBonus: 'Aufsetzen',
        productMinePointPackageBonusDescription: 'Für eine einmalige Zahlung von 5 CHF werden wir dir den Server selbst aufsetzen.',
        productHomelessStevePackage: 'Obdachloser Steve Paket',
        productHomelessStevePackageDescription: 'Für die obdachlosen Spieler!',
        productGreedyStevePackage: 'Geiziger Steve Paket',
        productGreedyStevePackageDescription: 'Für die Spieler, die Geld über Zeit wertschätzen!',
        productImpatientStevePackage: 'Ungeduldiger Steve Packet',
        productImpatientStevePackageDescription: 'Für die Spieler, die Zeit über Geld wertschätzen!',
        productDiamondStevePackage: 'Diamenten Steve Packet',
        productDiamondStevePackageDescription: 'Für die Spieler, die bereit sind alles auszugeben, um das Spiel zu genießen!',
        aboutUsSilasZahner: 'Silas Zahner',
        aboutUsChristianFuchs: 'Christian Fuchs',
        aboutUsDaniloFurrer: 'Danilo Furrer',
        aboutUsChrisWolf: 'Chris Wolf',
        aboutUsNilsChapman: 'Nils Chapman',
        aboutUsKajendranPulendran: 'Kajendran Pulendran',
        aboutUsGregorMuheim: 'Gregor Muheim',
        aboutUsSilasZahnerDescription: 'Silas hat eine Menge Zähne.',
        contactSendEMail: 'E-Mail senden',
        contactName: 'Name',
        contactSubject: 'Subjekt',
        contactDescription: 'Beschreibung',
        contactNameRequired: 'Bitte einen Namen eingeben',
        contactSubjectRequired: 'Bitte ein Subjekt eingeben',
        contactDescriptionRequired: 'Bitte eine Beschreibung eingeben',
        contactSubmit: 'Abschicken',
        contactGreetings: 'MfG, ',
        authenticateSignIn: 'Einloggen',
        authenticateSignUp: 'Registrieren',
        authenticateUsername: 'Benutzername',
        authenticatePassword: 'Passwort',
        authenticatePasswordConfirm: 'Passwort bestätigen',
        authenticateUsernameRequired: 'Bitte einen Benutzernamen eingeben',
        authenticatePasswordRequired: 'Bitte ein Passwort eingeben',
        authenticatePasswordConfirmRequired: 'Bitte Passwort bestätigen',
        authenticatePasswordConfirmPasswordConfirmed: 'Passwörter stimmen nicht überein',
    },
    chinese: {
        home: '家',
        product: '产品',
        aboutUs: '关于我们',
        contact: '接触',
        language: '语言',
        authenticate: '认证',
        english: '英语',
        german: '德国',
        chinese: '中国',
        homeDescription: 'MinePoint是一家托管公司，为“ Minecraft”游戏提供服务器和各种服务。我们将用户从服务器的复杂设置和维护中解放出来，使他们可以完全专注于游戏。',
        productBasic: '初级',
        productPremium: '额外费用',
        productAds: '收购',
        productNoAds: '没有广告！',
        productPerMonth: '/月',
        productBuyNow: '立即购买',
        productComingSoon: '快来了',
        productMinePointPackage: 'MinePoint套餐',
        productMinePointPackageBonus: '设定',
        productMinePointPackageBonusDescription: '我们将为您安装服务器，一次性支付5瑞士法郎。',
        productMinePointPackageDescription: '就成本而言，我们比大多数竞争对手提供100％的功率！',
        productHomelessStevePackage: '无家可归的史蒂夫包',
        productHomelessStevePackageDescription: '对于无家可归的玩家！',
        productGreedyStevePackage: '小气史蒂夫包',
        productGreedyStevePackageDescription: '对于那些随着时间的推移珍惜金钱的玩家！',
        productImpatientStevePackage: '急躁的史蒂夫·包',
        productImpatientStevePackageDescription: '对于重视时间而不是金钱的玩家！',
        productDiamondStevePackage: '钻石史蒂夫小包',
        productDiamondStevePackageDescription: '对于准备花费所有精力享受游戏的玩家！',
        aboutUsSilasZahner: '西拉斯·扎纳（Silas Zahner）',
        aboutUsChristianFuchs: '克里斯蒂安·福克斯（Christian Fuchs）',
        aboutUsDaniloFurrer: '达尼洛·富勒（Danilo Furrer）',
        aboutUsChrisWolf: '克里斯·沃尔夫 (Chris Wolf)',
        aboutUsNilsChapman: '尼尔斯·查普曼 (Nils Chapman)',
        aboutUsKajendranPulendran: 'Kajendran Pulendran',
        aboutUsGregorMuheim: '格雷戈尔·穆海姆 (Gregor Muheim)',
        aboutUsSilasZahnerDescription: '西拉斯有很多牙齿。',
        contactSendEMail: '发送邮件',
        contactName: '名',
        contactSubject: '主题',
        contactDescription: '描述',
        contactNameRequired: '请输入一个名字',
        contactSubjectRequired: '请输入主题',
        contactDescriptionRequired: '请输入描述',
        contactSubmit: '发送',
        contactGreetings: '最好的问候，',
        authenticateSignIn: '登录',
        authenticateSignUp: '注册',
        authenticateUsername: '用户名',
        authenticatePassword: '密码',
        authenticatePasswordConfirm: '确认密码',
        authenticateUsernameRequired: '请输入用户名',
        authenticatePasswordRequired: '请输入密码',
        authenticatePasswordConfirmRequired: '请确认密码',
        authenticatePasswordConfirmPasswordConfirmed: '密码不匹配',
    }
};
