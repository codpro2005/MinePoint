interface IRoutes {
    [index: string]: Route;
}

class Route {
    home: string;
    product: string;
    aboutUs: string;
    contact: string;
    authenticate: {
        self: string;
        signIn: string;
        signUp: string;
    };
    profile: string;
    resetPassword: string;
    resetPasswordFail: string;
    resetPasswordId: string;

    // public getAbsolute(): Route {
    //     return new Route();
    // }
}

// interface IInnerRoute {
//     self: string;
//     [index: string]: string;
// }

export const routes: IRoutes = {
    relative: {
        home: '',
        product: 'product',
        aboutUs: 'about-us',
        contact: 'contact',
        authenticate: {
            self: 'authenticate',
            signIn: 'sign-in',
            signUp: 'sign-up',
        },
        profile: 'profile',
        resetPassword: 'reset-password',
        resetPasswordFail: 'reset-password/fail',
        resetPasswordId: 'reset-password/:id',
    },
    absolute: {
        home: '/',
        product: '/product',
        aboutUs: '/about-us',
        contact: '/contact',
        authenticate: {
            self: '/authenticate',
            signIn: '/authenticate/sign-in',
            signUp: '/authenticate/sign-up',
        },
        profile: '/profile',
        resetPassword: '/reset-password',
        resetPasswordFail: '/reset-password/fail',
        resetPasswordId: '/reset-password/:id',
    }
};

export const relativeRoute = routes.relative;
export const absoluteRoute = routes.absolute;
