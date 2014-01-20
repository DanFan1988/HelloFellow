HelloFellow::Application.routes.draw do
  root :to => "static_pages#root"
  resources :users, :only => [:create, :new, :show]
  resource :session, :only => [:create, :destroy, :new]

  namespace :api, :defaults => { :format => :json } do
    resources :users, :only => [:index]
    resources :organizations
    resources :boards
    resources :lists
    resources :cards
    resources :comments
    resources :labels
    resources :checklists
    resources :checklist_items
  end
end
