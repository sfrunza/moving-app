module Api::V1
  class ImagesController < ApplicationController
    # before_action :set_image, only: [:show, :update, :destroy]

  def index
    if !current_user
      @images = Image.all.order('id DESC').where(job_id: 0)
      render json: @images
    else
      @images = Image.all.order('id DESC')
      render json: @images
    end
  end

  def show
    @image = Image.find(params[:id])
    render json: @image
  end

  def create
    @image = Image.create(image_params)
    @image.save
    render json: @image
  end

  def destroy
    image = Image.find(params[:id])
    image.destroy
  end

  protected
    # Never trust parameters from the scary internet, only allow the white list through.
    def image_params
      params.permit( :photo, :id, :image, :job_id)
    end

  end
end
