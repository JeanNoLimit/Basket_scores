import { useRouteError } from "react-router-dom"
import './styles/error-page.css'

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oups!</h1>
      <p>Désolé une erreur inattendue s'est produite! </p>
      <p>
        <i>{error.status +" "+error.statusText || error.message}</i>
      </p>
    </div>
  );
}