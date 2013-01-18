module ApplicationHelper  
  def broadcast channel, &block

    message = { channel: channel, data: capture(&block) }  
    uri = URI.parse "http://192.168.2.118:9292/faye"
    Net::HTTP.post_form(uri,  message: message.to_json)  
  end
end  