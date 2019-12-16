interface IRoutes {
    relative: IRoute;
    absolute: IRoute;
}

interface IRoute {
    home: string;
    product: string;
    aboutUs: string;
    contact: string;
    authenticate: string;
    signIn: string;
    signUp: string;
    profile: string;
}

export const routes: IRoutes = {
    relative: {
        home: '',
        product: 'product',
        aboutUs: 'about-us',
        contact: 'contact',
        authenticate: 'authenticate',
        signIn: 'sign-in',
        signUp: 'sign-up',
        profile: 'profile',
    },
    absolute: {
        home: '/',
        product: '/product',
        aboutUs: '/about-us',
        contact: '/contact',
        authenticate: '/authenticate',
        signIn: '/authenticate/sign-in',
        signUp: '/authenticate/sign-up',
        profile: '/profile',
    }
}

export const relativeRoute = routes.relative;
export const absoluteRoute = routes.absolute;
