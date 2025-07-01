-- CreateTable
CREATE TABLE "patient" (
    "uuid" CHAR(16) NOT NULL,
    "full_name" CHAR(50) NOT NULL,
    "gender" CHAR(10) NOT NULL,
    "birthdate" CHAR(20) NOT NULL,
    "nationality" CHAR(30) NOT NULL,
    "uuid_relation" CHAR(16),

    CONSTRAINT "patient_pkey" PRIMARY KEY ("uuid")
);
