

function size(x){
    let txt = x;
    let length = txt.length;
    console.log(txt)
    console.log(length)
    txt=txt.slice(0,8)
    console.log(txt)
    txt=txt.replace("Praveen","Sree")
    console.log(txt)
    txt=txt.toUpperCase()
    console.log(txt)
    let name= "PRAVEEN"
    name=name.concat(" ",txt)
    console.log(name)
    console.log((name.charAt(5)))
    console.log((name.charCodeAt(5)))
    let names = name.split(" ")
    console.log(names[0])
    console.log(name.indexOf("SREE"))
    console.log(name.lastIndexOf("PRAVEEN"))
    let word = "The rain in SPAIN stays mainly in the plain"; 
    console.log(word.match(/ain/g))
    console.log(word.includes("SPAIN"))
    console.log(name.startsWith("SREE", 8))
     console.log(`Welcome ${name}!`)
}
size("Praveen Sree");
