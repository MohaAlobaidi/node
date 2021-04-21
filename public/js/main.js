$( document ).ready(function() {
  $(".parent-spinner").fadeOut(1000)
});

function deletePost(id){
  document.getElementById('deleteID').value = id
  console.log(id);
}


function editPost(id){
  document.getElementById('editID').value = id
let oldTitle =  document.getElementById('titleWantToEditID' +id).innerText

let oldDesc = document.getElementById('descWantToEditID' + id).innerText

document.getElementById('editTitle').value = oldTitle
document.getElementById('editDesc').value = oldDesc;

}