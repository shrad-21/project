import React from "react";
import styled from "@emotion/styled";

const MapContainer = styled.div`
  padding: 100px 0 50px 0;
`;
const Map = () => {
  return (
    <MapContainer>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50937.59719403918!2d72.91730752167972!3d19.2239409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9b26553a94d%3A0x46d34afc13b65377!2sISKCON%20Thane%20-%20Sri%20Sri%20Radha%20Govindadeva%20Mandir!5e1!3m2!1sen!2sin!4v1750400389482!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0, borderRadius: "8px" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </MapContainer>
  );
};

export default Map;
