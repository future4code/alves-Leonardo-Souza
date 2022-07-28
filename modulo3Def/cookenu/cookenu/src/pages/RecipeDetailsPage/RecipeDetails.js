import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'

export default function RecipeDetails() {
  useProtectedPage()
  return (
    <div>
        <h1>Recipe Details</h1>
    </div>
  )
}
