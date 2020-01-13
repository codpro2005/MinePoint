import { Subscription } from './subscription';

export class User {
    id: string;
    mail: string;
    password: string;
    setUp: boolean;
    subscriptions: Subscription[];
}
