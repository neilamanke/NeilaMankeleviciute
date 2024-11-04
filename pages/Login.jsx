import { Outlet } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const Login = () => {
  return (
    <><Form>
          <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control placeholder="Title" disabled />
          </Form.Group>
          <Form.Group className="mb-3">
              <Form.Label>Author</Form.Label>
              <Form.Control placeholder="Author" disabled />
          </Form.Group>
          <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Control placeholder="Category" disabled />
          </Form.Group>
          <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control placeholder="Price" disabled />
          </Form.Group>
          <Form.Group className="mb-3">
              <Form.Label>Cover</Form.Label>
              <Form.Control placeholder="Cover" disabled />
          </Form.Group>
          <Button variant="primary" type="submit">
              Submit
          </Button>
      </Form><Outlet /></>
  );
};

