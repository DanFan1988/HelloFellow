class Api::CardsController < ApplicationController

  def index
    @cards = current_user.cards
  end

  def show
    @card = Card.find(params[:id])
  end

  def create
    @card = Card.new(params[:card])
    if @card.save
      render :show
    else
      render :json => @card.errors.full_messages, :status => 422
    end
  end

  def update
    @card = Card.find(params[:id])
    if @card.update_attributes(params[:card])
      render :show
    else
      render :json => @card.errors.full_messages, :status => 422
    end
  end

  def destroy
    card = Card.find(params[:id])
    card.destroy
    head :ok
  end
end
