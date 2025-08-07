Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # devise_for :users, controllers: { registrations: "users/registrations" }

  defaults format: :json do
    devise_for :users, skip: :all

    devise_scope :user do
      post "/users/sign_in" => "users/sessions#create", as: :user_session
      delete "/users/sign_out" => "users/sessions#destroy", as: :destroy_user_session

      post "/users/sign_up" => "users/registrations#create", as: :user_registration

      post "/users/password" => "users/passwords#create"
      patch "/users/password" => "users/passwords#update", as: :user_password
      put "/users/password" => "users/passwords#update"
    end

    root to: proc { [ 200, {}, [ "" ] ] }
    get "user_test/show"
    post "user_test/test_post" => "user_test#test_post"

    get "up" => "rails/health#show", as: :rails_health_check
    get "/healthcheck" => "application#health_check"
  end
end
