let a = new Map;
a.set(1, "first");
a.set(3, "third")

console.log(a.size);
a.set(2,"second");
a.delete(2);
if(a.has(1)){
    console.log(a.get(1));
}
console.log(a.has(2));

for(let number of a.keys()){
    console.log(number);
}
for(let numeral of a.values()){
    console.log(numeral);
}

function transform(str){
    if(typeof str === "string"){
        for(let key of a.keys()){
            str = str.replace(String(key), a.get(key));
        }
        return str;
    }else{
        throw new Error("str must be string");
    }
}

console.log(transform("This year I will enter the 1 grade. I have two brothers. I am the 3 child of my parents."));