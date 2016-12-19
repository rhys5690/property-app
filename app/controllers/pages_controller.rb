class PagesController < ApplicationController
  def home
  end

  def search
    @suburb = Suburb.where({:name => params[:suburb]}).first
    @bedrooms = params[:bedrooms]
    @prices = @suburb.prices[0].mean_b3
    User.create({:email => params[:email]})
    # Suburb.where({:name => params[:suburb]})
    # @prices = @suburb.prices
  end

end
