module Api::V1
  class JobsController < ApplicationController
    before_action :set_job, only: [:show, :update, :destroy]

    # GET /jobs
    def index
      @jobs = Job.all.order('id DESC')

      render json: @jobs
    end

    # GET /jobs/1
    def show
      @job = Job.find(params[:id])

      @customer = @job.customer
      @origin = @job.origin
      @destination = @job.destination
      render json: {job: @job, customer: @customer, origin: @origin, destination: @destination}

    end

    # POST /jobs
    def create
      @job = Job.new(job_params)

      if @job.save
        render json: @job, status: :created
      else
        render json: @job.errors, status: :unprocessable_entity
      end
    end

    # PATCH/PUT /jobs/1
    def update
      if @job.update(job_params)
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
      end

      # Only allow a trusted parameter "white list" through.
      def job_params
        params.require(:job).permit(:pick_up_date, :delivery_date, :status, :job_time, :customer_id)
      end
  end
end
