import React from 'react';

export default function SignupForm() {
  // states here

  let [name, setName] = React.useState('Mary');
  let [email, setEmail] = React.useState('mary.poppins@disney.fr');

  const display = (e) => {
    e.preventDefault();

    {
      /*const nameInput = document.getElementById('name').value;
    const emailInput = document.getElementById('email').value;*/
    }

    console.log(name, email);
  };

  return (
    <form>
      <label htmlFor="name">
        Name :
        <input
          type="text"
          name="name"
          id="name"
          placeholder={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label htmlFor="email">
        Email :
        <input
          type="email"
          name="email"
          id="email"
          placeholder={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <br />
      <button type="submit" onClick={display}>
        Submit
      </button>
    </form>
  );
}
