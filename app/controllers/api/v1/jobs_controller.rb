module Api::V1
  class JobsController < ApplicationController
    before_action :set_job, only: [:show, :update, :destroy]

    # GET /jobs
    def index
      if current_user && current_user.admin
        @jobs = Job.all.order('created_at DESC')
        render json: @jobs, include: ["users"]
      elsif current_user 
        @jobs = Job.all.order('created_at DESC')
        render json: @jobs, include: ["users"]
      else
        render json: {message: "Please sign in."}
      end
    end

    # GET /jobs/1
    def show
      if current_user && current_user.admin
        @job = Job.find(params[:id])
        render json: @job, include: ["users"]
      elsif current_user 
        @job = Job.find(params[:id])
        render json: @job, include: ["users"]
      else
        render json: {message: "Please sign in."}
      end
    end

    # POST /jobs
    def create
      @job = Job.new(job_params)
      @customer = Customer.find(job_params[:customer_id])
      # @email = NewJobEmail.new(job_params)
      if @job.save
        UserMailer.with(customer: @customer, job: @job).new_job_email.deliver_later
        UserMailer.with(customer: @customer, job: @job).welcome_email.deliver_later
      
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
      if params.has_key?(:user_ids)
      @users = User.find(params[:user_ids])
      @job.users << @users
      else 
        @job.users = []
        @job.user_ids = []
        @job.job_duration = nil
        @job.total_amount = nil
      end
      if @job.update(job_params)
        # @user = User.find(@job.user_id)
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
        params.require(:job).permit(:pick_up_date, :delivery_date, :is_flat_rate, :job_duration, :job_size, :job_status, :start_time, :crew_size, :job_rate, :estimated_time, :travel_time, :estimated_quote, :additional_info, :total_amount, :job_type, :customer_id, user_ids: [])
      end
  end
end
