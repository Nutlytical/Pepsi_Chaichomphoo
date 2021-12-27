import React from "react";
import styled from "styled-components";

export default function Videos() {
  return (
    <VideosContainer>
      {pepsiVideo.map((video, index) => (
        <Card key={index}>
          <Video>
            <Thumbnail>
              <video controls width="100%" height="100%">
                <source src={video.src} type="video/mp4" />
              </video>
            </Thumbnail>
            <Details>
              <div>
                <AuthorImage src="512.png" alt="Pepsi Chaichomphoo" />
              </div>
              <Title>{video.description}</Title>
            </Details>
          </Video>
        </Card>
      ))}
    </VideosContainer>
  );
}

const VideosContainer = styled.div`
  background: #f9f9f9;
  width: 100%;
  height: 100%;
  padding: 15px 15px;
  border-top: 1px solid #ddd;
  overflow-y: scroll;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Card = styled.div``;

const Video = styled.div`
  width: 310px;
  margin-bottom: 20px;
  padding: 15px;
  background-color: rgba(254, 254, 254, 0.8);
`;

const Thumbnail = styled.div`
  width: 100%;
  height: 170px;
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const AuthorImage = styled.img`
  object-fit: cover;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  margin-right: 10px;
`;

const Title = styled.h3`
  color: #ddd
  margin-bottom: 6px;
`;

const pepsiVideo = [
  {
    src: "video/firstVideo.mp4",
    description: "Hi Human, I'm Pepsi Chaichomphoo.",
  },
  { src: "video/snack1.mp4", description: "Give me an orange !" },
  { src: "video/snack2.mp4", description: "How can I get this thing !" },
  { src: "video/snack3.mp4", description: "Yeahhh I know it." },
  { src: "video/water1.mp4", description: "I can't swim! Noooooooooo." },
  { src: "video/water2.mp4", description: "Now I can swim." },
  { src: "video/water3.mp4", description: "Get Out! I hate human!!" },
  { src: "video/durian1.mp4", description: "Oh Durian, I love human." },
  { src: "video/durian2.mp4", description: "I want more!!" },
  { src: "video/durian3.mp4", description: "Yummy!!" },
  {
    src: "video/vehicle1.mp4",
    description: "I love to travel with any vehicle.",
  },
  { src: "video/vehicle2.mp4", description: "But but ...." },
  { src: "video/vehicle3.mp4", description: "But Not this vehicle !" },
  { src: "video/playAlone1.mp4", description: "play alone1" },
  { src: "video/playAlone2.mp4", description: "play alone2" },
  { src: "video/playAlone3.mp4", description: "play alone3" },
  { src: "video/friend1.mp4", description: "friend1" },
  { src: "video/friend2.mp4", description: "friend2" },
  { src: "video/friend3.mp4", description: "friend3" },
  { src: "video/friend4.mp4", description: "friend4" },
  { src: "video/friend5.mp4", description: "friend5" },
  { src: "video/friend6.mp4", description: "friend6" },
  { src: "video/friend7.mp4", description: "friend7" },
  { src: "video/friend8.mp4", description: "friend8" },
  { src: "video/friend9.mp4", description: "friend9" },
  { src: "video/run1.mp4", description: "run1" },
  { src: "video/run2.mp4", description: "run2" },
  { src: "video/water4.mp4", description: "water4" },
  { src: "video/water5.mp4", description: "water5" },
  { src: "video/elephant1.mp4", description: "elephant1" },
  { src: "video/elephant2.mp4", description: "elephant2" },
  { src: "video/else1.mp4", description: "else1" },
  { src: "video/else2.mp4", description: "else2" },
  { src: "video/else3.mp4", description: "else3" },
  { src: "video/else4.mp4", description: "else4" },
  { src: "video/else5.mp4", description: "else5" },
  { src: "video/bath1.mp4", description: "bath1" },
  { src: "video/bath2.mp4", description: "bath2" },
  { src: "video/bath3.mp4", description: "bath3" },
  { src: "video/bath4.mp4", description: "bath4" },
  { src: "video/bath5.mp4", description: "bath5" },
  { src: "video/bath6.mp4", description: "bath6" },
  { src: "video/bath7.mp4", description: "bath7" },
];
