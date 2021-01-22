import React from 'react'
import { connect } from 'react-redux'
import { Button, Col, Row } from "react-bootstrap";
import Card from "./Card";
import { deleteEmployees, createNewEmployee } from "../redux/actions";

function CardsList(props){
    const [disable, setDisable] = React.useState(true)
    
    function getEmployeesCards(){
        return props.employees.map(card => {
          return <Card setDisable={setDisable} key={card.id} id={card.id} />;
        })
      }
    return(
        <div>
            <div id="cards-employers" style={{ display: "flex", flexDirection: "column" }}>
          {props.employees.length < 1 ? 'Список сотрудников пуст' : getEmployeesCards()}
        </div>
        <Row>
            <Col>
              <Button disabled={disable} variant="danger" type="submit" onClick={() => props.deleteEmployees()}>
                Удалить
              </Button>
            </Col>
          </Row>
        </div>
    )
}
function mapStateToProps(state) {
    const { employees } = state;
    return { employees };
}
  
export default connect(mapStateToProps, { deleteEmployees, createNewEmployee })(CardsList)