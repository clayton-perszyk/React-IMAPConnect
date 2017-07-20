require 'test_helper'

class ImapControllerTest < ActionDispatch::IntegrationTest
   setup do
     @imap1 = imaps(:one)
     @imap2 = imaps(:two)
   end

  test "it does creates a single imap per email" do
    post_to_create(@imap2)
    assert_no_difference 'Imap.count' do
      post_to_create(@imap2)
    end
  end

  test "it creates a session for the imap connection" do
    post_to_create(@imap1 )
    refute_nil session[:imap_id]
  end


  private

  def post_to_create imap
    post create_imap_credentials_path, params: { imap: { email: imap.email,
                                                 password: imap.password,
                                                 host: imap.host,
                                                 port: imap.port,
                                                 ssl: imap.ssl
                                                }}, as: :json
  end
end
