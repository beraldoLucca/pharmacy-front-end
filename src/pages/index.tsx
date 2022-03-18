import styles from './styles.module.scss';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const handleSubmit = (event) => {
  event.preventDefault();

  const name = event.target.email.value

  console.log(name)

};

export default function Home() {
  return (
    <div >
      <Form className={styles.pageInicial} onSubmit={handleSubmit} method="POST">
        <Form.Group className='mb-3' controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="digite seu email" name="email"/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" placeholder="digite sua senha" name="senha"/>
          <Form.Text className="text-muted">
            Nunca compartilhe sua senha com outras pessoas.
          </Form.Text>
        </Form.Group>
        <Button type="submit">
          Entrar
        </Button>
      </Form>
    </div>
  )
}


