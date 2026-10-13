export default function Tasks({tasks, onDeleteTask}) {
  return (
    <div>
        {
            tasks?.map((task) => (
                <div key={task.id}>
                    <p>Задача: {task.text}</p>
                    <p>Активность: {String(task.status) === 'true' ? 'Активна' : 'Не активная'}</p>
                    <p>дата: {task.date}</p>
                    <p>Категория: {task.category}</p>
                    <button type="button" onClick={() => onDeleteTask(task.id)}>Удалить</button>
                </div>
            ))
        }
    </div>
  )
}
