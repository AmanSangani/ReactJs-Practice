/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

// import { Outlet } from 'react-router-dom'

import { ThemeProvider } from "@material-tailwind/react"
import { useEffect, useState } from "react"
import ThemeButton from "./Components/ThemeButton"
import Cards2 from "./Components/Cards2"

const Layout3 = () => {

    const [themeMode, setThemeMode] = useState("light")

    const lightTheme = () => {
        setThemeMode("light")
    }
    const darkTheme = () => {
        setThemeMode("dark")
    }

    useEffect(() => {
        document.querySelector('html').classList.remove("light", "dark")
        document.querySelector('html').classList.add(themeMode)
    }, [themeMode])

    return (
        <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
            <div className="flex flex-wrap items-center min-h-screen">
                <div className="w-full">
                    <div className="flex justify-end w-full max-w-sm mx-auto mb-4">
                        <ThemeButton />
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                        <Cards2 />
                    </div>
                </div>
            </div>
        </ThemeProvider>


    )
}

export default Layout3