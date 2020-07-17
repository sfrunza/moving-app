class SessionsController < Devise::SessionsController

  # POST /v1/login
  def create
    @user = User.find_by_email(user_params[:email])
    return invalid_login_attempt unless @user

    if @user.valid_password?(user_params[:password])
      sign_in :user, @user
      render json: @user
    else
      render json: {
        status: 401,
        errors: ['no such user', 'verify credentials and try again or signup']
      }
    end
  end

  def destroy
    sign_out(@user)
    render :json=> {:success=>true}
  end


    private

    def invalid_login_attempt
      warden.custom_failure!
      render json: {error: 'invalid login attempt'}, status: :unprocessable_entity
    end

    def user_params
       params.require(:user).permit(:email, :password)
    end

end
