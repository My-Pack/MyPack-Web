import { ChangeEvent, FormEvent, useState } from "react";
import { instance } from "src/libs/api/api";
import styled from "styled-components";

function Search() {
  const [searchInput, setSerachInput] = useState<string>("");
  // 검색 결과
  const [searchResult, setSearchResult] = useState<IGetMemberData[]>([]);

  // pagination
  const [currentPage, setCurrentPage] = useState<number>(1);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSerachInput(e.target.value);
  };

  // 자동완성 기능
  const updateChange = (e: ChangeEvent<HTMLInputElement>) => {};

  const onSearch = (e: FormEvent) => {
    e.preventDefault();
    if (searchInput !== null || searchInput !== "") {
      instance
        .get<{}, IGetMember>(`/api/v1/members?name=${searchInput}`)
        .then((res) => {
          setSearchResult(res.content);
        });
    }
  };

  return (
    <StyledWrapper>
      <StyledSearchForm onSubmit={(e) => onSearch(e)}>
        <StyledInput
          value={searchInput}
          placeholder="
            검색"
          onChange={onChange}
        />
      </StyledSearchForm>
      {/* 검색결과 */}
      {/* <div>{searchResult.map((item) => item.email)}</div> */}
    </StyledWrapper>
  );
}

export default Search;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const StyledSearchForm = styled.form`
  width: 100%;
`;

const StyledInput = styled.input`
  all: unset;

  background-color: #4d4e504f;
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  font-size: 1.05rem;

  width: 25rem;
  height: 2rem;
  padding: 0.4rem 1.7rem;
  border-radius: ${({ theme }) => theme.borderRadius.input};
`;
