Rails.application.routes.draw do

devise_for :users, controllers: { registrations: 'registrations', sessions: 'sessions' }

  namespace :api do
    namespace :v1 do

      resources :employees do
        resources :jobs
      end

      resources :jobs do
        resources :customers
        resources :origins
        resources :destinations
      end

      resources :customers
      resources :origins
      resources :destinations
      resources :users, only: [:index]
      resources :images, only: [:index, :show, :create, :destroy]

    end
  end

  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end

end
