import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from '../pages/LoginPage/Login'
import SignUpPage from '../pages/SignUpPage/SignUp'
import RecipesListPage from '../pages/RecipesListPage/RecipeList'
import RecipeDetailsPage from '../pages/RecipeDetailsPage/RecipeDetails'
import CreateRecipePage from '../pages/CreateRecipePage/CreateRecipe'
import ErrorPage from '../pages/ErrorPage/Error'
import Header from '../components/Header/Header';


export default function Router() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cadastro" element={<SignUpPage />} />
        <Route path="/" element={<RecipesListPage />} />
        <Route path="/criar" element={<CreateRecipePage />} />
        <Route path="/detalhes/:id" element={<RecipeDetailsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}
