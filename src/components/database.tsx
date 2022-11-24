export interface USERDETAILS {
  email: string;
  password: string;
  name: string;
  repassword: string;
}

let db: USERDETAILS[] = [];
const locStorage = localStorage.getItem("DETAILS");
if (locStorage) {
  const storageView = JSON.parse(locStorage);
  if (storageView && Array.isArray(storageView) && storageView.length) {
    db = storageView;
  }
};

export default db
