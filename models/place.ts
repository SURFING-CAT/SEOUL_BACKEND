class Place {
  placeName: string; // 장소 이름
  todayVisitorCnt: number; // 오늘 방문자 수
  visitors: string[];
  region: string; // 장소
  rewards: number; // 보상

  constructor(placeName: string, region: string, rewards: number) {
    this.placeName = placeName;
    this.todayVisitorCnt = 0; // 장소가 등록되면 방문자 수는 0으로 초기화
    this.visitors = []; // 오늘 장소를 들린 방문자들의 아이디를 저장하는 배열
    this.region = region;
    this.rewards = rewards;
  }
}
