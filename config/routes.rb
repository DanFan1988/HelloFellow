HelloFellow::Application.routes.draw do
  get "board_memberhips/index"

  get "board_memberhips/create"

  resources :users, :only => [:create, :new, :show]
  resource :session, :only => [:create, :destroy, :new]



  namespace :api, :defaults => { :format => :json } do
    resources :boards, :only => [:index, :create, :update, :destroy]
    resources :lists, :only => [:index, :create, :destroy, :update]
    resources :cards, :only => [:index, :create, :update, :destrpy]
  end
  root :to => "static_pages#root"
end
