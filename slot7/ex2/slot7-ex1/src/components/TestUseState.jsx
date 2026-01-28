// Component dùng để test useState, có form gồm username và age.
// Nhấn nút Submit sẽ thay đổi giá trị hiển thị bên dưới trên label
import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function TestUseState() {
  // State nhập liệu
  const [username, setUsername] = useState('traltb');
  const [age, setAge] = useState(18);

  // State hiển thị
  const [displayName, setDisplayName] = useState('');
  const [displayAge, setDisplayAge] = useState('');

  // Xử lý Submit
  const handleSubmit = () => {
    setDisplayName(username);
    setDisplayAge(age);
  };

  return (
    <div>
      <h2>Test useState Hook</h2>

      <Container>
        {/* Username */}
        <Row className="mb-3">
          <Col md={2}>
            <label className="form-label">Username:</label>
          </Col>
          <Col md={4}>
            <input
              type="text"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Col>
        </Row>

        {/* Age */}
        <Row className="mb-3">
          <Col md={2}>
            <label className="form-label">Age:</label>
          </Col>
          <Col md={4}>
            <input
              type="number"
              className="form-control"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </Col>
        </Row>

        {/* Submit */}
        <Row className="mb-3">
          <Col md={6}>
            <Button variant="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Col>
        </Row>

        {/* Label */}
        <Row className="mb-3">
          <Col md={6}>
            <label className="form-label">
              Hello, {displayName}. You are {displayAge} years old.
            </label>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TestUseState;
