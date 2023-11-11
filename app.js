import fetchUsers from "./utils/fetchUsers.js";
import displayUsers from "./utils/displayUser.js";
import get from "./utils/getElement.js";

const btn = get('.btn')

const init = async()=>{
  const person = await fetchUsers()
   displayUsers(person)
}

window.addEventListener('DOMContentLoaded', init)

btn.addEventListener('click', init)