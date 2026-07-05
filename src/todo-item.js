import { LitElement, html, css } from 'lit';
import { classMap } from 'lit/directives/class-map.js';

export class TodoItem extends LitElement {
  static properties = {
    todo: { type: Object },
  };

  static styles = css`
    :host {
      display: block;
    }

    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      padding: 14px;
      border: 1px solid #e5e7eb;
      border-radius: 14px;
      background: #ffffff;
    }

    .left {
      display: flex;
      align-items: center;
      gap: 10px;
      min-width: 0;
    }

    input[type='checkbox'] {
      width: 18px;
      height: 18px;
      cursor: pointer;
    }

    .text {
      word-break: break-word;
      font-size: 15px;
    }

    .completed {
      color: #9ca3af;
      text-decoration: line-through;
    }

    .delete-btn {
      border: none;
      border-radius: 10px;
      padding: 8px 10px;
      background: #f3f4f6;
      color: #374151;
      cursor: pointer;
      font-weight: 700;
    }

    .delete-btn:hover {
      background: #fee2e2;
      color: #991b1b;
    }
  `;

  constructor() {
    super();
    this.todo = { id: 0, text: '', completed: false };
  }

  toggleTodo() {
    this.dispatchEvent(
      new CustomEvent('toggle-todo', {
        detail: { id: this.todo.id },
        bubbles: true,
        composed: true,
      })
    );
  }

  deleteTodo() {
    this.dispatchEvent(
      new CustomEvent('delete-todo', {
        detail: { id: this.todo.id },
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    const textClasses = {
      text: true,
      completed: this.todo.completed,
    };

    return html`
      <li>
        <div class="left">
          <input
            type="checkbox"
            .checked=${this.todo.completed}
            @change=${this.toggleTodo}
            aria-label="Toggle todo"
          />
          <span class=${classMap(textClasses)}>${this.todo.text}</span>
        </div>

        <button class="delete-btn" @click=${this.deleteTodo}>Delete</button>
      </li>
    `;
  }
}

customElements.define('todo-item', TodoItem);
