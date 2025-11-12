import React from 'react'
import './App.css'

export default function App() {
  const quote = "“The only way to do great work is to love what you do.” – Steve Jobs"

  return (
    <div className="container">
      <div className="quote-box">
        <h1>{quote}</h1>
      </div>
    </div>
  )
}
