const fs = require('fs');


// Start Function Add //
const addStudent = (name,subject,grade,comment)=> {
    const students = loadStudents();

    const duplicateNames = students.filter((student)=>{
        return student.name === name
    })
    if(duplicateNames.length === 0)
    {
        students.push({
            name,
            subject,
            grade,
            comment
        })
        saveStudents(students)

        console.log('Saved Successfully')

    }
    else{
        console.log('Failed ! Duplicates..')
    }
}
// End Function Add //



// Start Function Delete //

const deleteStudent = (name)=>{
    const students = loadStudents();
    const data = students.filter((student)=>{
        return student.name !== name
    })
    if(data.length !== -1)
    {
        saveStudents(data)
        console.log('Student is removed')
    }
    else
    {
        console.log('There is no student')
    }
}

// End Function Delete //

// Start Function Read //
    const readStudent = ((name)=>{
        const myStudents = loadStudents()

        const onlyOneStudent = myStudents.find((student)=>{
            return student.name === name
        })
        if(onlyOneStudent){
            console.log('Student Name : ' + onlyOneStudent.name)
            console.log('Student Subject : ' + onlyOneStudent.subject)
            console.log('Student Score : ' + onlyOneStudent.grade)
            console.log('Student Grade : ' + onlyOneStudent.comment)
        }
        else{
            console.log('Student Not Found')
        }
    })
// End Function Read //

// Start List Function //
const listStudent=()=>{
    const allStudents = loadStudents()
     allStudents.forEach(student => {
                console.log(student.name)
    });
}
// End List Function //

// Start Function Load //
const loadStudents = ()=>{
    try{
        const data = fs.readFileSync('grades.json').toString()
        return JSON.parse(data)
    }
    catch(e){
        return[]
    }
}
// End Function Load //

// Start Function Save //
const saveStudents = (students)=>{
    const saveData = JSON.stringify(students)
    fs.writeFileSync('grades.json',saveData)
}
// End Function Save //
module.exports={
    addStudent,
    deleteStudent,
    readStudent,
    listStudent
}