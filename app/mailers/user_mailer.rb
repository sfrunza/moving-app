class UserMailer < ApplicationMailer
  default from: 'Insight Moving'

  def welcome_email
    @customer = params[:customer]
    @login_url  = 'http://www.insightmoving.com'
    @url = 'http://www.insightmoving.com'
    mail(to: @customer.email, subject: 'Moving Details')
  end
end
