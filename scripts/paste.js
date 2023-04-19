getRoles()

function getRoles()
{
  chrome.storage.session.get(["roles"]).then((result) => {
pasteRoles(result.roles);
  });
}
function pasteRoles(rolesObj)
{
  for (let i=0; i < rolesObj.length; i++) {
    document.getElementById(rolesObj[i]).checked = true;
  };

}