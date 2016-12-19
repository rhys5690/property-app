class PagesController < ApplicationController

  def home

    @all_suburbs = Suburb.all
    number_of_prices = @all_suburbs.first.prices.count
    total_of_prices = 0
    @suburb_average_array = Array.new

    @all_suburbs.each do |suburb|
      suburb_total = 0

      suburb.prices.each do |price|
        total_of_prices = total_of_prices + price.mean_b3
        suburb_total += price.mean_b3
      end

      @suburb_average_array.append( suburb_total/number_of_prices )
    end
    
    @average_all_suburbs = total_of_prices / number_of_prices

    binding.pry

  end

end
