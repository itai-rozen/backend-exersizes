const example2 = () => {
    console.log('imported from a module')
}
export default example2

const func2 = () => {
    console.log('function 2 from external')
}

const func3 = () => {
    console.log('function 3 in da house')
}

export { func2, func3 }