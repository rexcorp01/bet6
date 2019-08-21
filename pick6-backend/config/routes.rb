Rails.application.routes.draw do

  # I want my api to be pick6.com/api/v1/resource
  namespace :api do
    namespace :v1 do
      resources :users
      resources :groups
      resources :picks
      resources :games
      resources :weeks
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end