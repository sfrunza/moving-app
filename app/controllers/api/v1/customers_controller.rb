module Api::V1
    class CustomersController < ApplicationController
      before_action :set_customer, only: [:show, :update, :destroy]
  
      # GET /jobs
      def index
        @customers = Customer.all
        render json: @customers
        # if current_user && current_user.customer == false
        #   @jobs = Job.all.order('created_at DESC')
        
        # elsif current_user && current_user.customer == true
        #   @current_user = current_user
        #   @user_jobs = @current_user.jobs
        #   render json: @user_jobs
        # else
        #   render json: {message: "Please sign in."}
        # end
  
        # @user_id = params[:user_id]
        # @user_jobs = Job.where(user_id: @user_id)
        # render json: @user_jobs
  
      end
  
      # GET /jobs/1
      def show
        @customer = Customer.find(params[:id])
        render json: @customer, include: ["jobs"]

        # if current_user && current_user.customer == false
        #   @job = Job.find(params[:id])
        #   @origin = @job.origin
        #   @destination = @job.destination
        #   @images = @job.images
        #   render json: @job
        # elsif current_user && current_user.customer == true
        #   @current_user = current_user
        #   @user_jobs = @current_user.jobs.find(params[:id])
        #   @origin = @user_jobs.origin
        #   @destination = @user_jobs.destination
        #   @images = @user_jobs.images
        #   render json: {job: @user_jobs, origin: @origin, destination: @destination, images: @images}
        # else
        #   render json: {message: "Please sign in."}
        # end
  
      end
  
      # POST /jobs
      def create
        if Customer.exists?(email: customer_params[:email])
          @old_customer= Customer.find_by_email!(customer_params[:email])
        # UserMailer.with(user: @old_user).welcome_email.deliver_later
          render json: {
              customer: @old_customer
          }
        elsif @customer = Customer.new(customer_params)
          if @customer.save
          # UserMailer.with(user: @user).welcome_email.deliver_later
              render json: {
              status: :created,
              customer: @customer
              }
          end
        else
        render json: @customer.errors, status: :unprocessable_entity
        end
      end
  
      # PATCH/PUT /jobs/1
      def update
        if @customer.update(customer_params)
          render json: @customer
        else
          render json: @customer.errors, status: :unprocessable_entity
        end
      end
  
      # DELETE /jobs/1
      def destroy
        @customer.destroy
      end
  
      private
        # Use callbacks to share common setup or constraints between actions.
        def set_customer
          @customer = Customer.find(params[:id])
        rescue => e
          logger.info e
          render json: { message: 'customer id not found' }, status: :not_found
        end
  
      
  
        # Only allow a trusted parameter "white list" through.
        def customer_params
          params.require(:customer).permit(:id, :first_name, :last_name, :email, :phone, :add_phone )
        end
    end
  end
  