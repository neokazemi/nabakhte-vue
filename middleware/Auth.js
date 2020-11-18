export default function ({ req, store, redirect }) {
  if (!req.headers.cookie) {
    return redirect('/login')
  }

  const cookies = req.headers.cookie.split(';')

  let accessTokenCookie = cookies.find((item) => {
    return item.includes('x-access-token=')
  })

  if (!accessTokenCookie) {
    return redirect('/login')
  }

  accessTokenCookie = accessTokenCookie.trim().replace('x-access-token=', '')

  if (!accessTokenCookie) {
    return redirect('/login')
  }
}
