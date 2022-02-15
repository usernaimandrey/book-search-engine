const validationSchema = (text) => {
    const normalize = text.trim();
    if (normalize.length === 0) {
        return false;
    }
    return true;
};

export default  validationSchema;