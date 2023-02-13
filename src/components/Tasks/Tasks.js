import Task from './Task/Task';
import './Tasks.scss';
import { AiOutlineClear } from 'react-icons/ai';

function Tasks({ tasks, onStatusChange, onTaskRemove, onClearTasks }) {

    return (
        <div className="container">
            <div className="task-list-container">
                <h2 className="title">These are the tasks:</h2>
                {tasks.map((task, index) => (
                    <Task
                        key={index}
                        task={task}
                        onStatusChange={onStatusChange}
                        onTaskRemove={onTaskRemove}
                    />
                ))}
                <div className="clear-tasks-container">
                    <button className="clear-tasks-button" onClick={onClearTasks}>
                        <AiOutlineClear /> Clear Tasks
                    </button>
                    {/* <h2 className='subtitle'>Add a new task:</h2> */}
                </div>
            </div>
        </div>
    );
}

export default Tasks;



/* Old version */
// import Task from './Task/Task';
// import styled from 'styled-components';

// // creating a styled component for the tasks wrapper, TasksTitle, and ClearButton
// const TasksWrapper = styled.div`
// margin: 20px;
// padding: 20px 0 60px 0;
// border-radius: 10px;
// background-color: #f1f1f1;
// box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
// `;

// const TasksTitle = styled.h2`
// margin: 20px;
// font-weight: bold;
// color: #b6287d;
// `;

// const ClearButton = styled.button`
// background-color: #ff9800;
// color: #fff;
// padding: 10px 20px;
// border-radius: 5px;
// font-size: 1em;
// cursor: pointer;
// float: left;
// margin-left: 20px;
// `;

// function Tasks({ tasks, onStatusChange, onTaskRemove, onClearTasks }) {
//     return (
//         <>
//             <TasksWrapper>
//                 <TasksTitle>These are the tasks:</TasksTitle>
//                 {/* Renders each task. */}
//                 {tasks.map((task, index) => (
//                     <Task key={index}
//                         task={task}
//                         onStatusChange={onStatusChange}
//                         onTaskRemove={onTaskRemove}
//                     />
//                 ))}

//                 <hr />
//                 {/* <button onClick={onClearTasks}>Clear Tasks</button> */}
//                 <ClearButton onClick={onClearTasks}>Clear Tasks</ClearButton>
//             </TasksWrapper>
//         </>
//     );
// }

// export default Tasks;
