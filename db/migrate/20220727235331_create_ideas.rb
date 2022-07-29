class CreateIdeas < ActiveRecord::Migration[6.1]
  def change
    create_table :ideas do |t|
      t.string :title
      t.string :image

      t.timestamps
    end
  end
end
