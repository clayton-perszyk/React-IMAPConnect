class CreateImaps < ActiveRecord::Migration[5.1]
  def change
    create_table :imaps do |t|
      t.string :email
      t.string :password
      t.string :host
      t.string :port
      t.boolean :ssl

      t.timestamps
    end
  end
end
