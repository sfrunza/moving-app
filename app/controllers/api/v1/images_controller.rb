module Api::V1
  class ImagesController < ApplicationController
    protect_from_forgery with: :null_session


  def index
    @images = Image.all.order('id DESC')
    render json: @images
  end

  def show
    @image = Image.find(params[:id])
    render json: @image
  end

  def create
    @image = Image.create(image_params)
    @image.save
  end

  def destroy
    image = Image.find(params[:id])
    image.destroy
  end

  protected
    # Never trust parameters from the scary internet, only allow the white list through.
    def image_params
      params.permit( :photo, :id, :image)
    end


  end
end