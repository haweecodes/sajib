import React from "react";
import { Card, Avatar, Row, Col, Typography } from "antd";
import Link from "next/link";

const cardWidth = 600;
const avatarSize = 180;
const { Text } = Typography;

const centerStyle = {
  display: 'flex',
  justifyContent: 'center'
};

const Intro = () => {
  return (
    <section style={{margin: '20px', display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
      <Card bordered={false} style={{ width: cardWidth }}>
        <Row gutter={16}>
          <Col span={8}>
            <Avatar
              size={avatarSize}
              src="https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/268343258_10219419251567648_7602269089480346693_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=174925&_nc_eui2=AeEcs9vYPIsl-29VRWCG75J2LoxX2my13aQujFfabLXdpA9I9O_RPfMxsicj8gYf5v4&_nc_ohc=c1CxVI7KlhsAX9un-UA&tn=oFdY5A8qBSTe-Dgu&_nc_ht=scontent.fdac5-2.fna&oh=00_AT8zbFFZd06Rt_nqPe4H-vLE0w1SoABKa7x1OwpWFR3bdA&oe=62575FEB"
            />
          </Col>
          <Col span={16}>
            <p>
              {" "}
              Sajib Hawee a <Text code>JavaScript</Text> engineer from{" "}
              <Link href="https://en.wikipedia.org/wiki/Bangladesh">
                <a target="_blank" rel="noopener noreferrer">
                  Bangladesh
                </a>
              </Link>{" "}
              . I have been working with <Text code>JavaScript</Text> for 4+
              years, mainly as a frontend engineer.
            </p>
            <p>
              I am currently interested in working with WebRtc, Canvas and other exciting web technologies.
            </p>
          </Col>
        </Row>
      </Card>
    </section>
  );
};

export default Intro;
