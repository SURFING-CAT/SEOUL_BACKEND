class Post {
  imageUrl: string[];
  description: string;
  placeId: number;

  constructor(imageUrl: string[], description: string, placeId: number) {
    this.imageUrl = imageUrl;
    this.description = description;
    this.placeId = placeId;
  }
}
