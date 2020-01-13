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
    resetPassword: string;
    english: string;
    german: string;
    chinese: string;
    longDescription: string;
    basic: string;
    premium: string;
    ads: string;
    noAds: string;
    from8FrancsPerMonth: string;
    buyNow: string;
    comingSoon: string;
    minePointPackage: string;
    minePointPackageDescription: string;
    minePointPackageBonus: string;
    minePointPackageBonusDescription: string;
    homelessStevePackage: string;
    homelessStevePackageDescription: string;
    greedyStevePackage: string;
    greedyStevePackageDescription: string;
    impatientStevePackage: string;
    impatientStevePackageDescription: string;
    diamondStevePackage: string;
    diamondStevePackageDescription: string;
    silasZahner: string;
    christianFuchs: string;
    daniloFurrer: string;
    kajendranPulendran: string;
    chrisWolf: string;
    nilsChapman: string;
    gregorMuheim: string;
    silasZahnerFunction: string;
    christianFuchsFunction: string;
    daniloFurrerFunction: string;
    kajendranPulendranFunction: string;
    chrisWolfFunction: string;
    nilsChapmanFunction: string;
    gregorMuheimFunction: string;
    silasZahnerDescription: string;
    christianFuchsDescription: string;
    daniloFurrerDescription: string;
    kajendranPulendranDescription: string;
    chrisWolfDescription: string;
    nilsChapmanDescription: string;
    gregorMuheimDescription: string;
    sendMail: string;
    name: string;
    mail: string;
    subject: string;
    description: string;
    nameRequired: string;
    mailRequired: string;
    mailInvalid: string;
    subjectRequired: string;
    descriptionRequired: string;
    submit: string;
    greetings: string;
    signIn: string;
    signOut: string;
    signUp: string;
    unexpectedFail: string;
    username: string;
    password: string;
    passwordConfirm: string;
    usernameRequired: string;
    passwordRequired: string;
    passwordConfirmRequired: string;
    passwordConfirmPasswordConfirmed: string;
    forgotPassword: string;
    userNotFound: string;
    mailFound: string;
    mailNotFound: string;
    reset: string;
    profile: string;
    subscriptionExpirationDate: string;
    cancel: string;
    contactSuccess: string;
    resetPasswordRedirectFail: string;
    now: string;
}

