// src/components/TaskItem.jsx

export default function TaskItem({ task }) {
    let className = "task";
    if (task.concluida) {
        className += " task--done";
    }

    return (
        <li className={className}>
            <div className="task__check">
                <input
                    className="checkbox"
                    type="checkbox"
                    checked={task.concluida}
                    readOnly
                    aria-label={`Concluir: ${task.titulo}`}
                />
            </div>

            <div className="task__body">
                <span className="task__title">{task.titulo}</span>
                
                {task.descricao && <p className="task__description">{task.descricao}</p>}
            </div>

            <div className="task__actions">
                <button className="task-action">
                    Editar
                </button>
                <button className="task-action task-action--danger">
                    Remover
                </button>
            </div>
        </li>
    )
}