"use client";

import React, { CSSProperties } from "react";
import {
  Html,
  Body,
  Container,
  Text,
  Link,
  Preview,
} from "@react-email/components";

const styles: Record<string, CSSProperties> = {
  body: {
    backgroundColor: "#FFF",
    paddingTop: "1rem",
  },
  heading: {
    fontSize: 32,
    margin: "0 0 1rem",
  },
};

interface Props {
  name: string;
}

export default function WelcomeTemplate({ name }: Props) {
  return (
    <Html>
      <Preview>Welcome aboard!</Preview>
      <Body style={styles.body}>
        <Container>
          <Text style={styles.heading}>Hello {name}!</Text>
          <Link href="https://codewithmosh.com">www.codewithmosh.com</Link>
        </Container>
      </Body>
    </Html>
  );
}
