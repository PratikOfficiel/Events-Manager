import AuthForm from '../components/AuthForm';
import { json, redirect } from 'react-router-dom';

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({request}) {

  const mode = new URL(request.url).searchParams.get('mode') || 'signup';

  if(mode!=='login' && mode!=='signup') {
    return json({message: 'Invalid mode'}, {status: 422})
  }

  const data = await request.formData();

  const auth = {
    email: data.get('email'),
    password: data.get('password'),
  }

  const response = await fetch('http://localhost:8080/'+mode,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(auth),
  })

  if(response.status===401 || response.status===422) {
    return response;
  }

  if(!response.ok) {
    throw json({message: 'Could not authenticate user'}, {status: 500})
  }

  const resData = await response.json();
  const token = resData.token;

  localStorage.setItem('token', token);
  const expiration = new Date();

  expiration.setHours(expiration.getHours()+1);

  localStorage.setItem('expiration', expiration.toISOString());

  return redirect('/');

}