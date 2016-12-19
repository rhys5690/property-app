class PagesController < ApplicationController

  def home

    # @all_suburbs = Suburb.all
    # number_of_prices = @all_suburbs.first.prices.count
    # total_of_prices = 0
    # @suburb_average_array = Array.new
    #
    # @all_suburbs.each do |suburb|
    #   suburb_total = 0
    #
    #   suburb.prices.each do |price|
    #     total_of_prices = total_of_prices + price.mean_b3
    #     suburb_total += price.mean_b3
    #   end
    #
    #   @suburb_average_array.append( suburb_total/number_of_prices )
    # end
    #
    # @average_all_suburbs = total_of_prices / number_of_prices

    all_prices = Price.all.pluck(:mean_b3)
    total_price = all_prices.reduce(0) do |total, current_price|
      total + current_price
    end
    @average_all_suburbs = total_price / Price.all.count



    #  The following try to list all suburbs and their respective average price

    @all_suburbs = Suburb.all

    



    # binding.pry

  end

end
