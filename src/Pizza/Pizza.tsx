import { useState } from 'react';
import PizzaPicture from './img/p_O.jpg'


export default function Pizza():JSX.Element{

    const ingredients = ["Сыр", "Салями", "Помидоры","Креветки"];

    const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);

  // Функция для добавления ингредиента к пицце
  const addIngredient = (ingredient:string) => {
    setSelectedIngredients([...selectedIngredients, ingredient]);
  };

  // Функция для удаления ингредиента из пиццы
  const removeIngredient = (ingredient:string) => {
    const updatedIngredients = selectedIngredients.filter(item => item !== ingredient);
    setSelectedIngredients(updatedIngredients);
  };

    return(
        <div>
        <h2>Сделай пиццу своими руками!</h2>
         <img width="300px" src={PizzaPicture} alt="Картинка пиццы" />
         <div>
         <h4>Выберите ингридиенты для пиццы:</h4> 
         <ul>
        {ingredients.map(ingredient => (
          <li key={ingredient}>
            {ingredient}
            {
              selectedIngredients.includes(ingredient) ? 
                <button onClick={() => removeIngredient(ingredient)}>Удалить</button> :
                <button onClick={() => addIngredient(ingredient)}>Добавить</button>
            }
             <button onClick={() => addIngredient(ingredient)}>Добавить</button>
          </li>
        ))}
      </ul>
         </div>
         
         <h3>Текущее содержание пиццы:</h3>
         <p>{selectedIngredients.join(", ")}</p>

        </div>
    );
}