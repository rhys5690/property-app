class PricesController < ApplicationController

  def index
    @all_prices = Suburb.all
    binding.pry
  end
end
