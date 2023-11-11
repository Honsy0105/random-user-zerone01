const URL = 'https://randomuser.me/api/';

const fetchUsers = async () => {
  const response = await fetch(URL)
  const data = await response.json()
  const person = data.results[0];
  const { phone, email } = person;
  const { large: image } = person.picture;
  const { password } = person.login;
  const { first, last } = person.name;
  const {
    dob: { age },
  } = person;
  const {
    street: { number, name },
  } = person.location;

  return {
    email,
    phone,
    age,
    image,
    password,
    name: `${first} ${last}`,
    street: `${number} ${name}`
  }
}

export default fetchUsers