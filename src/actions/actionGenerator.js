const actionGenerator = type => {
  return payload => {
    return {
      type,
      payload
    };
  };
};

export default actionGenerator;
