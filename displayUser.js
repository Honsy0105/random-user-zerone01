import get from "./getElement.js"
import {removeActive} from './removeActive.js'

const btns = get('.btn')
const valueDOM = get('.user-value')
const userDOM = get('.user-name')
const imageDOM = get('.user-img')

const displayUsers = (person)=>{
  removeActive(btns)
  imageDOM.src = person.image
  valueDOM.textContent = `My Name Is`
  userDOM.textContent = person.name
  btns[0].classList.remove('active')
  btns.forEach(btn => {
    btn.addEventListener('click', ()=>{
      const label = btn.dataset.label
        valueDOM.textContent = `My ${label} Is`
        userDOM.textContent = person[label]
        removeActive(btns)
        btn.classList.add('active')
    })
  });
}
export default displayUsers
