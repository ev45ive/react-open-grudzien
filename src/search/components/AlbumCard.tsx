import React from 'react';

export interface Props {
}

export const AlbumCard = (props: Props) => {
  return (
    <div className="card">
      <img src="https://www.placecage.com/c/200/300" className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
      </div>
    </div>
  );
};
