import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>
        <h2>Login</h2>
        <Link to={'/'}>Go to Home</Link>
    </div>
  )
}

export default Login



let products = [
    {
        id: "pro-1",
        title: "tefal",
        price: 41_000,
        url: "https",
        desc: "zor tefal"
    },
    {
        id: "pro-2",
        title: "tefal",
        price: 41_000,
        url: "https",
        desc: "zor tefal"
    },
]