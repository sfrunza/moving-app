module Api::V1
  class UsersController < ApplicationController
    before_action :set_user, only: [:show, :update, :destroy]

    def index
      if current_user && current_user.admin
        @users = User.all.order('id DESC')
        @current_user = current_user
        render json: {
          current_user: @current_user,
          logged_in: true,
          users: @users,
        }
      elsif current_user 
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
     if current_user && current_user.admin
       @user = User.find(params[:id])
       render json: @user, include: ["jobs"]

      elsif current_user 
        @user = current_user 
        render json: @user, include: ["jobs"]
      else
        render json: {status: :not_found}
      end
    end

      def create
        if User.exists?(email: user_params[:email])
          @old_user= User.find_by_email!(user_params[:email])
          # UserMailer.with(user: @old_user).welcome_email.deliver_later
          render json: {
            user: @old_user
          }
        
        else  @user = User.new(user_params)
          if @user.save
          # UserMailer.with(user: @user).welcome_email.deliver_later
            render json: {
              status: :created,
              user: @user
            }
          end
        end
      end

      def update
        user = User.find(params[:id])
        user.update_attributes(user_params)
        render json: {
          user: user
        }
      end

      # DELETE /origins/1
      def destroy
        @user.destroy
      end

    protected

    def set_user
      @user = User.find(params[:id])
    rescue => e
      logger.info e
      render json: { message: 'user id not found' }, status: :not_found
    end

    def user_params
      params.require(:user).permit(:id, :email, :admin, :first_name, :last_name, :active, :role, :password, :password_confirmation, :phone, :rate, :ssn, :address)
    end
  end
end
