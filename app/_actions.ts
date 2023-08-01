"use server";

import { createTodo, updateTodo } from "@/lib/todos";
import { revalidatePath } from "next/cache";

export async function createTodoAction(title: string) {
  await createTodo(title);
  revalidatePath("/");
}

export async function updateTodoAction(id: number, isCompleted: boolean) {
  await updateTodo(id, isCompleted);
  revalidatePath("/");
}
