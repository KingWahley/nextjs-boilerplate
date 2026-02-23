"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Plus, User } from "lucide-react";
import { StoryViewer } from "@/components/ui/story-viewer";
import { cn } from "@/lib/utils";



const users = [
  {
    username: "Yuki Tanaka",
    avatar: "https://api.dicebear.com/6.x/adventurer-neutral/svg?seed=Yuki+Tanaka",
    timestamp: new Date(Date.now() - 25 * 60 * 1000).toISOString(),
    stories: [
      { id: "yuki-1", type: "image", src: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&h=1200&fit=crop" },
      { id: "yuki-2", type: "video", src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" },
      { id: "yuki-3", type: "image", src: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&h=1200&fit=crop" },
    ],
  },
  {
    username: "Matt Cooper",
    avatar: "https://api.dicebear.com/6.x/adventurer-neutral/svg?seed=Matt+Cooper",
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    stories: [
      { id: "matt-1", type: "video", src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" },
      { id: "matt-2", type: "image", src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=1200&fit=crop" },
    ],
  },
  {
    username: "Sofia Martinez",
    avatar: "https://api.dicebear.com/6.x/adventurer-neutral/svg?seed=Sofia+Martinez",
    timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
    stories: [
      { id: "sofia-1", type: "image", src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=1200&fit=crop" },
      { id: "sofia-2", type: "image", src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=1200&fit=crop" },
      { id: "sofia-3", type: "video", src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" },
      { id: "sofia-4", type: "image", src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&h=1200&fit=crop" },
    ],
  },
  {
    username: "Richard Weber",
    avatar: "https://api.dicebear.com/6.x/adventurer-neutral/svg?seed=Richard+Weber",
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
    stories: [
      { id: "richard-1", type: "image", src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=1200&fit=crop" },
      { id: "richard-2", type: "video", src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4" },
    ],
  },
  {
    username: "Emma O'Brien",
    avatar: "https://api.dicebear.com/6.x/adventurer-neutral/svg?seed=Emma+OBrien",
    timestamp: new Date(Date.now() - 7 * 60 * 60 * 1000).toISOString(),
    stories: [
      { id: "emma-1", type: "image", src: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&h=1200&fit=crop" },
      { id: "emma-2", type: "video", src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4" },
    ],
  },
  {
    username: "Jake Morrison",
    avatar: "https://api.dicebear.com/6.x/adventurer-neutral/svg?seed=Jake+Morrison",
    timestamp: new Date(Date.now() - 10 * 60 * 60 * 1000).toISOString(),
    stories: [
      { id: "jake-1", type: "image", src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=1200&fit=crop" },
      { id: "jake-2", type: "video", src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" },
      { id: "jake-3", type: "image", src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=1200&fit=crop" },
    ],
  },
  {
    username: "Alex Chen",
    avatar: "https://api.dicebear.com/6.x/adventurer-neutral/svg?seed=Alex+Chen",
    timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
    stories: [
      { id: "alex-1", type: "video", src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" },
      { id: "alex-2", type: "video", src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" },
    ],
  },
];

export default function StoryView() {
  return (
    <div className="w-full max-w-3xl mx-auto px-4">
      {/* <h3 className="text-sm font-semibold mb-3 px-1">Recent stories</h3> */}
      <div className="flex gap-4 overflow-x-auto py-2 px-1 [&::-webkit-scrollbar]:hidden md:[&::-webkit-scrollbar]:block md:[&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-muted-foreground/20 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-muted-foreground/30">
       
        {users.map((user) => (
          <StoryViewer
            key={user.username}
            stories={user.stories}
            username={user.username}
            avatar={user.avatar}
            timestamp={user.timestamp}
            onStoryView={() => {}}
            onAllStoriesViewed={() => {}}
          />
        ))}
      </div>
    </div>
  );
}
