
import Root from "./Pages/Root";
import Home from "./Pages/home/Home";
import Create from "./Pages/create/Create";
import Men from "./Pages/men/Men"
import Women from "./Pages/Women/Women";
import SignIn from "./Pages/signin/SignIn";
import SignUp from "./Pages/signup/SignUp";
import {
createBrowserRouter,
createRoutesFromElements,
Route,
RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter(
createRoutesFromElements(
<Route path="/" element={<Root />}>
 <Route path="/" element={<Home />} />
 <Route path="Home" element={<Home />} />
 <Route path="men" element={<Men />} />
 <Route path="women" element={<Women />} />
 <Route path="sign in" element={<SignIn />} />
 <Route path="sign up" element={<SignUp />} />
 <Route path="create" element={<Create/>} />

</Route>
)
);



function App() {
return (
<RouterProvider router={router} />
);
}

export default App;
