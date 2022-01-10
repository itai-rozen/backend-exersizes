import fs from "fs";
console.log(process.argv);

if (process.argv[2] === "init") {
    const obj = {
        name: "moshe",
        salary: 123
    }
    fs.writeFileSync("data.json", JSON.stringify(obj));
}

if (process.argv[2] === "give_raise") {
    const data = fs.readFileSync("data.json").toString();
    
    let obj = JSON.parse(data);
    console.log(obj);
    obj.salary += +process.argv[3];
    console.log(obj);
    fs.writeFileSync("data.json", JSON.stringify(obj));
}