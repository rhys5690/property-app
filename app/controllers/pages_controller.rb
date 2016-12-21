class PagesController < ApplicationController

  def home

    # ------------------ Start of global stats section --------------------------

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

    # Find the global previous month average price

    @previous_month_average_array = Price.where({:month => "Nov"}).pluck(:mean_b3)
    @previous_month_average = @previous_month_average_array.reduce(:+)/ (@previous_month_average_array.count)

    # Find the global current month average price
    @current_month_average_array = Price.where({:month => "Dec"}).pluck(:mean_b3)
    @current_month_average = @current_month_average_array.reduce(:+)/ (@current_month_average_array.count)

    # Find the global next month projection
    @projected_growth_percentage = (@current_month_average.to_f - @previous_month_average)/ @previous_month_average * 100

    @projected_growth_value = @current_month_average * (@projected_growth_percentage/100 +1)



    # ------------------ End of global stats section --------------------------
    # ------------------ Start of Local stats section --------------------------

    bed_base = 1
    @b3_modi = bed_base * 1
    @b1_modi = bed_base * 0.55
    @b2_modi = bed_base * 0.77
    @b4_modi = bed_base * 1.327
    @b5_modi = bed_base * 1.6
    @bmore_modi = bed_base * 1.8

    bth_base = 1
    @bth1_modi = bth_base * 0.96
    @bth2_modi = bth_base * 1.05
    @bth3_modi = bth_base *
    @bth3_more_modi = bth_base * 1.06

    sqm_base = 1
    @sqm_200_250 = sqm_base * 1.0
    @sqm_150_200 = sqm_base * 0.9
    @sqm_100_150 = sqm_base * 0.8
    @sqm_0_100 = sqm_base * 0.7
    @sqm_250_300 = sqm_base * 1.1
    @sqm_0_100 = sqm_base * 1.2
    @sqm_300_350 = sqm_base * 1.3
    @sqm_350_400 = sqm_base * 1.4
    @sqm_400_more = sqm_base * 1.5

    dist_base = 1
    @dist_0_1 = dist_base * 1.05
    @dist_1_2 = dist_base * 1
    @dist_2_more = dist_base * 0.95

    park_base = 1
    @park_1 = park_base * 1
    @park_2 = park_base * 1.03
    @park_0 = park_base * 0.97
    @park_3 = park_base * 1.06
    @park_4_more = park_base * 1.08

    # ------------------ End of Local stats section --------------------------



  end

  def search
    # Apply modifiers prices
    # look up postgres ILIKE (case insesnsitive database queries)
    @suburb = Suburb.where({:name => params[:suburb]}).first
    @bedrooms = params[:bedrooms]
    @sqm = params[:square_meters]
    @park = params[:parking_spaces]

    @response = {
      :suburb => @suburb,
      :bedrooms => @bedrooms,
      :sqm => @sqm,
      :parking => @park
    }

    render :json => @response
    #
    #
    # @bedrooms = params[:bedrooms]
    #
    # @bth = params[:bathrooms]
    #
    # @sqm = params[:square_meters]
    #
    # @dist = params[:distance_from_transport]
    #
    # @park = params[:parking_spaces]
    #
    # # Determine total price
    #
    # @prices = @suburb.prices[0].mean_b3 * @bedrooms * @bth * @sqm * @dist * @park
    # User.create({:email => params[:email]})
    # # Suburb.where({:name => params[:suburb]})
    # # @prices = @suburb.prices

  end

end
