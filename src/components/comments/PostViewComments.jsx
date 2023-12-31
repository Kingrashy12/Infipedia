import React from "react";
import { StyledViewedPostCommentSection } from "../../styles/components/community/viewedpost.styled";
import ViewedPostComments from "../form/ViewedPostComments";
import ViewedPostCommentsContainer from "./ViewedPostCommentsContainer";

const PostViewComments = ({ post, isLoading, comments }) => {
  return (
    <StyledViewedPostCommentSection>
      <ViewedPostComments post={post} />
      <div className="flex flex-col gap-3">
        {comments?.map((comment, index) => (
          <ViewedPostCommentsContainer
            comment={comment}
            isLoading={isLoading}
          />
        ))}
      </div>
    </StyledViewedPostCommentSection>
  );
};

export default PostViewComments;
