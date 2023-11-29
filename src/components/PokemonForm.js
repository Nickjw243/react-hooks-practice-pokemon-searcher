import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({addPokemon, url}) {
  const formOutline = {
    name: '',
    hp: '',
    frontUrl: '',
    backUrl: ''
  }

  // const newAddedPokemon = {
  //   name: form.name,
  //   hp: form.hp,
  //   sprites: {
  //     front: form.sprites.front,
  //     back: form.sprites.back
  //   }
  // }

  const [form, setForm] = useState(formOutline)

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(url, {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({
        name: form.name,
        hp: parseInt(form.hp),
        sprites: {
          front: form.frontUrl,
          back: form.backUrl
        }
      })
    })
    .then(r => r.json())
    .then(data => {
      addPokemon(data)
      setForm(formOutline)
    })
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={handleChange} value={form.name}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={handleChange} value={form.hp}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={handleChange}
            value={form.frontUrl}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={handleChange}
            value={form.backUrl}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
