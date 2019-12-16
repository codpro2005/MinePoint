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
    aboutUsKajendranPulendran: string;
    aboutUsChrisWolf: string;
    aboutUsNilsChapman: string;
    aboutUsGregorMuheim: string;
    aboutUsSilasZahnerFunction: string;
    aboutUsChristianFuchsFunction: string;
    aboutUsDaniloFurrerFunction: string;
    aboutUsKajendranPulendranFunction: string;
    aboutUsChrisWolfFunction: string;
    aboutUsNilsChapmanFunction: string;
    aboutUsGregorMuheimFunction: string;
    aboutUsSilasZahnerDescription: string;
    aboutUsChristianFuchsDescription: string;
    aboutUsDaniloFurrerDescription: string;
    aboutUsKajendranPulendranDescription: string;
    aboutUsChrisWolfDescription: string;
    aboutUsNilsChapmanDescription: string;
    aboutUsGregorMuheimDescription: string;
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
    authenticateComingSoon: string;
    profileProfile: string;
    profileUsername: string;
    profileSubscriptionExpirationDate: string;
    profileCancel: string;
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
        aboutUsKajendranPulendran: 'Kajendran Pulendran',
        aboutUsChrisWolf: 'Chris Wolf',
        aboutUsNilsChapman: 'Nils Chapman',
        aboutUsGregorMuheim: 'Gregor Muheim',
        aboutUsSilasZahnerFunction: 'CEO',
        aboutUsChristianFuchsFunction: 'CAO',
        aboutUsDaniloFurrerFunction: 'CSO/CTO',
        aboutUsKajendranPulendranFunction: 'CTO',
        aboutUsChrisWolfFunction: 'CPO',
        aboutUsNilsChapmanFunction: 'CMO',
        aboutUsGregorMuheimFunction: 'CFO',
        aboutUsSilasZahnerDescription: 'He is responsible for the goal guidance of our company. He takes the leading role in the team and has the last word on most important decisions. Above all, he has a lot of organizational and planning work/responsibility. He has to make sure that all deadlines and charges are always met on time and that the goals are realistic and achievable. In addition, he helps out if one of our employees has too much work. E.g. with the production and treatment of our Teasers.',
        aboutUsChristianFuchsDescription: 'Supports the CEO in all his duties. Mostly in the area of administration. He is responsible for weekly minutes and task allocation. Like the CEO, he helps out in other roles when necessary.',
        aboutUsDaniloFurrerDescription: 'Is responsible for the technical tasks in the company. This is mainly the maintenance and creation of our website. As soon as we can offer our product/service he will also be responsible for the technical support.',
        aboutUsKajendranPulendranDescription: 'Is additionally responsible to ensure that our website runs without interruptions.',
        aboutUsChrisWolfDescription: 'Ist für die Wartung und Erstellung unserer Dienste zuständig. Dabei muss er darauf achten, dass unsere Server den Vorgaben entsprechend laufen und die Automatisierung für die Server Erstellung korrekt ausgeführt werden.',
        aboutUsNilsChapmanDescription: 'The CMO is an all-rounder. It helps out a little everywhere. Its main task, however, is the marketing of the company. The customer is always the centre of attention. How can I reach him? What influence does this decision have on him? etc. An example of his work would be planning and organizing the opening event. Or formulating the interview questions.',
        aboutUsGregorMuheimDescription: 'The CFO is responsible for the financial planning and accounting of the company. He must ensure that the budget plan is adhered to and that the necessary profits are made to cover the expenses, if at the end of the day a residual amount is left, this is distributed fairly among the team members.',
        contactSendEMail: 'Send E-Mail',
        contactName: 'Name',
        contactSubject: 'Subject',
        contactDescription: 'Description',
        contactNameRequired: 'Please enter a name',
        contactSubjectRequired: 'Please enter a subject',
        contactDescriptionRequired: 'Please enter a description',
        contactSubmit: 'Submit',
        contactGreetings: 'Best regards, ',
        authenticateSignIn: 'Sign in',
        authenticateSignUp: 'Sign up',
        authenticateUsername: 'Username',
        authenticatePassword: 'Password',
        authenticatePasswordConfirm: 'Password confirm',
        authenticateUsernameRequired: 'Please enter a username',
        authenticatePasswordRequired: 'Please enter a password',
        authenticatePasswordConfirmRequired: 'Please confirm your password',
        authenticatePasswordConfirmPasswordConfirmed: 'Passwords don\'t match',
        authenticateComingSoon: 'Coming soon',
        profileProfile: 'Profile',
        profileUsername: 'Username',
        profileSubscriptionExpirationDate: 'Expiration Date',
        profileCancel: 'Cancel',
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
        aboutUsKajendranPulendran: 'Kajendran Pulendran',
        aboutUsChrisWolf: 'Chris Wolf',
        aboutUsNilsChapman: 'Nils Chapman',
        aboutUsGregorMuheim: 'Gregor Muheim',
        aboutUsSilasZahnerFunction: 'CEO',
        aboutUsChristianFuchsFunction: 'CAO',
        aboutUsDaniloFurrerFunction: 'CSO/CTO',
        aboutUsKajendranPulendranFunction: 'CTO',
        aboutUsChrisWolfFunction: 'CPO',
        aboutUsNilsChapmanFunction: 'CMO',
        aboutUsGregorMuheimFunction: 'CFO',
        aboutUsSilasZahnerDescription: 'Ist für die Zielführung unseres Unternehmens zuständig. Er übernimmt dabei die führende Rolle im Team und hat bei den meisten wichtigen Entscheiden das letzte Wort. Bei ihm liegt vor allem viel Organisatorische und planende Arbeit/Verantwortung. Er muss darauf achten das alle Termine und Abgaben immer rechtzeitig eingehalten werden und dass die Ziele realistisch und erreichbar gesetzt sind. Zusätzlich hilft er noch aus, wenn einer unserer Mitarbeiter zu viel Arbeit haben. Z.B bei der Erstellung und Bearbeitung unseres Teasers.',
        aboutUsChristianFuchsDescription: 'Unterstützt den CEO bei all seinen Aufgaben. Meistens im Bereich der Administration. Er ist für die wöchentliche Protokollführung und Aufgabeneinteilung zuständig. So wie der CEO hilft er bei den anderen Rollen aus, wenn nötig.',
        aboutUsDaniloFurrerDescription: 'Ist für die technischen Aufgaben im Unternehmen zuständig. Das ist vor allem die Wartung und Erstellung unserer Webseite. Sobald wir unser Produkt/Dienst anbieten können wird er auch noch für den technischen Support verantwortlich sein.',
        aboutUsKajendranPulendranDescription: 'Ist zusätzlich zuständig zu sorgen, dass unsere Webseite ohne Unterbrüche läuft.',
        aboutUsChrisWolfDescription: 'Ist für die Wartung und Erstellung unserer Dienste zuständig. Dabei muss er darauf achten, dass unsere Server den Vorgaben entsprechend laufen und die Automatisierung für die Server Erstellung korrekt ausgeführt werden.',
        aboutUsNilsChapmanDescription: 'Der CMO ist ein Allrounder. Er hilft überall ein bisschen aus. Seine Hauptaufgabe befindet sich aber im Marketing der Firma. Dabei steht der Kunde immer im Mittelpunkt. Wie kann ich ihn erreichen? Welchen Einfluss hat dieser Entscheid auf ihn? Usw. Eine Bsp seiner Arbeit wäre das Planen und Organisieren des Eröffnungsevents. Oder das Formulieren der Interview Fragen.',
        aboutUsGregorMuheimDescription: 'Der CFO übernimmt die finanzielle Planung und Buchführung des Unternehmens. Er muss darauf achten, dass der Budgetplan eingehalten wird und die nötigen Gewinne erzielt werden, um die Ausgaben abzudecken, wenn dann am Ende ein Restbetrag übrig bleibt dieser Fair auf die Teammitglieder verteilt wird.',
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
        authenticateComingSoon: 'Bald erhältlich',
        profileProfile: 'Profil',
        profileUsername: 'Benutzername',
        profileSubscriptionExpirationDate: 'Ablaufsdatum',
        profileCancel: 'Abbrechen',
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
        aboutUsKajendranPulendran: 'Kajendran Pulendran',
        aboutUsChrisWolf: '克里斯·沃尔夫 (Chris Wolf)',
        aboutUsNilsChapman: '尼尔斯·查普曼 (Nils Chapman)',
        aboutUsGregorMuheim: '格雷戈尔·穆海姆 (Gregor Muheim)',
        aboutUsSilasZahnerFunction: '首席执行官',
        aboutUsChristianFuchsFunction: '首席行政官',
        aboutUsDaniloFurrerFunction: '首席销售官/首席技术官',
        aboutUsKajendranPulendranFunction: '首席技术官',
        aboutUsChrisWolfFunction: '首席项目官',
        aboutUsNilsChapmanFunction: '首席营销官',
        aboutUsGregorMuheimFunction: '首席财务官',
        aboutUsSilasZahnerDescription: '负责我公司的路线指导。他在团队中扮演领导角色，并在最重要的决策中拥有最终决定权。最重要的是，有很多组织和计划工作/职责。他必须确保始终及时地遵守所有任命和指控，并设定切实可行的目标。此外，如果我们的一名员工工作过多，它仍然会有所帮助。例如，在创建和编辑预告片时。',
        aboutUsChristianFuchsDescription: '支持首席执行官的所有任务。主要在管理领域。他负责每周的协议和任务分配。像首席执行官一样，如有必要，他可以帮助其他职位。',
        aboutUsDaniloFurrerDescription: '负责公司的技术任务。这首先是我们网站的维护和创建。一旦我们能够提供我们的产品/服务，他还将负责技术支持。',
        aboutUsKajendranPulendranDescription: '还负责确保我们的网站正常运行。',
        aboutUsChrisWolfDescription: '负责维护和创建我们的服务。为此，他必须确保我们的服务器按照规范运行，并且服务器创建的自动化操作正确执行。',
        aboutUsNilsChapmanDescription: '首席营销官是一个多面手。他到处都有帮助。但是，他的主要任务是公司的市场营销。客户永远是焦点。我怎么能联系到他？这个决定对他有什么影响？等等他工作的一个例子是开幕活动的策划和组织。或制定面试问题。',
        aboutUsGregorMuheimDescription: '首席财务官负责公司的财务计划和会计。他必须确保预算计划得到遵守，并获得必要的利润来支付费用，最后，剩下的差额被分配给了团队成员。',
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
        authenticateComingSoon: '快来了',
        profileProfile: '轮廓',
        profileUsername: '用户名',
        profileSubscriptionExpirationDate: '截止日期',
        profileCancel: '取消',
    }
};
