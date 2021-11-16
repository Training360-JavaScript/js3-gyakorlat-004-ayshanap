const checkIP = (IPAddress) => {
    return IPAddress.match(/^(\d{3}.){3}\d{2}$/) ? true : false;
};

export default checkIP;