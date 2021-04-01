const yargs = require('yargs')
const students = require('./grades')

yargs.command({
    command: 'add',
    describe: 'Add students with grades',
    builder: {
        name: {
            describe: 'This description of add new student command',
            demandOption: true,
            type: 'string'
        },
        subject: {
            describe: 'This description of add new subject command',
            demandOption: true,
            type: 'string'
        },
        grade: {
            describe: 'This description of add new grade command',
            demandOption: true,
            type: Number
        }
    },
    handler: (argv) => {
       students.addStudent(argv.name,argv.subject,argv.grade,argv.comment)
    }
})


yargs.command({
    command: 'read',
    describe: 'Read one student with grades',
    builder: {
        name: {
            describe: 'This description of read one student command',
            demandOption: true,
            type: 'string'
        }

    },
    handler: (argv) => {
        students.readStudent(argv.name)
    }
})


yargs.command({
    command: 'delete',
    describe: 'Delete students grades',
    builder: {
        name: {
            describe: 'This descriptiom of delete one student with grades',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        students.deleteStudent(argv.name)
    }
})


yargs.command({
    command: 'list',
    describe: 'List all students',
    handler: (argv) => {
        students.listStudent(argv.name)
    }
})

yargs.parse();