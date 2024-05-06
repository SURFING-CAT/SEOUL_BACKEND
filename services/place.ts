import { Inject, Service } from "typedi";
import { Logger } from "winston";

@Service()
export default class PlaceService {
  constructor(@Inject("logger") private logger: Logger) {}

  /***
   * 자정이 지나면 다시 위치를 선택
   */
  public async SelectTodayPlace() {}

  /***
   *  2 x 2 퍼즐 생성
   */
  public async CreatePlacePuzzle() {}

  /***
   * 현재 공개되지 않은 퍼즐 조각 중 하나를 리턴
   */
  public async GetRandomPuzzlePiece() {}

  /***
   *  현재 위치를 비교해 유저에게 보상 부여
   */
  public async GiveRewards() {}
}
