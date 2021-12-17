import { Route, Redirect } from 'react-router-dom'

const PublicRoute = ({ children, isAuthenticated, ...rest }) => {
    return (
        <Route
            {...rest}
            render={({ location }) => { 
                // eslint-disable-next-line no-unused-expressions
                console.log("RUTA PUBLICA => AUTENTICADO ?", isAuthenticated)
                return !isAuthenticated ? (children) : (
                    <Redirect
                        to={{
                            pathname: "/dashboard/view-products",
                            state: { from: location}
                        }}
                    />
                )
            }}
        />
    )
}

export default PublicRoute
