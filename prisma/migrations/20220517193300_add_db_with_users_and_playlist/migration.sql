-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "playlistsId" INTEGER,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Playlists" (
    "id" SERIAL NOT NULL,
    "music" TEXT NOT NULL,

    CONSTRAINT "Playlists_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Playlists_music_key" ON "Playlists"("music");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_playlistsId_fkey" FOREIGN KEY ("playlistsId") REFERENCES "Playlists"("id") ON DELETE SET NULL ON UPDATE CASCADE;
