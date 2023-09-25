import { forwardRef } from "react";
import {
  Contact,
  FooterContainer,
  FooterWrapper,
  Maps,
  QuestionsContainer,
  Info,
  Info2,
  InfoInteractive,
  QuestionsTitle,
  FooterText,
  ReadMore,
  FooterTextWrap,
  InfoContainer,
  Footer1fr,
  Footer2fr,
  FooterTextLeft,
  FooterTextLeftFirstChild,
  FooterTextLeftSecondChild,
} from "./styled";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const FooterComponent = forwardRef((props, ref) => {
  const defaultCenter = { lat: 51.26718, lng: 22.562455 };

  const handleEmailClick = () => {
    window.location.href = "mailto:kontakt@safekohouse.com";
  };

  const redirectToCookies = () => {
    window.location.href = 'https://github.com/JakubJachacz/landing-page';
  };

  const redirectToPrivacyPolitics = () => {
    window.location.href = 'https://github.com/JakubJachacz/landing-page';
  };

  const PhoneNumber = "+48 609 505 111";
  const handlePhoneNumberClick = () => {
    window.location.href = `tel:${PhoneNumber}`;
  };

  const redirectToAkanza = () => {
    window.open('https://akanza.pl/', '_blank');
  }; 
  
  return (
    <FooterContainer>
      <FooterWrapper>
        <QuestionsContainer>
          <Footer1fr>
            <Contact ref={ref}>Kontakt</Contact>
          </Footer1fr>
          <Footer2fr>
            <QuestionsTitle>Masz pytania?</QuestionsTitle> 
            <Info>Safeko house sp. z o.o. <br></br>ul. Mackiewicza 21/31, 20-865 Lublin</Info>
            <InfoContainer><InfoInteractive onClick={handleEmailClick}>
              kontakt@safekohouse.com
            </InfoInteractive>
            <InfoInteractive onClick={handlePhoneNumberClick}>{PhoneNumber}</InfoInteractive></InfoContainer>
            <Info2>NIP: 712 338 48 46 <br></br> KRS: 0000779078 </Info2>
          </Footer2fr>
        </QuestionsContainer>
        <Maps>
          <LoadScript
            googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
          >
            <GoogleMap
              mapContainerStyle={{ width: "100%", height: "400px" }}
              center={defaultCenter}
              zoom={13}
            >
              <Marker position={defaultCenter} />
            </GoogleMap>
          </LoadScript>
        </Maps>
        <FooterTextLeft>
          <FooterTextLeftFirstChild>
            <FooterTextWrap>
              <FooterText>© Safeko house</FooterText>
              <FooterText isAkanza onClick={redirectToAkanza}>realizacja: akanza.pl </FooterText>
            </FooterTextWrap>
          </FooterTextLeftFirstChild>
          <FooterTextLeftSecondChild>
            {/* <FooterText isClickable onClick={redirectToPrivacyPolitics}>Polityka prywatności</FooterText> */}
            <FooterText >Polityka prywatności</FooterText>
          </FooterTextLeftSecondChild>
        </FooterTextLeft>
        <FooterText isLast>
          Stosujemy pliki cookies. Korzystanie ze strony bez zmiany ustawień
          przeglądarki oznacza, że pliki cookies będą zamieszczane w Twoim
          urządzeniu. 
        {/* <ReadMore onClick={redirectToCookies}>Czytaj więcej</ReadMore> */}
        <ReadMore > Czytaj więcej</ReadMore>
        </FooterText>
      </FooterWrapper>
    </FooterContainer>
  );
});

export default FooterComponent;
