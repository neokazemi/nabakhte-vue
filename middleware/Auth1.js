export default function ({ req, store, redirect, res }) {
  if (!req.headers.cookie) {
    return redirect('/login')
  }

  const tokenKeys = [
    'laravel_token',
    'laravel_session'
  ]

  const cookies = req.headers.cookie.split(';')

  console.log('cookies', cookies)

  const accessTokenCookie = cookies.filter((item) => {
    return item.includes(tokenKeys[0] + '=') || item.includes(tokenKeys[1] + '=')
  })

  accessTokenCookie.map((item) => {
    return item.trim().replace(tokenKeys[0] + '=', '').replace(tokenKeys[1] + '=', '')
  })

  console.log('accessTokenCookie', accessTokenCookie)

  if (accessTokenCookie.length === 0) {
    return redirect('/login')
  }

  // accessTokenCookie = accessTokenCookie.trim().replace('x-access-token=', '')
  //
  // if (!accessTokenCookie) {
  //   return redirect('/login')
  // }
}
