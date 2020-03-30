Rails.application.routes.draw do
  root "home#index"
  resources :main, only: [:index]
  resources :game, only: [:index]
end
