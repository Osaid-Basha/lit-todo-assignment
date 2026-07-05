import { LitElement, html, css } from 'lit';

export class TodoInput extends LitElement {
  static properties = {
    value: { type: String },
  };

  static styles = css`
    :host {
      display: block;
      margin-bottom: 20px;
    }

    form {
      display: flex;
      gap: 10px;
    }

    input {
      flex: 1;
      padding: 13px 14px;
      border: 1px solid #d1d5db;
      border-radius: 12px;
      font-size: 15px;
      outline: none;
    }

    input:focus {
      border-color: #2563eb;
      box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
    }

    button {
      border: none;
      border-radius: 12px;
      padding: 0 18px;
      background: #2563eb;
      color: white;
      font-size: 15px;
      font-weight: 700;
      cursor: pointer;
    }

    button:hover {
      background: #1d4ed8;
    }
  `;

  constructor() {
    super();
    this.value = '';
  }

  updateValue(event) {
    this.value = event.target.value;
  }

  submitTodo(event) {
    event.preventDefault();

    const text = this.value.trim();
    if (!text) return;

    this.dispatchEvent(
      new CustomEvent('add-todo', {
        detail: { text },
        bubbles: true,
        composed: true,
      })
    );

    this.value = '';
  }

  render() {
    return html`
      <form @submit=${this.submitTodo}>
        <input
          .value=${this.value}
          @input=${this.updateValue}
          placeholder="Add a new task..."
          aria-label="Todo text"
        />
        <button type="submit">Add</button>
      </form>
    `;
  }
}

customElements.define('todo-input', TodoInput);
