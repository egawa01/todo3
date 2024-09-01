import React from "react";
import styles from "./TaskForm.module.scss";
import TextField from "@mui/material/TextField";
import { useForm, SubmitHandler } from "react-hook-form";
import { createTask } from "../TaskSlice";
import { useDispatch } from "react-redux";

type Inputs = {
  taskTitle: string;
};

const TaskForm: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const dispatch = useDispatch();

  const handleCreate: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    dispatch(createTask(data.taskTitle));
    reset();
  };

  return (
    <div className={styles.root}>
      <form className={styles.form} onSubmit={handleSubmit(handleCreate)}>
        <TextField
          id="standard-basic"
          label="New Task"
          variant="standard"
          className={styles.text_field}
          {...register("taskTitle", { required: true })}
        />
      </form>
    </div>
  );
};

export default TaskForm;
