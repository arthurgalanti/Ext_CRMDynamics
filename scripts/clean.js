cleanRoles();

function cleanRoles()
{
    let allCheckbox = document.getElementsByClassName("checkbox");

    Array.prototype.forEach.call(allCheckbox, checkbox =>
    {
        checkbox.checked = false;
    });
}