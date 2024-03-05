import taskListItem from "../assets/icons/items-task.svg";
import imageProfile from "../assets/images/profile.png";
import taskIcon from "../assets/icons/tasks.svg";
import { ItemsAside } from "./ItemsAside";
import { TodoItems } from "./TodoItems";
import { TodoSearch } from "./TodoSearch";
import { CreateTodo } from "./CreateTodo";
import { TodoCounter } from "./TodoCounter";
import { TodoCompleted } from "./TodoCompleted";
import { TodoLoading } from "./TodoLoading";
import { TodosError } from "./TodosError";
import { EmptyTodos } from "./EmptyTodos";
import { TodoContext } from "../TodoContext/context";

// localStorage.removeItem('castaDev.tasks_V1');
// const defaultTodos = [
//   {text: 'Aprender React', completed: false},
//   {text: 'Aprender Svelte', completed: false},
//   {text: 'Aprender Astro', completed: false},
//   {text: 'Aprender Vue', completed: false},
//   {text: 'Aprender TypeScript', completed: false},
//   {text: 'Aprender Angular', completed: false},
// ]
// localStorage.setItem('castaDev.tasks_V1', JSON.stringify(defaultTodos))

function AppUI() {
  return (
    <div className="App">
      <TodoContext.Consumer>
        {({
          loading,
          error,
          completedTodos,
          totalTodos,
          searchValue,
          setSearchValue,
          searchedTodos,
          completeTodo,
          deleteTodo,
        }) => (
          <>
            <section className="principal-content">
              <aside>
                <div className="profile-content">
                  <img src={imageProfile} alt="Profile" />
                  <div>
                    <h2>castaDev</h2>
                    <p>WorkSpace</p>
                  </div>
                </div>
                <div className="items-list">
                  <ul>
                    <ItemsAside icon={taskIcon} title={"Tasks"} />
                  </ul>
                </div>
              </aside>
              <main>
                <header>
                  <TodoSearch
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                  />
                </header>
                <section className="tasks-list__container">
                  <div className="header__content">
                    <h2>Tasks</h2>
                  </div>
                  <div className="items__container">
                    <TodoCounter completed={completedTodos} total={totalTodos} />
                    {loading && <TodoLoading />}
                    <ul>
                      {error && <TodosError />}
                      {(!loading && searchedTodos.length === 0) && <EmptyTodos />}
                      {searchedTodos.map((todo) => (
                        <TodoItems
                          key={todo.text}
                          text={todo.text}
                          icon={taskListItem}
                          completed={todo.completed}
                          onComplete={() => completeTodo(todo.text)}
                          onDelete={() => deleteTodo(todo.text)}
                        />
                      ))}
                    </ul>
                  </div>
                </section>
              </main>
            </section>
            <section className="secondary-content">
              <section className="create-todo__container">
                <CreateTodo />
              </section>
              <section className="todo-completed">
                <TodoCompleted total={totalTodos} completed={completedTodos} />
              </section>
            </section>
          </>
        )}
      </TodoContext.Consumer>
    </div>
  )
}

export { AppUI }