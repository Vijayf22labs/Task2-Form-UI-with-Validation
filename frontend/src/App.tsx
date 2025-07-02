import { useEffect, useState } from "react";
import Header from "./components/Header";
import Contact from "./pages/Contact";

const App = () => {

  const [isDark, setIsDark] = useState<boolean>(false);
  const toggleTheme: () => void = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark', !isDark);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    const prefersDark = storedTheme === 'dark' || (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)
      setIsDark(prefersDark)
      document.documentElement.classList.toggle('dark', prefersDark)
    }, [])
  
  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
      document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  return (
    <div className="min-h-screen max-w-7xl mx-auto dark:bg-gray-900">
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      <Contact />
    </div>
  )
}

export default App