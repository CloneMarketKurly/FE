import React, { useState } from "react";
import { Text } from "../elements/Index";
import { useParams } from "react-router-dom";
import styled from "styled-components";

// 리덕스 관련
import { useDispatch, useSelector } from "react-redux";
import { getCookie } from "../shared/Cookie"

import { actionCreators as reviewActions } from "../redux/modules/post";

const ReviewWrite = () => {
  const dispatch = useDispatch();

  // 리덕스 데이터 가지고 오기(상세페이지 정보)
  const detail_post = useSelector((state) => state.post.detail_post);
  const initalValue = detail_post.comments

  // params의 itemId와 commentId를 가지고 온다.
  const params = useParams();
  const itemId = params.itemId;
  const commentId = params.commentId;
  
  // 수정을 알 수 있는 방법
  const is_edit = commentId ? true : false; 

  // 여기서 발생한 문제
  // 서버에서 받아온 제이슨 형식의 데이타 안의 commentId는 보기엔 숫자이지만 숫자형식이 아니었다.
  // 그래서 형식까지 맞춘 것을 찾으려 하니 계속 undefined가 나와서 형식 비교를 없애주니 제대로 나왔다.
  let _review = is_edit ? initalValue.find((p) => p.commentId == commentId) : null;
  

  // 리덕스 데이터 이미지 프리뷰 가져오기
  const preview = useSelector((state) => state.post.preview);
  // console.log("프리뷰", preview)

  const [title, setTitle] = useState(_review ? _review.title : "");
  const [comment, setComment] = useState(_review ? _review.comment : "");
  const [image, setImage] = useState(_review ? _review.image : "")
  
  // 이미지 관련
  const fileInput = React.useRef();

  // 파일 선택
  const selectFile = (e) => {
    const reader = new FileReader();
    const file = fileInput.current.files[0];
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      dispatch(reviewActions.setPreview(reader.result));
    };
  };

  // 추가하기 액션
  const addReview = () => {
    const userId = getCookie("userId")
    let file = fileInput.current.files[0];
    console.log(file)
    if(title === "" || comment === "") {
      window.alert("내용을 모두 작성해주세요.")
      return;
    }

    if(file === null) {
      window.alert("사진을 추가해주세요.")
      return;
    }
    // 리뷰를 추가할 때 addReviewAc로 정보를 넘긴다.
    dispatch(reviewActions.addReviewAC({
        information: { userId: userId, title: title, comment: comment },
        file,
        itemId,
      })
    )
    // history.replace(`/detail/${itemId}`)
  }

  // 수정하기 액션
  const editReview = () => {
    const userId = getCookie("userId")
    let file = fileInput.current.files[0];
    if (title === "" || comment === "") {
      window.alert("내용을 모두 작성해주세요.")
      return;
    }
    // 리뷰를 수정할 때 editReviewAC로 정보를 넘긴다.
    dispatch(reviewActions.editReviewAC({
      information: { userId: userId, title: title, comment: comment },
        file,
        itemId,
        commentId,
    })
    )
  };

   return (
    <React.Fragment>
      <CommentContainer>
        <ReviewTitle>후기 작성</ReviewTitle>
        <Info>작성 시 유의 사항</Info>
        <Line />
        <ImagWrap>
          <ProductImg><img style={{width: "145px"}} src={detail_post.image}/></ProductImg>
          <ProductDesc>{detail_post.title}</ProductDesc>
        </ImagWrap>
        <WriteWrap>
          <TitleWrap>
            <CommentTitle style={{ height: "50px" }}>제목</CommentTitle>
            <CommentTitleBorder1>
              <CommentTitleInput 
                defaultValue={title}
                onChange={(e) => {
                  setTitle(e.target.value)
                  // console.log(title)
                }}
                placeholder="제목을 입력해주세요." />
            </CommentTitleBorder1>
          </TitleWrap>
          <CommentTextWrap>
            <CommentTextTitle style={{ height: "272px" }}>
              후기작성
            </CommentTextTitle>
            <CommentTitleBorder2>
              <CommentTextInput
                defaultValue={comment}
                onChange={(e) => {
                  setComment(e.target.value)
                  // console.log(comment)
                }}
                placeholder=" 자세한 후기는 다른 고객의 구매에 많은 도움이 되며,
          일반식품의 효능이나 효과 등에 오해의 소지가 있는 내용을 작성 시 검토 후 비공개 조치될 수 있습니다. 
          반품/환불 문의는 1:1문의로 가능합니다. 메롱"
              />
            </CommentTitleBorder2>
            <CommentTitleBorder3 />
          </CommentTextWrap>

          <CommentPhotoWrap>
            <CommentPhotoTitle style={{ height: "150px" }}>
              사진등록
            </CommentPhotoTitle>
            <PotoDivWrap>
              <PotoDiv>
                <PhotoUpload>
                  <label>
                    <img
                      src="https://res.kurly.com/pc/ico/1806/img_add_thumb_x2.png"
                      style={{
                        width: "20px",
                        marginTop: "33px",
                        color: "#e2e2e2",
                      }}
                    />
                    <input type="file"
                      onChange={selectFile}
                      ref={fileInput}
                      // disabled={is_uploading}
                    />
                  </label>
                </PhotoUpload>
                <PhotoUpload1>
                  <img style={{width: "80px", marginTop: "5px"}} src={preview ? preview : null}/>
                </PhotoUpload1>
              </PotoDiv>
              <PhotoDesc>
                구매한 상품이 아니거나 캡쳐 사진을 첨부할 경우, 통보없이 삭제 및
                적립 헤택이 취소됩니다.
                <CommentTitleBorder4 />
              </PhotoDesc>
            </PotoDivWrap>  
          </CommentPhotoWrap>
          <div
            className="detail-image"
            style={{ padding: "20px 0", textAlign: "center" }}
          >
            <img style={{ width: "50%" }} />
          </div>
        </WriteWrap>

        <Issue>
          혹시 상품에 문제가 있으셨나요?
          <IssueSpan>1:1 문의하기</IssueSpan>
        </Issue>
        
        {is_edit ?
          <Button>
          <Text
            onClick={editReview} 
            color="#ffffff"
            size="16.5px"
            margin="1px 0 0 0">
            수정하기
          </Text>
        </Button>
        :
        <Button>
          <Text
            onClick={addReview} 
            color="#ffffff"
            size="16.5px"
            margin="1px 0 0 0">
            등록하기
          </Text>
        </Button>

        }
        
      </CommentContainer>
    </React.Fragment>
  );
};

