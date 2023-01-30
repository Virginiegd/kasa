import { Link } from "react-router-dom"

function ErrorPage() {
    const error = "Oups ! La page que vous demandez n'existe pas."
    const retour = "Retourner sur la page d'accueil"
    return (
        <div className="container">
            <div className="error__contend">
                <h1>404</h1>
                <p>{error}</p>
                <Link className='lien' to="/"> {retour} </Link>
            </div>
        </div>
    )
}

export default ErrorPage