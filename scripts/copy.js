copyRoles();

function copyRoles()
{
    let markedCheckbox = document.querySelectorAll('input[type="checkbox"]:checked');
    let arrayRoles = [];
    markedCheckbox.forEach((checkbox) => 
    {   
        let checkboxId = checkbox.id;
        arrayRoles.push(checkboxId);
    });
    console.log(arrayRoles);


    chrome.storage.session.set({ "roles": arrayRoles }).then(() => {
      });
}




