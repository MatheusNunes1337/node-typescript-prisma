-- CreateTable
CREATE TABLE "Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DECIMAL NOT NULL,
    "Stock" INTEGER NOT NULL,
    "coverImage" TEXT NOT NULL DEFAULT 'default.png'
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_name_key" ON "Product"("name");
