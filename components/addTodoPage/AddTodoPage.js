"use client";
import { useDispatch } from "react-redux";
import { addTodo } from "@/redux/features/todos/todosSlice";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import styles from "./AddTodoPage.module.css";

const AddTodo = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(addTodo(data));
    router.push("/");
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.inputSection}>
        <div className={styles.titleInputSection}>
          <input
            type="text"
            placeholder="Title"
            className={styles.titleInput}
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
            {...register("detail")}
          />
        </div>

        <div className={styles.addTodoButton}>
          <button type="submit">ADD</button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