export const languages: ILanguages = {
    german: {
        home: 'Startseite',
        product: 'Produkt',
        aboutUs: 'Über uns',
        contact: 'Kontakt',
        language: 'Sprache',
        authenticate: 'Authentifizieren',
        resetPassword: 'Kennwort zurücksetzen',
        english: 'Englisch',
        german: 'Deutsch',
        chinese: 'Chinesisch',
        longDescription: 'MinePoint ist ein Hosting-Unternehmen, das Server und verschiedene Dienste für das Spiel "Minecraft" anbietet. Wir befreien die Nutzer von der komplizierten Einrichtung und Wartung eines Servers, so dass sie sich voll und ganz auf das Spiel konzentrieren können.',
        basic: 'GRUNDLEGEND',
        premium: 'PRÄMIE',
        ads: 'Werbungen',
        noAds: 'Keine Werbungen!',
        from8FrancsPerMonth: 'Ab 8 CHF / Monat',
        buyNow: 'Jetzt kaufen',
        comingSoon: 'Bald erhältlich',
        minePointPackage: 'MinePoint Paket',
        minePointPackageDescription: 'Wir bieten 100% mehr Leistung als unsere Konkurrenten bezüglich den Kosten!',
        minePointPackageBonus: 'Server aufsetzen',
        minePointPackageBonusDescription: 'Für eine einmalige Zahlung von 5 CHF werden wir dir den Server selber aufsetzen.',
        homelessStevePackage: 'Obdachloser Steve Paket',
        homelessStevePackageDescription: 'Für die obdachlosen Spieler!',
        greedyStevePackage: 'Geiziger Steve Paket',
        greedyStevePackageDescription: 'Für die Spieler, die Geld über Zeit wertschätzen!',
        impatientStevePackage: 'Ungeduldiger Steve Packet',
        impatientStevePackageDescription: 'Für die Spieler, die Zeit über Geld wertschätzen!',
        diamondStevePackage: 'Diamenten Steve Packet',
        diamondStevePackageDescription: 'Für die Spieler, die bereit sind alles auszugeben, um das Spiel zu genießen!',
        silasZahner: 'Silas Zahner',
        christianFuchs: 'Christian Fuchs',
        daniloFurrer: 'Danilo Furrer',
        kajendranPulendran: 'Kajendran Pulendran',
        chrisWolf: 'Chris Wolf',
        nilsChapman: 'Nils Chapman',
        gregorMuheim: 'Gregor Muheim',
        silasZahnerFunction: 'CEO',
        christianFuchsFunction: 'CAO',
        daniloFurrerFunction: 'CSO/CTO',
        kajendranPulendranFunction: 'CTO',
        chrisWolfFunction: 'CPO',
        nilsChapmanFunction: 'CMO',
        gregorMuheimFunction: 'CFO',
        silasZahnerDescription: 'Ist für die Zielführung unseres Unternehmens zuständig. Er übernimmt dabei die führende Rolle im Team und hat bei den meisten wichtigen Entscheiden das letzte Wort. Bei ihm liegt vor allem viel Organisatorische und planende Arbeit/Verantwortung. Er muss darauf achten das alle Termine und Abgaben immer rechtzeitig eingehalten werden und dass die Ziele realistisch und erreichbar gesetzt sind. Zusätzlich hilft er noch aus, wenn einer unserer Mitarbeiter zu viel Arbeit haben. Z.B bei der Erstellung und Bearbeitung unseres Teasers.',
        christianFuchsDescription: 'Unterstützt den CEO bei all seinen Aufgaben. Meistens im Bereich der Administration. Er ist für die wöchentliche Protokollführung und Aufgabeneinteilung zuständig. So wie der CEO hilft er bei den anderen Rollen aus, wenn nötig.',
        daniloFurrerDescription: 'Ist für die technischen Aufgaben im Unternehmen zuständig. Das ist vor allem die Wartung und Erstellung unserer Webseite. Sobald wir unser Produkt/Dienst anbieten können wird er auch noch für den technischen Support verantwortlich sein.',
        kajendranPulendranDescription: 'Ist zusätzlich zuständig zu sorgen, dass unsere Webseite ohne Unterbrüche läuft.',
        chrisWolfDescription: 'Ist für die Wartung und Erstellung unserer Dienste zuständig. Dabei muss er darauf achten, dass unsere Server den Vorgaben entsprechend laufen und die Automatisierung für die Server Erstellung korrekt ausgeführt werden.',
        nilsChapmanDescription: 'Der CMO ist ein Allrounder. Er hilft überall ein bisschen aus. Seine Hauptaufgabe befindet sich aber im Marketing der Firma. Dabei steht der Kunde immer im Mittelpunkt. Wie kann ich ihn erreichen? Welchen Einfluss hat dieser Entscheid auf ihn? Usw. Eine Bsp seiner Arbeit wäre das Planen und Organisieren des Eröffnungsevents. Oder das Formulieren der Interview Fragen.',
        gregorMuheimDescription: 'Der CFO übernimmt die finanzielle Planung und Buchführung des Unternehmens. Er muss darauf achten, dass der Budgetplan eingehalten wird und die nötigen Gewinne erzielt werden, um die Ausgaben abzudecken, wenn dann am Ende ein Restbetrag übrig bleibt dieser Fair auf die Teammitglieder verteilt wird.',
        sendMail: 'Email senden',
        name: 'Name',
        mail: 'Email',
        subject: 'Subjekt',
        description: 'Beschreibung',
        nameRequired: 'Bitte einen Namen eingeben',
        mailRequired: 'Bitte eine Email eingeben',
        mailInvalid: 'Bitte eine valide Email eingeben',
        subjectRequired: 'Bitte ein Subjekt eingeben',
        descriptionRequired: 'Bitte eine Beschreibung eingeben',
        submit: 'Abschicken',
        greetings: 'MfG, ',
        signIn: 'Einloggen',
        signOut: 'Ausloggen',
        signUp: 'Registrieren',
        unexpectedFail: 'Es ist ein unerwarteter Fehler aufgetreten! Bitte konktaktieren Sie uns und schicken Sie die folgende Zahl mit',
        username: 'Benutzername',
        password: 'Kennwort',
        passwordConfirm: 'Kennwort bestätigen',
        usernameRequired: 'Bitte einen Benutzernamen eingeben',
        passwordRequired: 'Bitte ein Kennwort eingeben',
        passwordConfirmRequired: 'Bitte Kennwort bestätigen',
        passwordConfirmPasswordConfirmed: 'Kennwörter stimmen nicht überein',
        forgotPassword: 'Kennwort vergessen?',
        userNotFound: 'Benutzer konnte nicht gefunden werden', 
        mailFound: 'Bitte überprüfen Sie Ihre E-Mail für weitere Anweisungen.',
        mailNotFound: 'Email konnte keinem Benutzer zugewiesen werden',
        reset: 'Zurücksetzen',
        profile: 'Profil',
        subscriptionExpirationDate: 'Ablaufsdatum',
        cancel: 'Abbrechen',
        contactSuccess: 'Wir werden Sie sobald wie möglich kontaktieren!',
        resetPasswordRedirectFail: 'Dieser Link um das Passwort zurückzusetzen ist höchstwahrscheinlich entweder abgelaufen oder existiert gar nicht. Bitte fordern sie einen neuen an.',
        now: 'Jetzt',
    },
    english: {
        home: 'Home',
        product: 'Product',
        aboutUs: 'About us',
        contact: 'Contact',
        language: 'Language',
        authenticate: 'Authenticate',
        resetPassword: 'Reset password',
        english: 'English',
        german: 'German',
        chinese: 'Chinese',
        longDescription: 'MinePoint is a hosting company that offers servers and various services to the game "Minecraft". We free the users from the complicated setup and maintenance of a server, so that they can fully concentrate on the game.',
        basic: 'BASIC',
        premium: 'PREMIUM',
        ads: 'Ads',
        noAds: 'No ads!',
        from8FrancsPerMonth: 'From 8 CHF / month',
        buyNow: 'Buy now',
        comingSoon: 'Coming soon',
        minePointPackage: 'MinePoint Package',
        minePointPackageDescription: 'We offer 100% more power than most of our competitors regarding the costs!',
        minePointPackageBonus: 'Set up server',
        minePointPackageBonusDescription: 'For a one time cost of an additional 5 CHF we will also set up the server for you.',
        homelessStevePackage: 'Homeless Steve Package',
        homelessStevePackageDescription: 'For the homeless players out here!',
        greedyStevePackage: 'Greedy Steve Package',
        greedyStevePackageDescription: 'For the players which value money over time!',
        impatientStevePackage: 'Impatient Steve Package',
        impatientStevePackageDescription: 'For the players which value time over money!',
        diamondStevePackage: 'Diamond Steve Package',
        diamondStevePackageDescription: 'For the players that are going to spend all it takes to enjoy the game!',
        silasZahner: 'Silas Zahner',
        christianFuchs: 'Christian Fuchs',
        daniloFurrer: 'Danilo Furrer',
        kajendranPulendran: 'Kajendran Pulendran',
        chrisWolf: 'Chris Wolf',
        nilsChapman: 'Nils Chapman',
        gregorMuheim: 'Gregor Muheim',
        silasZahnerFunction: 'CEO',
        christianFuchsFunction: 'CAO',
        daniloFurrerFunction: 'CSO/CTO',
        kajendranPulendranFunction: 'CTO',
        chrisWolfFunction: 'CPO',
        nilsChapmanFunction: 'CMO',
        gregorMuheimFunction: 'CFO',
        silasZahnerDescription: 'He is responsible for the goal guidance of our company. He takes the leading role in the team and has the last word on most important decisions. Above all, he has a lot of organizational and planning work/responsibility. He has to make sure that all deadlines and charges are always met on time and that the goals are realistic and achievable. In addition, he helps out if one of our employees has too much work. E.g. with the production and treatment of our Teasers.',
        christianFuchsDescription: 'Supports the CEO in all his duties. Mostly in the area of administration. He is responsible for weekly minutes and task allocation. Like the CEO, he helps out in other roles when necessary.',
        daniloFurrerDescription: 'Is responsible for the technical tasks in the company. This is mainly the maintenance and creation of our website. As soon as we can offer our product/service he will also be responsible for the technical support.',
        kajendranPulendranDescription: 'Is additionally responsible to ensure that our website runs without interruptions.',
        chrisWolfDescription: 'Ist für die Wartung und Erstellung unserer Dienste zuständig. Dabei muss er darauf achten, dass unsere Server den Vorgaben entsprechend laufen und die Automatisierung für die Server Erstellung korrekt ausgeführt werden.',
        nilsChapmanDescription: 'The CMO is an all-rounder. It helps out a little everywhere. Its main task, however, is the marketing of the company. The customer is always the centre of attention. How can I reach him? What influence does this decision have on him? etc. An example of his work would be planning and organizing the opening event. Or formulating the interview questions.',
        gregorMuheimDescription: 'The CFO is responsible for the financial planning and accounting of the company. He must ensure that the budget plan is adhered to and that the necessary profits are made to cover the expenses, if at the end of the day a residual amount is left, this is distributed fairly among the team members.',
        sendMail: 'Send E-Mail',
        name: 'Name',
        mail: 'E-Mail',
        subject: 'Subject',
        description: 'Description',
        nameRequired: 'Please enter a name',
        mailRequired: 'Please enter an E-Mail',
        mailInvalid: 'Please enter a valid E-Mail',
        subjectRequired: 'Please enter a subject',
        descriptionRequired: 'Please enter a description',
        submit: 'Submit',
        greetings: 'Best regards, ',
        signIn: 'Sign in',
        signOut: 'Sign out',
        signUp: 'Sign up',
        unexpectedFail: 'An unexpected error has occurred! Please contact us and mention the following number',
        username: 'Username',
        password: 'Password',
        passwordConfirm: 'Password confirm',
        usernameRequired: 'Please enter a username',
        passwordRequired: 'Please enter a password',
        passwordConfirmRequired: 'Please confirm your password',
        passwordConfirmPasswordConfirmed: 'Passwords don\'t match',
        forgotPassword: 'Forgot password?',
        userNotFound: 'User could not be found',
        mailFound: 'Please check your E-Mail for further instructions.',
        mailNotFound: 'E-Mail couldn\'t be assigned to any user',
        reset: 'Reset',
        profile: 'Profile',
        subscriptionExpirationDate: 'Expiration Date',
        cancel: 'Cancel',
        contactSuccess: 'We\'ll be trying to contact you as soon as possible!',
        resetPasswordRedirectFail: 'This link to reset the password is most likely either expired or didn\'t even exist in the first place. Please request a new one.',
        now: 'Now',
    },
    chinese: {
        home: '家',
        product: '产品',
        aboutUs: '关于我们',
        contact: '接触',
        language: '语言',
        authenticate: '认证',
        resetPassword: '重设密码',
        english: '英语',
        german: '德国',
        chinese: '中国',
        longDescription: 'MinePoint是一家托管公司，为“ Minecraft”游戏提供服务器和各种服务。我们将用户从服务器的复杂设置和维护中解放出来，使他们可以完全专注于游戏。',
        basic: '初级',
        premium: '额外费用',
        ads: '收购',
        noAds: '没有广告！',
        from8FrancsPerMonth: '每月CHF 8起',
        buyNow: '立即购买',
        comingSoon: '快来了',
        minePointPackage: 'MinePoint套餐',
        minePointPackageBonus: '设置服务器',
        minePointPackageBonusDescription: '我们将为您安装服务器，一次性支付5瑞士法郎。',
        minePointPackageDescription: '就成本而言，我们比大多数竞争对手提供100％的功率！',
        homelessStevePackage: '无家可归的史蒂夫包',
        homelessStevePackageDescription: '对于无家可归的玩家！',
        greedyStevePackage: '小气史蒂夫包',
        greedyStevePackageDescription: '对于那些随着时间的推移珍惜金钱的玩家！',
        impatientStevePackage: '急躁的史蒂夫·包',
        impatientStevePackageDescription: '对于重视时间而不是金钱的玩家！',
        diamondStevePackage: '钻石史蒂夫小包',
        diamondStevePackageDescription: '对于准备花费所有精力享受游戏的玩家！',
        silasZahner: '西拉斯·扎纳（Silas Zahner）',
        christianFuchs: '克里斯蒂安·福克斯（Christian Fuchs）',
        daniloFurrer: '达尼洛·富勒（Danilo Furrer）',
        kajendranPulendran: 'Kajendran Pulendran',
        chrisWolf: '克里斯·沃尔夫 (Chris Wolf)',
        nilsChapman: '尼尔斯·查普曼 (Nils Chapman)',
        gregorMuheim: '格雷戈尔·穆海姆 (Gregor Muheim)',
        silasZahnerFunction: '首席执行官',
        christianFuchsFunction: '首席行政官',
        daniloFurrerFunction: '首席销售官/首席技术官',
        kajendranPulendranFunction: '首席技术官',
        chrisWolfFunction: '首席项目官',
        nilsChapmanFunction: '首席营销官',
        gregorMuheimFunction: '首席财务官',
        silasZahnerDescription: '负责我公司的路线指导。他在团队中扮演领导角色，并在最重要的决策中拥有最终决定权。最重要的是，有很多组织和计划工作/职责。他必须确保始终及时地遵守所有任命和指控，并设定切实可行的目标。此外，如果我们的一名员工工作过多，它仍然会有所帮助。例如，在创建和编辑预告片时。',
        christianFuchsDescription: '支持首席执行官的所有任务。主要在管理领域。他负责每周的协议和任务分配。像首席执行官一样，如有必要，他可以帮助其他职位。',
        daniloFurrerDescription: '负责公司的技术任务。这首先是我们网站的维护和创建。一旦我们能够提供我们的产品/服务，他还将负责技术支持。',
        kajendranPulendranDescription: '还负责确保我们的网站正常运行。',
        chrisWolfDescription: '负责维护和创建我们的服务。为此，他必须确保我们的服务器按照规范运行，并且服务器创建的自动化操作正确执行。',
        nilsChapmanDescription: '首席营销官是一个多面手。他到处都有帮助。但是，他的主要任务是公司的市场营销。客户永远是焦点。我怎么能联系到他？这个决定对他有什么影响？等等他工作的一个例子是开幕活动的策划和组织。或制定面试问题。',
        gregorMuheimDescription: '首席财务官负责公司的财务计划和会计。他必须确保预算计划得到遵守，并获得必要的利润来支付费用，最后，剩下的差额被分配给了团队成员。',
        sendMail: '发送邮件',
        name: '名',
        mail: '电子邮件',
        subject: '主题',
        description: '描述',
        nameRequired: '请输入一个名字',
        mailRequired: '请输入电子邮件',
        mailInvalid: '请输入有效电子邮件',
        subjectRequired: '请输入主题',
        descriptionRequired: '请输入描述',
        submit: '发送',
        greetings: '最好的问候，',
        signIn: '登录',
        signOut: '登出',
        signUp: '注册',
        unexpectedFail: '发生意外的错误！请与我们联系并提及以下电话号码',
        username: '用户名',
        password: '密码',
        passwordConfirm: '确认密码',
        usernameRequired: '请输入用户名',
        passwordRequired: '请输入密码',
        passwordConfirmRequired: '请确认密码',
        passwordConfirmPasswordConfirmed: '密码不匹配',
        forgotPassword: '忘记密码',
        userNotFound: '找不到用户',
        mailFound: '请检查您的电子邮件以获取更多说明。',
        mailNotFound: '电子邮件无法分配给任何用户',
        reset: '回报',
        profile: '轮廓',
        subscriptionExpirationDate: '截止日期',
        cancel: '取消',
        contactSuccess: '我们将尝试尽快与您联系！',
        resetPasswordRedirectFail: '此重置密码的链接很可能已过期或什至根本不存在。 请要求一个新的。',
        now: '现在',
    }
};
