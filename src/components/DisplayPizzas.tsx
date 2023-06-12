import { FC } from 'react';
import { usePagination } from '../hooks/usePagination';
import { Pizza } from '../types/Pizza';
import SinglePizza from './SinglePizza';

interface DisplayPizzasProps {
  pizzasList: Pizza[];
  updatePizza: (newPizza: Pizza) => void;
  deletePizza: (id: string) => void;
}

const DisplayPizzas: FC<DisplayPizzasProps> = ({
  pizzasList,
  updatePizza,
  deletePizza,
}) => {
  // Pagination
  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    setPage,
    totalPages,
  } = usePagination({
    contentPerPage: 2,
    count: pizzasList.length,
  });

  return (
    <div className="container">
      {pizzasList.slice(firstContentIndex, lastContentIndex).map(pizza => (
        <SinglePizza
          key={pizza.id}
          pizza={pizza}
          updatePizza={updatePizza}
          deletePizza={deletePizza}
        />
      ))}

      {/* Pagination button block */}
      {!!pizzasList.length && (
        <div className="pagination">
          <p className="text">
            {page}/{totalPages}
          </p>
          <button onClick={prevPage} className="page">
            &larr;
          </button>

          {[...Array(totalPages).keys()].map(el => (
            <button
              onClick={() => setPage(el + 1)}
              key={el}
              className={`page ${page === el + 1 ? 'active' : ''}`}
            >
              {el + 1}
            </button>
          ))}

          <button onClick={nextPage} className="page">
            &rarr;
          </button>
        </div>
      )}
    </div>
  );
};

export default DisplayPizzas;
