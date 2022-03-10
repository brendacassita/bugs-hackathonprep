class CreateBugs < ActiveRecord::Migration[6.1]
  def change
    create_table :bugs do |t|
      t.string :name
      t.string :bug_type

      t.timestamps
    end
  end
end
