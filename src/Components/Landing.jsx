import React from "react";
import { Home } from "./Home";
import { Navi } from "./Navi";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Subscribers } from "./subscribers/Subscribers";
import { Category } from "./Category/Category";
import { Card, CardContent } from "@mui/material";
import { Gender } from "./Gender/Genders";
import {Services} from "./Services/Services"
import { Cities } from "./cities/Cities";
import { Providers } from "./providers/Providers";
import { Registration } from "./Misc/Registration";
import { Payment } from "./Misc/Payment";
import { Product } from "./Product/Product";
import {Practice} from "./Practice"


export const Landing = () => {
  return (
   
    <React.Fragment>
      <BrowserRouter>
      <Card>
        <CardContent>
      <Navi/>
        </CardContent>
      </Card>
            <Routes>
                  <Route path="/subscribers" element={<Subscribers/>}/>
                  <Route path="/category" element={<Category />} />
                  <Route path="/gender" element={<Gender />} />
                  <Route path="/registration" element={<Registration />} />
                  <Route path="/payment" element={<Payment />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/cities" element={<Cities />} />
                  <Route path="/provider" element={<Providers />} />
                  <Route path="/product" element={<Product />} />
                  <Route path="/" element={<Home />} />
                  <Route path="/practice" element={<Practice />} />
                 
                </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};
