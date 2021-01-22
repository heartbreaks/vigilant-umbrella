import React from "react";
import { Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { updateEmployeeInfo, createNewEmployee } from "../redux/actions";

class CardToAddNewEmployer extends React.Component {
  constructor(props) {
    super(props);
    const { selectedEmployee } = props;
    this.state = { ...selectedEmployee };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.id !== this.props.selectedEmployee.id) {
      this.setState(() => this.props.selectedEmployee);
    }
  }

  onChangeHandler(event) {
    const { id, fired } = this.state;

    if (event.target.name !== "fired") {
      let changes = { [event.target.name]: event.target.value, id };
      this.setState({ [event.target.name]: event.target.value });
      this.props.updateEmployeeInfo(changes);
      return;
    }

    this.props.updateEmployeeInfo({ fired: !fired, id  });
  }

  onSubmitHandler(event){
    event.preventDefault()
    this.props.createNewEmployee()
  }

  render() {
    return (
      <div className="form-for-employers">
        <Form onSubmit={this.onSubmitHandler}>
          <Form.Group onChange={this.onChangeHandler}>
            <Form.Label>ФИО</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="ФИО"
              name={"name"}
              {...{ disabled: this.state.disable }}
              value={this.state.name}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group onChange={this.onChangeHandler}>
            <Form.Label>Дата рождения</Form.Label>
            <Form.Control
              type="date"
              max="2002-12-31"
              name={"birthday"}
              placeholder="Дата рождения"
              {...{ disabled: this.state.disable }}
              value={this.state.birthday}
            />
            <Form.Text className="text-muted">
              Здесь могла быть ваша реклама.
            </Form.Text>
          </Form.Group>

          <Form.Group onChange={this.onChangeHandler}>
            <Form.Label>Должность</Form.Label>
            <Form.Control
              as="select"
              name={"position"}
              custom
              value={this.state.position}
              {...{ disabled: this.state.disable }}
            >
              <option value="DevOps">DevOps</option>
              <option value="Дизигнер">Дизигнер</option>
              <option value="Сетевичок">Сетевичок</option>
              <option value="HR">HR</option>
              <option value="Стажер">Стажер</option>
            </Form.Control>
          </Form.Group>

          <Form.Group onChange={this.onChangeHandler}>
            <Form.Label>Пол</Form.Label>
            <Form.Check
              type="radio"
              label="Женщина"
              value={"female"}
              name="sex"
              id="formHorizontalRadios1"
              {...{ disabled: this.state.disable }}
              checked={this.state.sex === "female"}
            />
            <Form.Check
              type="radio"
              label="Мужчина"
              value={"male"}
              name="sex"
              id="formHorizontalRadios2"
              {...{ disabled: this.state.disable }}
              checked={this.state.sex === "male"}
            />
          </Form.Group>

          <Form.Group onChange={this.onChangeHandler}>
            <Form.Check
              type="switch"
              id="custom-switch"
              name="fired"
              label="Сотрудник уволен"
              checked={this.state.fired}
              onChange={() => {
                this.setState({ fired: !this.state.fired });
              }}
              {...{ disabled: this.state.disable }}
            />
          </Form.Group>

          <Button variant="warning" type="submit">
            Добавить
          </Button>
        </Form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { selectedEmployee } = state;

  return { selectedEmployee };
}

export default connect(mapStateToProps, { updateEmployeeInfo, createNewEmployee })(
  CardToAddNewEmployer
);