const ReviewTitle = styled.div`
  height: 36px;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  color: #333;
  letter-spacing: -0.5px;
  display: flex;
  margin-left: 28px;
  font-family: 'Noto Sans KR', sans-serif;
`;

const TitleWrap = styled.div`
  height: 55px;
  display: flex;
  align-items: center;
  align-content: center;
  font-family: 'Noto Sans KR', sans-serif;
`;

const WriteWrap = styled.div`
  width: 820px;
  font-family: 'Noto Sans KR', sans-serif;
`;

const Info = styled.span`
  display: flex;
  justify-content: center;
  margin-left: 700px;
  top: -30px;
  padding-right: -20px;
  margin-bottom: 12px;
  font-size: 12px;
  color: #949296;
  line-height: 20px;
  background: url(https://res.kurly.com/pc/ico/1806/ico_question.png) no-repeat
    97% 5px;
`;

const Line = styled.span`
  display: block;
  width: 100%;
  height: 2px;
  background-color: #5f0081;
  margin-top: -2px;
`;

const ImagWrap = styled.div`
  width: 790px;
  height: 190px;
  overflow: hidden;
  padding: 20px 15px;
  /* background-color: pink; */

  display: flex;
  flex-direction: row;
  justify-content: space-between;

`;

const ProductImg = styled.div`
  width: 300px;
  margin-right: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* background-color: yellow; */
`;

const ProductDesc = styled.div`
  padding-top: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: -170px;

  font-size: 20px;
  color: #000;
  line-height: 24px;
  font-weight: 500;
  font-family: 'Noto Sans KR', sans-serif;
  letter-spacing: 0.01em;
  /* background-color: green; */
  width: 650px;
`;

const CommentTitleWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const CommentTitleBorder1 = styled.div`
  border-top: 1px solid #dddfe1;
  padding: 8px 1px 10px 10px;
  width: 710px;
  display: flex;
`;

const CommentTitleBorder2 = styled.div`
  border-top: 1px solid #dddfe1;
  padding: 10px 0px 10px 10px;
  width: 660px;
  display: flex;
  margin-top: 130px;
`;

const CommentTitleBorder3 = styled.div`
  border-top: 1px solid #dddfe1;
  padding: 10px 0px 10px 10px;
  width: 670px;
  display: flex;
  margin-top: 331px;
  margin-left: -670px;
`;

const CommentTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 165px;
  height: 100%;
  border-top: 1px solid #dddfe1;
  background-color: #f7f7f7;
  font-size: 12px;
  color: #666;
  font-family: 'Noto Sans KR', sans-serif;
`;

const CommentTitleInput = styled.input`
  display: flex;
  width: 96%;
  height: 34px;
  padding: 0 10px;
  border: 1px solid #dddfe1;
  font-size: 12px;
  color: #000;
  line-height: 18px;
  outline: none;
  margin-top: -4px;
  font-family: 'Noto Sans KR', sans-serif;
`;

const CommentTextWrap = styled.div`
  /* display: flex;
  height: 272px; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: -133px;
`;

const CommentTextTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 39px;
  padding: 0 20 222px;
  width: 153px;
  height: 100%;
  border-top: 1px solid #dddfe1;
  background-color: #f7f7f7;
  font-size: 12px;
  color: #666;
  text-overflow: hidden;
  text-align: center;
  font-family: 'Noto Sans KR', sans-serif;
`;

const CommentTextInput = styled.textarea`
  display: flex;
  width: 100%;
  height: 234px;
  padding: 0 10px;
  border: 1px solid #dddfe1;
  font-size: 12px;
  color: #000;
  line-height: 18px;
  outline: none;
  margin-top: 7px;
  margin-bottom: 100px;
  font-family: 'Noto Sans KR', sans-serif;

  resize: none;
`;

const CommentPhotoWrap = styled.div`
  /* background-color: blue; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: -133px;

  // 수정
  /* padding-left: 20px; */
`;

const PotoDivWrap = styled.div`
  /* background-color: pink; */
  display: flex;
  flex-direction: column;
  // 핑크
`;

const CommentPhotoTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 41px;
  padding: 0 20 222px;
  // 수정
  width: 150px;
  height: 100%;
  border-top: 1px solid #dddfe1;
  border-bottom: 1px solid #dddfe1;
  background-color: #f7f7f7;
  font-size: 12px;
  color: #666;
  text-overflow: hidden;
  text-align: center;
`;

const PhotoDesc = styled.div`
  /* background-color: yellow; */
  display: flex;
  height: 20px;
  padding: 0 10px;
  font-size: 12px;
  text-align: center;
  word-break: inherit;
  font-family: 'Noto Sans KR', sans-serif;
  color: #666;
  line-height: 18px;
  outline: none;
  /* margin-top: 140px; */
  margin-bottom: -60px;
  margin-left: 9px;
`;

const PotoDiv = styled.div`
  /* background-color: green; */
  display: flex;
  flex-direction: row;
  margin: -42px 0px 0px 10px;
`
const PhotoUpload1 = styled.div`
  /* background-color: yellow; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 80px;
  height: 80px;
  margin: 10px 0;
  border: none;
  margin: 10px;
  margin-top: 40px;
  padding-bottom: 10px;
  display: block;
`;

const PhotoUpload = styled.div`
  /* background-color: yellow; */
  text-align: center;
  width: 80px;
  height: 80px;
  margin: 10px 0;
  border: 1px solid #dddfe1;
  margin: 10px;
  margin-top: 40px;
  padding-bottom: 10px;
  display: block;
  input[type="file"] {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
`;

const CommentTitleBorder4 = styled.div`
  border-top: 1px solid #dddfe1;
  padding: 10px 0px 10px 10px;
  width: 677px;
  display: flex;
  justify-content: center;
  margin-top: 25.5px;
  margin-left: -600px;
`;

const Issue = styled.p`
  font-size: 12px;
  display: flex;
  margin-top: 20px;
  color: #949296;
  font-family: 'Noto Sans KR', sans-serif;
`;

const IssueSpan = styled.span`
  color: #5f0081;
  background: url(https://res.kurly.com/pc/ico/1806/ico_arrow_12x20.png)
    no-repeat 100% 4px;
  background-size: 6px 10px;
  padding: 0 9px 0 5px;
`;

const Button = styled.button`
  margin: 40px auto;
  width: 20%;
  height: 54px;
  border-radius: 3px;
  border: 1px solid #5f0081;
  background-color: #5f0080;
  cursor: pointer;
  display: block;
  justify-content: center;
  overflow: hidden;
  text-align: center;
  font-family: 'Noto Sans KR', sans-serif;
`;

const CommentContainer = styled.div`
  width: 820px;
  margin: 0 auto;
  padding: 0px 0px 60px 0px;
`;

export default ReviewWrite;
