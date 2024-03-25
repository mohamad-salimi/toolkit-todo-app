"use client";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import styles from "./EditTodoPage.module.css";
import { editTodo } from "@/redux/features/todos/todosSlice";

const EditTodoPage = ({ id }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const todos = useSelector((state) => state.todos.todos);
  const todo = todos.find((todo) => todo.id == id);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newTodo = { ...data, id: id };
    dispatch(editTodo(newTodo));
    router.push("/");
  };

  const cancelHandler = () => {
    router.back();
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.inputSection}>
        <div className={styles.titleInputSection}>
          <input
            type="text"
            placeholder="Title"
            className={styles.titleInput}
            defaultValue={todo.title}
            {...register("title", { required: true, minLength: 3 })}
          />
          {(errors.title?.type === "required" ||
            errors.title?.type === "minLength") && (
            <p role="alert" className={styles.errorText}>
              Title is required
            </p>
          )}
          <input
            type="text"
            placeholder="Detail"
            className={styles.titleInput}
            defaultValue={todo.detail}
            {...register("detail")}
          />
        </div>

        <div className={styles.editTodoButtonSection}>
          <button type="submit">Update</button>
          <button
            type="button"
            onClick={() => {
              cancelHandler();
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditTodoPage;
