import { Album } from "../model/Album";

export const albumsMock: Pick<Album, 'id' | 'name' | 'images'>[] = [
  { id: '123', name: 'Album 123', images: [{ height: 300, width: 300, url: 'https://www.placecage.com/c/300/300' }] },
  { id: '234', name: 'Album 234', images: [{ height: 300, width: 300, url: 'https://www.placecage.com/c/400/400' }] },
  { id: '345', name: 'Album 345', images: [{ height: 300, width: 300, url: 'https://www.placecage.com/c/500/500' }] },
  { id: '456', name: 'Album 456', images: [{ height: 300, width: 300, url: 'https://www.placecage.com/c/350/350' }] },
];
