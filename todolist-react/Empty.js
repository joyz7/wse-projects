import React from 'react';

const Empty = () => {
  return (
    <div>
        <div className="container">
          <h1 className="app-title">todos</h1>
          <ul className="todo-list js-todo-list"></ul>
          
          {/*Empty state*/}
          <div className="empty-state">
            <svg className="checklist-icon"><use href="#checklist-icon"></use></svg>
            <h2 className="empty-state__title">Add your first todo</h2>
            <p className="empty-state__description">What do you want to get done today?</p>
          </div>
          </div>

      <svg>
        <defs>
          <symbol id="delete-icon" viewBox="0 0 448 448" path d="m224 0c-123.710938 0-224 100.289062-224 224s100.289062 224 224 224 224-100.289062 224-224c-.132812-123.65625-100.34375-223.867188-224-224zm124.449219 325.824219c4.15625 4.015625 5.828125 9.964843 4.363281 15.558593s-5.835938 9.964844-11.429688 11.429688-11.542968-.207031-15.558593-4.363281l-101.824219-101.824219-101.824219 101.824219c-6.277343 6.0625-16.257812 5.976562-22.429687-.195313s-6.257813-16.152344-.195313-22.429687l101.824219-101.824219-101.824219-101.824219c-4.15625-4.015625-5.828125-9.964843-4.363281-15.558593s5.835938-9.964844 11.429688-11.429688 11.542968.207031 15.558593 4.363281l101.824219 101.824219 101.824219-101.824219c6.277343-6.0625 16.257812-5.976562 22.429687.195313s6.257813 16.152344.195313 22.429687l-101.824219 101.824219zm0 0" style={{fill: "#D80027"}}/>
        </defs>
      </svg>
      </div>
  );
}

export default Empty;