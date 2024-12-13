import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";

const UserEmail = ({ name }) => (
  <Html>
  <Head />
  <Preview>Anurag Singh</Preview>
  <Body style={main}>
    <Container>
      
      <Section style={content}>
        <Row>
          <Img
            style={image}
            width={620}
            src='https://raw.githubusercontent.com/itsAnuragsingh/portfolio/refs/heads/main/public/cover.png'
          />
        </Row>

        <Row style={{ ...boxInfos, paddingBottom: "0" }}>
          <Column>
            <Heading
              style={{
                fontSize: 32,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Hi {name},
            </Heading>
            <Heading
              as="h2"
              style={{
                fontSize: 26,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Thank you for getting in touch! I’ve received your message and will respond as soon as possible. 
            </Heading>

            <Text style={
              {textAlign: "center",
              fontSize: 16,
              color: "rgb(0,0,0, 0.7)",}
            }>
              <b>Looking forward to connecting with you! </b>
            </Text>

          </Column>
        </Row>
        <Row style={{ ...boxInfos, paddingTop: "0" }}>
          <Column style={containerButton} colSpan={2}>
            <Button style={button}
            href="https://www.linkedin.com/in/itsanuragsingh7/">connect with LinkedIn</Button>
          </Column>
        </Row>
      </Section>

      <Section style={containerImageFooter}>
        <Img
          style={image}
          width={620}
          src='https://raw.githubusercontent.com/itsAnuragsingh/portfolio/refs/heads/main/public/footer.png'
        />
      </Section>

      <Text
        style={{
          textAlign: "center",
          fontSize: 12,
          color: "rgb(0,0,0, 0.7)",
        }}
      >
        © 2024 | Anurag Singh
      </Text>
    </Container>
  </Body>
</Html>
);

export default UserEmail;

const main = {
  backgroundColor: "#fff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
  fontSize: 16,
};

const logo = {
  padding: "30px 20px",
};

const containerButton = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
};

const button = {
  backgroundColor: "#e00707",
  borderRadius: 3,
  color: "#FFF",
  fontWeight: "bold",
  border: "1px solid rgb(0,0,0, 0.1)",
  cursor: "pointer",
  padding: "12px 30px",
};

const content = {
  border: "1px solid rgb(0,0,0, 0.1)",
  borderRadius: "3px",
  overflow: "hidden",
};

const image = {
  maxWidth: "100%",
};

const boxInfos = {
  padding: "20px",
};

const containerImageFooter = {
  padding: "45px 0 0 0",
};