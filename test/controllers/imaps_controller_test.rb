require 'test_helper'

class ImapControllerTest < ActionDispatch::IntegrationTest
   setup do
     @imap = imaps(:one)
   end

  test "it creates an IMAP 'User'" do
    assert_difference('Imap.count') do
      post_to_create
    end

   assert_response :success
  end

  test "it creates a session for the imap connection" do
    post_to_create
    refute_nil session[:imap_id]
  end


  private

  def post_to_create
    post create_imap_credentials_path, params: { imap: { email: @imap.email,
                                                 password: @imap.password,
                                                 host: @imap.host,
                                                 port: @imap.port,
                                                 ssl: @imap.ssl
                                                }}, as: :json
  end
end
