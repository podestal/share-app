import { createContext, useState } from "react";

const MoviesContext = createContext()

export const MoviesProvider = ({ children }) => {
    const [movies, setMovies] = useState([])

    return (
        <MoviesContext.Provider value={{ movies, setMovies }}>
            {children}
        </MoviesContext.Provider>
    )
}

export default MoviesContext