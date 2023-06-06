import axios from "axios";
import { instance } from "src/libs/api/api";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import FormBgcolor from "src/components/Card/Design/FormBgcolor";
import FormImage from "src/components/Card/Design/FormImage";
import FormSummary from "src/components/Card/Design/FormSummary";
import FormTitle from "src/components/Card/Design/FormTitle";
import HowTo from "src/components/Card/Design/HowTo";
import PreviewCard from "src/components/Card/Design/PreviewCard";
import Title from "src/components/Form/Title";
import Nav from "src/components/Nav";
import styled from "styled-components";

function DesignCard() {
  const [title, setTitle] = useState<string>("");
  const [subTitle, setSubTitle] = useState<string>("");
  const [summary, setSummary] = useState<string>("");
  const [theme, setTheme] = useState<string>("");
  const [file, setFile] = useState<File>();
  const [isClick, setIsClick] = useState<boolean>(false);

  // howto
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const router = useRouter();

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onChangeSubTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setSubTitle(e.target.value);
  };

  const onChangeSummary = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setSummary(e.target.value);
  };

  const onChangeImageFile = (e: ChangeEvent<HTMLInputElement>) => {
    const formData = new FormData();
    const target = e.currentTarget;
    const files = (target.files as FileList)[0];
    formData.append("file", e.currentTarget.value[0]);
    setFile(files);
  };

  function onSubmit() {
    if (file === undefined) {
      router.push("/");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    console.log(localStorage.getItem("accessToken"));

    instance
      .post(`/api/v1/images`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          withCredentials: true,
        },
      })
      .then((resImg) => {
        console.log({
          title: title,
          content: summary,
          imageId: resImg.id as number,
          color: theme,
          theme: "christmas",
        });
        instance
          .post(
            `/api/v1/cards`,
            {
              title: title,
              content: summary,
              imageId: resImg.id as number,
              color: theme,
              theme: "christmas",
            },
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                withCredentials: true,
              },
            },
          )
          .then((res) => {
            console.log(res);
            router.push("/");
          })
          .catch((e) => {
            console.log(e);
          });
      })
      .catch((e) => {
        console.log(e);
      });

    // instance
    //   .post(`/api/v1/cards`, formData, {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //       Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    //       withCredentials: true,
    //     },
    //   })
    //   .then((res) => {
    //     res;
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
  }
  const { handleSubmit } = useForm<IImage>();

  const [previewImage, setPreviewImage] = useState<string>("");

  const saveFileImage = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files !== null) {
      setPreviewImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const onClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen ? <HowTo onClick={onClick} /> : null}
      <Nav />
      <StyledHowToBtnWrapper>
        <StyleHowToBtn onClick={onClick}>HowTo</StyleHowToBtn>
      </StyledHowToBtnWrapper>

      <StyledWrapper>
        <StyledCardWrapper>
          <PreviewCard
            onClick={() => setIsClick(!isClick)}
            active={isClick ? true : false}
            title={title}
            subTitle={subTitle}
            content={summary}
            color={theme}
            img={previewImage}
          />
        </StyledCardWrapper>
        <StyledFormWrapper
          onSubmit={handleSubmit(onSubmit)}
          encType="multipart/form-data"
          method="post"
        >
          <Title title="제목" subTitle="카드를 제목을 지어주세요" essential />
          <FormTitle
            onClick={() => setIsClick(true)}
            onChange={onChangeTitle}
          />
          <Title title="부제목" subTitle="카드의 부제목을 지어주세요" />
          <FormTitle
            onClick={() => setIsClick(true)}
            onChange={onChangeSubTitle}
          />
          <FormSummary
            onClick={() => setIsClick(true)}
            onChange={onChangeSummary}
          />
          <Title title="테마" subTitle="카드의 테마를 정할 수 있어요" />
          <StyledBorderWrapper
            onChange={(e) => setTheme(e.target.value)}
            value={theme}
          >
            <FormBgcolor />
          </StyledBorderWrapper>

          <FormImage
            onClick={() => setIsClick(false)}
            saveFileImage={saveFileImage}
            onChange={onChangeImageFile}
          />
          <StyledButtonWrapper>
            <StyledButton>저장하기</StyledButton>
          </StyledButtonWrapper>
        </StyledFormWrapper>
      </StyledWrapper>
    </>
  );
}

export default DesignCard;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  gap: 16rem;
  margin-top: 3rem;
`;

const StyledCardWrapper = styled.div``;

const StyledFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: 40rem;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 5rem 0;
`;

const StyledButton = styled.button`
  all: unset;
  width: fit-content;
  padding: 0.6rem 2rem;
  background-color: ${({ theme }) => theme.color.neonMint};
  color: ${({ theme }) => theme.color.black};
  border-radius: ${({ theme }) => theme.borderRadius.button};
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  :hover {
    background-color: ${({ theme }) => theme.color.neonPink};
    color: ${({ theme }) => theme.color.white};
    transition: all ease-out 0.5s;
    cursor: pointer;
  }
`;

const StyledBorderWrapper = styled.select`
  all: unset;
  padding: 1rem;
  background-color: ${({ theme }) => theme.color.borderBackground};
  border-radius: ${({ theme }) => theme.borderRadius.input};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  font-size: 0.9rem;
  letter-spacing: 0.6px;
  margin-bottom: 2.3rem;
`;

const StyledHowToBtnWrapper = styled.div`
  position: absolute;
  right: 0px;
  margin: 0rem 2rem;
`;

const StyleHowToBtn = styled.button`
  all: unset;
  padding: 0.5rem 1rem;

  border-radius: ${({ theme }) => theme.borderRadius.input};
  background-color: rgb(112, 112, 112, 0.2);
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);

  font-size: 0.7rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  transition: all 0.3s ease 0s;

  :hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.neonPink};
    box-shadow: 0px 15px 20px #5c1d5f;
    transform: translateY(-3px);
  }
`;
