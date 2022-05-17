import { useEffect, useState } from "react";
import Link from "next/link";

import MyIsacaUser from "./MyIsacaUser";

const IsacaHeader = ({ id, user, userSummary, setHeader }) => {
  const [activeLink, setActiveLink] = useState("membership-status");

  useEffect(() => {
    setHeader(activeLink);
  }, [activeLink]);

  return (
    <>
      <MyIsacaUser userData={user} userSummary={userSummary} />
      <div style={styles.main}>
        <div
          style={
            activeLink === "membership-status"
              ? styles.activeLinkContainer
              : styles.linkContainer
          }
        >
          <p
            style={
              activeLink === "membership-status"
                ? styles.activeLink
                : styles.link
            }
            onClick={() => {
              setActiveLink("membership-status");
            }}
          >
            Membership Status
          </p>
        </div>

        <div
          style={
            activeLink === "certifications"
              ? styles.activeLinkContainer
              : styles.linkContainer
          }
        >
          <p
            style={
              activeLink === "certifications" ? styles.activeLink : styles.link
            }
            onClick={() => {
              setActiveLink("certifications");
            }}
          >
            Certifications & CPE Management
          </p>
        </div>

        <div
          style={
            activeLink === "learnings"
              ? styles.activeLinkContainer
              : styles.linkContainer
          }
        >
          <p
            style={activeLink === "learnings" ? styles.activeLink : styles.link}
            onClick={() => {
              setActiveLink("learnings");
            }}
          >
            Learning Access
          </p>
        </div>

        <div
          style={
            activeLink === "cpecertificates"
              ? styles.activeLinkContainer
              : styles.linkContainer
          }
        >
          <p
            style={
              activeLink === "cpecertificates" ? styles.activeLink : styles.link
            }
            onClick={() => {
              setActiveLink("cpecertificates");
            }}
          >
            ISACA CPE Records
          </p>
        </div>

        <div
          style={
            activeLink === "downloads"
              ? styles.activeLinkContainer
              : styles.linkContainer
          }
        >
          <p
            style={activeLink === "downloads" ? styles.activeLink : styles.link}
            onClick={() => {
              setActiveLink("downloads");
            }}
          >
            Resources
          </p>
        </div>

        <div
          style={
            activeLink === "certificates"
              ? styles.activeLinkContainer
              : styles.linkContainer
          }
        >
          <p
            style={
              activeLink === "certificates" ? styles.activeLink : styles.link
            }
            onClick={() => {
              setActiveLink("certificates");
            }}
          >
            Cerificate Programs
          </p>
        </div>
      </div>
      {activeLink === "membership-status" ? (
        <div style={{ padding: 10, textAlign: "center" }}>
          <h1>Membership Status</h1>
        </div>
      ) : activeLink === "certifications" ? (
        <div style={{ padding: 10, textAlign: "center" }}>
          <h1>Certifications & CPE Management</h1>
        </div>
      ) : activeLink === "learnings" ? (
        <div style={{ padding: 10, textAlign: "center" }}>
          <h1>Access Your Virtual Events</h1>
        </div>
      ) : activeLink === "cpecertificates" ? (
        <div style={{ padding: 10, textAlign: "center" }}>
          <h1>ISACA CPE Records</h1>
        </div>
      ) : activeLink === "downloads" ? (
        <div style={{ padding: 10, textAlign: "center" }}>
          <h1>Resources</h1>
        </div>
      ) : activeLink === "certificates" ? (
        <div style={{ padding: 10, textAlign: "center" }}>
          <h1>Certificate Programs</h1>
        </div>
      ) : null}
    </>
  );
};

const styles = {
  main: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "106px",
    backgroundColor: "#e2e5e6",
  },
  linkContainer: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
    width: "260px",
  },
  activeLinkContainer: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
    width: "260px",
    borderBottom: "5px solid #a30046",
  },
  link: {
    cursor: "pointer",
    textDecoration: "none",
    color: "#a30046",
    fontSize: "1.25em",
  },
  activeLink: {
    cursor: "pointer",
    textDecoration: "none",
    color: "black",
    cursor: "default",
    pointerEvents: "none",
    fontSize: "1.25em",
  },
};

export default IsacaHeader;
