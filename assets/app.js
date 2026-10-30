const dialog=document.querySelector('#architecture-dialog');
const opener=document.querySelector('[data-open-architecture]');
if(dialog&&opener){opener.addEventListener('click',()=>dialog.showModal());dialog.querySelector('.close').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});}
