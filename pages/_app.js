import '../styles/globals.css'
import CategoryList from "../components/categoryList";
import NavBar from "../components/navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar></NavBar>
      <CategoryList></CategoryList>
      <Component {...pageProps} />
    </>
  
  )
}

export default MyApp
