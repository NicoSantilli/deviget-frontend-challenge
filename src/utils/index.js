import moment from "moment";

export const getDate = (created_utc) => {
  return moment.unix(created_utc).fromNow();
};
