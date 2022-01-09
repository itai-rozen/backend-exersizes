// const fs = require('fs')
import fs from 'fs'
import  ex2 from './moduleExports.mjs'
import example, {func2, func3}  from './moduleExports.mjs'
fs.writeFile('test.txt', 'yo globe', () => {console.log('done')})
fs.copyFile('test.txt','text(1).txt',() => {console.log('copied')})
// creating a file
fs.writeFileSync('test2.txt', 'yo sync globe')
// copying a file
fs.copyFileSync('test2.txt', 'test2(copy).txt')
//renaming a file
fs.renameSync('test2(copy).txt', 'test2_original.txt')
// browsing a folder
const files = fs.readdirSync('/')
files.forEach(file => console.log(file))
// deleting a file
fs.unlinkSync('text(1).txt')
example()
ex2()
func2()
func3()