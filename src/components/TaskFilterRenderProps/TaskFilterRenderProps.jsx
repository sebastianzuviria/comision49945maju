import { useState } from "react"

const TaskList = ({ tasks }) => {
    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>{task.title}</li>
            ))}
        </ul>
    )
}

const Filter = ({ children }) => {
    const [filterState, setFilterState] = useState('all')

    const handleFilterChange = (event) => {
        setFilterState(event.target.value)
    }

    return children(filterState, handleFilterChange)
}

const TaskFilterRenderProps = () => {
    const tasks = [
        { id: 1, title: 'Comprar comida', completed: true},
        { id: 2, title: 'Ir al gimnasio', completed: true},
        { id: 3, title: 'Cocinar cena', completed: false},
    ]

    return (
        <div>
            <Filter>
                {(filterState, handleFilterChange) => (
                    <div>
                        <label htmlFor="filter">Filtrar por estado:</label>
                        <select id="filter" value={filterState} onChange={handleFilterChange}>
                            <option value='all'>Todos</option>
                            <option value='completed'>Completados</option>
                            <option value='uncompleted'>Sin completar</option>
                        </select>

                        <TaskList 
                            tasks={
                                filterState === 'all'
                                    ? tasks
                                    : tasks.filter((task) => (
                                        filterState === 'completed' ? task.completed : !task.completed
                                    ))   
                            }
                        />
                    </div>
                )}
            </Filter>
            
            {/* <TaskList tasks={tasks} /> */}
        </div>
    )
}

export default TaskFilterRenderProps