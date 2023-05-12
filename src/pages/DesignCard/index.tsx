import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import FormImage from "src/components/Card/Design/FormImage";
import FormSummary from "src/components/Card/Design/FormSummary";
import FormTitle from "src/components/Card/Design/FormTitle";
import PreviewCard from "src/components/Card/Design/PreviewCard";
import Nav from "src/components/Nav";
import { instance } from "src/libs/api/api";
import styled from "styled-components";

function DesignCard() {
  const [title, setTitle] = useState<string>("");
  const [summary, setSummary] = useState<string>("");
  const [boreder, setBorder] = useState<string>("");
  const [file, setFile] = useState<File>();

  const router = useRouter();

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onChangeSummary = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setSummary(e.target.value);
  };

  const onChangeBorderColor = (e: ChangeEvent<HTMLInputElement>) => {
    setBorder(e.target.value);
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

    instance
      .post<{}, IImage>(`/api/v1/images`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          withCredentials: true,
        },
      })
      .then(() => {
        router.push("/");
      });
  }
  const { handleSubmit } = useForm<IImage>();

  const [previewImage, setPreviewImage] = useState<string>("");

  const saveFileImage = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files !== null) {
      setPreviewImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <>
      <Nav />
      <div>
        {/* <StyledTitle>Card Design</StyledTitle> */}
        <StyledWrapper>
          <PreviewCard
            title={title}
            summary={summary}
            color="blue"
            previewImage={previewImage}
          />
          <StyledFormWrapper>
            <form
              onSubmit={handleSubmit(onSubmit)}
              encType="multipart/form-data"
              method="post"
            >
              <FormTitle onChange={onChangeTitle} />
              <FormSummary onChange={onChangeSummary} />
              {/* <FormBorderColor /> */}
              <FormImage
                saveFileImage={saveFileImage}
                onChange={onChangeImageFile}
              />
              <StyledButton>추가하기</StyledButton>
            </form>
          </StyledFormWrapper>
        </StyledWrapper>
      </div>
    </>
  );
}

export default DesignCard;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 100%;
  height: 100%;
  gap: 5rem;
`;

const StyledFormWrapper = styled.div``;

const StyledButton = styled.button`
  all: unset;
`;
