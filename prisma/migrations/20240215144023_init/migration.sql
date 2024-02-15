-- CreateTable
CREATE TABLE "Expense" (
    "way" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "expenseID" TEXT NOT NULL,

    CONSTRAINT "Expense_pkey" PRIMARY KEY ("expenseID")
);

-- CreateIndex
CREATE UNIQUE INDEX "Expense_expenseID_key" ON "Expense"("expenseID");
