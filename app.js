Vue.component("todo-item", {
	template: "#todo-item",
	props: {
		id: {
			type: Number,
		},
		task: {
			default: "hello",
		},
		isDone: {
			default: false,
		},
	},
	methods: {
	},
});

Vue.component("todo-list", {
	template: "#todo-list",
	props: {
		todos: {
			default: [],
		},
	},
	methods: {
	},
});

new Vue({
	el: "#app",
	data() {
		return {
      newTask: "",
			todos: [
				{
					id: 1,
					task: "do homework",
					isDone: true,
				},
				{
					id: 2,
					task: "eat food",
					isDone: false,
				},
				{
					id: 3,
					task: "make food",
					isDone: false,
				},
        {
					id: 4,
					task: "Teach hipo 13 vue props and events",
					isDone: false,
				},
			],
		};
	},
	methods: {
		removeTodo(id) {
			console.log("removing todo with id: ", id);
      this.todos = this.todos.filter(todo => todo.id !== id);
		},
    addTodo() {
      let newTodo = {
        id: this.todos.length,
        task: this.newTask,
        isDone: false
      }
      this.todos.push(newTodo);
    }
	},
});
