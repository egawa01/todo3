import React from "react";
import styles from "./TaskItem.module.scss";
import Checkbox from "@mui/material/Checkbox";
import EventNoteIcon from "@mui/icons-material/EventNote";
import DeleteIcon from "@mui/icons-material/Delete";
import { completeTask, deleteTask } from "../TaskSlice";
import { useDispatch } from "react-redux";

interface PropTypes {
  task: { id: number; title: string; completed: boolean };
}

const TaskItem: React.FC<PropTypes> = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.root}>
      <div className={styles.title}>
        <div className={styles.title_text}>{task.title}</div>
      </div>
      <div className={styles.right_itme}>
        <Checkbox
          checked={task.completed}
          onClick={() => dispatch(completeTask(task))}
          className={styles.checkbox}
        />
        <button
          onClick={() => dispatch(deleteTask(task))}
          className={styles.delete_button}
        >
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
