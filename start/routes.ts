/* eslint-disable prettier/prettier */
/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'
import View from '@ioc:Adonis/Core/View'
Route.get('/welcome', async ({ view }) => {
  return view.render('welcome')
})
Route.get('/', ({ view }) => {
  // This is the route for the home page
  return view.render('page/home')
})
Route.get('/personal', ({ view }) => {
  // this route should contain the linking to the personal
  // banking option
  return view.render('page/personal')
})
Route.get('/loans', ({ view }) => {
  // this link is for the loan option
  return view.render('page/loans')
})
Route.get('/investment', ({ view }) => {
  // this link is for the investment and crypto deposit
  // option
  return view.render('page/investment')
})
Route.get('/about', () => {
  // this link is for the about page
  return View.render('page/about')
})
Route.get('/terms', () => {
  // This page is for the terms and conditions
  return 'Get/terms'
})
// login and Signup get requests
Route.get('/login', () => {
  return 'Get/login'
})
Route.get('/signup', () => {
  return View.render('page/signup')
})
