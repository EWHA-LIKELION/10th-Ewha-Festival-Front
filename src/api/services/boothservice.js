import http from "../http";

const BoothService = {
  getAllBooth: () => http.get("~/booth"),
  getBooth: boothId => http.get("~/booth/boothId"),
};

export default BoothService;
