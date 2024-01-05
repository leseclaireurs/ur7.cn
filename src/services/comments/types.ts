declare namespace API {

    type Comment = {
        id?: number;
        biz_id?: number;
        uid?: number;
        target_uid?: number;
        user?: User;
        target_user?: User;
        content?: string;
        updated_at?: string;
        created_at?: string;
    };

    type User = {
        id?: number;
        username?: string;
        avatar?: string;
    }

    type CommentListParams = {
        biz_id?: number;
        page?: number;
        size?: number;
    };
    type CommentListResp = {
        code?: number;
        message?: string;
        data?: [Comment];
    };


    type CommitCommentParams = {
        biz_id?: number;
        uid?:number;
        target_uid?: number;
        comment?: string;
    }
    type CommitCommentResp = {
        code?: number;
        message?: string;
        data?: Comment;
    }
}
