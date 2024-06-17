export interface Report {
  id: string;
  userId: string;
  type: ReportType;
  commentId?: string;
  postId?: string;
  createdAt: string;
}

export type ReportType = "post" | "comment";
