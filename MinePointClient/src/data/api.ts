interface IApi {
    root: string;
    sub: string;
    full: string;
}

export const api: IApi = {
    root: 'http://localhost:50322/', // window.location.hostname for getting the current domain (root)
    sub: 'api/',

    get full(): string {
        return `${api.root}${api.sub}`;
    }
}

export const rootApi: string = api.root;
export const subApi: string = api.sub;
export const fullApi: string = api.full;
