import Route from "./components/reusable/Route";
import SideBar from "./components/menu/SideBar";
import AccordionPage from "./pages/AccordionPage";
import BookPage from "./pages/BookPage";
import ButtonPage from "./pages/ButtonPage";
import CounterPage from "./pages/CounterPage";
import CounterPageReducer from "./pages/CounterPageReducer";
import DropdownPage from "./pages/DropdownPage";
import ExpensePage from "./pages/ExpensePage";
import { HomePage } from "./pages/HomePage";
import ImageSearchPage from "./pages/ImageSearchPage";
import ModalPage from "./pages/ModalPage";
import MoviesSongPage from "./pages/MovieSongPage";
import RandomIconsPage from "./pages/RandomIconsPage";
import TablePage from "./pages/TablePage";
import UserTablePage from "./pages/TableApiPage";

const App = () => {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <SideBar />
      <div className="col-span-5">
        <Route path="/">
          <HomePage />
        </Route>
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
        <Route path="/components/user-table">
          <UserTablePage />
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
        <Route path="/apps/expense">
          <ExpensePage />
        </Route>
        <Route path="/apps/books">
          <BookPage />
        </Route>
        <Route path="/apps/image-search">
          <ImageSearchPage />
        </Route>
        <Route path="/apps/random-icons">
          <RandomIconsPage />
        </Route>
      </div>
    </div>
  );
};

export default App;
