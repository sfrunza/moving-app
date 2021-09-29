module Api::V1
  class AddUsersController < ApplicationController

    def create
      @job = Job.find(job_params[:id])
      @users = job_params[:users]
      @job.users << current_user
      render json: @job, include: ['users']
    end

    private

    def job_params
      params.require(:job).permit(:id, users: [])
    end
  end
end 