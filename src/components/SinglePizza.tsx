import { FC, useState } from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { Pizza } from '../types/Pizza';
import EditPizzaForm from './EditPizzaForm';

interface SinglePizzaProps {
  pizza: Pizza;
  updatePizza: (newPizza: Pizza) => void;
  deletePizza: (id: string) => void;
}

const SinglePizza: FC<SinglePizzaProps> = ({
  pizza,
  updatePizza,
  deletePizza,
}) => {
  const [edit, setEdit] = useState<boolean>(false);

  const handleToggleEdit = () => {
    setEdit(!edit);
  };

  return (
    <div className="pizza">
      <img src={`/images/${pizza.img}`} alt="pizza" />
      <h2>{pizza.title}</h2>
      <span>
        {pizza.price} {'\u20AC'}
      </span>

      <div className="pizza-controls">
        <AiFillEdit onClick={handleToggleEdit} />
        <AiFillDelete onClick={() => deletePizza(pizza.id)} />
      </div>

      {edit ? (
        <EditPizzaForm
          data={pizza}
          updatePizza={updatePizza}
          handleToggleEdit={handleToggleEdit}
        />
      ) : null}
    </div>
  );
};

export default SinglePizza;
