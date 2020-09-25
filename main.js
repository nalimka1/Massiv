
var massiv = [1, 13, 12, 16, 14, 2, 35, 67, 54, 38, 45, 68, 4]
var a =prompt();

for (i = 0; i < massiv.length; i++) {
    if (a == massiv[i]) {
        alert("Найден элемент "+massiv[i])
    }
    if (a !== massiv[i]) { 
        alert("Элемент не найден ")
        break; 
    }   
}  