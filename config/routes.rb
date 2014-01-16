HelloFellow::Application.routes.draw do
  resources :users, :only => [:create, :new, :show]
  resource :session, :only => [:create, :destroy, :new]



  namespace :api, :defaults => { :format => :json } do
    resources :boards
    resources :lists, :only => [:index, :create]
    resources :cards, :only => [:index, :create]
  end
  root :to => "static_pages#root"
end
