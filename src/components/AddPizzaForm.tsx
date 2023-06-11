import { nanoid } from '@reduxjs/toolkit';
import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { Pizza } from '../models/Pizza';
import './styles.css';

interface AddPizzaFormProps {
  addPizza: (newPizza: Pizza) => void;
}

const initState = {
  title: '',
  price: '',
  img: '',
};

const AddPizzaForm: FC<AddPizzaFormProps> = ({ addPizza }) => {
  const [newPizza, setNewPizza] = useState<typeof initState>(initState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewPizza({ ...newPizza, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, price, img } = newPizza;

    if (title && price && img) {
      addPizza({
        title,
        price: +price,
        img,
        id: nanoid(),
      });
      setNewPizza(initState);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={newPizza.title}
        placeholder="Title"
        onChange={handleChange}
      />
      <input
        type="text"
        name="price"
        value={newPizza.price}
        placeholder="Price"
        onChange={handleChange}
      />
      <input
        type="text"
        name="img"
        value={newPizza.img}
        placeholder="Image"
        onChange={handleChange}
      />
      <button type="submit">+ Add to menu</button>
    </form>
  );
};

export default AddPizzaForm;
