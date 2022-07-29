class CommentSerializer < ActiveModel::Serializer
  attributes :id, :description, :user_id, :idea_id

  belongs_to :idea
end
