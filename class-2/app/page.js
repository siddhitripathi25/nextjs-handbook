import "./globals.css";
import Banner from "./components/home-components/Banner";
import LatestProduct from "./components/home-components/LatestProduct";
export const metadata = {
  
};
export default function Home() {
  metadata.title = "Home Page";
  metadata.description = "This is the home page of our Next.js application.";
  return (
    <div>
      <Banner />
      <LatestProduct />
    </div>

  );
}

////Similarly, WE CAN GIVE METADATA TO OTHER PAGES AS WELL BY CHANGING THE TITLE AND DESCRIPTION ACCORDING TO THE PAGE.
// AND THIS METADATA WILL BE SHOWN IN THE BROWSER TAB AND ALSO IN THE SEARCH ENGINE RESULTS.
///BUT IT WILL WORK ONLY FOR SERVER SIDE RENDERING...IF WE USED 'USE CLIENT' THEN IT WILL NOT WORK BECAUSE IT IS CLIENT SIDE RENDERING AND IN CLIENT SIDE RENDERING THE METADATA IS NOT SHOWN IN THE BROWSER TAB AND ALSO IN THE SEARCH ENGINE RESULTS.