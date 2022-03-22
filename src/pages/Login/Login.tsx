import styles from './styles.module.scss';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { api } from '../../services/api';
import { useState } from 'react';
import {login, setUserRole} from '../../services/auth';
import { useNavigate } from "react-router-dom";
import jwt from 'jwt-decode'

// const handleSubmit = (event) => {
//   event.preventDefault();

//   const name = event.target.email.value

//   console.log(name)

// };

export default function Login(){
    
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const LogIn = (event:any) => {
      event.preventDefault();
      const data= {
          email : event.target.email.value,
          password : event.target.email.value, 
      }
      api.post("/user/login",data).then(response =>{
          if(response.data){
              const token = response.data
              const data:any = jwt(token)
              setUserRole(data.role)
              login(response.data);
              navigate('/');
          }
      })
  }

  return (
    <div >
      <Form className={styles.pageInicial} onSubmit={LogIn}>
        <Form.Group className='mb-3' controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="digite seu email" name='email'/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" placeholder="digite sua senha" name='senha'/>
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
