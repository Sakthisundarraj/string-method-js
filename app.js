let userinput

function length() {
    userinput = document.getElementById("userinput").value
    let text = userinput.length
    document.getElementById("useroutput").value = text
}

function uppercase() {
    userinput = document.getElementById("userinput").value
    let text = userinput.toUpperCase()
    document.getElementById("useroutput").value = text
}

function lowercase() {
    userinput = document.getElementById("userinput").value
    let text = userinput.toLowerCase()
    document.getElementById("useroutput").value = text
}

function concat() {
    let joindata = prompt("Enter a value to Concat")
    let temptext = joindata
    let text = userinput.concat(temptext)
    document.getElementById("useroutput").value = text
}

function trim() {
    userinput = document.getElementById("userinput").value
    let text = userinput.trim()
    document.getElementById("useroutput").value = text
}

function repeat() {
    userinput = document.getElementById("userinput").value
    let a = prompt("Enter a number to repeat")
    let text = userinput.repeat(a)
    document.getElementById("useroutput").value = text
}

function replace() {
    userinput = document.getElementById("userinput").value
    let a = prompt("need to replace")
    let b = prompt("replace with")
    let text = userinput.replace(a, b)
    document.getElementById("useroutput").value = text
}
function split() {
    userinput = document.getElementById("userinput").value
    let text = userinput.split("")
    document.getElementById("useroutput").value = text
}
function slice() {
    userinput = document.getElementById("userinput").value
    let a = prompt("enter a start index value")
    let b = prompt("Enter a end index value")
    let text = userinput.slice(a, b)
    document.getElementById("useroutput").value = text
}

function indexof() {
    userinput = document.getElementById("userinput").value
    let a = prompt("Enter a value")
    let text = userinput.indexOf(a)
    document.getElementById("useroutput").value = text
}

function match() {
    userinput = document.getElementById("userinput").value
    let input = prompt("Enter a data to find")
    let text = userinput.match(input)
    document.getElementById("useroutput").value = text.length + "," + input
}

function search() {
    userinput = document.getElementById("userinput").value
    let input = prompt("Enter a data to find")
    let text = userinput.search(input)
    document.getElementById("useroutput").value = text
}


