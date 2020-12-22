import React from 'react';
import { Album } from '../../core/model/Album';

export interface Props {
  album: Album
}

export const AlbumCard = ({ album }: Props) => {
  return (
    <div className="card">
      
      <img src={album.images[0].url} className="card-img-top" />

      <div className="card-body">
        <h5 className="card-title">
          {album.name}
        </h5>
      </div>
    </div>
  );
};
