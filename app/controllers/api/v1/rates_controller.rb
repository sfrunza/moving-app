module Api::V1
  class RatesController < ApplicationController
    before_action :set_rate, only: [:show, :edit, :update, :destroy]

    # GET /rates
    def index
      @rates = Rate.all.order('created_at DESC')
      render json: @rates
    end

    # GET /rates/1
    def show
    end

    # GET /rates/new
    def new
      @rate = Rate.new
    end

    # GET /rates/1/edit
    def edit
      @rate = Rate.find(params[:id])
    end

    # POST /rates
    def create
      # @rate = Rate.new(rate_params)

      if @exist = Rate.where(date: rate_params[:date]).exists?(conditions = :none)
        @rate = Rate.find_by_date(rate_params[:date])
        if @rate.update(rate_params)
          render json: {
            status: :updated,
            rate: @rate
          }
        else
          render json: @rate.errors, status: :unprocessable_entity
        end

      else  @rate = Rate.new(rate_params)
        if @rate.save
          render json: {
            status: :created,
            rate: @rate
          }
        else
          render json: @rate.errors, status: :unprocessable_entity
        end

      end  
    end

    # PATCH/PUT /rates/1
    def update
      @rate = Rate.find(params[:id])
      if @rate.update(rate_params)
        render json: @rate
      else
        render json: @rate.errors, status: :unprocessable_entity
      end
    end

    # DELETE /rates/1
    def destroy
      @rate.destroy
      redirect_to rates_url, notice: 'Rate was successfully destroyed.'
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_rate
        @rate = Rate.find(params[:id])
      end

      # Only allow a trusted parameter "white list" through.
      def rate_params
        params.require(:rate).permit(:date, :rates)
      end
  end
end
