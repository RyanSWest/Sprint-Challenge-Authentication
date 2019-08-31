const db = require('../database/dbConfig')
const usersModel = require('./jokes-model')

describe('users model', ()=> {
    describe('insert', ()=> {
        beforeEach(async ()=> {
            await db('users').truncate()
        })
        it('should insert a user', async ()=> {
            await usersModel.add({username: 'Targareyen', password: 'Dracarys'})

            const Users = await db('users');
            expect(Users).toHaveLength(6)
        })
    })  
})