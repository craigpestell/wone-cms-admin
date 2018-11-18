import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import LandingPage from '../components/LandingPage';
import AboutPage from '../components/AboutPage';
import HomePage from '../components/HomePage';
import ContactPage from '../components/ContactPage';
import FAQPage from '../components/FAQPage';
import NotFoundPage from '../components/NotFoundPage';
import ServicesPage from '../components/ServicesPage';

import PublicRoute from './PublicRouter';
import PrivateRoute from './PrivateRouter';
import LoginPage from '../components/LoginPage';
import GetStartedPage from '../components/GetStartedPage';
import PostsPage from '../components/PostsPage';
import ProductsPage from '../components/ProductsPage';
import FormsPage from '../components/FormsPage';

import CourseListContainer from '../components/course/CourseListContainer';
import AddOrEditCourseContainer from '../components/course/AddOrEditCourseContainer';

import PostListContainer from '../components/post/PostListContainer';
import AddOrEditPostContainer from '../components/post/AddOrEditPostContainer';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Title</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <script src="//widget.cloudinary.com/global/all.js" type="text/javascript" />
      </Helmet>
      <Switch>
        <PublicRoute path="/" component={LandingPage} exact={true} />
        <PrivateRoute path="/home" component={HomePage} />

        <Route path="/login" component={LoginPage} />
        <PublicRoute path="/about" component={AboutPage} />

        <PublicRoute path="/courses" component={CourseListContainer} />
        <Route exact path="/course" component={AddOrEditCourseContainer} />
        <Route path="/course/:id" component={AddOrEditCourseContainer} />

        <PublicRoute path="/posts" component={PostListContainer} />
        <Route exact path="/post" component={AddOrEditPostContainer} />
        <Route path="/post/:id" component={AddOrEditPostContainer} />

        <PublicRoute path="/products" component={ProductsPage} />
        <PublicRoute path="/forms" component={FormsPage} />

        <PublicRoute path="/start" component={GetStartedPage} />
        <PublicRoute path="/contact" component={ContactPage} />
        <PublicRoute path="/FAQ" component={FAQPage} />

        <Route path="/services" component={ServicesPage} />

        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
