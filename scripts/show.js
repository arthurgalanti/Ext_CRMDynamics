listarRoles();

function listarRoles()
{
    let markedCheckbox = document.querySelectorAll('input[type="checkbox"]:checked');
    let arrayRoles = [];
    markedCheckbox.forEach((checkbox) => 
    {
        let role = checkbox.parentNode.parentNode.childNodes[1].innerText;
        arrayRoles.push(role);
    })
    console.log(arrayRoles.join("\n"));
    alert(arrayRoles.join("\n"));
}
