var arr = [];
function Add() {
    arr.push(word.value);
    console.log(arr);
}
function Search() {
    if (arr.includes(wordToFind.value)) {
        alert("Exists");
    } else {
        alert("doesn't");
    }
}
