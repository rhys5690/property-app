class PagesController < ApplicationController

  def home


    # The following code trys to find the total price for all suburbs

    all_prices = Price.all.pluck(:mean_b3)
    total_price = all_prices.reduce(0) do |total, current_price|
      total + current_price
    end
    @average_all_suburbs = total_price / Price.all.count



    #  The following code will generate an array containing the name and price for every suburb
    # In the form of array inside an array [ [suburb_name, suburb_price], [] ]

    @all_suburbs = Suburb.all
    @suburb_price_array = Array.new
    @suburb_price_history_array = Array.new

    @all_suburbs.each do |suburb|
      latest_price = suburb.prices[0].mean_b3
      current_suburb_price_array = [suburb, latest_price]
      @suburb_price_array.push(current_suburb_price_array)

      # interate through all prices in each suburb
      current_suburb_price_history_array = Array.new
      current_suburb_price_history = suburb.prices
      current_suburb_price_history.each do |price|
        monthly_price = price.mean_b2
        month_name = price.suburb.name
        month_name_and_price = [month_name, monthly_price]
        current_suburb_price_history_array.push(month_name_and_price)
      end
      @suburb_price_history_array.push(current_suburb_price_history_array)

    end


    @projected_growth_percentage = @average_all_suburbs





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
