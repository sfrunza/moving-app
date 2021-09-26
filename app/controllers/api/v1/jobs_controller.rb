module Api::V1
  class JobsController < ApplicationController
    before_action :set_job, only: [:show, :update, :destroy]

    # GET /jobs
    def index
      if current_user && current_user.customer == false
        @jobs = Job.all.order('created_at DESC')
        render json: @jobs
      elsif current_user && current_user.customer == true
        @current_user = current_user
        @user_jobs = @current_user.jobs
        render json: @user_jobs
      else
        render json: {message: "Please sign in."}
      end

      # @user_id = params[:user_id]
      # @user_jobs = Job.where(user_id: @user_id)
      # render json: @user_jobs

    end

    # GET /jobs/1
    def show
      if current_user && current_user.customer == false
        @job = Job.find(params[:id])
        @origin = @job.origin
        @destination = @job.destination
        @images = @job.images
        render json: @job
      elsif current_user && current_user.customer == true
        @current_user = current_user
        @user_jobs = @current_user.jobs.find(params[:id])
        @origin = @user_jobs.origin
        @destination = @user_jobs.destination
        @images = @user_jobs.images
        render json: {job: @user_jobs, origin: @origin, destination: @destination, images: @images}
      else
        render json: {message: "Please sign in."}
      end

    end

    # POST /jobs
    def create
      @job = Job.new(job_params)

      if @job.save
        render json: {
          status: :created,
          job: @job
        }
      else
        render json: @job.errors, status: :unprocessable_entity
      end
    end

    # PATCH/PUT /jobs/1
    def update
      if @job.update(job_params)
        @user = User.find(@job.user_id)
        # UserMailer.with(user: @user, job: @job).status_email.deliver_later
        render json: @job
      else
        render json: @job.errors, status: :unprocessable_entity
      end
    end

    # DELETE /jobs/1
    def destroy
      @job.destroy
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_job
        @job = Job.find(params[:id])
      rescue => e
        logger.info e
        render json: { message: 'job id not found' }, status: :not_found
      end

    

      # Only allow a trusted parameter "white list" through.
      def job_params
        params.require(:job).permit(:pick_up_date, :delivery_date,  :job_duration, :user_id, :job_size, :job_status, :start_time, :crew_size, :job_rate, :estimated_time, :travel_time, :estimated_quote, :additional_info, :total_amount, :job_type, :crew)
      end
  end
end
