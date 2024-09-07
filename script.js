
const input=document.getElementById('input')
const close=document.getElementById('close')
const board=document.getElementById('board')
const addnote=document.getElementById('addnote')
const create=document.getElementById('create')

addnote.addEventListener('click',function(){
    board.style.display='block'
})
close.addEventListener('click',function(){
    board.style.display='none'
    input.value=''
})
create.addEventListener('click',function(){
   const newnote=document.createElement('div')
   newnote.className='note newnote'
   noteapp.appendChild(newnote)
   const notevalue=input.value
   newnote.textContent=notevalue
   console.log(notevalue)

   const newbutton =document.createElement('div')
   newbutton.className='newb'
   const editor=document.createElement('button')
   editor.textContent='edit'
   editor.className='bt'
   const deleter=document.createElement('button')
   deleter.textContent='delete'
   deleter.className='bt'
   
    

   newbutton.appendChild(editor)
   newbutton.appendChild(deleter)
   newnote.appendChild(newbutton)
   deleter.addEventListener('click',function(){
    newnote.remove()
    })
    editor.addEventListener('click',function(){
        newnote.remove()
        board.style.display='block'
        create.textContent='save'
        input.value=notevalue
    })
    input.value=''
    board.style.display='none'
    })
    
   
    
    

   
   

