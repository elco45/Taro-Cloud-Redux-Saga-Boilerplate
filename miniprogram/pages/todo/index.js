import Taro, { Component } from '@tarojs/taro';
import PropTypes from 'prop-types';
import { View, Form, Input, Button, Text } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import { bindActionCreators } from 'redux';
import {
  addTodoRequest,
  getTodosRequest,
  deleteTodoRequest,
} from '../../redux/actions/todo';

import './index.scss';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
    };
  }

  config = {
    navigationBarTitleText: 'Todos',
  };

  componentWillMount() {
    this.props.getTodos();
  }

  onChangeDescription(event) {
    this.setState({
      description: event.detail.value,
    });
  }

  formSubmit(event) {
    const { addTodo } = this.props;
    const { description } = event.detail.value;
    if (description) {
      addTodo(description);
      this.setState({
        description: '',
      });
    }
  }

  renderTodos() {
    const { todos, getTodosLoading, deleteTodo } = this.props;
    if (getTodosLoading) {
      return <Text>Loading...</Text>;
    }
    return (
      <View>
        {todos.map((todo, index) => (
          <View>
            <Text>{`${index + 1}. ${todo.description}`}</Text>
            <Button onClick={() => deleteTodo(todo._id)}>Delete</Button>
          </View>
        ))}
      </View>
    );
  }

  render() {
    const { addTodoLoading } = this.props;
    const { description } = this.state;
    return (
      <View>
        <Text>TODOS</Text>
        <Form onSubmit={this.formSubmit}>
          <Input
            name="description"
            value={description}
            onInput={this.onChangeDescription}
            type="text"
            placeholder="Ex) Buy coffee..."
          />
          <Button loading={addTodoLoading} form-type="submit">
            Add
          </Button>
        </Form>
        {this.renderTodos()}
      </View>
    );
  }
}

Index.propTypes = {
  addTodo: PropTypes.func,
  addTodoLoading: PropTypes.bool,

  getTodos: PropTypes.func,
  getTodosLoading: PropTypes.bool,
  todos: PropTypes.arrayOf(PropTypes.object),

  deleteTodo: PropTypes.func,
};

const mapStateToProps = state => {
  const { addTodoLoading, todos, getTodosLoading } = state.todoReducer;
  return {
    addTodoLoading,
    todos,
    getTodosLoading,
  };
};

const mapDispatchToProps = dispatch => ({
  addTodo: bindActionCreators(addTodoRequest, dispatch),
  getTodos: bindActionCreators(getTodosRequest, dispatch),
  deleteTodo: bindActionCreators(deleteTodoRequest, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Index);
