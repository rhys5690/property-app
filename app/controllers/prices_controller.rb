class PricesController < ApplicationController

  def index

    @all_prices = Suburb.all

  end
end
