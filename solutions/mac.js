const checkMac = (MACAddress) => {
    return MACAddress.match(/^\w\d:(\d{2}:){2}\d\w:\d{2}:AB$/) ? true : false;
};

export default checkMac;