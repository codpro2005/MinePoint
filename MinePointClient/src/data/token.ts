import { Session } from './session';

export class Token<T> {
    session: Session;
    value: T;
}
