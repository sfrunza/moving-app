class UserMailer < ApplicationMailer
  default from: 'Insight Moving'

  def welcome_email
    @user = params[:user]
    @login_url  = 'https://www.insightmoving.com/login'
    @url = 'https://www.insightmoving.com'
    mail(to: @user.email, subject: 'Moving Details')
  end
end
