import { nanoid } from '@reduxjs/toolkit';
import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { Pizza } from '../models/Pizza';
import './styles.css';

interface EditPizzaFormProps {
  data: Pizza;
  updatePizza: (newPizza: Pizza) => void;
  handleToggleEdit: () => void;
}

const EditPizzaForm: FC<EditPizzaFormProps> = ({
  data,
  updatePizza,
  handleToggleEdit,
}) => {
  const [editPizza, setEditPizza] = useState<Pizza>(data);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditPizza({ ...editPizza, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, price, img } = editPizza;

    if (title && price && img) {
      updatePizza(editPizza);
      handleToggleEdit();
    }
  };

  return (
    <form className="edit-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={editPizza.title}
        placeholder="Title"
        onChange={handleChange}
      />
      <input
        type="text"
        name="price"
        value={editPizza.price}
        placeholder="Price"
        onChange={handleChange}
      />
      <input
        type="text"
        name="img"
        value={editPizza.img}
        placeholder="Image"
        onChange={handleChange}
      />
      <button type="submit">Confirm</button>
    </form>
  );
};

export default EditPizzaForm;
