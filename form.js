function buildComment(data){
  return '<a href="mailto:'+data.email+'">'+data.username+'</a><button onclick="remove(this.parentElement);">Удалить</button><button disabled="disabled">Редактировать</button><div>'+data.comment+'</div>'
}

function remove(comment){
  if(confirm("Удалить,")){
    comment.parentElement.removeChild(comment);
  }
}
function commentSubmit(event){
  event.preventDefault();
  var form = event.target;
  var data = {
    'username': form.querySelector('#username').value,
    'email': form.querySelector('#email').value,
    'comment': form.querySelector('#comment').value
  }

  var commentHtml = buildComment(data);
  var singleComment = document.createElement('div');
  singleComment.innerHTML = commentHtml;
  comments.insertBefore(singleComment, comments.firstChild);
  return false;
}

document.addEventListener('DOMContentLoaded', function(){
  comment.addEventListener("submit", commentSubmit);
}, false);
