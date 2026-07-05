import { LitElement, html, css } from 'lit';
import './todo-item.js';

export class TodoList extends LitElement {
  static properties = {
    todos: { type: Array },
  };

  static styles = css`
    :host {
      display: block;
    }

    .empty-state {
      border: 2px dashed #d1d5db;
      border-radius: 14px;
      padding: 28px;
      text-align: center;
      color: #6b7280;
      background: #f9fafb;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  `;

  constructor() {
    super();
    this.todos = [];
  }

  render() {
    if (this.todos.length === 0) {
      return html`<div class="empty-state">No tasks yet. Add your first TODO.</div>`;
    }

    return html`
      <ul>
        ${this.todos.map(
          (todo) => html`
            <todo-item
              .todo=${todo}
            ></todo-item>
          `
        )}
      </ul>
    `;
  }
}

customElements.define('todo-list', TodoList);
