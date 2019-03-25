const users = [
    { name: 'Peter Packer', email: 'peter@marvel.com' },
    { name: 'Stan Lee', email: 'stan.lee@marvel.com' }
]

export class User {
    static findAll(): Promise<any[]> {
        return Promise.resolve(users)
    }
}