import BoothService from "./services/boothservice";

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

export const GetKeywordBooth = async () => {
  try {
    const response = await BoothService.getKeywordBooth();
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error, "키워드 부스 조회 실패");
  }
};
