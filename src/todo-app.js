import { LitElement, html, css } from 'lit';
import './todo-input.js';
import './todo-list.js';

export class TodoApp extends LitElement {
  static properties = {
    todos: { type: Array },
  };

  static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      background: #f4f6fb;
      color: #1f2937;
      font-family: Arial, Helvetica, sans-serif;
      box-sizing: border-box;
      padding: 48px 16px;
    }

    .app-card {
      width: 100%;
      max-width: 620px;
      background: white;
      border-radius: 18px;
      padding: 28px;
      box-shadow: 0 12px 35px rgba(15, 23, 42, 0.12);
    }

    h1 {
      margin: 0 0 8px;
      text-align: center;
      font-size: 32px;
      color: #111827;
    }

    .subtitle {
      margin: 0 0 24px;
      text-align: center;
      color: #6b7280;
      font-size: 15px;
    }

    .stats {
      display: flex;
      justify-content: space-between;
      gap: 10px;
      margin-top: 18px;
      padding-top: 18px;
      border-top: 1px solid #e5e7eb;
      color: #4b5563;
      font-size: 14px;
    }

    .clear-btn {
      border: none;
      border-radius: 10px;
      padding: 8px 12px;
      background: #fee2e2;
      color: #991b1b;
      cursor: pointer;
      font-weight: 600;
    }

    .clear-btn:hover {
      background: #fecaca;
    }

    .clear-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `;

  constructor() {
    super();
    this.todos = [
      { id: 1, text: 'Learn Lit components', completed: false },
      { id: 2, text: 'Finish TODO assignment', completed: true },
    ];
  }

  addTodo(event) {
    const text = event.detail.text.trim();

    if (!text) return;

    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };

    this.todos = [newTodo, ...this.todos];
  }

  toggleTodo(event) {
    const id = event.detail.id;

    this.todos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
  }

  deleteTodo(event) {
    const id = event.detail.id;
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  clearCompleted() {
    this.todos = this.todos.filter((todo) => !todo.completed);
  }

  render() {
    const completedCount = this.todos.filter((todo) => todo.completed).length;
    const remainingCount = this.todos.length - completedCount;

    return html`
      <main class="app-card">
        <h1>TODO List</h1>
        <p class="subtitle">Component-Based TODO App using Lit</p>

        <todo-input @add-todo=${this.addTodo}></todo-input>

        <todo-list
          .todos=${this.todos}
          @toggle-todo=${this.toggleTodo}
          @delete-todo=${this.deleteTodo}
        ></todo-list>

        <div class="stats">
          <span>${remainingCount} remaining / ${completedCount} completed</span>
          <button
            class="clear-btn"
            ?disabled=${completedCount === 0}
            @click=${this.clearCompleted}
          >
            Clear Completed
          </button>
        </div>
      </main>
    `;
  }
}

customElements.define('todo-app', TodoApp);
