import React, { Component } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import ColumnView from '../components/ColumnView';
import { ScrollView } from 'react-native';

class Projects extends Component {

  viewApp = () => {
    confirmAlert({
      title: "Warning: Opening External Link",
      message: url,
      buttons: [
        {
          label: "Cancel",
        },
        {
          label: lblOK,
          onClick: () => {
            Linking.openURL(url)
          }
        }, 
      ],
      closeOnEscape: true,
      closeOnClickOutside: true,
    })
  }

  render() {

    class CompanyProject {
      constructor(url, name, company, period) {
        this.url = url
        this.name = name
        this.company = company
        this.period = period
      }
    }
    const companyProjects = [
      new CompanyProject("#", "LION FX iOS", "JFX", "2019-2020"),
      new CompanyProject("#", "LION FX Android", "JFX", "2019-2020"),
    ]

    const scoller = (projs) => {
      const items = projs.map(proj => {
        return(
          <div>
            <Card.Subtitle onclick={proj.url}>{proj.name}</Card.Subtitle>
            <Card.Body>
              <span>{proj.company}</span>
              <span>{proj.period}</span>
            </Card.Body>
          </div>
        )
      })
      return(
        <ScrollView>
          {items}
        </ScrollView>
      )
    }

    const colCompany = ColumnView("For Company", scoller(companyProjects))
    const colPersonal = ColumnView("Personal", "Lorem Ipsum")
    return (
      <Container>
        <Row>
          {colCompany}
          {colPersonal}
        </Row>
      </Container>
    )
  }
}

export default Projects