class RegistrationsController < Devise::RegistrationsController

  def create
    @user = User.new(user_params)
    if defined?((user_params[:email]))
      @old_user= User.find_by_email!(user_params[:email])
      sign_in :user, @old_user
      redirect_to api_v1_users_path
    elsif @user.save
      render json: @user
    else
      warden.custom_failure!
      render json: { error: 'signup error' }, status: :unprocessable_entity
    end
  end

  def update
    @user = User.find_by_email(user_params[:email])

    if update_resource(@user, user_params)
      bypass_sign_in(@user)
    else
      warden.custom_failure!
      render :json=> @user.errors, :status=>422
    end
 end

  def destroy
    @user = User.find_by_email(user_params[:email])
    if @user.destroy
      render :json=> { success: 'user was successfully deleted' }, :status=>201
    else
      render :json=> { error: 'user could not be deleted' }, :status=>422
    end
  end

  private

  def user_params
     params.require(:user).permit(:email, :password, :password_confirmation, :current_password)
  end
end
