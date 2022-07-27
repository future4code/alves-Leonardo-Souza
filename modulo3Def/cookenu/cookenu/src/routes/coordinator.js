import { Navigate, useNavigate } from "react-router-dom"

const navigate = useNavigate()

const goToLogin = () => {
    navigate("/login")
}
const goToSignUp = () => {
    navigate("/cadastro")
}
const goToRecipesList = () => {
    navigate("/")
}
const goToCreateRecipe = () => {
    navigate("/criar")
}
const goToRecipeDetails = (id) => {
    navigate(`/detalhes/${id}`)
}
