const users = [
    { id: '1', name: 'Peter Packer', email: 'peter@marvel.com' },
    { id: '2', name: 'Stan Lee', email: 'stan.lee@marvel.com' }
]

export class User {
    static findAll(): Promise<any[]> {
        return Promise.resolve(users)
    }

    static findById(id: string): Promise<any> {
        return new Promise(resolve => {
            const filtered = users.filter(u => u.id === id)
            let user = undefined
            if (filtered.length > 0) {
                user = filtered[0];
            }

            resolve(user);
        })
    }
}