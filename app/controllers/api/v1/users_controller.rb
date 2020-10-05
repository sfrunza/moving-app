module Api::V1
  class UsersController < ApplicationController

    def index
      if current_user && current_user.customer == false
        @users = User.all.order('id DESC')
        @current_user = current_user
        render json: {
          current_user: @current_user,
          logged_in: true,
          users: @users,
        }
      elsif current_user && current_user.customer == true
        @current_user = current_user
        render json: {
          current_user: @current_user,
          logged_in: true,
        }
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

    def show
     if current_user && current_user.customer == false
       @user = User.find(params[:id])
       @jobs = @user.jobs.as_json
       @origins = @user.origins.as_json
       @destinations = @user.destinations.as_json
        render json: {
          user: @user,
          jobs: @jobs,
          origins: @origins,
          destinations: @destinations
        }
      elsif current_user && current_user.customer == true
        @current_user = current_user
        @user_jobs = @current_user.jobs
        @origins = @current_user.origins.as_json
        @destinations = @current_user.destinations.as_json
        render json: {
          user: @current_user,
          jobs: @user_jobs,
          origins: @origins,
          destinations: @destinations
        }
      else
        render json: {
          status: 500,
          errors: ['user not found']
        }
      end
    end

      def create
        @user = User.new(user_params)

        if User.exists?(email: user_params[:email])
          @old_user= User.find_by_email!(user_params[:email])
          UserMailer.with(user: @old_user).welcome_email.deliver_later
          render json: {
            user: @old_user
          }
        end
        if @user.save
          UserMailer.with(user: @user).welcome_email.deliver_later
          render json: {
            status: :created,
            user: @user
          }
        end
      end

      def update
        user = User.find(params[:id])
        user.update_attributes(user_params)
        render json: user
      end

      # DELETE /origins/1
      def destroy
        @user.destroy
      end

    protected
    def user_params
      params.require(:user).permit(:id, :email, :admin, :first_name, :last_name, :active, :role, :password, :password_confirmation, :phone, :customer, :add_phone)
    end
  end
end
