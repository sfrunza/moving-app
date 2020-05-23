Rails.application.routes.draw do


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

    end
  end

  # get '*path', to: "application#fallback_index_html", constraints: ->(request) do
  #   !request.xhr? && request.format.html?
  # end

end
