const fs = require('fs')
const yargs = require('yargs')
const uniqid = require('uniqid'); 
const { argv } = require('process');

const loadData = () => {
    try {
        const usersData =  fs.readFileSync('users.json').toString()
        return JSON.parse(usersData)
    } catch(e) {
        return []
    }
}

const saveToFile = arr => {
    fs.writeFileSync('users.json', JSON.stringify(arr))
}

const getUser = id => {
    const users = loadData()
    const foundUser = users.find(user => user.id === id)
    return foundUser
}

const getIdx = id => {
    const users = loadData()
    const userIdx = users.findIndex(user => user.id === id)
    return (userIdx !== -1) ? userIdx : undefined
}

yargs.command({
    command: 'add',
    describe: 'add user',
    builder: {
        username : {
            describe: 'username',
            demandOption: true,
            type: 'string'
        },
        email : {
            describe: 'user email',
            demandOption: true,
            type: 'string'
        },
        password: {
            descrive: 'user password',
            demandOption: true,
            type:'string'
        }
    },
    handler: function () {
        const usersArr = loadData()
        const { username, email, password } = yargs.argv
        const userObject = {
            id: uniqid(),
            name: username,
            email: email,
            password: password
        }
        usersArr.push(userObject)
        saveToFile(usersArr)
    }
})

yargs.command({
    command: 'read',
    describe: 'read a specific user by id',
    builder: {
        id : {
            describe: 'user id',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function () { 
        const { id } = yargs.argv
        const user = getUser(id)
        console.log('user:',user)
    }

})

yargs.command({
    command: 'update',
    describe: 'update a specific user by id',
    builder: {
        id : {
            describe: 'user id',
            demandOption: true,
            type: 'string'
        },
        newName: {
            describe: 'new username',
            type: 'string'
        },
        newEmail: {
            describe: 'new email',
            type: 'string'
        },
        newPassword: {
            describe: 'new password',
            type:'string'
        }
    },
    handler: function () { 
        const { id } = yargs.argv
        const users = loadData()
        const user = users.find(user => user.id === id)
        try {
            user.name = yargs.argv.newName || user.name 
            user.email = yargs.argv.newEmail || user.email 
            user.password = yargs.argv.newPassword || user.password
            saveToFile(users)
        } catch(e) {
            console.log('user not found');
        }
    }
})

yargs.command({
    command: 'delete',
    describe: 'delete a user',
    builder: {
        id: {
            describe: 'user id',
            demandOption:true,
            type: 'string'
        }
    },
    handler: () => {
        const { id } = yargs.argv
        const users = loadData()
        try {
            const filteredUsers = users.filter(user => user.id !== id)
            saveToFile(filteredUsers)
        } catch(e) {
            console.log('user not found');
        }
    }
})

yargs.parse()