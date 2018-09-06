const tokenName = "userUuid";

const get = () => wx.getStorageSync(tokenName);
const set = val => {
  wx.setStorageSync(tokenName, val);
};

export default {
  get,
  set
};
