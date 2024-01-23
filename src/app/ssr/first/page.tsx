import Counter from "@/components/Counter";

const getTodo = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  return await res.json();
};

export default async function Page() {
  const todo = await getTodo();
  return (
    <>
      <Counter />
      {todo.map((todo: any) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </>
  );
}
