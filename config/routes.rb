Rails.application.routes.draw do

devise_for :users, controllers: { registrations: 'registrations', sessions: 'sessions' }

  namespace :api do
    namespace :v1 do

      resources :jobs do
        resources :origins
        resources :destinations
      end

      resources :users, only: [:index, :show, :create, :edit, :update, :destroy]
      resources :images, only: [:index, :show, :create, :destroy]
      resources :origins, only: [:index, :show, :create, :edit, :update, :destroy]
      resources :destinations, only: [:index, :show, :create, :edit, :update, :destroy]

    end
  end

  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end

end
