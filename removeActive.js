export const removeActive= (btns)=>{
  btns.forEach(btn => {
    btn.classList.remove('active')
  });
}
