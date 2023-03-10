export const Item = ({ animal, removeAnimal }) => {
  return (
    <ul>
      <li>
        {animal.text}
        <button onClick={()=>removeAnimal(animal.id)}>Delete</button>
      </li>
    </ul>
  );
};
