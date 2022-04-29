class SongSerializer < ActiveModel::Serializer
  attributes :id, :name, :artist, :duration, :album
end
