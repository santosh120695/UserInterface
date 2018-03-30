class CreateFileUploads < ActiveRecord::Migration[5.1]
  def change
    create_table :file_uploads do |t|
      t.string :item_type
      t.integer :item_id

      t.timestamps
    end
  end
end
