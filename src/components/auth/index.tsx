import { useState } from 'react';
import * as C from './styles';
import axios from 'axios';

type AuthProps = {
     onLoginSuccess: () => void; 
};

export const Auth = ({ onLoginSuccess }: AuthProps) => {
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');

     const handleLogin = () => {
          if (!email || !password) {
               alert('Por favor, preencha todos os campos.');
               return;
          }

          console.log('Email:', email);
          console.log('Senha:', password);

          const data = {
               email: email,
               senha: password,
          };
          console.log(data)

          axios.post('http://localhost:3001/api/user/login', data)
               .then((response) => {
                    console.log('Dados enviados com sucesso para o backend:', response.data);
                    localStorage.setItem('tokem', response.data.accessToken);
                    localStorage.setItem('usuario', response.data.id);
                    onLoginSuccess();
               })
               .catch((error) => {
                    console.error('Erro ao enviar dados para o backend:', error);
                    alert("Erro na tentativa de login")
               });
     }

     return (
          <C.Container>
               <C.InputLabel>
                    <C.InputTitle>Email</C.InputTitle>
                    <C.Input type="text" value={email} onChange={e => setEmail(e.target.value)} />
               </C.InputLabel>

               <C.InputLabel>
                    <C.InputTitle>Senha</C.InputTitle>
                    <C.Input type="password" value={password} onChange={e => setPassword(e.target.value)} />
               </C.InputLabel>

               <C.InputLabel>
                    <C.InputTitle>&nbsp;</C.InputTitle>
                    <C.Button onClick={handleLogin}>Entrar</C.Button>
               </C.InputLabel>
          </C.Container>
     );
}
