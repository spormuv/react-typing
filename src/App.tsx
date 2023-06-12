import { FC, useEffect, useState } from 'react';
import AddPizzaForm from './components/AddPizzaForm';
import DisplayPizzas from './components/DisplayPizzas';
import { Pizza } from './types/Pizza';

const localStoragePizzas = localStorage.getItem('pizzas');
const initPizzaList = localStoragePizzas ? JSON.parse(localStoragePizzas) : [];

const setLocalPizzas = (list: Pizza[]) => {
  localStorage.setItem('pizzas', JSON.stringify(list));
};

const App: FC = () => {
  const [pizzasList, setPizzasList] = useState<Pizza[]>(initPizzaList);

  useEffect(() => {
    setLocalPizzas(pizzasList);
  }, [pizzasList]);

  const addPizza = (newPizza: Pizza) => {
    setPizzasList([...pizzasList, newPizza]);
  };

  const updatePizza = (newPizza: Pizza) => {
    setPizzasList(
      pizzasList.map(pizza => (pizza.id === newPizza.id ? newPizza : pizza))
    );
  };

  const deletePizza = (id: string) => {
    const newPizzasList = pizzasList.filter(pizza => pizza.id !== id);
    setPizzasList(newPizzasList);
  };

  return (
    <div className="App">
      <div className="wrap">
        <span className="heading">Our Pizzeria</span>
        <AddPizzaForm addPizza={addPizza} />
        <DisplayPizzas
          pizzasList={pizzasList}
          updatePizza={updatePizza}
          deletePizza={deletePizza}
        />
      </div>
    </div>
  );
};

export default App;
