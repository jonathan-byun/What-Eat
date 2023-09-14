import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return(
    <>
      <h1>Unexpected error has occured</h1>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </>
  )
}
