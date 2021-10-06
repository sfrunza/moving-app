class UserMailer < ApplicationMailer
  default from: 'Insight Moving'

  def welcome_email
    @customer = params[:customer]
    @job = params[:job]
    @login_url  = 'https://www.insightmoving.com/login'
    @url = 'https://www.insightmoving.com'
    mail(to: @customer.email, subject: 'Moving Details')
  end

  def status_email
    @user = params[:user]
    @job = params[:job]
    mail(to: @user.email, subject: 'Status Update')
  end

  def new_job_email
    @customer = params[:customer]
    @job = params[:job]
    mail(to: "info@insightmoving.com", subject: 'New Job Submitted')
  end

end
