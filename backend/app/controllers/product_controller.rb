class ProductController < ApplicationController
  def index
    Product.all
  end

  def show
    Product.find(params[:id])
  end

  def create; end

  def update; end

  def edit; end

  def destroy; end
end
