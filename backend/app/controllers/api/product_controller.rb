class Api::ProductController < ApplicationController
  def index
    render json: Product.all
  end

  def show
    Product.find(params[:id])
  end

  def create; end

  def update; end

  def edit; end

  def destroy; end
end
