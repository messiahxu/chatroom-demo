class MessagesController < ApplicationController
  before_filter :n2br, only: [:create] 

  def edit
    @message = Message.first
  end

  def index
    @messages = Message.all
  end

  def create
    body = params[:body]
    @message = Message.new(messager: current_user,
                               body: body)

    if @message.save
      render :create
    else
      render nothing: true
    end
  end

  private
    def n2br
      if params[:body]
        params[:body].gsub!(/\n/, '<br/>')
      end
    end
end
