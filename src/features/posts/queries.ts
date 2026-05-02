"use server"

import prisma from "@/lib/prisma"

export async function getAllPosts() {
  return await prisma.post.findMany();
}

export async function getPost(id: string) {
  return await prisma.post.findFirst({
    where: {
      id: id
    }
  });
}