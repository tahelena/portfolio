import Route from "./components/reusable/Route";
import SideBar from "./components/SideBar";
import AccordionPage from "./pages/AccordionPage";
import ButtonPage from "./pages/ButtonPage";
import CounterPage from "./pages/CounterPage";
import CounterPageReducer from "./pages/CounterPageReducer";
import DropdownPage from "./pages/DropdownPage";
import ModalPage from "./pages/ModalPage";
import  MoviesSongPage  from "./pages/MovieSongPage";
import TablePage from "./pages/TablePage";

const App = () => {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <SideBar />
      <div className="col-span-5">
        <Route path="/components/accordion">
          <AccordionPage />
        </Route>
        <Route path="/components/dropdown">
          <DropdownPage />
        </Route>
        <Route path="/components/buttons">
          <ButtonPage />
        </Route>
        <Route path="/components/modal">
          <ModalPage />
        </Route>
        <Route path="/components/table">
          <TablePage />
        </Route>
        <Route path="/components/counter">
          <CounterPage initialCount={10} />
        </Route>
        <Route path="/components/counter-reducer">
          <CounterPageReducer initialCount={30} />
        </Route>
        <Route path="/apps/movie-song">
          <MoviesSongPage />
        </Route> 
      </div>
    </div>
  );
};

export default App;
