import type { Post } from "@/types/post";
import { ComponentProps } from "react";

import Link from "next/link";

interface PostTable {
  posts: Post[]
}

const postTableHeaders = ["title", "date created", "last update", "status", "views"];

export function PostTable({ posts, className }: PostTable & ComponentProps<"table">) {
  return (
    <table className={ className }>
      <thead className="border">
        <tr>
          { postTableHeaders.map((header) =>
            <th key={ header } className="text-start font-semibold bg-gray-50 py-1 pr-8 first:pl-2 last:pr-2">
              { header }
            </th>
          ) }
        </tr>
      </thead>
      <tbody>
        { posts.map((post) => 
          <tr key={ post.id } className="border">
            <td className="w-sm py-2 pl-2 pr-8">
              <Link href={ `/admin/posts/${post.id}` } className="hover:underline hover:cursor-default">
                { post.title }
              </Link>
            </td>
            <td className="pr-8">
              { post.createdAt.toLocaleString("th-TH") }
            </td>
            <td className="pr-8">
              { post.updatedAt.toLocaleString("th-TH") }
            </td>
            <td className="pr-8">
              <span className="outline px-2 py-0.5">
                { post.published ? "published" : "draft" }
              </span>
            </td>
            <td className="pr-8">
              { 0 }
            </td>
          </tr>
        ) }
      </tbody>
    </table>
  );
}