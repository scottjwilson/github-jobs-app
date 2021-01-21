import React from "react";
import { Form } from "react-bootstrap";
export default function SearchForm({ params, onParamChange }) {
  return (
    <Form>
      <Form.Row>
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            onChange={onParamChange}
            value={params.description}
            name="description"
            type="text"
          />
        </Form.Group>
      </Form.Row>
    </Form>
  );
}
