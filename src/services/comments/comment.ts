import request from "umi-request";

export async function GetCommentList(body: API.CommentListParams, options?: { [key: string]: any }) {
    return request<API.CommentListResp>('/api/v1.0/comment/retrieve-comment-list', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
        ...(options || {}),
    });
}

export async function CommitComment(body: API.CommitCommentParams, options?: { [key: string]: any }) {
    return request<API.CommitCommentResp>('/api/v1.0/comment/publish-comment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
        ...(options || {}),
    });
}


export async function AddCommentLikeNum(body: API.AddCommentLikeNumParams, options?: { [key: string]: any }) {
    return request<API.AddCommentLikeNumResp>('/api/v1.0/comment/add-comment-like-num', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
        ...(options || {}),
    });
}