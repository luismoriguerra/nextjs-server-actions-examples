import prisma from "./prisma";

export async function getTodos() {
  try {
    const todos = await prisma.todo.findMany();
    return { todos };
  } catch (error) {
    return { error };
  }
}

export async function createTodo(title: string) {
  try {
    const todo = await prisma.todo.create({ data: { title } });
    return { todo };
  } catch (error) {
    return { error };
  }
}

export async function getTodoById(id: number) {
  try {
    const todo = await prisma.todo.findUnique({ where: { id } });
    return { todo };
  } catch (error) {
    return { error };
  }
}

export async function updateTodo(id: number, isCompleted: boolean) {
  try {
    const todo = await prisma.todo.update({
      where: { id },
      data: { done: isCompleted },
    });
    return { todo };
  } catch (error) {
    return { error };
  }
}
