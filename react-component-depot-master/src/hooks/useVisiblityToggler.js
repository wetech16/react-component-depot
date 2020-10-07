import React, { useState } from "react";

const useVisiblityToggler = (component, visiblity) => {
  const [visible, setVisiblity] = useState(visiblity);

  return [visible ? component : null, () => setVisiblity(!visible)];
};

export default useVisiblityToggler;
