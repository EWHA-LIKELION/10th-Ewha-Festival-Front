import BoothService from "./services/boothservice";

export const GetKeywordBooth = async (day, college) => {
  try {
    const response = await BoothService.getKeywordBooth(day, college);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error, "키워드 부스 조회 실패");
  }
};

// 이 밑으로 작업 아직 안됨
export const GetAllBooth = async () => {
  try {
    const response = await BoothService.getAllBooth();
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error, "모든 부스 조회 실패");
  }
};

export const GetBooth = async () => {
  try {
    const response = await BoothService.getBooth();
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error, "부스 상세 조회 실패");
  }
};
