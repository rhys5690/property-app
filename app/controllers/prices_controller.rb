class PricesController < ApplicationController

  def index
    @all_prices = Price.all

    respond_to do |format|
      format.html {}
      format.json { render :json => @all_prices }
    end

  end
end
