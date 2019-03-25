"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users = [
    { name: 'Peter Packer', email: 'peter@marvel.com' },
    { name: 'Stan Lee', email: 'stan.lee@marvel.com' }
];
class User {
    static findAll() {
        return Promise.resolve(users);
    }
}
exports.User = User;
