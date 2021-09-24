class SessionsController < Devise::SessionsController

  # POST /v1/login
  def create
    @user = User.find_by_email(user_params[:email])
    return invalid_login_attempt unless @user

    if @user.valid_password?(user_params[:password])
      @user.update(active: true)
      sign_in :user, @user
      redirect_to api_v1_users_path
    else
      render json: {
        status: 401,
        errors: ['Invalid password']
      }
    end

  end

  def destroy
    @user = User.find(current_user.id)
    @user.update(active: false)
    sign_out(@user)
    render :json=> {:success=>true}

  end


  private

  def invalid_login_attempt
    warden.custom_failure!
    # render json: {error: ['No such user!', ' Verify credentials and try again']}, status: :unprocessable_entity
    render json: {
      status: :unprocessable_entity,
      errors: ['No such user!', ' Verify credentials and try again']
    }
  end

  def user_params
     params.require(:user).permit(:email, :password, :active)
  end

end
