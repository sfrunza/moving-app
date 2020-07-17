module Api::V1
  class UsersController < ApplicationController

    def index
      if current_user
        @users = User.all
        @current_user = current_user
        render json: {users: @users, current_user: @current_user, logged_in: true,}
      else
        render json: {current_user: nil, message: "Please sign in.", status: 401, logged_in: false,}
      end

    end

    def is_logged_in?
      if current_user
        render json: {
          logged_in: true,
          user: current_user
        }
      else
        render json: {
          logged_in: false,
          message: 'no such user'
        }
      end
    end

    protected
    def user_params
      params.require(:user).permit(:email, :admin)
    end
  end
end
