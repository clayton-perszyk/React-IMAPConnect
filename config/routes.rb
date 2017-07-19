Rails.application.routes.draw do
  get '/', to: 'imap_app#index'
  post 'create_imap_credentials', to: 'imaps#create_imap_credentials'
end
