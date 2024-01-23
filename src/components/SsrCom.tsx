import Counter from "./Counter";

const getTodo = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  return await res.json();
};

const SsrCom: React.FC = async () => {
  const todo = await getTodo();
  return (
    <>
    <Counter />
      {todo.map((todo: any) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </>
  );
};

export default SsrCom;
