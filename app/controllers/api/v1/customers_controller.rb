module Api::V1
  class CustomersController < ApplicationController
    before_action :set_customer, only: [:show, :update, :destroy]

    # GET /customers
    def index
      @customers = Customer.all.order('id DESC')

      render json: @customers
    end

    # GET /customers/1
    def show
      customer = Customer.find(params[:id])
      render json: {customer: customer}
    end

    # POST /customers
    def create
      @customer = Customer.new(customer_params)

      if @customer.save
        render json: @customer, status: :created
      else
        render json: @customer.errors, status: :unprocessable_entity
      end
    end

    # PATCH/PUT /customers/1
    def update
      if @customer.update(customer_params)
        render json: @customer
      else
        render json: @customer.errors, status: :unprocessable_entity
      end
    end

    # DELETE /customers/1
    def destroy
      @customer.destroy
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_customer
        @customer = Customer.find(params[:id])
      end

      # Only allow a trusted parameter "white list" through.
      def customer_params
        params.require(:customer).permit(:first_name, :last_name, :email, :phone, :job_id, :additional_info)
      end
  end
end
