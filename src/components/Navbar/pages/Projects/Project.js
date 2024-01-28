import React, {useState, useEffect} from "react";
import { Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Project.css'

export const Project = () => {
    const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/SnehaMane17/repos');
        if (response.ok) {
          const data = await response.json();
          setRepos(data);
        } else {
          console.error('Failed to fetch repository data from GitHub API');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div className="container">
      <h2 className="project-name">My GitHub Repositories</h2>
      <Row>
        {repos.map(repo => (
          <Col key={repo.id} lg={4} className="mb-4">
            <Card className="project-card">
              <Card.Body>
                <Card.Title className="repo-name">{repo.name}</Card.Title>
                <Card.Text>{repo.description}</Card.Text>
                <Card.Link href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  View on GitHub
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
