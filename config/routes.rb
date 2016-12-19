Rails.application.routes.draw do

  root :to => 'pages#home'
  get '/home' => 'pages#home'
  get '/display' => 'pages#display'
  get '/index' => 'prices#index'
  get '/search' => 'pages#search'

end
