const { createApp } = Vue;

createApp({
  data() {
    return {
      message: 'funziona!',
      todoList: [],
      addTodo: '',
    };
  },
  methods: {
    changeTodo(todo, i) {
      if (todo.isActive == 1) {
        this.todoList[i].isActive = 2;
      } else if (todo.isActive == 2) {
        this.todoList[i].isActive = 0;
      } else {
        this.todoList[i].isActive = 1;
      }
    },
    addTodoList() {
      this.todoList.push({ text: this.addTodo, isActive: 1 });

      const data = { text: this.addTodo, isActive: 1 };

      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };

      axios.post('../server.php', data, config).then((result) => {
        console.log(result.data);
      });
    },
  },
  mounted() {
    axios.get('../server.php').then((result) => {
      for (let i = 0; i < result.data.length; i++) {
        this.todoList.push({ text: result.data[i], isActive: 1 });
      }
      console.log(this.todoList);
    });
  },
}).mount('#app');
