import { Routes, Route } from "react-router-dom";

/* Layout: Pages --------------------*/
import PagesLayout from "./Common/PagesLayout/PagesLayout";

/* Pages: Primary --------------------*/
import PrimaryLayout from "./Pages/Primary/PrimaryLayout";
import Home from "./Pages/Primary/Home/Home";
import SwimShop from "./Pages/Primary/SwimShop/SwimShop";
import Contact from "./Pages/Primary/Contact/Contact";
import ItemExpanded from "./Pages/Primary/SwimShop/ItemExpanded/ItemExpanded";

/* Pages: Course Work --------------------*/
import Videos from "./Pages/CourseWork/Videos";

const App = () => {
    return (
        <Routes>
            <Route element={<PagesLayout />}>
                <Route element={<PrimaryLayout />} path="">
                    <Route element={<Home />} path="" />
                    <Route element={<SwimShop />} path="swim-shop" />
                    <Route
                        element={<ItemExpanded />}
                        path="item-expanded/:swimShopId"
                    />
                    <Route element={<Contact />} path="contact" />
                </Route>

                <Route element={<Videos />} path="videos"></Route>
            </Route>
        </Routes>
    );
};

export default App;
