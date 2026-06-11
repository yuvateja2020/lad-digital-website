document.querySelectorAll('[data-year]').forEach((node)=>node.textContent=new Date().getFullYear());
const form=document.querySelector('[data-form]');
if(form){form.addEventListener('submit',(event)=>{event.preventDefault();const success=document.querySelector('[data-success]');form.style.display='none';if(success)success.classList.add('show');});}
