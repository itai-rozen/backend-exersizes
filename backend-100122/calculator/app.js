const yargs = require('yargs')(process.argv.slice(2))

yargs.command({
    command: 'calc',
    describe: 'sums up two numbers',
    builder: {
        add: {
            describe: 'result',
            demandOption: true,
            type: 'number'
        },
    },
    handler: function () {
        const num1 = yargs.argv.add
        const num2 = yargs.argv._[1]  
        console.log(`${num1} + ${num2} = `,num1+num2)
    }
})

yargs.command({
    command: 'calc',
    describe: 'sums up two numbers',
    builder: {
        sub: {
            describe: 'result',
            demandOption: true,
            type: 'number'
        },
    },
    handler: function () {
        const num1 = yargs.argv.sub
        const num2 = yargs.argv._[1]  
        console.log(`${num1} - ${num2} = `,num1-num2)
    }
})

yargs.command({
    command: 'calc',
    describe: 'sums up two numbers',
    builder: {
        mult: {
            describe: 'result',
            demandOption: true,
            type: 'number'
        },
    },
    handler: function () {
        const num1 = yargs.argv.mult
        const num2 = yargs.argv._[1]  
        console.log(`${num1} * ${num2} = `,num1*num2)
    }
})

yargs.command({
    command: 'calc',
    describe: 'sums up two numbers',
    builder: {
        pow: {
            describe: 'result',
            demandOption: true,
            type: 'number'
        },
    },
    handler: function () {
        const num1 = yargs.argv.pow 
        console.log(`${num1} powered = `,num1*num1)
    }
})
yargs.parse()


