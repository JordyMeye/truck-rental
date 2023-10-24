import "../src/dist/styles.css";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Brand from "./Pages/Brand";
import Location from "./Pages/Location";
import Navbar from "./components/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";

import AddCustomer from "./Compo/customer/AddCustomer";

import EditCustomer from "./Compo/customer/EditCustomer";

import CustomerViews from "./Compo/customer/CustomerViews";
import Nav from "./Compo/common/Nav";

import AdminView from "./Compo/admin/AdminView";
import AddAdmin from "./Compo/admin/AddAdmin";
import EditAdmin from "./Compo/admin/EditAdmin";



import { Route, Routes } from "react-router-dom";

import Team from "./Pages/Team";
import Contact from "./Pages/Contact";
import BrandView from "./Compo/Brand/BrandView";
import AddBrand from "./Compo/Brand/AddBrand";
import EditBrand from "./Compo/Brand/EditBrand";
import EditLocation from "./Compo/Location/EditLocation";
import AddLocation from "./Compo/Location/AddLocation";
import LocationView from "./Compo/Location/LocationView";





function App() {


  return (
    <>
      <Navbar />
      <Nav />
      <Routes>



        {/* <Route path="ListOperations" element={<ListOperations />} /> */}
        <Route index path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        {/* <Route path="models" element={<Models />} /> */}

        <Route path="team" element={<Team />} />
        <Route path="contact" element={<Contact />} />
        <Route path="brand" element={<Brand />} />
        <Route path="location" element={<Location />} />


        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />

        <Route
          exact
          path="/view-customers"
          element={<CustomerViews />}>
        </Route>

        <Route
          exact
          path="/view-brands"
          element={<BrandView />}>
        </Route>

        <Route
          exact
          path="/view-location"
          element={<LocationView />}>
        </Route>

        <Route
          exact
          path="/add-customers"
          element={<AddCustomer />}>
        </Route>

        <Route
          exact
          path="/add-brands"
          element={<AddBrand />}>
        </Route>

        <Route
          exact
          path="/add-location"
          element={<AddLocation />}>
        </Route>


        <Route
          exact
          path="/edit-customer/:id"
          element={<EditCustomer />}>
        </Route>

        <Route
          exact
          path="/edit-brand/:id"
          element={<EditBrand />}>
        </Route>

        <Route
          exact
          path="/edit-location/:id"
          element={<EditLocation />}>
        </Route>

        <Route
          exact
          path="/view-admin"
          element={<AdminView />}>
        </Route>

        <Route
          exact
          path="/add-admin"
          element={<AddAdmin />}>
        </Route>

        <Route
          exact
          path="/edit-admin/:id"
          element={<EditAdmin />}>
        </Route>

      </Routes>

    </>
  );
}


export default App;
