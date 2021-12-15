export const objNotEmpty = (obj) => Object.values(obj).every((a) => a);

export const inputObjStateChange = ({ target: { value } }, title, set, cb = () => {}) => {
  set((state) => ({ ...state, [title]: value }));
  cb();
};

export const objStateChange = (value, title, set) => set((state) => ({ ...state, [title]: value }));
