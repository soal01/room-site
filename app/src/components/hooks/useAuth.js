import { useHistory } from 'react-router-dom';

export function useAuth(setIsLogin, setError) {
    const history = useHistory();
    
    const onAuth = async (login, password) => {
        const response = await fetch('http://localhost:8000/api/token/', {
          method: 'POST',
          headers: {
            'Content-Type': 'Application/json',
          },
          body: JSON.stringify({
            username: login,
            password,
          }),
        });
        try {
          const data = await response.json();
          
          if (response.method !== 200) {
            setError(data.detail);
            console.log('ewonvoewnoew11111'); 
          } 
          
          setIsLogin(true);
          window.localStorage.setItem('ACCESS', data.access);
          window.localStorage.setItem('REFRESH', data.refresh);
          history.push('/');
        }
        catch {
          window.localStorage.clear();
            setIsLogin(false);
          /*if (window.localStorage.getItem('ACCESS') == null) {
            history.push('/');
          } else {
            window.localStorage.clear();
            setIsLogin(false);
          }*/
        }
        
        console.log(response.method);
        
    };
    return {onAuth};
}