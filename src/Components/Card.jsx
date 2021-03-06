import React from "react";
import { Card, ListGroupItem, ListGroup, Badge } from "react-bootstrap";
import { connect } from "react-redux";
import { selectEmployee } from "../redux/actions";
function PersonalCard(props) {
  const { employee } = props;

  React.useEffect(() => {
    props.setDisable(!props.employees.some(elem => elem.selected))
  })

  function getStyledTypes(type) {
    switch (type) {
      case "fired":
        return (
          <Badge pill variant={employee.fired ? "danger" : "success"}>
            {employee.fired ? "Да" : "Нет"}
          </Badge>
        );
      case "sex":
        return (
          <Badge pill variant={"primary"}>
            {employee.sex == 'female' ? "Женщина" : "Мужчина"}
          </Badge>
        );
      default:
        break;
    }
  }

  return (
    <Card
      style={{ width: "18rem", marginBottom: 5 }}
      className={employee.selected ? 'selected-card' : "card-of-employer"}
      onClick={() => {
        props.selectEmployee(employee);
      }}
    >
      <Card.Body>
        <Card.Title>{employee.name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Должность: {employee.position}</ListGroupItem>
        <ListGroupItem>Дата рождения: {employee.birthday}</ListGroupItem>
        <ListGroupItem>Пол: {getStyledTypes("sex")}</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Text href="#">Уволен: {getStyledTypes("fired")}</Card.Text>
      </Card.Body>
    </Card>
  );
}

function mapStateToProps(state, ownProps) {
  const employee = state.employees.find(elem => elem.id == ownProps.id);
  const {employees} = state

  return { employee, state, employees };
}

export default connect(mapStateToProps, { selectEmployee })(PersonalCard);
