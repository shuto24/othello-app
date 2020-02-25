Rails.application.routes.draw do
  root "home#index"
  resources :mode, only: [:index]
  resources :game, only: [:index]
end
