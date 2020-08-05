import React from "react";
function OurTeam() {
  return (
    <section className="section OurTeamsection" id="ourteam">
      <h1>
        <span className="orange-text">our</span> team
      </h1>
      <div className="teamContainer">
        <span>
          <div className="teamMemberContainer">
            <img />
            <span>
              <span className="teamMemberName">Dr. Manjula Singh</span>
              <span className="teamMemberPost">President</span>
            </span>
          </div>
          <div className="teamMemberContainer">
            <img />
            <span>
              <span className="teamMemberName">Dr. Meenakshi Saxena </span>
              <span className="teamMemberPost">Secretary</span>
            </span>
          </div>
        </span>
        <span>
          <div className="teamMemberContainer">
            <img />
            <span>
              <span className="teamMemberName">Mrs. Binu Singh</span>
              <span className="teamMemberPost">Vice President</span>
            </span>
          </div>
          <div className="teamMemberContainer">
            <img />
            <span>
              <span className="teamMemberName">Mrs. Neeraj Singh</span>
              <span className="teamMemberPost">Treasurer</span>
            </span>
          </div>
        </span>
      </div>
    </section>
  );
}

export default OurTeam;
