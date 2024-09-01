import React from "react";
import styles from "./TaskList.module.scss";
import TaskItem from "../TaskItem/TaskItem";
import { useSelector } from "react-redux";
import { selectTask } from "../TaskSlice";

// import sampleData from "./SampleData.json";

const TaskList: React.FC = () => {
  const tasks = useSelector(selectTask);

  return (
    <div className={styles.root}>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
