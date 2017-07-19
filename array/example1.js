const names = ['maria', 'josé', 'joão'];
for(let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

names.forEach(name => console.log(name));

const printName = name => {
    console.log(name);
}

names.forEach(printName);
