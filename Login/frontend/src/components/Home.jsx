import axios from 'axios';
import React from 'react'

const Home = () => {

  const [userData, setUserData] = React.useState(null);
  const [error, setError] = React.useState('');

   React.useEffect(() => {
      const token = localStorage.getItem("token");

      if(!token){
       return setError("O token não foi encontrado!");
      }

      const getUserData = async () => {
        try {
            await axios.get('http://locahost:3000/auth/perfil', {
            headers: {
                Authorization: `Bearer ${token}`
            },
        });
        setUserData(response.data.user);
        } catch (err) {
            setError("Não foi possível carregar os dados do usuário", err);
        }
      };

      getUserData()
   }, []);

  return (
    <>
    <h1>Bem vindo(a) ao sistema!</h1>
    {error && <p>{error}</p>}
    {userData && <p>Olá, {userData.userName}!</p>}
    {userData ? (
        <div>
            <h2>Dados do usuário</h2>
            <p><strong>ID:</strong>{userData.id}</p>
            <p><strong>User name:</strong>{userData.username}</p>
            <p><strong>Email:</strong>{userData.email}</p>
        </div>
    ): <p>Carregando dados do usuário...</p>}
    </>
  );
};

export default Home;
